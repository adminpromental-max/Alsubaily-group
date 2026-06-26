import { newBeachAsset } from "@/data/asset-paths";

export const NEW_BEACH_HERO_IMAGE = newBeachAsset("hero.jpeg");

export const NEW_BEACH_HERO = {
  eyebrowAr: "الخبر · على الشاطئ مباشرة",
  eyebrowEn: "Al Khobar · Directly on the Beach",
  titleAr: "الشبيلي نيو بيتش",
  titleEn: "AlShubaily New Beach",
  taglineAr: "الأول والأهم داخل مدينة الخبر",
  taglineEn: "The First & Foremost in Al Khobar City",
  subtitleAr:
    "مشروع ساحلي استثنائي على الشاطئ مباشرة — يحده شمالاً جسر الملك فهد وجنوباً سلطانة الشرق، ويمتد على ضلعه الغربي طريق الملك فهد",
  subtitleEn:
    "An exceptional beachfront project — bordered north by King Fahd Causeway, south by Sultanat Al Sharq, with King Fahd Road along its western edge",
};

export type NewBeachStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
  decimals?: number;
};

export const NEW_BEACH_STATS: NewBeachStat[] = [
  {
    value: 2909000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 120.1,
    suffixAr: " م",
    suffixEn: " m",
    labelAr: "واجهة بحرية",
    labelEn: "Waterfront",
    decimals: 1,
  },
  {
    value: 3,
    labelAr: "مناطق رئيسية",
    labelEn: "Main Zones",
  },
];

export const NEW_BEACH_LOCATION = {
  titleAr: "الاختيار الاستراتيجي",
  titleEn: "The Strategic Choice",
  bodyAr:
    "الأهم والأول داخل مدينة الخبر وعلى الشاطئ مباشرة. موقع لا يُكرّر يربط بين بوابة المملكة الشرقية وجسر الملك فهد ومشروع سلطانة الشرق.",
  bodyEn:
    "The premier address in Al Khobar — directly on the beach. An irreplaceable location linking the Kingdom's eastern gateway, King Fahd Causeway, and Sultanat Al Sharq.",
  image: newBeachAsset("1.jpeg"),
  neighbors: [
    {
      dirAr: "شمالاً",
      dirEn: "North",
      labelAr: "جسر الملك فهد",
      labelEn: "King Fahd Causeway",
    },
    {
      dirAr: "جنوباً",
      dirEn: "South",
      labelAr: "سلطانة الشرق",
      labelEn: "Sultanat Al Sharq",
    },
    {
      dirAr: "غرباً",
      dirEn: "West",
      labelAr: "طريق الملك فهد",
      labelEn: "King Fahd Road",
    },
  ],
};

export const NEW_BEACH_ZONES = [
  {
    id: "coastal",
    titleAr: "الجزء الساحلي",
    titleEn: "Coastal Zone",
    descAr:
      "مخصص للمجمعات السكنية والفندقية على مساحات صافية على البحر مباشرة",
    descEn:
      "Dedicated to residential and hotel compounds on net areas directly on the sea",
    icon: "waves" as const,
  },
  {
    id: "investment",
    titleAr: "الجزء الاستثماري",
    titleEn: "Investment Zone",
    descAr:
      "بين طريق الخبر نيو بيتش وطريق الملك فهد — للنشاطات الترفيهية والتجارية",
    descEn:
      "Between Khobar New Beach Road and King Fahd Road — entertainment and commercial activities",
    icon: "building" as const,
  },
  {
    id: "road",
    titleAr: "طريق الخبر نيو بيتش",
    titleEn: "Khobar New Beach Road",
    descAr:
      "يفصل بين الجزئين الساحلي والاستثماري لاستقطاب المشاريع الترفيهية والخدمية",
    descEn:
      "Separating coastal and investment zones to attract entertainment and service projects",
    icon: "route" as const,
  },
] as const;

export const NEW_BEACH_ZONES_IMAGE = newBeachAsset("6.jpeg");

export const NEW_BEACH_INFRASTRUCTURE = {
  titleAr: "التطوير المتكامل",
  titleEn: "Integrated Development",
  bodyAr:
    "من أول المعايير الراقية لأسلوب التطوير — اهتمام كبير بتطوير الطريق الرئيسي داخل المشروع مع كافة أعمال البنية التحتية المتكاملة والعلوية الراقية.",
  bodyEn:
    "Among the highest standards of development — major focus on the project's main road with fully integrated infrastructure and premium superstructure.",
  image: newBeachAsset("5.jpeg"),
};

export const NEW_BEACH_INVESTMENT = {
  titleAr: "توجيه الاستثمار",
  titleEn: "Investment Direction",
  subtitleAr: "The Real Investment World",
  subtitleEn: "The Real Investment World",
  bodyAr:
    "مركزاً لأهم المشاريع السكنية والتجارية والفندقية على مستوى المنطقة الشرقية — القاعدة الرئيسية لاستقطاب الاستثمار.",
  bodyEn:
    "A hub for the Eastern Region's premier residential, commercial, and hotel projects — the main base for investment attraction.",
  image: newBeachAsset("8.jpeg"),
  sectors: [
    { labelAr: "فنادق", labelEn: "Hotels" },
    { labelAr: "منتجعات سياحية", labelEn: "Tourism Resorts" },
    { labelAr: "مجمعات سكنية", labelEn: "Residential Compounds" },
    { labelAr: "مراكز تجارية", labelEn: "Shopping Centers" },
    { labelAr: "مطاعم ومقاهي", labelEn: "Restaurants & Cafés" },
    { labelAr: "مرافق خدمية", labelEn: "Service Facilities" },
  ],
};

export const NEW_BEACH_GALLERY = [
  {
    src: newBeachAsset("2.jpeg"),
    titleAr: "إطلالة ساحلية",
    titleEn: "Coastal View",
  },
  {
    src: newBeachAsset("3.jpeg"),
    titleAr: "المخطط العام",
    titleEn: "Master Plan",
  },
  {
    src: newBeachAsset("4.jpeg"),
    titleAr: "تفاصيل التطوير",
    titleEn: "Development Details",
  },
  {
    src: newBeachAsset("9.jpeg"),
    titleAr: "وجهة استثمارية",
    titleEn: "Investment Destination",
  },
];

export const NEW_BEACH_CTA = {
  titleAr: "كن جزءاً من نيو بيتش",
  titleEn: "Be Part of New Beach",
  subtitleAr: "استثمر في أول مشروع ساحلي استراتيجي في الخبر",
  subtitleEn: "Invest in Al Khobar's first strategic beachfront project",
  image: newBeachAsset("9.jpeg"),
};

export const NEW_BEACH_ALL_IMAGES = [
  newBeachAsset("hero.jpeg"),
  newBeachAsset("1.jpeg"),
  newBeachAsset("2.jpeg"),
  newBeachAsset("3.jpeg"),
  newBeachAsset("4.jpeg"),
  newBeachAsset("5.jpeg"),
  newBeachAsset("6.jpeg"),
  newBeachAsset("8.jpeg"),
  newBeachAsset("9.jpeg"),
];
