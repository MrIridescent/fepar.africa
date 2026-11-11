import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquiry received",
  description: "Your inquiry has been sent to FEPAR.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return <section className="page-hero red success-page"><div className="wrap"><div className="eyebrow">Inquiry received</div><h1 className="display">Thank you for<br /><em>starting the conversation.</em></h1><p>Your note has been submitted. The FEPAR team will review it and respond as thoughtfully as we can.</p><div className="actions"><a className="cta cta-light" href="/">Return to FEPAR <ArrowUpRight size={17} aria-hidden="true" /></a><a className="text-link" href="/contact/"><ArrowLeft size={17} aria-hidden="true" /> Contact page</a></div></div></section>;
}
