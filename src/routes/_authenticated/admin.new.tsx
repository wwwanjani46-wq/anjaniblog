import { createFileRoute } from "@tanstack/react-router";
import { PostEditor } from "@/components/post-editor";

export const Route = createFileRoute("/_authenticated/admin/new")({
  head: () => ({ meta: [{ title: "New entry — designwithanjani" }, { name: "robots", content: "noindex" }] }),
  component: () => <PostEditor />,
});