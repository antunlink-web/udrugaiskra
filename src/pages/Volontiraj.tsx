import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import VolunteerForm from "@/components/VolunteerForm";
import TestimonialsSection from "@/components/TestimonialsSection";

const reasons = [
  { icon: Heart, title: "Mijenjajte živote", text: "Vaše vrijeme i pažnja izravno pomažu našim sudionicima da rastu i blistaju." },
  { icon: Users, title: "Postanite dio zajednice", text: "Pridružite se toploj ekipi volontera, voditelja i roditelja." },
  { icon: Sparkles, title: "Razvijajte se", text: "Steknite nova iskustva, vještine i prijateljstva za cijeli život." },
  { icon: Clock, title: "Fleksibilno", text: "Uključite se prema svojim mogućnostima - svaki sat pomaže." },
];

const Volontiraj = () => {
  return (
    <PageLayout>
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Volontiraj</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-5 leading-tight">
              Postanite dio naše priče
            </h1>
            <p className="text-lg text-foreground/75">
              Volonteri su srce udruge Iskra Svjetlosti. Pridružite nam se i pomozite stvarati svjetlost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why volunteer */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-ink text-center mb-10">Zašto volontirati?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-card rounded-3xl p-6 border border-border/70"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4">
                  <r.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-extrabold text-ink mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-ink mb-2">Prijavite se za volontiranje</h2>
            <p className="text-sm text-muted-foreground">Ispunite obrazac i javit ćemo vam se u najkraćem roku.</p>
          </div>
          <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/70" style={{ boxShadow: "var(--shadow-float)" }}>
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* Testimonials at the bottom */}
      <TestimonialsSection />
    </PageLayout>
  );
};

export default Volontiraj;
