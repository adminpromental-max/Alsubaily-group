import { alshubailyResidenceAsset } from "@/data/asset-paths";

export const RESIDENCE_HERO_IMAGE = alshubailyResidenceAsset("hero.svg");
export const RESIDENCE_COVER_IMAGE = alshubailyResidenceAsset("cover.svg");

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
    value: 66000,
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
    "على مساحة 66,000 متر مربع في قلب أكثر شوارع العاصمة حيوية ورقيّاً، يولد مشروع «الشبيلي ريزيدنس» ليقدم تجربة سكنية واستثمارية فريدة من نوعها. مفهوم جديد يوازن بدقة بين الخصوصية التامة للمجتمع السكني، والأنشطة الاجتماعية العصرية.",
  bodyEn:
    "Across 66,000 square meters in the heart of the capital's most vibrant and refined streets, Al Shabili Residence delivers a one-of-a-kind residential and investment experience — a new concept balancing complete privacy with contemporary social life.",
  image: alshubailyResidenceAsset("1.svg"),
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
    image: alshubailyResidenceAsset("1.svg"),
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
    image: alshubailyResidenceAsset("2.svg"),
  },
] as const;

export const RESIDENCE_GALLERY_HEADER = {
  eyebrowAr: "معرض المشروع",
  eyebrowEn: "Project Gallery",
  titleAr: "صور المشروع",
  titleEn: "Project Imagery",
  subtitleAr: "سيتم إضافة صور المشروع قريباً — ترقبوا المزيد",
  subtitleEn: "Project images will be added soon — stay tuned for more",
};

export type ResidenceGallerySlide = {
  src: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

export const RESIDENCE_GALLERY: ResidenceGallerySlide[] = [
  {
    src: alshubailyResidenceAsset("1.svg"),
    titleAr: "المجتمع السكني",
    titleEn: "Residential Community",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: alshubailyResidenceAsset("2.svg"),
    titleAr: "البوابة التجارية",
    titleEn: "The Promenade",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
  {
    src: alshubailyResidenceAsset("hero.svg"),
    titleAr: "طريق تركي الأول",
    titleEn: "Turki Al-Awwal Road",
    descAr: "قريباً",
    descEn: "Coming Soon",
  },
];

export const RESIDENCE_CTA = {
  titleAr: "الشبيلي ريزيدنس.. قريباً",
  titleEn: "Al Shabili Residence — Coming Soon",
  subtitleAr: "كن أول من يعرف عند إطلاق المشروع",
  subtitleEn: "Be the first to know when the project launches",
  image: alshubailyResidenceAsset("hero.svg"),
};
