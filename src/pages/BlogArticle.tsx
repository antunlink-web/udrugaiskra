import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getArticleBySlug } from "@/data/articles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <PageLayout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Članak nije pronađen</h1>
          <Link to="/novosti" className="text-primary font-semibold hover:underline">
            ← Povratak na blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="bg-sky-fade pb-20">
        <div className="container mx-auto px-4 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/novosti"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Povratak na blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-accent px-3 py-1 rounded-full">
                <Tag size={12} />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar size={12} />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-10 leading-[1.1]">
              {article.title}
            </h1>

            <div className="bg-card rounded-[2rem] p-8 md:p-12 border border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
              {article.content.map((paragraph, i) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={i} className="text-xl md:text-2xl font-heading font-semibold text-primary mt-8 mb-4 first:mt-0">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("> ")) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-secondary pl-6 my-6 italic text-primary/80 bg-accent/30 py-3 pr-4 rounded-r-xl"
                    >
                      {paragraph.replace("> ", "")}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph.split("**").map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-primary font-semibold">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to="/novosti"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                Svi članci
              </Link>
              <Link to="/doniraj" className="btn-donate px-6 py-3 text-sm">
                Podržite nas
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogArticle;
