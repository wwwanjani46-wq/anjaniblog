import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as Route$3, d as postQO } from "./router-BeiFDAMq.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./client-DR7fDk_5.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./server-CAST0GV5.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
function PostPage() {
  const {
    slug
  } = Route$3.useParams();
  const {
    data: post
  } = useSuspenseQuery(postQO(slug));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 border-b border-border pb-10 text-center", children: [
      post.category && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
        slug: post.category.slug
      }, className: "mb-6 inline-block text-xs uppercase tracking-[0.3em] text-accent hover:underline", children: post.category.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-medium leading-tight md:text-6xl", children: post.title }),
      post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl font-display text-xl italic text-muted-foreground", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
        new Date(post.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        " · By Anjani"
      ] })
    ] }),
    post.cover_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.cover_image_url, alt: post.title, className: "mb-12 w-full", loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-editorial", children: post.content.split(/\n\n+/).map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: para }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-20 border-t border-border pt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "border-b border-foreground pb-1 text-sm hover:text-accent hover:border-accent", children: "← Back to the journal" }) })
  ] });
}
export {
  PostPage as component
};
