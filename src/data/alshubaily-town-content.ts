import { townAsset } from "@/data/asset-paths";

export const TOWN_HERO_IMAGE = townAsset("Hero.png");
export const TOWN_COVER_IMAGE = townAsset("الشبيلي-تاون.png");

export const TOWN_HERO = {
  eyebrowAr: "المنطقة الشرقية · الخبر",
  eyebrowEn: "Eastern Province · Al Khobar",
  titleAr: "الشبيلي تاون",
  titleEn: "AlShubaily Town",
  subtitleAr:
    "تجربة حياة متكاملة تجمع بين الأناقة العصرية والعيش الفاخر — حيث يلتقي الطراز الأندلسي الكلاسيكي بأحدث التقنيات",
  subtitleEn:
    "An integrated living experience blending contemporary elegance with luxury — where classic Andalusian style meets modern technology",
};

export type TownStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const TOWN_STATS: TownStat[] = [
  {
    value: 5993129,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 5000,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "الوحدات السكنية",
    labelEn: "Residential Units",
  },
  {
    value: 3000,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "الغرف الفندقية",
    labelEn: "Hotel Rooms",
  },
  {
    value: 6,
    suffixAr: " كم",
    suffixEn: " km",
    labelAr: "مساحة التطوير البحري",
    labelEn: "Sea Development",
  },
];

export const TOWN_INTRO = {
  titleAr: "قلب المشروع",
  titleEn: "The Heart of the Project",
  bodyAr:
    "الشبيلي تاون ليس مجرد وجهة، بل تجربة حياة متكاملة تجمع بين الأناقة العصرية والعيش الفاخر. يشكّل الشبيلي تاون القلب النابض للمشروع، حيث تتناغم تفاصيل الحياة اليومية مع سحر التجارب الاستثنائية. يلتقي الطراز الأندلسي الكلاسيكي بأحدث التقنيات الحديثة لابتكار بيئة مثالية للتسوق والترفيه والعيش.",
  bodyEn:
    "AlShubaily Town is not just a destination — it is an integrated living experience combining contemporary elegance with luxury living. It forms the vibrant heart of the development, where daily life harmonizes with exceptional experiences. Classic Andalusian style meets the latest technologies to create an ideal environment for shopping, entertainment, and living.",
  image: townAsset("intro.png"),
};

export const TOWN_MASTERPLAN = {
  titleAr: "المخطط الرئيسي للمناطق",
  titleEn: "Master Plan of Zones",
  image: townAsset("landscape.png"),
  zones: [
    { labelAr: "الشبيلي جراند مول", labelEn: "AlShubaily Grand Mall" },
    {
      labelAr: "حلبات السباق ومناطق الترفيه للكبار",
      labelEn: "Racing Tracks & Adult Entertainment",
    },
    { labelAr: "قرية الصيادين", labelEn: "Fishermen's Village" },
    {
      labelAr: "حلبات السباق ومناطق الترفيه للأطفال",
      labelEn: "Racing Tracks & Kids Entertainment",
    },
    { labelAr: "القناة المائية", labelEn: "The Water Canal" },
    { labelAr: "قرية الكرنفال", labelEn: "Carnival Village" },
    { labelAr: "الشبيلي ريزيدنس", labelEn: "AlShubaily Residence" },
    { labelAr: "قرية الحرفيين", labelEn: "Artisans' Village" },
    { labelAr: "مواقف السيارات", labelEn: "Car Parking" },
  ],
};

export const TOWN_ZONES = [
  {
    id: "grand-mall",
    titleAr: "الشبيلي جراند مول",
    titleEn: "AlShubaily Grand Mall",
    descAr:
      "وجهة تجارية رائدة بتصميم أندلسي فاخر — قلب التسوق والترفيه في الشبيلي تاون.",
    descEn:
      "A leading retail destination with luxurious Andalusian design — the shopping and entertainment heart of AlShubaily Town.",
    image: townAsset("grand-mall.png"),
  },
  {
    id: "fishermen",
    titleAr: "قرية الصيادين",
    titleEn: "Fishermen's Village",
    descAr:
      "تجربة بحرية أصيلة تجسّد روح الساحل والتراث في أجواء عائلية مميزة.",
    descEn:
      "An authentic maritime experience capturing coastal heritage in a distinctive family setting.",
    image: townAsset("قرية-الصيادين.png"),
  },
  {
    id: "carnival",
    titleAr: "قرية الكرنفال والحرفيين",
    titleEn: "Carnival & Artisans Village",
    descAr:
      "وجهة ثقافية وترفيهية تجمع بين احتفالات الكرنفال وإبداع الحرفيين المحليين.",
    descEn:
      "A cultural and leisure destination blending carnival celebrations with local artisan creativity.",
    image: townAsset("قرية-الكرنفال-الحرفيين.png"),
  },
  {
    id: "residence",
    titleAr: "الشبيلي ريزيدنس",
    titleEn: "AlShubaily Residence",
    descAr:
      "مجتمع سكني راقٍ يوفر الخصوصية والراحة في قلب المدينة المتكاملة.",
    descEn:
      "An upscale residential community offering privacy and comfort at the heart of the integrated town.",
    image: townAsset("الشبيلي-ريزيدنس.png"),
  },
  {
    id: "entertainment",
    titleAr: "مناطق ترفيهية",
    titleEn: "Entertainment Areas",
    descAr:
      "مساحات ترفيهية متنوعة للكبار والصغار — حلبات سباق ووجهات نشاط مستمر.",
    descEn:
      "Diverse entertainment spaces for all ages — racing tracks and vibrant activity hubs.",
    image: townAsset("مناطق-ترفيهيه.png"),
  },
] as const;

