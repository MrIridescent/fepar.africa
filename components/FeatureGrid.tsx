type Feature = { number: string; title: string; description: string };

export function FeatureGrid({ items, className = "" }: { items: Feature[]; className?: string }) {
  return <div className={`grid-3 ${className}`}>{items.map((item) => <article className="card" key={item.number} data-reveal><span className="index">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}
