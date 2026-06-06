import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const slugSchema = z.object({ slug: z.string().min(1).max(200) });

export const listPosts = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("id, title, slug, excerpt, cover_image_url, created_at, category:categories(name, slug)")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const listCategories = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("categories")
    .select("id, name, slug, description")
    .order("name");
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => slugSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: post, error } = await supabaseAdmin
      .from("posts")
      .select("id, title, slug, excerpt, content, cover_image_url, created_at, category:categories(name, slug)")
      .eq("slug", data.slug)
      .eq("published", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!post) throw new Error("NOT_FOUND");
    return post;
  });

export const getCategoryWithPosts = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => slugSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: category, error: catErr } = await supabaseAdmin
      .from("categories")
      .select("id, name, slug, description")
      .eq("slug", data.slug)
      .maybeSingle();
    if (catErr) throw new Error(catErr.message);
    if (!category) throw new Error("NOT_FOUND");
    const { data: posts, error: postsErr } = await supabaseAdmin
      .from("posts")
      .select("id, title, slug, excerpt, cover_image_url, created_at")
      .eq("published", true)
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (postsErr) throw new Error(postsErr.message);
    return { category, posts: posts ?? [] };
  });