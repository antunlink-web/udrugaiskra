import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogSection = () => {
  const featured = articles.slice(0, 2);

  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Novosti
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
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
          {featured.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${article.slug}`}
                className="group bg-card rounded-3xl overflow-hidden border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative w-32 sm:w-44 shrink-0 bg-accent overflow-hidden">
                  <img
                    src="https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg"
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-card rounded-xl px-2.5 py-1.5 text-center shadow-md">
                    <p className="text-lg font-heading font-bold text-cta leading-none">
                      {article.date.split(".")[0]}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {article.date.split(".")[1] === "10" ? "LIS" : article.date.split(".")[1] === "04" ? "TRA" : "VEL"}
                    </p>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all mt-auto">
                    Pročitaj više
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
