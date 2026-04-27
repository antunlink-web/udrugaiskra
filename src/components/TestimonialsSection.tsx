import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Antonija V.A.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Antonija-Viguric-Anic.jpg", text: "U radu s djecom s poteškoćama mnogo više dobijem nego što dam, a srce je puno." },
  { name: "Marijana M.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Marijana-Martinovic.jpg", text: "Volontiranje je \"win-win\" situacija gdje svi nešto dobiju. Kroz volontiranje sam upoznala važnost timskog rada." },
  { name: "Marija B.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Marija-Bonacic.jpg", text: "U udruzi sam iz potrebe da nisam više jedna od onih kojoj se stegne srce kad vide dijete sa poteškoćama. Htjela sam im pokloniti bar malo svog vremena." },
  { name: "Lidija R.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Lidija-Radalj.jpg", text: "Pridružila sam se timu udruge u ključnom trenutku života, gdje sam tražila sebe — sudjelovanje mi je puno pomoglo. ❤️" },
  { name: "Božena Lj.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Bozena-Ljusanin.jpg", text: "Mnogo sam naučila od osoba s intelektualnim poteškoćama. Svakome bih poželjela takvo iskustvo." },
  { name: "Sandra S.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Sandra-Sunko.jpg", text: "Skupno učenje i rad na udaraljkama imaju terapeutski učinak na mozak i živčani sustav. Zajedno rastemo." },
  { name: "Daniela Lj.", image: null, text: "Shvatila sam da me rad za novac ne može trajno usrećiti. To što mi je nedostajalo pronašla sam u radu s onima koji se sami često ne mogu pobrinuti za sebe." },
  { name: "Željana L.", image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Zeljana-Lazeta.jpg", text: "Želim pomoći djeci da razviju različite sposobnosti, osjete radost druženja i ljubav i izvan svojih obitelji." },
  { name: "Danijel M.", image: null, text: "Udruga je uskoro postala moj drugi dom, a ljudi u njoj moja druga obitelj. Vjerujem da se svaka mala pomoć broji!" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            Volonteri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight">
            Što kažu naši volonteri
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-gradient-to-br from-accent/40 to-card rounded-3xl p-8 border border-border/60 relative hover:shadow-xl transition-shadow"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="text-secondary/30 mb-4" size={36} />
              <p className="text-foreground leading-relaxed mb-6 text-[15px]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-semibold">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Volonter/ka</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
