import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Survey } from "./Survey";
import { voices } from "./questions";
import styles from "./survey.module.css";

export const metadata: Metadata = {
  title: "Explore Pan-Africanism — History, Culture & Community",
  description: "Explore Pan-African histories, cultural rights and community-led change through a sourced, private learning survey and Wisdom of the Elders readings.",
  alternates: { canonical: "/explore/pan-africanism/" },
  openGraph: {
    title: "Explore Pan-Africanism | FEPAR",
    description: "Explore Pan-African history, cultural rights and community through sourced readings and a private learning survey.",
    url: "/explore/pan-africanism/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR — Explore Pan-Africanism" }],
  },
};

export default function PanAfricanismPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="explore-title"><div className="wrap">
        <p className={styles.eyebrow}>FEPAR / An invitation to learn</p>
        <h1 id="explore-title">A continent of ideas.<br /><em>A journey of your own.</em></h1>
        <div className={styles.heroBottom}><p>Pan-Africanism has many histories and many voices. Start with a question, meet a source, then choose what you want to read next. No scores, no labels, no need to agree.</p><a href="#journey">Begin the journey <ArrowDownRight size={19} aria-hidden="true" /></a></div>
        <div className={styles.heroMarks} aria-hidden="true"><span>HISTORY</span><span>CULTURE</span><span>COMMUNITY</span></div>
      </div></section>
      <section className={styles.introduction} aria-labelledby="explore-intro"><div className={`wrap ${styles.introGrid}`}><p className={styles.eyebrow}>01 / The premise</p><div><h2 id="explore-intro">Curiosity is a<br /><em>way in.</em></h2><p>Fifteen short stops bring together history, cultural rights, ecology and the people who have shaped these conversations. Some questions invite you to check a source; others simply ask what interests you. You can skip any question and change your mind.</p><p>This is a personal reading tool, not a political opinion poll or a measure of how “Pan-African” you are. FEPAR does not receive your answers. Saving progress is optional and happens only in your own browser.</p></div></div></section>
      <section className={styles.surveySection} aria-label="Personal learning survey"><div className="wrap"><Survey /></div></section>
      <section className={styles.voicesSection} id="wisdom" aria-labelledby="wisdom-title"><div className="wrap"><div className={styles.voicesHeader}><p className={styles.eyebrow}>02 / Voices in context</p><h2 id="wisdom-title">Wisdom of<br /><em>the Elders.</em></h2><p>Not timeless proverbs or anonymous slogans: these are excerpts from named authors, in specific circumstances. Follow each source for the fuller argument and its historical context.</p></div><div className={styles.voices}>{voices.map((voice, index) => <figure className={styles.voice} key={voice.name}><span className={styles.voiceNumber}>{String(index + 1).padStart(2, "0")} / 03</span><blockquote>“{voice.excerpt}”</blockquote><figcaption><strong>{voice.name}</strong><span>{voice.work}</span><p>{voice.context}</p><a href={voice.source} target="_blank" rel="noopener noreferrer">Read the source <ArrowUpRight size={16} aria-hidden="true" /></a></figcaption></figure>)}</div></div></section>
      <section className={styles.closing} aria-labelledby="explore-close"><div className={`wrap ${styles.closingGrid}`}><p className={styles.eyebrow}>03 / Keep going</p><div><h2 id="explore-close">Learning becomes<br /><em>conversation.</em></h2><p>Take a question to someone you trust. Ask what their experience adds, where the story is incomplete and what a fair next step might look like.</p><a href="/get-involved/">Explore ways to take part <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
    </div>
  );
}
