"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  ["About", "/about/"],
  ["FESTAC at 50", "/festac-50/"],
  ["Diaspora", "/diaspora/"],
  ["Records", "/records/"],
  ["Development", "/development/"],
  ["Careers", "/careers/"],
  ["Partners", "/partners/"],
  ["News", "/news/"],
  ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className="site-header"
      style={{
        background: scrolled ? "rgba(10, 13, 9, 0.97)" : "rgba(13, 17, 13, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "background 0.3s ease",
      }}
    >
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="FEPAR home">
          <Image
            src="/fepar-logo.png"
            alt="FESTAC Pan African Renaissance"
            width={120}
            height={120}
            className="logo-img"
          />
          <span className="brand-sub">FESTAC PAN AFRICAN RENAISSANCE</span>
        </a>
        <nav className="links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="/contact/" style={{ borderColor: "#F4A800", color: "#f3eee4" }}>
          Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobileLinks"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      <nav className="wrap mobile-links" id="mobileLinks" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
