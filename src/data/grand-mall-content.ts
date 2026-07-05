import { grandMallAsset } from "@/data/asset-paths";

export const GRAND_MALL_HERO = grandMallAsset("1.webp");
export const GRAND_MALL_HERO_MOBILE = grandMallAsset("2.webp");
export const GRAND_MALL_CTA_BG = grandMallAsset("3.webp");

/** Interactive gallery slides for «وجهة متكاملة» */
export const GRAND_MALL_SHOWCASE_SLIDES = [
  {
    src: grandMallAsset("4.webp"),
    labelAr: "الشبيلي جراند مول",
    labelEn: "AlShubaily Grand Mall",
    captionAr: "تحفة معمارية مستوحاة من الطراز الأندلسي، محاطة بالمياه من ثلاث جهات.",
    captionEn:
      "An Andalusian-inspired architectural masterpiece surrounded by water on three sides.",
  },
  {
    src: grandMallAsset("F  -   20.webp"),
    labelAr: "دي لاڨينيو",
    labelEn: "De Lavigno",
    captionAr: "جنّة تسوق تجمع العلامات الفاخرة والبوتيكات العصرية.",
    captionEn: "A luxury shopping paradise of premium brands and contemporary boutiques.",
  },
  {
    src: grandMallAsset("final wadi  -   02.webp"),
    labelAr: "ذا وادي",
    labelEn: "The Wade",
    captionAr: "تجربة تسوق محاطة بالطبيعة وهدوء المساحات المفتوحة.",
    captionEn: "A nature-surrounded shopping experience amid serene open spaces.",
  },
  {
    src: grandMallAsset("final Co    -     03.webp"),
    labelAr: "ذا كورتيارد",
    labelEn: "The Courtyard",
    captionAr: "مطاعم ومقاهٍ تطل على البحيرة الخارجية بأجواء راقية.",
    captionEn: "Restaurants and cafés overlooking the external lake in refined ambiance.",
  },
  {
    src: grandMallAsset("F  -   23.webp"),
    labelAr: "سينما الشبيلي جراند مول",
    labelEn: "AlShubaily Grand Mall Cinema",
    captionAr: "تجربة سينمائية استثنائية بمرافق حديثة وخدمة مميزة.",
    captionEn: "An exceptional cinematic experience with state-of-the-art facilities.",
  },
  {
    src: grandMallAsset("F  -   26.webp"),
    labelAr: "مناطق الترفيه",
    labelEn: "Entertainment Zones",
    captionAr: "مساحات ترفيه متنوعة لجميع الأعمار داخل وجهة واحدة.",
    captionEn: "Diverse entertainment spaces for all ages within one destination.",
  },
] as const;

