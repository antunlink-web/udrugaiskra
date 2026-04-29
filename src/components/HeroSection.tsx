import { motion } from "framer-motion";
import { Heart, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_BG = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/10/iskra-pozadina-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient pt-24 md:pt-28 overflow-hidden">
      {/* decorative sparkles */}
      <Sparkles className="absolute top-32 right-1/2 text-white/30" size={28} />
      <svg className="absolute bottom-32 left-8 text-secondary/60" width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"/>
      </svg>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center min-h-[560px] pb-20 lg:pb-32">
          {/* Copy */}
          <div className="text-white">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold tracking-wide mb-6 border border-white/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cta" />
              Zajedno stvaramo topliji svijet
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-[1.02] tracking-tight"
            >
              Udruga<br/>
              Iskra Svjetlosti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base md:text-lg text-white/90 max-w-xl mb-9 leading-relaxed"
            >
              Pomažemo odraslim osobama s intelektualnim poteškoćama da razviju
              samopouzdanje, vještine i osjećaj pripadnosti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
            >
              <Link
                to="/doniraj"
                className="btn-donate px-9 py-[1.15rem] text-lg hover:scale-[1.03] transition-transform"
              >
                <Heart size={20} className="fill-current" />
                Doniraj sada
              </Link>
              <a
                href="#workshops"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("workshops")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/25 backdrop-blur transition-all"
              >
                <Play size={16} className="fill-current" />
                Pogledaj kako pomažemo
              </a>
            </motion.div>

            {/* Micro trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm text-white/85 mt-4 flex items-center gap-1.5"
            >
              <Heart size={13} className="fill-cta text-cta" />
              Pridružite se <span className="font-semibold text-white">105+ donatora</span> koji već pomažu
            </motion.p>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-primary" />
                  ))}
                </div>
                <span className="font-semibold text-white">105+ donatora</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Split</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Aktivni od 2015.</span>
            </motion.div>
          </div>

          {/* Image — bleed right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative lg:absolute lg:right-0 lg:top-24 lg:bottom-20 lg:w-[48%]"
          >
            <div className="relative h-full rounded-3xl lg:rounded-l-[2.5rem] lg:rounded-r-none overflow-hidden aspect-[4/5] lg:aspect-auto">
              <img
                src={HERO_BG}
                alt="Članovi udruge Iskra Svjetlosti"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 30%" }}
              />
              {/* Left-to-right gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />
            </div>
            {/* decorative star */}
            <svg className="absolute -bottom-6 -left-6 text-secondary" width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
