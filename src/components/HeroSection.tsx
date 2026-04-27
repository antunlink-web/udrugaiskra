import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_BG = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-fade pt-28 pb-16">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] bg-secondary/20 blob-shape blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[32rem] h-[32rem] bg-primary/15 blob-shape blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
              Udruga iz Splita
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary mb-6 leading-[1.05]"
            >
              Topao dom za <em className="text-gradient-ocean not-italic">svaku iskru</em> svjetlosti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-xl lg:max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Kreativne radionice za odrasle osobe s intelektualnim poteškoćama.
              Potičemo volonterstvo, kreativnost i smijeh — jer kad se udružimo, nema granica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link to="/doniraj" className="btn-donate px-8 py-4 text-base">
                <Heart size={18} className="fill-current" />
                Doniraj sada
              </Link>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-semibold text-base border border-border hover:border-primary/30 transition-colors"
              >
                Saznajte više
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={HERO_BG}
                alt="Članovi udruge Iskra Svjetlosti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating donation card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-left-10 bg-card rounded-3xl p-5 shadow-xl border border-border/50 max-w-xs"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cta/10 flex items-center justify-center">
                  <Heart className="text-cta fill-cta" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Pridružite se</p>
                  <p className="text-lg font-heading font-bold text-primary">700+ donatora</p>
                </div>
              </div>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-2 md:-right-8 bg-secondary text-secondary-foreground rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-xs uppercase tracking-wider opacity-90">Od 2016.</p>
              <p className="text-xl font-heading font-bold">19 sudionika</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
