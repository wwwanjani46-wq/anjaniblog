import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, q as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as redirect, T as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-DR7fDk_5.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CAST0GV5.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-CCEp-l1f.css";
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display text-xl font-semibold tracking-tight text-foreground", children: [
      "designwithanjani",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-8 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-muted-foreground transition-colors hover:text-foreground", activeProps: { className: "text-foreground" }, activeOptions: { exact: true }, children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-muted-foreground transition-colors hover:text-foreground", activeProps: { className: "text-foreground" }, children: "Journal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-muted-foreground transition-colors hover:text-foreground", activeProps: { className: "text-foreground" }, children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.instagram.com/designwithanjani.in/",
          target: "_blank",
          rel: "noreferrer",
          className: "text-muted-foreground transition-colors hover:text-foreground",
          children: "Instagram"
        }
      )
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-24 border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-medium tracking-tight", children: "designwithanjani" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: "A journal on graphic design, video editing and the practice between them." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 text-sm text-muted-foreground md:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Anjani. All rights reserved."
    ] }) })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "designwithanjani — Graphic Design & Video Editing Journal" },
      { name: "description", content: "Notes, process and inspiration from Anjani — graphic designer and video editor." },
      { name: "author", content: "designwithanjani" },
      { property: "og:site_name", content: "designwithanjani" },
      { property: "og:title", content: "designwithanjani — Graphic Design & Video Editing Journal" },
      { property: "og:description", content: "Notes, process and inspiration from Anjani — graphic designer and video editor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "designwithanjani",
          description: "Graphic design and video editing journal by Anjani."
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  reactExports.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        queryClient.invalidateQueries();
      }
    });
    return () => subscription.unsubscribe();
  }, [queryClient]);
  const location = useLocation();
  const showShell = location.pathname !== "/";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      showShell && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      showShell && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const BASE_URL = "";
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { supabaseAdmin } = await import("./client.server-bOweUpA6.mjs");
        const [{ data: posts }, { data: cats }] = await Promise.all([
          supabaseAdmin.from("posts").select("slug, updated_at").eq("published", true),
          supabaseAdmin.from("categories").select("slug")
        ]);
        const staticPaths = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/blog", changefreq: "daily", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.5" }
        ];
        const postPaths = (posts ?? []).map((p) => ({
          path: `/blog/${p.slug}`,
          lastmod: p.updated_at,
          changefreq: "monthly",
          priority: "0.8"
        }));
        const catPaths = (cats ?? []).map((c) => ({
          path: `/category/${c.slug}`,
          changefreq: "weekly",
          priority: "0.7"
        }));
        const urls = [...staticPaths, ...postPaths, ...catPaths].map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./auth-0WK-vS9j.mjs");
