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
      "بيئة مثالية لبناء القصور والفلل الفارهة — مسبح خاص يطل على البحر، مرسى خشبي، وطراز ساحلي فاخر على ضفاف البحر الأحمر والخليج العربي بأسقفه القرميدية.",
    bodyEn:
      "The ideal setting for palatial estates — private pools opening to the sea, wooden docks, and refined coastal style on the Red Sea and Arabian Gulf with terracotta roofs.",
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
};

export type SultanatGalleryItem = {
  id: string;
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const SULTANAT_GALLERY_HEADER = {
  eyebrowAr: "معرض المشروع",
  eyebrowEn: "Project Gallery",
  titleAr: "جولة في سلطانة الشرق",
  titleEn: "Tour Sultanat Al Sharq",
};

export const SULTANAT_GALLERY_ITEMS: SultanatGalleryItem[] = [
  {
    id: "hero-aerial",
    src: sultanatAsset("Hero Section - الجزر.png"),
    titleAr: "لقطة جوية",
    titleEn: "Aerial View",
    descAr: "جزر خضراء وقصور قرميدية تمتد في مياه الخليج الصافية",
    descEn: "Green islands and terracotta palaces stretching into clear Gulf waters",
  },
  {
    id: "islands",
    src: sultanatAsset("الجزر.png"),
    titleAr: "نظام الجزر",
    titleEn: "Island System",
    descAr: "تخطيط هندسي يوفّر قطع أراضٍ متصلة مباشرة بالبحر",
    descEn: "Engineering layout delivering land plots directly connected to the sea",
  },
  {
    id: "aerial-detail",
    src: sultanatAsset("Arial Detail.png"),
    titleAr: "الامتداد الجغرافي",
    titleEn: "Geographic Scale",
    descAr: "مساحة ضخمة وواجهة بحرية تمتد على امتداد البصر",
    descEn: "Vast footprint with a seafront stretching as far as the eye can see",
  },
  {
    id: "private-beach",
    src: sultanatAsset("Private Beach - Perspective.png"),
    titleAr: "شاطئ خاص",
    titleEn: "Private Beach",
    descAr: "شواطئ رملية خاصة وإطلالة ساحرة على الخليج العربي",
    descEn: "Private sandy shores with stunning views of the Arabian Gulf",
  },
  {
    id: "palace",
    src: sultanatAsset("Luxury Palace.png"),
    titleAr: "قصر فاخر",
    titleEn: "Luxury Palace",
    descAr: "مسبح خاص يطل على البحر مع مرسى يخت وإطلالة على البحر الأحمر والخليج العربي",
    descEn: "Private sea-facing pool, yacht dock & views of the Red Sea and Arabian Gulf",
  },
  {
    id: "central",
    src: sultanatAsset("Central Zone.png"),
    titleAr: "المنطقة المركزية",
    titleEn: "Central Zone",
    descAr: "منطقة خدمات متكاملة تكمل لوحة الفخامة في المشروع",
    descEn: "Integrated services zone completing the project's luxury canvas",
  },
  {
    id: "infra-1",
    src: sultanatAsset("Infrastructure-1.png"),
    titleAr: "شوارع واسعة",
    titleEn: "Wide Boulevards",
    descAr: "طرق أسفلتية نظيفة وأرصفة فخمة على مستوى الشارع",
    descEn: "Clean asphalt roads and premium street-level pavements",
  },
  {
    id: "infra-2",
    src: sultanatAsset("Infrastructure-2.png"),
    titleAr: "لاندسكيب استوائي",
    titleEn: "Tropical Landscape",
    descAr: "أشجار نخيل مصطفة بدقة على جانبي الطريق",
    descEn: "Meticulously lined palm trees along the boulevard",
  },
  {
    id: "infra-3",
    src: sultanatAsset("Infrastructure-3.png"),
    titleAr: "إنارة ديكورية",
    titleEn: "Decorative Lighting",
    descAr: "أعمدة إنارة منحنية باللونين الذهبي والفضي",
    descEn: "Curved lighting columns in gold and silver",
  },
];

export const SULTANAT_GALLERY = SULTANAT_GALLERY_ITEMS.map((item) => item.src);

export const SULTANAT_ARCHITECTURE = [
  {
    id: "roof",
    titleAr: "أسقف قرميدية",
    titleEn: "Terracotta Roofs",
    descAr: "طراز ساحلي أصيل على البحر الأحمر والخليج العربي",
    descEn: "Authentic coastal character on the Red Sea & Arabian Gulf",
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

