import { c as createServerRpc } from "./createServerRpc-lL-9sh39.mjs";
import { c as createServerFn } from "./server-CAST0GV5.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const slugSchema = objectType({
  slug: stringType().min(1).max(200)
});
const listPosts_createServerFn_handler = createServerRpc({
  id: "a0c920d85f63c5b0f617c0178cabe0a02827da8bde39080079d1bad9d3bad89b",
  name: "listPosts",
  filename: "src/lib/blog.functions.ts"
}, (opts) => listPosts.__executeServer(opts));
const listPosts = createServerFn({
  method: "GET"
}).handler(listPosts_createServerFn_handler, async () => {
  const {
    supabaseAdmin
  } = await import("./client.server-bOweUpA6.mjs");
  const {
    data,
    error
  } = await supabaseAdmin.from("posts").select("id, title, slug, excerpt, cover_image_url, created_at, category:categories(name, slug)").eq("published", true).order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return data ?? [];
});
const listCategories_createServerFn_handler = createServerRpc({
  id: "8bf11339de321924fac14bfd28030a1559f57319cba9e686b2740d135f6f6e8d",
  name: "listCategories",
  filename: "src/lib/blog.functions.ts"
}, (opts) => listCategories.__executeServer(opts));
const listCategories = createServerFn({
  method: "GET"
}).handler(listCategories_createServerFn_handler, async () => {
  const {
    supabaseAdmin
  } = await import("./client.server-bOweUpA6.mjs");
  const {
    data,
    error
  } = await supabaseAdmin.from("categories").select("id, name, slug, description").order("name");
  if (error) throw new Error(error.message);
  return data ?? [];
});
const getPostBySlug_createServerFn_handler = createServerRpc({
  id: "c628265aac7f07bb6d940c4a7716131a62003a626c51b690af8be7d5db4f132c",
  name: "getPostBySlug",
  filename: "src/lib/blog.functions.ts"
}, (opts) => getPostBySlug.__executeServer(opts));
const getPostBySlug = createServerFn({
  method: "GET"
}).inputValidator((d) => slugSchema.parse(d)).handler(getPostBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-bOweUpA6.mjs");
  const {
    data: post,
    error
  } = await supabaseAdmin.from("posts").select("id, title, slug, excerpt, content, cover_image_url, created_at, category:categories(name, slug)").eq("slug", data.slug).eq("published", true).maybeSingle();
  if (error) throw new Error(error.message);
  if (!post) throw new Error("NOT_FOUND");
  return post;
});
const getCategoryWithPosts_createServerFn_handler = createServerRpc({
  id: "b1648c0cdabd12577302822913cf2e82cba8448d654a632b37f75ee2af94ad10",
  name: "getCategoryWithPosts",
  filename: "src/lib/blog.functions.ts"
}, (opts) => getCategoryWithPosts.__executeServer(opts));
const getCategoryWithPosts = createServerFn({
  method: "GET"
}).inputValidator((d) => slugSchema.parse(d)).handler(getCategoryWithPosts_createServerFn_handler, async ({
  data
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-bOweUpA6.mjs");
  const {
    data: category,
    error: catErr
  } = await supabaseAdmin.from("categories").select("id, name, slug, description").eq("slug", data.slug).maybeSingle();
  if (catErr) throw new Error(catErr.message);
  if (!category) throw new Error("NOT_FOUND");
  const {
    data: posts,
    error: postsErr
  } = await supabaseAdmin.from("posts").select("id, title, slug, excerpt, cover_image_url, created_at").eq("published", true).eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (postsErr) throw new Error(postsErr.message);
  return {
    category,
    posts: posts ?? []
  };
});
export {
  getCategoryWithPosts_createServerFn_handler,
  getPostBySlug_createServerFn_handler,
  listCategories_createServerFn_handler,
  listPosts_createServerFn_handler
};
