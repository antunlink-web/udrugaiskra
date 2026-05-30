import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/iskra-logo.png";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Light rays inspired by the lighthouse beam */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="light-rays animate-slow-spin w-[140vw] h-[140vw] opacity-60" />
      </div>

      {/* Large faded lighthouse logo in the background */}
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] max-w-[120vw] opacity-[0.07]"
      />

      {/* soft top/bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center min-h-[78vh] justify-center pt-28 pb-20">
          <motion.img
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={logoImg}
            alt="Udruga Iskra Svjetlosti"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-8 drop-shadow-xl"
          />

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/25 border border-cta/40 text-ink text-xs font-bold tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            Svjetlost zajedništva od 2016.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-ink mb-5 leading-[1.04] tracking-tight"
          >
            Udruga<br />Iskra Svjetlosti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-xl text-foreground/75 max-w-2xl mb-9 leading-relaxed"
          >
            Kreativne radionice namijenjene odraslim osobama s intelektualnim
            poteškoćama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
          >
            <Link
              to="/doniraj"
              className="btn-donate px-9 py-[1.1rem] text-lg hover:scale-[1.03] transition-transform"
            >
              <Heart size={20} className="fill-current" />
              Doniraj
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-[1.1rem] rounded-full bg-card text-primary font-bold text-base border border-border hover:bg-accent transition-all shadow-sm"
            >
              <Mail size={18} />
              Kontaktirajte nas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
