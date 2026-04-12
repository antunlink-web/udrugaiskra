import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center bg-card rounded-3xl p-10 md:p-14 border border-border/50"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <Heart className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Postanite dio naše priče
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Novac dolazi iz samog srca građana. Pridružite se 700+ donatora koji svaki mjesec
            odvajaju sredstva i osiguravaju nesmetano provođenje programa za naše sudionike.
          </p>
          <a
            href="https://iskrasvjetlosti.hr/#donate-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            <Heart size={18} />
            Doniraj sada
          </a>
          <p className="text-xs text-muted-foreground mt-6">
            Svaka donacija, koliko god mala, čini razliku. Hvala vam! 🧡
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
