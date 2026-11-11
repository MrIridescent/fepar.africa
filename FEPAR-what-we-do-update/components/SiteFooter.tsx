import { ArrowUpRight } from "lucide-react";

const links = [
  ["FEPAR", "/"],
  ["FESTAC at 50", "/festac-50/"],
  ["What We Do", "/what-we-do/"],
  ["Diaspora", "/diaspora/"],
  ["Records", "/records/"],
  ["Development", "/development/"],
  ["Contact", "/contact/"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-copy">
          <a className="brand-name" href="/" aria-label="FEPAR home">FEPAR</a>
          <p>Festac Pan African Renaissance — connecting enterprise, diaspora partnership, creative industries, youth talent, development, infrastructure, cultural rights, heritage, research and community-led action across Africa and its global diaspora.</p>
          <a className="footer-email" href="mailto:hello@fepar.africa">hello@fepar.africa <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} FEPAR / Festac Pan African Renaissance</span>
        <a href="/contact/">Start a conversation <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
