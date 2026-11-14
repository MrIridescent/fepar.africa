import type { Metadata } from "next";
import { ArrowUpRight, Atom, Cpu, Leaf, Microscope, Network, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Innovation & STEM",
  description: "Explore FEPAR's ideas for African-led innovation: practical STEM learning, climate literacy and creative problem-solving grounded in community questions.",
  alternates: { canonical: "/innovation/" },
  openGraph: { title: "Innovation & STEM | FEPAR", description: "Practical STEM learning, climate literacy and African-led creative problem-solving.", url: "/innovation/", images: ["/og-image.png"] },
};

const bridges = [
  { icon: Microscope, label: "Learn", title: "Make curiosity practical", body: "Create routes into science, technology, engineering and mathematics that begin with local questions, lived experience and the confidence to test an idea." },
  { icon: Leaf, label: "Adapt", title: "Design for a changing climate", body: "Pair climate literacy with creative problem-solving: from resilient neighbourhoods and circular practice to better ways of sharing evidence." },
  { icon: Network, label: "Connect", title: "Move knowledge across borders", body: "Bring young people, researchers, makers, institutions and diaspora expertise into reciprocal conversations rather than one-way extraction." },
];

const signals = [
  ["01", "Creative technology", "Digital tools can widen access to culture, markets and learning when they are designed around people—not hype."],
  ["02", "Evidence & imagination", "Good innovation holds data and imagination together. FEPAR makes room for research, prototyping and cultural insight."],
  ["03", "Enterprise with purpose", "Ideas need durable pathways: mentorship, responsible partnerships, skills and infrastructure that help people carry work forward."],
];

export default function InnovationPage() {
  return (
    <>
      <PageHero crumb="Innovation & STEM" eyebrow="The next bridge" title="Where cultural intelligence meets the questions of tomorrow." variant="innovation-hero" action={{ label: "Start a conversation", href: "/contact/" }}>
        FEPAR is exploring how STEM learning and African creativity can work together—supporting people who are already imagining fairer, more resilient futures.
      </PageHero>
      <section className="innovation-intro">
        <div className="wrap innovation-intro-grid">
          <div>
            <p className="eyebrow"><Atom size={15} aria-hidden="true" /> STEM / CULTURE / POSSIBILITY</p>
            <h2 className="display">Innovation is a practice of <em>attention.</em></h2>
          </div>
          <p>We do not present a finished programme or claim outcomes that have not happened. This is a direction for partnership: connect the tools of STEM with the wisdom of communities, artists and entrepreneurs across Africa and its diaspora.</p>
        </div>
      </section>
      <section className="light innovation-bridges">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div><p className="eyebrow">Three bridges</p><h2 className="display">From questions<br />to shared capacity.</h2></div>
            <p>Meaningful innovation starts with the people closest to a challenge and grows through exchange.</p>
          </div>
          <div className="innovation-bridge-grid">
            {bridges.map(({ icon: Icon, ...bridge }) => <article className="innovation-bridge" key={bridge.label} data-reveal><span className="innovation-icon"><Icon size={22} aria-hidden="true" /></span><span className="eyebrow">{bridge.label}</span><h3>{bridge.title}</h3><p>{bridge.body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="innovation-signals">
        <div className="wrap">
          <div className="innovation-signals-head"><div><p className="eyebrow">A working proposition</p><h2 className="display">Build slowly.<br /><em>Share honestly.</em></h2></div><Sparkles size={42} strokeWidth={1} aria-hidden="true" /></div>
          <div className="innovation-signal-list">{signals.map(([number, title, body]) => <article key={number} data-reveal><strong>{number}</strong><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <section className="focus-intro" aria-labelledby="innovation-digital-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">Cultural intelligence / current tools</p><h2 className="display" id="innovation-digital-title">AI is a tool.<br /><em>People set the terms.</em></h2></div><div><p>Explore digital storytelling, language technologies, games and responsible AI through the lens of consent, credit and local access. We are exploring this direction with communities, not advertising an operating AI programme.</p><a className="text-link" href="/digital-futures/">Explore digital creativity & AI <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
      <section className="innovation-cta"><div className="wrap"><Cpu size={38} strokeWidth={1} aria-hidden="true" /><p className="eyebrow">Have a question worth testing?</p><h2 className="display">Bring the problem,<br /><em>not just the pitch.</em></h2><a className="cta" href="/contact/">Explore a partnership <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
    </>
  );
}
