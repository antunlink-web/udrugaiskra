import {
  Drama,
  Languages,
  Music,
  Dumbbell,
  Sparkles,
  Compass,
  Heart,
  BookOpen,
  Theater,
  Mic,
  Guitar,
  ChefHat,
  Sprout,
  Flower2,
  Shovel,
  type LucideIcon,
} from "lucide-react";

export type WorkshopCategory = "redovne" | "kazaliste" | "eden";

export interface YearlyPlanEntry {
  date: string;
  title: string;
  activities: string[];
  goal?: string;
}

export interface WorkshopNewsItem {
  date: string;
  title: string;
  excerpt: string;
  href?: string;
  image?: string;
}

export interface WorkshopMedia {
  type: "image" | "video";
  src: string;
  thumb?: string;
  caption?: string;
  alt?: string;
  order?: number;
}

export interface Workshop {
  slug: string;
  title: string;
  category: WorkshopCategory;
  icon: LucideIcon;
  /** Category-themed gradient class used for card & hero when no photo exists */
  accent: string;
  shortDescription: string;
  /** Optional longer body; empty array => placeholder message rendered */
  description: string[];
  goal?: string;
  leader?: string;
  location?: string;
  schedule?: string;
  days?: string;
  time?: string;
  /** Optional photos — cards fall back to the themed accent when empty */
  images: string[];
  yearlyPlan: YearlyPlanEntry[];
  news: WorkshopNewsItem[];
  media: WorkshopMedia[];
}

const DEFAULT_LOCATION = "Put Iza Nove Bolnice 10c, 21000 Split";
const DEFAULT_SCHEDULE = "Tijekom cijele školske godine (rujan – lipanj)";

const ACCENTS = {
  drama: "from-rose-400/25 via-primary/15 to-cta/20",
  jezik: "from-sky-400/25 via-primary/15 to-primary/20",
  glazba: "from-violet-400/25 via-primary/15 to-cta/20",
  tijelo: "from-emerald-400/25 via-primary/15 to-primary/20",
  ljepota: "from-pink-400/25 via-cta/15 to-primary/20",
  istrazivanje: "from-amber-400/25 via-cta/20 to-primary/20",
  duhovnost: "from-indigo-400/25 via-primary/20 to-cta/20",
  scena: "from-fuchsia-400/25 via-primary/15 to-cta/25",
  eden: "from-lime-400/25 via-emerald-400/20 to-primary/20",
};

