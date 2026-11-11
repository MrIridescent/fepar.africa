
import { ArrowUpRight } from "lucide-react";

type PageHeroProps = { crumb: string; eyebrow: string; title: string; children: string; variant?: string; action?: { label: string; href: string } };

export function PageHero({ crumb, eyebrow, title, children, variant = "", action }: PageHeroProps) {
  return <section className={`page-hero ${variant}`} aria-labelledby="page-title"><div className="wrap"><div className="crumb"><a href="/">FEPAR</a> / {crumb}</div><p className="eyebrow" data-hero-in>{eyebrow}</p><h1 className="display" id="page-title" data-hero-in>{title}</h1><p data-hero-in>{children}</p>{action && <a className="cta" href={action.href} data-hero-in>{action.label}<ArrowUpRight size={17} aria-hidden="true" /></a>}</div></section>;
}
