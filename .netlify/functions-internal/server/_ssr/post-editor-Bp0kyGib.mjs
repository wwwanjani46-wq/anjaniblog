import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, s as savePost } from "./admin.functions-DnRH5MCc.mjs";
import { l as listCategories } from "./router-BeiFDAMq.mjs";
import { t as toast } from "../_libs/sonner.mjs";
function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 100);
}
function PostEditor({ initial }) {
  const navigate = useNavigate();
  const save = useServerFn(savePost);
  const fetchCats = useServerFn(listCategories);
  const cats = useQuery({ queryKey: ["categories"], queryFn: () => fetchCats() });
  const [title, setTitle] = reactExports.useState(initial?.title ?? "");
  const [slug, setSlug] = reactExports.useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = reactExports.useState(initial?.excerpt ?? "");
  const [content, setContent] = reactExports.useState(initial?.content ?? "");
  const [coverImageUrl, setCoverImageUrl] = reactExports.useState(initial?.cover_image_url ?? "");
  const [categoryId, setCategoryId] = reactExports.useState(initial?.category_id ?? "");
  const [published, setPublished] = reactExports.useState(initial?.published ?? false);
  const [slugTouched, setSlugTouched] = reactExports.useState(!!initial?.slug);
  reactExports.useEffect(() => {
    if (!slugTouched) setSlug(slugify(title));
  }, [title, slugTouched]);
  const mut = useMutation({
    mutationFn: () => save({
      data: {
        id: initial?.id,
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt?.trim() || null,
        content,
        cover_image_url: coverImageUrl?.trim() || null,
        category_id: categoryId || null,
        published
      }
    }),
    onSuccess: () => {
      toast.success(initial?.id ? "Updated" : "Created");
      navigate({ to: "/admin" });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        mut.mutate();
      },
      className: "mx-auto max-w-3xl px-6 py-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground", children: "← Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.2em]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: published,
                  onChange: (e) => setPublished(e.target.checked),
                  className: "accent-accent"
                }
              ),
              "Published"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: mut.isPending,
                className: "bg-foreground px-5 py-3 text-background hover:opacity-90 disabled:opacity-50",
                children: mut.isPending ? "Saving…" : initial?.id ? "Save changes" : "Publish entry"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              maxLength: 200,
              placeholder: "Title",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              className: "w-full border-b border-border bg-transparent py-3 font-display text-4xl outline-none focus:border-accent"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Slug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  required: true,
                  pattern: "^[a-z0-9-]+$",
                  value: slug,
                  onChange: (e) => {
                    setSlug(e.target.value);
                    setSlugTouched(true);
                  },
                  className: "mt-2 w-full border-b border-border bg-transparent py-2 font-mono text-sm outline-none focus:border-accent"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: categoryId ?? "",
                  onChange: (e) => setCategoryId(e.target.value),
                  className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— none —" }),
                    cats.data?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.name }, c.id))
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Cover image URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                value: coverImageUrl ?? "",
                onChange: (e) => setCoverImageUrl(e.target.value),
                placeholder: "https://…",
                className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Excerpt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                maxLength: 500,
                value: excerpt ?? "",
                onChange: (e) => setExcerpt(e.target.value),
                rows: 2,
                className: "mt-2 w-full border-b border-border bg-transparent py-2 text-base outline-none focus:border-accent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Content (separate paragraphs with a blank line)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                value: content,
                onChange: (e) => setContent(e.target.value),
                rows: 20,
                className: "mt-2 w-full border border-border bg-card p-4 text-base leading-relaxed outline-none focus:border-accent"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  PostEditor as P
};
