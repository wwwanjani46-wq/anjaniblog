import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anjani — designwithanjani" },
      { name: "description", content: "Anjani is a graphic designer and video editor. About her work, process, and the journal." },
      { property: "og:title", content: "About Anjani — designwithanjani" },
      { property: "og:description", content: "Graphic designer and video editor." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
      <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
        I make things <span className="italic text-accent">look</span> &amp; <span className="italic text-accent">move</span>.
      </h1>
      <div className="prose-editorial mt-12">
        <p>
          I'm Anjani — a graphic designer and video editor based in India. I work on visual identities,
          posters, social campaigns and edits for brands and independent creators.
        </p>
        <p>
          This journal is where I keep notes: the references I'm circling, the way a cut decides itself,
          how a typeface earns its place on a page. I write it the way I'd talk about the work with a
          friend — slowly, and on purpose.
        </p>
        <p>
          You can see new work on Instagram at{" "}
          <a
            href="https://www.instagram.com/designwithanjani.in/"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            @designwithanjani.in
          </a>
          , and reach out there for projects.
        </p>
      </div>
    </div>
  );
}