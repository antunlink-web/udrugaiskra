import {
  Palette,
  Music,
  Drama,
  Camera,
  Sparkles,
  Dumbbell,
  Heart,
  Brush,
  Sprout,
  Theater,
  type LucideIcon,
} from "lucide-react";

export type WorkshopCategory = "radionica" | "kazaliste" | "eden";

export interface YearlyPlanEntry {
  /** Human readable date e.g. "14.12.2022." */
  date: string;
  /** Short theme title of the session */
  title: string;
  /** Bullet list of activities / exercises */
  activities: string[];
  /** Learning goal for the session */
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
  /** Optional poster/thumbnail for videos */
  thumb?: string;
  caption?: string;
}

export interface Workshop {
  slug: string;
  title: string;
  category: WorkshopCategory;
  icon: LucideIcon;
  shortDescription: string;
  description: string[];
  goal: string;
  leader: string;
  location: string;
  schedule: string;
  days: string;
  time: string;
  /** Legacy: primary photo used for card thumbnail */
  images: string[];
  yearlyPlan: YearlyPlanEntry[];
  news: WorkshopNewsItem[];
  media: WorkshopMedia[];
}

const FALLBACK = "/wp/2024/10/iskra-pozadina-1.jpg";
const DEFAULT_LOCATION = "Put Iza Nove Bolnice 10c, Split";
const DEFAULT_SCHEDULE = "Tijekom cijele školske godine (rujan – lipanj)";

/**
 * Yearly plan for the Drama workshop – transcribed from the association's
 * official PLAN_RADA document. Each entry groups the exercises done in one
 * session along with the pedagogical goal.
 */
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

const asMedia = (paths: string[]): WorkshopMedia[] =>
  paths.map((src) => ({ type: "image", src }));

