import type { MetadataRoute } from "next";

const baseUrl = "https://www.fepar.africa";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/festac-50/`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/diaspora/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/records/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/development/`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/careers/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partners/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news/`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact/`, changeFrequency: "yearly", priority: 0.65 },
  ];
}
