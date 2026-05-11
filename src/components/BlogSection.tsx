import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogSection = () => {
  const featured = articles.slice(0, 2);

  return (
    <section id="blog" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
              <span className="w-6 h-px bg-secondary" /> Novosti
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-extrabold text-primary leading-tight">
              Naši članci i priče
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm story-link"
          >
            Pogledaj sve članke
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((article, i) => {
            const [day, month] = article.date.split(".");
            const monthMap: Record<string, string> = { "01": "SIJ", "02": "VEL", "03": "OŽU", "04": "TRA", "05": "SVI", "06": "LIP", "07": "SRP", "08": "KOL", "09": "RUJ", "10": "LIS", "11": "STU", "12": "PRO" };
            const monthLabel = monthMap[month] || "TRA";
            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="relative w-36 sm:w-48 shrink-0 bg-accent overflow-hidden">
                    <img
                      src="/wp/2024/05/IMG_1742-1-scaled-e1716298283435.jpg"
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-primary rounded-xl px-3 py-2 text-center shadow-md">
                      <p className="text-2xl font-heading font-extrabold text-white leading-none">
                        {day}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                        {monthLabel}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                    <h3 className="font-heading font-bold text-base md:text-lg text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all mt-auto">
                      Pročitaj više
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
