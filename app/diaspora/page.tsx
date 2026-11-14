import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Diaspora Partnerships & Development",
  description: "Explore reciprocal diaspora connections for cultural heritage, practical learning and creative work, grounded in community priorities and fair terms.",
  alternates: { canonical: "/diaspora/" },
  openGraph: { title: "Diaspora Partnerships & Development | FEPAR", description: "Explore reciprocal relationships between African communities and the diaspora, with a focus on lasting, accountable partnerships.", url: "/diaspora/", images: ["/og-image.png"] },
};

const items = [
  { number: "01", title: "Listen locally", description: "Begin with a community-defined need and existing practitioners, not an outside solution looking for a home." },
  { number: "02", title: "Exchange fairly", description: "Discuss who brings knowledge, who is paid, who owns the work and how each side can say no or change course." },
  { number: "03", title: "Plan for continuity", description: "Ask who maintains tools, relationships and records after an introduction or pilot has ended." },
];

export default function DiasporaPage() {
  return <><PageHero crumb="Diaspora Partnerships & Development" eyebrow="01 / Enterprise & diaspora" title="Build the bridges that make African possibility durable." variant="diaspora-hero" action={{ label: "Start a diaspora inquiry", href: "/contact/" }}>FEPAR is exploring how diaspora networks and place-based communities might share knowledge, resources and responsibility on fair terms. These are conversation starters, not established partnerships or funded projects.</PageHero><section><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">A practical mandate</div><h2 className="display">Long-term thinking.<br />Grounded action.</h2></div><p>We are interested in the patient work of making ideas investable, accountable and useful to the people they are meant to serve.</p></div><FeatureGrid items={items} /><div className="note" data-reveal><div className="eyebrow">Who can partner</div><p>Diaspora networks, public institutions, responsible businesses, development organisations, investors, educators and place-based leaders.</p></div></div></section><section className="light"><div className="wrap section-head" data-reveal><div><div className="eyebrow">Take the next step</div><h2 className="display">Bring us the<br />context, not just the pitch.</h2></div><p>Tell us what you are trying to unlock, who it is for and where a thoughtful partnership could help.</p><a className="cta" href="/contact/">Start a diaspora inquiry <ArrowUpRight size={17} aria-hidden="true" /></a></div></section></>;
}
