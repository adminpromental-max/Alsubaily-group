import { alshubailyResidenceAsset } from "@/data/asset-paths";

const PHOTOS_DIR = "الشبيلي ريزيدنس صور ";

function residencePhoto(file: string) {
  return alshubailyResidenceAsset(`${PHOTOS_DIR}/${file}`);
}

export const RESIDENCE_HERO_IMAGE = residencePhoto("hero.png");
export const RESIDENCE_COVER_IMAGE = residencePhoto("hero.png");

export const RESIDENCE_HERO_SLIDESHOW = [
  "hero.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.jpeg",
  "10.png",
  "11.png",
  "12.jpeg",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
].map(residencePhoto);

export const RESIDENCE_HERO = {
  eyebrowAr: "الرياض · طريق تركي الأول",
  eyebrowEn: "Riyadh · Turki Al-Awwal Road",
  titleAr: "الشبيلي ريزيدنس",
  titleEn: "Al Shabili Residence",
  taglineAr: "انتظرونا.. قريباً!",
  taglineEn: "Stay tuned.. Coming Soon!",
  subtitleAr:
    "عنوان الفخامة، الشبيلي ريزيدنس قريباً على طريق تركي الأول",
  subtitleEn:
    "An address of luxury — Al Shabili Residence, coming soon on Turki Al-Awwal Road",
};

export type ResidenceStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const RESIDENCE_STATS: ResidenceStat[] = [
  {
    value: 24000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "المساحة الإجمالية",
    labelEn: "Total Area",
  },
  {
    value: 2,
    suffixAr: "",
    suffixEn: "",
    labelAr: "عالم متكامل",
    labelEn: "Integrated Worlds",
  },
  {
    value: 1,
    suffixAr: "",
    suffixEn: "",
    labelAr: "تجربة فريدة",
    labelEn: "Unique Experience",
  },
];

export const RESIDENCE_INTRO = {
  titleAr: "عنوان الفخامة",
  titleEn: "An Address of Luxury",
  bodyAr:
    "على مساحة 24,000 متر مربع في قلب أكثر شوارع العاصمة حيوية ورقيّاً، يولد مشروع «الشبيلي ريزيدنس» ليقدم تجربة سكنية واستثمارية فريدة من نوعها. مفهوم جديد يوازن بدقة بين الخصوصية التامة للمجتمع السكني، والأنشطة الاجتماعية العصرية.",
  bodyEn:
    "Across 24,000 square meters in the heart of the capital's most vibrant and refined streets, Al Shabili Residence delivers a one-of-a-kind residential and investment experience — a new concept balancing complete privacy with contemporary social life.",
  image: residencePhoto("1.png"),
};

export const RESIDENCE_ABOUT = {
  titleAr: "عن المشروع",
  titleEn: "About the Project",
  bodyAr:
    "تم تصميم الشبيلي ريزيدنس ليكون مجتمعاً حيوياً متكاملاً يقدم نمط حياة استثنائي يجمع بين عالمين:",
  bodyEn:
    "Al Shabili Residence is designed as a vibrant integrated community offering an exceptional lifestyle that brings together two worlds:",
};

export const RESIDENCE_PILLARS = [
  {
    id: "compound",
    titleAr: "مجتمع سكني خاص",
    titleEn: "The Compound",
    subtitleAr: "The Compound",
    subtitleEn: "The Compound",
    descAr:
      "بيئة سكنية آمنة ومغلقة توفر أعلى درجات الخصوصية والراحة للسكان، مدعومة بمرافق وخدمات حصرية (نادي صحي، مساحات خضراء، مناطق ترفيهية خاصة).",
    descEn:
      "A secure, gated residential environment offering the highest privacy and comfort, supported by exclusive amenities — a health club, green spaces, and private leisure areas.",
    image: residencePhoto("3.png"),
  },
  {
    id: "promenade",
    titleAr: "بوابة حيوية للزوار",
    titleEn: "The Promenade",
    subtitleAr: "The Promenade",
    subtitleEn: "The Promenade",
    descAr:
      "منطقة تجارية مفتوحة ومصممة بأحدث الطُرز المعمارية على طريق تركي الأول مباشرة، تضم نخبة من المطاعم، المقاهي، والعلامات التجارية الراقية لتكون وجهة نابضة ترحب بالجميع.",
    descEn:
      "An open commercial district designed with the latest architecture directly on Turki Al-Awwal Road — home to elite restaurants, cafés, and premium brands, a vibrant destination welcoming all.",
    image: residencePhoto("7.png"),
  },
] as const;

export const RESIDENCE_BANNER = {
  image: residencePhoto("10.png"),
  imageAltAr: "الشبيلي ريزيدنس — منظور المشروع",
  imageAltEn: "Al Shabili Residence — project perspective",
  titleAr: "حيث تلتقي الخصوصية بالحيوية",
  titleEn: "Where Privacy Meets Vibrancy",
  subtitleAr:
    "مشروع متكامل على طريق تركي الأول يجمع بين مجتمع سكني مغلق وبوابة تجارية نابضة — تجربة لا مثيل لها في قلب الرياض.",
  subtitleEn:
    "An integrated development on Turki Al-Awwal Road combining a gated residential community with a vibrant commercial promenade — an unmatched experience in the heart of Riyadh.",
};

