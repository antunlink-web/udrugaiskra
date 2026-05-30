import { motion } from "framer-motion";
import { Eye, Target, History, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { workshopLeaders } from "@/data/workshopLeaders";
import logoImg from "@/assets/iskra-logo.png";

const ONama = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden py-16 md:py-24">
        <img src={logoImg} alt="" aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] opacity-[0.06]" />
        <div className="container mx-auto px-4 relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">O nama</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-5 leading-tight">
              Udruga Iskra Svjetlosti
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Osnovani 2016. godine, okupljamo odrasle osobe s intelektualnim poteškoćama
              i kroz kreativne radionice gradimo zajednicu, samopouzdanje i osjećaj pripadnosti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-ink mb-4">Tko smo mi</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Udruga Iskra Svjetlosti neprofitna je organizacija iz Splita koja okuplja
              osobe s intelektualnim poteškoćama starije od 21 godinu. Kroz tjedne radionice,
              terapije, izlete i nastupe pružamo prostor u kojem svaki sudionik može rasti i blistati.
            </p>
            <p>
              Naš rad počiva na volonterima, voditeljima radionica, roditeljima i donatorima
              koji zajedno čine toplu i podržavajuću zajednicu.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / History */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-5xl">
          {[
            { icon: Target, title: "Misija", text: "Pružiti odraslim osobama s intelektualnim poteškoćama priliku za kreativno izražavanje, razvoj vještina i dostojanstven život u zajednici." },
            { icon: Eye, title: "Vizija", text: "Društvo u kojem su osobe s intelektualnim poteškoćama ravnopravno uključene, prihvaćene i cijenjene." },
            { icon: History, title: "Povijest", text: "Od osnutka 2016. godine prerasli smo u prepoznatljivu udrugu s desetak radionica i predstavom koja je obišla brojne gradove." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-card rounded-3xl p-7 border border-border/70"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4">
                <c.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-lg font-extrabold text-ink mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              <Users size={14} /> Naš tim
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-ink">
              Ljudi koji čine Iskru
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopLeaders.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="bg-card rounded-3xl p-6 border border-border/70 flex gap-4"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={m.image || logoImg}
                  alt={m.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-2xl object-cover bg-accent shrink-0"
                />
                <div>
                  <h3 className="font-heading font-extrabold text-ink leading-tight">{m.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-1.5">{m.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-soft">
        <div className="container mx-auto px-4 text-center">
          <Link to="/doniraj" className="btn-donate px-8 py-4 text-base">
            <Heart size={18} className="fill-current" /> Podržite naš rad
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ONama;
