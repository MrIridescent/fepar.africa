import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/contact/success/" },
    sitemap: "https://fepar.africa/sitemap.xml",
    host: "https://fepar.africa",
  };
}
