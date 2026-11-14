"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const clusters = [
  "Sound & live production",
  "Film, games & moving image",
  "Textiles, fashion & material craft",
  "Food, place & built heritage",
  "Words, language & archives",
  "Digital craft & essential support",
  "Another practice",
];

type SkillPath = { name: string; roles: string; bridge: string; href: string; linkLabel: string };

export function SkillPathFinder({ paths }: { paths: SkillPath[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const matches = paths.filter((path) => selected.includes(path.name));

  function toggle(name: string) {
    setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  }

  return (
    <div className="skill-finder" aria-labelledby="skill-finder-title">
      <div className="skill-finder-heading"><p className="eyebrow">Explore a route through the work</p><h3 id="skill-finder-title">Where do your skills meet this story?</h3><p>Choose one or more fields. These are reading pathways and questions to explore, not courses, placements or membership offers.</p></div>
      <div className="skill-finder-options" role="group" aria-label="Choose fields to explore">
        {paths.map((path) => <button type="button" key={path.name} aria-pressed={selected.includes(path.name)} aria-controls="skill-finder-results" onClick={() => toggle(path.name)}>{path.name}</button>)}
      </div>
      <p className="skill-finder-count" role="status" aria-live="polite">{matches.length ? `${matches.length} ${matches.length === 1 ? "path" : "paths"} selected` : "Choose a field to see where to start."}</p>
      <div className="skill-finder-results" id="skill-finder-results">
        {matches.map((path) => <article key={path.name}><h4>{path.name}</h4><p>{path.bridge}</p><a href={path.href}>{path.linkLabel} <ArrowUpRight size={16} aria-hidden="true" /></a></article>)}
      </div>
      {matches.length > 0 && <p className="skill-finder-next">Have a practice to share? <a href="#share-skill">Introduce your work to FEPAR <ArrowUpRight size={16} aria-hidden="true" /></a> Your choices here stay in this browser session and are not submitted with the introduction.</p>}
    </div>
  );
}

export function CreatorInterestForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitting(true);
    setStatus("idle");
    setFeedback("");
    try {
      const response = await fetch("/.netlify/functions/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), kind: "creator-interest" }),
      });
      let result: { message?: string } = {};
      try { result = await response.json(); } catch { }
      if (!response.ok || result.message !== "Inquiry received.") {
        throw new Error(!response.ok && result.message ? result.message : "Your note could not be sent. Please try again or use the email link below.");
      }
      form.reset();
      setStatus("success");
      setFeedback("Thank you. Your introduction was sent to FEPAR. It will not be published or added to a public directory.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Your note could not be sent. Please try again or use the email link below.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="involvement-form" onSubmit={submit} aria-label="Introduce your creative practice">
      <p className="honeypot" aria-hidden="true"><label>Do not fill this field<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="form-grid">
        <div className="field"><label htmlFor="creator-name">Your name *</label><input id="creator-name" name="name" required maxLength={120} autoComplete="name" /></div>
        <div className="field"><label htmlFor="creator-email">Email address *</label><input id="creator-email" name="email" type="email" required maxLength={254} autoComplete="email" /></div>
        <div className="field"><label htmlFor="creator-region">Where do you work? *</label><input id="creator-region" name="region" required maxLength={120} placeholder="Town, city or region" /></div>
        <div className="field"><label htmlFor="creator-cluster">Your main field *</label><select id="creator-cluster" name="cluster" defaultValue="" required><option value="" disabled>Choose the closest fit</option>{clusters.map((cluster) => <option key={cluster} value={cluster}>{cluster}</option>)}</select></div>
        <div className="field full"><label htmlFor="creator-skills">What do you make or do? *</label><textarea id="creator-skills" name="skills" required maxLength={500} rows={4} placeholder="Your skills, practice or the people you hope to connect with" /></div>
        <div className="field full"><label className="check" htmlFor="creator-consent"><input id="creator-consent" type="checkbox" name="consent" value="yes" required /><span>I agree that FEPAR may use these details to consider and respond to this introduction. My details will not be published. *</span></label></div>
      </div>
      <button type="submit" className="cta" disabled={submitting} aria-busy={submitting}>{submitting ? "Sending…" : "Share my practice"} <ArrowUpRight size={18} aria-hidden="true" /></button>
      <p className="involvement-form-note">Your message is delivered by email using a third-party email service; do not include sensitive records. To request deletion or withdraw your introduction, email <a href="mailto:hello@fepar.africa?subject=Delete%20my%20creator%20introduction">hello@fepar.africa</a>. This is an expression of interest, not an application or public registry. If this form is unavailable, use that email address instead.</p>
      <p className="status" role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>
    </form>
  );
}
