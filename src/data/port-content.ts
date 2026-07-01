import { portAsset } from "@/data/asset-paths";

export const PORT_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1782936265/Alshubaily-Port_s7ggqr.mov";

export const PORT_HERO_POSTER = portAsset("Aerials  (13).png");
export const PORT_VISION_IMAGE = portAsset("Aerials  (11).png");
export const PORT_CTA_BG = portAsset("Port (53).png");

export const PORT_HERO_COPY = {
  eyebrowAr: "الخبر · واجهة بحرية",
  eyebrowEn: "Khobar · Waterfront",
  titleAr: "الشبيلي بورت",
  titleEn: "AlShubaily Port",
  taglineAr: "أيقونة الواجهة البحرية",
  taglineEn: "An Icon of the Waterfront",
  subtitleAr:
    "وجهة ساحلية متكاملة تجمع المارينا الفاخرة، الأبراج السكنية، والتجزئة العالمية — على ساحل الخليج العربي بجوار جسر الملك فهد.",
  subtitleEn:
    "An integrated coastal destination combining a luxury marina, residential towers, and global retail — on the Arabian Gulf shore beside King Fahd Causeway.",
};

export type PortStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

/** Placeholder figures — to be replaced with official project data */
export const PORT_STATS: PortStat[] = [
  {
    value: 1200000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 8,
    labelAr: "أبراج سكنية",
    labelEn: "Residential Towers",
  },
  {
    value: 500,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "مراسٍ بحرية",
    labelEn: "Marina Berths",
  },
  {
    value: 350,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "وحدة تجارية",
    labelEn: "Retail Units",
  },
  {
    value: 12000,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "موقف سيارات",
    labelEn: "Parking Spaces",
  },
];

export const PORT_SHOWCASE_SLIDES = [
  { src: portAsset("Aerials  (13).png"), labelAr: "منظر جوي", labelEn: "Aerial View" },
  { src: portAsset("Port (26).png"), labelAr: "الواجهة البحرية", labelEn: "Waterfront" },
  { src: portAsset("Port (36).png"), labelAr: "المارينا", labelEn: "Marina" },
  { src: portAsset("Port (41).png"), labelAr: "الأبراج", labelEn: "Towers" },
  { src: portAsset("Port (51).png"), labelAr: "الممشى", labelEn: "Promenade" },
] as const;

export type PortDistrict = {
  id: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  image: string;
};

export const PORT_DISTRICTS: PortDistrict[] = [
  {
    id: "marina",
    eyebrowAr: "المنطقة أ",
    eyebrowEn: "Zone A",
    titleAr: "المارينا الفاخرة",
    titleEn: "Luxury Marina",
    bodyAr:
      "مراسٍ حديثة ومرافق يachting عالمية — بوابة بحرية تربط الخبر بالخليج العربي بأناقة لا مثيل لها.",
    bodyEn:
      "State-of-the-art berths and world-class yachting facilities — a maritime gateway linking Khobar to the Arabian Gulf with unmatched elegance.",
    image: portAsset("Port (23).png"),
  },
  {
    id: "promenade",
    eyebrowAr: "المنطقة ب",
    eyebrowEn: "Zone B",
    titleAr: "الممشى الساحلي",
    titleEn: "Coastal Promenade",
    bodyAr:
      "ممشى مفتوح على البحر — مطاعم، مقاهٍ، وإطلالات بانورامية على المارينا والأبراج.",
    bodyEn:
      "An open seafront promenade — dining, cafés, and panoramic views across the marina and towers.",
    image: portAsset("Port (31).png"),
  },
  {
    id: "towers",
    eyebrowAr: "المنطقة ج",
    eyebrowEn: "Zone C",
    titleAr: "الأبراج السكنية",
    titleEn: "Residential Towers",
    bodyAr:
      "أبراج سكنية راقية بإطلالات بحرية — تصميم معماري يعكس هوية الواجهة الساحلية الحديثة.",
    bodyEn:
      "Premium residential towers with sea views — architecture reflecting a modern coastal identity.",
    image: portAsset("Port (40).png"),
  },
  {
    id: "retail",
    eyebrowAr: "المنطقة د",
    eyebrowEn: "Zone D",
    titleAr: "المنطقة التجارية",
    titleEn: "Retail District",
    bodyAr:
      "محلات عالمية ومطاعم فاخرة — تجربة تسوق وترفيه على مستوى وجهات الواجهات البحرية العالمية.",
    bodyEn:
      "Global brands and fine dining — a shopping and leisure experience on par with world-class waterfront destinations.",
    image: portAsset("Port (13).png"),
  },
];

export const PORT_VISION = {
  titleAr: "رؤية المشروع",
  titleEn: "Project Vision",
  bodyAr:
    "الشبيلي بورت ليس مجرد مشروع عقاري — إنه وجهة حياتية متكاملة على ساحل الخليج العربي. يجمع بين الحياة البحرية الفاخرة، السكن الراقي، والتجزئة العالمية في منظومة واحدة تخدم سكان المنطقة الشرقية وزوارها من داخل المملكة وخارجها.",
  bodyEn:
    "AlShubaily Port is more than a real estate project — it is a complete lifestyle destination on the Arabian Gulf. It unites luxury maritime living, premium residences, and global retail in one ecosystem serving Eastern Region residents and visitors from across the Kingdom and beyond.",
  highlights: [
    {
      labelAr: "موقع استراتيجي",
      labelEn: "Strategic Location",
      descAr: "جنوب الخبر — بجوار جسر الملك فهد",
      descEn: "South Khobar — beside King Fahd Causeway",
    },
    {
      labelAr: "وجهة متكاملة",
      labelEn: "Integrated Destination",
      descAr: "مارينا · سكن · تجزئة · ترفيه",
      descEn: "Marina · Residential · Retail · Leisure",
    },
    {
      labelAr: "مشروع رائد",
      labelEn: "Landmark Project",
      descAr: "أيقونة الواجهة البحرية في المنطقة الشرقية",
      descEn: "A waterfront icon in the Eastern Region",
    },
  ],
};

export const PORT_LOCATION = {
  titleAr: "الموقع",
  titleEn: "Location",
  bodyAr:
    "يقع الشبيلي بورت في قلب الخبر على ساحل الخليج العربي — موقع استثنائي يربط المملكة بدول الخليج عبر جسر الملك فهد، ويحيط به منظومة مشاريع مجموعة الشبيلي.",
  bodyEn:
    "AlShubaily Port sits at the heart of Khobar on the Arabian Gulf — an exceptional location linking the Kingdom to the Gulf states via King Fahd Causeway, surrounded by AlShubaily Group's project ecosystem.",
  landmarks: [
    { labelAr: "جسر الملك فهد", labelEn: "King Fahd Causeway" },
    { labelAr: "سلطانة الشرق", labelEn: "Sultanat Al Sharq" },
    { labelAr: "أبراج الشبيلي", labelEn: "AlShubaily High-Rise" },
    { labelAr: "الخبر · المنطقة الشرقية", labelEn: "Khobar · Eastern Region" },
  ],
};

export const PORT_GALLERY = [
  portAsset("Port (3).png"),
  portAsset("Port (4).png"),
  portAsset("Port (6).png"),
  portAsset("Port (9).png"),
  portAsset("Port (10).png"),
  portAsset("Port (19).png"),
  portAsset("Port (20).png"),
  portAsset("Port (22).png"),
  portAsset("Port (28).png"),
  portAsset("Port (29).png"),
  portAsset("Port (33).png"),
  portAsset("Port (38).png"),
  portAsset("Port (42).png"),
  portAsset("Port (46).png"),
] as const;
