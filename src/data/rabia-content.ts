import { rabiaAsset } from "@/data/asset-paths";

export const RABIA_VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1781890952/Cinematic_architectural_film__aov98s.mp4";

export type RabiaStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const RABIA_STATS: RabiaStat[] = [
  {
    value: 230000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "إجمالي المساحة",
    labelEn: "Total Area",
  },
  {
    value: 3,
    labelAr: "أبراج فاخرة",
    labelEn: "Luxury Towers",
  },
  {
    value: 6,
    suffixAr: " كم",
    suffixEn: " km",
    labelAr: "من المسجد الحرام",
    labelEn: "From Masjid Al-Haram",
  },
  {
    value: 1,
    labelAr: "مسجد مركزي كبير",
    labelEn: "Grand Central Mosque",
  },
  {
    value: 257,
    labelAr: "محل تجاري",
    labelEn: "Commercial Stores",
  },
];

export const RABIA_HERO = {
  eyebrowAr: "مكة المكرمة · بوابة الروح والفخامة",
  eyebrowEn: "Makkah Al-Mukarramah · A Gateway of Spirit & Grandeur",
  titleAr: "الشبيلي وأهل البيت",
  titleEn: "AlShubaily & Ahl al-Bayt",
  subtitleAr:
    "وجهة متكاملة تجمع بين عظمة الموروث الإسلامي وأرقى معايير الحياة العصرية — على أرض المقدسات",
  subtitleEn:
    "An integrated destination blending the grandeur of Islamic heritage with the finest contemporary living — on sacred ground",
};

export const RABIA_INTRO = {
  eyebrowAr: "رؤية المشروع",
  eyebrowEn: "Project Vision",
  titleAr: "حيث يلتقي التراث بالفخامة والتميز",
  titleEn: "Where Heritage Meets Grandeur & Excellence",
  quoteAr: "مدينة داخل المدينة — على مقربة من قلب الإسلام",
  quoteEn: "A city within a city — steps away from the heart of Islam",
};

