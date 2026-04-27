import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ana M.",
    role: "Mama korisnice",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Antonija-Viguric-Anic.jpg",
    text: "Iskra Svjetlosti je za našu obitelj više od udruge — to je druga kuća i obitelj koja uvijek razumije.",
  },
  {
    name: "Marko P.",
    role: "Tata korisnika",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Marijana-Martinovic.jpg",
    text: "Ovdje moje dijete raste, uči i osjeća se prihvaćeno. Hvala što postojite!",
  },
  {
    name: "Lucija K.",
    role: "Volonterka",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Lidija-Radalj.jpg",
    text: "Volontiranje u Iskri promijenilo je moj pogled na svijet. Ljubav koju ovdje dobijete je neprocjenjiva.",
  },
  {
    name: "Petar B.",
    role: "Donator",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Bozena-Ljusanin.jpg",
    text: "Nevjerojatna energija, divni ljudi i djeca koja vas nauče što je prava radost.",
  },
  {
    name: "Sandra S.",
    role: "Voditeljica radionice",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Sandra-Sunko.jpg",
    text: "Skupno učenje i rad imaju terapeutski učinak — zajedno rastemo iz tjedna u tjedan.",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-sky-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            Što kažu o nama
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
            Vaše riječi, naša inspiracija
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${page}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-3xl p-7 border border-border/60 hover:shadow-xl transition-shadow"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Quote className="text-secondary/30 mb-4" size={32} />
                <p className="text-foreground leading-relaxed mb-6 text-[15px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
