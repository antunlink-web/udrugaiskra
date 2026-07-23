import { motion } from "framer-motion";
import { Heart, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section id="donate" className="py-9 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-[1.75rem] overflow-hidden bg-ocean p-6 md:p-9 text-white text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-cta/25 blob-shape blur-3xl" />
          <div className="relative">
            <div className="w-11 h-11 mx-auto rounded-xl bg-cta flex items-center justify-center mb-4">
              <Heart className="text-cta-foreground fill-cta-foreground" size={20} />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold leading-snug mb-2 italic">
              „Ne možemo svi činiti velika djela, ali možemo činiti mala djela s velikom ljubavlju."
            </h2>
            <p className="text-white/80 text-xs md:text-sm max-w-xl mx-auto mb-6">
              — Sveta Majka Terezija
            </p>
            <Link
              to="/doniraj"
              className="btn-donate px-7 py-3 text-base hover:scale-[1.03] transition-transform"
            >
              <Heart size={18} className="fill-current" />
              Doniraj sada
            </Link>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/70">
              <Lock size={13} />
              Sigurno plaćanje putem Stripe-a
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
