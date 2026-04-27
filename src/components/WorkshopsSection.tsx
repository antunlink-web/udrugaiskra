import { motion } from "framer-motion";
import { Palette, Music, Drama, Utensils, Scissors, Sparkles } from "lucide-react";

const workshops = [
  { icon: Palette, title: "Slikanje", desc: "Kreativno izražavanje kroz boje i oblike", color: "from-rose-100 to-rose-50" },
  { icon: Music, title: "Glazbena terapija", desc: "Rad na udaraljkama i klavijaturama", color: "from-sky-100 to-sky-50" },
  { icon: Utensils, title: "Kuhanje", desc: "Učenje životnih vještina kroz pripremu jela", color: "from-amber-100 to-amber-50" },
  { icon: Scissors, title: "Šivanje", desc: "Ručni rad i kreativnost s tkaninama", color: "from-emerald-100 to-emerald-50" },
  { icon: Sparkles, title: "Šminkanje", desc: "Izražavanje osobnosti i zabava", color: "from-fuchsia-100 to-fuchsia-50" },
  { icon: Drama, title: "Drama & Sport", desc: "Pokret, igra i scenska umjetnost", color: "from-indigo-100 to-indigo-50" },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-sky-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            Radionice
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
            Naše kreativne radionice
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Svaki tjedan otvaramo prostor za smijeh, učenje i druženje kroz raznolike aktivnosti
            koje vode stručne osobe i volonteri.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-3xl p-8 border border-border/60 transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${w.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <w.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
