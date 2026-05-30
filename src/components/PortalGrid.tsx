import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Palette,
  Heart,
  HandHeart,
  Sprout,
  Laptop,
  BookOpen,
  Building2,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface PortalCard {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  external?: boolean;
}

const cards: PortalCard[] = [
  {
    title: "Kreativne radionice",
    description: "Slikanje, glazba, drama, ples i još mnogo toga.",
    icon: Palette,
    to: "/radionice",
  },
  {
    title: "Doniraj",
    description: "Podržite naš rad jednokratno ili mjesečno.",
    icon: Heart,
    to: "/doniraj",
  },
  {
    title: "Volontiraj",
    description: "Postanite dio našeg tima i promijenite živote.",
    icon: HandHeart,
    to: "/volontiraj",
  },
  {
    title: "Eden",
    description: "Inkluzivni program rada i druženja.",
    icon: Sprout,
    to: "/sto-radimo#eden",
  },
  {
    title: "Rad od doma",
    description: "Prilike za uključivanje iz vlastitog doma.",
    icon: Laptop,
    to: "/sto-radimo#rad-od-doma",
  },
  {
    title: "Stručni kutak",
    description: "Savjeti i članci stručnjaka o inkluziji.",
    icon: BookOpen,
    to: "/sto-radimo#strucni-kutak",
  },
  {
    title: "Josipove stanice",
    description: "Projekt koji povezuje tvrtke i zajednicu.",
    icon: Building2,
    to: "/josipove-stanice",
  },
  {
    title: "Newsletter",
    description: "Prijavite se na naše novosti i priče.",
    icon: Mail,
    to: "https://iskrasvjetlosti.com/newsletter",
    external: true,
  },
];

const PortalGrid = () => {
  return (
    <section id="portal" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest mb-4">
            Istražite
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-ink mb-3">
            Kamo želite krenuti?
          </h2>
          <p className="text-base text-muted-foreground">
            Odaberite područje i otkrijte sve što udruga Iskra Svjetlosti nudi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent group-hover:bg-cta transition-colors flex items-center justify-center">
                    <Icon className="text-primary group-hover:text-cta-foreground transition-colors" size={26} />
                  </div>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-cta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    size={22}
                  />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-ink mb-1.5">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </>
            );

            const className =
              "group h-full bg-card rounded-3xl p-6 border border-border/70 hover:border-cta/50 hover:-translate-y-1.5 transition-all duration-300 block";

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                style={{ boxShadow: "var(--shadow-card)" }}
                className="rounded-3xl"
              >
                {card.external ? (
                  <a href={card.to} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link to={card.to} className={className}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortalGrid;
