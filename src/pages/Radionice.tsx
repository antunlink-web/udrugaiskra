import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { workshops } from "@/data/workshops";

const Radionice = () => {
  return (
    <PageLayout>
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Kreativne radionice</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-5 leading-tight">
              Naše radionice
            </h1>
            <p className="text-lg text-foreground/75">
              Odaberite radionicu i otkrijte detalje, raspored i prijavite se za sudjelovanje.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/radionice/${w.slug}`}
                className="group block h-full bg-card rounded-3xl overflow-hidden border border-border/70 hover:-translate-y-1.5 hover:border-cta/50 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={w.images[0]} alt={w.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-2xl bg-cta flex items-center justify-center">
                    <w.icon className="text-cta-foreground" size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-extrabold text-ink mb-1.5">{w.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{w.shortDescription}</p>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Clock size={13} className="text-primary" /> {w.days} • {w.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} className="text-primary" /> {w.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Detalji i prijava <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Radionice;
