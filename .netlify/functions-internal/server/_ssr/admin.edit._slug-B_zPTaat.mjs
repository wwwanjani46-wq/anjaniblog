import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, b as adminGetPost } from "./admin.functions-DnRH5MCc.mjs";
import { P as PostEditor } from "./post-editor-Bp0kyGib.mjs";
import { e as Route } from "./router-BeiFDAMq.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-CAST0GV5.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-Sebx2HHk.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/zod.mjs";
import "./client-DR7fDk_5.mjs";
function EditPage() {
  const {
    slug
  } = Route.useParams();
  const fetchPost = useServerFn(adminGetPost);
  const q = useQuery({
    queryKey: ["adminPost", slug],
    queryFn: () => fetchPost({
      data: {
        slug
      }
    })
  });
  if (q.isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 py-20 text-muted-foreground", children: "Loading…" });
  if (q.error || !q.data) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 py-20 text-destructive", children: "Not found." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PostEditor, { initial: q.data });
}
export {
  EditPage as component
};
