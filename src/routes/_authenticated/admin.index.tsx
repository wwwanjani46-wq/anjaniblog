import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { adminListPosts, deletePost, checkIsAdmin } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/")({
  head: () => ({ meta: [{ title: "Admin — designwithanjani" }, { name: "robots", content: "noindex" }] }),
  component: AdminHome,
});

function AdminHome() {
  const navigate = useNavigate();
  const router = useRouter();
  const fetchCheck = useServerFn(checkIsAdmin);
  const fetchPosts = useServerFn(adminListPosts);
  const removeFn = useServerFn(deletePost);

  const adminCheck = useQuery({ queryKey: ["isAdmin"], queryFn: () => fetchCheck() });
  const postsQ = useQuery({
    queryKey: ["adminPosts"],
    queryFn: () => fetchPosts(),
    enabled: adminCheck.data?.isAdmin === true,
  });

  const del = useMutation({
    mutationFn: (id: string) => removeFn({ data: { id } }),
    onSuccess: () => {
      toast.success("Post deleted");
      postsQ.refetch();
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed"),
  });

  async function signOut() {
    await supabase.auth.signOut();
    router.invalidate();
    navigate({ to: "/auth" });
  }

  if (adminCheck.isLoading) {
    return <div className="mx-auto max-w-4xl px-6 py-20 text-muted-foreground">Loading…</div>;
  }
  if (adminCheck.data && !adminCheck.data.isAdmin) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-display text-3xl italic">Not authorized.</p>
        <p className="mt-3 text-muted-foreground">This account isn't an admin.</p>
        <button onClick={signOut} className="mt-6 text-sm underline">Sign out</button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-end justify-between border-b border-border pb-8">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Studio</p>
          <h1 className="font-display text-4xl font-medium md:text-5xl">All entries</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/admin/new"
            className="bg-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] text-background hover:opacity-90"
          >
            New entry
          </Link>
          <button onClick={signOut} className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
            Sign out
          </button>
        </div>
      </div>

      <div className="mt-10">
        {postsQ.isLoading ? (
          <p className="text-muted-foreground">Loading posts…</p>
        ) : !postsQ.data || postsQ.data.length === 0 ? (
          <p className="font-display text-2xl italic text-muted-foreground">No entries yet. Write the first one.</p>
        ) : (
          <ul className="divide-y divide-border">
            {postsQ.data.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-6 py-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] ${p.published ? "text-accent" : "text-muted-foreground"}`}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                    {p.category && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        · {p.category.name}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-xl font-medium">{p.title}</h2>
                  <p className="text-xs text-muted-foreground">/{p.slug}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 text-xs uppercase tracking-[0.2em]">
                  <Link
                    to="/admin/edit/$slug"
                    params={{ slug: p.slug }}
                    className="text-foreground hover:text-accent"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${p.title}"?`)) del.mutate(p.id);
                    }}
                    className="text-destructive hover:opacity-70"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}