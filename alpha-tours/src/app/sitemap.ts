import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 } as const,
    { url: `${site.url}/collections`, lastModified: now, changeFrequency: "weekly", priority: 0.9 } as const,
    { url: `${site.url}/concierge`, lastModified: now, changeFrequency: "monthly", priority: 0.9 } as const,
    { url: `${site.url}/notebook`, lastModified: now, changeFrequency: "weekly", priority: 0.8 } as const,
  ];
  const collectionRoutes = collections
    .filter((c) => c.available)
    .map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  return [...base, ...collectionRoutes];
}
