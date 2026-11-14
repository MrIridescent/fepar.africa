import type { Metadata } from "next";
import { ArrowUpRight, Shield, Heart, Sparkles, Globe, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About FEPAR — FESTAC Pan African Renaissance",
  description: "Learn about FEPAR's mission, rooted in FESTAC '77: African cultural stewardship, youth skills and crafts, creative enterprise and reciprocal diaspora partnership.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About FEPAR — FESTAC Pan African Renaissance",
    description: "Explore the vision behind FEPAR's work in African heritage, youth skills, creative enterprise and diaspora partnership.",
    url: "/about/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — About" }],
  },
};

const statItems = [
  { label: "FESTAC '77 held in Lagos", value: "1977" },
  { label: "Fiftieth anniversary of FESTAC '77", value: "2027" },
  { label: "The place that inspires this vision", value: "Lagos" },
  { label: "An invitation to shape what comes next", value: "Now" },
];

const valueItems = [
  { icon: Shield, title: "Cultural Stewardship", body: "We want cultural memory to be documented with its holders' permission, context and control — not treated as a commodity." },
  { icon: Heart, title: "Humanitarian by Design", body: "Our work should begin with community-defined needs, young people's agency and care for those most often left out. Dignity comes before scale." },
  { icon: Sparkles, title: "Creative Excellence", body: "We believe African creativity is a form of development — worthy of investment, respect, and global platforms." },
  { icon: Globe, title: "Pan-African Solidarity", body: "Inspired by FESTAC '77, we want to explore reciprocal relationships across Africa and its global diaspora." },
  { icon: Briefcase, title: "Economic Dignity", body: "Sustainable creative industries mean fair terms, real ownership, and lasting livelihoods for makers." },
];

const missionItems = [
  { title: "Our Mission", body: "To connect the Pan-African history of cultural exchange to practical possibilities for the people who inherit it: makers, artists, young learners and neighbours. We want memory to inform useful skills, fair creative ownership and reciprocal relationships rather than end at commemoration." },
  { title: "Our Vision", body: "An African future that communities can make and sustain themselves: cultural knowledge is accessible without dispossession, makers are credited and paid fairly, young people learn alongside practitioners, and diaspora exchange strengthens local agency." },
  { title: "Our Point of Departure", body: "FEPAR is a grassroots initiative taking inspiration from FESTAC '77 and Festac Town, Lagos. The festival and the everyday life of the town are different chapters. We do not speak for residents, hold an official festival archive, or organise the state anniversary." },
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
                FEPAR is a grassroots Pan-African initiative rooted in Festac Town, Lagos.
                We are not another official festival. We want to connect historical memory
                with the everyday conditions for creativity: learning, craft, fair ownership
                and community care.
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

      <section className="about-bridge" aria-labelledby="about-bridge-title"><div className="wrap about-bridge-grid"><div><p className="eyebrow">History into practice</p><h2 className="display" id="about-bridge-title">What do we<br /><em>carry forward?</em></h2><p>The 1956 and 1959 writers&apos; congresses asked how knowledge could serve freedom. Dakar and Algiers disagreed about whose culture belonged on the stage. FESTAC &apos;77 gathered people at extraordinary scale. Our grassroots question is what a neighbour, craftsperson or young creator can still use when the spectacle ends.</p><a href="/festac-50/#research-paths" className="text-link">Follow the source paths <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="about-bridge-list"><a href="/festac-50/#archive-practice"><span>01 / Memory</span><strong>Keep the record accountable.</strong><small>Context, consent and the right to be credited.</small></a><a href="/development/"><span>02 / Learning</span><strong>Value the maker&apos;s knowledge.</strong><small>Craft, repair, technical skills and fair teaching.</small></a><a href="/records/"><span>03 / Ownership</span><strong>Ask who benefits.</strong><small>Clear permissions before publishing or licensing creative work.</small></a><a href="/diaspora/"><span>04 / Connection</span><strong>Practice reciprocity.</strong><small>Exchange shaped with communities, not imposed upon them.</small></a></div></div></section>

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
              we welcome a conversation about what we could build together.
            </p>
            <div className="join-routes">
              <article className="join-route">
                <h3>Partner with FEPAR</h3>
                <p>Explore a shared ambition with clear responsibilities and community benefit.</p>
                <a href="/partners/">Explore partnerships <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
              <article className="join-route">
                <h3>Share your skills</h3>
                <p>Introduce yourself for future work or volunteering conversations; no roles are listed now.</p>
                <a href="/careers/">Explore ways to contribute <ArrowUpRight size={15} aria-hidden="true" /></a>
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
