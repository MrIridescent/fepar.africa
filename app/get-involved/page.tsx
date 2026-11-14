import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, HeartHandshake, Lightbulb, Megaphone, Palette, Waypoints } from "lucide-react";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";

export const metadata: Metadata = {
  title: "Get Involved in a Pan-African Vision",
  description: "Find a meaningful way to contribute to FEPAR's Pan-African vision through skills, crafts, culture, diaspora connections and partnerships.",
  alternates: { canonical: "/get-involved/" },
  openGraph: {
    title: "Get Involved | FEPAR",
    description: "Explore ways to share skills, crafts, cultural practice and diaspora connections with FEPAR.",
    url: "/get-involved/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Get involved" }],
  },
};

const paths = [
  { number: "01", icon: HeartHandshake, title: "Offer your time", detail: "Bring your practical skills, curiosity or coordination experience. Tell us where you are and what you could contribute; this is an introduction, not an open volunteer placement.", action: "Explore volunteering", href: "/careers/" },
  { number: "02", icon: Palette, title: "Make something matter", detail: "Work in crafts, music, design, performance or cultural research? Explore how creative practice and fair cultural exchange could meet community needs.", action: "Explore youth & crafts", href: "/development/" },
  { number: "03", icon: Waypoints, title: "Connect across borders", detail: "If you are part of the African diaspora, bring local knowledge, networks and a spirit of reciprocity to conversations about building value across places.", action: "Explore diaspora connections", href: "/diaspora/" },
  { number: "04", icon: Lightbulb, title: "Build a partnership", detail: "Represent a community group, institution or enterprise? Share a concrete challenge, resource or collaboration idea. We are interested in responsible, useful partnerships.", action: "Explore partnerships", href: "/partners/" },
  { number: "05", icon: Megaphone, title: "Start close to home", detail: "Talk with a maker, artist or young person near you. Share a relevant idea or link, listen first, and bring a question back to the conversation.", action: "Read our manifesto", href: "/manifesto/" },
];

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="involvement-hero" aria-labelledby="involvement-title">
        <div className="wrap involvement-hero-inner">
          <div className="involvement-hero-copy">
            <p className="eyebrow">FEPAR / An open invitation</p>
            <h1 className="display" id="involvement-title">A future worth building needs <em>your part.</em></h1>
            <p>Across Africa and its diaspora, culture is more than a story we inherit. It is what we make useful together: skills passed on, rights respected, creative work valued and communities heard.</p>
            <div className="actions"><a className="cta" href="#paths">Find your way in <ArrowDownRight size={18} aria-hidden="true" /></a><a className="involvement-hero-link" href="#raise-hand">Share your interest <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          </div>
          <div className="involvement-signal" aria-hidden="true"><span className="involvement-signal-ring involvement-signal-ring-one" /><span className="involvement-signal-ring involvement-signal-ring-two" /><span className="involvement-signal-core">WE<br />MAKE<br />THE<br />FUTURE<span>TOGETHER / FEPAR</span></span></div>
        </div>
        <div className="wrap involvement-hero-foot"><span>Start where you are</span><span>Bring what you know</span><span>Build with others</span></div>
      </section>

      <section className="involvement-paths" id="paths" aria-labelledby="involvement-paths-title">
        <div className="wrap">
          <div className="involvement-paths-heading"><p className="eyebrow">01 / Choose your first move</p><h2 className="display" id="involvement-paths-title">There is no single<br /><em>way in.</em></h2><p>Whether you have an hour, an idea or a connection, begin with the work that feels close to you. These are invitations to talk, not promises of established programmes.</p></div>
          <div className="involvement-path-list">{paths.map(({ number, icon: Icon, title, detail, action, href }) => <article className="involvement-path" key={number}><span className="involvement-path-number">{number} / 05</span><Icon size={32} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{detail}</p></div><a href={href}>{action} <ArrowUpRight size={17} aria-hidden="true" /></a></article>)}</div>
        </div>
      </section>

      <section className="involvement-bridge" aria-labelledby="involvement-bridge-title"><div className="wrap involvement-bridge-grid"><p className="eyebrow">The point of participation</p><div><h2 className="display" id="involvement-bridge-title">Not a spectator.<br /><em>A collaborator.</em></h2><p>Real change starts in places we know. Ask what a young person can learn, what a maker can sustain, and how a community keeps ownership of its story. Then bring that perspective into a wider conversation.</p><a className="involvement-hero-link" href="/explore/pan-africanism/">Explore the personal learning journey <ArrowUpRight size={17} aria-hidden="true" /></a><p>Keep the conversation going with FEPAR on Facebook.</p><a className="involvement-hero-link" href="https://www.facebook.com/fepar.africa" target="_blank" rel="noopener noreferrer">Follow FEPAR on Facebook <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>

      <section className="involvement-contact" id="raise-hand" aria-labelledby="involvement-contact-title"><div className="wrap involvement-contact-grid"><div><p className="eyebrow">02 / Raise your hand</p><h2 className="display" id="involvement-contact-title">A small first step.<br /><em>A real conversation.</em></h2><p>Tell us how you would like to be involved. Four details are enough to start; no CV or polished proposal needed. If you have a specific project to discuss, use the <a href="/contact/">full inquiry form</a> instead.</p><div className="involvement-contact-mark" aria-hidden="true">F / 77 → NOW</div></div><GetInvolvedForm /></div></section>
    </main>
  );
}
