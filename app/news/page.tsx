import type { Metadata } from "next";
import { ArrowUpRight, Users, Globe, GraduationCap, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Journal — Pan-African Development | FEPAR",
  description: "FEPAR Journal: Pan-African development, AU Agenda 2063 at grassroots, creative industries upskilling, youth skills training, cultural heritage, and diaspora partnerships. We develop, teach, and build Pan-African understanding.",
  alternates: { canonical: "/news/" },
  openGraph: {
    title: "News & Journal | FEPAR — Pan-African Development",
    description: "African development, AU Agenda 2063 grassroots implementation, creative industries, youth upskilling, cultural heritage, Pan-African understanding. Intellectually African.",
    type: "website",
    locale: "en_GB",
    url: "https://www.fepar.africa/news/",
    siteName: "FEPAR — Festac Pan African Renaissance",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR News — Pan-African Development Journal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Journal | FEPAR — Pan-African Development",
    description: "African development, AU Agenda 2063, creative industries, youth upskilling, cultural heritage.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  keywords: [
    "Pan-African development", "African development", "AU Agenda 2063", "grassroots development",
    "creative industries Africa", "youth upskilling Africa", "skills training Africa",
    "Pan-African understanding", "cultural heritage Africa", "FESTAC 77", "FEPAR",
    "African diaspora partnerships", "creative economy Africa", "youth employment Africa",
    "cultural industries upskilling", "Pan-African renaissance", "African development agency",
  ],
};

const articles = [
  {
    id: 1,
    title: "AU Agenda 2063 at the Grassroots",
    date: "12 November 2026",
    readTime: "12 min read",
    author: "FEPAR Policy Desk",
    excerpt: "The African Union Agenda 2063 is often discussed in Addis Ababa and capitals. What does The Africa We Want mean for a young person in Festac Town, a weaver in Kumasi, or a filmmaker in Dakar? We break down how Agenda 2063 seven aspirations translate into grassroots action.",
    category: "AU Agenda 2063",
    tags: ["AU Agenda 2063", "grassroots development", "Pan-African policy"], image: "/og-image.svg", },
  {
    id: 2,
    title: "Teaching Skills That Build Nations: Why Creative Industries Are Infrastructure",
    date: "28 October 2026",
    readTime: "10 min read",
    author: "FEPAR Development Team",
    excerpt: "Music, fashion, film, literature, and visual art are not soft sectors. They are economic infrastructure. We explain how FEPAR upskilling programmes teach market-ready skills.",
    category: "Creative Industries",
    tags: ["creative industries", "skills training", "youth upskilling"], image: "/og-image.svg", },
  {
    id: 3,
    title: "Pan-African Understanding: Why Shared Knowledge Matters More Than Aid",
    date: "14 September 2026",
    readTime: "9 min read",
    author: "FEPAR Editorial",
    excerpt: "Pan-Africanism is not a slogan. It is a practice of solidarity, knowledge exchange, and mutual support. We explore how FEPAR builds Pan-African understanding through cultural exchange, diaspora partnerships, and grassroots education.",
    category: "Pan-Africanism",
    tags: ["Pan-African understanding", "cultural exchange", "diaspora", "solidarity"], image: "/og-image.svg", },
];

export default function NewsPage() {
  return (
    <>
      <section className="news-hero" aria-labelledby="news-title">
        <div className="wrap">
          <div className="news-hero-inner">
            <div className="news-hero-copy">
              <span className="eyebrow">05 / Journal — Pan-African Development</span>
              <h1 className="display" id="news-title">
                Developing Africa.<br />
                <em>Teaching Skills. Building Understanding.</em>
              </h1>
              <p className="lede">
                FEPAR Journal explores African development, AU Agenda 2063 at the
                grassroots, creative industries upskilling, youth skills training,
                cultural heritage, and Pan-African understanding.
              </p>
              <div className="news-hero-stats">
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">SDG Goals Advanced</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">AU Agenda 2063 Aspirations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">55+</span>
                  <span className="stat-label">Nations at FESTAC 77</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="articles-section" aria-labelledby="articles-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Recent writing</span>
            <h2 className="display" id="articles-title">
              From the FEPAR<br />
              <em>Journal.</em>
            </h2>
          </div>
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="news-card" data-reveal>
                <div className="news-card-image" aria-hidden="true" />
                <div className="news-card-meta">
                  <span className="news-category">{article.category}</span>
                  <span className="news-date">{article.date}</span>
                  <span className="news-read">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <div className="news-card-footer">
                  <span><Users size={14} aria-hidden="true" /> {article.author}</span>
                  <a href={`/news/${article.id}/`} className="news-read-more">
                    Read the full story <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="development-focus-section" aria-labelledby="dev-title">
        <div className="wrap">
          <div className="dev-grid">
            <div className="dev-copy" data-reveal>
              <span className="eyebrow">Our Development Focus</span>
              <h2 className="display" id="dev-title">
                We develop.<br />
                <em>We teach. We build.</em>
              </h2>
              <p className="dev-lede">
                FEPAR is not a talking shop. We develop, teach skills, and build
                Pan-African understanding — from the grassroots.
              </p>
              <div className="dev-features">
                <div className="dev-feature">
                  <div className="dev-icon"><Shield size={28} strokeWidth={1.5} aria-hidden="true" /></div>
                  <h3>Grassroots Development</h3>
                  <p>Implementing AU Agenda 2063 at the community level.</p>
                </div>
                <div className="dev-feature">
                  <div className="dev-icon"><GraduationCap size={28} aria-hidden="true" /></div>
                  <h3>Skills Teaching</h3>
                  <p>Upskilling young Africans in creative industries — music, fashion, film, literature, visual art.</p>
                </div>
                <div className="dev-feature">
                  <div className="dev-icon"><Shield size={28} aria-hidden="true" /></div>
                  <h3>Pan-African Understanding</h3>
                  <p>Building solidarity, shared knowledge, and cross-border collaboration across Africa and its diaspora.</p>
                </div>
                <div className="dev-feature">
                  <div className="dev-icon"><Zap size={28} aria-hidden="true" /></div>
                  <h3>Creative Infrastructure</h3>
                  <p>Treating African creativity as foundational economic infrastructure — not optional cultural extras.</p>
                </div>
              </div>
            </div>
            <div className="dev-visual" aria-hidden="true">
              <div className="dev-motif-grid">
                <div className="dev-motif-cell motif-1" />
                <div className="dev-motif-cell motif-2" />
                <div className="dev-motif-cell motif-3" />
                <div className="dev-motif-cell motif-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section" aria-labelledby="newsletter-title">
        <div className="wrap newsletter-inner" data-reveal>
          <div className="newsletter-copy">
            <span className="eyebrow">Join the Movement</span>
            <h2 className="display" id="newsletter-title">
              Subscribe to<br />
              <em>the Journal.</em>
            </h2>
            <p>Occasional dispatches from FEPAR — new writing on African development, AU Agenda 2063 progress, upskilling opportunities, and moments from the Pan-African renaissance. No spam, ever.</p>
          </div>
          <form className="newsletter-form" action="#" method="POST" data-reveal>
            <div className="newsletter-field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <button type="submit" className="btn-gold">
              Subscribe <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
