import { ArrowDownRight, ArrowRight, ArrowUpRight, Atom, Drama, Globe2, GraduationCap, Music2 } from "lucide-react";
import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { ParallaxHero, RevealOnScroll, MagneticButton } from "@/components/MotionSystem";
import { PanAfricanQuoteCarousel } from "@/components/PanAfricanQuotes";
import { FestacHero, FestacTimeline, FestacTownStory } from "@/components/FestacLegacy";
import { SDGImpactDashboard } from "@/components/SDGImpactDashboard";

export const metadata: Metadata = {
  title: "FEPAR ECOSYSTEM — From FESTAC to the World",
  description: "FEPAR connects African culture and practical possibility: youth development, skills and crafts, creativity for self-reliance, and Pan-African partnerships rooted in real value.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FEPAR ECOSYSTEM — From FESTAC to the World",
    description: "A Pan-African vision grounded in youth development, useful skills, cultural stewardship and creative self-reliance.",
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
    body: "Exploring what performers need to make work, exchange skills and reach audiences on fair terms. An invitation to shape better conditions together, not a finished programme.",
    icon: <Drama size={24} aria-hidden="true" />,
    href: "/performing-arts/",
    linkLabel: "Explore performing arts",
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
    title: "Youth, Skills & Self-Reliance",
    body: "Exploring practical routes into crafts, repair, design and digital skills with young people and working makers. Useful capabilities, fair livelihoods and community needs before hype.",
    icon: <GraduationCap size={24} aria-hidden="true" />,
    href: "/development/",
    linkLabel: "See learning priorities",
    color: "#D6A66B",
    accent: "rgba(214, 166, 107, 0.08)",
    border: "rgba(214, 166, 107, 0.3)",
  },
  {
    number: "05",
    title: "Innovation & STEM",
    body: "Exploring where science, technology and cultural intelligence meet local questions—from climate adaptation to shared learning and purposeful enterprise.",
    icon: <Atom size={24} aria-hidden="true" />,
    href: "/innovation/",
    linkLabel: "Explore innovation",
    color: "#42d6c2",
    accent: "rgba(66, 214, 194, 0.08)",
    border: "rgba(66, 214, 194, 0.3)",
  },
];

export default function HomePage() {
  return (
    <>
      <ParallaxHero backgroundImage="radial-gradient(circle at 80% 20%, rgba(185, 128, 49, .12), transparent 42%)">
        <section className="home-hero">
          <div className="home-hero-inner">
            <div className="home-edition">
              <span>FEPAR / A living renaissance</span>
              <span>Art · Memory · Future</span>
              <span>01 / The beginning</span>
            </div>

            <div className="signal-copy">
              <RevealOnScroll>
                <span className="home-eyebrow">From FESTAC to the World <span aria-hidden="true">/</span> FEPAR ECOSYSTEM</span>
                <h1 className="home-title">
                  Africa is not<br />
                  a footnote.<br />
                  <em>It is the signal.</em>
                </h1>
                <p className="home-sub">
                  Rooted in Festac Town, Lagos, FEPAR is a grassroots invitation to connect
                  Pan-African memory with makers, young people and creative ownership.
                  The history runs from Black print networks and cultural congresses to FESTAC &apos;77;
                  the future belongs to communities building beyond a single festival.
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

            <figure className="home-artwork">
              <div className="home-artwork-frame">
                <Image
                  src="/renaissance-artwork.png"
                  alt="Textured Pan-African artwork of circular heritage motifs interwoven with a contemporary city skyline"
                  width={1376}
                  height={768}
                  priority
                  sizes="(max-width: 900px) 100vw, 56vw"
                />
                <span className="home-artwork-stamp" aria-hidden="true">F / 77</span>
              </div>
              <figcaption><span>Fig. 01 — A legacy in motion</span><span>Lagos, 1977 → Everywhere, now</span></figcaption>
            </figure>

            <div className="home-bottom">
              <div className="home-mottos" aria-label="FEPAR mottos">
                <MottoBadge highlight>Intellectually African</MottoBadge>
                <MottoBadge>Creativity Unlocks the Mind</MottoBadge>
                <MottoBadge>From FESTAC to the World</MottoBadge>
              </div>
              <a className="archive-cue" href="#festac-legacy">
                Discover the story <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="signal-proof" aria-label="FEPAR identity and proof points">
            <div><strong>1977</strong><span>FESTAC Lagos</span></div>
            <div><strong>55</strong><span>Nations convened</span></div>
            <div><strong>17,000+</strong><span>Artists &amp; dignitaries</span></div>
            <div><strong>2063</strong><span>AU Agenda horizon</span></div>
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

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="eco-section">
        <div className="eco-inner">
          <RevealOnScroll>
            <div className="eco-head">
              <span className="eco-eyebrow">Where we want to build / grassroots directions</span>
              <h2 className="eco-title">
                Connected by Purpose.
                <br />
                <em>United by Vision.</em>
              </h2>
              <p className="eco-lede">
                These are directions for community conversations, not claims of active
                grants, an accredited academy, an official archive or an operating marketplace.
                Our job is to connect the historical questions to practical work people
                can shape and own together.
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

      <section className="home-lineage" aria-labelledby="home-lineage-title"><div className="wrap home-lineage-grid"><div><p className="eyebrow">Not nostalgia / a usable inheritance</p><h2 className="display" id="home-lineage-title">A century of ideas.<br /><em>A neighbourhood to begin in.</em></h2><p>Parisian Black publishing made conversations travel. Dakar gave culture a continental stage; Algiers contested its boundaries; Lagos made FESTAC &apos;77 a global meeting place. Festac Town reminds us that people still live with that legacy after the lights go down.</p><a className="text-link" href="/festac-50/#journey">Explore the sourced genealogy <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="home-lineage-steps"><a href="/festac-50/#journey"><span>1931—1959</span><strong>Print &amp; congresses</strong><small>Writers and artists argue over freedom, culture and belonging.</small></a><a href="/festac-50/#journey"><span>1966—1977</span><strong>Festival crossroads</strong><small>Dakar, Algiers, Kinshasa and Lagos do not tell one simple story.</small></a><a href="/festac-50/#research-paths"><span>Today</span><strong>Follow the record</strong><small>Research paths lead to the institutions and creators holding the work.</small></a></div></div></section>

      <section className="home-value" aria-labelledby="home-value-title">
        <div className="wrap home-value-grid">
          <div data-reveal>
            <p className="eyebrow">The work behind the future</p>
            <h2 className="display" id="home-value-title">Real value<br />outlives <em>the hype.</em></h2>
            <p className="home-value-intro">An Afrofuturist vision starts in the present: what can a young person learn, make, repair, own or pass on?</p>
            <a href="/development/" className="text-link">Explore youth &amp; skills <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="home-value-ledger" aria-label="The practical questions guiding FEPAR's development direction" data-reveal>
            <div><span>01 / Learn</span><p>Skills taught with context, care and working practitioners.</p></div>
            <div><span>02 / Make</span><p>Craft and creativity applied to needs people recognise.</p></div>
            <div><span>03 / Sustain</span><p>Fair terms, ownership and routes to lasting livelihoods.</p></div>
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
            <a href="/get-involved/" className="btn-dark">
              Find your way in
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href="/manifesto/" className="join-manifesto-link">
              Read the FEPAR manifesto <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <br />
            <a href="/news/" className="join-manifesto-link">
              Explore news &amp; ideas <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}