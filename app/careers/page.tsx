import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at FEPAR — Join the Pan-African Renaissance",
  description: "Work at FESTAC Pan African Renaissance (FEPAR). Join our team building creative industries, youth development, and Pan-African infrastructure across Africa and its diaspora.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers at FEPAR | Festac Pan African Renaissance",
    description: "Intellectually African. Creativity Unlocks the Mind. From FESTAC to the World.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Careers" }],
  },
};

export default function CareersPage() {
  return (
    <main>
      <section className="careers-hero">
        <div className="wrap">
          <span className="eyebrow">03 / Work With Purpose</span>
          <h1 className="display">Join the team<br /><em>building the renaissance.</em></h1>
          <p className="lede">FEPAR is an ecosystem connecting creative industries, youth development, diaspora partnerships, and cultural heritage.</p>
        </div>
      </section>
    </main>
  );
}