import type { MetadataRoute } from "next";

const baseUrl = "https://www.fepar.africa";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/festac-50/`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/festac-history/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/theme-songs/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/what-we-do/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/diaspora/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/records/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/development/`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact/`, changeFrequency: "yearly", priority: 0.65 },
  ];
}
