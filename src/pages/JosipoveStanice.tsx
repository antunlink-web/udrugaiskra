import { motion } from "framer-motion";
import { Users, Building2, Heart, Handshake, BookOpen, MessageCircle, Globe, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Roditelji",
    description: "Prvi roditeljski portal na kojem dijelimo priče i iskustva života s osobama s intelektualnim teškoćama odrasle dobi. Podijelite s nama svoju priču i zajedno podignimo svijest.",
    cta: { label: "Roditelj ste? Javite nam se", to: "/#contact" },
  },
  {
    icon: Heart,
    title: "Iskra Svjetlosti",
    description: "Udruga osnovana 2016. godine okuplja osobe s intelektualnim teškoćama odrasle dobi (stariji od 21 godinu). Podržite projekt u kojem tvrtke omogućuju roditeljima djece da ispričaju priču, a mi podijelimo s drugima.",
    cta: { label: "Pridružite nam se", to: "/#contact" },
  },
  {
    icon: Building2,
    title: "Firme",
    description: "Svaka tvrtka u RH može donirati do 5% ukupnih prihoda ostvarenih u prošloj godini humanitarnoj organizaciji neoporezivo.",
    cta: { label: "Postanite tvrtka donator", to: "/doniraj" },
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

type SponsorLink = { type: "web" | "facebook" | "instagram" | "email"; href: string };
type Sponsor = {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  links?: SponsorLink[];
};

const sponsors: Sponsor[] = [
  {
    name: "Motus Natura",
    address: "Krležina 14, Split",
    phone: "097 746 5317",
    links: [{ type: "instagram", href: "https://www.instagram.com/motusnatura/" }],
  },
  { name: "Pasta Laura d.o.o.", address: "Radunica 39, Split" },
  {
    name: "Porticus d.o.o.",
    address: "Matice Hrvatske 22, Split",
    phone: "+385 95 815 4783",
    email: "porticus@st.t-com.hr",
    links: [
      { type: "web", href: "https://www.porticus.com.hr/" },
      { type: "facebook", href: "https://www.facebook.com/damir.rako.5" },
    ],
  },
  {
    name: "Jako d.o.o.",
    address: "Bajani 65, Kijevo",
    phone: "097 746 5317",
    links: [
      { type: "web", href: "https://jako.hr/" },
      { type: "facebook", href: "https://www.facebook.com/JakoHrvatska/" },
      { type: "instagram", href: "https://www.instagram.com/jakohrvatska/" },
    ],
  },
  {
    name: "F-TOURS INTERNATIONAL d.o.o.",
    address: "Put Supavla 1, Split",
    links: [
      { type: "web", href: "https://f-tours.hr/" },
      { type: "facebook", href: "https://www.facebook.com/ftours/" },
      { type: "instagram", href: "https://www.instagram.com/ftours_split/" },
    ],
  },
  {
    name: "Dječji Vrtić Bili Tići",
    address: "Poljička cesta 20b, Split",
    phone: "099 52 99 777",
    email: "info@dv-bilitici.com",
  },
];

const linkIcon = (type: SponsorLink["type"]) => {
  switch (type) {
    case "web": return Globe;
    case "facebook": return Facebook;
    case "instagram": return Instagram;
    case "email": return Mail;
  }
};

const JosipoveStanice = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-sky-fade py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/15 blob-shape blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Josipove Stanice
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary mb-6 leading-tight">
              Projekt koji povezuje zajednicu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Tvrtke, roditelji i udruge zajedno gradimo bolji svijet za osobe s intelektualnim
              poteškoćama.
            </p>
            <div className="aspect-video max-w-3xl mx-auto rounded-[2rem] overflow-hidden border border-border/60" style={{ boxShadow: "var(--shadow-soft)" }}>
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
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight">
              Kako radimo zajedno
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-3xl p-8 border border-border/60 transition-shadow hover:shadow-xl"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                  <feature.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                {"cta" in feature && feature.cta && (
                  <Link
                    to={feature.cta.to}
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-secondary hover:text-primary transition-colors"
                  >
                    {feature.cta.label}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories teaser */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-[2rem] border border-border/60 bg-card p-8 md:p-12 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">Priče</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-3">Priče naših donatora</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-6">
              Pogledajte istinite priče, intervjue i poduzetnički kutak - kako tvrtke i ljudi mijenjaju živote.
            </p>
            <Link to="/novosti" className="btn-donate px-6 py-3 text-sm">
              Posjeti Blog
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 md:py-28 bg-sky-fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Partneri</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight">
              Tvrtke koje podržavaju projekt
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
              Hvala svim sponzorima koji omogućuju da Josipove Stanice nastave rasti.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-card rounded-3xl p-6 border border-border/60 flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="font-heading font-semibold text-primary text-lg mb-3">{sponsor.name}</h3>
                <div className="space-y-1.5 text-sm text-muted-foreground flex-1">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-secondary mt-0.5 shrink-0" />
                    <span>{sponsor.address}</span>
                  </p>
                  {sponsor.phone && (
                    <a href={`tel:${sponsor.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={14} className="text-secondary shrink-0" />
                      {sponsor.phone}
                    </a>
                  )}
                  {sponsor.email && (
                    <a href={`mailto:${sponsor.email}`} className="flex items-center gap-2 hover:text-primary transition-colors break-all">
                      <Mail size={14} className="text-secondary shrink-0" />
                      <span className="truncate">{sponsor.email}</span>
                    </a>
                  )}
                </div>
                {sponsor.links && sponsor.links.length > 0 && (
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/60">
                    {sponsor.links.map((l) => {
                      const Icon = linkIcon(l.type);
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={l.type}
                          className="w-9 h-9 rounded-full bg-accent text-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Icon size={15} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-ocean rounded-[2rem] p-10 md:p-14 text-primary-foreground relative overflow-hidden"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cta/20 blob-shape blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Želite podržati projekt?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Pridružite se kao sponzor, roditelj ili volonter i pomozite nam širiti priče koje mijenjaju živote.
              </p>
              <Link to="/doniraj" className="btn-donate px-8 py-4">
                <Heart size={18} className="fill-current" />
                Podržite nas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default JosipoveStanice;
