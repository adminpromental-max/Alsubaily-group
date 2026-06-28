import { grandMallAsset } from "@/data/asset-paths";

export const GRAND_MALL_HERO = grandMallAsset("1.png");
export const GRAND_MALL_HERO_MOBILE = grandMallAsset("2.png");
export const GRAND_MALL_SHOWCASE = grandMallAsset("4.png");
export const GRAND_MALL_CTA_BG = grandMallAsset("3.png");

/** Cinematic auto-slideshow for «وجهة متكاملة» */
export const GRAND_MALL_SHOWCASE_SLIDES = [
  { src: grandMallAsset("4.png"), labelAr: "المول بالكامل", labelEn: "The Full Mall" },
  { src: grandMallAsset("14.png"), labelAr: "المحلات التجارية", labelEn: "Retail" },
  { src: grandMallAsset("15.png"), labelAr: "البحيرات", labelEn: "Lakes" },
  { src: grandMallAsset("16.png"), labelAr: "الترفيه", labelEn: "Entertainment" },
  { src: grandMallAsset("17.png"), labelAr: "السينما", labelEn: "Cinema" },
] as const;

export const GRAND_MALL_HERO_COPY = {
  eyebrowAr: "المنطقة الشرقية · وجهة استثمارية",
  eyebrowEn: "Eastern Region · Investment Destination",
  titleAr: "الشبيلي جراند مول",
  titleEn: "AlShubaily Grand Mall",
  taglineAr: "وجهة لا تُنسى",
  taglineEn: "An Unforgettable Destination",
  subtitleAr:
    "مول متكامل يجمع المحلات العالمية، البحيرات الصناعية، الترفيه العائلي، والسينما — في تجربة واحدة فاخرة.",
  subtitleEn:
    "An integrated mall combining global retail, artificial lakes, family entertainment, and cinema — in one luxury experience.",
};

export type GrandMallPortal = {
  id: string;
  titleAr: string;
  titleEn: string;
  tagAr: string;
  tagEn: string;
  images: readonly string[];
};

export const GRAND_MALL_PORTALS: GrandMallPortal[] = [
  {
    id: "retail",
    titleAr: "المحلات التجارية",
    titleEn: "Retail Boulevard",
    tagAr: "براندات عالمية",
    tagEn: "Global Brands",
    images: [
      grandMallAsset("البوابه اليسرى/5.png"),
      grandMallAsset("البوابه اليسرى/6.png"),
      grandMallAsset("البوابه اليسرى/7.png"),
    ],
  },
  {
    id: "lakes",
    titleAr: "البحيرات الصناعية",
    titleEn: "Artificial Lakes",
    tagAr: "هدوء وانعكاس",
    tagEn: "Serenity & Reflection",
    images: [
      grandMallAsset("البوابه الوسطى/8.png"),
      grandMallAsset("البوابه الوسطى/9.png"),
      grandMallAsset("البوابه الوسطى/10.png"),
    ],
  },
  {
    id: "entertainment",
    titleAr: "الترفيه والسينما",
    titleEn: "Entertainment & Cinema",
    tagAr: "عائلات وفعاليات",
    tagEn: "Families & Events",
    images: [
      grandMallAsset("البوابه اليمنى /11.png"),
      grandMallAsset("البوابه اليمنى /12.png"),
      grandMallAsset("البوابه اليمنى /13.png"),
    ],
  },
];

export type GrandMallZone = {
  id: string;
  image: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const GRAND_MALL_ZONES: GrandMallZone[] = [
  {
    id: "retail",
    image: grandMallAsset("14.png"),
    eyebrowAr: "Zone A",
    eyebrowEn: "Zone A",
    titleAr: "ممر المحلات التجارية",
    titleEn: "Retail Boulevard",
    bodyAr:
      "ممرات واسعة تضم أرقى العلامات العالمية والمحلية — تجربة تسوق فاخرة في قلب المنطقة الشرقية.",
    bodyEn:
      "Spacious corridors hosting premium global and local brands — a luxury shopping experience in the Eastern Region.",
  },
  {
    id: "lakes",
    image: grandMallAsset("15.png"),
    eyebrowAr: "Zone B",
    eyebrowEn: "Zone B",
    titleAr: "البحيرات الصناعية",
    titleEn: "Artificial Lakes",
    bodyAr:
      "بحيرات مصممة بعناية تمنح المول هدوءاً استثنائياً — انعكاسات الماء والمساحات الخضراء في قلب التجمع.",
    bodyEn:
      "Carefully designed lakes offering exceptional calm — water reflections and green spaces at the heart of the complex.",
  },
  {
    id: "entertainment",
    image: grandMallAsset("16.png"),
    eyebrowAr: "Zone C",
    eyebrowEn: "Zone C",
    titleAr: "منطقة الترفيه",
    titleEn: "Entertainment Hub",
    bodyAr:
      "مساحات ترفيه عائلية متكاملة — ألعاب، فعاليات، ومناطق جمع لجميع الأعمار.",
    bodyEn:
      "Integrated family entertainment — games, events, and gathering spaces for all ages.",
  },
  {
    id: "cinema",
    image: grandMallAsset("17.png"),
    eyebrowAr: "Zone D",
    eyebrowEn: "Zone D",
    titleAr: "مجمع السينما",
    titleEn: "Cinema Complex",
    bodyAr:
      "قاعات عرض حديثة بتجربة مشاهدة سينمائية راقية — وجهة الترفيه الليلي داخل جراند مول.",
    bodyEn:
      "State-of-the-art screening rooms with a premium cinematic experience — Grand Mall's night entertainment anchor.",
  },
  {
    id: "promenade",
    image: grandMallAsset("18.png"),
    eyebrowAr: "Zone E",
    eyebrowEn: "Zone E",
    titleAr: "الممشى الخارجي",
    titleEn: "Outdoor Promenade",
    bodyAr:
      "ممشى مفتوح يربط بين مناطق المول — مطاعم، مقاهٍ، وإطلالات على البحيرات والواجهات المعمارية.",
    bodyEn:
      "An open promenade linking mall districts — dining, cafés, and views across lakes and architecture.",
  },
];

export type GrandMallStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const GRAND_MALL_STATS: GrandMallStat[] = [
  {
    value: 185000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة التجارية",
    labelEn: "Retail Area",
  },
  {
    value: 350,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "محل تجاري",
    labelEn: "Retail Units",
  },
  {
    value: 12,
    labelAr: "شاشة سينما",
    labelEn: "Cinema Screens",
  },
  {
    value: 8500,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "موقف سيارات",
    labelEn: "Parking Spaces",
  },
  {
    value: 3,
    labelAr: "بحيرات صناعية",
    labelEn: "Artificial Lakes",
  },
];
