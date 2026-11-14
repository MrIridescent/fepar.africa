import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CSR & Grant Partnerships for Pan-African Culture and Youth",
  description: "Explore CSR, foundation and grant partnerships with FEPAR around FESTAC at 50, African cultural heritage, youth skills and crafts. An invitation to co-design, not an open grant programme.",
  keywords: ["Pan-African CSR partnerships", "African cultural heritage grants", "FESTAC at 50 partnerships", "youth skills Africa", "creative industries partnerships Africa", "FEPAR partners"],
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "CSR & Grant Partnerships for Pan-African Culture and Youth | FEPAR",
    description: "Talk with FEPAR about responsible partnerships in FESTAC heritage, youth skills, creative work and diaspora exchange.",
    url: "/partners/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Partners" }],
  },
};

const opportunities = [
  { title: "Youth skills & crafts", body: "Explore practical learning with local makers and young people: knowledge that can be used, shared and turned into sustainable work." },
  { title: "Culture & creative livelihoods", body: "Discuss artist-led opportunities with fair terms, consent, attribution and routes to audiences that respect cultural ownership." },
  { title: "FESTAC at 50 & heritage", body: "Help shape thoughtful approaches to FESTAC '77 memory, archival stewardship and the 2027 anniversary without claiming to run an official festival." },
  { title: "Diaspora & community exchange", body: "Connect people and institutions across Africa and its diaspora through reciprocal knowledge-sharing rather than one-way extraction." },
];

const partnershipPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://fepar.africa/partners/#webpage",
  name: "CSR & Grant Partnerships for Pan-African Culture and Youth | FEPAR",
  url: "https://fepar.africa/partners/",
  description: "An invitation to discuss CSR, foundation and grant partnerships around cultural heritage, youth skills and FESTAC at 50.",
  about: { "@id": "https://fepar.africa/#organization" },
  inLanguage: "en",
};

export default function PartnersPage() {
  return (
    <>
      <section className="partners-hero" aria-labelledby="partners-title">
        <div className="wrap">
          <p className="eyebrow">FEPAR / Partnerships across Africa and its diaspora</p>
          <h1 className="display" id="partners-title">CSR &amp; grant partnerships<br /><em>for a living renaissance.</em></h1>
          <p className="lede">FEPAR is seeking conversations with companies, foundations, cultural organisations and grantmakers who care about Pan-African heritage, youth capability and creative self-reliance. Bring a question, a community priority or an idea we can explore together.</p>
          <a className="cta" href="/contact/">Start a partnership conversation <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="partners-opportunities light" aria-labelledby="partners-opportunities-title">
        <div className="wrap">
          <div className="section-head"><div><p className="eyebrow">Where support could matter</p><h2 className="display" id="partners-opportunities-title">Build with people.<br /><em>Not just projects.</em></h2></div><p>These are directions for potential collaboration, not funded programmes or grant calls currently open on this site.</p></div>
          <div className="partners-opportunities-grid">{opportunities.map((opportunity, index) => <article key={opportunity.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{opportunity.title}</h3><p>{opportunity.body}</p></article>)}</div>
        </div>
      </section>

      <section className="partners-invitation" aria-labelledby="partners-invitation-title">
        <div className="wrap partners-invitation-grid">
          <div><p className="eyebrow">For CSR teams, foundations &amp; collaborators</p><h2 className="display" id="partners-invitation-title">What would a useful partnership <em>look like?</em></h2></div>
          <div><p>Tell us who you are, the people or place you hope to support, what resources you can bring and how you would measure value with the community. We can discuss scope, safeguarding, rights and accountability before making public commitments.</p><p>FEPAR does not currently publish an open grant round or claim that funding is secured. If you are looking to give a grant or develop a corporate social responsibility partnership, we welcome an introductory conversation.</p><a className="cta cta-light" href="/contact/">Contact FEPAR <ArrowUpRight size={18} aria-hidden="true" /></a><a className="partners-invitation-link" href="/festac-50/">Explore FESTAC at 50 <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipPage).replace(/</g, "\\u003c") }} />
    </>
  );
}