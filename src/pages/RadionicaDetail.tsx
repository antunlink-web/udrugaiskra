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
import {
  getWorkshopBySlug,
  workshopCategoryMeta,
  PLACEHOLDER,
} from "@/data/workshops";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-2xl font-extrabold text-ink mb-4">
    {children}
  </h2>
);

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl bg-soft border border-border/60 p-5 text-sm text-muted-foreground">
    {children}
  </div>
);

const RadionicaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const workshop = slug ? getWorkshopBySlug(slug) : undefined;

  if (!workshop) {
    return (
      <PageLayout>
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink mb-3">
              Radionica nije pronađena
            </h1>
            <p className="text-muted-foreground mb-6">
              Poveznica koju ste otvorili više nije dostupna ili je došlo do
              pogreške u adresi.
            </p>
            <Link
              to="/radionice"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft size={16} /> Sve radionice
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const Icon = workshop.icon;

  const scheduleRows = [
    workshop.location && { icon: MapPin, label: "Lokacija", value: workshop.location },
    workshop.schedule && {
      icon: CalendarRange,
      label: "Godišnji raspored",
      value: workshop.schedule,
    },
    workshop.days && { icon: CalendarDays, label: "Dan održavanja", value: workshop.days },
    workshop.time && { icon: Clock, label: "Vrijeme", value: workshop.time },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  return (
    <PageLayout>
      {/* 1. Naziv + 2. Kratki uvod */}
      <section className={`py-12 md:py-16 bg-gradient-to-br ${workshop.accent}`}>
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
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-cta flex items-center justify-center shrink-0 shadow-md">
              <Icon className="text-cta-foreground" size={30} />
            </div>
            <div className="min-w-0">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                {workshopCategoryMeta[workshop.category].title}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-ink leading-tight break-words">
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
            {/* 3. O radionici */}
            <div>
              <SectionTitle>O radionici</SectionTitle>
              {workshop.description.length > 0 ? (
                <div className="space-y-3 text-foreground/80 leading-relaxed">
                  {workshop.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : (
                <Placeholder>{PLACEHOLDER.description}</Placeholder>
              )}
            </div>

            {/* 4. Cilj radionice */}
            {workshop.goal && (
              <div>
                <SectionTitle>Cilj radionice</SectionTitle>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-cta/10 border border-cta/30">
                  <Target className="text-cta-foreground/80 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-semibold text-ink leading-relaxed">
                    {workshop.goal}
                  </p>
                </div>
              </div>
            )}

            {/* 5. Voditelj radionice */}
            {workshop.leader && (
              <div>
                <SectionTitle>Voditelj radionice</SectionTitle>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-soft">
                  <User className="text-primary mt-0.5 shrink-0" size={18} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                      Voditelj
                    </div>
                    <div className="text-sm font-semibold text-ink break-words">
                      {workshop.leader}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Raspored */}
            <div>
              <SectionTitle>Raspored</SectionTitle>
              {scheduleRows.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {scheduleRows.map((d) => (
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
              ) : (
                <Placeholder>{PLACEHOLDER.schedule}</Placeholder>
              )}
            </div>

            {/* 7. Godišnji plan rada */}
            <div>
              <SectionTitle>Godišnji plan rada</SectionTitle>
              {workshop.yearlyPlan.length > 0 ? (
                <WorkshopYearlyPlan entries={workshop.yearlyPlan} />
              ) : (
                <Placeholder>{PLACEHOLDER.yearlyPlan}</Placeholder>
              )}
            </div>

            {/* 8. Novosti i događanja */}
            <div>
              <SectionTitle>Novosti i događanja</SectionTitle>
              {workshop.news.length > 0 ? (
                <WorkshopNews items={workshop.news} />
              ) : (
                <Placeholder>{PLACEHOLDER.news}</Placeholder>
              )}
            </div>

            {/* 9. Video i fotogalerija */}
            <div>
              <SectionTitle>Video i fotogalerija</SectionTitle>
              {workshop.media.length > 0 ? (
                <WorkshopGallery media={workshop.media} title={workshop.title} />
              ) : (
                <Placeholder>{PLACEHOLDER.gallery}</Placeholder>
              )}
            </div>

            {/* 10. Prijava – mobile only (full width, near the end) */}
            <div className="lg:hidden">
              <SectionTitle>Prijava na radionicu</SectionTitle>
              <div
                className="bg-card rounded-3xl p-6 border border-border/70"
                style={{ boxShadow: "var(--shadow-float)" }}
              >
                <p className="text-sm text-muted-foreground mb-5">
                  Ispunite obrazac i kontaktirat ćemo vas radi dogovora o
                  sudjelovanju.
                </p>
                <WorkshopRegistrationForm
                  workshopSlug={workshop.slug}
                  workshopTitle={workshop.title}
                />
              </div>
            </div>
          </div>

          {/* 10. Prijava – desktop sticky sidebar */}
          <aside className="hidden lg:block">
            <div
              className="sticky top-28 bg-card rounded-3xl p-6 md:p-7 border border-border/70"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <h2 className="font-heading text-xl font-extrabold text-ink mb-1">
                Prijava na radionicu
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Ispunite obrazac i kontaktirat ćemo vas radi dogovora o
                sudjelovanju.
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
