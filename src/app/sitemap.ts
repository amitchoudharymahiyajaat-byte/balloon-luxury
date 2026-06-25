import type { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";
import { cities, siteUrl } from "../lib/seo";

const serviceSlugs = [
  "anniversary-decoration",
  "baby-shower-decoration",
  "birthday-decoration",
  "car-decoration",
  "corporate-events",
  "custom-theme-decoration",
  "room-decoration",
  "wedding-decoration",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{
    path: string;
    priority: number;
    lastModified?: Date;
  }> = [
    { path: "/", priority: 1 },
    { path: "/city", priority: 0.8 },
    { path: "/blog", priority: 0.75 },
    ...cities.map((city) => ({
      path: `/${city.slug}`,
      priority: city.slug === "jaipur" ? 0.95 : 0.9,
    })),
    ...cities.flatMap((city) =>
      serviceSlugs.map((serviceSlug) => ({
        path: `/${city.slug}/services/${serviceSlug}`,
        priority: 0.75,
      }))
    ),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      lastModified: new Date(post.updatedDate),
    })),
  ];

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: "lastModified" in route ? route.lastModified : now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