/** Drama yearly plan – preserved verbatim from the association's PLAN_RADA document. */
const dramaYearlyPlan: YearlyPlanEntry[] = [
  {
    date: "14.12.2022.",
    title: "Mimika lica – vježbe mimike i pokreta tijelom",
    activities: [
      "Mimika lica – prikazivanje osjeta vida, mirisa, ukusa, sluha i dodira",
      "Uvježbavanje igrokaza",
    ],
    goal: "Kontrola mimike lica, emocija i pokreta tijela.",
  },
  {
    date: "21.12.2022.",
    title: "Geste, pokreti tijela i neverbalna komunikacija",
    activities: [
      "Ponavljanje prethodnih vježbi s novim motivima (mačić, avion, ruže, grom…)",
      "Uvježbavanje igrokaza",
    ],
    goal: "Kontrola mimike lica, emocija i pokreta tijela.",
  },
  {
    date: "04.01.2023.",
    title: "„Moja je, tvoja je!“ i „Vidim ali šutim“",
    activities: [
      "Mimikom i gestom pokazati što želimo, a što ne",
      "Igra opažanja s predmetom u prostoriji",
    ],
    goal: "Kontrola mimike, koncentracija i suradnja.",
  },
  {
    date: "11.01.2023.",
    title: "Rukovanje nevidljivim predmetom",
    activities: [
      "Predaja zamišljenog predmeta u krugu",
      "Prilagodba pokreta veličini i težini predmeta",
    ],
    goal: "Koncentracija, suradnja i pravilno postavljanje ruku.",
  },
  {
    date: "18.01.2023.",
    title: "Ritam i koordinacija – „Red od pet“ i „Kiša“",
    activities: [
      "Stvaranje ritma pokretom i zvukom u krugu",
      "Zajedničko usklađivanje ritmičkih obrazaca",
    ],
    goal: "Kreativnost, slušanje drugoga i razvijanje osjećaja za ritam.",
  },
  {
    date: "25.01.2023.",
    title: "„Orkestar i dirigenti“ i ekipni ritmički dijalog",
    activities: [
      "Sudionici kao instrumenti pod ravnanjem dirigenta",
      "Dijalog dviju grupa kroz ritam i pokret",
    ],
    goal: "Koncentracija, međusobna komunikacija i osjećaj za ritam.",
  },
  {
    date: "01.02.2023.",
    title: "Smjenjivanje maski i zajedničko stvaranje",
    activities: [
      "Oponašanje osobitog pokreta sudionika kojemu voditelj prozove ime",
      "Uvođenje novih pokreta tijekom zajedničkog hoda",
    ],
    goal: "Koncentracija, kontrola pokreta i međusobna komunikacija.",
  },
  {
    date: "08.02.2023.",
    title: "„Ritam – mašina“",
    activities: [
      "Postupno spajanje sudionika u jedinstveni ritmički stroj",
      "Usklađivanje pokreta, brzine i zvuka",
    ],
    goal: "Kreativnost, suradnja i razvijanje osjećaja za ritam.",
  },
  {
    date: "15.02.2023.",
    title: "Ponavljanje ritmičkih vježbi",
    activities: ["Ponavljanje najuspjelijih vježbi iz prethodnih susreta"],
    goal: "Utvrđivanje naučenih vještina.",
  },
  {
    date: "22.02.2023.",
    title: "Ponavljanje ritmičkih vježbi",
    activities: ["Ponavljanje odabranih vježbi po želji grupe"],
    goal: "Utvrđivanje naučenih vještina.",
  },
  {
    date: "01.03.2023.",
    title: "„Kipar“ i „Kipar ne dodiruje model“",
    activities: [
      "Oblikovanje kipa u paru",
      "Prijenos pokreta pantomimom bez dodira",
    ],
    goal: "Koncentracija, suradnja i prepuštanje partneru.",
  },
  {
    date: "08.03.2023.",
    title: "„Ogledalo“",
    activities: [
      "Rad u parovima – jedan sudionik je odraz drugoga",
      "Pogađanje tko je „ogledalo“, a tko originalni pokret",
    ],
    goal: "Koncentracija, pažljivo oponašanje i suradnja.",
  },
  {
    date: "15.03.2023.",
    title: "Hodanje po različitim podlogama i „Dovrši sliku“",
    activities: [
      "Hodanje kroz snijeg, led, kišu, po deblu…",
      "Zamrznute slike u paru s ubacivanjem novih likova",
    ],
    goal: "Uživljavanje u zamišljenu situaciju i preuzimanje uloge.",
  },
  {
    date: "22.03.2023.",
    title: "Ponavljanje vježbi imitacije i suradnje",
    activities: ["Ponavljanje najuspjelijih vježbi iz prethodnih susreta"],
    goal: "Utvrđivanje kontrole pokreta i suradnje.",
  },
  {
    date: "29.03.2023.",
    title: "Ponavljanje vježbi imitacije i suradnje",
    activities: ["Ponavljanje odabranih vježbi po želji grupe"],
    goal: "Utvrđivanje kontrole pokreta i suradnje.",
  },
  {
    date: "05.04.2023.",
    title: "„Koliko a ima u a“ i „Hajde, reci kako si“",
    activities: [
      "Igra s glasom „a“ različitim intonacijama i emocijama",
      "Verbalno opisivanje vlastitih stanja i osjećaja",
    ],
    goal: "Razvijanje emocionalne inteligencije i verbalizacije osjećaja.",
  },
  {
    date: "12.04.2023.",
    title: "„Besmislena rečenica“ i „Handy hand“",
    activities: [
      "Izgovaranje iste rečenice različitim emocijama",
      "Rukovanje na razne načine (nježno, ljutito, uplašeno…)",
    ],
    goal: "Razumijevanje odnosa riječi i emocije.",
  },
  {
    date: "19.04.2023.",
    title: "„Lančana priča“ i „Nastavi priču“",
    activities: [
      "Stvaranje zajedničke priče riječ po riječ",
      "Prepričavanje priče koju započinje voditelj",
    ],
    goal: "Razvijanje govornog izražavanja, mašte i bogaćenje rječnika.",
  },
  {
    date: "26.04.2023.",
    title: "„Završi priču“",
    activities: [
      "Sudionici završavaju priču koju započne voditelj",
      "Rad na zadanom naslovu ili posljednjoj rečenici",
    ],
    goal: "Poticanje kreativnog izražavanja i koncentracije.",
  },
  {
    date: "03.05.2023.",
    title: "Improvizacija i „Predmet govori“",
    activities: [
      "Improvizirane scene u parovima na zadanu situaciju",
      "Priča u prvom licu iz perspektive predmeta",
    ],
    goal: "Razvijanje mašte, govornog izražavanja i suradnje.",
  },
  {
    date: "10.05.2023.",
    title: "„Što je u vrećici“ i „Što je drukčije“",
    activities: [
      "Opipavanje i opisivanje skrivenog predmeta",
      "Uočavanje sitnih promjena na partneru",
    ],
    goal: "Razvijanje opažanja, koncentracije i strpljivosti.",
  },
  {
    date: "17.05.2023.",
    title: "„Brojanje“ i „Prepoznati ah“",
    activities: [
      "Naizmjenično brojanje bez preklapanja",
      "Prepoznavanje sudionika po glasu s zatvorenim očima",
    ],
    goal: "Razvijanje sluha, koncentracije i strpljivosti.",
  },
  {
    date: "24.05. – 31.05.2023.",
    title: "Najzanimljivije vježbe",
    activities: ["Ponavljanje vježbi koje su grupi bile najzanimljivije"],
    goal: "Zaokruživanje ciklusa i priprema završnih nastupa.",
  },
];

