import { ArrowUpRight } from "lucide-react";

const links = [
  ["FEPAR", "/"],
  ["FESTAC at 50", "/festac-50/"],
  ["Festival genealogy", "/festac-50/#journey"],
  ["Research paths", "/festac-50/#research-paths"],
  ["Lessons from the festivals", "/festac-50/#lessons"],
  ["Festac Town", "/festac-50/#festac-town"],
  ["Archive care", "/festac-50/#archive-practice"],
  ["Manifesto", "/manifesto/"],
  ["Get involved", "/get-involved/"],
  ["Explore Pan-Africanism", "/explore/pan-africanism/"],
  ["Diaspora", "/diaspora/"],
  ["Records", "/records/"],
  ["Performing Arts", "/performing-arts/"],
  ["Youth, Skills & Crafts", "/development/"],
  ["Creator & Artisan Community", "/creator-community/"],
  ["Digital Creativity & AI", "/digital-futures/"],
  ["Maker ownership", "/development/#maker-economy"],
  ["Partners & CSR", "/partners/"],
  ["STEM & Innovation", "/innovation/"],
  ["News & Ideas", "/news/"],
  ["Contact", "/contact/"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer" style={{ background: "#0a0d09", paddingBottom: "32px" }}>
      <div className="wrap footer-grid">
        <div className="footer-copy">
          <p style={{ color: "#F4F1DE", marginBottom: "16px" }}>
            FEPAR is a grassroots Pan-African initiative rooted in Festac Town,
            Lagos. We connect the history of cultural exchange to questions of
            memory, young people&apos;s skills, makers&apos; ownership and reciprocal
            diaspora relationships. An independent invitation, not an official
            festival programme or archive.
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
          <div style={{ marginTop: "24px" }}>
            <a href="https://www.facebook.com/fepar.africa" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 17px", border: "1px solid #F4A800", color: "#F4F1DE", fontWeight: 700 }}>
              Follow FEPAR on Facebook <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
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
