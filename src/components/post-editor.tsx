import { useEffect, useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { savePost } from "@/lib/admin.functions";
import { listCategories } from "@/lib/blog.functions";
import { toast } from "sonner";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 100);
}

export type PostInitial = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string | null;
  content?: string;
  cover_image_url?: string | null;
  category_id?: string | null;
  published?: boolean;
};

export function PostEditor({ initial }: { initial?: PostInitial }) {
  const navigate = useNavigate();
  const save = useServerFn(savePost);
  const fetchCats = useServerFn(listCategories);
  const cats = useQuery({ queryKey: ["categories"], queryFn: () => fetchCats() });

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(initial?.cover_image_url ?? "");
  const [categoryId, setCategoryId] = useState(initial?.category_id ?? "");
  const [published, setPublished] = useState(initial?.published ?? false);
  const [slugTouched, setSlugTouched] = useState(!!initial?.slug);

  useEffect(() => {
    if (!slugTouched) setSlug(slugify(title));
  }, [title, slugTouched]);

  const mut = useMutation({
    mutationFn: () =>
      save({
        data: {
          id: initial?.id,
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt?.trim() || null,
          content,
          cover_image_url: coverImageUrl?.trim() || null,
          category_id: categoryId || null,
          published,
        },
      }),
    onSuccess: () => {
      toast.success(initial?.id ? "Updated" : "Created");
      navigate({ to: "/admin" });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed"),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mut.mutate();
      }}
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <div className="mb-10 flex items-center justify-between">
        <Link to="/admin" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em]">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="accent-accent"
            />
            Published
          </label>
          <button
            type="submit"
            disabled={mut.isPending}
            className="bg-foreground px-5 py-3 text-background hover:opacity-90 disabled:opacity-50"
          >
            {mut.isPending ? "Saving…" : initial?.id ? "Save changes" : "Publish entry"}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <input
          required
          maxLength={200}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-b border-border bg-transparent py-3 font-display text-4xl outline-none focus:border-accent"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Slug</label>
            <input
              required
              pattern="^[a-z0-9-]+$"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugTouched(true);
              }}
              className="mt-2 w-full border-b border-border bg-transparent py-2 font-mono text-sm outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Category</label>
            <select
              value={categoryId ?? ""}
              onChange={(e) => setCategoryId(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
            >
              <option value="">— none —</option>
              {cats.data?.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Cover image URL</label>
          <input
            type="url"
            value={coverImageUrl ?? ""}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            placeholder="https://…"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Excerpt</label>
          <textarea
            maxLength={500}
            value={excerpt ?? ""}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Content (separate paragraphs with a blank line)
          </label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="mt-2 w-full border border-border bg-card p-4 text-base leading-relaxed outline-none focus:border-accent"
          />
        </div>
      </div>
    </form>
  );
}