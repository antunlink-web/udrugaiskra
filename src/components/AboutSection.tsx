import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImage}
              alt="Članovi udruge na radionici"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              O nama
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6 leading-snug">
              Bok! Mi smo Udruga Iskra Svjetlosti iz Splita
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Okupljamo odrasle osobe s intelektualnim poteškoćama. Zaboravite dosadne sastanke i
              seminare — ovdje se stvari stvarno kuhaju! Doslovno! Od igre i slikanja do glazbene
              terapije, izleta i čitanja.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naš program kreativnih radionica obuhvaća šivanje, šminkanje, dramu, sport, kuhanje i
              mnoge druge aktivnosti. Pod vodstvom stručnih osoba i volontera, naši sudionici se
              druže, napreduju i razvijaju svoje životne vještine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Financiramo se iz donacija 700+ građana koji svaki mjesec odvajaju sredstva, prate rad
              udruge i osiguravaju nesmetano provođenje programa za naših 19 sudionika.
            </p>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Pridružite nam se
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
