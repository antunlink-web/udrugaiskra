import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Kreativne radionice"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground mb-6 leading-tight"
        >
          Udruga Iskra Svjetlosti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-light"
        >
          Kreativne radionice namijenjene odraslim osobama s intelektualnim poteškoćama.
          Potaknite volonterstvo, kreativnost i smijeh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Saznajte više
          </a>
          <a
            href="#donate"
            className="px-8 py-3.5 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={18} />
            Doniraj
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
