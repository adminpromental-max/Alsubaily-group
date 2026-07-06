import { portAsset } from "@/data/asset-paths";

export const PORT_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1782936265/Alshubaily-Port_s7ggqr.mov";

export const PORT_HERO_IMAGE = portAsset("Aerials  (11).png");
/** @deprecated use PORT_HERO_IMAGE */
export const PORT_HERO_POSTER = PORT_HERO_IMAGE;
export const PORT_VISION_IMAGE = portAsset("Aerials  (13).png");
export const PORT_CTA_BG = portAsset("Port (53).png");

export const PORT_HERO_COPY = {
  eyebrowAr: "الخبر · واجهة بحرية",
  eyebrowEn: "Khobar · Waterfront",
  titleAr: "الشبيلي بورت",
  titleEn: "AlShubaily Port",
  taglineAr: "وجهة متكاملة ومقصداً للرفاهية",
  taglineEn: "An Integrated Destination of Luxury",
  subtitleAr:
    "الشبيلي بورت وهو مشروع ساحلي ضخم يمتد على واجهة بحرية ساحرة مباشرة على الخليج العربي، صُمم المشروع ليكون وجهة متكاملة ومقصداً للرفاهية، حيث يدمج بين الوحدات السكنية الفاخرة ذات الإطلالات البحرية، والمنتجعات السياحية المستوحاة من الطراز العالمي، بالإضافة إلى منطقة تجارية نابضة بالحياة.",
  subtitleEn:
    "AlShubaily Port is a vast coastal project along a stunning waterfront directly on the Arabian Gulf — an integrated luxury destination combining premium sea-view residences, internationally inspired resorts, and a vibrant commercial district.",
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
    value: 1000000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة الإجمالية",
    labelEn: "Total Area",
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
    "ويأتي هذا المشروع الطموح ليعيد تعريف مفهوم المباني الساحلية الفاخرة، مستلهماً روح ومنهجية الوجهات السياحية العالمية الكبرى، حيث يلتقي الهدوء البحري الممتد مع أرقى تفاصيل الحياة المدنية الحديثة.",
  bodyEn:
    "This ambitious project redefines luxury coastal living, inspired by the spirit and methodology of major global tourism destinations — where extended maritime tranquility meets the finest details of modern urban life.",
  highlights: [
    {
      labelAr: "مليون متر مربع",
      labelEn: "One Million m²",
      descAr: "مساحة إجمالية للمشروع",
      descEn: "Total project area",
    },
    {
      labelAr: "أكثر من 1.5 كم",
      labelEn: "1.5+ km",
      descAr: "واجهة بحرية مباشرة على الخليج العربي",
      descEn: "Direct waterfront on the Arabian Gulf",
    },
    {
      labelAr: "موقع استراتيجي",
      labelEn: "Strategic Location",
      descAr: "بجوار جسر الملك فهد",
      descEn: "Beside King Fahd Causeway",
    },
  ],
};

export const PORT_LOCATION = {
  titleAr: "الموقع",
  titleEn: "Location",
  bodyAr:
    "ويمتد المشروع على مساحة إجمالية تقدر بمليون متر مربع في موقع استراتيجي استثنائي بجوار جسر الملك فهد وبواجهة بحرية بامتداد مباشر بأكثر من كيلو ونصف على ساحل الخليج العربي.",
  bodyEn:
    "The project spans one million square meters in an exceptionally strategic location beside King Fahd Causeway, with a direct seafront extending more than one and a half kilometers along the Arabian Gulf coast.",
  landmarks: [
    { labelAr: "جسر الملك فهد", labelEn: "King Fahd Causeway" },
    { labelAr: "واجهة بحرية +1.5 كم", labelEn: "1.5+ km Waterfront" },
    { labelAr: "الخليج العربي", labelEn: "Arabian Gulf" },
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
