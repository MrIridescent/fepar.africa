import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Development & Impact",
  description: "FEPAR development priorities include youth, talent, enterprise, cultural rights and infrastructure.",
  alternates: { canonical: "/development/" },
  openGraph: { title: "Development & Impact | FEPAR", description: "FEPAR priorities for partnership, learning and exploration." },
};

const items = [
  { number: "01", title: "Youth development", description: "Support young Africans with pathways to skills, confidence, meaningful work and leadership." },
  { number: "02", title: "Talent & enterprise", description: "Connect creative and entrepreneurial talent to mentorship, markets, resources and peer networks." },
  { number: "03", title: "Cultural rights", description: "Advance the recognition, protection and responsible circulation of African cultural knowledge and work." },
  { number: "04", title: "Infrastructure & industry", description: "Explore the practical foundations — spaces, systems, policy and partnerships — that enable industries to thrive." },
  { number: "05", title: "Diaspora connection", description: "Turn global relationships into reciprocal learning, investment and institution-building." },
  { number: "06", title: "Research & learning", description: "Make room for evidence, lived experience and honest reflection before scaling an idea." },
];

export default function DevelopmentPage() {
  return <><PageHero crumb="Development & Impact" eyebrow="Priorities, not claims" title="Development that keeps people, culture and capability in view." variant="development-hero" action={{ label: "Explore a partnership", href: "/contact/" }}>Our focus areas are priorities for partnership and exploration — not claims of completed projects. We invite serious collaborators to help shape what comes next.</PageHero><section className="light"><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">Focus areas</div><h2 className="display">Where we are<br />looking to learn and build.</h2></div><p>Each priority connects to the wider FEPAR proposition: agency, dignity, opportunity and durable systems.</p></div><FeatureGrid items={items} /></div></section><section><div className="wrap section-head" data-reveal><div><div className="eyebrow">Support a priority</div><h2 className="display">There is no single<br />way to contribute.</h2></div><p>Fund a conversation, share expertise, connect an institution, commission creative work or help us test a proposition.</p><a className="cta" href="/contact/">Explore a partnership <ArrowUpRight size={17} aria-hidden="true" /></a></div></section></>;
}
