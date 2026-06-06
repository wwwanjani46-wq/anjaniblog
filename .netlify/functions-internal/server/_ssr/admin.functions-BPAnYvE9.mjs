import { c as createServerRpc } from "./createServerRpc-lL-9sh39.mjs";
import { c as createServerFn } from "./server-CAST0GV5.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Sebx2HHk.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, b as booleanType, s as stringType } from "../_libs/zod.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
async function assertAdmin(supabase, userId) {
  const {
    data,
    error
  } = await supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin role required");
}
const postInput = objectType({
  id: stringType().uuid().optional(),
  title: stringType().min(1).max(200),
  slug: stringType().min(1).max(200).regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and dashes"),
  excerpt: stringType().max(500).optional().nullable(),
  content: stringType().min(1).max(5e4),
  cover_image_url: stringType().url().max(2e3).optional().nullable(),
  category_id: stringType().uuid().nullable(),
  published: booleanType()
});
const checkIsAdmin_createServerFn_handler = createServerRpc({
  id: "d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c",
  name: "checkIsAdmin",
  filename: "src/lib/admin.functions.ts"
}, (opts) => checkIsAdmin.__executeServer(opts));
const checkIsAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(checkIsAdmin_createServerFn_handler, async ({
  context
}) => {
  const {
    data
  } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
  return {
    isAdmin: !!data
  };
});
const adminListPosts_createServerFn_handler = createServerRpc({
  id: "c36083dfd2f49d453c7629b8a868d6b2b5a7c9fc0ff160379cfd2d3adcba24b4",
  name: "adminListPosts",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListPosts.__executeServer(opts));
const adminListPosts = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminListPosts_createServerFn_handler, async ({
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    data,
    error
  } = await context.supabase.from("posts").select("id, title, slug, published, created_at, category:categories(name)").order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return data ?? [];
});
const adminGetPost_createServerFn_handler = createServerRpc({
  id: "39cc3b2fa50fed380c22addea0464b62e9c7ba06bba85ecf08a5487be7b1b408",
  name: "adminGetPost",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminGetPost.__executeServer(opts));
const adminGetPost = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  slug: stringType().min(1)
}).parse(d)).handler(adminGetPost_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    data: post,
    error
  } = await context.supabase.from("posts").select("*").eq("slug", data.slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (!post) throw new Error("Not found");
  return post;
});
const savePost_createServerFn_handler = createServerRpc({
  id: "9d5cdbf465e564d67c9c8f21883c7ff7211d3ffdaee07b653be33f2ae502fe6b",
  name: "savePost",
  filename: "src/lib/admin.functions.ts"
}, (opts) => savePost.__executeServer(opts));
const savePost = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => postInput.parse(d)).handler(savePost_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const payload = {
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt || null,
    content: data.content,
    cover_image_url: data.cover_image_url || null,
    category_id: data.category_id,
    published: data.published,
    author_id: context.userId
  };
  if (data.id) {
    const {
      error: error2
    } = await context.supabase.from("posts").update(payload).eq("id", data.id);
    if (error2) throw new Error(error2.message);
    return {
      id: data.id,
      slug: data.slug
    };
  }
  const {
    data: inserted,
    error
  } = await context.supabase.from("posts").insert(payload).select("id, slug").single();
  if (error) throw new Error(error.message);
  return inserted;
});
const deletePost_createServerFn_handler = createServerRpc({
  id: "61d2f1a485e46ff0eb3e0ec858fe930d4738d44e986914f73963d7f45a3ff47c",
  name: "deletePost",
  filename: "src/lib/admin.functions.ts"
}, (opts) => deletePost.__executeServer(opts));
const deletePost = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(deletePost_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    error
  } = await context.supabase.from("posts").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  adminGetPost_createServerFn_handler,
  adminListPosts_createServerFn_handler,
  checkIsAdmin_createServerFn_handler,
  deletePost_createServerFn_handler,
  savePost_createServerFn_handler
};
