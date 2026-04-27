import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { articles } from "@/data/articles";

const BlogPage = () => {
  return (
    <PageLayout>
      <section className="bg-sky-fade py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-secondary/15 blob-shape blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary mb-6 leading-tight">
              Naši članci i priče
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pratite naše aktivnosti, pročitajte stručne članke i upoznajte priče naših sudionika.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
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
                  className="group bg-card rounded-3xl p-7 border border-border/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 block h-full"
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    Pročitaj više
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