export const workshops: Workshop[] = [
  // ── Redovne radionice ─────────────────────────────────────────────────
  {
    slug: "dramske-igre-i-vjezbe",
    title: "Dramske igre i vježbe",
    category: "redovne",
    icon: Drama,
    accent: ACCENTS.drama,
    shortDescription:
      "Kroz mimiku, pokret i improvizaciju otkrivamo snagu scenskog izraza.",
    description: [
      "Dramska radionica prostor je u kojem sudionici otkrivaju vlastiti glas kroz igru, gestu i riječ.",
      "Vježbe obuhvaćaju rad na koncentraciji, ritmu, mašti i suradnji, a rezultat je zajedničko scensko iskustvo koje jača samopouzdanje.",
    ],
    goal: "Jačanje samopouzdanja, pamćenja i timskog rada kroz scenski izraz.",
    leader: "Željana Lažeta",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Srijedom",
    time: "11:00 – 13:00",
    images: [],
    yearlyPlan: dramaYearlyPlan,
    news: [],
    media: [],
  },
  {
    slug: "engleski-jezik",
    title: "Radionica engleskog jezika",
    category: "redovne",
    icon: Languages,
    accent: ACCENTS.jezik,
    shortDescription: "Učenje engleskog kroz igru, pjesmu i svakodnevne situacije.",
    description: [],
    leader: "Ana Periš",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "glazbena-radionica",
    title: "Glazbena radionica",
    category: "redovne",
    icon: Music,
    accent: ACCENTS.glazba,
    shortDescription: "Pjevanje, ritam i zajedničko muziciranje.",
    description: [],
    leader: "Sandra Sunko",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "tjelesna-cetvrtak",
    title: "Tjelesna radionica (četvrtak)",
    category: "redovne",
    icon: Dumbbell,
    accent: ACCENTS.tijelo,
    shortDescription: "Vježbe pokreta, koordinacije i opće kondicije.",
    description: [],
    leader: "Marija Stamaković",
    days: "Četvrtkom",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "tjelesna-ponedjeljak",
    title: "Tjelesna radionica (ponedjeljak)",
    category: "redovne",
    icon: Dumbbell,
    accent: ACCENTS.tijelo,
    shortDescription: "Tjelovježba prilagođena sposobnostima svakog sudionika.",
    description: [],
    leader: "Gabriela",
    days: "Ponedjeljkom",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "talijanski-jezik",
    title: "Radionica talijanskog jezika",
    category: "redovne",
    icon: Languages,
    accent: ACCENTS.jezik,
    shortDescription: "Osnove talijanskog jezika kroz pjesmu, film i razgovor.",
    description: [],
    leader: "Kristina Marušić",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "sminkanje-i-njega-lica",
    title: "Radionica šminkanja i njege lica",
    category: "redovne",
    icon: Sparkles,
    accent: ACCENTS.ljepota,
    shortDescription: "Briga o sebi, njega kože i osnove šminkanja.",
    description: [],
    leader: "Marija Bonačić",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "posebni-istrazivaci",
    title: "Posebni istraživači",
    category: "redovne",
    icon: Compass,
    accent: ACCENTS.istrazivanje,
    shortDescription: "Otkrivanje svijeta oko nas kroz istraživačke aktivnosti.",
    description: [],
    leader: "Tamara Podrug",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "izrada-krunica",
    title: "Radionica izrade krunica",
    category: "redovne",
    icon: Heart,
    accent: ACCENTS.duhovnost,
    shortDescription: "Duhovna radionica izrade krunica u mirnom ozračju.",
    description: [],
    leader: "Lidija Radalj",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "mali-bend-iskra-svjetlosti",
    title: "Glazbena radionica – Mali bend Iskra Svjetlosti",
    category: "redovne",
    icon: Guitar,
    accent: ACCENTS.glazba,
    shortDescription: "Zajedničko sviranje i pripreme nastupa Malog benda.",
    description: [],
    leader: "Boris Blažević",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "biblijska-didaktika",
    title: "Biblijska didaktika",
    category: "redovne",
    icon: BookOpen,
    accent: ACCENTS.duhovnost,
    shortDescription: "Upoznavanje biblijskih tema kroz igru i razgovor.",
    description: [],
    leader: "Daniela Raić, Željana Lažeta i Tamara Podrug",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "mjuzikl-klupko",
    title: "Mjuzikl „Klupko“",
    category: "redovne",
    icon: Theater,
    accent: ACCENTS.scena,
    shortDescription: "Zajednički rad na autorskom mjuziklu „Klupko“.",
    description: [],
    leader: "Željana Lažeta, Sandra Sunko i Daniela Raić",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "igrokaz-iskra-svjetlosti",
    title: "Igrokaz Iskra Svjetlosti",
    category: "redovne",
    icon: Drama,
    accent: ACCENTS.scena,
    shortDescription: "Priprema i uvježbavanje igrokaza udruge.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "hrvatski-jezik-i-govorna-kultura",
    title: "Radionica hrvatskog jezika i govorne kulture",
    category: "redovne",
    icon: BookOpen,
    accent: ACCENTS.jezik,
    shortDescription: "Njegovanje pravilnog govora i bogatstva materinskog jezika.",
    description: [],
    leader: "prof. Nada Babić",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "vokalne-tehnike",
    title: "Glazbena radionica – vokalne tehnike",
    category: "redovne",
    icon: Mic,
    accent: ACCENTS.glazba,
    shortDescription: "Rad na disanju, intonaciji i pjevačkim tehnikama.",
    description: [],
    leader: "Sandra Sunko",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },

  // ── Kazališne predstave Udruge Iskra Svjetlosti ───────────────────────
  {
    slug: "predstava-7-darova-duha-svetoga",
    title: "7 darova Duha Svetoga",
    category: "kazaliste",
    icon: Theater,
    accent: ACCENTS.scena,
    shortDescription:
      "Autorska predstava izvedena u brojnim gradovima Hrvatske i BiH.",
    description: [
      "Predstava „7 darova Duha Svetoga“ krunski je scenski projekt udruge.",
      "Kroz sedam prizora sudionici predstavljaju darove mudrosti, razuma, savjeta, jakosti, znanja, pobožnosti i straha Božjeg.",
    ],
    goal: "Prenošenje duhovne poruke i afirmacija sposobnosti osoba s intelektualnim poteškoćama na sceni.",
    leader: "Željana Lažeta",
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "predstava-biraj",
    title: "Biraj",
    category: "kazaliste",
    icon: Theater,
    accent: ACCENTS.scena,
    shortDescription: "Nova autorska predstava Udruge Iskra Svjetlosti.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },

  // ── EDEN radionice ────────────────────────────────────────────────────
  {
    slug: "eden-kuhanje",
    title: "Radionica kuhanja",
    category: "eden",
    icon: ChefHat,
    accent: ACCENTS.eden,
    shortDescription: "Zajedničko pripremanje jednostavnih i zdravih obroka.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "eden-vrtlarenje",
    title: "Radionica vrtlarenja",
    category: "eden",
    icon: Sprout,
    accent: ACCENTS.eden,
    shortDescription: "Briga o vrtu udruge kroz cijelu vegetacijsku sezonu.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "eden-pikiranje",
    title: "Radionica pikiranja",
    category: "eden",
    icon: Flower2,
    accent: ACCENTS.eden,
    shortDescription: "Pikiranje sadnica i priprema biljaka za daljnji rast.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
  {
    slug: "eden-sadnja",
    title: "Radionica sadnje",
    category: "eden",
    icon: Shovel,
    accent: ACCENTS.eden,
    shortDescription: "Sadnja povrća, začinskog i ukrasnog bilja u vrtu udruge.",
    description: [],
    images: [],
    yearlyPlan: [],
    news: [],
    media: [],
  },
];

export const workshopCategoryMeta: Record<
  WorkshopCategory,
  { title: string; description: string }
> = {
  redovne: {
    title: "Redovne radionice",
    description:
      "Redovite tjedne radionice u kojima naši sudionici razvijaju vještine i grade prijateljstva.",
  },
  kazaliste: {
    title: "Kazališne predstave Udruge Iskra Svjetlosti",
    description:
      "Autorske predstave koje nastaju u sklopu naših dramskih i glazbenih programa.",
  },
  eden: {
    title: "EDEN radionice",
    description:
      "Programi u vrtu udruge koji potiču odgovornost, strpljenje i povezanost s prirodom.",
  },
};

export const PLACEHOLDER = {
  description: "Detaljan opis radionice bit će uskoro objavljen.",
  yearlyPlan:
    "Godišnji plan rada bit će objavljen nakon potvrde voditelja radionice.",
  schedule: "Termin i lokacija bit će uskoro objavljeni.",
  gallery: "Fotografije i videozapisi bit će dodani nakon održanih aktivnosti.",
  news: "Trenutačno nema objavljenih novosti za ovu radionicu.",
} as const;

export const getWorkshopBySlug = (slug: string): Workshop | undefined =>
  workshops.find((w) => w.slug === slug);

export const getWorkshopsByCategory = (category: WorkshopCategory): Workshop[] =>
  workshops.filter((w) => w.category === category);
