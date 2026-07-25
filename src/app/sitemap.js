import { SITE } from "@/lib/site";
import { products } from "@/lib/data/products";
import { caseStudies } from "@/lib/data/portfolio";
import { posts } from "@/lib/data/blog";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
    { path: "/demo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/baa", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...products.map((p) => ({
      url: `${SITE.url}/platform/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    })),
    ...caseStudies.map((c) => ({
      url: `${SITE.url}/portfolio/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    })),
  ];
}
