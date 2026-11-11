import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Diaspora Partnerships & Development",
  description: "Diaspora relationships, development thinking and infrastructure-minded partnerships under the FEPAR ECOSYSTEM umbrella.",
  alternates: { canonical: "/diaspora/" },
  openGraph: { title: "Diaspora Partnerships & Development | FEPAR", description: "Enterprise, diaspora relationships and development partnerships." },
};

const items = [
  { number: "01", title: "Diaspora partnerships", description: "Create meaningful routes for diaspora entrepreneurs, institutions and expertise to participate in African growth." },
  { number: "02", title: "Development thinking", description: "Explore initiatives that strengthen enterprise, community capability and cultural-economic resilience." },
  { number: "03", title: "Infrastructure lens", description: "Think beyond a single project to the systems, relationships and stewardship that let work endure." },
];

export default function DiasporaPage() {
  return <><PageHero crumb="Diaspora Partnerships & Development" eyebrow="01 / Enterprise & diaspora" title="Build the bridges that make African possibility durable." variant="diaspora-hero" action={{ label: "Start a diaspora inquiry", href: "/contact/" }}>The enterprise-facing work of the FEPAR ECOSYSTEM — convening diaspora relationships, development thinking and infrastructure-minded partnerships.</PageHero><section><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">A practical mandate</div><h2 className="display">Long-term thinking.<br />Grounded action.</h2></div><p>We are interested in the patient work of making ideas investable, accountable and useful to the people they are meant to serve.</p></div><FeatureGrid items={items} /><div className="note" data-reveal><div className="eyebrow">Who can partner</div><p>Diaspora networks, public institutions, responsible businesses, development organisations, investors, educators and place-based leaders.</p></div></div></section><section className="light"><div className="wrap section-head" data-reveal><div><div className="eyebrow">Take the next step</div><h2 className="display">Bring us the<br />context, not just the pitch.</h2></div><p>Tell us what you are trying to unlock, who it is for and where a thoughtful partnership could help.</p><a className="cta" href="/contact/">Start a diaspora inquiry <ArrowUpRight size={17} aria-hidden="true" /></a></div></section></>;
}
