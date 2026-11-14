"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const groups = [
  {
    id: "story",
    label: "Our story",
    description: "The thinking and legacy behind FEPAR.",
    links: [
      { label: "About FEPAR", href: "/about/", detail: "Who we are and what guides us" },
      { label: "FESTAC at 50", href: "/festac-50/", detail: "A living cultural inheritance" },
      { label: "Festival genealogy", href: "/festac-50/#journey", detail: "From 1931 print networks to 2027" },
      { label: "Research paths", href: "/festac-50/#research-paths", detail: "Follow the archives at their sources" },
      { label: "Lessons from the festivals", href: "/festac-50/#lessons", detail: "What survives the spectacle" },
      { label: "Festac Town", href: "/festac-50/#festac-town", detail: "The place beyond the festival" },
      { label: "Archive care", href: "/festac-50/#archive-practice", detail: "Context, permission and control" },
      { label: "Manifesto", href: "/manifesto/", detail: "Our shared direction" },
      { label: "News", href: "/news/", detail: "Ideas and updates" },
    ],
  },
  {
    id: "work",
    label: "What we do",
    description: "Explore the possibilities we are building toward.",
    links: [
      { label: "Records", href: "/records/", detail: "Music and creative expression" },
      { label: "Performing Arts", href: "/performing-arts/", detail: "Stages for African stories" },
      { label: "STEM & Innovation", href: "/innovation/", detail: "Knowledge meets possibility" },
      { label: "Digital Creativity & AI", href: "/digital-futures/", detail: "Current tools, cultural agency and skills" },
      { label: "Creator & Artisan Community", href: "/creator-community/", detail: "Explore the skill map and introduce yourself" },
      { label: "Youth, Skills & Crafts", href: "/development/", detail: "Creativity for self-reliance" },
      { label: "Maker ownership", href: "/development/#maker-economy", detail: "Place, permissions and fair livelihoods" },
    ],
  },
  {
    id: "connect",
    label: "Get involved",
    description: "Choose a first step and bring your part.",
    links: [
      { label: "Get involved", href: "/get-involved/", detail: "Find your way into the movement" },
      { label: "Explore Pan-Africanism", href: "/explore/pan-africanism/", detail: "A personal learning journey" },
      { label: "Diaspora", href: "/diaspora/", detail: "Connect across borders" },
      { label: "Partners", href: "/partners/", detail: "Collaborate with FEPAR" },
      { label: "Careers & Volunteers", href: "/careers/", detail: "Bring your time and talents" },
      { label: "Contact", href: "/contact/", detail: "Start a conversation" },
    ],
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  const isCurrentRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (active) document.getElementById(`nav-trigger-${active}`)?.focus();
      else if (open) menuRef.current?.focus();
      setActive(null);
      setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setActive(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [active, open]);

  return (
    <header
      ref={headerRef}
      className="site-header"
      onPointerLeave={() => setActive(null)}
      style={{
        background: scrolled ? "rgba(10, 13, 9, 0.97)" : "rgba(13, 17, 13, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "background 0.3s ease",
      }}
    >
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="FEPAR home" onClick={() => { setActive(null); setOpen(false); }}>
          <Image src="/fepar-logo.png" alt="FESTAC Pan African Renaissance" width={120} height={120} className="logo-img" />
          <span className="brand-sub">FESTAC PAN AFRICAN RENAISSANCE</span>
        </a>
        <nav className="links mega-nav" aria-label="Primary navigation" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}>
          {groups.map((group) => (
            <div className="mega-group" key={group.id} onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(group.id); }}>
              <button
                type="button"
                id={`nav-trigger-${group.id}`}
                className={`mega-trigger${group.links.some((link) => isCurrentRoute(link.href)) ? " is-current" : ""}`}
                aria-expanded={active === group.id}
                aria-controls={`nav-panel-${group.id}`}
                onClick={() => setActive(group.id)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowDown") return;
                  event.preventDefault();
                  setActive(group.id);
                  requestAnimationFrame(() => document.querySelector<HTMLElement>(`#nav-panel-${group.id} a`)?.focus());
                }}
              >
                {group.label} <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div className="mega-panel" id={`nav-panel-${group.id}`} hidden={active !== group.id}>
                <div className="wrap mega-panel-inner">
                  <div className="mega-panel-intro"><span className="eyebrow">FEPAR / Explore</span><p>{group.label}<span>.</span></p><small>{group.description}</small></div>
                  <div className="mega-panel-links">
                    {group.links.map((link) => (
                      <a key={link.href} href={link.href} onClick={() => setActive(null)} aria-current={isCurrentRoute(link.href) ? "page" : undefined}>
                        <span><strong>{link.label}</strong><small>{link.detail}</small></span><ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <a className="nav-cta" href="/contact/" style={{ borderColor: "#F4A800", color: "#f3eee4" }} onClick={() => setActive(null)}>
          Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={menuRef}
          className="menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobileLinks"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => { setOpen(!open); setActive(null); }}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      <nav className="wrap mobile-links" id="mobileLinks" aria-label="Mobile navigation" hidden={!open}>
        {groups.map((group) => (
          <details className="mobile-group" key={group.id}>
            <summary>{group.label} <ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="mobile-group-links">
              {group.links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isCurrentRoute(link.href) ? "page" : undefined}>
                  {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </details>
        ))}
        <a className="mobile-contact" href="/contact/" onClick={() => setOpen(false)}>Let&apos;s connect <ArrowUpRight size={17} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
