"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const inquiryTypes = [
  "Partnership / strategic collaboration", "Development or infrastructure initiative", "Diaspora engagement", "Youth and talent development", "Artist / creator collaboration", "Music / sync / licensing", "Cultural rights / research", "Sponsorship or funding support", "Media / speaking request", "Career / team interest", "Volunteer / contributor", "General enquiry",
];

export function InquiryForm() {
  const [other, setOther] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("idle");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
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
        throw new Error(!response.ok && result.message
          ? result.message
          : "We could not send your inquiry. Please try again or use an email link instead.");
      }
      form.reset();
      setOther(false);
      setSelectedType("");
      setStatus("success");
      setFeedback("Your inquiry has been sent. Thank you for reaching out to FEPAR.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your inquiry. Please try again or use an email link instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return <div className="form-shell"><form onSubmit={submitInquiry}>
    <p className="honeypot" aria-hidden="true"><label>Do not fill this field <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" required maxLength={120} autoComplete="name" /></div>
      <div className="field"><label htmlFor="organisation">Organisation / institution</label><input id="organisation" name="organisation" maxLength={160} autoComplete="organization" /></div>
      <div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required maxLength={254} autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" maxLength={60} autoComplete="tel" /></div>
      <div className="field full"><label htmlFor="country">Country / region *</label><input id="country" name="country" required maxLength={120} autoComplete="country-name" /></div>
      <div className="field full"><label htmlFor="inquiryType">Inquiry type *</label><select id="inquiryType" name="inquiryType" required defaultValue="" onChange={(event) => { setOther(event.target.value === "other"); setSelectedType(event.target.value); }}><option value="" disabled>Select an inquiry type</option>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}<option value="other">Other</option></select></div>
      <div className="field full" hidden={!other}><label htmlFor="customInquiry">Custom inquiry *</label><input id="customInquiry" name="customInquiry" required={other} disabled={!other} maxLength={160} /><p className="helper">Name the specific theme, proposal or question you want us to understand.</p></div>
      <div className="field full"><label htmlFor="subject">Subject / short title *</label><input id="subject" name="subject" required maxLength={120} /></div>
      <div className="field full"><label htmlFor="message">Detailed message / proposal *</label><textarea id="message" name="message" required maxLength={4000} aria-describedby="messageHelp" /><p className="helper" id="messageHelp">{selectedType === "Career / team interest" ? "Tell us your skills, relevant experience, preferred area of work, availability and a portfolio or profile link if you have one. This is an expression of interest, not an application to a listed vacancy." : selectedType === "Volunteer / contributor" ? "Tell us what you can contribute, your interests, location or time zone, and your availability. Include a profile or work link if useful." : "Share context, what you are hoping to explore and any useful timing or links (up to 4,000 characters)."}</p></div>
      <div className="field full"><label htmlFor="nextStep">Desired next step</label><select id="nextStep" name="nextStep" defaultValue="Email response"><option>Email response</option><option>Introductory call</option><option>Partnership meeting</option><option>Send information</option><option>Not sure yet</option></select></div>
      <div className="field full"><label className="check"><input type="checkbox" name="consent" value="yes" required /><span>I consent to FEPAR using the details submitted to respond to this inquiry. *</span></label></div>
    </div>
    <button className="cta" type="submit" disabled={submitting} aria-busy={submitting}>{submitting ? "Sending…" : "Send inquiry"} <ArrowUpRight size={17} aria-hidden="true" /></button>
    <p className="helper">This form sends when hosted on Netlify. For local previews or other hosts, please use the email links alongside the form.</p>
    <p className="status" role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>
  </form></div>;
}
