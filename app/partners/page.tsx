import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with FEPAR — Pan-African Ecosystem Partnerships",
  description: "Partner with FESTAC Pan African Renaissance (FEPAR). Collaborate on creative industries, youth development, diaspora partnerships, and cultural heritage across Africa and its diaspora.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Partners | FEPAR",
    description: "Build reciprocal partnerships with the FESTAC Pan African Renaissance ecosystem.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Partners" }],
  },
};

export default function PartnersPage() {
  return (
    <main>
      <section className="partners-hero" aria-labelledby="partners-title">
        <div className="wrap">
          <span className="eyebrow">04 / Partnerships</span>
          <h1 className="display" id="partners-title">Build bridges.<br /><em>Share direction.</em></h1>
          <p className="lede">FEPAR exists because no single organisation can carry a renaissance alone. We partner with institutions, networks, and funders who believe African creativity is infrastructure worth investing in.</p>
        </div>
      </section>
    </main>
  );
}