import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://residence24.ch", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
