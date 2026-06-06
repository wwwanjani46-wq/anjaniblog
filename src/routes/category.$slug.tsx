import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCategoryWithPosts } from "@/lib/blog.functions";

const catQO = (slug: string) =>
  queryOptions({
    queryKey: ["category", slug],
    queryFn: async () => {
      try {
        return await getCategoryWithPosts({ data: { slug } });
      } catch (e) {
        if (e instanceof Error && e.message.includes("NOT_FOUND")) throw notFound();
        throw e;
      }
    },
  });

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params, context }) => context.queryClient.ensureQueryData(catQO(params.slug)),
  head: ({ params, loaderData }) => {
    const data = loaderData as Awaited<ReturnType<typeof getCategoryWithPosts>> | undefined;
    const name = data?.category.name ?? "Category";
    const desc = data?.category.description || `Articles in ${name} from designwithanjani.`;
    return {
      meta: [
        { title: `${name} — designwithanjani` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} — designwithanjani` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/category/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
    };
  },
  component: CategoryPage,
  errorComponent: () => <div className="p-12 text-center text-muted-foreground">Couldn't load this category.</div>,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-display text-3xl italic">Category not found.</p>
      <Link to="/blog" className="mt-6 inline-block border-b border-foreground pb-1 text-sm hover:text-accent hover:border-accent">Back to journal</Link>
    </div>
  ),
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(catQO(slug));
  const { category, posts } = data;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-16 border-b border-border pb-10">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">Category</p>
        <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">{category.name}</h1>
        {category.description && (
          <p className="mt-6 max-w-2xl font-display text-xl italic text-muted-foreground">
            {category.description}
          </p>
        )}
      </header>

      {posts.length === 0 ? (
        <p className="font-display text-2xl italic text-muted-foreground">No entries in this category yet.</p>
      ) : (
        <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.id}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                {p.cover_image_url && (
                  <div className="mb-5 overflow-hidden">
                    <img
                      src={p.cover_image_url}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <h2 className="font-display text-xl font-medium leading-snug group-hover:text-accent">
                  {p.title}
                </h2>
                {p.excerpt && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>}
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {new Date(p.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}