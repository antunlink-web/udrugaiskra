import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Antonija V.A.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Antonija-Viguric-Anic.jpg",
    text: "U radu s djecom s poteškoćama mnogo više dobijem nego što dam, a srce je puno.",
  },
  {
    name: "Marijana M.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Marijana-Martinovic.jpg",
    text: "Volontiranje je \"win-win\" situacija gdje svi nešto dobiju. Kroz volontiranje sam upoznala važnost timskog rada i kako se zajedničkim snagama postiže uspjeh.",
  },
  {
    name: "Marija B.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Marija-Bonacic.jpg",
    text: "U udruzi sam iz potrebe da nisam više jedna od onih kojoj se stegne srce i zasuze oči kad vide djete sa poteškoćama. Htjela sam bit netko ko će im poklonit bar malo svog vremena.",
  },
  {
    name: "Lidija R.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Lidija-Radalj.jpg",
    text: "Osobno sam se pridružila timu udruge u ključnom trenutku svog života, gdje sam tražila sebe, i sudjelovanje u udruzi mi je puno pomoglo. Znam da će se svi koji se pridruže osjećati dobrodošlim i pronaći podršku. ❤️",
  },
  {
    name: "Božena Lj.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Bozena-Ljusanin.jpg",
    text: "Mogu reći da sam mnogo naučila od osoba s intelektualnim poteškoćama i da mi mnogo znači prilika da mogu s njima provoditi vrijeme. Svakome bi poželjela takvo iskustvo.",
  },
  {
    name: "Sandra S.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Sandra-Sunko.jpg",
    text: "Skupno učenje i rad na udaraljkama i klavijaturama, mogu imati terapeutski učinak na mozak i živčani sustav. Radom u udruzi postižu se brojni rezultati — zajedno rastemo.",
  },
  {
    name: "Daniela Lj.",
    image: null,
    text: "Ubrzo sam shvatila da me rad za novac, ne može trajno usrećiti i da mi je nedostajalo nešto. Upravo to pronašla sam u radu s onima koji se sami često ne mogu pobrinuti za sebe. Želja mi je okupiti što više onih koji će se osjećati dobro na radionicama i da zajedno koračamo naprijed.",
  },
  {
    name: "Željana L.",
    image: "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/Zeljana-Lazeta.jpg",
    text: "Želim pomoći djeci da razviju što više različitih sposobnosti, osjete radost druženja i ljubav i izvan svojih obitelji. Mislim da to još uvijek mogu postići.",
  },
  {
    name: "Danijel M.",
    image: null,
    text: "Počela sam volontirati u udruzi gdje su me dočekali raširenih ruku i udruga je uskoro postala moj drugi dom, a ljudi u njoj su postali moja druga obitelj. Obožavam ih... Jer vjerujem da se svaka mala pomoć broji!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Volonteri
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
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
              className="bg-card rounded-2xl p-8 border border-border/50 relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
