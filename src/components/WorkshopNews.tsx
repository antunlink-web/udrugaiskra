import { Newspaper, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkshopNewsItem } from "@/data/workshops";

const WorkshopNews = ({ items }: { items: WorkshopNewsItem[] }) => {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-soft border border-border/60 p-6 text-sm text-muted-foreground flex items-center gap-3">
        <Newspaper size={18} className="text-primary shrink-0" />
        Za ovu radionicu još nema objavljenih novosti. Pratite našu stranicu{" "}
        <Link to="/novosti" className="text-primary font-semibold hover:underline">
          Novosti
        </Link>
        .
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => {
        const inner = (
          <>
            {item.image && (
              <div className="h-32 overflow-hidden rounded-t-2xl">
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
                {item.date}
              </div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-heading text-base font-extrabold text-ink leading-snug">
                  {item.title}
                </h3>
                <ArrowUpRight size={16} className="text-primary mt-1 shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
            </div>
          </>
        );

        const className =
          "block bg-card rounded-2xl border border-border/60 hover:border-primary/40 hover:-translate-y-0.5 transition-all overflow-hidden";

        return item.href ? (
          <Link key={i} to={item.href} className={className}>
            {inner}
          </Link>
        ) : (
          <div key={i} className={className}>
            {inner}
          </div>
        );
      })}
    </div>
  );
};

export default WorkshopNews;
