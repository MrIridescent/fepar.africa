import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";
import { MotionProviders } from "@/components/MotionSystem";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import { colors, fonts, fontSizes, fontWeights, spacing, animations, borderRadius, shadows, africanMotifs, layout, breakpoints, zIndex, particles } from "@/assets/design-tokens";
import "@/assets/styles.css";

const siteUrl = "https://www.fepar.africa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FEPAR ECOSYSTEM — Intellectually African", template: "%s | FEPAR" },
  description: "FEPAR ECOSYSTEM: From FESTAC to the World. Advancing SDG Goals (especially Climate Action) and AU Agenda 2063 through arts, upskilling, learning, and pan-African partnerships.",
  applicationName: "FEPAR ECOSYSTEM",
  keywords: ["Pan-African development", "African diaspora partnerships", "African creative industries", "climate action", "youth development", "FESTAC 77 legacy", "AU Agenda 2063", "intellectually african"],
  openGraph: { 
    type: "website", 
    locale: "en_GB", 
    url: siteUrl, 
    siteName: "FEPAR ECOSYSTEM", 
    title: "FEPAR ECOSYSTEM — From FESTAC to the World",
    description: "Advancing SDG Goals and AU Agenda 2063 through arts, learning, and pan-African development.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR ECOSYSTEM — Intellectually African" }] 
  },
  twitter: { 
    card: "summary_large_image", 
    title: "FEPAR ECOSYSTEM — From FESTAC to the World",
    description: "Arts, upskilling, climate action, pan-African partnerships under one umbrella.",
    images: ["/og-image.png"] 
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#1A1410", colorScheme: "dark" };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FEPAR ECOSYSTEM",
  alternateName: "Festac Pan African Renaissance",
  url: siteUrl,
  description: "From FESTAC to the World: A Pan-African platform advancing SDG Goals and AU Agenda 2063 through arts, cultural industries, youth education, and diaspora partnerships.",
  email: "hello@fepar.africa",
  logo: `${siteUrl}/icon.svg`,
  areaServed: ["Africa", "Global African diaspora"],
  contactPoint: { "@type": "ContactPoint", contactType: "Partnership enquiries", email: "hello@fepar.africa", availableLanguage: "English" },
  department: [
    { "@type": "Organization", name: "Artist Pathways & Cultural Industries", url: `${siteUrl}/records/`, description: "Music, visual arts, literature, fashion, film—building artist development pathways." },
    { "@type": "Organization", name: "Creative Arts & Performance Platform", url: `${siteUrl}/festac-50/`, description: "Performing arts, creative industries, cultural rights, heritage preservation." },
    { "@type": "Organization", name: "Diaspora Partnerships & Development", url: `${siteUrl}/diaspora/`, description: "Building reciprocal diaspora relationships, infrastructure-minded partnerships." },
    { "@type": "Organization", name: "Community Investment & Learning Initiatives", url: `${siteUrl}/development/`, description: "Youth development, upskilling drives, educational programs, community mobilization." },
  ],
};

// Styled Components Theme
const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  spacing,
  animations,
  borderRadius,
  shadows,
  africanMotifs,
  layout,
  breakpoints,
  zIndex,
  particles,
  sectionPadding: "120px 0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&family=Space+Mono:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry theme={theme}>
          <MotionProviders>
            <a className="skip" href="#main">Skip to content</a>
            <SiteHeader />
            <MotionEffects />
            <main id="main">{children}</main>
            <SiteFooter />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
            />
          </MotionProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
