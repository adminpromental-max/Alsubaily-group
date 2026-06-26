import { sultanatAsset } from "@/data/asset-paths";

export const SULTANAT_HERO_IMAGE = sultanatAsset("Hero Section - الجزر.png");

export const SULTANAT_HERO = {
  eyebrowAr: "الخبر · الخليج العربي",
  eyebrowEn: "Khobar · Arabian Gulf",
  titleAr: "سلطانة الشرق",
  titleEn: "Sultanat Al Sharq",
  taglineAr: "قمة الفخامة والخصوصية على ضفاف الخليج",
  taglineEn: "The Pinnacle of Luxury & Privacy on the Gulf Shore",
  subtitleAr:
    "حي سكني من أفخم الأحياء على مستوى المملكة — حيث تلتقي زرقة مياه الخليج العربي بجمال القصور والمنتجعات الراقية في بيئة مصممة لصفوة المجتمع",
  subtitleEn:
    "Among the Kingdom's most prestigious residential districts — where Gulf waters meet palatial elegance and refined resorts crafted for society's elite",
};

export type SultanatStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const SULTANAT_STATS: SultanatStat[] = [
  {
    value: 765000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 1100,
    suffixAr: " م",
    suffixEn: " m",
    labelAr: "واجهة بحرية",
    labelEn: "Waterfront",
  },
];

export const SULTANAT_LOCATION = {
  titleAr: "استراتيجية الموقع",
  titleEn: "Location Strategy",
  subtitleAr: "بوابتك نحو الخليج",
  subtitleEn: "Your Gateway to the Gulf",
  bodyAr:
    "يتربع المشروع على مساحة ضخمة مع واجهة بحرية ساحرة. موقع استثنائي جنوب الشبيلي بورت وبجوار جسر الملك فهد — نقطة الاتصال الأرقى في قلب الخبر.",
  bodyEn:
    "A vast footprint with a stunning seafront. Exceptionally positioned south of AlShubaily Port beside the King Fahd Causeway — Khobar's most distinguished connection point.",
  image: sultanatAsset("Arial Detail.png"),
  pins: [
    { labelAr: "الشبيلي بورت", labelEn: "AlShubaily Port" },
    { labelAr: "جسر الملك فهد", labelEn: "King Fahd Causeway" },
    { labelAr: "شاطئ خاص", labelEn: "Private Beach" },
  ],
};

export const SULTANAT_IDENTITY_STEPS = [
  {
    id: "islands",
    titleAr: "هويتك الفريدة",
    titleEn: "Your Unique Identity",
    subtitleAr: "جزيرتك الخاصة",
    subtitleEn: "Your Private Island",
    bodyAr:
      "تخطيط هندسي عبقري يعتمد على نظام الجزر لتوفير قطع أراضٍ متصلة مباشرة بالبحر — كل جزيرة تحمل شاطئها الخاص ومرسى يخت.",
    bodyEn:
      "Ingenious island planning delivers land plots directly connected to the sea — each island with its own beach and private yacht berth.",
    image: sultanatAsset("الجزر.png"),
  },
  {
    id: "palace",
    titleAr: "القصور والفلل",
    titleEn: "Palaces & Villas",
    subtitleAr: "فخامة كلاسيكية",
    subtitleEn: "Classic Grandeur",
    bodyAr:
      "بيئة مثالية لبناء القصور والفلل الفارهة — مسبح خاص يطل على البحر، مرسى خشبي، وطراز البحر الأبيض المتوسط بأسقفه القرميدية.",
    bodyEn:
      "The ideal setting for palatial estates — private pools opening to the sea, wooden docks, and Mediterranean terracotta roofs.",
    image: sultanatAsset("Luxury Palace.png"),
  },
  {
    id: "central",
    titleAr: "المنطقة المركزية",
    titleEn: "Central District",
    subtitleAr: "خدمات متكاملة",
    subtitleEn: "Integrated Services",
    bodyAr:
      "منطقة مركزية للخدمات تكتمل لوحة الفخامة — لتجعل سلطانة الشرق بيئة متكاملة لا تُضاهى على مستوى المملكة.",
    bodyEn:
      "A dedicated central services zone completes the luxury canvas — making Sultanat Al Sharq an unmatched integrated environment.",
    image: sultanatAsset("Central Zone.png"),
  },
] as const;

