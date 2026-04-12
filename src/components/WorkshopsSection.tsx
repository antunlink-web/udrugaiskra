import { motion } from "framer-motion";
import { Palette, Music, Drama, Utensils, Scissors, Sparkles } from "lucide-react";

const workshops = [
  { icon: Palette, title: "Slikanje", desc: "Kreativno izražavanje kroz boje i oblike" },
  { icon: Music, title: "Glazbena terapija", desc: "Rad na udaraljkama i klavijaturama" },
  { icon: Utensils, title: "Kuhanje", desc: "Učenje životnih vještina kroz pripremu jela" },
  { icon: Scissors, title: "Šivanje", desc: "Ručni rad i kreativnost s tkaninama" },
  { icon: Sparkles, title: "Šminkanje", desc: "Izražavanje osobnosti i zabava" },
  { icon: Drama, title: "Drama & Sport", desc: "Pokret, igra i scenska umjetnost" },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Radionice
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
            Naše kreativne radionice
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <w.icon className="text-accent-foreground" size={22} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
