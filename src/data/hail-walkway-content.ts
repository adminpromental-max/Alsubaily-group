import { hailWalkwayAsset } from "@/data/asset-paths";

export const HAIL_WALKWAY_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1782335127/WhatsApp_Video_2026-06-24_at_5.15.53_PM_cx8ixh.mp4";

export type WalkwayStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const HAIL_WALKWAY_STATS: WalkwayStat[] = [
  {
    value: 120000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة الكلية",
    labelEn: "Total Area",
  },
  {
    value: 350,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "عدد المستثمرين",
    labelEn: "Investors",
  },
  {
    value: 45,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "المباني",
    labelEn: "Buildings",
  },
  {
    value: 200,
    suffixAr: "+",
    suffixEn: "+",
    labelAr: "المحلات التجارية",
    labelEn: "Retail Units",
  },
];

export const HAIL_WALKWAY_HERO = {
  eyebrowAr: "حائل · وجهة سياحية وتجارية",
  eyebrowEn: "Hail · Tourism & Commercial Destination",
  titleAr: "حائل واك واي",
  titleEn: "Hail Walkway",
  subtitleAr:
    "مشروع تجاري متميز يعد الوجهة السياحية الفاخرة بطول 2 كم وأكثر من 200 متجر — قلب حائل الجديد",
  subtitleEn:
    "A distinguished commercial project and luxury tourist destination — 2 km long with 200+ stores, the new heart of Hail",
};

export const HAIL_WALKWAY_TYPE_PANELS = [
  {
    id: "tourism",
    titleAr: "سياحي",
    titleEn: "Tourism",
    descAr: "وجهة فاخرة للعائلات والزوار",
    descEn: "A premium destination for families and visitors",
    image: hailWalkwayAsset("6.jpeg"),
  },
  {
    id: "commercial",
    titleAr: "تجاري",
    titleEn: "Commercial",
    descAr: "أكثر من 200 متجر وعلامة",
    descEn: "200+ stores and retail brands",
    image: hailWalkwayAsset("10.jpeg"),
  },
] as const;

export const HAIL_WALKWAY_GALLERY_HEADER = {
  eyebrowAr: "جولة داخلية",
  eyebrowEn: "Inside Tour",
  titleAr: "جولة داخل الشبيلي واك أواي",
  titleEn: "Tour Inside AlShubaily Walkaway",
  subtitleAr: "اكتشف أرقى التفاصيل المعمارية والتجارية في وجهة حائل",
  subtitleEn: "Discover the finest architectural and commercial details in Hail's destination",
};

export type WalkwayGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

const GALLERY_FILES = Array.from({ length: 15 }, (_, i) => `${i + 1}.jpeg`);

const SLIDE_COPY: Array<Pick<WalkwayGallerySlide, "titleAr" | "titleEn" | "descAr" | "descEn">> = [
  { titleAr: "واجهة عصرية", titleEn: "Modern Facade", descAr: "تصميم معماري راقٍ", descEn: "Refined architecture" },
  { titleAr: "منظر بانورامي", titleEn: "Panoramic View", descAr: "إطلالة واسعة", descEn: "Expansive outlook" },
  { titleAr: "ممرات مشاة", titleEn: "Walkways", descAr: "مسارات مفتوحة", descEn: "Open pathways" },
  { titleAr: "وحدات تجارية", titleEn: "Retail Units", descAr: "واجهات زجاجية", descEn: "Glass storefronts" },
  { titleAr: "ساحات مفتوحة", titleEn: "Open Plazas", descAr: "مساحات للتجمع", descEn: "Gathering spaces" },
  { titleAr: "تجربة عائلية", titleEn: "Family Experience", descAr: "بيئة مريحة", descEn: "Comfortable setting" },
  { titleAr: "إضاءة ليلية", titleEn: "Night Lighting", descAr: "أجواء مميزة", descEn: "Distinct ambiance" },
  { titleAr: "تنوع معماري", titleEn: "Design Variety", descAr: "تفاصيل فاخرة", descEn: "Luxury details" },
  { titleAr: "محلات متنوعة", titleEn: "Diverse Shops", descAr: "خيارات واسعة", descEn: "Wide choices" },
  { titleAr: "مقاهي خارجية", titleEn: "Outdoor Cafés", descAr: "جلوس مفتوح", descEn: "Open seating" },
  { titleAr: "زوايا حيوية", titleEn: "Vibrant Corners", descAr: "نشاط يومي", descEn: "Daily activity" },
  { titleAr: "مدخل رئيسي", titleEn: "Main Entry", descAr: "استقبال فخم", descEn: "Grand welcome" },
  { titleAr: "مسارات خضراء", titleEn: "Green Paths", descAr: "طبيعة ورفاهية", descEn: "Nature & comfort" },
  { titleAr: "تجربة تسوّق", titleEn: "Shopping Tour", descAr: "وجهة متكاملة", descEn: "Integrated hub" },
  { titleAr: "قلب حائل", titleEn: "Heart of Hail", descAr: "موقع استراتيجي", descEn: "Strategic location" },
];

export const HAIL_WALKWAY_GALLERY: WalkwayGallerySlide[] = GALLERY_FILES.map(
  (file, index) => ({
    src: hailWalkwayAsset(file),
    ...SLIDE_COPY[index],
  }),
);

export const HAIL_WALKWAY_HERO_IMAGE = hailWalkwayAsset("2.jpeg");
