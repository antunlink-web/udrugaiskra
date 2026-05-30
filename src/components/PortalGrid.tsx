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
import logoImg from "@/assets/iskra-logo.png";

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
    <section
      id="portal"
      className="relative overflow-hidden bg-hero-gradient pt-28 md:pt-32 pb-16 md:pb-24"
    >
      {/* Subtle lighthouse logo watermark behind the card grid */}
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] max-w-[120vw] opacity-[0.05]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Compact intro header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={logoImg}
            alt="Udruga Iskra Svjetlosti"
            className="w-16 h-16 rounded-full mx-auto mb-4 drop-shadow"
          />
          <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-ink mb-2">
            Udruga Iskra Svjetlosti
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Kreativne radionice namijenjene odraslim osobama s intelektualnim
            poteškoćama.
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
