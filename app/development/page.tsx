import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, HandHeart, Hammer, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Youth Development, Skills & Self-Reliance",
  description: "Explore FEPAR's humanitarian direction for youth development, practical skills, crafts and creativity for self-reliance, grounded in community needs rather than hype.",
  alternates: { canonical: "/development/" },
  openGraph: { title: "Youth Development, Skills & Self-Reliance | FEPAR", description: "Explore FEPAR's direction for youth learning, practical skills and crafts shaped by community needs.", url: "/development/", images: ["/og-image.png"] },
};

const items = [
  { number: "01", title: "Youth development", description: "Listen to young people, then shape routes into practical learning, confidence, meaningful work and leadership with them." },
  { number: "02", title: "Skills & crafts", description: "Value making, repair, design and digital fluency as real capabilities. Explore learning alongside working craftspeople and local enterprises." },
  { number: "03", title: "Cultural rights", description: "Advance the recognition, protection and responsible circulation of African cultural knowledge and work." },
  { number: "04", title: "Infrastructure & industry", description: "Explore the practical foundations — spaces, systems, policy and partnerships — that enable industries to thrive." },
  { number: "05", title: "Diaspora connection", description: "Turn global relationships into reciprocal learning, investment and institution-building." },
  { number: "06", title: "Research & learning", description: "Make room for evidence, lived experience and honest reflection before scaling an idea." },
];

const pathways = [
  { number: "01", Icon: Hammer, label: "Skills & crafts", title: "Make something useful.", description: "Textiles, fabrication, food, repair, sound and digital production are different forms of applied intelligence. We want to explore learning with practitioners, using real briefs, safe tools and work people can show or use." },
  { number: "02", Icon: Lightbulb, label: "Creative self-reliance", title: "Know what the work is worth.", description: "A skill becomes more durable when a maker can cost materials, document a process, set fair terms, find customers and keep ownership of their ideas. Practical enterprise matters as much as visibility." },
  { number: "03", Icon: HandHeart, label: "Community care", title: "Build with, not for.", description: "Humanitarian intent begins with listening. Accessibility, local priorities, safeguarding and shared decision-making should shape any youth pathway before anyone announces a programme or measures its reach." },
];

