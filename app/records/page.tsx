import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Artist Pathways & Cultural Industries",
  description: "Artist and producer pathways, music, rights and cultural industries under the FEPAR ECOSYSTEM umbrella.",
  alternates: { canonical: "/records/" },
  openGraph: { title: "Artist Pathways & Cultural Industries | FEPAR", description: "Talent development, music, rights and cultural collaboration." },
};

const items = [
  { number: "01", title: "Artist pathways", description: "A clearer route from early practice to professional development, collaboration and audience." },
  { number: "02", title: "Rights & licensing", description: "Respectful, transparent approaches to ownership, sync, licensing and cultural stewardship." },
  { number: "03", title: "Producer community", description: "Spaces for producers, writers and creative partners to exchange skills and build stronger work." },
];

export default function RecordsPage() {
  return <><PageHero crumb="Artist Pathways & Cultural Industries" eyebrow="02 / Music, talent & rights" title="Make room for African talent to move." variant="records-hero" action={{ label: "Artist / licensing inquiry", href: "/contact/" }}>Our artist pathways and cultural industries work develops artist and producer routes, protects cultural work and creates thoughtful paths to audiences, licensing and collaboration.</PageHero><section className="indigo"><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">The Records lens</div><h2 className="display">Culture is a form<br />of infrastructure.</h2></div><p>Music and creative work carry memory, identity and economic possibility. We build with the people who make it.</p></div><FeatureGrid items={items} /></div></section><section className="light"><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">For collaborators</div><h2 className="display">Bring your sound,<br />story or opportunity.</h2></div><p>Artists, producers, labels, supervisors, educators and brands can find a considered starting point here.</p></div><div className="actions" data-reveal><a className="cta" href="/contact/">Artist / licensing inquiry <ArrowUpRight size={17} aria-hidden="true" /></a><a className="ghost" href="/development/">See development priorities</a></div></div></section></>;
}
