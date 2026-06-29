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

export const BEACH_HOUSE_GALLERY = [
  {
    src: beachHouseAsset("1.jpg"),
    titleAr: "وجهة ساحلية",
    titleEn: "Coastal Destination",
  },
  {
    src: beachHouseAsset("2.jpg"),
    titleAr: "تصميم معماري",
    titleEn: "Architectural Vision",
  },
  {
    src: beachHouseAsset("3.jpg"),
    titleAr: "بيئة متكاملة",
    titleEn: "Integrated Environment",
  },
  {
    src: beachHouseAsset("4.jpg"),
    titleAr: "مساحات مفتوحة",
    titleEn: "Open Spaces",
  },
  {
    src: beachHouseAsset("5.png"),
    titleAr: "رؤية المستقبل",
    titleEn: "Future Vision",
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
