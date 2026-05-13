import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/collections`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/experiences`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/partners`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/concierge`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/notebook`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
  ];
  const collectionRoutes: MetadataRoute.Sitemap = collections
    .filter((c) => c.available)
    .map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));
  return [...base, ...collectionRoutes];
}
