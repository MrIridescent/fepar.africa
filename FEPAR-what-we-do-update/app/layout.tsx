import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";
import "@/assets/styles.css";

const siteUrl = "https://www.fepar.africa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FEPAR — Festac Pan African Renaissance", template: "%s | FEPAR" },
  description: "FEPAR connects African and diaspora partners across enterprise, creative industries, youth talent, development, cultural rights, heritage and research.",
  applicationName: "FEPAR",
  keywords: ["Pan-African development", "African diaspora partnerships", "African creative industries", "cultural rights", "youth development", "African music", "cultural heritage", "African research", "FESTAC '77 at 50"],
  openGraph: { type: "website", locale: "en_GB", url: siteUrl, siteName: "FEPAR", title: "FEPAR — Festac Pan African Renaissance", description: "A platform for people building across Africa and its global diaspora.", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Festac Pan African Renaissance" }] },
  twitter: { card: "summary_large_image", title: "FEPAR — Festac Pan African Renaissance", description: "Enterprise, culture, talent and development across Africa and its global diaspora.", images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#111512", colorScheme: "dark" };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Festac Pan African Renaissance",
  alternateName: "FEPAR",
  url: siteUrl,
  description: "A Pan-African platform connecting enterprise, diaspora partnerships, creative industries, youth talent, development, cultural rights, heritage, research and community-led action.",
  email: "hello@fepar.africa",
  logo: `${siteUrl}/icon.svg`,
  areaServed: ["Africa", "Global African diaspora"],
  contactPoint: { "@type": "ContactPoint", contactType: "Partnership enquiries", email: "hello@fepar.africa", availableLanguage: "English" },
  department: [
    { "@type": "Organization", name: "Fepar Diaspora Limited", url: `${siteUrl}/diaspora/`, description: "Diaspora relationships, development thinking and infrastructure-minded partnerships." },
    { "@type": "Organization", name: "Fepar Records Ltd", url: `${siteUrl}/records/`, description: "Artist and producer pathways, cultural rights and creative collaboration." },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" /></head><body><a className="skip" href="#main">Skip to content</a><SiteHeader /><MotionEffects /><main id="main">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
