import { ArrowDownRight, ArrowRight, ArrowUpRight, Globe2, Music2 } from "lucide-react";
import type { Metadata } from "next";
import { MilestoneCarousel } from "@/components/MilestoneCarousel";
import { PinScrubStory } from "@/components/PinScrubStory";

export const metadata: Metadata = {
  title: "FESTAC '77 at 50 — The Second Homecoming",
  description: "As FESTAC '77 turns 50 in 2027, FEPAR looks toward a digital second homecoming for African and diaspora memory, ideas and creative futures.",
  alternates: { canonical: "/" },
  openGraph: { title: "FESTAC '77 at 50 — The Second Homecoming | FEPAR", description: "A living cultural memory, carried forward by Africa and its diaspora." },
};

const milestones = [
  { year: "1966", place: "Dakar · Senegal", title: "A first world festival", body: "The First World Festival of Negro Arts brought artists and ideas together in Dakar.", href: "https://archives.nypl.org/scm/20629", link: "Explore the NYPL archive" },
  { year: "1977", place: "Lagos · Nigeria", title: "A continental homecoming", body: "FESTAC '77 became the Second World Black and African Festival of Arts and Culture.", href: "https://www.unesco.org/archives/multimedia/document-29", link: "View the UNESCO archive record" },
  { year: "2027", place: "Africa ↔ diaspora", title: "Fifty years, still becoming", body: "A golden jubilee opens space to remember together and imagine what comes next.", href: "https://cbaac.gov.ng/programs/road2festac", link: "See CBAAC’s Road to FESTAC at 50" },
];

const storyBeats = [
  { year: "1966", place: "Dakar · Senegal", title: "A first world festival", body: "The First World Festival of Negro Arts brought artists and ideas together in Dakar.", href: "https://archives.nypl.org/scm/20629", source: "Explore the NYPL archive" },
  { year: "1977", place: "Lagos · Nigeria", title: "A continental homecoming", body: "FESTAC '77 became the Second World Black and African Festival of Arts and Culture.", href: "https://www.unesco.org/archives/multimedia/document-29", source: "View the UNESCO archive record" },
  { year: "2027", place: "Africa ↔ diaspora", title: "Fifty years, still becoming", body: "A golden jubilee opens space to remember together and imagine what comes next.", href: "https://cbaac.gov.ng/programs/road2festac", source: "See CBAAC’s Road to FESTAC at 50" },
];

const invitations = [
  { number: "01", title: "The living archive", tag: "A proposal for shared memory", body: "Family photographs, programmes, letters and first-person accounts can help widen the record. Any public archive must begin with consent, provenance and careful stewardship.", action: "Share a memory", href: "mailto:hello@fepar.africa?subject=FESTAC%20at%2050%20%E2%80%94%20memory" },
  { number: "02", title: "The contemporary stage", tag: "Ideas for exchange", body: "A future colloquium and creator network could bring artists, researchers and builders into conversation about culture, technology and African futures.", action: "Help shape the conversation", href: "mailto:hello@fepar.africa?subject=FESTAC%20at%2050%20%E2%80%94%20conversation" },
  { number: "03", title: "Community mobilization", tag: "Ideas for local action", body: "Locally led gatherings, creative support and preservation projects can carry the spirit of FESTAC forward in ways communities choose for themselves.", action: "Explore a partnership", href: "/contact/" },
];

