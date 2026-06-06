import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { adminGetPost } from "@/lib/admin.functions";
import { PostEditor } from "@/components/post-editor";

export const Route = createFileRoute("/_authenticated/admin/edit/$slug")({
  head: () => ({ meta: [{ title: "Edit entry — designwithanjani" }, { name: "robots", content: "noindex" }] }),
  component: EditPage,
});

function EditPage() {
  const { slug } = Route.useParams();
  const fetchPost = useServerFn(adminGetPost);
  const q = useQuery({ queryKey: ["adminPost", slug], queryFn: () => fetchPost({ data: { slug } }) });

  if (q.isLoading) return <div className="mx-auto max-w-3xl px-6 py-20 text-muted-foreground">Loading…</div>;
  if (q.error || !q.data) return <div className="mx-auto max-w-3xl px-6 py-20 text-destructive">Not found.</div>;

  return <PostEditor initial={q.data} />;
}