import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, d as deletePost, c as checkIsAdmin, a as adminListPosts } from "./admin.functions-DnRH5MCc.mjs";
import { s as supabase } from "./client-DR7fDk_5.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./router-BeiFDAMq.mjs";
import "./server-CAST0GV5.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./auth-middleware-Sebx2HHk.mjs";
function AdminHome() {
  const navigate = useNavigate();
  const router = useRouter();
  const fetchCheck = useServerFn(checkIsAdmin);
  const fetchPosts = useServerFn(adminListPosts);
  const removeFn = useServerFn(deletePost);
  const adminCheck = useQuery({
    queryKey: ["isAdmin"],
    queryFn: () => fetchCheck()
  });
  const postsQ = useQuery({
    queryKey: ["adminPosts"],
    queryFn: () => fetchPosts(),
    enabled: adminCheck.data?.isAdmin === true
  });
  const del = useMutation({
    mutationFn: (id) => removeFn({
      data: {
        id
      }
    }),
    onSuccess: () => {
      toast.success("Post deleted");
      postsQ.refetch();
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed")
  });
  async function signOut() {
    await supabase.auth.signOut();
    router.invalidate();
    navigate({
      to: "/auth"
    });
  }
  if (adminCheck.isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 py-20 text-muted-foreground", children: "Loading…" });
  }
  if (adminCheck.data && !adminCheck.data.isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl italic", children: "Not authorized." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "This account isn't an admin." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: signOut, className: "mt-6 text-sm underline", children: "Sign out" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-medium md:text-5xl", children: "All entries" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/new", className: "bg-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] text-background hover:opacity-90", children: "New entry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: signOut, className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground", children: "Sign out" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: postsQ.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading posts…" }) : !postsQ.data || postsQ.data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic text-muted-foreground", children: "No entries yet. Write the first one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: postsQ.data.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase tracking-[0.2em] ${p.published ? "text-accent" : "text-muted-foreground"}`, children: p.published ? "Published" : "Draft" }),
          p.category && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
            "· ",
            p.category.name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-medium", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "/",
          p.slug
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-4 text-xs uppercase tracking-[0.2em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/edit/$slug", params: {
          slug: p.slug
        }, className: "text-foreground hover:text-accent", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          if (confirm(`Delete "${p.title}"?`)) del.mutate(p.id);
        }, className: "text-destructive hover:opacity-70", children: "Delete" })
      ] })
    ] }, p.id)) }) })
  ] });
}
export {
  AdminHome as component
};
