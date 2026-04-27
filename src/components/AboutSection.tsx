import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const ABOUT_IMAGE = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent blob-shape blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={ABOUT_IMAGE}
              alt="Članovi udruge Iskra Svjetlosti"
              className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute -top-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-heading font-bold">Od 2005.</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cta text-cta-foreground rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-heading font-bold leading-none">19+</p>
              <p className="text-xs font-medium mt-1">godina zajedno</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              O nama
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-6 leading-[1.1]">
              Bok! Mi smo Iskra Svjetlosti iz Splita.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[17px]">
              <p>
                Okupili smo zajednicu u kojoj osobe s intelektualnim poteškoćama mogu
                <span className="text-primary font-semibold"> rasti, učiti i osjećati se prihvaćeno</span>.
              </p>
              <p>
                Kroz kreativne, edukativne i društvene radionice razvijamo vještine,
                potičemo samostalnost i gradimo prijateljstva koja traju.
              </p>
              <p>
                Naš cilj je jednostavan — omogućiti svakom korisniku da
                <span className="text-primary font-semibold"> razvije svoj puni potencijal</span>.
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
              <Link to="/doniraj" className="btn-donate px-6 py-3 text-sm">
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