export const RESIDENCE_GALLERY_HEADER = {
  eyebrowAr: "معرض المشروع",
  eyebrowEn: "Project Gallery",
  titleAr: "صور المشروع",
  titleEn: "Project Imagery",
  subtitleAr: "استكشف تصاميم الشبيلي ريزيدنس — من الواجهات إلى التفاصيل المعمارية",
  subtitleEn:
    "Explore Al Shabili Residence designs — from facades to architectural details",
};

export type ResidenceGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

const GALLERY_META: Omit<ResidenceGallerySlide, "src">[] = [
  {
    titleAr: "الواجهة الرئيسية",
    titleEn: "Main Facade",
    descAr: "طريق تركي الأول",
    descEn: "Turki Al-Awwal Road",
  },
  {
    titleAr: "المجتمع السكني",
    titleEn: "Residential Community",
    descAr: "بيئة سكنية خاصة",
    descEn: "Private living environment",
  },
  {
    titleAr: "الفلل السكنية",
    titleEn: "Residential Villas",
    descAr: "تصاميم عصرية فاخرة",
    descEn: "Luxury contemporary designs",
  },
  {
    titleAr: "الحدائق الداخلية",
    titleEn: "Inner Gardens",
    descAr: "مساحات خضراء واسعة",
    descEn: "Expansive green spaces",
  },
  {
    titleAr: "المنظور الخارجي",
    titleEn: "Exterior Perspective",
    descAr: "رؤية معمارية متكاملة",
    descEn: "Integrated architectural vision",
  },
  {
    titleAr: "البوابة التجارية",
    titleEn: "The Promenade",
    descAr: "وجهة تجارية حيوية",
    descEn: "Vibrant commercial destination",
  },
  {
    titleAr: "الواجهة التجارية",
    titleEn: "Commercial Frontage",
    descAr: "على طريق تركي الأول",
    descEn: "On Turki Al-Awwal Road",
  },
  {
    titleAr: "التصميم المعماري",
    titleEn: "Architectural Design",
    descAr: "أحدث الطرز العالمية",
    descEn: "Latest global styles",
  },
  {
    titleAr: "المساحات المفتوحة",
    titleEn: "Open Spaces",
    descAr: "بيئة مريحة للعائلة",
    descEn: "Family-friendly environment",
  },
  {
    titleAr: "المنظور الليلي",
    titleEn: "Night Perspective",
    descAr: "إضاءة معمارية مميزة",
    descEn: "Distinctive architectural lighting",
  },
  {
    titleAr: "الممرات الداخلية",
    titleEn: "Interior Walkways",
    descAr: "تصميم أنيق ومتناسق",
    descEn: "Elegant cohesive design",
  },
  {
    titleAr: "المرافق الترفيهية",
    titleEn: "Leisure Facilities",
    descAr: "خدمات حصرية للسكان",
    descEn: "Exclusive resident amenities",
  },
  {
    titleAr: "المخطط العام",
    titleEn: "Master Plan",
    descAr: "تخطيط مدروس ومتكامل",
    descEn: "Thoughtful integrated planning",
  },
  {
    titleAr: "الوحدات السكنية",
    titleEn: "Residential Units",
    descAr: "خيارات متنوعة",
    descEn: "Diverse options",
  },
  {
    titleAr: "المداخل الرئيسية",
    titleEn: "Main Entrances",
    descAr: "بوابات فخمة",
    descEn: "Grand gateways",
  },
  {
    titleAr: "المساحات الاجتماعية",
    titleEn: "Social Spaces",
    descAr: "لقاءات وفعاليات",
    descEn: "Gatherings & events",
  },
  {
    titleAr: "التفاصيل المعمارية",
    titleEn: "Architectural Details",
    descAr: "دقة في كل عنصر",
    descEn: "Precision in every element",
  },
  {
    titleAr: "المناظر الطبيعية",
    titleEn: "Landscaping",
    descAr: "تنسيق حدائق راقٍ",
    descEn: "Refined garden design",
  },
  {
    titleAr: "المطاعم والمقاهي",
    titleEn: "Restaurants & Cafés",
    descAr: "تجربة طعام راقية",
    descEn: "Premium dining experience",
  },
  {
    titleAr: "الإطلالة العامة",
    titleEn: "General Overview",
    descAr: "رؤية شاملة للمشروع",
    descEn: "Comprehensive project view",
  },
  {
    titleAr: "الواجهة الجانبية",
    titleEn: "Side Elevation",
    descAr: "تفاصيل الواجهات",
    descEn: "Facade details",
  },
  {
    titleAr: "البيئة المحيطة",
    titleEn: "Surrounding Environment",
    descAr: "موقع استراتيجي مميز",
    descEn: "Prime strategic location",
  },
];

const GALLERY_FILES = [
  "hero.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.jpeg",
  "10.png",
  "11.png",
  "12.jpeg",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
];

export const RESIDENCE_GALLERY: ResidenceGallerySlide[] = GALLERY_FILES.map(
  (file, i) => ({
    src: residencePhoto(file),
    ...GALLERY_META[i],
  }),
);

export const RESIDENCE_CTA = {
  titleAr: "الشبيلي ريزيدنس.. قريباً",
  titleEn: "Al Shabili Residence — Coming Soon",
  subtitleAr: "كن أول من يعرف عند إطلاق المشروع",
  subtitleEn: "Be the first to know when the project launches",
  image: residencePhoto("hero.png"),
};
