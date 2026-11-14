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
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="wrap">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <span className="eyebrow">About FEPAR / Festac Town, Lagos</span>
              <h1 className="display" id="about-title">
                A renaissance<br />
                <em>built from here.</em>
              </h1>
              <p className="lede">
                FEPAR — Festac Pan African Renaissance — is a grassroots initiative rooted in Festac Town, Lagos. We connect the memory of Pan-African cultural gatherings with the people making, learning and building here today.
              </p>
              <p className="about-hero-clarity">We are not an official festival, an archive or a representative body for Festac Town residents. We are building relationships and direction from the ground up.</p>
              <div className="about-actions">
                <a href="#purpose" className="btn-gold">Understand our purpose <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href="#participate" className="btn-ghost">Find your place <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <nav className="about-hero-guide" aria-label="On this page">
              <span className="eyebrow">A way through the story</span>
              <a href="#purpose"><span>01 / Purpose</span><strong>Why we exist</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#history-to-practice"><span>02 / History into practice</span><strong>What we carry forward</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#principles"><span>03 / Principles</span><strong>How we work</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#participate"><span>04 / Participation</span><strong>Where you fit</strong><ArrowUpRight size={18} aria-hidden="true" /></a>
            </nav>
          </div>
        </div>
      </section>

      <section className="mission-section" id="purpose" aria-labelledby="mission-title">
        <div className="wrap mission-layout">
          <div className="mission-copy">
            <span className="eyebrow">01 / Our purpose</span>
            <h2 className="display" id="mission-title">Memory must<br /><em>make a difference.</em></h2>
            {missionItems.map((item, index) => (
              <div key={item.title} className="mission-item">
                <span className="mission-number">0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </div>
            ))}
          </div>
          <aside className="about-grounding" aria-label="Our starting point and direction">
            <p className="eyebrow">Where we stand</p>
            <h3>Rooted locally.<br />Open to the world.</h3>
            <p>Festac Town is a living community, not simply a monument to 1977. The festival and the everyday life of the town are different chapters; we start by listening to the people living and working here.</p>
            <div className="about-grounding-next">
              <span>Where we hope to go</span>
              <p>We are exploring ways to connect creators, practical learning and responsible digital tools. These are directions to build with people, not programmes already in place.</p>
              <a href="/creator-community/">Explore creative pathways <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="/digital-futures/">Explore digital futures <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="about-bridge" id="history-to-practice" aria-labelledby="about-bridge-title">
        <div className="wrap about-bridge-grid">
          <div>
            <p className="eyebrow">02 / History into practice</p>
            <h2 className="display" id="about-bridge-title">What do we<br /><em>carry forward?</em></h2>
            <p>The 1956 and 1959 writers&apos; congresses asked how knowledge could serve freedom. Dakar and Algiers debated whose culture belonged on the stage. FESTAC &apos;77 gathered people at extraordinary scale. Our question is what a neighbour, craftsperson or young creator can still use when the spectacle ends.</p>
            <a href="/festac-50/#research-paths" className="text-link">Explore the sourced history <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="about-bridge-list">
            <a href="/festac-50/#archive-practice"><span>01 / Memory</span><strong>Keep the record accountable.</strong><small>Context, consent and the right to be credited.</small></a>
            <a href="/development/"><span>02 / Learning</span><strong>Value the maker&apos;s knowledge.</strong><small>Craft, repair, technical skills and fair teaching.</small></a>
            <a href="/records/"><span>03 / Ownership</span><strong>Ask who benefits.</strong><small>Clear permissions before publishing or licensing creative work.</small></a>
            <a href="/diaspora/"><span>04 / Connection</span><strong>Practice reciprocity.</strong><small>Exchange shaped with communities, not imposed upon them.</small></a>
            <a href="/digital-futures/"><span>05 / Technology</span><strong>Make tools answer to people.</strong><small>Digital skills and AI with attribution, care and local agency.</small></a>
          </div>
        </div>
      </section>

      <section className="values-section" id="principles" aria-labelledby="values-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">03 / Our principles</span>
              <h2 className="display" id="values-title">The standards we<br /><em>work toward.</em></h2>
            </div>
            <p>Our principles are commitments to guide decisions as this grassroots initiative grows — not a claim that every ambition is already a programme.</p>
          </div>
          <div className="values-grid">
            {valueItems.map((item) => (
              <article key={item.title} className="value-card">
                <div className="value-icon"><item.icon size={24} strokeWidth={1.5} aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-corporate-section" id="participate" aria-labelledby="join-title">
        <div className="wrap">
          <div className="join-inner">
            <span className="eyebrow">04 / Join the conversation</span>
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
                <h3>Work with FEPAR</h3>
                <p>Share your experience for future paid work; no vacancies are listed now.</p>
                <a href="/careers/#career-interest">Express career interest <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
              <article className="join-route">
                <h3>Volunteer your time</h3>
                <p>Offer your skills and availability for a future conversation, not an assigned placement.</p>
                <a href="/careers/#volunteer-interest">Introduce yourself as a volunteer <ArrowUpRight size={15} aria-hidden="true" /></a>
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
