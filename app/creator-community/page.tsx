import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CreatorInterestForm, SkillPathFinder } from "@/components/CreatorInterestForm";

export const metadata: Metadata = {
  title: "Creator & Artisan Community",
  description: "Meet the skillsets FEPAR hopes to connect across Festac Town and beyond, and share an introductory expression of interest.",
  alternates: { canonical: "/creator-community/" },
};

const clusters = [
  { name: "Sound & live production", roles: "Singers, instrumentalists, producers, recording and mastering engineers, stage crews, lighting technicians, managers and music-rights specialists.", bridge: "From a performance heard once to a credited recording and paid technical work.", href: "/records/", linkLabel: "Explore artist pathways" },
  { name: "Film, games & moving image", roles: "Writers, camera crews, editors, colourists, subtitlers, animators, game designers, VFX artists and sound designers.", bridge: "From an idea or oral history to work made with consent and reusable skills.", href: "/digital-futures/", linkLabel: "Explore digital creativity" },
  { name: "Textiles, fashion & material craft", roles: "Weavers, dyers, pattern cutters, tailors, leatherworkers, shoemakers, bronze casters, carpenters and repairers.", bridge: "From inherited knowledge to documented provenance and a fair price for labour.", href: "/development/#maker-economy", linkLabel: "Explore maker ownership" },
  { name: "Food, place & built heritage", roles: "Cooks, food storytellers, packaging designers, architects, exhibition builders, local historians and neighbourhood documentarians.", bridge: "From local practice to a record of who knows, makes and maintains it.", href: "/festac-50/#festac-town", linkLabel: "Explore the living town" },
  { name: "Words, language & archives", roles: "Poets, authors, translators, typographers, oral historians, librarians, archivists, conservators and researchers.", bridge: "From scattered testimony to discoverable sources without taking custody away from their holders.", href: "/festac-50/#research-paths", linkLabel: "Follow the research paths" },
  { name: "Digital craft & essential support", roles: "Developers, AI evaluators, accessibility designers, cybersecurity practitioners, accountants, logistics coordinators and rights advisers.", bridge: "From a creative idea to tools, records and agreements that help it endure.", href: "/digital-futures/#digital-skills", linkLabel: "Explore digital skills" },
];

export default function CreatorCommunityPage() {
  return (
    <main>
      <PageHero crumb="Creator community" eyebrow="Festac Town / skills across the continent" title="The renaissance is made by more than the people on stage." variant="development-hero" action={{ label: "See the skill map", href: "#skill-map" }}>
        A community of working makers includes the people behind the sound, food, garments, stories, software and spaces. FEPAR is beginning by listening, not claiming to operate a certified guild, public registry or funded incubator.
      </PageHero>
      <section className="focus-intro" aria-labelledby="community-intro-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">A different kind of inventory</p><h2 className="display" id="community-intro-title">Find the work.<br /><em>Name the people.</em></h2></div><div><p>FESTAC &apos;77 brought artists, scholars, technicians and audiences into the same conversation. A lasting legacy also asks who built the stage, who taught the pattern, who owns the recording and which local skills deserve a future.</p><a className="text-link" href="/festac-50/#journey">See the historical journey <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
      <section className="focus-section" id="skill-map" aria-labelledby="skill-map-title"><div className="wrap"><div className="focus-heading"><p className="eyebrow">Six connected clusters / an open map, not a directory</p><h2 className="display" id="skill-map-title">What people <em>actually do.</em></h2><p>These examples help us hear beyond broad labels like “creative” or “artisan.” They are not a complete list, accreditation scheme or claim that anyone named here has joined FEPAR.</p></div><div className="focus-grid">{clusters.map(({ name, roles, bridge }, index) => <article className="focus-card" key={name}><span className="eyebrow">0{index + 1} / Skill cluster</span><h3>{name}</h3><p>{roles}</p><strong>{bridge}</strong></article>)}</div><SkillPathFinder paths={clusters} /></div></section>
      <section className="focus-intro community-readiness" aria-labelledby="readiness-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">Before anyone promises a market</p><h2 className="display" id="readiness-title">The questions behind <em>ownership.</em></h2></div><div><p>Is the work credited accurately? Do collaborators have clear agreements? Can a maker explain their costs and find their own customers? Is a business formally registered if its next opportunity requires it? These questions help identify support needs; a public form should not request tax certificates, identity documents, unpublished work or sensitive financial records.</p><a className="text-link" href="/development/#maker-economy">Explore maker ownership <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
      <section className="involvement-contact" id="share-skill" aria-labelledby="community-form-title"><div className="wrap involvement-contact-grid"><div><p className="eyebrow">An introduction, not registration</p><h2 className="display" id="community-form-title">Tell us what <em>you make.</em></h2><p>If you work in or connect with Festac Town, elsewhere in Nigeria, or the wider diaspora, share your practice and where you work. We will use these details only to consider a relevant conversation. Nothing you submit will appear in a public directory.</p><p>There is no active guild certification, incubation intake or guarantee of funding. Please do not send identity documents, tax records, bank information, confidential work or material you do not have permission to share.</p></div><CreatorInterestForm /></div></section>
    </main>
  );
}
