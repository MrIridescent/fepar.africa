"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["FEPAR", "/"],
  ["FESTAC at 50", "/festac-50/"],
  ["FESTAC History", "/festac-history/"],
  ["Theme Songs", "/theme-songs/"],
  ["What We Do", "/what-we-do/"],
  ["Diaspora", "/diaspora/"],
  ["Records", "/records/"],
  ["Development", "/development/"],
  ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="FEPAR home">
          <span className="crest" aria-hidden="true">✳</span>
          <span><span className="brand-name">FEPAR</span><span className="brand-sub">FESTAC PAN AFRICAN RENAISSANCE</span></span>
        </a>
        <nav className="links" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="/contact/">Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button className="menu" type="button" aria-expanded={open} aria-controls="mobileLinks" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      <nav className="wrap mobile-links" id="mobileLinks" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
      </nav>
    </header>
  );
}
