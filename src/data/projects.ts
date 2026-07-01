import { dammamAsset, beachHouseAsset, tidaraAsset, rabiaAsset, sultanatAsset, hailCornicheAsset, hailWalkwayAsset, zahraaAsset, newBeachAsset, rabiaRoadAsset } from "@/data/asset-paths";
import { NEW_MAP_COORDINATES } from "@/data/map-coordinates";

export type RegionId = "all" | "mecca" | "hail" | "riyadh" | "eastern";

export type Project = {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string;
  region: Exclude<RegionId, "all">;
  regionEn: string;
  regionAr: string;
  typeEn: string;
  typeAr: string;
  color: string;
  x: number;
  y: number;
  descriptionEn: string;
  descriptionAr: string;
  heroImage: string;
  gallery: string[];
};

export type Region = {
  id: RegionId;
  nameEn: string;
  nameAr: string;
};

const DEFAULT_GALLERY = [
  "/assets/hero/Hero-1.jpg",
  "/assets/hero/Hero-2.jpg",
  "/assets/hero/Hero-3.jpg",
];

export const REGIONS: Region[] = [
  { id: "all", nameEn: "All Projects", nameAr: "جميع المشاريع" },
  { id: "mecca", nameEn: "Mecca", nameAr: "مكة" },
  { id: "hail", nameEn: "Hail", nameAr: "حائل" },
  { id: "riyadh", nameEn: "Riyadh", nameAr: "الرياض" },
  { id: "eastern", nameEn: "Eastern Region", nameAr: "المنطقة الشرقية" },
];

