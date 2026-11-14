import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Compass, Handshake, Sparkles } from "lucide-react";
import { ManifestoPathSelector } from "@/components/ManifestoPathSelector";

export const metadata: Metadata = {
  title: "Manifesto — From FESTAC to the World",
  description: "A concise statement of the ideas FEPAR carries from FESTAC '77 into a shared Pan-African future.",
  alternates: { canonical: "/manifesto/" },
  openGraph: {
    title: "The FEPAR Manifesto",
    description: "Culture is memory, infrastructure and a way to make a future together.",
    url: "/manifesto/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "The FEPAR Manifesto" }],
  },
};

const principles = [
  {
    number: "01",
    icon: Sparkles,
    title: "Culture is infrastructure",
    body: "Art, memory and imagination are not decoration. They help communities understand themselves, exchange knowledge and build the confidence to shape what comes next.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Partnership must be reciprocal",
    body: "Africa and its diaspora are not a market and an audience. We make room for shared authorship, fair terms, local context and relationships that last beyond a single programme.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Memory should move",
    body: "From the 1956 Paris congress through Dakar, Algiers and Lagos, cultural gatherings created debate as well as celebration. We follow sources, name disagreements and connect the record to living places.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Makers should own their work",
    body: "Visibility without permission, credit or fair terms is not a renaissance. We want creators and artisans to set the conditions for sharing, teaching and earning from their work.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Continuity is the measure",
    body: "A festival can end in a day; a useful relationship, skill or record should outlast the stage. We will describe what is only an idea as an idea, and build with neighbours before claiming impact.",
  },
];

export default function ManifestoPage() {
  return (
    <>
      <section className="manifesto-hero" aria-labelledby="manifesto-title">
        <div className="wrap manifesto-hero-grid">
          <div>
            <p className="eyebrow">FEPAR / A working statement</p>
            <h1 className="display" id="manifesto-title">
              From memory<br />
              <em>to agency.</em>
            </h1>
          </div>
          <div className="manifesto-hero-note">
            <p className="lede">FESTAC showed what a continental cultural imagination could convene. FEPAR carries that spirit into the everyday work of making room for African creativity, learning and partnership.</p>
            <a className="text-link" href="/festac-50/">Read the FESTAC story <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="manifesto-marker" aria-hidden="true">1966 — 1977 — 2027</div>
      </section>

      <section className="manifesto-principles" aria-labelledby="principles-title">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">What we carry forward</p>
            <h2 className="display" id="principles-title">A renaissance<br /><em>with conditions.</em></h2>
            <p className="section-intro">These are commitments, not campaign claims. They guide the questions we bring to creative work, development and diaspora partnership.</p>
          </div>
          <div className="manifesto-list">
            {principles.map(({ number, icon: Icon, title, body }) => (
              <article className="manifesto-principle" key={number}>
                <span className="manifesto-number">{number}</span>
                <Icon size={25} strokeWidth={1.3} aria-hidden="true" />
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
          <figure className="manifesto-history">
            <div className="manifesto-history-context">
              <span className="eyebrow">A voice in context / 1903</span>
              <p>Writing about the United States at the turn of the twentieth century, Du Bois named the racial divide his era confronted. His words remain a historical point of reference, not a substitute for the work of our own time.</p>
            </div>
            <blockquote>“the problem of the Twentieth Century is the problem of the color line.”</blockquote>
            <figcaption>W. E. B. Du Bois, <cite>The Souls of Black Folk</cite>, “The Forethought” (1903). <a href="https://www.gutenberg.org/files/408/408-h/408-h.htm">Read the source <ArrowUpRight size={15} aria-hidden="true" /></a></figcaption>
          </figure>
        </div>
      </section>

      <ManifestoPathSelector />

      <section className="manifesto-close" aria-labelledby="close-title">
        <div className="wrap manifesto-close-grid">
          <p className="eyebrow">An invitation</p>
          <div>
            <h2 className="display" id="close-title">The next chapter<br /><em>needs many authors.</em></h2>
            <p>FEPAR is building relationships and programmes step by step. Bring a question, a practice, an archive, a place or a partnership — and help make the work more useful.</p>
            <a className="cta cta-light" href="/contact/">Build with FEPAR <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
