"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const inquiryTypes = [
  "Partnership / strategic collaboration", "Development or infrastructure initiative", "Diaspora engagement", "Youth and talent development", "Artist / creator collaboration", "Music / sync / licensing", "Cultural rights / research", "Sponsorship or funding support", "Media / speaking request", "Volunteer / contributor", "General enquiry",
];

export function InquiryForm() {
  const [other, setOther] = useState(false);
  return <div className="form-shell"><form name="fepar-inquiry" method="POST" action="/contact/success/" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="fepar-inquiry" />
    <p className="honeypot" aria-hidden="true"><label>Do not fill this field <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="organisation">Organisation / institution</label><input id="organisation" name="organisation" autoComplete="organization" /></div>
      <div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="field full"><label htmlFor="country">Country / region *</label><input id="country" name="country" required autoComplete="country-name" /></div>
      <div className="field full"><label htmlFor="inquiryType">Inquiry type *</label><select id="inquiryType" name="inquiryType" required defaultValue="" onChange={(event) => setOther(event.target.value === "other")}><option value="" disabled>Select an inquiry type</option>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}<option value="other">Other</option></select></div>
      <div className="field full" hidden={!other}><label htmlFor="customInquiry">Custom inquiry *</label><input id="customInquiry" name="customInquiry" required={other} disabled={!other} /><p className="helper">Name the specific theme, proposal or question you want us to understand.</p></div>
      <div className="field full"><label htmlFor="subject">Subject / short title *</label><input id="subject" name="subject" required maxLength={120} /></div>
      <div className="field full"><label htmlFor="message">Detailed message / proposal *</label><textarea id="message" name="message" required maxLength={4000} aria-describedby="messageHelp" /><p className="helper" id="messageHelp">Share context, what you are hoping to explore and any useful timing or links (up to 4,000 characters).</p></div>
      <div className="field full"><label htmlFor="nextStep">Desired next step</label><select id="nextStep" name="nextStep" defaultValue="Email response"><option>Email response</option><option>Introductory call</option><option>Partnership meeting</option><option>Send information</option><option>Not sure yet</option></select></div>
      <div className="field full"><label className="check"><input type="checkbox" name="consent" value="yes" required /><span>I consent to FEPAR using the details submitted to respond to this inquiry. *</span></label></div>
    </div>
    <button className="cta" type="submit">Send inquiry <ArrowUpRight size={17} aria-hidden="true" /></button>
    <p className="helper">This form is processed by Netlify Forms when the site is deployed on Netlify. For local previews or other hosts, please use the email links alongside the form.</p>
  </form></div>;
}
