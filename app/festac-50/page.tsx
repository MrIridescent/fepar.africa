import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ArrowRight, Globe2, Landmark, Radio, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "FESTAC '77 at 50 — The Second Homecoming",
  description: "Explore FEPAR's invitation-stage vision for a communal, archival and forward-looking digital homecoming for FESTAC '77 at 50.",
  alternates: { canonical: "/festac-50/" },
  openGraph: { title: "FESTAC '77 at 50 — The Second Homecoming | FEPAR", description: "From Dakar 1966 to Lagos 1977 and the cultural futures we shape together." },
};

const sources = [
  { year: "1966", city: "Dakar, Senegal", text: "The First World Festival of Negro Arts", url: "https://archives.nypl.org/scm/20629", source: "New York Public Library archives" },
  { year: "1977", city: "Lagos, Nigeria", text: "The Second World Black and African Festival of Arts and Culture", url: "https://www.unesco.org/archives/multimedia/document-29", source: "UNESCO multimedia archive" },
  { year: "2027", city: "Across Africa and its diaspora", text: "Fifty years since FESTAC '77", url: "https://cbaac.gov.ng/programs/road2festac", source: "CBAAC · Road to FESTAC at 50" },
];

const workstreams = [
  { number: "01", Icon: Landmark, title: "The living archive", subtitle: "Memory needs context and care", text: "A future memory wall could invite families, artists and festival workers to contribute photographs, programmes and first-person accounts. Each item needs provenance, permission and a clear record of who may see or reuse it.", note: "Invitation stage · no uploads are collected here" },
  { number: "02", Icon: Radio, title: "The contemporary stage", subtitle: "Ideas in conversation", text: "A future colloquium could connect cultural workers, thinkers and builders around African and diaspora futures. A creator directory or performance archive would need partners, editorial stewardship and rights agreements first.", note: "Concept only · no directory or licensed streaming is available" },
  { number: "03", Icon: UsersRound, title: "Community mobilization", subtitle: "Many local voices, shared horizon", text: "Community-led gatherings, preservation work and support for independent creators could extend the anniversary beyond one venue. Any grant round or global activation map would need its own organizers, funding and verification process.", note: "Exploration stage · no open grants or event map yet" },
];

export default function Festac50Page() {
  return <>
    <section className="festac-page-hero" aria-labelledby="festac-title">
      <div className="wrap">
        <a className="festac-back" href="/"><ArrowLeft size={15} aria-hidden="true" /> FEPAR</a>
        <p className="eyebrow">1977 — 2027 · A shared horizon</p>
        <h1 className="display" id="festac-title">A second<br /><em>homecoming.</em></h1>
        <p>FESTAC &apos;77 gathered artists and communities in Lagos for the Second World Black and African Festival of Arts and Culture. As that moment reaches fifty years, we can create new ways to remember it — together.</p>
        <a className="cta cta-teal" href="#journey">Follow the journey <ArrowRight size={17} aria-hidden="true" /></a>
        <div className="festac-hero-date" aria-hidden="true"><span>50</span><small>YEARS<br />IN MOTION</small></div>
      </div>
    </section>

    <section className="festac-journey" id="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <div className="jubilee-section-head" data-reveal><p className="eyebrow">A brief, sourced timeline</p><h2 className="display" id="journey-title">Three moments.<br /><em>One long conversation.</em></h2><p>This is a starting point for exploration, not a complete history. Follow the source links for archival records and context.</p></div>
        <ol className="source-timeline">{sources.map((item) => <li key={item.year} data-reveal><div className="source-year">{item.year}</div><div className="source-detail"><span>{item.city}</span><h3>{item.text}</h3><a href={item.url} target="_blank" rel="noreferrer">{item.source}<ArrowUpRight size={15} aria-hidden="true" /></a></div></li>)}</ol>
      </div>
    </section>

    <section className="festac-invitations" aria-labelledby="workstreams-title">
      <div className="wrap">
        <div className="jubilee-section-head" data-reveal><p className="eyebrow">A vision to shape together</p><h2 className="display" id="workstreams-title">Memory into<br /><em>movement.</em></h2><p>These pathways take inspiration from the spirit of FESTAC and the possibilities of a connected digital commons.</p></div>
        <div className="workstream-list">{workstreams.map(({ number, Icon, title, subtitle, text, note }) => <article className="workstream" key={number} data-reveal><span className="workstream-number">{number}</span><div className="workstream-heading"><Icon size={24} strokeWidth={1.4} aria-hidden="true" /><span>{subtitle}</span><h3>{title}</h3></div><p>{text}</p><span className="workstream-note">{note}</span></article>)}</div>
      </div>
    </section>

    <section className="stewardship-section" aria-labelledby="stewardship-title">
      <div className="wrap stewardship-layout"><div data-reveal><p className="eyebrow">Built with care</p><h2 className="display" id="stewardship-title">The future<br />must honour<br /><em>the record.</em></h2></div><div className="stewardship-copy" data-reveal><p className="stewardship-lead">No archive uploads, searchable catalog, creator directory, licensed performance stream, open grant round or global event map is live on this website today.</p><p>This is an invitation to develop those possibilities with the right communities, archive holders and cultural partners. Stories and materials should be shared only with clear consent and a plan for how they will be preserved and used.</p><a href="mailto:hello@fepar.africa?subject=FESTAC%20at%2050%20%E2%80%94%20help%20shape%20the%20work" className="text-link">Help shape the work <ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
    </section>

    <section className="language-section" aria-labelledby="language-title"><div className="wrap language-layout"><Globe2 size={32} strokeWidth={1.3} aria-hidden="true" /><div><p className="eyebrow">Access is part of the work</p><h2 className="display" id="language-title">Many languages.<br /><em>Many ways in.</em></h2></div><div><p>The current site is in English. We welcome partners who can help develop careful translations in French, Portuguese, Swahili and Yoruba.</p><a href="mailto:hello@fepar.africa?subject=FESTAC%20at%2050%20%E2%80%94%20language%20access">Talk with us about language access <ArrowUpRight size={15} aria-hidden="true" /></a></div></div></section>

    <section className="festac-close"><div className="wrap festac-close-inner"><span>01 — 77</span><div><p className="eyebrow">A note, a memory, a partnership</p><h2 className="display">The next chapter<br /><em>is ours to shape.</em></h2><p>Tell us what you remember, what you are researching, or what kind of future-facing cultural work you want to explore.</p><a className="cta cta-light" href="mailto:hello@fepar.africa?subject=FESTAC%20at%2050%20%E2%80%94%20join%20the%20conversation">Write to FEPAR <ArrowRight size={17} aria-hidden="true" /></a></div></div></section>
  </>;
}
