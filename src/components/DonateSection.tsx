import { motion } from "framer-motion";
import { Heart, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section id="donate" className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-ocean p-8 md:p-14 text-white text-center"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-cta/25 blob-shape blur-3xl" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cta flex items-center justify-center mb-6">
              <Heart className="text-cta-foreground fill-cta-foreground" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight mb-4">
              Pomozite nam širiti svjetlost
            </h2>
            <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Vaša donacija omogućuje radionice, terapije, izlete i posebne programe
              koji mijenjaju živote naših sudionika.
            </p>
            <Link
              to="/doniraj"
              className="btn-donate px-9 py-4 text-lg hover:scale-[1.03] transition-transform"
            >
              <Heart size={20} className="fill-current" />
              Doniraj sada
            </Link>
            <div className="flex items-center justify-center gap-2 mt-5 text-xs text-white/70">
              <Lock size={14} />
              Sigurno plaćanje putem Stripe-a
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
