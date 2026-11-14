import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/contentful";

const baseUrl = "https://fepar.africa";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/festac-50/`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/manifesto/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/get-involved/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/explore/pan-africanism/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/diaspora/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/records/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/performing-arts/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/development/`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/innovation/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/digital-futures/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/creator-community/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partners/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact/`, changeFrequency: "yearly", priority: 0.65 },
    ...posts.map((post) => ({
      url: `${baseUrl}/news/${post.slug}/`,
      ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
