import {
  CalendarDays,
  FileText,
  Images,
  Newspaper,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCmsAuth } from "./AuthContext";
import {
  hasCmsPermission,
  isAdministrator,
} from "./types";

export default function CmsDashboard() {
  const { user } = useCmsAuth();

  if (!user) {
    return null;
  }

  const cards = [
    {
      title: "Novosti",
      text: "Objave, priče i aktivnosti udruge.",
      path: "/iskra/novosti",
      icon: Newspaper,
      visible: hasCmsPermission(
        user,
        "articles.view",
      ),
    },
    {
      title: "Događaji",
      text: "Radionice, susreti i termini.",
      path: "/iskra/dogadjaji",
      icon: CalendarDays,
      visible: hasCmsPermission(
        user,
        "events.view",
      ),
    },
    {
      title: "Stranice",
      text: "Uredite sadržaj glavnih stranica.",
      path: "/iskra/stranice",
      icon: FileText,
      visible:
        user.role === "editor" ||
        isAdministrator(user),
    },
    {
      title: "Mediji",
      text: "Fotografije, dokumenti i privici.",
      path: "/iskra/mediji",
      icon: Images,
      visible: hasCmsPermission(
        user,
        "media.view",
      ),
    },
    {
      title: "Korisnici",
      text: "Pristupi, uloge i dopuštenja.",
      path: "/iskra/korisnici",
      icon: Users,
      visible: isAdministrator(user),
    },
  ].filter((card) => card.visible);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-primary px-7 py-9 text-primary-foreground shadow-lg sm:px-10">
        <Sparkles className="h-8 w-8" />

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] opacity-70">
          Dobro došli
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Pozdrav, {user.firstName}.
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 opacity-80">
          Odaberite područje koje želite uređivati.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-extrabold">
          Sadržaj web stranice
        </h3>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.path}
                to={card.path}
                className="group rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="mt-5 text-xl font-extrabold group-hover:text-primary">
                  {card.title}
                </h4>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {card.text}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
