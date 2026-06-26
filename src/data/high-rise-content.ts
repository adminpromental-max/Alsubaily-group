import { highRiseAsset } from "@/data/asset-paths";

export const HIGH_RISE_HERO_IMAGE = highRiseAsset("لقطه-بانوراميه.png");

export type HighRiseStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const HIGH_RISE_STATS: HighRiseStat[] = [
  {
    value: 2,
    suffixAr: " كم",
    suffixEn: " km",
    labelAr: "واجهة بحرية",
    labelEn: "Waterfront",
  },
  {
    value: 6,
    labelAr: "أبراج",
    labelEn: "Towers",
  },
  {
    value: 16,
    suffixAr: " دور",
    suffixEn: " floors",
    labelAr: "ارتفاع الأبراج",
    labelEn: "Tower Height",
  },
  {
    value: 3,
    suffixAr: " كم",
    suffixEn: " km",
    labelAr: "النهر الصناعي",
    labelEn: "Artificial River",
  },
];

export const HIGH_RISE_HERO = {
  eyebrowAr: "الخبر · المنطقة الشرقية",
  eyebrowEn: "Khobar · Eastern Province",
  titleAr: "الشبيلي هاي رايز",
  titleEn: "AlShubaily High Rise",
  taglineAr: "القلب النابض لمدينة الخبر",
  taglineEn: "The Beating Heart of Khobar",
  subtitleAr:
    "الوجهة الاستثمارية والسياحية الأهم في المنطقة الشرقية — حيث تتكامل الحياة العصرية مع الإطلالات البحرية الساحرة على امتداد 2 كيلومتر",
  subtitleEn:
    "The Eastern Region's premier investment and tourism destination — where contemporary life meets stunning sea views across 2 kilometers",
};

export const HIGH_RISE_LOCATION = {
  titleAr: "عبقرية المكان",
  titleEn: "Location Genius",
  subtitleAr: "بوابتك الاستراتيجية للمنطقة الشرقية",
  subtitleEn: "Your strategic gateway to the Eastern Province",
  bodyAr:
    "نقطة التقاء حيوية تربط العاصمة السعودية بدول الخليج العربي — موقع نادر لا يتكرر. يرتبط المشروع بمنظومة الشبيلي بورت وجسر الملك فهد المؤدي إلى البحرين.",
  bodyEn:
    "A vibrant meeting point linking the Saudi capital to the Gulf nations — a rare location. Connected to AlShubaily Port and the King Fahd Causeway to Bahrain.",
  image: highRiseAsset("السياق-الجغرافي.png"),
  pins: [
    { labelAr: "الشبيلي بورت", labelEn: "AlShubaily Port" },
    { labelAr: "جسر الملك فهد", labelEn: "King Fahd Causeway" },
    { labelAr: "الواجهة البحرية", labelEn: "Seafront" },
  ],
};

export const HIGH_RISE_ZONES = [
  {
    id: "residential",
    titleAr: "السكنية والسياحية",
    titleEn: "Residential & Tourism",
    featuresAr: "المارينا · الفلل المعلقة (الأولى من نوعها)",
    featuresEn: "Marina · Suspended Villas (first of their kind)",
    vibeAr: "ترفيهي واستجمام على الواجهة البحرية المباشرة",
    vibeEn: "Leisure and recreation on the direct seafront",
    image: highRiseAsset("المارينا.png"),
    accent: highRiseAsset("فلل.png"),
  },
  {
    id: "commercial",
    titleAr: "التجارية",
    titleEn: "Commercial",
    featuresAr: "الجراند مول",
    featuresEn: "Grand Mall",
    vibeAr: "الوجهة التسويقية الأضخم في الشرق الأوسط على مياه البحر",
    vibeEn: "The largest retail destination in the Middle East on the sea",
    image: highRiseAsset("جراند-مول.png"),
  },
  {
    id: "business",
    titleAr: "التجارية والإدارية",
    titleEn: "Commercial & Administrative",
    featuresAr: "6 أبراج بارتفاع 16 دوراً",
    featuresEn: "6 towers rising 16 floors",
    vibeAr: "مركز أعمال حيوي لتلبية طلبات الشركات الكبرى",
    vibeEn: "A dynamic business hub for major corporations",
    image: highRiseAsset("مكاتب.png"),
  },
  {
    id: "central",
    titleAr: "المركزية",
    titleEn: "Central District",
    featuresAr: "النهر الصناعي (يمتد لـ 3 كيلومترات)",
    featuresEn: "Artificial River (3 km long)",
    vibeAr: "القلب الجمالي الذي يربط جميع أجزاء المشروع",
    vibeEn: "The aesthetic heart connecting every part of the project",
    image: highRiseAsset("النهر-الصناعي.png"),
  },
] as const;

