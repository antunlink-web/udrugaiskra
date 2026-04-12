import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Naši članci i priče
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                to={`/blog/${article.slug}`}
                className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">
                    <Tag size={12} />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Pročitaj više
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Posjeti Blog
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