export const PROJECTS: Project[] = [
  {
    id: 2,
    slug: "alshubaily-ahl-albayt",
    nameEn: "AlShubaily & Ahl al-Bayt",
    nameAr: "الشبيلي وأهل البيت",
    region: "mecca",
    regionEn: "Mecca",
    regionAr: "مكة",
    typeEn: "Mixed-use · Spiritual",
    typeAr: "متعدد الاستخدامات · روحي",
    color: "#8B4513",
    x: 28.5,
    y: 63.5,
    descriptionEn:
      "An integrated destination blending Islamic heritage grandeur with the finest contemporary living — 230,000 m² in the holy city of Makkah, 6 km from Masjid Al-Haram.",
    descriptionAr:
      "وجهة متكاملة تجمع بين عظمة الموروث الإسلامي وأرقى معايير الحياة العصرية — 230,000 م² في مكة المكرمة على بُعد 6 كم من المسجد الحرام.",
    heroImage: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
    gallery: [
      rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.38 PM.jpeg"),
      rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.39 PM.jpeg"),
      rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
      rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM.jpeg"),
    ],
  },
  {
    id: 3,
    slug: "hail-corniche",
    nameEn: "Hail Corniche",
    nameAr: "كورنيش حائل",
    region: "hail",
    regionEn: "Hail",
    regionAr: "حائل",
    typeEn: "Commercial / Tourism",
    typeAr: "تجاري / سياحي",
    color: "#4A7C59",
    x: 43.5,
    y: 27.5,
    descriptionEn:
      "The Kingdom's first land corniche — transforming Wadi Al-Adair'a into a 2.5M m² commercial, tourism, and entertainment destination in Hail.",
    descriptionAr:
      "الكورنيش البري الأول من نوعه — تحويل وادي الأديرع إلى وجهة تجارية وسياحية وترفيهية بمساحة 2,500,000 م² في حائل.",
    heroImage: hailCornicheAsset("Hero-section.png"),
    gallery: [
      hailCornicheAsset("Hero-section.png"),
      hailCornicheAsset("1.png"),
      hailCornicheAsset("2.png"),
      hailCornicheAsset("3.png"),
      hailCornicheAsset("4.png"),
      hailCornicheAsset("5.png"),
    ],
  },
  {
    id: 4,
    slug: "hail-walkway",
    nameEn: "Hail Walkway",
    nameAr: "حائل واك واي",
    region: "hail",
    regionEn: "Hail",
    regionAr: "حائل",
    typeEn: "Walkway",
    typeAr: "ممشى",
    color: "#3D6B8A",
    x: 45.5,
    y: 31.5,
    descriptionEn:
      "An elegant pedestrian walkway connecting key destinations in Hail region.",
    descriptionAr: "ممشى راقٍ يربط بين أهم الوجهات في منطقة حائل.",
    heroImage: hailWalkwayAsset("6.jpeg"),
    gallery: [
      hailWalkwayAsset("1.jpeg"),
      hailWalkwayAsset("6.jpeg"),
      hailWalkwayAsset("10.jpeg"),
    ],
  },
  {
    id: 5,
    slug: "benban-residence",
    nameEn: "Benban Residence",
    nameAr: "بنبان ريزيدنس",
    region: "riyadh",
    regionEn: "Riyadh",
    regionAr: "الرياض",
    typeEn: "Residential",
    typeAr: "سكني",
    color: "#C4783A",
    x: 47.5,
    y: 53.5,
    descriptionEn:
      "Contemporary residential towers in the vibrant Benban district of Riyadh.",
    descriptionAr:
      "أبراج سكنية عصرية في حي بنبان النابض بالحياة في الرياض.",
    heroImage: "/assets/hero/Hero-1.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 6,
    slug: "alshubaily-residence",
    nameEn: "AlShubaily Residence",
    nameAr: "الشبيلي ريزيدنس",
    region: "riyadh",
    regionEn: "Riyadh",
    regionAr: "الرياض",
    typeEn: "Luxury",
    typeAr: "فاخر",
    color: "#6B5B7B",
    x: 49.5,
    y: 46.5,
    descriptionEn:
      "Signature luxury residences bearing the AlShubaily name in the capital city.",
    descriptionAr: "مساكن فاخرة تحمل اسم الشبيلي في العاصمة الرياض.",
    heroImage: "/assets/hero/Hero-1.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 7,
    slug: "riyadh-boulevard",
    nameEn: "Riyadh Boulevard",
    nameAr: "رياض بوليفارد",
    region: "riyadh",
    regionEn: "Riyadh",
    regionAr: "الرياض",
    typeEn: "Mixed-use",
    typeAr: "متعدد الاستخدامات",
    color: "#D4854A",
    x: 51.5,
    y: 43.5,
    descriptionEn:
      "A vibrant boulevard featuring retail, dining, and entertainment experiences.",
    descriptionAr: "بوليفارد حيوي يضم التجزئة والمطاعم والترفيه.",
    heroImage: "/assets/hero/Hero-1.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 8,
    slug: "golf-city",
    nameEn: "Golf City",
    nameAr: "جولف سيتي",
    region: "riyadh",
    regionEn: "Riyadh",
    regionAr: "الرياض",
    typeEn: "Golf",
    typeAr: "جولف",
    color: "#8B6914",
    x: 53.5,
    y: 48.5,
    descriptionEn:
      "An integrated golf community with premium villas and world-class amenities.",
    descriptionAr: "مجتمع جولف متكامل مع فلل فاخرة ومرافق عالمية المستوى.",
    heroImage: "/assets/hero/Hero-1.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 9,
    slug: "alshubaily-town",
    nameEn: "AlShubaily Town",
    nameAr: "الشبيلي تاون",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Town",
    typeAr: "مدينة",
    color: "#5C4033",
    x: 70.5,
    y: 46.5,
    descriptionEn:
      "A master-planned town offering complete lifestyle in the Eastern Province.",
    descriptionAr:
      "مدينة مخططة بعناية تقدم أسلوب حياة متكامل في المنطقة الشرقية.",
    heroImage: "/assets/hero/Hero-2.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 10,
    slug: "alshubaily-grand-mall",
    nameEn: "AlShubaily Grand Mall",
    nameAr: "الشبيلي جراند مول",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Retail",
    typeAr: "تجاري",
    color: "#2E5A6B",
    x: 72.5,
    y: 48.5,
    descriptionEn:
      "A premier shopping and entertainment destination in the Eastern Region.",
    descriptionAr: "وجهة تسوق وترفيه رائدة في المنطقة الشرقية.",
    heroImage: "/assets/hero/Hero-1.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 11,
    slug: "beach-house-resort",
    nameEn: "Maison de la Mer Resort",
    nameAr: "منتجع منزل البحر",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Resort · Multi-use",
    typeAr: "منتجع · متعدد الاستخدامات",
    color: "#4A6741",
    x: 74.5,
    y: 50.5,
    descriptionEn:
      "Maison de la Mer — infrastructure and superstructure development combining tourism, restaurants, and marina across 62,000 m².",
    descriptionAr:
      "منتجع منزل البحر — مشروع بنية تحتية وفوقية يجمع السياحة والمطاعم والمارينا على 62,000 م².",
    heroImage: beachHouseAsset("Hero.png"),
    gallery: [
      beachHouseAsset("1.jpg"),
      beachHouseAsset("2.jpg"),
      beachHouseAsset("3.jpg"),
      beachHouseAsset("4.jpg"),
      beachHouseAsset("5.png"),
    ],
  },
  {
    id: 12,
    slug: "alshubaily-port",
    nameEn: "AlShubaily Port",
    nameAr: "الشبيلي بورت",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Waterfront",
    typeAr: "واجهة بحرية",
    color: "#1E4D6B",
    x: 76.5,
    y: 53.5,
    descriptionEn:
      "A waterfront port development combining marina, retail, and residential spaces.",
    descriptionAr:
      "مشروع ميناء ساحلي يجمع بين المارينا والتجزئة والمساحات السكنية.",
    heroImage: "/assets/projects/Twin-Tower/Hero.jpg",
    gallery: [
      "/assets/projects/Twin-Tower/Hero.jpg",
      "/assets/hero/Hero-1.jpg",
      "/assets/hero/Hero-2.jpg",
      "/assets/hero/Hero-1.jpg",
    ],
  },
  {
    id: 13,
    slug: "dammam-olympic-city",
    nameEn: "Dammam Olympic City",
    nameAr: "مدينة الدمام الأولمبية",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Sports",
    typeAr: "رياضي",
    color: "#7B4A2E",
    x: 78.5,
    y: 49.5,
    descriptionEn: "A world-class sports and wellness city in the heart of Dammam.",
    descriptionAr: "مدينة رياضية وصحية عالمية المستوى في قلب الدمام.",
    heroImage: dammamAsset("City-landscape.png"),
    gallery: [
      dammamAsset("City-landscape.png"),
      dammamAsset("Football-studium.jpg"),
      dammamAsset("Ball-Area.png"),
      dammamAsset("Polo.png"),
      dammamAsset("Gulf.png"),
      dammamAsset("banner.png"),
    ],
  },
  {
    id: 14,
    slug: "al-zahraa",
    nameEn: "Al-Zahraa Project",
    nameAr: "مشروع الزهراء",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Residential / Commercial",
    typeAr: "سكني / تجاري",
    color: "#1E6B8A",
    x: 73.5,
    y: 44.5,
    descriptionEn:
      "The new pulse of Al-Qatif on the Gulf — a 1.26M m² masterplan with 1,200m seafront, family residential units, and mixed-use commercial hub.",
    descriptionAr:
      "نبض القطيف الجديد على ضفاف الخليج — مخطط 1,260,000 م² بواجهة بحرية 1,200 متر، وحدات سكنية عائلية ونواة تجارية متعددة الاستخدامات.",
    heroImage: zahraaAsset("hero.png"),
    gallery: [
      zahraaAsset("hero.png"),
      zahraaAsset("1.png"),
      zahraaAsset("2.png"),
      zahraaAsset("3.png"),
      zahraaAsset("4.png"),
      zahraaAsset("5.png"),
      zahraaAsset("6.png"),
      zahraaAsset("7.png"),
      zahraaAsset("8.png"),
    ],
  },
  {
    id: 15,
    slug: "alshubaily-high-rise",
    nameEn: "AlShubaily High Rise",
    nameAr: "الشبيلي هاي رايز",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "High-rise",
    typeAr: "أبراج",
    color: "#4A3B6B",
    x: 80.5,
    y: 46.5,
    descriptionEn:
      "The beating heart of Khobar — a 2 km seafront investment and tourism destination integrating marina, grand mall, towers, and an artificial river.",
    descriptionAr:
      "القلب النابض لمدينة الخبر — وجهة استثمارية وسياحية بطول 2 كم تجمع المارينا والجراند مول والأبراج والنهر الصناعي.",
    heroImage: "/assets/projects/High-rise/لقطه-بانوراميه.png",
    gallery: [
      "/assets/projects/High-rise/لقطه-بانوراميه.png",
      "/assets/projects/High-rise/السياق-الجغرافي.png",
      "/assets/projects/High-rise/المارينا.png",
      "/assets/projects/High-rise/فلل.png",
      "/assets/projects/High-rise/جراند-مول.png",
      "/assets/projects/High-rise/مكاتب.png",
      "/assets/projects/High-rise/النهر-الصناعي.png",
    ],
  },
  {
    id: 16,
    slug: "alshubaily-high-rise-2",
    nameEn: "AlShubaily High Rise (2)",
    nameAr: "الشبيلي هاي رايز (2)",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "High-rise",
    typeAr: "أبراج",
    color: "#6B4A5A",
    x: 82.5,
    y: 44.5,
    descriptionEn:
      "The second phase of AlShubaily's landmark high-rise development.",
    descriptionAr: "المرحلة الثانية من مشروع الشبيلي الشاهق.",
    heroImage: "/assets/hero/Hero-3.jpg",
    gallery: DEFAULT_GALLERY,
  },
  {
    id: 17,
    slug: "sultanat-al-sharq",
    nameEn: "Sultanat Al Sharq",
    nameAr: "سلطانة الشرق",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Luxury Residential",
    typeAr: "سكني فاخر",
    color: "#C45C3E",
    x: 84.5,
    y: 48.5,
    descriptionEn:
      "The pinnacle of luxury and privacy on the Gulf — 765,000 m² with 1,100 m of seafront, private islands, and palatial estates on the Red Sea and Arabian Gulf in Khobar.",
    descriptionAr:
      "قمة الفخامة والخصوصية على ضفاف الخليج — 765,000 م² وواجهة بحرية 1,100 متر، جزر خاصة وقصور فاخرة على البحر الأحمر والخليج العربي في الخبر.",
    heroImage: sultanatAsset("Hero Section - الجزر.png"),
    gallery: [
      sultanatAsset("Hero Section - الجزر.png"),
      sultanatAsset("الجزر.png"),
      sultanatAsset("Private Beach - Perspective.png"),
      sultanatAsset("Luxury Palace.png"),
      sultanatAsset("Central Zone.png"),
      sultanatAsset("Infrastructure-1.png"),
      sultanatAsset("Infrastructure-2.png"),
      sultanatAsset("Infrastructure-3.png"),
      sultanatAsset("Arial Detail.png"),
    ],
  },
  {
    id: 18,
    slug: "alshubaily-new-beach",
    nameEn: "AlShubaily New Beach",
    nameAr: "الشبيلي نيو بيتش",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Beachfront / Mixed-use",
    typeAr: "ساحلي / متعدد",
    color: "#2E6B8A",
    x: 83.5,
    y: 52.5,
    descriptionEn:
      "Al Khobar's first and foremost beachfront — 2.9M m² between King Fahd Causeway and Sultanat Al Sharq with coastal, investment, and entertainment zones.",
    descriptionAr:
      "الأول والأهم في الخبر على الشاطئ — 2,909,000 م² بين جسر الملك فهد وسلطانة الشرق، بثلاث مناطق ساحلية واستثمارية وترفيهية.",
    heroImage: newBeachAsset("hero.jpeg"),
    gallery: [
      newBeachAsset("hero.jpeg"),
      newBeachAsset("1.jpeg"),
      newBeachAsset("2.jpeg"),
      newBeachAsset("3.jpeg"),
      newBeachAsset("4.jpeg"),
      newBeachAsset("5.jpeg"),
      newBeachAsset("6.jpeg"),
      newBeachAsset("8.jpeg"),
      newBeachAsset("9.jpeg"),
    ],
  },
  {
    id: 20,
    slug: "rabia-makkah",
    nameEn: "Rabia Makkah",
    nameAr: "رابية مكة",
    region: "mecca",
    regionEn: "Mecca",
    regionAr: "مكة",
    typeEn: "Mixed-use · Expressway",
    typeAr: "متعدد الاستخدامات · طريق سريع",
    color: "#6B1D3A",
    x: 30,
    y: 60.5,
    descriptionEn:
      "Makkah's western facade on the Mecca–Jeddah Expressway — 2.45M m² on the Third Ring Road, minutes from the Holy Mosque.",
    descriptionAr:
      "واجهة مكة الغربية على طريق مكة جدة السريع — 2,450,000 م² على الطريق الدائري الثالث، على بعد دقائق من الحرم المكي الشريف.",
    heroImage: rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM.jpeg"),
    gallery: [
      rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM.jpeg"),
      rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (1).jpeg"),
      rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (2).jpeg"),
      rabiaRoadAsset("WhatsApp Image 2026-06-25 at 3.27.46 PM (3).jpeg"),
    ],
  },
  {
    id: 19,
    slug: "tidara-towers",
    nameEn: "Tidara Towers",
    nameAr: "أبراج تيدارا",
    region: "eastern",
    regionEn: "Eastern Region",
    regionAr: "المنطقة الشرقية",
    typeEn: "Mixed-use Waterfront",
    typeAr: "متعدد الاستخدامات · واجهة بحرية",
    color: "#3D5A80",
    x: 81.0,
    y: 49.0,
    descriptionEn:
      "A fluid waterfront gateway on Al Khobar marina — hotel, admin, and residential towers linked by a public podium and central landmark.",
    descriptionAr:
      "بوابة ساحلية متكاملة على مارينا الخبر — أبراج فندقية وإدارية وسكنية مرتبطة ببوديوم عام وبرج مركزي.",
    heroImage: tidaraAsset("Hero.png"),
    gallery: [
      tidaraAsset("Hotel.png"),
      tidaraAsset("Office.png"),
      tidaraAsset("Sales.png"),
      tidaraAsset("Masterplan.png"),
      tidaraAsset("3D-Tower.png"),
      tidaraAsset("tower-night.png"),
      tidaraAsset("panorama.png"),
      tidaraAsset("elevation-facade.png"),
      tidaraAsset("walkthrough-1.png"),
      tidaraAsset("walkthrough-2.png"),
      tidaraAsset("walkthrough-3.png"),
      tidaraAsset("walkthrough-4.png"),
      tidaraAsset("walkthrough-5.png"),
      tidaraAsset("walkthrough-6.png"),
    ],
  },
];