export default function DevelopmentPage() {
  return (
    <>
      <PageHero crumb="Youth & Skills" eyebrow="Humanitarian purpose / practical possibility" title="Creativity for self-reliance. Not just applause." variant="development-hero" action={{ label: "Explore the pathways", href: "#practical-pathways" }}>
        FEPAR&apos;s development direction begins with young people and the skills that help them make, adapt and earn with dignity. These are priorities we want to shape with communities, not claims of programmes already running.
      </PageHero>

      <section className="development-thesis" aria-labelledby="development-thesis-title">
        <div className="wrap development-thesis-grid" data-reveal>
          <div><p className="eyebrow">Beyond the hype</p><h2 className="display" id="development-thesis-title">A future you can<br /><em>actually make.</em></h2></div>
          <div><p>Afrofuturism is more than an image of tomorrow. To us, it is the freedom to imagine African futures and the everyday capacity to build them: a craft learned, a tool repaired, a local need met, a livelihood made more resilient.</p><p>We value useful work over trends, honest learning over polished claims, and the person behind each idea over the attention it attracts.</p></div>
        </div>
      </section>

      <section className="development-pathways" id="practical-pathways" aria-labelledby="development-pathways-title">
        <div className="wrap">
          <div className="development-pathways-head" data-reveal><p className="eyebrow">A working direction / not an open programme</p><h2 className="display" id="development-pathways-title">Learn it. Make it.<br /><em>Carry it forward.</em></h2><p>Three connected questions for young makers, educators, craftspeople and community partners to explore together.</p></div>
          <div className="development-pathways-grid">
            {pathways.map(({ number, Icon, label, title, description }) => (
              <article className="development-pathway" key={number} data-reveal>
                <div className="development-pathway-top"><span>{number} / {label}</span><Icon size={26} strokeWidth={1.4} aria-hidden="true" /></div>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
          <a className="development-pathways-link" href="/contact/">Help shape a practical pathway <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="maker-practice" aria-labelledby="maker-practice-title"><div className="wrap maker-practice-layout"><div><p className="eyebrow">A practical starting point</p><h2 className="display" id="maker-practice-title">A craft is more<br /><em>than a product.</em></h2><p>Whether you work in textiles, carving, repair, food or sound, a useful learning brief should reflect local demand and the maker&apos;s priorities. These are questions anyone can use now, not a FEPAR course or application.</p><a className="text-link" href="/festac-50/#festac-town">Meet the place behind the name <ArrowUpRight size={17} aria-hidden="true" /></a></div><ol><li><strong>Learn from a practitioner.</strong><span>What tools, safety measures and time does the work actually require? Agree on fair payment for teaching.</span></li><li><strong>Price the whole process.</strong><span>Count materials, labour, transport and repairs before setting a price or promising a delivery date.</span></li><li><strong>Keep a record.</strong><span>Document who made the work and agree on credit, images and reuse before publishing it online.</span></li><li><strong>Ask what lasts.</strong><span>Can the work be maintained, sold on fair terms or passed on without losing the maker&apos;s control?</span></li></ol></div></section>

      <section className="maker-economy" id="maker-economy" aria-labelledby="maker-economy-title"><div className="wrap"><div className="maker-economy-head"><p className="eyebrow">From skill to a fair livelihood / questions, not a marketplace</p><h2 className="display" id="maker-economy-title">Making is knowledge.<br /><em>Ownership is leverage.</em></h2><p>FESTAC&apos;s conversations about education and culture matter today when a maker can explain where a material came from, set a quality standard, negotiate an image licence and reach a buyer without losing control of the work. FEPAR has no certified guild, geographical-indication label, payments integration or financing programme.</p></div><div className="maker-economy-grid"><article><span>01 / Place</span><h3>Know the lineage.</h3><p>Who taught the technique? Which community should be named, consulted and compensated? Document origin without presenting a product as officially certified.</p></article><article><span>02 / Terms</span><h3>Make credit explicit.</h3><p>Before a photograph, pattern, recording or design travels, agree who may reproduce it, for what purpose, and on what terms.</p></article><article><span>03 / Market</span><h3>Price beyond the object.</h3><p>Count labour, tools, materials and delivery. A continental market only helps when working makers retain a fair share of the value they create.</p></article></div><a href="/festac-50/#research-paths" className="text-link">See where the history is held <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

      <section className="focus-intro" aria-labelledby="development-community-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">Beyond the headline skill</p><h2 className="display" id="development-community-title">Who else makes the<br /><em>work possible?</em></h2></div><div><p>Recording engineers, tailors, translators, stage crews, food makers, designers, repairers and accountants all carry knowledge a lasting creative economy needs. Our community skill map makes more of that work visible without claiming a formal registry or placing anyone on a public list.</p><a className="text-link" href="/creator-community/">Explore the creator & artisan community <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>

      <section className="light" aria-labelledby="development-focus-title"><div className="wrap"><div className="section-head" data-reveal><div><p className="eyebrow">The wider picture</p><h2 className="display" id="development-focus-title">Where we are<br />looking to learn and build.</h2></div><p>Skills alone are not enough. Agency, cultural rights, access to resources and durable systems all matter.</p></div><FeatureGrid items={items} /></div></section>

      <section className="development-invitation" aria-labelledby="development-invitation-title"><div className="wrap development-invitation-grid" data-reveal><div><p className="eyebrow">From vision to useful work</p><h2 className="display" id="development-invitation-title">Bring the craft.<br /><em>Bring the question.</em></h2></div><div><p>Are you a young maker, working craftsperson, educator, youth organisation or community partner? Tell us which skills are needed where you live, what is already working and what support would make a real difference.</p><p>We are listening for possibilities, not recruiting for a funded course or promising placements.</p><a className="cta cta-light" href="/contact/">Start a conversation <ArrowRight size={17} aria-hidden="true" /></a><a className="development-volunteer-link" href="/careers/">Explore volunteering <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
    </>
  );
}
