import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";
import { MotionProviders } from "@/components/MotionSystem";
import { QuoteRouteTransition } from "@/components/QuoteRouteTransition";
import { SiteAudioPlayer } from "@/components/SiteAudioPlayer";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import { colors, fonts, fontSizes, fontWeights, spacing, animations, borderRadius, shadows, africanMotifs, layout, breakpoints, zIndex, particles } from "@/assets/design-tokens";
import "@/assets/styles.css";

const siteUrl = "https://fepar.africa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FEPAR ECOSYSTEM — From FESTAC to the World", template: "%s | FEPAR" },
  description: "FEPAR is a Pan-African initiative inspired by FESTAC '77, exploring cultural heritage, youth skills, creative self-reliance, diaspora partnerships and FESTAC at 50.",
  applicationName: "FEPAR ECOSYSTEM",
  keywords: ["FEPAR", "Festac Pan African Renaissance", "Pan-Africanism", "FESTAC '77", "FESTAC at 50", "Festac Town Lagos", "African cultural heritage", "youth skills and crafts", "African creative industries", "African diaspora partnerships", "corporate social responsibility Africa", "African arts grants"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "FEPAR ECOSYSTEM",
    title: "FEPAR ECOSYSTEM — From FESTAC to the World",
    description: "African cultural heritage, youth skills and crafts, creative work and diaspora partnerships inspired by the legacy of FESTAC '77.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR ECOSYSTEM — From FESTAC to the World" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#1A1410", colorScheme: "dark" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "FEPAR ECOSYSTEM",
      alternateName: "FESTAC Pan African Renaissance",
      url: siteUrl,
      description: "A Pan-African initiative exploring cultural heritage, youth skills and crafts, creative work, FESTAC at 50 and reciprocal diaspora partnerships inspired by FESTAC '77.",
      email: "hello@fepar.africa",
      logo: `${siteUrl}/fepar-logo.png`,
      sameAs: ["https://www.facebook.com/fepar.africa"],
      areaServed: "Africa and the global African diaspora",
      knowsAbout: ["Pan-Africanism", "FESTAC '77", "FESTAC at 50", "Festac Town, Lagos", "African cultural heritage", "youth skills and crafts", "creative self-reliance", "corporate social responsibility partnerships in Africa"],
      contactPoint: { "@type": "ContactPoint", contactType: "General and partnership enquiries", email: "hello@fepar.africa", availableLanguage: "English" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "FEPAR ECOSYSTEM",
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
            <QuoteRouteTransition />
            <MotionEffects />
            <main id="main">{children}</main>
            <SiteFooter />
            <SiteAudioPlayer />
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
