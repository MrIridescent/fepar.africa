import type { Metadata } from "next";
import { ArrowUpRight, Shield, Heart, Sparkles, Globe, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About FEPAR — Festac Pan African Renaissance",
  description: "Who we are — FESTAC Pan African Renaissance (FEPAR) is a Pan-African ecosystem advancing creative industries, youth development, diaspora partnerships, and cultural heritage from FESTAC 77 to the world.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About FEPAR | Festac Pan African Renaissance",
    description: "Intellectually African. Creativity Unlocks the Mind. From FESTAC to the World.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — About" }],
  },
};

const statItems = [
  { label: "Nations represented at FESTAC 77", value: "55+" },
  { label: "Years of Pan-African renaissance thinking", value: "50" },
  { label: "Ecosystem pillars under one umbrella", value: "4" },
  { label: "SDG goals we advance", value: "4" },
];

const valueItems = [
  { icon: Shield, title: "Cultural Stewardship", body: "We protect, preserve, and amplify African cultural expression as infrastructure — not commodity." },
  { icon: Heart, title: "Community First", body: "Every initiative starts with the people it serves. Dignity, agency, and opportunity come before scale." },
  { icon: Sparkles, title: "Creative Excellence", body: "We believe African creativity is a form of development — worthy of investment, respect, and global platforms." },
  { icon: Globe, title: "Pan-African Solidarity", body: "From FESTAC 77 to Agenda 2063, we build reciprocal bridges across Africa and its global diaspora." },
  { icon: Briefcase, title: "Economic Dignity", body: "Sustainable creative industries mean fair terms, real ownership, and lasting livelihoods for makers." },
];

const missionItems = [
  { title: "Our Mission", body: "To transform the spirit of FESTAC 77 into a living Pan-African ecosystem — connecting creative industries, youth development, diaspora partnership, and cultural heritage into durable infrastructure for Africa and its global diaspora." },
  { title: "Our Vision", body: "A world where African creativity is recognized as foundational infrastructure — where every artist, educator, builder, and visionary has the pathways, platforms, and partnerships to thrive on their own terms." },
  { title: "Our Origin", body: "FEPAR emerges from FESTAC Town — the city built for the Second World Black and African Festival of Arts and Culture in 1977. That moment proved Africans could design, construct, and sustain systems at continental scale. We carry that belief forward." },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="wrap">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <span className="eyebrow">01 / Who We Are</span>
              <h1 className="display" id="about-title">
                Festac Pan African<br />
                <em>Renaissance.</em>
              </h1>
              <p className="lede">
                FEPAR is a Pan-African ecosystem built on the belief that creativity,
                culture, and community are forms of infrastructure. From FESTAC 77 to
                the world — we advance the renaissance that began in Lagos.
              </p>
              <div className="about-actions">
                <a href="/contact/" className="btn-gold">
                  Start a Conversation <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a href="/careers/" className="btn-ghost">
                  Join Us <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="about-hero-stats">
              {statItems.map((s, i) => (
                <div key={i} className="stat-card" data-reveal>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" aria-labelledby="values-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our Principles</span>
            <h2 className="display" id="values-title">
              Values that shape<br />
              <em>everything we do.</em>
            </h2>
          </div>
          <div className="values-grid">
            {valueItems.map((v, i) => (
              <article key={i} className="value-card" data-reveal style={{ transitionDelay: i * 80 + "ms" }}>
                <div className="value-icon">
                  <v.icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section" aria-labelledby="mission-title">
        <div className="wrap mission-layout">
          <div className="mission-copy" data-reveal>
            <span className="eyebrow">Purpose, not claims</span>
            <h2 className="display" id="mission-title">
              Why FEPAR exists<br />
              <em>now.</em>
            </h2>
            {missionItems.map((m, i) => (
              <div key={i} className="mission-item" data-reveal style={{ transitionDelay: i * 100 + "ms" }}>
                <span className="mission-number">{i + 1}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mission-visual" aria-hidden="true">
            <div className="motif-sankofa" />
            <div className="motif-kente" />
          </div>
        </div>
      </section>

      <section className="join-corporate-section" aria-labelledby="join-title">
        <div className="wrap">
          <div className="join-inner" data-reveal>
            <span className="eyebrow">02 / Join the Renaissance</span>
            <h2 className="display" id="join-title">
              Build with us.<br />
              <em>Shape what comes next.</em>
            </h2>
            <p className="lede">
              Whether you are an artist, institution, investor, educator, or builder —
              there is a place for you in the FEPAR ecosystem.
            </p>
            <div className="join-routes">
              <article className="join-route">
                <h3>Partner with FEPAR</h3>
                <p>Bring an institution, programme, or shared ambition to the ecosystem.</p>
                <a href="/partners/">Explore partnerships <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
              <article className="join-route">
                <h3>Work at FEPAR</h3>
                <p>Join the team building Pan-African infrastructure for creative industries.</p>
                <a href="/careers/">See opportunities <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
              <article className="join-route">
                <h3>Support the work</h3>
                <p>Fund a conversation, share expertise, or commission creative work.</p>
                <a href="/contact/">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
