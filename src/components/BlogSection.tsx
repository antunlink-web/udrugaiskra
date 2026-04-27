import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogSection = () => {
  const featured = articles.slice(0, 3);

  return (
    <section id="blog" className="py-24 md:py-32 bg-sky-fade">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
              Naši članci i priče
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm story-link"
          >
            Svi članci
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                to={`/blog/${article.slug}`}
                className="group bg-card rounded-3xl p-7 border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-accent px-3 py-1 rounded-full">
                    <Tag size={12} />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Pročitaj više
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Svi članci
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
