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
  /** Soft decorative gradient for the icon strip */
  tint: string;
  /** Icon colour on the strip */
  iconColor: string;
  highlight?: boolean;
  badge?: string;
}

const cards: PortalCard[] = [
  {
    title: "Kreativne radionice",
    description: "Slikanje, glazba, drama, ples i još mnogo toga.",
    icon: Palette,
    to: "/radionice",
    tint: "linear-gradient(135deg, hsl(330 90% 95%), hsl(280 85% 94%))",
    iconColor: "hsl(320 70% 48%)",
  },
  {
    title: "Doniraj",
    description: "Podržite naš rad jednokratno ili mjesečno.",
    icon: Heart,
    to: "/doniraj",
    tint: "linear-gradient(135deg, hsl(0 90% 95%), hsl(15 95% 93%))",
    iconColor: "hsl(0 72% 52%)",
  },
  {
    title: "Volontiraj",
    description: "Postanite dio našeg tima i promijenite živote.",
    icon: HandHeart,
    to: "/volontiraj",
    tint: "linear-gradient(135deg, hsl(205 100% 94%), hsl(198 95% 91%))",
    iconColor: "hsl(205 80% 45%)",
  },
  {
    title: "Eden",
    description: "Inkluzivni program rada i druženja.",
    icon: Sprout,
    to: "/sto-radimo#eden",
    tint: "linear-gradient(135deg, hsl(140 65% 92%), hsl(160 60% 90%))",
    iconColor: "hsl(150 60% 36%)",
  },
  {
    title: "Rad od doma",
    description: "Prilike za uključivanje iz vlastitog doma.",
    icon: Laptop,
    to: "/sto-radimo#rad-od-doma",
    tint: "linear-gradient(135deg, hsl(255 80% 95%), hsl(225 85% 93%))",
    iconColor: "hsl(245 60% 52%)",
  },
  {
    title: "Stručni kutak",
    description: "Savjeti i članci stručnjaka o inkluziji.",
    icon: BookOpen,
    to: "/sto-radimo#strucni-kutak",
    tint: "linear-gradient(135deg, hsl(185 75% 92%), hsl(200 80% 90%))",
    iconColor: "hsl(192 70% 36%)",
  },
  {
    title: "Josipove stanice",
    description: "Projekt koji povezuje tvrtke i zajednicu.",
    icon: Building2,
    to: "/josipove-stanice",
    tint: "linear-gradient(135deg, hsl(38 95% 92%), hsl(28 90% 90%))",
    iconColor: "hsl(32 80% 44%)",
  },
  {
    title: "Newsletter",
    description: "Prijavi se na novosti i događanja.",
    icon: Mail,
    to: "https://iskrasvjetlosti.com/newsletter",
    external: true,
    tint: "linear-gradient(135deg, hsl(48 100% 90%), hsl(43 100% 85%))",
    iconColor: "hsl(38 90% 42%)",
    highlight: true,
    badge: "Ostani u toku",
  },
];

const PortalGrid = () => {
  return (
    <section
      id="portal"
      className="relative overflow-hidden bg-hero-gradient pt-28 md:pt-32 pb-16 md:pb-24"
    >
      {/* Lighthouse beam rays extending behind the grid */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] max-w-[160vw] max-h-[160vw] light-rays opacity-50 animate-slow-spin" />

      {/* Lighthouse logo watermark behind the card grid */}
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] max-w-[130vw] opacity-[0.10] mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Compact intro header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                {/* Decorative themed icon strip */}
                <div
                  className="relative flex items-center justify-center h-24 rounded-2xl mb-6 overflow-hidden"
                  style={{ background: card.tint }}
                >
                  {card.badge && (
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-cta text-cta-foreground shadow-sm">
                      {card.badge}
                    </span>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon style={{ color: card.iconColor }} size={34} />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-extrabold text-ink mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <ArrowUpRight
                    className="shrink-0 mt-1 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    size={24}
                  />
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </>
            );

            const className = [
              "group h-full bg-card rounded-3xl p-7 border block transition-all duration-300",
              "hover:-translate-y-2",
              card.highlight
                ? "border-cta/60 hover:border-cta ring-1 ring-cta/30"
                : "border-border/70 hover:border-cta/50",
            ].join(" ");

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                whileHover={{ boxShadow: "var(--shadow-float)" }}
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
