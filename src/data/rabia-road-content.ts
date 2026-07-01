import { rabiaRoadAsset } from "@/data/asset-paths";

export const RABIA_ROAD_HERO_IMAGE = rabiaRoadAsset(
  "WhatsApp Image 2026-06-25 at 3.27.46 PM.jpeg",
);

export const RABIA_ROAD_HERO = {
  eyebrowAr: "مكة المكرمة · الواجهة الغربية",
  eyebrowEn: "Makkah · Western Facade",
  titleAr: "رابية مكة",
  titleEn: "Rabia Makkah",
  taglineAr: "على بعد دقائق من الحرم",
  taglineEn: "Minutes from the Holy Mosque",
  subtitleAr:
    "واجهة مكة المكرمة الغربية على طريق مكة جدة السريع — أهم الشرايين المؤدية إلى الحرم المكي الشريف، وعلى الطريق الدائري الثالث في أرقى مناطق المدينة",
  subtitleEn:
    "Makkah's western facade on the Mecca–Jeddah Expressway — a key artery to the Holy Mosque, on the Third Ring Road in the city's finest district",
};

export type RabiaRoadStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
  textAr?: string;
  textEn?: string;
};

export const RABIA_ROAD_STATS: RabiaRoadStat[] = [
  {
    value: 2450000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 1,
    suffixAr: " كم+",
    suffixEn: " km+",
    labelAr: "واجهة طريق مكة–جدة",
    labelEn: "Mecca–Jeddah Facade",
  },
  {
    value: 0,
    textAr: "دقائق",
    textEn: "Minutes",
    labelAr: "من الحرم المكي",
    labelEn: "From the Holy Mosque",
  },
];

export const RABIA_ROAD_LOCATION = {
  titleAr: "الاختيار الاستراتيجي",
  titleEn: "Strategic Selection",
  bodyAr:
    "موقع استثنائي على واجهة مكة الغربية — يربط بين طريق مكة جدة السريع والطريق الدائري الثالث في قلب أرقى مناطق مكة المكرمة.",
  bodyEn:
    "An exceptional position on Makkah's western facade — linking the Mecca–Jeddah Expressway and the Third Ring Road in the holy city's finest district.",
  image: RABIA_ROAD_HERO_IMAGE,
  roads: [
    {
      labelAr: "طريق مكة–جدة السريع",
      labelEn: "Mecca–Jeddah Expressway",
    },
    {
      labelAr: "الطريق الدائري الثالث",
      labelEn: "Third Ring Road",
    },
    {
      labelAr: "الواجهة الغربية",
      labelEn: "Western Facade",
    },
  ],
};

export const RABIA_ROAD_PLANNING = {
  titleAr: "التخطيط لبناء الهوية",
  titleEn: "Planning for Identity",
  bodyAr:
    "تخطيط يحقق قاعدة لبيئة عمرانية حديثة ومتكاملة — استغلال أمثل للواجهة الرئيسية الممتدة على طريق مكة جدة السريع بما يتجاوز الكيلومتر لاستيعاب المشاريع الاستثمارية.",
  bodyEn:
    "Planning that establishes a modern integrated urban environment — optimal use of the main facade along the Mecca–Jeddah Expressway exceeding one kilometer for investment projects.",
  image: rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (1).jpeg"),
  uses: [
    { labelAr: "تجاري", labelEn: "Commercial" },
    { labelAr: "ترفيهي", labelEn: "Entertainment" },
    { labelAr: "إداري", labelEn: "Administrative" },
    { labelAr: "سكني", labelEn: "Residential" },
    { labelAr: "تجمعات راقية", labelEn: "Premium Clusters" },
  ],
  detailAr:
    "مناطق داخلية موزعة بنظام التجمعات للاستخدامات السكنية الراقية — شوارع رئيسية تصب في طريق مكة جدة والأحياء المجاورة.",
  detailEn:
    "Internal zones in cluster layouts for upscale residential use — main streets flowing to the expressway and neighboring districts.",
};

export const RABIA_ROAD_INFRASTRUCTURE = {
  titleAr: "التطوير المتكامل",
  titleEn: "Integrated Development",
  bodyAr:
    "تم تسوية وتهذيب الجبال داخل منطقة التطوير لتحقيق أرض منبسطة بنمط جديد غير معتاد في مكة المكرمة — مع كافة أعمال البنية التحتية المتكاملة والعلوية الراقية.",
  bodyEn:
    "Mountains graded and leveled within the development zone — achieving flat land in an unprecedented pattern for Makkah, with fully integrated infrastructure and premium superstructure.",
  image: rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (2).jpeg"),
};

export const RABIA_ROAD_INVESTMENT = {
  titleAr: "توجيه الاستثمار",
  titleEn: "Investment Direction",
  subtitleAr: "The Real Investment World",
  subtitleEn: "The Real Investment World",
  bodyAr:
    "بيئة مميزة لاستقطاب كبرى المشاريع التجارية والفندقية والإدارية — مع منطقة خاصة لاستقطاب أرقى المشاريع السكنية.",
  bodyEn:
    "A distinguished environment attracting major commercial, hotel, and administrative projects — plus a dedicated zone for the finest residential developments.",
  image: rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (3).jpeg"),
  sectors: [
    {
      titleAr: "تجاري وفندقي",
      titleEn: "Commercial & Hotels",
      descAr: "كبرى المشاريع على الواجهة الرئيسية",
      descEn: "Major projects on the main facade",
    },
    {
      titleAr: "إداري",
      titleEn: "Administrative",
      descAr: "بيئة أعمال في قلب مكة",
      descEn: "Business environment in Makkah's heart",
    },
    {
      titleAr: "سكني راقٍ",
      titleEn: "Premium Residential",
      descAr: "منطقة خاصة لأرقى المشاريع السكنية",
      descEn: "Dedicated zone for finest residential projects",
    },
  ],
};

export const RABIA_ROAD_CTA = {
  titleAr: "استثمر في رابية مكة",
  titleEn: "Invest in Rabia Makkah",
  subtitleAr: "الوجهة الأذكى على واجهة مكة الغربية",
  subtitleEn: "The smartest destination on Makkah's western facade",
  image: RABIA_ROAD_HERO_IMAGE,
};

export const RABIA_ROAD_GALLERY = [
  RABIA_ROAD_HERO_IMAGE,
  rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (1).jpeg"),
  rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (2).jpeg"),
  rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (3).jpeg"),
];
