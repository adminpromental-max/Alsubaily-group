import { golfCityAsset } from "@/data/asset-paths";

export const GOLF_CITY_HERO_IMAGE = golfCityAsset("hero.svg");
export const GOLF_CITY_COVER_IMAGE = golfCityAsset("cover.svg");

export const GOLF_CITY_HERO = {
  eyebrowAr: "المزاحمية · الرياض",
  eyebrowEn: "Al-Muzahimiyah · Riyadh",
  titleAr: "جولف سيتي",
  titleEn: "Golf City",
  taglineAr: "انتظرونا.. قريباً!",
  taglineEn: "Stay tuned.. Coming Soon!",
  subtitleAr: "",
  subtitleEn: "",
};

export type GolfCityStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const GOLF_CITY_STATS: GolfCityStat[] = [
  {
    value: 1850000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة الإجمالية",
    labelEn: "Total Area",
  },
  {
    value: 3,
    suffixAr: "",
    suffixEn: "",
    labelAr: "ركائز أساسية",
    labelEn: "Core Pillars",
  },
  {
    value: 1,
    suffixAr: "",
    suffixEn: "",
    labelAr: "وجهة متكاملة",
    labelEn: "Integrated Destination",
  },
];

export const GOLF_CITY_INTRO = {
  titleAr: "انتظرونا.. قريباً!",
  titleEn: "Stay tuned.. Coming Soon!",
  bodyAr: "",
  bodyEn: "",
  image: golfCityAsset("1.svg"),
};

export const GOLF_CITY_ABOUT = {
  titleAr: "عن المشروع",
  titleEn: "About the Project",
  bodyAr:
    "جولف سيتي هو مجتمع متكامل ووجهة طموحة تجمع بين عصرية التصميم وهدوء الطبيعة في قلب المزاحمية، تم تخطيط المشروع بدقة ليكون بيئة مثالية للعيش، والاستثمار، عبر ثلاثة ركائز أساسية:",
  bodyEn:
    "Golf City is an integrated community and ambitious destination that combines contemporary design with the tranquility of nature in the heart of Al-Muzahimiyah. Meticulously planned as an ideal environment for living and investment through three core pillars:",
};

export const GOLF_CITY_PILLARS = [
  {
    id: "residential",
    titleAr: "عالم سكني",
    titleEn: "Residential World",
    descAr:
      "وحدات سكنية راقية مصممة لتمنحك ولعائلتك أعلى مستويات الراحة والخصوصية.",
    descEn:
      "Premium residential units designed to offer you and your family the highest levels of comfort and privacy.",
    image: golfCityAsset("1.svg"),
  },
  {
    id: "hospitality",
    titleAr: "ضيافة فندقية",
    titleEn: "Hotel Hospitality",
    descAr:
      "تجارب إقامة فاخرة بمعايير عالمية تليق بزوار المنطقة ومحبي الفخامة.",
    descEn:
      "Luxury stay experiences with world-class standards for visitors and lovers of refinement.",
    image: golfCityAsset("2.svg"),
  },
  {
    id: "entertainment",
    titleAr: "وجهة ترفيهية",
    titleEn: "Entertainment Destination",
    descAr:
      "مساحات مفتوحة، ومرافق ترفيهية ورياضية متكاملة تضمن تجربة ممتعة ومستدامة لكل الأعمار.",
    descEn:
      "Open spaces and integrated recreational and sports facilities ensuring an enjoyable, sustainable experience for all ages.",
    image: golfCityAsset("3.svg"),
  },
] as const;

export const GOLF_CITY_LOCATION = {
  titleAr: "لماذا المزاحمية؟",
  titleEn: "Why Al-Muzahimiyah?",
  bodyAr:
    "تم اختيار المزاحمية بعناية لتكون موطناً لمشروع جولف سيتي، فهي ليست مجرد موقع جغرافي، بل هي الوجهة السياحية والترفيهية الأقرب للعاصمة الرياض. تتميز المنطقة بطبيعتها الساحرة التي تجمع بين هيبة جبال طويق، ونقاء رمال النفود الذهبية، واعتدال أجوائها.",
  bodyEn:
    "Al-Muzahimiyah was carefully chosen as the home of Golf City — not merely a geographic location, but the closest tourism and leisure destination to the capital, Riyadh. The region captivates with the majesty of Tuwaiq mountains, the purity of golden desert sands, and its temperate climate.",
  body2Ar:
    "بفضل موقعها الاستراتيجي على طريق مكة المكرمة السريع، توفر المزاحمية لساكني وزوار جولف سيتي ملاذاً هادئاً ييسهل الوصول إليه، ليربطهم بنمط حياة عصري وصحي بعيداً عن صخب المدينة، وفي أحضان طبيعة لا تُنسى.",
  body2En:
    "Thanks to its strategic location on the Makkah Expressway, Al-Muzahimiyah offers residents and visitors of Golf City a peaceful retreat that is easy to reach — connecting them to a modern, healthy lifestyle away from the city bustle, embraced by unforgettable nature.",
  image: golfCityAsset("2.svg"),
  highlights: [
    {
      labelAr: "جبال طويق",
      labelEn: "Tuwaiq Mountains",
    },
    {
      labelAr: "طريق مكة السريع",
      labelEn: "Makkah Expressway",
    },
    {
      labelAr: "قرب الرياض",
      labelEn: "Near Riyadh",
    },
  ],
};

export const GOLF_CITY_GALLERY_HEADER = {
  eyebrowAr: "معرض المشروع",
  eyebrowEn: "Project Gallery",
  titleAr: "صور المشروع",
  titleEn: "Project Imagery",
  subtitleAr: "سيتم إضافة صور المشروع قريباً — ترقبوا المزيد",
  subtitleEn: "Project images will be added soon — stay tuned for more",
};

export type GolfCityGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const GOLF_CITY_GALLERY: GolfCityGallerySlide[] = [
  {
    src: golfCityAsset("1.svg"),
    titleAr: "المخطط العام",
    titleEn: "Master Plan",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: golfCityAsset("2.svg"),
    titleAr: "الوحدات السكنية",
    titleEn: "Residential Units",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: golfCityAsset("3.svg"),
    titleAr: "الضيافة الفندقية",
    titleEn: "Hotel Hospitality",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: golfCityAsset("hero.svg"),
    titleAr: "الوجهة الترفيهية",
    titleEn: "Entertainment Hub",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
];

export const GOLF_CITY_CTA = {
  titleAr: "انتظرونا.. قريباً!",
  titleEn: "Stay tuned.. Coming Soon!",
  subtitleAr: "كن أول من يعرف عند إطلاق المشروع",
  subtitleEn: "Be the first to know when the project launches",
  image: golfCityAsset("hero.svg"),
};