export type RabiaIntroHighlight = {
  id: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const RABIA_INTRO_HIGHLIGHTS: RabiaIntroHighlight[] = [
  {
    id: "spiritual",
    titleAr: "الروح والتراث",
    titleEn: "Spirit & Heritage",
    bodyAr: "مسجد مركزي كبير يُجسّد عظمة العمارة الإسلامية في قلب المشروع",
    bodyEn:
      "A grand central mosque embodying Islamic architectural magnificence at the project's heart",
  },
  {
    id: "luxury",
    titleAr: "فخامة بلا حدود",
    titleEn: "Boundless Luxury",
    bodyAr:
      "ثلاثة أبراج بواجهات زجاجية وتيجان إسلامية ذهبية تُضيء سماء مكة",
    bodyEn:
      "Three towers with glass facades and golden Islamic crowns illuminate the Makkah skyline",
  },
  {
    id: "community",
    titleAr: "مجتمع متكامل",
    titleEn: "Integrated Community",
    bodyAr:
      "ساحات تجارية وضيافية وخدمية مصممة بالطابع العمراني الإسلامي الأصيل",
    bodyEn:
      "Commercial, hospitality, and service spaces designed in authentic Islamic urban style",
  },
];

export type RabiaAlternatingSection = {
  id: string;
  image: string;
  imageAltAr: string;
  imageAltEn: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const RABIA_ALTERNATING: RabiaAlternatingSection[] = [
  {
    id: "towers",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
    imageAltAr: "الأبراج الثلاثة في مشروع الشبيلي وأهل البيت",
    imageAltEn: "The three towers of AlShubaily & Ahl al-Bayt",
    eyebrowAr: "الأبراج الفاخرة",
    eyebrowEn: "Luxury Towers",
    titleAr: "ثلاثة أبراج تعانق السماء",
    titleEn: "Three Towers Embracing the Sky",
    bodyAr:
      "أبراج شاهقة ترتفع فوق المشهد بتصميم معاصر راقٍ، تتوّج بتيجان مشبّكة مُستوحاة من الأنماط الإسلامية الكلاسيكية الذهبية. تمتد واجهاتها الزجاجية لتعكس ضوء الفجر والغروب، خالقةً مشهداً بصرياً لا يُنسى يُحيل إلى فخامة الحضارة الإسلامية في عزّها.",
    bodyEn:
      "Soaring towers rise above the landscape with refined contemporary design, crowned by golden lattice crowns inspired by classical Islamic patterns. Their glass facades reflect the light of dawn and dusk, creating an unforgettable visual spectacle that echoes Islamic civilization at its peak.",
  },
  {
    id: "mosque",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.39 PM.jpeg"),
    imageAltAr: "المسجد المركزي الكبير في الشبيلي وأهل البيت",
    imageAltEn: "The grand central mosque in AlShubaily & Ahl al-Bayt",
    eyebrowAr: "المسجد المركزي",
    eyebrowEn: "Grand Central Mosque",
    titleAr: "مسجد كبير في قلب المشروع",
    titleEn: "A Grand Mosque at the Heart",
    bodyAr:
      "مسجد مهيب بقبة كبرى وصومعتين شامختين يُشكّل قلب المشروع النابض ومحوره الروحي. تتدفق الساحات المحيطة به بالزوار، وتُتيح له التصميم الهندسي ضمان تجربة روحية وجمالية استثنائية لكل من يحضر صلاةً أو يسير في أرجائه.",
    bodyEn:
      "A majestic mosque with a grand dome and twin minarets forms the spiritual heart of the project. The surrounding plazas flow with visitors, and its geometric design ensures an exceptional spiritual and aesthetic experience for worshippers and passersby alike.",
  },
  {
    id: "masterplan",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM (1).jpeg"),
    imageAltAr: "المخطط العام لمشروع الشبيلي وأهل البيت",
    imageAltEn: "AlShubaily & Ahl al-Bayt master plan aerial view",
    eyebrowAr: "المخطط العام",
    eyebrowEn: "Master Plan",
    titleAr: "تناسق معماري إسلامي خالص",
    titleEn: "Pure Islamic Architectural Harmony",
    bodyAr:
      "مخطط عام يُجسّد روح التصميم الإسلامي المتوازن — محاور هندسية واضحة، وتناظر محكم، وتدرّج في الكتل البنائية من الساحات المفتوحة إلى المباني التجارية ثم الأبراج الشاهقة. كل زاوية محسوبة لتحقق الوظيفة والجمال معاً.",
    bodyEn:
      "A master plan embodying balanced Islamic design — clear geometric axes, precise symmetry, and a gradual progression from open plazas to commercial buildings to soaring towers. Every angle is calculated to achieve both function and beauty.",
  },
];

export const RABIA_BANNER = {
  image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM.jpeg"),
  imageAltAr: "الساحة العامة الكبرى في الشبيلي وأهل البيت",
  imageAltEn: "The grand public plaza in AlShubaily & Ahl al-Bayt",
  titleAr: "حيث تحيا الفخامة على أرض مقدسة",
  titleEn: "Where Grandeur Lives on Sacred Ground",
  subtitleAr:
    "الشبيلي وأهل البيت — وجهة استثنائية لا تجمع بين الرقي والروحانية فحسب، بل تُعيد تعريف مفهوم الإقامة الفاخرة في مكة",
  subtitleEn:
    "AlShubaily & Ahl al-Bayt — an exceptional destination that not only merges sophistication with spirituality but redefines luxury living in Makkah",
};

export type RabiaGalleryItem = {
  id: string;
  image: string;
  altAr: string;
  altEn: string;
};

export const RABIA_GALLERY: RabiaGalleryItem[] = [
  {
    id: "img-1",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.38 PM.jpeg"),
    altAr: "منظر ليلي جوي لمشروع الشبيلي وأهل البيت",
    altEn: "Night aerial view of AlShubaily & Ahl al-Bayt",
  },
  {
    id: "img-2",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.39 PM.jpeg"),
    altAr: "الساحة المركزية وممشى الزوار",
    altEn: "Central plaza and visitor promenade",
  },
  {
    id: "img-3",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.39 PM (1).jpeg"),
    altAr: "منظر جوي بعيد للمشروع",
    altEn: "Far aerial view of the project",
  },
  {
    id: "img-4",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
    altAr: "المشهد الأمامي المهيب للمشروع",
    altEn: "Majestic frontal view of the project",
  },
  {
    id: "img-5",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM (1).jpeg"),
    altAr: "منظر جوي وسط للمشروع",
    altEn: "Mid aerial view of the project",
  },
  {
    id: "img-6",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM.jpeg"),
    altAr: "الساحة الكبرى المكتظة بالزوار",
    altEn: "Grand plaza filled with visitors",
  },
  {
    id: "img-7",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM (1).jpeg"),
    altAr: "المخطط العام للمشروع من الأعلى",
    altEn: "Top-down master plan view",
  },
  {
    id: "img-8",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.48 PM.jpeg"),
    altAr: "المشهد الجوي الدرامي للمشروع",
    altEn: "Dramatic aerial scene of the project",
  },
];

export const RABIA_GALLERY_HEADER = {
  eyebrowAr: "جولة بصرية",
  eyebrowEn: "Visual Tour",
  titleAr: "اكتشف الشبيلي وأهل البيت",
  titleEn: "Explore AlShubaily & Ahl al-Bayt",
};

export const RABIA_LOCATION = {
  image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.47 PM.jpeg"),
  imageAltAr: "خريطة موقع مشروع الشبيلي وأهل البيت",
  imageAltEn: "Location map of AlShubaily & Ahl al-Bayt project",
  eyebrowAr: "الموقع الاستراتيجي",
  eyebrowEn: "Strategic Location",
  titleAr: "على بُعد 6 كم من قلب الإسلام",
  titleEn: "6 km from the Heart of Islam",
  bodyAr:
    "يقع المشروع في مدينة مكة المكرمة على مسافة 6 كم من المسجد الحرام عبر مسار مكة، بالقرب من مسجد الملك عبدالله ومسجد التنعيم. موقع استراتيجي يجعله مثالياً لضيوف الرحمن والزوار والمقيمين على حدٍّ سواء.",
  bodyEn:
    "Located in Makkah Al-Mukarramah, 6 km from Masjid Al-Haram via Massar Makkah, near King Abdullah Mosque and Masjid Al-Taneem. A strategic location making it ideal for pilgrims, visitors, and residents alike.",
  highlights: [
    {
      labelAr: "المسجد الحرام",
      labelEn: "Masjid Al-Haram",
      valueAr: "6 كم",
      valueEn: "6 km",
    },
    {
      labelAr: "مسجد الملك عبدالله",
      labelEn: "King Abdullah Mosque",
      valueAr: "3.6 كم",
      valueEn: "3.6 km",
    },
    {
      labelAr: "مسجد التنعيم",
      labelEn: "Masjid Taneem",
      valueAr: "7.6 كم",
      valueEn: "7.6 km",
    },
  ],
};