export const HERO_SLIDES = [
  {
    src: "/assets/hero/Hero-1.jpg",
    labelAr: "محفظة المشاريع",
    labelEn: "Project Portfolio",
  },
  {
    src: "/assets/hero/Hero-2.jpg",
    labelAr: "الشبيلي بورت",
    labelEn: "AlShubaily Port",
  },
  {
    src: "/assets/hero/Hero-3.jpg",
    labelAr: "أبراج تيدارا",
    labelEn: "Tidara Towers",
  },
  {
    src: "/assets/hero/Hero-4.jpg",
    labelAr: "مشروع مميز",
    labelEn: "Featured Development",
  },
  {
    src: "/assets/hero/Hero-5.jpg",
    labelAr: "وجهة ساحلية",
    labelEn: "Coastal Destination",
  },
  {
    src: "/assets/hero/Hero-6.jpg",
    labelAr: "استثمار عقاري",
    labelEn: "Real Estate Investment",
  },
  {
    src: "/assets/hero/Hero-7.jpg",
    labelAr: "رؤية المجموعة",
    labelEn: "Group Vision",
  },
];

export function getProjectById(id: number) {
  return PROJECTS.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export type RegionCluster = {
  id: Exclude<RegionId, "all">;
  x: number;
  y: number;
  count: number;
  nameAr: string;
  nameEn: string;
};

const REGION_IDS = ["mecca", "hail", "riyadh", "eastern"] as const;

export function getRegionClusters(
  coordinates: Record<number, { x: number; y: number }> = NEW_MAP_COORDINATES,
): RegionCluster[] {
  const coord = (p: Project) => coordinates[p.id] ?? { x: p.x, y: p.y };
  return REGION_IDS.map((id) => {
    const projects = PROJECTS.filter((p) => p.region === id);
    const region = REGIONS.find((r) => r.id === id)!;
    const x = projects.reduce((sum, p) => sum + coord(p).x, 0) / projects.length;
    const y = projects.reduce((sum, p) => sum + coord(p).y, 0) / projects.length;
    return {
      id,
      x,
      y,
      count: projects.length,
      nameAr: region.nameAr,
      nameEn: region.nameEn,
    };
  });
}
