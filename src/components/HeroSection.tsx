import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_BG = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-sky-fade pt-28 md:pt-32 pb-12">
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
              Zajedno stvaramo topliji svijet
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[3.75rem] font-heading font-semibold text-primary mb-5 leading-[1.05]"
            >
              Topao dom za <em className="text-gradient-ocean not-italic">svaku iskru</em> svjetlosti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-foreground/80 max-w-xl lg:max-w-lg mx-auto lg:mx-0 mb-3 font-medium"
            >
              Kreativne radionice namijenjene odraslim osobama s intelektualnim poteškoćama.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-muted-foreground max-w-xl lg:max-w-lg mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              Već više od 19 godina stvaramo sigurno i poticajno okruženje kroz radionice,
              druženje i aktivnosti koje grade samopouzdanje, vještine i osjećaj pripadnosti.
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
                href="#workshops"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("workshops")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-semibold text-base border border-border hover:border-primary/40 hover:bg-accent/40 transition-all"
              >
                <Play size={16} className="fill-current" />
                Pogledaj kako pomažemo
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-secondary/30 border-2 border-background" />
                  ))}
                </div>
                <span className="font-semibold text-primary">700+ donatora</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>Split</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>Aktivni od 2005.</span>
            </motion.div>
          </div>

          {/* Image */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
