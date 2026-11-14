"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const interests = [
  "Volunteer time & skills",
  "Creative practice & crafts",
  "Diaspora connection",
  "Institutional partnership",
  "Share in my community",
];

export function GetInvolvedForm() {
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
      const payload = { ...Object.fromEntries(new FormData(form)), kind: "involvement" };
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
      setFeedback("Your expression of interest was sent. This is not a membership registration; FEPAR may follow up if there is a relevant conversation.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Your note could not be sent. Please try again or use the email link below.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="involvement-form" onSubmit={submit} aria-label="Share your interest">
      <p className="honeypot" aria-hidden="true"><label>Do not fill this field<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="form-grid">
        <div className="field"><label htmlFor="involve-name">Your name *</label><input id="involve-name" name="name" required maxLength={120} autoComplete="name" /></div>
        <div className="field"><label htmlFor="involve-email">Email address *</label><input id="involve-email" name="email" type="email" required maxLength={254} autoComplete="email" /></div>
        <div className="field"><label htmlFor="involve-region">Country or region *</label><input id="involve-region" name="region" required maxLength={120} autoComplete="country-name" /></div>
        <div className="field"><label htmlFor="involve-interest">I am interested in *</label><select id="involve-interest" name="interest" defaultValue="" required><option value="" disabled>Choose one way to contribute</option>{interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}</select></div>
        <div className="field full"><label className="check" htmlFor="involve-consent"><input id="involve-consent" type="checkbox" name="consent" value="yes" required /><span>I agree that FEPAR may use these details to follow up about the interest I have shared. This is not a newsletter signup. *</span></label></div>
      </div>
      <button type="submit" className="cta" disabled={submitting} aria-busy={submitting}>{submitting ? "Sending…" : "Send my interest"} <ArrowUpRight size={18} aria-hidden="true" /></button>
      <p className="involvement-form-note">Sent as an email to FEPAR, not a membership registration or a guaranteed response. This form works on Netlify; on other hosts, email <a href="mailto:hello@fepar.africa?subject=Get%20involved%20with%20FEPAR">hello@fepar.africa</a> instead.</p>
      <p className="status" role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>
    </form>
  );
}
