import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";

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
          <div className="actions"><a className="cta" href="#interest">Explore ways to join <ArrowRight size={17} aria-hidden="true" /></a><a className="text-link" href="#volunteer-interest">Offer your time <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="careers-hero-foot" aria-label="Ways to contribute"><span>Work with us</span><span>Volunteer with us</span><span>Build across borders</span></div>
        </div>
      </section>

      <section className="careers-paths" id="interest" aria-labelledby="careers-paths-title">
        <div className="wrap">
          <div className="section-heading"><p className="eyebrow">Two ways in / One shared direction</p><h2 className="display" id="careers-paths-title">Bring your<br /><em>whole perspective.</em></h2><p className="section-intro">We welcome people at different stages and in different places. Start with the route that fits you.</p></div>
          <div className="careers-path-grid">
            <article className="careers-path"><span className="careers-path-number">01 / Career interest</span><Lightbulb aria-hidden="true" size={35} strokeWidth={1.4} /><h3>Work with FEPAR</h3><p>Interested in joining a future team? Share your experience, the kind of work you seek, and a portfolio or profile link if you have one.</p><p className="careers-path-note">No specific vacancies are listed here right now. An expression of interest is not an application to an open role.</p><a href="#career-interest">Express career interest <ArrowUpRight size={17} aria-hidden="true" /></a></article>
            <article className="careers-path"><span className="careers-path-number">02 / Volunteer & contribute</span><HeartHandshake aria-hidden="true" size={35} strokeWidth={1.4} /><h3>Give your time & skills</h3><p>Offer practical help, creative expertise, mentorship, research or a useful connection. Tell us what interests you and the time you could contribute.</p><p className="careers-path-note">An introduction lets us explore a fit; it does not commit you to a role or schedule.</p><a href="#volunteer-interest">Introduce yourself as a volunteer <ArrowUpRight size={17} aria-hidden="true" /></a></article>
          </div>
        </div>
      </section>

      <section className="careers-interests light" aria-labelledby="careers-interests-title"><div className="wrap"><div className="section-head"><div><p className="eyebrow">Where your strengths might fit</p><h2 className="display" id="careers-interests-title">Many disciplines.<br /><em>Shared purpose.</em></h2></div><p>These are areas of interest, not advertised openings or established volunteer placements. If your strengths are elsewhere, we still want to hear your idea.</p></div><div className="careers-interest-list">{interests.map((interest) => <article key={interest.number}><span>{interest.number}</span><h3>{interest.title}</h3><p>{interest.detail}</p></article>)}</div></div></section>

      <section className="careers-apply" id="career-interest" aria-labelledby="career-interest-title">
        <div className="wrap careers-apply-grid">
          <div>
            <p className="eyebrow">01 / Career introduction</p>
            <h2 className="display" id="career-interest-title">Tell us about<br /><em>your work.</em></h2>
            <p>Seeking future paid work with FEPAR? Share the kind of work you seek, your experience, availability and an optional portfolio link. We have no advertised vacancies and cannot promise an interview or a role.</p>
            <p className="careers-fallback">Prefer email? <a href="mailto:hello%40fepar.africa?subject=FEPAR%20career%20introduction">Send a career introduction <ArrowUpRight size={15} aria-hidden="true" /></a></p>
            <p className="careers-crosslink">Offering time instead? <a href="#volunteer-interest">Go to the volunteer introduction <ArrowUpRight size={15} aria-hidden="true" /></a></p>
          </div>
          <GetInvolvedForm mode="career" />
        </div>
      </section>

      <section className="careers-apply careers-apply-volunteer" id="volunteer-interest" aria-labelledby="volunteer-interest-title">
        <div className="wrap careers-apply-grid">
          <div>
            <p className="eyebrow">02 / Volunteer introduction</p>
            <h2 className="display" id="volunteer-interest-title">Tell us what<br /><em>you could offer.</em></h2>
            <p>Want to contribute time or skills? Tell us what you could help with and when you are available. This is a conversation, not a placement or a commitment to a schedule.</p>
            <p className="careers-fallback">Prefer email? <a href="mailto:hello%40fepar.africa?subject=FEPAR%20volunteer%20introduction">Send a volunteer introduction <ArrowUpRight size={15} aria-hidden="true" /></a></p>
            <p className="careers-crosslink">Looking for future paid work? <a href="#career-interest">Go to the career introduction <ArrowUpRight size={15} aria-hidden="true" /></a></p>
          </div>
          <GetInvolvedForm mode="volunteer" />
        </div>
      </section>

      <section className="careers-end" aria-labelledby="careers-end-title"><div className="wrap careers-end-grid"><Users size={44} strokeWidth={1.2} aria-hidden="true" /><div><p className="eyebrow">Good to know</p><h2 className="display" id="careers-end-title">You belong in<br /><em>the conversation.</em></h2><p>We welcome interest from across Africa and its diaspora. Not every inquiry will match an immediate opportunity, but your perspective can help shape what comes next.</p></div></div></section>
    </main>
  );
}
