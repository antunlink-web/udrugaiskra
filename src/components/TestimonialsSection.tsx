import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ana M.",
    role: "Mama korisnice",
    image: "/wp/2023/09/Antonija-Viguric-Anic.jpg",
    text: "Iskra Svjetlosti je za našu obitelj druga kuća.",
  },
  {
    name: "Marko P.",
    role: "Tata korisnika",
    image: "/wp/2023/09/Marijana-Martinovic.jpg",
    text: "Ovdje moje dijete raste, uči i osjeća se prihvaćeno.",
  },
  {
    name: "Lucija K.",
    role: "Volonterka",
    image: "/wp/2023/09/Lidija-Radalj.jpg",
    text: "Volontiranje u Iskri promijenilo je moj pogled na svijet.",
  },
  {
    name: "Petar B.",
    role: "Donator",
    image: "/wp/2023/09/Bozena-Ljusanin.jpg",
    text: "Nevjerojatna energija i ljudi koji vas nauče što je prava radost.",
  },
  {
    name: "Sandra S.",
    role: "Voditeljica radionice",
    image: "/wp/2023/09/Sandra-Sunko.jpg",
    text: "Zajedno rastemo iz tjedna u tjedan — to je terapija za sve.",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-accent/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
            <span className="w-6 h-px bg-secondary" /> Što kažu o nama <span className="w-6 h-px bg-secondary" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-extrabold text-primary leading-tight relative inline-block">
            Vaše riječi, naša inspiracija
            <svg className="absolute -right-12 -top-2 text-cta hidden md:block" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"/>
            </svg>
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {visible.map((t, i) => {
              const featured = i === 1;
              return (
                <motion.div
                  key={`${t.name}-${page}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`bg-card rounded-3xl p-7 md:p-8 border transition-all duration-300 hover:shadow-2xl ${
                    featured ? "border-cta/40 md:scale-[1.04] md:-my-2 ring-1 ring-cta/20" : "border-border/60"
                  }`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <Quote className={`mb-4 ${featured ? "text-cta" : "text-secondary/30"}`} size={32} />
                  <p className={`leading-relaxed mb-6 ${featured ? "text-foreground text-base md:text-lg font-medium" : "text-foreground text-[15px]"}`}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-accent" loading="lazy" />
                    <div>
                      <p className="font-bold text-primary text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Prethodno"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all ${
                    page === i ? "w-8 bg-secondary" : "w-2 bg-border"
                  }`}
                  aria-label={`Stranica ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Sljedeće"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