export const TOWN_LOCATION = {
  titleAr: "فخامة الموقع",
  titleEn: "Luxury of Location",
  subtitleAr: "موقع استراتيجي على ضفاف الخبر",
  subtitleEn: "A strategic address on the Al Khobar waterfront",
  image: townAsset("location.png"),
  highlights: [
    {
      labelAr: "1 دقيقة من جسر الملك فهد",
      labelEn: "1 min from King Fahd Causeway",
    },
    {
      labelAr: "5 دقائق من منتجع الشبيلي",
      labelEn: "5 min from AlShubaily Resort",
    },
    {
      labelAr: "16 دقيقة من إثراء",
      labelEn: "16 min from Ithra",
    },
    {
      labelAr: "18 دقيقة من جامعة الملك فهد",
      labelEn: "18 min from KFUPM",
    },
    {
      labelAr: "38 دقيقة من مطار الملك فهد",
      labelEn: "38 min from King Fahd Airport",
    },
  ],
};

export const TOWN_GALLERY_HEADER = {
  eyebrowAr: "جولة بصرية",
  eyebrowEn: "Visual Tour",
  titleAr: "اكتشف الشبيلي تاون",
  titleEn: "Discover AlShubaily Town",
  subtitleAr: "لمحات سينمائية من أرقى تفاصيل المشروع",
  subtitleEn: "Cinematic glimpses of the project's finest details",
};

export type TownGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const TOWN_GALLERY: TownGallerySlide[] = [
  { src: townAsset("1.png"), titleAr: "واجهة المدينة", titleEn: "Town Facade", descAr: "أناقة معمارية على الواجهة البحرية", descEn: "Architectural elegance on the waterfront" },
  { src: townAsset("2.png"), titleAr: "الممرات المفتوحة", titleEn: "Open Promenades", descAr: "مساحات للتجول والجلوس", descEn: "Spaces for strolling and gathering" },
  { src: townAsset("3.png"), titleAr: "التفاصيل المعمارية", titleEn: "Architectural Details", descAr: "طراز أندلسي بلمسة عصرية", descEn: "Andalusian style with a modern touch" },
  { src: townAsset("4.png"), titleAr: "البيئة السكنية", titleEn: "Residential Setting", descAr: "عيش فاخر في قلب المدينة", descEn: "Luxury living at the town's heart" },
  { src: townAsset("5.jpg"), titleAr: "القناة المائية", titleEn: "Water Canal", descAr: "ممر مائي يربط مناطق المشروع", descEn: "A waterway linking project zones" },
  { src: townAsset("6.jpg"), titleAr: "الإطلالة البحرية", titleEn: "Seafront View", descAr: "وجهة ساحلية استثنائية", descEn: "An exceptional coastal destination" },
  { src: townAsset("7.png"), titleAr: "المخطط الشامل", titleEn: "Master Overview", descAr: "رؤية شاملة للتطوير", descEn: "A comprehensive vision of the development" },
  { src: townAsset("F  -   13  - 02.jpg"), titleAr: "الواجهة الليلية", titleEn: "Night Facade", descAr: "أجواء مضيئة ساحرة", descEn: "Enchanting illuminated ambiance" },
  { src: townAsset("F  -   17.jpg"), titleAr: "الساحات المفتوحة", titleEn: "Open Plazas", descAr: "مساحات حيوية للعائلات", descEn: "Vibrant family spaces" },
  { src: townAsset("F  -   19.jpg"), titleAr: "التجربة البحرية", titleEn: "Maritime Experience", descAr: "حياة ساحلية راقية", descEn: "Refined coastal living" },
  { src: townAsset("F  -   25.jpg"), titleAr: "روح المدينة", titleEn: "Town Spirit", descAr: "وجهة متكاملة على البحر", descEn: "An integrated seaside destination" },
];

export const TOWN_CTA = {
  titleAr: "الشبيلي تاون",
  titleEn: "AlShubaily Town",
  subtitleAr: "اكتشف أسلوب الحياة المتكامل على ضفاف الخبر",
  subtitleEn: "Discover integrated living on the Al Khobar waterfront",
  image: townAsset("Hero.png"),
};

export const TOWN_GALLERY_IMAGES = TOWN_GALLERY.map((s) => s.src);