export const workshops: Workshop[] = [
  {
    slug: "slikanje",
    title: "Likovna radionica",
    category: "radionica",
    icon: Palette,
    shortDescription: "Slikanje, crtanje i kreativno izražavanje bojama.",
    description: [
      "Likovna radionica prostor je u kojem naši sudionici kroz boju, liniju i oblik otkrivaju vlastiti način izražavanja.",
      "Radimo s različitim tehnikama — od akrila i akvarela do kolaža — a svaki susret završava ponosom na zajedničko djelo.",
    ],
    goal: "Razvoj fine motorike, koncentracije i samopouzdanja kroz likovni izraz.",
    leader: "Katarina Sokol",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Ponedjeljkom",
    time: "10:00 – 12:00",
    images: ["/wp/2024/02/SLIKA-ZA-BLOG-1.jpg", "/wp/2024/02/SLIKA-ZA-BLOG-2.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2024/02/SLIKA-ZA-BLOG-1.jpg", "/wp/2024/02/SLIKA-ZA-BLOG-2.jpg"]),
  },
  {
    slug: "glazbena-terapija",
    title: "Glazbena terapija",
    category: "radionica",
    icon: Music,
    shortDescription: "Ritam, pjevanje i glazba kao terapija i radost.",
    description: [
      "Glazbena radionica spaja ritam, pjevanje i sviranje u zajedničko iskustvo koje opušta i povezuje.",
      "Kroz glazbu potičemo komunikaciju, emocionalno izražavanje i osjećaj zajedništva. Naš zbor redovito nastupa na događanjima udruge.",
    ],
    goal: "Poticanje komunikacije, emocionalnog izražavanja i osjećaja zajedništva kroz glazbu.",
    leader: "Sandra Sunko i Jelena Laća Mrdeža",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Srijedom",
    time: "10:00 – 12:00",
    images: ["/wp/2023/09/Sandra-Sunko.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2023/09/Sandra-Sunko.jpg"]),
  },
  {
    slug: "drama",
    title: "Dramska radionica",
    category: "radionica",
    icon: Drama,
    shortDescription: "Gluma, scena i predstava „7 darova Duha Svetoga“.",
    description: [
      "Dramska radionica mjesto je gdje sudionici otkrivaju snagu izraza, geste i riječi.",
      "Naša predstava „7 darova Duha Svetoga“ izvedena je u brojnim gradovima Hrvatske i Bosne i Hercegovine. Kroz dramu jačamo samopouzdanje, pamćenje i timski rad.",
    ],
    goal: "Jačanje samopouzdanja, pamćenja i timskog rada kroz scenski izraz.",
    leader: "Željana Lažeta",
    location: DEFAULT_LOCATION,
    schedule: "Tijekom cijele školske godine, s pojačanim probama prije nastupa",
    days: "Petkom",
    time: "11:00 – 13:00",
    images: ["/wp/2024/02/BLOG_SLIKA_1-scaled.jpg"],
    yearlyPlan: dramaYearlyPlan,
    news: [],
    media: asMedia(["/wp/2024/02/BLOG_SLIKA_1-scaled.jpg"]),
  },
  {
    slug: "samba",
    title: "Ples i samba",
    category: "radionica",
    icon: Sparkles,
    shortDescription: "Pokret, ples i samba za energiju i zajedništvo.",
    description: [
      "Plesna radionica donosi energiju, ritam i osmijeh kroz pokret.",
      "Učimo jednostavne koreografije i samba korake koji potiču koordinaciju, kondiciju i radost zajedničkog plesa.",
    ],
    goal: "Razvoj koordinacije, kondicije i zajedništva kroz ples.",
    leader: "Katarina Bogdanović",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Utorkom",
    time: "10:00 – 11:30",
    images: ["/wp/2024/02/BLOG_SLIKA_2-scaled.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2024/02/BLOG_SLIKA_2-scaled.jpg"]),
  },
  {
    slug: "sport",
    title: "Sport i rehabilitacija",
    category: "radionica",
    icon: Dumbbell,
    shortDescription: "Tjelesna aktivnost i psiho-motorički razvoj.",
    description: [
      "Sportska radionica održava se u suradnji sa Sportsko-rehabilitacijskim centrom Motus Natura.",
      "Svakom sudioniku pristupa se individualno, uz vježbe koje potiču psiho-motorički razvoj, snagu i opće zdravlje.",
    ],
    goal: "Individualan psiho-motorički razvoj i jačanje općeg zdravlja.",
    leader: "Damir Znaor",
    location: "Motus Natura, Krležina 14, Split",
    schedule: DEFAULT_SCHEDULE,
    days: "Petkom",
    time: "09:00 – 10:30",
    images: [FALLBACK],
    yearlyPlan: [],
    news: [],
    media: asMedia([FALLBACK]),
  },
  {
    slug: "fotografija",
    title: "Fotografska radionica",
    category: "radionica",
    icon: Camera,
    shortDescription: "Bilježimo emocije i trenutke kroz objektiv.",
    description: [
      "Fotografska radionica uči sudionike kako kroz objektiv uhvatiti emociju i trenutak.",
      "Razvijamo pažnju na detalje, kreativnost i osjećaj za kompoziciju, a najljepše fotografije postaju dio priče udruge.",
    ],
    goal: "Razvoj pažnje na detalje, kreativnosti i osjećaja za kompoziciju.",
    leader: "Gabrijel Barnjak",
    location: DEFAULT_LOCATION,
    schedule: "Mjesečne radionice tijekom školske godine",
    days: "Prema rasporedu",
    time: "Po dogovoru",
    images: ["/wp/2024/05/IMG_5868.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2024/05/IMG_5868.jpg"]),
  },
  {
    slug: "decoupage",
    title: "Decoupage radionica",
    category: "radionica",
    icon: Brush,
    shortDescription: "Ukrašavanje predmeta tehnikom dekupaža.",
    description: [
      "Dekupaž radionica spaja strpljenje, preciznost i kreativnost u izradi jedinstvenih ukrasnih predmeta.",
      "Sudionici razvijaju finu motoriku i ponos na vlastite rukotvorine koje često postaju pokloni i prodajni predmeti udruge.",
    ],
    goal: "Razvoj fine motorike, strpljenja i ponosa na vlastite rukotvorine.",
    leader: "Antonija Vigurić Anić",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Srijedom",
    time: "12:00 – 13:30",
    images: ["/wp/2023/09/Antonija-Viguric-Anic.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2023/09/Antonija-Viguric-Anic.jpg"]),
  },
  {
    slug: "sminkanje",
    title: "Radionica šminkanja",
    category: "radionica",
    icon: Sparkles,
    shortDescription: "Briga o sebi, ljepota i samopouzdanje.",
    description: [
      "Radionica šminkanja njeguje samopouzdanje i brigu o sebi kroz igru bojama i njegom.",
      "Sudionice uče osnove njege kože i šminkanja u opuštenoj, podržavajućoj atmosferi.",
    ],
    goal: "Njegovanje samopouzdanja i brige o sebi.",
    leader: "Marija Bonačić",
    location: DEFAULT_LOCATION,
    schedule: "Mjesečne radionice tijekom školske godine",
    days: "Prema rasporedu",
    time: "Po dogovoru",
    images: ["/wp/2023/09/Marijana-Martinovic.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2023/09/Marijana-Martinovic.jpg"]),
  },
  {
    slug: "krunica",
    title: "Izrada krunica",
    category: "radionica",
    icon: Heart,
    shortDescription: "Duhovna radionica izrade krunica.",
    description: [
      "Radionica izrade krunica spaja kreativnost i duhovnost u mirnom, posvećenom ozračju.",
      "Kroz izradu krunica sudionici razvijaju strpljenje, finu motoriku i osjećaj smirenosti.",
    ],
    goal: "Razvoj strpljenja, fine motorike i unutarnjeg mira.",
    leader: "Lidija Radalj",
    location: DEFAULT_LOCATION,
    schedule: DEFAULT_SCHEDULE,
    days: "Ponedjeljkom",
    time: "12:00 – 13:30",
    images: ["/wp/2023/09/Lidija-Radalj.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2023/09/Lidija-Radalj.jpg"]),
  },
  // ── Kazališne predstave ────────────────────────────────────────────────
  {
    slug: "predstava-7-darova",
    title: "Predstava „7 darova Duha Svetoga“",
    category: "kazaliste",
    icon: Theater,
    shortDescription:
      "Autorska predstava izvedena u brojnim gradovima Hrvatske i BiH.",
    description: [
      "Predstava „7 darova Duha Svetoga“ krunski je projekt naše dramske radionice.",
      "Kroz sedam prizora sudionici predstavljaju darove mudrosti, razuma, savjeta, jakosti, znanja, pobožnosti i straha Božjeg.",
    ],
    goal: "Prenošenje duhovne poruke i afirmacija sposobnosti osoba s intelektualnim poteškoćama na sceni.",
    leader: "Željana Lažeta",
    location: "Gostovanja diljem Hrvatske i BiH",
    schedule: "Prema rasporedu gostovanja",
    days: "Po pozivu",
    time: "Po dogovoru",
    images: ["/wp/2024/02/BLOG_SLIKA_1-scaled.jpg"],
    yearlyPlan: [],
    news: [],
    media: asMedia(["/wp/2024/02/BLOG_SLIKA_1-scaled.jpg"]),
  },
  // ── EDEN radionice ─────────────────────────────────────────────────────
  {
    slug: "eden-vrt",
    title: "EDEN – vrtlarska radionica",
    category: "eden",
    icon: Sprout,
    shortDescription: "Rad u vrtu, sadnja i briga o biljkama.",
    description: [
      "EDEN program okuplja sudionike u zajedničkom radu u vrtu udruge.",
      "Kroz sadnju, brigu o biljkama i berbu učimo o strpljenju, ciklusima prirode i vrijednosti zajedničkog rada.",
    ],
    goal: "Poticanje odgovornosti, strpljenja i povezanosti s prirodom.",
    leader: "Tim EDEN-a",
    location: DEFAULT_LOCATION,
    schedule: "Sezonski, tijekom vegetacijske sezone",
    days: "Prema rasporedu",
    time: "Po dogovoru",
    images: [FALLBACK],
    yearlyPlan: [],
    news: [],
    media: asMedia([FALLBACK]),
  },
];

export const workshopCategoryMeta: Record<
  WorkshopCategory,
  { title: string; description: string }
> = {
  radionica: {
    title: "Radionice",
    description:
      "Redovite tjedne radionice u kojima naši sudionici razvijaju vještine i grade prijateljstva.",
  },
  kazaliste: {
    title: "Kazališne predstave",
    description:
      "Autorske predstave koje nastaju u sklopu dramske radionice i gostuju diljem regije.",
  },
  eden: {
    title: "EDEN radionice",
    description:
      "Programi u prirodi i vrtu koji potiču odgovornost, strpljenje i povezanost sa zajednicom.",
  },
};

export const getWorkshopBySlug = (slug: string): Workshop | undefined =>
  workshops.find((w) => w.slug === slug);

export const getWorkshopsByCategory = (category: WorkshopCategory): Workshop[] =>
  workshops.filter((w) => w.category === category);
