import { tidaraAsset } from "@/data/asset-paths";

/** Cloudinary cinematic hero — preferred over local mp4 for delivery */
export const TIDARA_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1781801274/Cinematic_architectural_film__on4pal.mp4";

export const TIDARA_PDF_URL = encodeURI(
  "/assets/projects/Elshubaily Tidara Towers - Draft Plans - Cube -  ( 01-04-2026).pdf",
);

export type TidaraStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

/** Hero stats — Cube draft plans 01.04.2026 (see TIDARA_PROGRAM for plot breakdown) */
export const TIDARA_STATS: TidaraStat[] = [
  {
    value: 43400,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة التركيبية",
    labelEn: "Total Built-Up Area",
  },
  {
    value: 3,
    labelAr: "مبانٍ رئيسية",
    labelEn: "Main Buildings",
  },
  {
    value: 29,
    labelAr: "طوابق أعلى برج",
    labelEn: "Tallest Tower Floors",
  },
  {
    value: 63,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "وحدة سكنية",
    labelEn: "Residential Units",
  },
];

export const TIDARA_HERO = {
  eyebrowAr: "الخبر · بوابة ساحلية",
  eyebrowEn: "Al Khobar · Coastal Gateway",
  titleAr: "أبراج تيدارا",
  titleEn: "Tidara Towers",
  subtitleAr:
    "حافة حية بين المدينة والبحر — وجهة ساحلية متكاملة على مارينا الخبر",
  subtitleEn:
    "A living edge between city and sea — an integrated waterfront destination on Al Khobar marina",
};

export const TIDARA_INTRO = {
  eyebrowAr: "المفهوم التصميمي",
  eyebrowEn: "Design Concept",
  titleAr: "رؤية المشروع",
  titleEn: "Project Vision",
  quoteAr: "حافة حية بين المدينة والبحر",
  quoteEn: "A living edge between city and sea",
  etymologyAr: "Tide + -dara",
  etymologyDetailAr:
    "من «Tide» — إيقاع المارينا وحركة الماء — و«-dara» — خطوط متدفقة وأناقة معمارية",
  etymologyDetailEn:
    "From “Tide” — marina rhythm and water movement — and “-dara” — flowing lines and architectural elegance",
  leadAr:
    "تُصمَّم أبراج تيدارا كبوابة حضرية ساحلية جديدة على مارينا الخبر، حيث تندمج العمارة والمناظر الطبيعية والحياة العامة في تجربة واحدة.",
  leadEn:
    "Tidara Towers is envisioned as a new urban waterfront gateway on Al Khobar marina, where architecture, landscape, and public life merge into one experience.",
  bodyAr:
    "يحوّل المشروع الشاطئ من مساحة سلبية إلى حافة مدنية نشطة ومحوراً اجتماعياً يومياً. ثلاثة مبانٍ — فندقي وإداري وسكني — مرتبطة ببوديوم عام وبرج مركزي أسطواني يمنح إطلالة 360° على الخليج.",
  bodyEn:
    "The development transforms a passive shoreline into an active civic edge and daily social hub. Three buildings — hotel, administrative, and residential — link through a public podium and a central cylindrical tower with 360° Gulf views.",
};

