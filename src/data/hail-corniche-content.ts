import { hailCornicheAsset } from "@/data/asset-paths";

export const HAIL_CORNICHE_HERO_IMAGE = hailCornicheAsset("Hero-section.png");

export const HAIL_CORNICHE_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1782490740/%D9%83%D9%88%D8%B1%D9%86%D9%8A%D8%B4_%D8%A7%D9%84%D8%AD%D8%A7%D9%8A%D9%94%D9%84_vaojy3.mov";

export const HAIL_CORNICHE_HERO = {
  eyebrowAr: "حائل · كورنيش بري",
  eyebrowEn: "Hail · Land Corniche",
  titleAr: "كورنيش حائل",
  titleEn: "Hail Corniche",
  taglineAr: "الكورنيش البري الأول من نوعه على مستوى المملكة",
  taglineEn: "The Kingdom's First Land Corniche of Its Kind",
  subtitleAr:
    "استغلال البيئة الطبيعية لوادي الأديرع وتحويله إلى وجهة استثمارية تجارية وسياحية وترفيهية — بيئة تجمعات سكنية راقية في قلب مدينة حائل",
  subtitleEn:
    "Transforming Wadi Al-Adair'a's natural environment into a commercial, tourism, and entertainment investment destination — premium residential communities at the heart of Hail",
};

export type CornicheStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
  textAr?: string;
  textEn?: string;
};

export const HAIL_CORNICHE_STATS: CornicheStat[] = [
  {
    value: 2500000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المشروع",
    labelEn: "Project Area",
  },
  {
    value: 0,
    labelAr: "الأول من نوعه",
    labelEn: "First of Its Kind",
    textAr: "الأول",
    textEn: "1st",
  },
  {
    value: 3,
    labelAr: "محاور رئيسية",
    labelEn: "Major Axes",
  },
];

export type CornicheJourneyStop = {
  id: string;
  step: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
};

export const HAIL_CORNICHE_JOURNEY: CornicheJourneyStop[] = [
  {
    id: "wadi",
    step: 1,
    titleAr: "وادي الأديرع",
    titleEn: "Wadi Al-Adair'a",
    descAr: "بيئة طبيعية فريدة تحولت إلى مسار كورنيش بري متكامل",
    descEn: "A unique natural setting transformed into an integrated land corniche route",
    image: hailCornicheAsset("1.png"),
  },
  {
    id: "layout",
    step: 2,
    titleAr: "تقسيم الكورنيش",
    titleEn: "Corniche Layout",
    descAr: "تخطيط مدروس يوزّع المناطق التجارية والسياحية والسكنية بانسجام",
    descEn: "Thoughtful planning harmonizing commercial, tourism, and residential zones",
    image: hailCornicheAsset("2.png"),
  },
  {
    id: "commercial",
    step: 3,
    titleAr: "وجهة تجارية وسياحية",
    titleEn: "Commercial & Tourism Hub",
    descAr: "بيئة استقطاب للاستثمار التجاري والسياحي والترفيهي",
    descEn: "An magnet for commercial, tourism, and entertainment investment",
    image: hailCornicheAsset("3.png"),
  },
  {
    id: "stone",
    step: 4,
    titleAr: "حجر طبيعي وسواتر",
    titleEn: "Natural Stone & Barriers",
    descAr: "سواتر خرسانية وكسوات من الحجر الطبيعي من بيئة المنطقة",
    descEn: "Concrete barriers clad in natural stone sourced from the local environment",
    image: hailCornicheAsset("4.png"),
  },
  {
    id: "residential",
    step: 5,
    titleAr: "تجمعات سكنية راقية",
    titleEn: "Premium Residential",
    descAr: "مجتمعات سكنية فاخرة مرتبطة بالطرق الرئيسية المحيطة",
    descEn: "Upscale residential communities linked to surrounding major roads",
    image: hailCornicheAsset("5.png"),
  },
];

export const HAIL_CORNICHE_CONNECT = {
  titleAr: "موقع استراتيجي",
  titleEn: "Strategic Location",
  subtitleAr: "في قلب مدينة حائل",
  subtitleEn: "At the Heart of Hail City",
  bodyAr:
    "يقع المشروع بين أهم الطرق الرئيسية — طريق الملك فهد الدائري الجنوبي، وطريق المدينة، وطريق المطار من الجنوب، وطريق الدائري من الشرق.",
  bodyEn:
    "Positioned among Hail's key arteries — King Fahd South Ring Road, Medina Road, Airport Road to the south, and the Eastern Ring Road.",
  roads: [
    { labelAr: "طريق الملك فهد الدائري", labelEn: "King Fahd Ring Road" },
    { labelAr: "طريق المدينة", labelEn: "Medina Road" },
    { labelAr: "طريق المطار", labelEn: "Airport Road" },
    { labelAr: "الطريق الدائري الشرقي", labelEn: "Eastern Ring Road" },
  ],
};

export const HAIL_CORNICHE_CTA = {
  titleAr: "اكتشف كورنيش حائل",
  titleEn: "Discover Hail Corniche",
  subtitleAr: "مشروع مكتمل — وجهة جاهزة للاستثمار والحياة",
  subtitleEn: "A completed project — ready for investment and living",
};

export const HAIL_CORNICHE_GALLERY = [
  hailCornicheAsset("Hero-section.png"),
  ...HAIL_CORNICHE_JOURNEY.map((s) => s.image),
];
