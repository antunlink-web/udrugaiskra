import {
  Palette,
  Music,
  Drama,
  Camera,
  Scissors,
  Sparkles,
  Dumbbell,
  Heart,
  Brush,
  type LucideIcon,
} from "lucide-react";

export interface Workshop {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string[];
  leader: string;
  location: string;
  schedule: string;
  days: string;
  time: string;
  images: string[];
}

const FALLBACK = "/wp/2024/10/iskra-pozadina-1.jpg";

export const workshops: Workshop[] = [
  {
    slug: "slikanje",
    title: "Likovna radionica",
    icon: Palette,
    shortDescription: "Slikanje, crtanje i kreativno izražavanje bojama.",
    description: [
      "Likovna radionica prostor je u kojem naši sudionici kroz boju, liniju i oblik otkrivaju vlastiti način izražavanja.",
      "Radimo s različitim tehnikama — od akrila i akvarela do kolaža — a svaki susret završava ponosom na zajedničko djelo. Cilj radionice je razvoj fine motorike, koncentracije i samopouzdanja.",
    ],
    leader: "Katarina Sokol",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Ponedjeljkom",
    time: "10:00 – 12:00",
    images: ["/wp/2024/02/SLIKA-ZA-BLOG-1.jpg", "/wp/2024/02/SLIKA-ZA-BLOG-2.jpg"],
  },
  {
    slug: "glazbena-terapija",
    title: "Glazbena terapija",
    icon: Music,
    shortDescription: "Ritam, pjevanje i glazba kao terapija i radost.",
    description: [
      "Glazbena radionica spaja ritam, pjevanje i sviranje u zajedničko iskustvo koje opušta i povezuje.",
      "Kroz glazbu potičemo komunikaciju, emocionalno izražavanje i osjećaj zajedništva. Naš zbor redovito nastupa na događanjima udruge.",
    ],
    leader: "Sandra Sunko i Jelena Laća Mrdeža",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Srijedom",
    time: "10:00 – 12:00",
    images: ["/wp/2023/09/Sandra-Sunko.jpg"],
  },
  {
    slug: "drama",
    title: "Dramska radionica",
    icon: Drama,
    shortDescription: "Gluma, scena i predstava „7 darova Duha Svetoga“.",
    description: [
      "Dramska radionica mjesto je gdje sudionici otkrivaju snagu izraza, geste i riječi.",
      "Naša predstava „7 darova Duha Svetoga“ izvedena je u brojnim gradovima Hrvatske i Bosne i Hercegovine. Kroz dramu jačamo samopouzdanje, pamćenje i timski rad.",
    ],
    leader: "Željana Lažeta",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine, s pojačanim probama prije nastupa",
    days: "Petkom",
    time: "11:00 – 13:00",
    images: ["/wp/2024/02/BLOG_SLIKA_1-scaled.jpg"],
  },
  {
    slug: "samba",
    title: "Ples i samba",
    icon: Sparkles,
    shortDescription: "Pokret, ples i samba za energiju i zajedništvo.",
    description: [
      "Plesna radionica donosi energiju, ritam i osmijeh kroz pokret.",
      "Učimo jednostavne koreografije i samba korake koji potiču koordinaciju, kondiciju i radost zajedničkog plesa.",
    ],
    leader: "Katarina Bogdanović",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Utorkom",
    time: "10:00 – 11:30",
    images: ["/wp/2024/02/BLOG_SLIKA_2-scaled.jpg"],
  },
  {
    slug: "sport",
    title: "Sport i rehabilitacija",
    icon: Dumbbell,
    shortDescription: "Tjelesna aktivnost i psiho-motorički razvoj.",
    description: [
      "Sportska radionica održava se u suradnji sa Sportsko-rehabilitacijskim centrom Motus Natura.",
      "Svakom sudioniku pristupa se individualno, uz vježbe koje potiču psiho-motorički razvoj, snagu i opće zdravlje.",
    ],
    leader: "Damir Znaor",
    location: "Motus Natura, Krležina 14, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Petkom",
    time: "09:00 – 10:30",
    images: [FALLBACK],
  },
  {
    slug: "fotografija",
    title: "Fotografska radionica",
    icon: Camera,
    shortDescription: "Bilježimo emocije i trenutke kroz objektiv.",
    description: [
      "Fotografska radionica uči sudionike kako kroz objektiv uhvatiti emociju i trenutak.",
      "Razvijamo pažnju na detalje, kreativnost i osjećaj za kompoziciju, a najljepše fotografije postaju dio priče udruge.",
    ],
    leader: "Gabrijel Barnjak",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Mjesečne radionice tijekom školske godine",
    days: "Prema rasporedu",
    time: "Po dogovoru",
    images: ["/wp/2024/05/IMG_5868.jpg"],
  },
  {
    slug: "decoupage",
    title: "Decoupage radionica",
    icon: Brush,
    shortDescription: "Ukrašavanje predmeta tehnikom dekupaža.",
    description: [
      "Dekupaž radionica spaja strpljenje, preciznost i kreativnost u izradi jedinstvenih ukrasnih predmeta.",
      "Sudionici razvijaju finu motoriku i ponos na vlastite rukotvorine koje često postaju pokloni i prodajni predmeti udruge.",
    ],
    leader: "Antonija Vigurić Anić",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Srijedom",
    time: "12:00 – 13:30",
    images: ["/wp/2023/09/Antonija-Viguric-Anic.jpg"],
  },
  {
    slug: "sminkanje",
    title: "Radionica šminkanja",
    icon: Sparkles,
    shortDescription: "Briga o sebi, ljepota i samopouzdanje.",
    description: [
      "Radionica šminkanja njeguje samopouzdanje i brigu o sebi kroz igru bojama i njegom.",
      "Sudionice uče osnove njege kože i šminkanja u opuštenoj, podržavajućoj atmosferi.",
    ],
    leader: "Marija Bonačić",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Mjesečne radionice tijekom školske godine",
    days: "Prema rasporedu",
    time: "Po dogovoru",
    images: ["/wp/2023/09/Marijana-Martinovic.jpg"],
  },
  {
    slug: "krunica",
    title: "Izrada krunica",
    icon: Heart,
    shortDescription: "Duhovna radionica izrade krunica.",
    description: [
      "Radionica izrade krunica spaja kreativnost i duhovnost u mirnom, posvećenom ozračju.",
      "Kroz izradu krunica sudionici razvijaju strpljenje, finu motoriku i osjećaj smirenosti.",
    ],
    leader: "Lidija Radalj",
    location: "Put Iza Nove Bolnice 10c, Split",
    schedule: "Tijekom cijele školske godine (rujan – lipanj)",
    days: "Ponedjeljkom",
    time: "12:00 – 13:30",
    images: ["/wp/2023/09/Lidija-Radalj.jpg"],
  },
];

export const getWorkshopBySlug = (slug: string): Workshop | undefined =>
  workshops.find((w) => w.slug === slug);
