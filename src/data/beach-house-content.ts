import { beachHouseAsset } from "@/data/asset-paths";

export const BEACH_HOUSE_HERO_IMAGE = beachHouseAsset("Hero.png");
export const BEACH_HOUSE_BANNER_IMAGE = beachHouseAsset("6.png");

export const BEACH_HOUSE_HERO = {
  eyebrowAr: "المنطقة الشرقية · وجهة ساحلية",
  eyebrowEn: "Eastern Region · Coastal Destination",
  titleAr: "منتجع منزل البحر",
  titleEn: "Maison de la Mer Resort",
  taglineAr: "متعدد الاستخدامات على ساحل الخليج",
  taglineEn: "Multi-use development on the Arabian Gulf",
  subtitleAr:
    "مشروع يضم أعمال بنية تحتية وبنية فوقية — يجمع بين السياحة والمطاعم والمارينا في وجهة متكاملة.",
  subtitleEn:
    "Infrastructure and superstructure development combining tourism, restaurants, and marina in one integrated destination.",
};

export type BeachHouseStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const BEACH_HOUSE_STATS: BeachHouseStat[] = [
  {
    value: 62000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "إجمالي مسطحات البناء",
    labelEn: "Total Building Area",
  },
  {
    value: 3,
    labelAr: "مكونات رئيسية",
    labelEn: "Main Components",
  },
];

export const BEACH_HOUSE_DETAILS = {
  devTypeAr: "بنية تحتية و بنية فوقية",
  devTypeEn: "Infrastructure & superstructure works",
  useAr: "متعدد الاستخدامات",
  useEn: "Multi-use",
};

export const BEACH_HOUSE_COMPONENTS = [
  {
    id: "tourism",
    titleAr: "سياحي",
    titleEn: "Tourism",
    icon: "palm" as const,
  },
  {
    id: "restaurants",
    titleAr: "مطاعم",
    titleEn: "Restaurants",
    icon: "dining" as const,
  },
  {
    id: "marina",
    titleAr: "مارينا",
    titleEn: "Marina",
    icon: "sail" as const,
  },
];

export const BEACH_HOUSE_TOUR = {
  titleAr: "الجولة الكاملة",
  titleEn: "Full Tour",
  subtitleAr: "استكشف رؤية منتجع منزل البحر",
  subtitleEn: "Explore the Maison de la Mer vision",
};

export const BEACH_HOUSE_GALLERY = [
  {
    src: beachHouseAsset("1.jpg"),
    titleAr: "وجهة ساحلية",
    titleEn: "Coastal Destination",
    descAr: "وجهة متكاملة على ساحل الخليج العربي.",
    descEn: "An integrated destination on the Arabian Gulf coast.",
  },
  {
    src: beachHouseAsset("2.jpg"),
    titleAr: "تصميم معماري",
    titleEn: "Architectural Vision",
    descAr: "تصميم يجمع بين الفخامة والطابع الساحلي.",
    descEn: "Design blending luxury with coastal character.",
  },
  {
    src: beachHouseAsset("3.jpg"),
    titleAr: "بيئة متكاملة",
    titleEn: "Integrated Environment",
    descAr: "مساحات مفتوحة ومرافق متعددة الاستخدامات.",
    descEn: "Open spaces and multi-use facilities.",
  },
  {
    src: beachHouseAsset("4.jpg"),
    titleAr: "مساحات مفتوحة",
    titleEn: "Open Spaces",
    descAr: "بيئة طبيعية واسعة للزوار والسكان.",
    descEn: "Expansive natural setting for visitors and residents.",
  },
  {
    src: beachHouseAsset("5.png"),
    titleAr: "رؤية المستقبل",
    titleEn: "Future Vision",
    descAr: "مشروع يرتقي بمفهوم الوجهة الساحلية.",
    descEn: "A project elevating the coastal destination concept.",
  },
];

export const BEACH_HOUSE_BANNER = {
  titleAr: "وجهة متعددة الاستخدامات",
  titleEn: "A Multi-use Destination",
  bodyAr:
    "منتجع منزل البحر يجمع بين البنية التحتية والبنية الفوقية في مشروع واحد — سياحة، مطاعم، ومارينا على مساحة بناء إجمالية 62,000 م².",
  bodyEn:
    "Maison de la Mer combines infrastructure and superstructure in one project — tourism, restaurants, and marina across 62,000 m² of total building area.",
};

export const BEACH_HOUSE_CTA = {
  titleAr: "اكتشف منتجع منزل البحر",
  titleEn: "Discover Maison de la Mer",
  subtitleAr: "تواصل معنا للاطلاع على تفاصيل المشروع وفرص الاستثمار.",
  subtitleEn: "Contact us for project details and investment opportunities.",
  image: beachHouseAsset("4.jpg"),
};
