import { motion } from "framer-motion";
import { Users, Building2, Heart, Handshake, BookOpen, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Roditelji",
    description: "Prvi roditeljski portal na kojem dijelimo priče i iskustva života s osobama s intelektualnim teškoćama odrasle dobi. Podijelite s nama svoju priču i zajedno podignimo svijest.",
  },
  {
    icon: Heart,
    title: "Iskra Svjetlosti",
    description: "Udruga osnovana 2016. godine okuplja osobe s intelektualnim teškoćama odrasle dobi (stariji od 21 godinu). Podržite projekt u kojem tvrtke omogućuju roditeljima djece da ispričaju priču.",
  },
  {
    icon: Building2,
    title: "Firme",
    description: "Svaka tvrtka u RH može donirati do 5% ukupnih prihoda ostvarenih u prošloj godini humanitarnoj organizaciji neoporezivo.",
  },
  {
    icon: BookOpen,
    title: "Pričamo neispričano",
    description: "Intervju, priče, iskustva koja do sada nisu zapisana ili objavljena dijelimo s drugima.",
  },
  {
    icon: MessageCircle,
    title: "Pričamo i Vašu priču",
    description: "Dijelimo i vašu ideju i put. Predstavite se i potaknite druge na djelovanje.",
  },
  {
    icon: Handshake,
    title: "Okupljamo se",
    description: "Podijelite svoje iskustvo, dojmove ili se povežite s onima koji sudjeluju u realizaciji projekta.",
  },
];

const sponsors = [
  { name: "Motus Natura", address: "Krležina 14, Split", phone: "097 746 5317" },
  { name: "Pasta Laura d.o.o.", address: "Radunica 39, Split" },
  { name: "Porticus d.o.o.", address: "Matice Hrvatske 22, Split", phone: "+385 95 815 4783" },
  { name: "Jako d.o.o.", address: "Bajani 65, Kijevo", phone: "097 746 5317" },
  { name: "F-TOURS INTERNATIONAL d.o.o.", address: "Put Supavla 1, Split" },
  { name: "Dječji Vrtić Bili Tići", address: "Poljička cesta 20b, Split", phone: "099 52 99 777" },
];

const JosipoveStanice = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Josipove Stanice
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Projekt koji povezuje zajednicu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Josipove Stanice su projekt u kojem tvrtke, roditelji i udruge zajedno grade bolji svijet za osobe s intelektualnim poteškoćama.
            </p>
            <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border/50" style={{ boxShadow: "var(--shadow-card)" }}>
              <iframe
                src="https://www.youtube.com/embed/RAg-YKtqWM4"
                title="Josipove Stanice - Infografika"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Partneri</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Tvrtke koje podržavaju projekt
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="font-heading font-bold text-foreground mb-1">{sponsor.name}</h3>
                <p className="text-xs text-muted-foreground">{sponsor.address}</p>
                {sponsor.phone && (
                  <a href={`tel:${sponsor.phone.replace(/\s/g, "")}`} className="text-xs text-primary hover:underline mt-1 block">
                    {sponsor.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Želite podržati projekt?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Pridružite se kao sponzor, roditelj ili volonter i pomozite nam širiti priče koje mijenjaju živote.
            </p>
            <Link
              to="/doniraj"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Heart size={18} />
              Podržite nas
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default JosipoveStanice;
