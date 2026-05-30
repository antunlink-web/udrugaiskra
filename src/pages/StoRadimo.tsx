import { motion } from "framer-motion";
import { Sprout, Laptop, BookOpen, Building2, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const programs = [
  {
    id: "radionice",
    icon: Palette,
    title: "Kreativne radionice",
    text: "Slikanje, glazba, drama, ples, fotografija i još mnogo toga — srce našeg rada.",
    to: "/radionice",
    cta: "Pogledaj radionice",
  },
  {
    id: "eden",
    icon: Sprout,
    title: "Eden",
    text: "Inkluzivni program rada, druženja i osobnog razvoja u poticajnom okruženju.",
    to: "/volontiraj",
    cta: "Uključi se",
  },
  {
    id: "rad-od-doma",
    icon: Laptop,
    title: "Rad od doma",
    text: "Prilike za sudjelovanje i doprinos iz vlastitog doma, prilagođene mogućnostima svakog sudionika.",
    to: "/volontiraj",
    cta: "Saznaj više",
  },
  {
    id: "strucni-kutak",
    icon: BookOpen,
    title: "Stručni kutak",
    text: "Članci i savjeti stručnjaka o inkluziji, ranoj intervenciji i životu s osobama s poteškoćama.",
    to: "/novosti",
    cta: "Čitaj članke",
  },
  {
    id: "josipove-stanice",
    icon: Building2,
    title: "Josipove stanice",
    text: "Projekt koji povezuje tvrtke, roditelje i udruge u zajedničkom djelovanju.",
    to: "/josipove-stanice",
    cta: "Otvori projekt",
  },
];

const StoRadimo = () => {
  return (
    <PageLayout>
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Što radimo</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-5 leading-tight">
              Naši programi i aktivnosti
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Kroz različite programe stvaramo prilike za rast, druženje i uključivanje u zajednicu.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="scroll-mt-28 bg-card rounded-3xl p-7 border border-border/70 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                <p.icon className="text-primary" size={26} />
              </div>
              <h2 className="font-heading text-xl font-extrabold text-ink mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.text}</p>
              <Link to={p.to} className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-primary hover:gap-2.5 transition-all">
                {p.cta} <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default StoRadimo;
