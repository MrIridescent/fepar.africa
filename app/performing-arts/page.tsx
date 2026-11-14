import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Performing Arts",
  description: "Explore FEPAR's invitation to African performers and cultural partners: make work, share skills and circulate creative practice on fair terms.",
  alternates: { canonical: "/performing-arts/" },
  openGraph: { title: "Performing Arts | FEPAR", description: "A working invitation for African performers and cultural partners to make, share and circulate creative work fairly.", url: "/performing-arts/", images: ["/og-image.png"] },
};

const propositions = [
  {
    number: "01",
    label: "Making work",
    title: "Room to make.",
    body: "What would it take for musicians, theatre-makers, dancers and interdisciplinary artists to develop work with time, space and creative agency? We want to listen to the conditions each practice actually needs before proposing a format.",
  },
  {
    number: "02",
    label: "Sharing skills",
    title: "Knowledge in motion.",
    body: "Peer exchange, mentorship and intergenerational learning could connect performance traditions with emerging approaches. Any collaboration should start with the people who hold the knowledge and respect how they choose to share it.",
  },
  {
    number: "03",
    label: "Fair circulation",
    title: "Beyond the stage.",
    body: "A performance can travel through venues, communities and digital spaces. We are interested in partnerships that make those routes clearer while taking consent, attribution, licensing and fair compensation seriously.",
  },
];

export default function PerformingArtsPage() {
  return (
    <>
      <section className="performance-hero" aria-labelledby="performance-title">
        <div className="wrap performance-hero-inner">
          <nav className="performance-crumb" aria-label="Breadcrumb"><a href="/">FEPAR</a><span aria-hidden="true">/</span><span>Performing Arts</span></nav>
          <div className="performance-hero-grid">
            <div data-reveal>
              <p className="eyebrow">A stage for the next conversation</p>
              <h1 className="display" id="performance-title">The stage<br />is <em>ours to<br />imagine.</em></h1>
            </div>
            <div className="performance-hero-aside" data-reveal>
              <span className="performance-mark" aria-hidden="true">ACT<br />01</span>
              <p>For the artists who make culture live, and the partners willing to build better conditions around it.</p>
              <a href="#performance-propositions" className="performance-text-link">Explore the proposition <ArrowDownRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="performance-hero-foot"><span>FEPAR / Performing Arts</span><span>Practice · Exchange · Possibility</span></div>
        </div>
      </section>

      <section className="performance-propositions" id="performance-propositions" aria-labelledby="performance-propositions-title">
        <div className="wrap">
          <div className="performance-section-head" data-reveal>
            <p className="eyebrow">A working proposition / not a programme announcement</p>
            <h2 className="display" id="performance-propositions-title">Before the spotlight,<br /><em>the conditions.</em></h2>
            <p>Performance deserves more than a moment onstage. These are three questions we would like to explore with creators and cultural partners, not services we claim to have delivered.</p>
          </div>
          <div className="performance-list">
            {propositions.map((item) => (
              <article className="performance-row" key={item.number} data-reveal>
                <div className="performance-row-index"><span>{item.number}</span><span>{item.label}</span></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="performance-rights" aria-labelledby="performance-rights-title">
        <div className="wrap performance-rights-grid" data-reveal>
          <div><p className="eyebrow">The terms matter</p><h2 className="display" id="performance-rights-title">A platform is only as strong as <em>the trust behind it.</em></h2></div>
          <div><p>We are interested in partnerships shaped with artists, not simply around them. That means conversations about ownership, consent, credit, access and payment belong at the beginning of any collaboration.</p><p>Are you a performer, producer, venue, educator or cultural organisation? Tell us what you are building and which conditions need to change. We will start with a conversation, not a promise of funding or a confirmed programme.</p><a href="/contact/" className="performance-text-link">Talk to FEPAR <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="performance-close" aria-labelledby="performance-close-title">
        <div className="wrap performance-close-grid" data-reveal>
          <div><p className="eyebrow">Your move / our invitation</p><h2 className="display" id="performance-close-title">What could we<br /><em>make possible?</em></h2></div>
          <div><p>Bring the work, the question, or the partnership idea. The next act starts by listening.</p><a className="cta cta-light" href="/contact/">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>
    </>
  );
}