const Route$9 = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Admin sign in — designwithanjani"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-BJq1dyEs.mjs");
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Anjani — designwithanjani"
    }, {
      name: "description",
      content: "Anjani is a graphic designer and video editor. About her work, process, and the journal."
    }, {
      property: "og:title",
      content: "About Anjani — designwithanjani"
    }, {
      property: "og:description",
      content: "Graphic designer and video editor."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./route-BFsOu0JM.mjs");
const Route$7 = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-C3WJ2fZ7.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "designwithanjani"
    }, {
      name: "description",
      content: "Design portfolio and creative studio by Anjani — brand identity, editorial design, and motion-led digital experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const slugSchema = objectType({
  slug: stringType().min(1).max(200)
});
const listPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("a0c920d85f63c5b0f617c0178cabe0a02827da8bde39080079d1bad9d3bad89b"));
const listCategories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("8bf11339de321924fac14bfd28030a1559f57319cba9e686b2740d135f6f6e8d"));
const getPostBySlug = createServerFn({
  method: "GET"
}).inputValidator((d) => slugSchema.parse(d)).handler(createSsrRpc("c628265aac7f07bb6d940c4a7716131a62003a626c51b690af8be7d5db4f132c"));
const getCategoryWithPosts = createServerFn({
  method: "GET"
}).inputValidator((d) => slugSchema.parse(d)).handler(createSsrRpc("b1648c0cdabd12577302822913cf2e82cba8448d654a632b37f75ee2af94ad10"));
const postsQO = queryOptions({
  queryKey: ["posts"],
  queryFn: () => listPosts()
});
const categoriesQO = queryOptions({
  queryKey: ["categories"],
  queryFn: () => listCategories()
});
const $$splitNotFoundComponentImporter$2 = () => import("./blog.index-CLXzMa2a.mjs");
const $$splitErrorComponentImporter$2 = () => import("./blog.index-D3TUZfJp.mjs");
const $$splitComponentImporter$5 = () => import("./blog.index-yDJ9gKiX.mjs");
const Route$5 = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: "Journal — designwithanjani"
    }, {
      name: "description",
      content: "All articles from designwithanjani — graphic design, video editing, process and inspiration."
    }, {
      property: "og:title",
      content: "Journal — designwithanjani"
    }, {
      property: "og:description",
      content: "All articles from designwithanjani."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  loader: ({
    context
  }) => Promise.all([context.queryClient.ensureQueryData(postsQO), context.queryClient.ensureQueryData(categoriesQO)]),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
const catQO = (slug) => queryOptions({
  queryKey: ["category", slug],
  queryFn: async () => {
    try {
      return await getCategoryWithPosts({
        data: {
          slug
        }
      });
    } catch (e) {
      if (e instanceof Error && e.message.includes("NOT_FOUND")) throw notFound();
      throw e;
    }
  }
});
const $$splitNotFoundComponentImporter$1 = () => import("./category._slug-D89ANr_e.mjs");
const $$splitErrorComponentImporter$1 = () => import("./category._slug-kMqk0J_r.mjs");
const $$splitComponentImporter$4 = () => import("./category._slug-CrWZ-K2X.mjs");
const Route$4 = createFileRoute("/category/$slug")({
  loader: ({
    params,
    context
  }) => context.queryClient.ensureQueryData(catQO(params.slug)),
  head: ({
    params,
    loaderData
  }) => {
    const data = loaderData;
    const name = data?.category.name ?? "Category";
    const desc = data?.category.description || `Articles in ${name} from designwithanjani.`;
    return {
      meta: [{
        title: `${name} — designwithanjani`
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: `${name} — designwithanjani`
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:url",
        content: `/category/${params.slug}`
      }],
      links: [{
        rel: "canonical",
        href: `/category/${params.slug}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const postQO = (slug) => queryOptions({
  queryKey: ["post", slug],
  queryFn: async () => {
    try {
      return await getPostBySlug({
        data: {
          slug
        }
      });
    } catch (e) {
      if (e instanceof Error && e.message.includes("NOT_FOUND")) throw notFound();
      throw e;
    }
  }
});
const $$splitNotFoundComponentImporter = () => import("./blog._slug-C1KnqPv4.mjs");
const $$splitErrorComponentImporter = () => import("./blog._slug-B-Ui44Q4.mjs");
const $$splitComponentImporter$3 = () => import("./blog._slug-DNjzKzya.mjs");
const Route$3 = createFileRoute("/blog/$slug")({
  loader: ({
    params,
    context
  }) => context.queryClient.ensureQueryData(postQO(params.slug)),
  head: ({
    params,
    loaderData
  }) => {
    const post = loaderData;
    if (!post) {
      return {
        meta: [{
          title: "Post — designwithanjani"
        }]
      };
    }
    return {
      meta: [{
        title: `${post.title} — designwithanjani`
      }, {
        name: "description",
        content: post.excerpt || post.title
      }, {
        property: "og:title",
        content: post.title
      }, {
        property: "og:description",
        content: post.excerpt || post.title
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/blog/${params.slug}`
      }, ...post.cover_image_url ? [{
        property: "og:image",
        content: post.cover_image_url
      }] : []],
      links: [{
        rel: "canonical",
        href: `/blog/${params.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.cover_image_url ?? void 0,
          datePublished: post.created_at,
          author: {
            "@type": "Person",
            name: "Anjani"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$2 = () => import("./admin.index-BaIaXjAt.mjs");
const Route$2 = createFileRoute("/_authenticated/admin/")({
  head: () => ({
    meta: [{
      title: "Admin — designwithanjani"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.new-BLPZCcm4.mjs");
const Route$1 = createFileRoute("/_authenticated/admin/new")({
  head: () => ({
    meta: [{
      title: "New entry — designwithanjani"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.edit._slug-B_zPTaat.mjs");
const Route = createFileRoute("/_authenticated/admin/edit/$slug")({
  head: () => ({
    meta: [{
      title: "Edit entry — designwithanjani"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$b
});
const AuthRoute = Route$9.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const AuthenticatedRouteRoute = Route$7.update({
  id: "/_authenticated",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const BlogIndexRoute = Route$5.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$b
});
const CategorySlugRoute = Route$4.update({
  id: "/category/$slug",
  path: "/category/$slug",
  getParentRoute: () => Route$b
});
const BlogSlugRoute = Route$3.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$b
});
const AuthenticatedAdminIndexRoute = Route$2.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminNewRoute = Route$1.update({
  id: "/admin/new",
  path: "/admin/new",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminEditSlugRoute = Route.update({
  id: "/admin/edit/$slug",
  path: "/admin/edit/$slug",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminNewRoute,
  AuthenticatedAdminIndexRoute,
  AuthenticatedAdminEditSlugRoute
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AboutRoute,
  AuthRoute,
  SitemapDotxmlRoute,
  BlogSlugRoute,
  CategorySlugRoute,
  BlogIndexRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$4 as R,
  catQO as a,
  Route$3 as b,
  categoriesQO as c,
  postQO as d,
  Route as e,
  createSsrRpc as f,
  listCategories as l,
  postsQO as p,
  router as r
};
