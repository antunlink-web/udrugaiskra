import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const ABOUT_IMAGE = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/02/BLOG_SLIKA_2-scaled.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with decorations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Yellow blob top-left */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-cta z-0" />
            {/* Blue dots pattern bottom-left */}
            <div className="absolute -bottom-4 left-2 grid grid-cols-6 gap-1.5 z-0">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
              ))}
            </div>

            <div className="relative z-10">
              <img
                src={ABOUT_IMAGE}
                alt="Članovi udruge Iskra Svjetlosti"
                className="rounded-3xl shadow-xl w-full object-cover aspect-[5/4]"
                loading="lazy"
              />
              {/* Video play badge */}
              <div className="absolute -bottom-6 right-6 bg-card rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Play className="text-white fill-white ml-0.5" size={16} />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-primary">Pogledaj našu priču</p>
                  <p className="text-[10px] text-muted-foreground">2:45 min</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              <span className="w-6 h-px bg-secondary" /> O nama
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-primary mb-6 leading-[1.1] relative inline-block">
              Mi smo Iskra Svjetlosti<br/>iz Splita.
              <svg className="absolute -right-10 top-2 text-cta" width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M5 12 Q 9 6, 14 10 T 22 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M3 18 Q 7 14, 12 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.85] text-[15px]">
              <p>
                Od 2015. godine stvaramo sigurno, poticajno i uključivo okruženje za
                odrasle osobe s intelektualnim poteškoćama i njihove obitelji.
              </p>
              <p>
                Kroz kreativne, edukativne i sportske aktivnosti gradimo vještine,
                samopouzdanje i prijateljstva koja traju.
              </p>
              <p className="text-primary font-bold text-base leading-relaxed">
                Naš cilj je jednostavan — omogućiti svakom korisniku da razvije
                svoj puni potencijal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/voditelji-radionica"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Saznaj više o nama
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/doniraj"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-primary text-primary font-semibold text-sm hover:bg-accent transition-colors"
              >
                Uključi se
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