export type TidaraIntroHighlight = {
  id: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const TIDARA_INTRO_HIGHLIGHTS: TidaraIntroHighlight[] = [
  {
    id: "gateway",
    titleAr: "بوابة المارينا",
    titleEn: "Marina Gateway",
    bodyAr: "وجهة ساحلية تربط الحي الحضري بالمارينا والخليج",
    bodyEn: "A coastal node linking the urban district to the marina and the Gulf",
  },
  {
    id: "walkable",
    titleAr: "تجربة مشي متصلة",
    titleEn: "Walkable Continuum",
    bodyAr: "ممشى عام ينشّط الواجهة ويحوّلها إلى حياة يومية",
    bodyEn: "A continuous public promenade that activates the waterfront daily",
  },
  {
    id: "integrated",
    titleAr: "برج مركزي متكامل",
    titleEn: "Integrated Landmark",
    bodyAr: "بوديوم يربط المبانٍ وبرجاً أسطوانياً بإطلالة بانورامية",
    bodyEn: "A shared podium and cylindrical tower with panoramic views",
  },
];

export type TidaraAlternatingSection = {
  id: string;
  image: string;
  imageAltAr: string;
  imageAltEn: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const TIDARA_ALTERNATING: TidaraAlternatingSection[] = [
  {
    id: "residential",
    image: tidaraAsset("walkthrough-1.png"),
    imageAltAr: "وحدات سكنية فاخرة في أبراج تيدارا",
    imageAltEn: "Premium residential units at Tidara Towers",
    eyebrowAr: "سكني",
    eyebrowEn: "Residential",
    titleAr: "63+ وحدة سكنية",
    titleEn: "63+ Residential Units",
    bodyAr:
      "مبنى سكني G+11 بمساحة أرض 2,696 م² ومساحة تركيبية 11,940 م². وحدات بمساحات 110–156 م² مع تراسات متدرجة ومنطقة تجمع مشتركة، باستراتيجية كتلة متدرجة تقلل عدد الوحدات في الطوابق العليا لرفع جودة المساحات.",
    bodyEn:
      "A G+11 residential building on a 2,696 m² plot with 11,940 m² BUA. Apartment units of 110–156 m² with stepped terraces and shared gathering areas, following a stepped massing strategy that reduces unit count on upper floors for enhanced spatial quality.",
  },
  {
    id: "commercial",
    image: tidaraAsset("Office.png"),
    imageAltAr: "البرج الإداري والمكاتب التجارية في أبراج تيدارا",
    imageAltEn: "Administrative tower and commercial offices at Tidara Towers",
    eyebrowAr: "تجاري · إداري",
    eyebrowEn: "Commercial · Admin",
    titleAr: "116 مكتباً ومساحات تجارية",
    titleEn: "116 Offices & Retail Spaces",
    bodyAr:
      "مبنى إداري G+29 بمساحة تركيبية 19,520 م² — أعلى أبراج المشروع. طابق أرضي للمطاعم والمقاهي، و30 طابقاً typical بمكاتب 160 م² لكل مكتب، مع Sky Lounge في الطابق الأول. البوديوم يربط المبانٍ ويُنشّط الواجهة الحضرية.",
    bodyEn:
      "A G+29 administrative tower with 19,520 m² BUA — the project's tallest. Ground-floor F&B, 30 typical floors with 160 m² offices (116 total), and a first-floor Sky Lounge. The podium links all buildings and activates the urban frontage.",
  },
  {
    id: "hotel",
    image: tidaraAsset("Hotel.png"),
    imageAltAr: "برج الفندق على الواجهة البحرية — بوابة المارينا",
    imageAltEn: "Waterfront hotel tower — marina gateway",
    eyebrowAr: "فندقي · ضيافة",
    eyebrowEn: "Hotel · Hospitality",
    titleAr: "فندق G+11 على الواجهة البحرية",
    titleEn: "G+11 Waterfront Hotel",
    bodyAr:
      "مبنى فندقي بمساحة أرض 3,500 م² و11,940 م² تركيبية. G+11 مع لوبي 280 م²، SPA، صالة رياضية، ومطعم رئيسي. طوابق typical بـ 14–16 غرفة (45–90 م²) — 70% غرف 45 م² و30% أجنحة 60–90 م². الواجهة البارامترية تربط البوديوم بالبرج والمارينا.",
    bodyEn:
      "Hotel building on a 3,500 m² plot with 11,940 m² BUA. G+11 with a 280 m² lobby, SPA, gymnasium, and main dining. Typical floors host 14–16 rooms (45–90 m²) — 70% at 45 m² and 30% suites at 60–90 m². Parametric façades connect podium, tower, and marina into one gesture.",
  },
];

export const TIDARA_BANNER = {
  image: tidaraAsset("tower-night.png"),
  imageAltAr: "بانوراما أبراج تيدارا على الخليج العربي",
  imageAltEn: "Tidara Towers panorama on the Arabian Gulf",
  titleAr: "بوابتك على الخليج",
  titleEn: "Your Gateway to the Gulf",
  subtitleAr: "وجهة ساحلية حيث تلتقي المدينة بالبحر",
  subtitleEn: "A coastal destination where the city meets the sea",
};

export type TidaraGalleryItem = {
  id: string;
  image: string;
  tagAr: string;
  tagEn: string;
  altAr: string;
  altEn: string;
  descAr: string;
  descEn: string;
};

export const TIDARA_GALLERY: TidaraGalleryItem[] = [
  {
    id: "hotel",
    image: tidaraAsset("Hotel.png"),
    tagAr: "فندقي",
    tagEn: "Hotel",
    altAr: "برج الفندق على الواجهة البحرية",
    altEn: "Waterfront hotel tower",
    descAr: "مبنى فندقي G+11 بإطلالة على المارينا والخليج — لوبي، SPA، ومطاعم راقية",
    descEn: "G+11 hotel with marina and Gulf views — lobby, SPA, and fine dining",
  },
  {
    id: "office",
    image: tidaraAsset("Office.png"),
    tagAr: "إداري · مكاتب",
    tagEn: "Office · Commercial",
    altAr: "البرج الإداري والمكاتب التجارية",
    altEn: "Administrative tower and commercial offices",
    descAr: "برج إداري G+29 — 116 مكتباً بمساحة 160 م² وSky Lounge في الطابق الأول",
    descEn: "G+29 admin tower — 116 offices at 160 m² each and a first-floor Sky Lounge",
  },
  {
    id: "sales",
    image: tidaraAsset("Sales.png"),
    tagAr: "تجاري · مبيعات",
    tagEn: "Retail · Sales",
    altAr: "المساحات التجارية ومناطق المبيعات",
    altEn: "Retail spaces and sales areas",
    descAr: "طابق أرضي للمطاعم والمقاهي ومساحات تجارية تُنشّط الواجهة الحضرية",
    descEn: "Ground-floor F&B, cafés, and retail activating the urban waterfront",
  },
  {
    id: "residential",
    image: tidaraAsset("walkthrough-2.png"),
    tagAr: "سكني",
    tagEn: "Residential",
    altAr: "الوحدات السكنية في أبراج تيدارا",
    altEn: "Residential units at Tidara Towers",
    descAr: "63+ وحدة سكنية بمساحات 110–156 م² مع تراسات متدرجة وإطلالة بانورامية",
    descEn: "63+ units of 110–156 m² with stepped terraces and panoramic views",
  },
  {
    id: "masterplan",
    image: tidaraAsset("Masterplan.png"),
    tagAr: "مخطط عام",
    tagEn: "Master Plan",
    altAr: "المخطط العام لمشروع أبراج تيدارا",
    altEn: "Tidara Towers master plan",
    descAr: "تخطيط متكامل يربط الفندق والإداري والسكني عبر بوديوم عام وممشى ساحلي",
    descEn: "Integrated layout linking hotel, admin, and residential via a public podium and promenade",
  },
  {
    id: "3d",
    image: tidaraAsset("3D-Tower.png"),
    tagAr: "تصور ثلاثي الأبعاد",
    tagEn: "3D Visualization",
    altAr: "تصور ثلاثي الأبعاد لأبراج تيدارا",
    altEn: "Tidara Towers 3D visualization",
    descAr: "برج مركزي أسطواني بإطلالة 360° على الخليج العربي",
    descEn: "Central cylindrical tower with 360° views of the Arabian Gulf",
  },
  {
    id: "facade",
    image: tidaraAsset("elevation-facade.png"),
    tagAr: "واجهة معمارية",
    tagEn: "Architectural Façade",
    altAr: "واجهة البرج — تصميم بارامتري",
    altEn: "Tower façade — parametric design",
    descAr: "واجهات بارامترية تربط البوديوم بالبرج والمارينا في إيماءة واحدة",
    descEn: "Parametric façades connecting podium, tower, and marina into one gesture",
  },
  {
    id: "panorama",
    image: tidaraAsset("panorama.png"),
    tagAr: "بانوراما",
    tagEn: "Panorama",
    altAr: "بانوراما أبراج تيدارا على الخليج",
    altEn: "Tidara Towers panorama on the Gulf",
    descAr: "منظر شامل للمشروع على مارينا الخبر والخليج العربي",
    descEn: "Full project view on Al Khobar marina and the Arabian Gulf",
  },
  {
    id: "night",
    image: tidaraAsset("tower-night.png"),
    tagAr: "منظر ليلي",
    tagEn: "Night View",
    altAr: "أبراج تيدارا في الإضاءة الليلية",
    altEn: "Tidara Towers at night",
    descAr: "تصور ليلي يُبرز الإضاءة المعمارية والحياة على الواجهة البحرية",
    descEn: "Night rendering highlighting architectural lighting and waterfront life",
  },
  {
    id: "wt-1",
    image: tidaraAsset("walkthrough-1.png"),
    tagAr: "جولة بصرية",
    tagEn: "Walkthrough",
    altAr: "جولة في المشروع — المنظور الخارجي",
    altEn: "Project walkthrough — exterior perspective",
    descAr: "منظور خارجي يُظهر العلاقة بين المباني والمارينا",
    descEn: "Exterior perspective showing the relationship between buildings and marina",
  },
  {
    id: "wt-3",
    image: tidaraAsset("walkthrough-3.png"),
    tagAr: "جولة بصرية",
    tagEn: "Walkthrough",
    altAr: "جولة في المشروع — البوديوم والممشى",
    altEn: "Project walkthrough — podium and promenade",
    descAr: "البوديوم العام والممشى الساحلي الذي يربط المباني الثلاثة",
    descEn: "Public podium and coastal promenade linking all three buildings",
  },
  {
    id: "wt-4",
    image: tidaraAsset("walkthrough-4.png"),
    tagAr: "جولة بصرية",
    tagEn: "Walkthrough",
    altAr: "جولة في المشروع — الواجهة البحرية",
    altEn: "Project walkthrough — waterfront frontage",
    descAr: "الواجهة البحرية النشطة والمساحات العامة على مستوى الأرض",
    descEn: "Active waterfront frontage and ground-level public spaces",
  },
  {
    id: "wt-5",
    image: tidaraAsset("walkthrough-5.png"),
    tagAr: "جولة بصرية",
    tagEn: "Walkthrough",
    altAr: "جولة في المشروع — المنظور الجوي",
    altEn: "Project walkthrough — aerial perspective",
    descAr: "منظور جوي يُظهر كتلة المشروع وعلاقته بالمارينا",
    descEn: "Aerial view showing the project massing and its marina connection",
  },
  {
    id: "wt-6",
    image: tidaraAsset("walkthrough-6.png"),
    tagAr: "جولة بصرية",
    tagEn: "Walkthrough",
    altAr: "جولة في المشروع — التفاصيل المعمارية",
    altEn: "Project walkthrough — architectural details",
    descAr: "تفاصيل معمارية ومواد الواجهة في الإضاءة الطبيعية",
    descEn: "Architectural details and façade materials in natural light",
  },
];

export const TIDARA_GALLERY_HEADER = {
  eyebrowAr: "جولة بصرية",
  eyebrowEn: "Visual Tour",
  titleAr: "اكتشف أبراج تيدارا",
  titleEn: "Explore Tidara Towers",
};

/** Building program summary from draft plans */
export const TIDARA_PROGRAM = {
  locationAr: "الخبر، المنطقة الشرقية، المملكة العربية السعودية",
  locationEn: "Al Khobar, Eastern Province, Saudi Arabia",
  /** p.4 — footprint of the 6-parcel tower cluster (Hotel + Admin + Residential) */
  clusterPlotAreaM2: 8909,
  /** Sum of individual building plot areas (pp.5–7) */
  buildingPlotsSumM2: 8932,
  totalBuaM2: 43400,
  buildings: [
    {
      nameAr: "فندق",
      nameEn: "Hotel",
      plotM2: 3500,
      buaM2: 11940,
      floors: "G+11",
    },
    {
      nameAr: "إداري",
      nameEn: "Admin",
      plotM2: 2736,
      buaM2: 19520,
      floors: "G+29",
      offices: 116,
    },
    {
      nameAr: "سكني",
      nameEn: "Residential",
      plotM2: 2696,
      buaM2: 11940,
      floors: "G+11",
      units: 63,
    },
  ],
};