export default function HomePage() {
  return <>
    <section className="jubilee-hero" aria-labelledby="hero-title">
      <div className="wrap jubilee-hero-inner">
        <div className="jubilee-copy">
          <p className="eyebrow" data-hero-in><span className="eyebrow-line" />FESTAC &apos;77 · Golden Jubilee · 2027</p>
          <h1 className="display" id="hero-title" data-hero-in>A second<br /><em>homecoming.</em></h1>
          <p className="jubilee-lede" data-hero-in>Fifty years after Lagos welcomed the world, carry the memory forward — across Africa, across the diaspora, and into futures still being made.</p>
          <div className="actions" data-hero-in><a className="cta cta-teal" href="/festac-50/">Explore the 50-year journey <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href="#timeline">Begin with the timeline <ArrowDownRight size={17} aria-hidden="true" /></a></div>
          <p className="jubilee-caption">A FEPAR invitation to remember, connect and imagine.</p>
        </div>
        <div className="jubilee-poster" aria-label="FESTAC '77 at 50, 1977 to 2027">
          <div className="poster-orbit poster-orbit-one" /><div className="poster-orbit poster-orbit-two" /><div className="poster-crosshair" />
          <div className="poster-number">50</div>
          <span className="poster-date">1977 <i>—</i> 2027</span>
          <span className="poster-label poster-label-top">Memory is a meeting place</span>
          <span className="poster-label poster-label-bottom">Lagos / Africa / diaspora</span>
          <span className="poster-node poster-node-one" /><span className="poster-node poster-node-two" /><span className="poster-node poster-node-three" />
          <span className="poster-stamp">FESTAC<br />AT FIFTY</span>
        </div>
      </div>
      <div className="wrap jubilee-ribbon"><span>Remember / Reconnect / Reimagine</span><a href="#timeline" aria-label="Scroll to the timeline">↓</a><span className="ribbon-side">LAGOS 1977 — 2027</span></div>
    </section>

    <PinScrubStory beats={storyBeats} />

    <MilestoneCarousel items={milestones} />

    <section className="homecoming-section" aria-labelledby="homecoming-title">
      <div className="wrap homecoming-layout"><p className="eyebrow" data-reveal>Not nostalgia. A living inheritance.</p><div className="homecoming-title" data-reveal><span className="homecoming-glyph" aria-hidden="true">↗</span><h2 className="display" id="homecoming-title">A digital<br />second <em>home.</em></h2></div><div className="homecoming-copy" data-reveal><p className="homecoming-lead">FESTAC was a meeting of cultures, ideas and possibility. Its fiftieth anniversary can become more than a date on a calendar.</p><p>It can be a shared space for family memory, rigorous history, contemporary thought and the people building what comes next. The work should be shaped with communities and held with care.</p><a className="text-link dark-link" href="/festac-50/">Discover the invitation <ArrowRight size={17} aria-hidden="true" /></a></div></div>
    </section>

    <section className="invitation-section" aria-labelledby="invitation-title">
      <div className="wrap">
        <div className="jubilee-section-head" data-reveal><p className="eyebrow">A future to build together</p><h2 className="display" id="invitation-title">The next movement<br /><em>is communal.</em></h2><p>Three invitation-stage pathways for a renaissance platform rooted in memory and open to possibility.</p></div>
        <div className="invitation-list">{invitations.map((item) => <article className="invitation-row" key={item.number} data-reveal><span className="invitation-number">{item.number}</span><div className="invitation-title"><span>{item.tag}</span><h3>{item.title}</h3></div><p>{item.body}</p><a href={item.href}>{item.action}<ArrowUpRight size={17} aria-hidden="true" /></a></article>)}</div>
        <p className="status-note"><span className="status-mark" />These are ideas to shape together. This site does not yet host an archive, event listing, grant programme or creator directory.</p>
      </div>
    </section>

    <section className="fepar-lanes" aria-labelledby="lanes-title"><div className="wrap"><div className="lane-intro" data-reveal><p className="eyebrow">FEPAR · the wider platform</p><h2 className="display" id="lanes-title">Many kinds of work.<br /><em>Connected with purpose.</em></h2><p>FEPAR connects people and organizations across enterprise, diaspora partnerships, creative industries, youth, development, heritage and more.</p></div><div className="lane-links"><a href="/diaspora/" data-reveal><span>01 / PEOPLE & PARTNERSHIPS</span><strong>Fepar Diaspora Limited</strong><Globe2 size={22} aria-hidden="true" /></a><a href="/records/" data-reveal><span>02 / CULTURE & RIGHTS</span><strong>Fepar Records Ltd</strong><Music2 size={22} aria-hidden="true" /></a></div><a className="what-more-link" href="/what-we-do/">See the full breakdown of FEPAR&apos;s work <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

    <section className="jubilee-close" aria-labelledby="close-title"><div className="wrap jubilee-close-inner"><p className="eyebrow">Your memory belongs in the conversation</p><h2 className="display" id="close-title">What should<br /><em>we carry forward?</em></h2><div><p>Bring a family story, a research lead, a creative idea or a partnership. Help shape a careful, community-led road to 2027.</p><a className="cta cta-light" href="/festac-50/">Join the conversation <ArrowRight size={18} aria-hidden="true" /></a></div></div></section>
  </>;
}
