import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Careers & Volunteering",
  description: "Interested in contributing to FEPAR? Introduce your skills and availability for future conversations about culture, learning, technology and community work. No roles are advertised here.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers & Volunteering | FEPAR",
    description: "Introduce your skills for future FEPAR conversations in culture, learning and community work; no roles are advertised here.",
    url: "/careers/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Careers and volunteering" }],
  },
};

const interests = [
  { number: "01", title: "Culture & creative practice", detail: "Performance, storytelling, music, design and cultural research." },
  { number: "02", title: "Knowledge & technology", detail: "Education, STEM, digital tools and accessible learning." },
  { number: "03", title: "Community & connection", detail: "Diaspora relationships, coordination, communications and events." },
  { number: "04", title: "Building capacity", detail: "Operations, partnerships, fundraising and practical support." },
];

export default function CareersPage() {
  return (
    <main>
      <section className="careers-hero">
        <div className="wrap careers-intro">
          <p className="eyebrow">FEPAR / People & possibility</p>
          <h1 className="display">There is room<br />for <em>your contribution.</em></h1>
          <p className="careers-lede">A Pan-African future takes many hands. Whether you are seeking work or offering your time, tell us what you can bring and what you hope to build.</p>
          <div className="actions"><a className="cta" href="#paths">Explore ways to join <ArrowRight size={17} aria-hidden="true" /></a><a className="text-link" href="#interest">Share your interest <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="careers-hero-foot" aria-label="Ways to contribute"><span>Work with us</span><span>Volunteer with us</span><span>Build across borders</span></div>
        </div>
      </section>

      <section className="careers-paths" id="paths" aria-labelledby="careers-paths-title">
        <div className="wrap">
          <div className="section-heading"><p className="eyebrow">Two ways in / One shared direction</p><h2 className="display" id="careers-paths-title">Bring your<br /><em>whole perspective.</em></h2><p className="section-intro">We welcome people at different stages and in different places. Start with the route that fits you.</p></div>
          <div className="careers-path-grid">
            <article className="careers-path"><span className="careers-path-number">01 / Career interest</span><Lightbulb aria-hidden="true" size={35} strokeWidth={1.4} /><h3>Work with FEPAR</h3><p>Interested in joining a future team? Share your experience, the kind of work you seek, and a portfolio or profile link if you have one.</p><p className="careers-path-note">No specific vacancies are listed here right now. An expression of interest is not an application to an open role.</p><a href="#interest">Express career interest <ArrowUpRight size={17} aria-hidden="true" /></a></article>
            <article className="careers-path"><span className="careers-path-number">02 / Volunteer & contribute</span><HeartHandshake aria-hidden="true" size={35} strokeWidth={1.4} /><h3>Give your time & skills</h3><p>Offer practical help, creative expertise, mentorship, research or a useful connection. Tell us what interests you and the time you could contribute.</p><p className="careers-path-note">An introduction lets us explore a fit; it does not commit you to a role or schedule.</p><a href="#interest">Introduce yourself as a volunteer <ArrowUpRight size={17} aria-hidden="true" /></a></article>
          </div>
        </div>
      </section>

      <section className="careers-interests light" aria-labelledby="careers-interests-title"><div className="wrap"><div className="section-head"><div><p className="eyebrow">Where your strengths might fit</p><h2 className="display" id="careers-interests-title">Many disciplines.<br /><em>Shared purpose.</em></h2></div><p>These are areas of interest, not advertised openings or established volunteer placements. If your strengths are elsewhere, we still want to hear your idea.</p></div><div className="careers-interest-list">{interests.map((interest) => <article key={interest.number}><span>{interest.number}</span><h3>{interest.title}</h3><p>{interest.detail}</p></article>)}</div></div></section>

      <section className="careers-apply" id="interest" aria-labelledby="careers-apply-title"><div className="wrap careers-apply-grid"><div><p className="eyebrow">Your first step</p><h2 className="display" id="careers-apply-title">Start with<br /><em>a conversation.</em></h2><p>Use the inquiry form to introduce yourself. Choose <strong>Career / team interest</strong> or <strong>Volunteer / contributor</strong> under inquiry type, then share your skills, location, availability and relevant work links in your message. A CV or attachment is not required.</p><div className="careers-process"><div><span>01</span><p>Choose the path that fits.</p></div><div><span>02</span><p>Tell us what you can bring.</p></div><div><span>03</span><p>We will consider your note and respond when a relevant conversation is possible.</p></div></div><p className="careers-fallback">Prefer email or unable to use the form? <a href="mailto:hello@fepar.africa?subject=FEPAR%20career%20or%20volunteer%20interest">Write to hello@fepar.africa <ArrowUpRight size={15} aria-hidden="true" /></a></p></div><div><InquiryForm /></div></div></section>

      <section className="careers-end" aria-labelledby="careers-end-title"><div className="wrap careers-end-grid"><Users size={44} strokeWidth={1.2} aria-hidden="true" /><div><p className="eyebrow">Good to know</p><h2 className="display" id="careers-end-title">You belong in<br /><em>the conversation.</em></h2><p>We welcome interest from across Africa and its diaspora. Not every inquiry will match an immediate opportunity, but your perspective can help shape what comes next.</p></div></div></section>
    </main>
  );
}
