import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    title: "Pismo predsjednice travanj 2024. godine",
    date: "24.04.2024.",
    category: "Novosti",
    excerpt: "Dragi prijatelji Udruge Iskra Svjetlosti, donosimo kratki pregled događanja i aktivnosti naših sudionika i prenosimo dio atmosfere gdje smo sve bili prethodnih nekoliko tjedana.",
    url: "https://iskrasvjetlosti.hr/pismo-predsjednice-travanj-2024-godine/",
  },
  {
    title: "5 Smjernica za život s osobama s invaliditetom",
    date: "24.04.2024.",
    category: "Stručni kutak",
    excerpt: "Živimo u vremenu koje sve više prepoznaje važnost inkluzije i podrške osobama s invaliditetom. Inkluzija se definira kao proces uključivanja svih članova društva.",
    url: "https://iskrasvjetlosti.hr/5-smjernica-za-zivot-s-osobama-s-invaliditetom/",
  },
  {
    title: "Kako je Šolta dobila svoj osmijeh natrag",
    date: "26.02.2024.",
    category: "Udruge Hrvatske",
    excerpt: "Na dalmatinskom otoku Šolti, udaljenom svega 45 minuta plovidbe trajektom od Splita, rodila se inicijativa koja je donijela novu nadu zajednici.",
    url: "https://iskrasvjetlosti.hr/kako-je-solta-dobila-svoj-osmijeh-natrag/",
  },
  {
    title: "Josipove stanice – Cross Print",
    date: "10.10.2024.",
    category: "Poduzetnički kutak",
    excerpt: "Ova priča počinje prije više od 15 godina, a traje sve do danas. Potpuno drugačija, ali s pogledom u istom smjeru — prema pomaganju drugima.",
    url: "https://iskrasvjetlosti.hr/josipove-stanice-cross-print/",
  },
  {
    title: "Iskustvo mame dječaka s poremećajem iz spektra autizma",
    date: "10.10.2024.",
    category: "Roditeljski kutak",
    excerpt: "Kako se suočiti s činjenicom da imate dijete iz spektra autizma? Kako na vrijeme otkriti i utvrditi da nešto nije u redu?",
    url: "https://iskrasvjetlosti.hr/iskustvo-mame-djecaka-s-poremecajem-iz-spektra-autizma-kako-mi-je-bilo/",
  },
  {
    title: "Rana intervencija kao prevencija – intelektualne poteškoće",
    date: "10.10.2024.",
    category: "Stručni kutak",
    excerpt: "Kako prepoznati simptome koji upućuju na poteškoće u razvoju vašeg ili nečijeg djeteta? Što ako ne ide sve po planu?",
    url: "https://iskrasvjetlosti.hr/rana-intervencija-kao-prevencija-intelektualne-poteskoce/",
  },
];

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
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block"
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
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://iskrasvjetlosti.hr/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Posjeti Blog
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
