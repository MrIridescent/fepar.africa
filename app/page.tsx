import { ArrowDownRight, ArrowRight, ArrowUpRight, Drama, Globe2, GraduationCap, Music2 } from "lucide-react";
import type { Metadata } from "next";
import React from "react";
import { ParallaxHero, RevealOnScroll, MagneticButton } from "@/components/MotionSystem";
import { PanAfricanQuoteCarousel } from "@/components/PanAfricanQuotes";
import { FestacHero, FestacTimeline, FestacTownStory, FromFestacBanner } from "@/components/FestacLegacy";
import { SDGImpactDashboard } from "@/components/SDGImpactDashboard";

export const metadata: Metadata = {
  title: "FEPAR ECOSYSTEM — From FESTAC to the World",
  description: "From FESTAC 77 to the world: Advancing SDG Goals (especially Climate Action) and AU Agenda 2063 through arts, upskilling, learning, pan-African partnerships. Intellectually African.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FEPAR ECOSYSTEM — From FESTAC to the World",
    description: "Advancing SDG Goals and AU Agenda 2063 through arts, learning, and pan-African development.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR ECOSYSTEM" }],
  },
};

const MottoBadge = ({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) => (
  <span className={highlight ? "motto-badge motto-badge--solid" : "motto-badge"}>{children}</span>
);

const ecosystemAreas = [
  {
    number: "01",
    title: "Artist Pathways & Cultural Industries",
    body: "Building clearer routes from early practice to professional development—music, film, fashion, literature, visual art. Protecting cultural rights and creating thoughtful pathways to audiences, licensing, and collaboration.",
    icon: <Music2 size={24} aria-hidden="true" />,
    href: "/records/",
    linkLabel: "Explore artist pathways",
    color: "#F4A800",
    accent: "rgba(244, 168, 0, 0.08)",
    border: "rgba(244, 168, 0, 0.3)",
  },
  {
    number: "02",
    title: "Creative Arts & Performance Platform",
    body: "Strengthening conditions around performing arts so African creativity can be made, valued, and shared on fair terms. Spaces for creators to exchange skills and build stronger work.",
    icon: <Drama size={24} aria-hidden="true" />,
    href: "/festac-50/",
    linkLabel: "See the cultural stage",
    color: "#E63946",
    accent: "rgba(204, 0, 1, 0.08)",
    border: "rgba(204, 0, 1, 0.35)",
  },
  {
    number: "03",
    title: "Diaspora Partnerships & Development",
    body: "Creating meaningful routes for diaspora entrepreneurs, institutions, and expertise to participate in African growth. Infrastructure-minded partnerships built on reciprocity.",
    icon: <Globe2 size={24} aria-hidden="true" />,
    href: "/diaspora/",
    linkLabel: "Explore diaspora work",
    color: "#17B455",
    accent: "rgba(0, 155, 58, 0.08)",
    border: "rgba(0, 155, 58, 0.35)",
  },
  {
    number: "04",
    title: "Community Investment & Learning Initiatives",
    body: "Supporting young Africans with pathways to skills, confidence, meaningful work, and leadership through upskilling drives, educational programs, and community-led action.",
    icon: <GraduationCap size={24} aria-hidden="true" />,
    href: "/development/",
    linkLabel: "See learning priorities",
    color: "#D6A66B",
    accent: "rgba(214, 166, 107, 0.08)",
    border: "rgba(214, 166, 107, 0.3)",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <ParallaxHero backgroundImage="radial-gradient(circle at 78% 48%, rgba(244, 168, 0, 0.16) 0%, transparent 42%), radial-gradient(circle at 12% 82%, rgba(0, 155, 58, 0.1) 0%, transparent 38%)">
        <section className="home-hero">
          <div className="home-hero-inner">
            <div className="signal-rail" aria-label="FEPAR mottos">
              <span className="signal-rail-line" aria-hidden="true" />
              <span className="signal-rail-label">SIGNAL / 01</span>
              <MottoBadge highlight>Intellectually African</MottoBadge>
              <MottoBadge>Creativity Unlocks the Mind</MottoBadge>
              <MottoBadge>From FESTAC to the World</MottoBadge>
            </div>

            <div className="signal-copy">
              <RevealOnScroll>
                <span className="home-eyebrow">From FESTAC to the World <span aria-hidden="true">/</span> FEPAR ECOSYSTEM</span>
                <h1 className="home-title">
                  Africa is not
                  <br />
                  a footnote.
                  <br />
                  <em>It is the signal.</em>
                </h1>
                <p className="home-sub">
                  Fifty years after Lagos welcomed the world, we carry FESTAC 77&apos;s spirit
                  forward—transforming cultural memory into actionable impact, artistic
                  expression into economic opportunity, pan-African unity into practical
                  partnerships.
                </p>
                <div className="home-ctas">
                  <MagneticButton>
                    <a href="#ecosystem" className="btn-gold">
                      Explore Ecosystem
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href="#festac-legacy" className="btn-outline">
                      Our Legacy
                      <ArrowDownRight size={20} aria-hidden="true" />
                    </a>
                  </MagneticButton>
                </div>
              </RevealOnScroll>
            </div>

            <div className="signal-field" aria-label="FESTAC signal map">
              <div className="signal-orbit signal-orbit--outer" />
              <div className="signal-orbit signal-orbit--mid" />
              <div className="signal-orbit signal-orbit--inner" />
              <div className="signal-axis" aria-hidden="true" />
              <div className="signal-core"><span>77</span><small>FESTAC</small></div>
              <span className="signal-node signal-node--one" />
              <span className="signal-node signal-node--two" />
              <span className="signal-node signal-node--three" />
              <span className="signal-tag signal-tag--one">MEMORY</span>
              <span className="signal-tag signal-tag--two">ACTION</span>
              <span className="signal-tag signal-tag--three">DIASPORA</span>
            </div>

            <div className="signal-proof" aria-label="FEPAR identity and proof points">
              <div><strong>1977</strong><span>FESTAC Lagos</span></div>
              <div><strong>55</strong><span>Nations convened</span></div>
              <div><strong>17,000+</strong><span>Artists &amp; dignitaries</span></div>
              <div><strong>2063</strong><span>AU Agenda horizon</span></div>
            </div>
            <a className="archive-cue" href="#festac-legacy">
              <span className="archive-cue-dot" aria-hidden="true" />
              Scroll to enter the archive
              <ArrowDownRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </ParallaxHero>

      {/* FESTAC LEGACY */}
      <div id="festac-legacy">
        <FestacHero />
        <FestacTimeline />
        <FestacTownStory />
      </div>

      {/* PAN-AFRICAN VOICES */}
      <PanAfricanQuoteCarousel />

      {/* RENAISSANCE BANNER */}
      <FromFestacBanner />

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="eco-section">
        <div className="eco-inner">
          <RevealOnScroll>
            <div className="eco-head">
              <span className="eco-eyebrow">What We Do</span>
              <h2 className="eco-title">
                Connected by Purpose.
                <br />
                <em>United by Vision.</em>
              </h2>
              <p className="eco-lede">
                Under one umbrella, our ecosystem advances multiple imperatives—from artist
                development to diaspora partnerships, from creative industries to youth
                education. Each strand strengthens the others, creating resilience and
                lasting impact.
              </p>
            </div>
          </RevealOnScroll>

          <div className="eco-grid">
            {ecosystemAreas.map((area, index) => (
              <RevealOnScroll key={area.number} delay={index * 0.08}>
                <article
                  className="eco-card"
                  style={
                    {
                      "--eco-color": area.color,
                      "--eco-accent": area.accent,
                      "--eco-border": area.border,
                    } as React.CSSProperties
                  }
                >
                  <span className="eco-num">{area.number}</span>
                  <div className="eco-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                  <a href={area.href} className="eco-link">
                    {area.linkLabel} <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SDG + AU AGENDA 2063 */}
      <SDGImpactDashboard />

      {/* JOIN CTA */}
      <section className="join-section">
        <RevealOnScroll>
          <div className="join-inner">
            <h2 className="join-title">Join the Movement</h2>
            <p className="join-copy">
              Bring us your context, not just your pitch. Let&apos;s shape a renaissance
              platform rooted in memory and open to possibility.
            </p>
            <a href="/contact/" className="btn-dark">
              Let&apos;s Connect
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}