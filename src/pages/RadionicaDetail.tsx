import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  CalendarDays,
  CalendarRange,
  User,
  Target,
  BookOpen,
  Newspaper,
  Images,
  UserPlus,
  ListChecks,
  ChevronDown,
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

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl bg-soft border border-border/60 p-5 text-sm text-muted-foreground">
    {children}
  </div>
);

type SectionKey =
  | "about"
  | "goal"
  | "leader"
  | "schedule"
  | "plan"
  | "news"
  | "gallery"
  | "register";

const RadionicaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const workshop = slug ? getWorkshopBySlug(slug) : undefined;
  const [openKey, setOpenKey] = useState<SectionKey | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (openKey && refs.current[openKey]) {
      const el = refs.current[openKey]!;
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [openKey]);

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
    workshop.schedule && { icon: CalendarRange, label: "Godišnji raspored", value: workshop.schedule },
    workshop.days && { icon: CalendarDays, label: "Dan održavanja", value: workshop.days },
    workshop.time && { icon: Clock, label: "Vrijeme", value: workshop.time },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  const sections: {
    key: SectionKey;
    title: string;
    summary?: string;
    icon: typeof BookOpen;
    render: () => React.ReactNode;
  }[] = [
    {
      key: "about",
      title: "O radionici",
      summary: workshop.shortDescription,
      icon: BookOpen,
      render: () =>
        workshop.description.length > 0 ? (
          <div className="space-y-3 text-foreground/80 leading-relaxed">
            {workshop.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        ) : (
          <Placeholder>{PLACEHOLDER.description}</Placeholder>
        ),
    },
    {
      key: "goal",
      title: "Cilj radionice",
      icon: Target,
      render: () =>
        workshop.goal ? (
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-cta/10 border border-cta/30">
            <Target className="text-cta-foreground/80 mt-0.5 shrink-0" size={18} />
            <p className="text-sm font-semibold text-ink leading-relaxed">{workshop.goal}</p>
          </div>
        ) : (
          <Placeholder>Cilj radionice uskoro će biti objavljen.</Placeholder>
        ),
    },
    {
      key: "leader",
      title: "Voditelj radionice",
      summary: workshop.leader,
      icon: User,
      render: () =>
        workshop.leader ? (
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-soft">
            <User className="text-primary mt-0.5 shrink-0" size={18} />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Voditelj</div>
              <div className="text-sm font-semibold text-ink break-words">{workshop.leader}</div>
            </div>
          </div>
        ) : (
          <Placeholder>Informacije o voditelju uskoro će biti objavljene.</Placeholder>
        ),
    },
    {
      key: "schedule",
      title: "Raspored",
      summary: workshop.days || workshop.time,
      icon: CalendarDays,
      render: () =>
        scheduleRows.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {scheduleRows.map((d) => (
              <div key={d.label} className="flex items-start gap-3 p-4 rounded-2xl bg-soft">
                <d.icon className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">{d.label}</div>
                  <div className="text-sm font-semibold text-ink">{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Placeholder>{PLACEHOLDER.schedule}</Placeholder>
        ),
    },
    {
      key: "plan",
      title: "Godišnji plan rada",
      summary: workshop.yearlyPlan.length > 0 ? `${workshop.yearlyPlan.length} susreta` : undefined,
      icon: ListChecks,
      render: () =>
        workshop.yearlyPlan.length > 0 ? (
          <WorkshopYearlyPlan entries={workshop.yearlyPlan} />
        ) : (
          <Placeholder>{PLACEHOLDER.yearlyPlan}</Placeholder>
        ),
    },
    {
      key: "news",
      title: "Novosti i događanja",
      icon: Newspaper,
      render: () =>
        workshop.news.length > 0 ? (
          <WorkshopNews items={workshop.news} />
        ) : (
          <Placeholder>{PLACEHOLDER.news}</Placeholder>
        ),
    },
    {
      key: "gallery",
      title: "Video i fotogalerija",
      summary: workshop.media.length > 0 ? `${workshop.media.length} zapisa` : undefined,
      icon: Images,
      render: () =>
        workshop.media.length > 0 ? (
          <WorkshopGallery media={workshop.media} title={workshop.title} />
        ) : (
          <Placeholder>{PLACEHOLDER.gallery}</Placeholder>
        ),
    },
    {
      key: "register",
      title: "Prijava na radionicu",
      summary: "Ispunite obrazac i javit ćemo vam se",
      icon: UserPlus,
      render: () => (
        <WorkshopRegistrationForm
          workshopSlug={workshop.slug}
          workshopTitle={workshop.title}
        />
      ),
    },
  ];

  return (
    <PageLayout>
      {/* Hero */}
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
              {workshop.leader && (
                <p className="text-sm text-foreground/70 mt-2">
                  <span className="font-semibold text-ink">Voditelj:</span> {workshop.leader}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section cards */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Odaberite temu koja vas zanima i otvorite je za više informacija.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map((s) => {
              const open = openKey === s.key;
              const SIcon = s.icon;
              return (
                <div
                  key={s.key}
                  ref={(el) => (refs.current[s.key] = el)}
                  className={`sm:col-span-1 ${open ? "sm:col-span-2" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenKey(open ? null : s.key)}
                    aria-expanded={open}
                    aria-controls={`section-${s.key}`}
                    className={`w-full text-left bg-card rounded-3xl border-2 p-5 md:p-6 flex items-start gap-4 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 ${
                      open
                        ? "border-cta shadow-lg"
                        : "border-border/60 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                    style={!open ? { boxShadow: "var(--shadow-card)" } : undefined}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${open ? "bg-cta text-cta-foreground" : "bg-primary/10 text-primary"}`}>
                      <SIcon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-lg md:text-xl font-extrabold text-ink leading-tight">
                        {s.title}
                      </h2>
                      {s.summary && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {s.summary}
                        </p>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground shrink-0 mt-2 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`section-${s.key}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 mt-3 rounded-3xl bg-card border border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
                          {s.render()}
                          <div className="mt-5 pt-4 border-t border-border/60 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setOpenKey(null)}
                              className="text-sm font-semibold text-primary hover:underline"
                            >
                              Zatvori sekciju
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RadionicaDetail;
