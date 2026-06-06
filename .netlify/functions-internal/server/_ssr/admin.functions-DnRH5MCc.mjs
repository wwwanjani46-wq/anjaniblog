import { r as reactExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { f as createSsrRpc } from "./router-BeiFDAMq.mjs";
import { c as createServerFn } from "./server-CAST0GV5.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Sebx2HHk.mjs";
import { o as objectType, s as stringType, b as booleanType } from "../_libs/zod.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
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
const checkIsAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c"));
const adminListPosts = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("c36083dfd2f49d453c7629b8a868d6b2b5a7c9fc0ff160379cfd2d3adcba24b4"));
const adminGetPost = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  slug: stringType().min(1)
}).parse(d)).handler(createSsrRpc("39cc3b2fa50fed380c22addea0464b62e9c7ba06bba85ecf08a5487be7b1b408"));
const savePost = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => postInput.parse(d)).handler(createSsrRpc("9d5cdbf465e564d67c9c8f21883c7ff7211d3ffdaee07b653be33f2ae502fe6b"));
const deletePost = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("61d2f1a485e46ff0eb3e0ec858fe930d4738d44e986914f73963d7f45a3ff47c"));
export {
  adminListPosts as a,
  adminGetPost as b,
  checkIsAdmin as c,
  deletePost as d,
  savePost as s,
  useServerFn as u
};
