import { motion } from "framer-motion";

const ABOUT_IMAGE = "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg";

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
              src={ABOUT_IMAGE}
              alt="Članovi udruge Iskra Svjetlosti"
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
              terapije, izleta i čitanja, ova udruga ima sve to i još mnogo više.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naš program kreativnih radionica obuhvaća još i šivanje, šminkanje, dramu, sport, kuhanje
              i druge. Pod vodstvom stručnih osoba i volontera, naši sudionici se druže, napreduju i
              razvijaju svoje životne vještine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A znate li kako ova udruga financira sve te divne aktivnosti? Pa, novac dolazi iz samog
              srca građana, iz građanskog fonda. Financiramo se iz donacija građana (700+) koji svaki
              mjesec odvajaju sredstva, prate rad udruge i osiguravaju nesmetano provođenje programa.
              Zahvaljujući njima možemo financirati aktivnosti za naših 19 sudionika.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Naša želja je da nam se pridružite i postanete dio naše zajednice! Potaknite volonterstvo,
              kreativnost i smijeh, jer kad se udružimo, nema granica za ono što možemo postići.
            </p>
            <a
              href="https://iskrasvjetlosti.hr/voditelji-radionica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Saznajte više o nama
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
