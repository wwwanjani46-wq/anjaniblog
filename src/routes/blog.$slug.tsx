import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/blog.functions";

const postQO = (slug: string) =>
  queryOptions({
    queryKey: ["post", slug],
    queryFn: async () => {
      try {
        return await getPostBySlug({ data: { slug } });
      } catch (e) {
        if (e instanceof Error && e.message.includes("NOT_FOUND")) throw notFound();
        throw e;
      }
    },
  });

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params, context }) => context.queryClient.ensureQueryData(postQO(params.slug)),
  head: ({ params, loaderData }) => {
    const post = loaderData as Awaited<ReturnType<typeof getPostBySlug>> | undefined;
    if (!post) {
      return { meta: [{ title: "Post — designwithanjani" }] };
    }
    return {
      meta: [
        { title: `${post.title} — designwithanjani` },
        { name: "description", content: post.excerpt || post.title },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt || post.title },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        ...(post.cover_image_url ? [{ property: "og:image", content: post.cover_image_url }] : []),
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.cover_image_url ?? undefined,
            datePublished: post.created_at,
            author: { "@type": "Person", name: "Anjani" },
          }),
        },
      ],
    };
  },
  component: PostPage,
  errorComponent: () => <div className="p-12 text-center text-muted-foreground">Couldn't load this entry.</div>,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-display text-3xl italic">Entry not found.</p>
      <Link to="/blog" className="mt-6 inline-block border-b border-foreground pb-1 text-sm hover:text-accent hover:border-accent">Back to journal</Link>
    </div>
  ),
});

function PostPage() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQO(slug));

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12 border-b border-border pb-10 text-center">
        {post.category && (
          <Link
            to="/category/$slug"
            params={{ slug: post.category.slug }}
            className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-accent hover:underline"
          >
            {post.category.name}
          </Link>
        )}
        <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mx-auto mt-6 max-w-xl font-display text-xl italic text-muted-foreground">
            {post.excerpt}
          </p>
        )}
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · By Anjani
        </p>
      </header>

      {post.cover_image_url && (
        <img
          src={post.cover_image_url}
          alt={post.title}
          className="mb-12 w-full"
          loading="lazy"
        />
      )}

      <div className="prose-editorial">
        {post.content.split(/\n\n+/).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <footer className="mt-20 border-t border-border pt-10 text-center">
        <Link to="/blog" className="border-b border-foreground pb-1 text-sm hover:text-accent hover:border-accent">
          ← Back to the journal
        </Link>
      </footer>
    </article>
  );
}