export const GRAND_MALL_HERO_COPY = {
  eyebrowAr: "المنطقة الشرقية · الشبيلي تاون",
  eyebrowEn: "Eastern Region · AlShubaily Town",
  titleAr: "الشبيلي جراند مول",
  titleEn: "AlShubaily Grand Mall",
  taglineAr: "تحفة معمارية على جزيرة عائمة",
  taglineEn: "An Architectural Jewel on a Floating Island",
  subtitleAr:
    "مول متكامل مستوحى من الطراز الأندلسي — يُحاط بالمياه من ثلاث جهات ويجمع التسوق الفاخر، المطاعم، الترفيه العائلي، ومجمع السينما في تجربة واحدة.",
  subtitleEn:
    "An integrated Andalusian-inspired mall surrounded by water on three sides — combining luxury retail, dining, family entertainment, and a cinema complex in one experience.",
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
    id: "lavigno",
    titleAr: "دي لاڨينيو",
    titleEn: "De Lavigno",
    tagAr: "تسوق فاخر",
    tagEn: "Luxury Retail",
    images: [
      grandMallAsset("البوابه اليسرى/final Co    -     01.webp"),
      grandMallAsset("البوابه اليسرى/T  02.webp"),
      grandMallAsset("البوابه اليسرى/final wadi  -   04.webp"),
    ],
  },
  {
    id: "wade",
    titleAr: "ذا وادي",
    titleEn: "The Wade",
    tagAr: "طبيعة وهدوء",
    tagEn: "Nature & Serenity",
    images: [
      grandMallAsset("البوابه الوسطى/final wadi  -   01.webp"),
      grandMallAsset("البوابه الوسطى/final wadi  -   05.webp"),
      grandMallAsset("final wadi  -   03.webp"),
    ],
  },
  {
    id: "entertainment",
    titleAr: "الترفيه والسينما",
    titleEn: "Entertainment & Cinema",
    tagAr: "عائلات وفعاليات",
    tagEn: "Families & Events",
    images: [
      grandMallAsset("البوابه اليمنى /11.webp"),
      grandMallAsset("البوابه اليمنى /14.webp"),
      grandMallAsset("البوابه اليمنى /15.webp"),
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
    id: "lavigno",
    image: grandMallAsset("T  01.webp"),
    eyebrowAr: "De Lavigno",
    eyebrowEn: "De Lavigno",
    titleAr: "دي لاڨينيو",
    titleEn: "De Lavigno",
    bodyAr:
      "اكتشف متعة التسوق الفريدة حيث تنتظرك جنّة تسوق تجمع العلامات التجارية الفاخرة والبوتيكات العصرية — الوجهة المثالية لعشاق الموضة.",
    bodyEn:
      "Discover a unique shopping experience — a paradise of premium brands and contemporary boutiques, the ideal destination for fashion lovers.",
  },
  {
    id: "wade",
    image: grandMallAsset("final wadi  -   02.webp"),
    eyebrowAr: "The Wade",
    eyebrowEn: "The Wade",
    titleAr: "ذا وادي",
    titleEn: "The Wade",
    bodyAr:
      "منطقة تقدّم هروباً من الروتين اليومي — تجربة تسوق محاطة بالطبيعة مع تناغم بين الحداثة والمساحات الخضراء.",
    bodyEn:
      "An escape from the everyday — a nature-surrounded shopping experience where modern design meets green open spaces.",
  },
  {
    id: "courtyard",
    image: grandMallAsset("final Co    -     04.webp"),
    eyebrowAr: "The Courtyard",
    eyebrowEn: "The Courtyard",
    titleAr: "ذا كورتيارد",
    titleEn: "The Courtyard",
    bodyAr:
      "منطقة نابضة بالحياة تطل على البحيرة الخارجية — مجموعة متنوعة من المطاعم والمقاهي تجمع الذوق الرفيع والأجواء المريحة.",
    bodyEn:
      "A vibrant district overlooking the external lake — diverse restaurants and cafés blending refined taste with relaxed ambiance.",
  },
  {
    id: "gate",
    image: grandMallAsset("البوابه اليمنى /11.webp"),
    eyebrowAr: "Main Gate",
    eyebrowEn: "Main Gate",
    titleAr: "البوابة الرئيسية",
    titleEn: "Main Gate",
    bodyAr:
      "البوابة الرئيسية للمول بتصميم معماري يجمع بين الطراز الكلاسيكي والأندلسي — نقطة جذب تستقبل الزوار بفخامة وتقودهم إلى رويال رامب.",
    bodyEn:
      "The mall's main gate blending classical and Andalusian architecture — a grand welcome leading visitors to Royal Ramp.",
  },
  {
    id: "cinema-corridor",
    image: grandMallAsset("F  -   22.webp"),
    eyebrowAr: "Cinema Corridor",
    eyebrowEn: "Cinema Corridor",
    titleAr: "ممر السينما",
    titleEn: "Cinema Corridor",
    bodyAr:
      "ممر أنيق يربط رويال رامب ببوابة سينما الشبيلي جراند مول في الطابق الثاني — تجربة دخول راقية إلى عالم السينما.",
    bodyEn:
      "An elegant corridor linking Royal Ramp to the Grand Mall cinema gate on the second floor — a refined entry into the world of cinema.",
  },
  {
    id: "entertainment",
    image: grandMallAsset("F  -   26.webp"),
    eyebrowAr: "Entertainment",
    eyebrowEn: "Entertainment",
    titleAr: "مناطق الترفيه",
    titleEn: "Entertainment Zones",
    bodyAr:
      "خمس مناطق ترفيهية متنوعة — من الألعاب المثيرة إلى التجارب الغامرة، تقدّم تشكيلة واسعة من الترفيه لجميع الأعمار.",
    bodyEn:
      "Five diverse entertainment zones — from thrilling games to immersive experiences, offering entertainment for all ages.",
  },
  {
    id: "cinema",
    image: grandMallAsset("F  -   23.webp"),
    eyebrowAr: "Cinema",
    eyebrowEn: "Cinema",
    titleAr: "سينما الشبيلي جراند مول",
    titleEn: "AlShubaily Grand Mall Cinema",
    bodyAr:
      "11 صالة عرض حديثة — رحلة سينمائية لم يسبق لها مثيل بتنوع الأفلام والخدمة الاستثنائية والموقع المميز.",
    bodyEn:
      "11 state-of-the-art screening rooms — an unparalleled cinematic journey with diverse films and exceptional service.",
  },
];

export type GrandMallStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
  featured?: boolean;
};

/** Figures from AlShubaily Grand Mall AR Profile */
export const GRAND_MALL_STATS: GrandMallStat[] = [
  {
    value: 331000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "إجمالي مساحة البناء",
    labelEn: "Total Built Area",
    featured: true,
  },
  {
    value: 130000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة التأجير",
    labelEn: "Leasable Area",
  },
  {
    value: 3000,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "مواقف سيارات",
    labelEn: "Parking Spaces",
  },
  {
    value: 300,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "وحدة تأجيرية",
    labelEn: "Leasable Units",
  },
  {
    value: 11,
    labelAr: "صالة سينما",
    labelEn: "Cinema Screens",
  },
  {
    value: 100,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "مطعم ومقهى",
    labelEn: "Restaurants & Cafés",
  },
];
