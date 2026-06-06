import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Route$4, a as catQO } from "./router-BeiFDAMq.mjs";
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
function CategoryPage() {
  const {
    slug
  } = Route$4.useParams();
  const {
    data
  } = useSuspenseQuery(catQO(slug));
  const {
    category,
    posts
  } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-16 border-b border-border pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.3em] text-accent", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl font-medium leading-tight md:text-7xl", children: category.name }),
      category.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl font-display text-xl italic text-muted-foreground", children: category.description })
    ] }),
    posts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic text-muted-foreground", children: "No entries in this category yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "group block", children: [
      p.cover_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover_image_url, alt: p.title, loading: "lazy", className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-medium leading-snug group-hover:text-accent", children: p.title }),
      p.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: p.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: new Date(p.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }) })
    ] }) }, p.id)) })
  ] });
}
export {
  CategoryPage as component
};
