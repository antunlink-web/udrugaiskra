import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Antonija V.A.",
    text: "U radu s djecom s poteškoćama mnogo više dobijem nego što dam, a srce je puno.",
  },
  {
    name: "Marijana M.",
    text: "Volontiranje je \"win-win\" situacija gdje svi nešto dobiju. Kroz volontiranje sam upoznala važnost timskog rada i kako se zajedničkim snagama postiže uspjeh.",
  },
  {
    name: "Marija B.",
    text: "Htjela sam bit netko ko će im poklonit bar malo svog vremena. U udruzi sam iz potrebe da nisam više jedna od onih kojoj se stegne srce.",
  },
  {
    name: "Lidija R.",
    text: "Osobno sam se pridružila timu udruge u ključnom trenutku svog života. Znam da će se svi koji se pridruže osjećati dobrodošlim i pronaći podršku. ❤️",
  },
  {
    name: "Božena Lj.",
    text: "Mogu reći da sam mnogo naučila od osoba s intelektualnim poteškoćama i da mi mnogo znači prilika da mogu s njima provoditi vrijeme.",
  },
  {
    name: "Sandra S.",
    text: "Skupno učenje i rad na udaraljkama i klavijaturama mogu imati terapeutski učinak. Radom u udruzi postižu se brojni rezultati — zajedno rastemo.",
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
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 border border-border/50 relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