export const HIGH_RISE_WHY = [
  {
    titleAr: "تخطيط منفرد",
    titleEn: "Distinctive Planning",
    descAr: "نؤسس لقاعدة مستقبل تفخر بها الأجيال",
    descEn: "Building a foundation future generations will be proud of",
  },
  {
    titleAr: "تنفيذ متميز",
    titleEn: "Excellence in Execution",
    descAr: "بنية تحتية متكاملة وقنوات مائية جاهزة",
    descEn: "Integrated infrastructure and ready water channels",
  },
  {
    titleAr: "تطوير غير مسبوق",
    titleEn: "Unprecedented Development",
    descAr: "ندرس احتياجات مدن المستقبل بدقة تامة",
    descEn: "Meticulously studying the needs of tomorrow's cities",
  },
] as const;

export type HighRiseGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const HIGH_RISE_GALLERY: HighRiseGallerySlide[] = [
  {
    src: highRiseAsset("لقطه-بانوراميه.png"),
    titleAr: "بانوراما الخبر",
    titleEn: "Khobar Panorama",
    descAr: "واجهة بحرية واسعة",
    descEn: "Expansive seafront",
  },
  {
    src: highRiseAsset("السياق-الجغرافي.png"),
    titleAr: "السياق الجغرافي",
    titleEn: "Geographic Context",
    descAr: "موقع استراتيجي نادر",
    descEn: "Rare strategic location",
  },
  {
    src: highRiseAsset("المارينا.png"),
    titleAr: "المارينا",
    titleEn: "The Marina",
    descAr: "ترفيه بحري فاخر",
    descEn: "Luxury marine leisure",
  },
  {
    src: highRiseAsset("فلل.png"),
    titleAr: "الفلل المعلقة",
    titleEn: "Suspended Villas",
    descAr: "الأولى من نوعها",
    descEn: "First of their kind",
  },
  {
    src: highRiseAsset("جراند-مول.png"),
    titleAr: "الجراند مول",
    titleEn: "Grand Mall",
    descAr: "وجهة تسوّق على البحر",
    descEn: "Shopping on the sea",
  },
  {
    src: highRiseAsset("مكاتب.png"),
    titleAr: "الأبراج الإدارية",
    titleEn: "Office Towers",
    descAr: "16 دوراً من الأعمال",
    descEn: "16 floors of business",
  },
  {
    src: highRiseAsset("النهر-الصناعي.png"),
    titleAr: "النهر الصناعي",
    titleEn: "Artificial River",
    descAr: "3 كم يربط المشروع",
    descEn: "3 km connecting the project",
  },
];

export const HIGH_RISE_CTA = {
  titleAr: "كن جزءاً من مستقبل الخبر",
  titleEn: "Be Part of Khobar's Future",
  subtitleAr:
    "تواصل معنا اليوم لاكتشاف الفرص الاستثمارية الاستثنائية في الشبيلي هاي رايز",
  subtitleEn:
    "Contact us today to discover exceptional investment opportunities at AlShubaily High Rise",
};