export const SULTANAT_INFRASTRUCTURE = {
  titleAr: "تطوير متكامل",
  titleEn: "Integrated Development",
  subtitleAr: "بنية تحتية تليق بتطلعاتك",
  subtitleEn: "Infrastructure Worth Your Ambitions",
  bodyAr:
    "لم نكتفِ بجمال الموقع — نفّذنا كامل أعمال البنية التحتية والعلوية الراقية لضمان جودة حياة لا تُضاهى.",
  bodyEn:
    "Beyond the beauty of the site — fully integrated infrastructure and premium superstructure for an unmatched quality of life.",
  slides: [
    {
      src: sultanatAsset("Infrastructure-1.png"),
      captionAr: "شوارع واسعة وأرصفة فخمة",
      captionEn: "Wide boulevards & premium pavements",
    },
    {
      src: sultanatAsset("Infrastructure-2.png"),
      captionAr: "أشجار النخيل المصطفة",
      captionEn: "Meticulously lined palm trees",
    },
    {
      src: sultanatAsset("Infrastructure-3.png"),
      captionAr: "أعمدة إنارة ديكورية",
      captionEn: "Decorative lighting columns",
    },
  ],
};

export const SULTANAT_ARCHITECTURE = [
  {
    id: "roof",
    titleAr: "أسقف قرميدية",
    titleEn: "Terracotta Roofs",
    descAr: "طراز البحر الأبيض المتوسط الأصيل",
    descEn: "Authentic Mediterranean character",
  },
  {
    id: "facade",
    titleAr: "واجهات دافئة",
    titleEn: "Warm Facades",
    descAr: "البيج والكريمي والترابي",
    descEn: "Beige, cream & earthy tones",
  },
  {
    id: "arch",
    titleAr: "أقواس كلاسيكية",
    titleEn: "Classic Arches",
    descAr: "نوافذ وأبواب مقوسة",
    descEn: "Arched windows & doorways",
  },
  {
    id: "palm",
    titleAr: "لاندسكيب استوائي",
    titleEn: "Tropical Landscape",
    descAr: "نخيل وخضرة غنية",
    descEn: "Palms & lush greenery",
  },
  {
    id: "water",
    titleAr: "قنوات ومراسي",
    titleEn: "Channels & Docks",
    descAr: "شاطئ خاص لكل قطعة",
    descEn: "Private beach for every plot",
  },
] as const;

export const SULTANAT_CTA = {
  titleAr: "استثمارك في الندرة",
  titleEn: "Invest in Rarity",
  subtitleAr: "خصوصية الموقع، اتصاله المباشر بالخليج، وتفرد كل قطعة بشاطئها الخاص",
  subtitleEn:
    "Absolute privacy, direct Gulf access, and every plot with its own private beach",
  bodyAr:
    "عوامل تجعل من سلطانة الشرق فرصة نادرة لإقامة أفخم المجمعات السكنية والمنتجعات",
  bodyEn:
    "Making Sultanat Al Sharq a rare opportunity for the Kingdom's finest residential compounds and resorts",
  image: sultanatAsset("Private Beach - Perspective.png"),
};

export const SULTANAT_GALLERY = [
  sultanatAsset("Hero Section - الجزر.png"),
  sultanatAsset("الجزر.png"),
  sultanatAsset("Private Beach - Perspective.png"),
  sultanatAsset("Luxury Palace.png"),
  sultanatAsset("Central Zone.png"),
  sultanatAsset("Infrastructure-1.png"),
  sultanatAsset("Infrastructure-2.png"),
  sultanatAsset("Infrastructure-3.png"),
  sultanatAsset("Arial Detail.png"),
];
