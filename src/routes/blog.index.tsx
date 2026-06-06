import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { listPosts, listCategories } from "@/lib/blog.functions";

const postsQO = queryOptions({ queryKey: ["posts"], queryFn: () => listPosts() });
const categoriesQO = queryOptions({ queryKey: ["categories"], queryFn: () => listCategories() });

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — designwithanjani" },
      { name: "description", content: "All articles from designwithanjani — graphic design, video editing, process and inspiration." },
      { property: "og:title", content: "Journal — designwithanjani" },
      { property: "og:description", content: "All articles from designwithanjani." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  loader: ({ context }) =>
    Promise.all([
      context.queryClient.ensureQueryData(postsQO),
      context.queryClient.ensureQueryData(categoriesQO),
    ]),
  component: BlogIndex,
  errorComponent: () => <div className="p-12 text-center text-muted-foreground">Couldn't load posts.</div>,
  notFoundComponent: () => <div className="p-12 text-center">Not found.</div>,
});

function BlogIndex() {
  const { data: posts } = useSuspenseQuery(postsQO);
  const { data: categories } = useSuspenseQuery(categoriesQO);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-16 border-b border-border pb-10">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Journal</p>
        <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">All entries</h1>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="italic text-muted-foreground transition-colors hover:text-accent"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </header>

      {posts.length === 0 ? (
        <p className="font-display text-2xl italic text-muted-foreground">No entries yet.</p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((p) => (
            <li key={p.id}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-2">
                  {new Date(p.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
                </div>
                <div className="md:col-span-7">
                  {p.category && (
                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                      {p.category.name}
                    </p>
                  )}
                  <h2 className="font-display text-2xl font-medium leading-snug transition-colors group-hover:text-accent md:text-3xl">
                    {p.title}
                  </h2>
                  {p.excerpt && (
                    <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                  )}
                </div>
                {p.cover_image_url && (
                  <div className="md:col-span-3 overflow-hidden">
                    <img
                      src={p.cover_image_url}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}