import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  FileText,
  Images,
  Newspaper,
  Users,
} from "lucide-react";

type ModuleKey =
  | "novosti"
  | "dogadjaji"
  | "stranice"
  | "mediji"
  | "korisnici";

type ModulePageProps = {
  module: ModuleKey;
};

const modules: Record<
  ModuleKey,
  {
    title: string;
    description: string;
    icon: LucideIcon;
  }
> = {
  novosti: {
    title: "Novosti",
    description:
      "Pregled, izrada i uređivanje objava udruge.",
    icon: Newspaper,
  },
  dogadjaji: {
    title: "Događaji",
    description:
      "Upravljanje radionicama, susretima i terminima.",
    icon: CalendarDays,
  },
  stranice: {
    title: "Stranice",
    description:
      "Uređivanje sadržaja glavnih stranica web sjedišta.",
    icon: FileText,
  },
  mediji: {
    title: "Mediji",
    description:
      "Fotografije, dokumenti i ostali privici.",
    icon: Images,
  },
  korisnici: {
    title: "Korisnici",
    description:
      "Uloge, korisnički računi i dopuštenja.",
    icon: Users,
  },
};

export default function CmsModulePage({
  module,
}: ModulePageProps) {
  const item = modules[module];
  const Icon = item.icon;

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border bg-white p-7 shadow-sm sm:p-9">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold">
          {item.title}
        </h2>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
          {item.description}
        </p>
      </section>

      <section className="rounded-[2rem] border border-dashed bg-white/70 p-8 text-center">
        <p className="font-bold">
          Modul je povezan s CMS navigacijom.
        </p>

        <p className="mt-2 text-muted-foreground">
          U sljedećem koraku povezujemo stvarne API podatke,
          tablice i obrasce za uređivanje.
        </p>
      </section>
    </div>
  );
}
