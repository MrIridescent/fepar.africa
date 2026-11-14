"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const interests = [
  "Creative practice & crafts",
  "Diaspora connection",
  "Institutional partnership",
  "Share in my community",
];

export function GetInvolvedForm({ mode = "involvement" }: { mode?: "involvement" | "career" | "volunteer" }) {
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
      const payload = { ...Object.fromEntries(new FormData(form)), kind: mode };
      const response = await fetch("/.netlify/functions/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let result: { message?: string } = {};
      try {
        result = await response.json();
      } catch { }
      if (!response.ok || result.message !== "Inquiry received.") {
        throw new Error(!response.ok && result.message ? result.message : "Your note could not be sent. Please try again or use the email link below.");
      }
      form.reset();
      setStatus("success");
      setFeedback(mode === "career" ? "Your career introduction was sent to FEPAR. This is not an application to an open vacancy; we may follow up if there is a relevant conversation." : mode === "volunteer" ? "Your volunteer introduction was sent to FEPAR. This is not a commitment to a role or schedule; we may follow up if there is a relevant conversation." : "Your expression of interest was sent. This is not a membership registration; FEPAR may follow up if there is a relevant conversation.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Your note could not be sent. Please try again or use the email link below.");
    } finally {
      setSubmitting(false);
    }
  }

  const prefix = mode === "involvement" ? "involve" : mode;
  const label = mode === "career" ? "Express career interest" : mode === "volunteer" ? "Introduce yourself as a volunteer" : "Share your interest";

  return (
    <form className="involvement-form" onSubmit={submit} aria-label={label}>
      <p className="honeypot" aria-hidden="true"><label>Do not fill this field<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="form-grid">
        <div className="field"><label htmlFor={`${prefix}-name`}>Your name *</label><input id={`${prefix}-name`} name="name" required maxLength={120} autoComplete="name" /></div>
        <div className="field"><label htmlFor={`${prefix}-email`}>Email address *</label><input id={`${prefix}-email`} name="email" type="email" required maxLength={254} autoComplete="email" /></div>
        <div className="field"><label htmlFor={`${prefix}-region`}>Where are you based? *</label><input id={`${prefix}-region`} name="region" required maxLength={120} autoComplete="country-name" placeholder="Town, country or region" /></div>
        {mode === "involvement" ? <div className="field"><label htmlFor="involve-interest">I am interested in *</label><select id="involve-interest" name="interest" defaultValue="" required><option value="" disabled>Choose one way to contribute</option>{interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}</select></div> : <>
          <div className="field"><label htmlFor={`${prefix}-focus`}>{mode === "career" ? "Kind of work you seek *" : "Area you would like to support *"}</label><input id={`${prefix}-focus`} name="focus" required maxLength={120} placeholder={mode === "career" ? "e.g. digital production, operations" : "e.g. research, mentoring, events"} /></div>
          <div className="field full"><label htmlFor={`${prefix}-experience`}>{mode === "career" ? "Experience and skills *" : "Skills and ways you can help *"}</label><textarea id={`${prefix}-experience`} name="experience" required maxLength={2000} rows={5} placeholder={mode === "career" ? "What have you worked on, and what would you like to do next?" : "What can you contribute, and what interests you about it?"} /></div>
          <div className="field full"><label htmlFor={`${prefix}-availability`}>{mode === "career" ? "Availability and preferred working arrangement *" : "Time you could offer and your time zone *"}</label><input id={`${prefix}-availability`} name="availability" required maxLength={200} placeholder={mode === "career" ? "e.g. available from January, remote or Lagos" : "e.g. 3 hours a month, West Africa Time"} /></div>
          <div className="field full"><label htmlFor={`${prefix}-portfolio`}>Portfolio or profile URL (optional)</label><input id={`${prefix}-portfolio`} name="portfolio" type="url" maxLength={300} placeholder="https://" /></div>
        </>}
        <div className="field full"><label className="check" htmlFor={`${prefix}-consent`}><input id={`${prefix}-consent`} type="checkbox" name="consent" value="yes" required /><span>I agree that FEPAR may use these details to consider and respond to my {mode === "career" ? "career" : mode === "volunteer" ? "volunteer" : "general"} introduction. My details will not be published. This is not a newsletter signup. *</span></label></div>
      </div>
      <button type="submit" className="cta" disabled={submitting} aria-busy={submitting}>{submitting ? "Sending…" : mode === "career" ? "Send career introduction" : mode === "volunteer" ? "Send volunteer introduction" : "Send my interest"} <ArrowUpRight size={18} aria-hidden="true" /></button>
      <p className="involvement-form-note">This private introduction is sent to FEPAR by email, not published or treated as an application to a current role. No CV or file upload is needed. If the form is unavailable, email <a href={`mailto:hello%40fepar.africa?subject=FEPAR%20${mode}%20introduction`}><span>hello</span><span>@</span><span>fepar.africa</span></a> instead. You can also use that address to withdraw your details.</p>
      <p className="status" role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>
    </form>
  );
}
