import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section id="donate" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden bg-ocean p-10 md:p-16 text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-foreground/10 blob-shape blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cta/20 blob-shape blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center mx-auto mb-8 border border-primary-foreground/20">
              <Heart className="text-primary-foreground fill-primary-foreground" size={32} />
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles size={12} /> Postanite dio priče
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-primary-foreground mb-5 leading-tight">
              700+ donatora već je uz nas.<br />Pridružite im se.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
              Novac dolazi iz samog srca građana. Vaša mjesečna donacija osigurava nesmetano
              provođenje programa za naših 19 sudionika.
            </p>
            <Link to="/doniraj" className="btn-donate px-10 py-5 text-lg relative">
              <Heart size={22} className="fill-current" />
              Doniraj sada
            </Link>
            <p className="text-xs text-primary-foreground/60 mt-6">
              Svaka donacija, koliko god mala, čini razliku. Hvala vam! 🧡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
