import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const ABOUT_IMAGE = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg";
const ABOUT_IMAGE_2 = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent blob-shape blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
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
            <img
              src={ABOUT_IMAGE_2}
              alt="Radionice"
              className="hidden md:block absolute -bottom-8 -right-8 w-1/2 aspect-square object-cover rounded-[2rem] border-8 border-background shadow-xl"
              loading="lazy"
            />
            <div className="absolute -top-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-heading font-bold">Od 2016.</span>
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
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Okupljamo odrasle osobe s intelektualnim poteškoćama. Zaboravite dosadne sastanke i
                seminare — ovdje se stvari stvarno kuhaju! Od igre i slikanja do glazbene terapije,
                izleta i čitanja, naša udruga ima sve to i još mnogo više.
              </p>
              <p>
                Naš program kreativnih radionica obuhvaća šivanje, šminkanje, dramu, sport i kuhanje.
                Pod vodstvom stručnih osoba i volontera, naših 19 sudionika se druži, napreduje i
                razvija svoje životne vještine.
              </p>
              <p>
                Novac dolazi iz samog srca građana — financiramo se iz donacija 700+ ljudi koji svaki
                mjesec odvajaju sredstva i osiguravaju nesmetano provođenje programa.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/voditelji-radionica"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Upoznajte naš tim
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/doniraj"
                className="btn-donate px-6 py-3 text-sm"
              >
                Podržite nas
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
