import { binyanAsset } from "@/data/asset-paths";

export const BINYAN_HERO_IMAGE = binyanAsset("hero.svg");
export const BINYAN_COVER_IMAGE = binyanAsset("cover.svg");

export const BINYAN_HERO = {
  eyebrowAr: "شمال الرياض",
  eyebrowEn: "North Riyadh",
  titleAr: "بنيان ريزدنس",
  titleEn: "Binyan Residence",
  taglineAr: "انتظرونا.. قريباً!",
  taglineEn: "Stay tuned.. Coming Soon!",
  subtitleAr: "",
  subtitleEn: "",
};

export type BinyanStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const BINYAN_STATS: BinyanStat[] = [
  {
    value: 6200000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة الإجمالية",
    labelEn: "Total Area",
  },
  {
    value: 3,
    suffixAr: "",
    suffixEn: "",
    labelAr: "محاور رئيسية",
    labelEn: "Core Axes",
  },
  {
    value: 1,
    suffixAr: "",
    suffixEn: "",
    labelAr: "مجتمع ذكي ومستدام",
    labelEn: "Smart & Sustainable Community",
  },
];

export const BINYAN_INTRO = {
  titleAr: "مجتمع جاهز",
  titleEn: "A Ready Community",
  bodyAr:
    "على مساحة استثنائية تتجاوز 6,200,000 متر مربع في أكثر مناطق العاصمة نمواً وحيوية، «بنيان ريزدنس» ليس مجرد مكان للعيش، بل هو صياغة جديدة لمفهوم المجتمعات الذكية والمستدامة.",
  bodyEn:
    "Across an exceptional area exceeding 6,200,000 square meters in one of the capital's fastest-growing districts, Binyan Residence is not merely a place to live — it is a new vision for smart, sustainable communities.",
  image: binyanAsset("1.svg"),
};

export const BINYAN_VISION = {
  titleAr: "رؤية المشروع",
  titleEn: "Project Vision",
  bodyAr:
    "تم التخطيط لهذه المساحة الممتدة لتلبي تطلعات عائلتك وتواكب جيل المستقبل عبر:",
  bodyEn:
    "This vast masterplan is designed to meet your family's aspirations and serve the next generation through:",
};

export const BINYAN_PILLARS = [
  {
    id: "smart-housing",
    titleAr: "مخططات سكنية ذكية",
    titleEn: "Smart Residential Plans",
    descAr:
      "خيارات متنوعة من الوحدات والأراضي المصممة بأعلى معايير الخصوصية والراحة.",
    descEn:
      "A diverse range of units and land parcels designed to the highest standards of privacy and comfort.",
    image: binyanAsset("1.svg"),
  },
  {
    id: "infrastructure",
    titleAr: "بنية تحتية متطورة",
    titleEn: "Advanced Infrastructure",
    descAr:
      "شبكات ومرافق حديثة توفر نمط حياة سلس ومستدام.",
    descEn:
      "Modern networks and facilities enabling a seamless, sustainable lifestyle.",
    image: binyanAsset("2.svg"),
  },
  {
    id: "green-spaces",
    titleAr: "مساحات خضراء ومرافق متكاملة",
    titleEn: "Green Spaces & Integrated Facilities",
    descAr:
      "حدائق ممتدة، مراكز تجارية، وخدمات تعليمية وترفيهية تجعل كل ما تحتاجه على بعد خطوات منك.",
    descEn:
      "Expansive gardens, retail centers, and educational and leisure services — everything you need within steps.",
    image: binyanAsset("3.svg"),
  },
] as const;

export const BINYAN_GALLERY_HEADER = {
  eyebrowAr: "معرض المشروع",
  eyebrowEn: "Project Gallery",
  titleAr: "صور المشروع",
  titleEn: "Project Imagery",
  subtitleAr: "سيتم إضافة صور المشروع قريباً — ترقبوا المزيد",
  subtitleEn: "Project images will be added soon — stay tuned for more",
};

export type BinyanGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const BINYAN_GALLERY: BinyanGallerySlide[] = [
  {
    src: binyanAsset("1.svg"),
    titleAr: "المخطط العام",
    titleEn: "Master Plan",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: binyanAsset("2.svg"),
    titleAr: "الوحدات السكنية",
    titleEn: "Residential Units",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: binyanAsset("3.svg"),
    titleAr: "البنية التحتية",
    titleEn: "Infrastructure",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: binyanAsset("hero.svg"),
    titleAr: "المساحات الخضراء",
    titleEn: "Green Spaces",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
];

export const BINYAN_CTA = {
  titleAr: "بنيان ريزدنس.. قريباً",
  titleEn: "Binyan Residence — Coming Soon",
  subtitleAr: "كن أول من يعرف عند إطلاق المشروع",
  subtitleEn: "Be the first to know when the project launches",
  image: binyanAsset("hero.svg"),
};
