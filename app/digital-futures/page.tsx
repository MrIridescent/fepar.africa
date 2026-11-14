import type { Metadata } from "next";
import { ArrowUpRight, AudioLines, BrainCircuit, Languages, ShieldCheck, WifiOff } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Digital Creativity & AI",
  description: "Explore FEPAR's grassroots direction for digital skills, culturally grounded AI, creative technology and responsible ownership.",
  alternates: { canonical: "/digital-futures/" },
};

const practices = [
  { icon: AudioLines, name: "Create with tools", skills: "Recording, editing, animation, games, digital publishing and accessible design.", question: "Who made the source material, and who controls the finished work?" },
  { icon: BrainCircuit, name: "Question the model", skills: "AI literacy, prompt evaluation, dataset provenance, translation and human review.", question: "Whose language, accent or history is missing from the training data?" },
  { icon: Languages, name: "Carry more languages", skills: "Subtitling, transcription, oral-history indexing and multilingual interfaces.", question: "Can speakers correct, refuse or withdraw a representation of their voice?" },
  { icon: WifiOff, name: "Design for real conditions", skills: "Fast pages, offline drafts, small files and tools that work on modest devices.", question: "Can a young maker use this with unreliable power or expensive data?" },
  { icon: ShieldCheck, name: "Keep people in control", skills: "Consent, attribution, cybersecurity, licensing and transparent collaboration terms.", question: "Is this material cleared for the particular use being proposed?" },
];

export default function DigitalFuturesPage() {
  return (
    <main>
      <PageHero crumb="Digital futures" eyebrow="Culture × technology / a direction to build together" title="The next renaissance needs makers of technology, too." variant="innovation-hero" action={{ label: "Explore the skills", href: "#digital-skills" }}>
        FEPAR is a grassroots initiative, not an AI lab or a training provider. We want to explore how African artists, artisans and young people can use current tools without surrendering their voice, data or ownership.
      </PageHero>
      <section className="focus-intro" aria-labelledby="digital-intro-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">The bridge from 1977 to now</p><h2 className="display" id="digital-intro-title">Cultural memory is not <em>obsolete technology.</em></h2></div><div><p>The FESTAC &apos;77 colloquium put education at the centre of its cultural conversation. Today, an oral history can become a searchable record; a live performance can travel with fair credit; a craft process can be taught through a small-screen video. None of that works well if the people who carry the knowledge lose control of it.</p><a className="text-link" href="/festac-50/#journey">Trace the festival genealogy <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
      <section className="focus-section" id="digital-skills" aria-labelledby="digital-skills-title"><div className="wrap"><div className="focus-heading"><p className="eyebrow">Five practical questions / not an advertised course</p><h2 className="display" id="digital-skills-title">Learn the tools.<br /><em>Keep the agency.</em></h2><p>These are fields for conversation and future co-design with working practitioners, not a claim that FEPAR currently teaches or certifies them.</p></div><div className="focus-grid">{practices.map(({ icon: Icon, name, skills, question }, index) => <article className="focus-card" key={name}><span className="eyebrow">0{index + 1} / Practice</span><Icon size={29} strokeWidth={1.5} aria-hidden="true" /><h3>{name}</h3><p>{skills}</p><strong>{question}</strong></article>)}</div></div></section>
      <section className="focus-close" aria-labelledby="digital-close-title"><div className="wrap focus-intro-grid"><div><p className="eyebrow">Technology with a memory</p><h2 className="display" id="digital-close-title">No archive is a <em>free dataset.</em></h2></div><div><p>Digitising a photograph does not grant permission to train a model on it. Public availability does not erase attribution, performer rights, privacy or community consent. We favour links to custodians, explicit permissions and human decisions over bulk extraction.</p><p>Have a skill, a community question or a responsible technology idea? Tell us what is already working and what help is missing.</p><a className="cta" href="/creator-community/">Explore the creator community <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
    </main>
  );
}
