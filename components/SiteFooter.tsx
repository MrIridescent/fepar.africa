import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const links = [
  ["FEPAR", "/"],
  ["FESTAC at 50", "/festac-50/"],
  ["Diaspora", "/diaspora/"],
  ["Records", "/records/"],
  ["Development", "/development/"],
  ["Contact", "/contact/"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer" style={{ background: "#0a0d09", paddingBottom: "32px" }}>
      <div className="wrap footer-top">
        <Image
          src="/fepar-logo.png"
          alt="FESTAC Pan African Renaissance"
          width={100}
          height={100}
          className="footer-logo"
        />
      </div>
      <div className="wrap footer-grid">
        <div className="footer-copy">
          <p style={{ color: "#F4F1DE", marginBottom: "16px" }}>
            Festac Pan African Renaissance — connecting enterprise, diaspora
            partnership, creative industries, youth talent, development,
            infrastructure, cultural rights, heritage, research and
            community-led action across Africa and its global diaspora.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
            {["Intellectually African", "Creativity Unlocks the Mind", "From FESTAC to the World"].map((motto, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  border: `1px solid ${i === 0 ? "#F4A800" : i === 1 ? "#CC0001" : "#009B3A"}`,
                  color: i === 0 ? "#F4A800" : i === 1 ? "#CC0001" : "#009B3A",
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "Space Mono, monospace",
                  borderRadius: "4px",
                }}
              >
                {motto}
              </span>
            ))}
          </div>
          <a href="mailto:hello@fepar.africa" style={{ color: "#F4A800", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            hello@fepar.africa <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="wrap legal">
        <span style={{ color: "#D6A66B" }}>© {new Date().getFullYear()} FEPAR / Festac Pan African Renaissance</span>
        <a href="/contact/" style={{ color: "#F4A800" }}>
          Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
