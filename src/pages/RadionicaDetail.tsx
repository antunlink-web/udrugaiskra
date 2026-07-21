import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  CalendarDays,
  CalendarRange,
  User,
  Target,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import WorkshopYearlyPlan from "@/components/WorkshopYearlyPlan";
import WorkshopGallery from "@/components/WorkshopGallery";
import WorkshopNews from "@/components/WorkshopNews";
import { getWorkshopBySlug, workshopCategoryMeta } from "@/data/workshops";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-2xl font-extrabold text-ink mb-4">{children}</h2>
);

const RadionicaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const workshop = slug ? getWorkshopBySlug(slug) : undefined;

  if (!workshop) {
    return (
      <PageLayout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-heading font-extrabold text-ink mb-4">
            Radionica nije pronađena
          </h1>
          <Link to="/radionice" className="text-primary font-semibold hover:underline">
            ← Sve radionice
          </Link>
        </div>
      </PageLayout>
    );
  }

  const Icon = workshop.icon;
  const details = [
    { icon: User, label: "Voditelj", value: workshop.leader },
    { icon: MapPin, label: "Lokacija", value: workshop.location },
    { icon: CalendarRange, label: "Godišnji raspored", value: workshop.schedule },
    { icon: CalendarDays, label: "Dan održavanja", value: workshop.days },
    { icon: Clock, label: "Vrijeme", value: workshop.time },
  ];

  return (
    <PageLayout>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/radionice"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6"
          >
            <ArrowLeft size={16} /> Sve radionice
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-cta flex items-center justify-center shrink-0">
              <Icon className="text-cta-foreground" size={30} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                {workshopCategoryMeta[workshop.category].title}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-ink leading-tight">
                {workshop.title}
              </h1>
              <p className="text-base md:text-lg text-foreground/75 mt-2 max-w-2xl">
                {workshop.shortDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="space-y-12">
            {/* Opis + cilj */}
            <div>
              <SectionTitle>Opis radionice</SectionTitle>
              <div className="space-y-3 text-foreground/80 leading-relaxed mb-5">
                {workshop.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-cta/10 border border-cta/30">
                <Target className="text-cta-foreground/80 mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-primary font-bold">
                    Cilj radionice
                  </div>
                  <div className="text-sm font-semibold text-ink">{workshop.goal}</div>
                </div>
              </div>
            </div>

            {/* Info gridina */}
            <div>
              <SectionTitle>Informacije</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-3">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3 p-4 rounded-2xl bg-soft">
                    <d.icon className="text-primary mt-0.5 shrink-0" size={18} />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                        {d.label}
                      </div>
                      <div className="text-sm font-semibold text-ink">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Godišnji plan */}
            <div>
              <SectionTitle>Godišnji plan</SectionTitle>
              <WorkshopYearlyPlan entries={workshop.yearlyPlan} />
            </div>

            {/* Galerija */}
            <div>
              <SectionTitle>Galerija</SectionTitle>
              <WorkshopGallery media={workshop.media} title={workshop.title} />
            </div>

            {/* Novosti */}
            <div>
              <SectionTitle>Novosti</SectionTitle>
              <WorkshopNews items={workshop.news} />
            </div>
          </div>

          {/* Prijava */}
          <aside>
            <div
              className="lg:sticky lg:top-28 bg-card rounded-3xl p-6 md:p-7 border border-border/70"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <h2 className="font-heading text-xl font-extrabold text-ink mb-1">Prijavi se</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Ispunite obrazac i kontaktirat ćemo vas radi dogovora o sudjelovanju.
              </p>
              <WorkshopRegistrationForm
                workshopSlug={workshop.slug}
                workshopTitle={workshop.title}
              />
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default RadionicaDetail;
