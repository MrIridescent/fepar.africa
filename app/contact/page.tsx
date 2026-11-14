import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact & Partner",
  description: "Contact FEPAR for partnerships, support, creative collaboration, development and cultural inquiries.",
  alternates: { canonical: "/contact/" },
  openGraph: { title: "Contact & Partner | FEPAR", description: "Contact FEPAR about partnerships, creative work, youth skills or cultural heritage.", url: "/contact/", images: ["/og-image.png"] },
};

export default function ContactPage() {
  return <><PageHero crumb="Contact & partner" eyebrow="A considered first step" title="Tell us what you want to build." variant="red">Whether you are exploring a partnership, supporting young talent, bringing a creative opportunity or asking a serious question, start here.</PageHero><section><div className="wrap contact-layout"><div className="contact-copy"><p className="eyebrow">Alternative routes</p><h2 className="display">The right inbox<br />for the right idea.</h2><p>Use the form for a tailored inquiry, or contact a route directly. We will read your note and respond as thoughtfully as we can.</p><div className="contact-list"><a href="mailto:hello%40fepar.africa"><small>General enquiries</small><strong><span>hello</span><span>@</span><span>fepar.africa</span></strong></a><a href="mailto:donation%40fepar.africa"><small>Donations</small><strong><span>donation</span><span>@</span><span>fepar.africa</span></strong></a></div></div><InquiryForm /></div></section><section className="light support"><div className="wrap"><div className="section-head" data-reveal><div><p className="eyebrow">How you can support FEPAR</p><h2 className="display">Many hands.<br />Shared direction.</h2></div><p>Support can be financial, practical, creative or connective. Every route starts with clarity.</p></div><div className="support-grid">{[{ title: "Partner", body: "Bring an institution, programme or shared ambition." }, { title: "Sponsor youth", body: "Support talent development and opportunity." }, { title: "Share expertise", body: "Offer knowledge, mentorship or perspective." }, { title: "Connect institutions", body: "Open a door to a useful relationship." }, { title: "Commission creative work", body: "Put African talent at the centre of your brief." }].map((item) => <article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section></>;
}
