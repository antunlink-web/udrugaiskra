import { motion } from "framer-motion";
import { Palette, Music, Puzzle, Drum, Drama, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    icon: Palette,
    title: "Slikanje",
    desc: "Kreativno izražavanje bez granica",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg",
  },
  {
    icon: Music,
    title: "Glazbena terapija",
    desc: "Zvuk koji smiruje i povezuje",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg",
  },
  {
    icon: Puzzle,
    title: "Strateške igre",
    desc: "Razvijamo fokus i logičko mišljenje",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg",
  },
  {
    icon: Drum,
    title: "Samba grupa",
    desc: "Ritam, energija i zajedništvo",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg",
  },
  {
    icon: Drama,
    title: "Drama & sport",
    desc: "Kretanje, gluma i igra",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1699-scaled-e1714727578689.jpg",
  },
  {
    icon: Heart,
    title: "Druženja",
    desc: "Prijateljstva koja traju cijeli život",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2024/05/IMG_1742-1-scaled-e1716298283435.jpg",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 md:py-28 bg-sky-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            Što radimo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
            Naše kreativne radionice
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Kroz igru, stvaranje i zajedništvo potičemo razvoj vještina, samopouzdanja
            i radosti svakog korisnika.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/60 transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-accent">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-card shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-secondary/15 flex items-center justify-center">
                    <w.icon className="text-secondary" size={20} />
                  </div>
                </div>
              </div>
              <div className="pt-9 pb-6 px-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/voditelji-radionica"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-primary font-semibold text-sm hover:border-primary/40 hover:bg-accent/40 transition-all"
          >
            Pogledaj sve aktivnosti
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
