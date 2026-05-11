import { motion } from "framer-motion";
import { Palette, Music, Puzzle, Drum, Drama, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    icon: Palette,
    title: "Slikanje",
    desc: "Kreativno izražavanje bez granica",
    benefit: "Razvija kreativnost",
    image: "/wp/2024/02/SLIKA-ZA-BLOG-1.jpg",
    color: "bg-secondary",
  },
  {
    icon: Music,
    title: "Glazbena terapija",
    desc: "Zvuk koji smiruje i povezuje",
    benefit: "Potiče izražavanje",
    image: "/wp/2024/02/SLIKA-ZA-BLOG-2.jpg",
    color: "bg-primary",
  },
  {
    icon: Puzzle,
    title: "Strateške igre",
    desc: "Razvijamo fokus i logiku",
    benefit: "Razvija logiku",
    image: "/wp/2024/02/SLIKA-ZA-BLOG-3.jpg",
    color: "bg-secondary",
  },
  {
    icon: Drum,
    title: "Samba grupa",
    desc: "Ritam, energija i zajedništvo",
    benefit: "Razvija ritam i energiju",
    image: "/wp/2024/05/viber_image_2024-05-25_14-42-02-730.jpg",
    color: "bg-cta",
  },
  {
    icon: Drama,
    title: "Drama & Sport",
    desc: "Kretanje, gluma i igra",
    benefit: "Jača samopouzdanje",
    image: "/wp/2024/02/BLOG_SLIKA_1-scaled.jpg",
    color: "bg-cta",
  },
  {
    icon: Heart,
    title: "Druženja",
    desc: "Zajedništvo i povezanost",
    benefit: "Gradi prijateljstva",
    image: "/wp/2024/05/IMG_5868.jpg",
    color: "bg-primary",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 md:py-24 bg-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
            <span className="w-6 h-px bg-secondary" /> Što radimo <span className="w-6 h-px bg-secondary" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-extrabold text-primary leading-tight relative inline-block">
            Naše kreativne radionice
            <svg className="absolute -right-12 -top-2 text-cta hidden md:block" width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"/>
            </svg>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
            Kroz igru, stvaranje i zajedništvo potičemo razvoj vještina,
            samopouzdanja i radosti svakog djeteta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-square overflow-hidden bg-accent">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full ${w.color} border-4 border-card flex items-center justify-center shadow-lg`}>
                  <w.icon className="text-white" size={18} />
                </div>
              </div>
              <div className="pt-7 pb-5 px-3 text-center">
                <h3 className="font-heading text-sm font-bold text-primary mb-1">{w.title}</h3>
                <p className="text-[11px] text-secondary font-semibold leading-snug">{w.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/voditelji-radionica"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border-2 border-primary text-primary font-semibold text-sm hover:bg-accent transition-all"
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
