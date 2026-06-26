import { zahraaAsset } from "@/data/asset-paths";

export const ZAHRAA_HERO_IMAGE = zahraaAsset("hero.png");

export const ZAHRAA_HERO = {
  eyebrowAr: "القطيف · المنطقة الشرقية",
  eyebrowEn: "Al-Qatif · Eastern Province",
  titleAr: "مشروع الزهراء",
  titleEn: "Al-Zahraa Project",
  taglineAr: "نبض القطيف الجديد على ضفاف الخليج",
  taglineEn: "The New Pulse of Al-Qatif on the Gulf Shore",
  subtitleAr:
    "واجهة بحرية ساحرة تمتد لأكثر من كيلومتر — تحتضن أرقى المخططات السكنية والتجارية. اكتشف المعنى الحقيقي للحياة العائلية المتكاملة في قلب القطيف",
  subtitleEn:
    "A stunning seafront stretching over a kilometer — embracing the finest residential and commercial masterplans. Discover true integrated family living at the heart of Al-Qatif",
};

export type ZahraaStat = {
  value: number;
  suffixAr?: string;
  suffixEn?: string;
  labelAr: string;
  labelEn: string;
};

export const ZAHRAA_STATS: ZahraaStat[] = [
  {
    value: 1260000,
    suffixAr: " م²",
    suffixEn: " m²",
    labelAr: "مساحة المخطط",
    labelEn: "Masterplan Area",
  },
  {
    value: 1200,
    suffixAr: " م",
    suffixEn: " m",
    labelAr: "واجهة بحرية",
    labelEn: "Waterfront",
  },
  {
    value: 1,
    suffixAr: " كم+",
    suffixEn: " km+",
    labelAr: "امتداد الكورنيش",
    labelEn: "Corniche Length",
  },
];

export const ZAHRAA_LOCATION = {
  titleAr: "موقع استراتيجي",
  titleEn: "Strategic Location",
  subtitleAr: "لا يُضاهى",
  subtitleEn: "Unmatched",
  bodyAr:
    "يقع في أجمل المناطق الحديثة شمال مخطط الناصرة، متصلاً بأهم الطرق الرئيسية في المدينة، مع واجهة بحرية خلابة بطول 1,200 متر.",
  bodyEn:
    "In the finest modern area north of Al-Nasra masterplan, connected to the city's key roads, with a stunning 1,200-meter seafront.",
  image: zahraaAsset("1.png"),
  pins: [
    { labelAr: "البرج التراثي", labelEn: "Heritage Tower", x: 42, y: 38 },
    { labelAr: "الكورنيش", labelEn: "The Corniche", x: 68, y: 55 },
    { labelAr: "مخطط الناصرة", labelEn: "Al-Nasra Plan", x: 28, y: 62 },
  ],
};

export const ZAHRAA_ARCHITECTURE = {
  titleAr: "هوية معمارية",
  titleEn: "Architectural Identity",
  subtitleAr: "تلبي تطلعات أسرتك",
  subtitleEn: "Meeting Your Family's Aspirations",
  bodyAr:
    "نمط تخطيطي جديد يوفر وحدات سكنية ذات استيعابية عالية تناسب العائلات. واجهة بحرية تتحول إلى نواة جاذبة للمشاريع التجارية والفندقية ومتعددة الاستخدامات.",
  bodyEn:
    "A new planning model with high-capacity residential units for families. A seafront nucleus attracting commercial, hotel, and mixed-use projects.",
  tiles: [
    {
      id: "residential",
      titleAr: "سكني عائلي",
      titleEn: "Family Residential",
      descAr: "وحدات باستيعابية عالية تناسب العائلات",
      descEn: "High-capacity units designed for families",
      image: zahraaAsset("3.png"),
      span: "large" as const,
    },
    {
      id: "commercial",
      titleAr: "تجاري ومتعدد",
      titleEn: "Commercial & Mixed-use",
      descAr: "مقاهي ومحلات في الدور الأرضي",
      descEn: "Cafés and retail at ground level",
      image: zahraaAsset("6.png"),
      span: "small" as const,
    },
    {
      id: "seafront",
      titleAr: "واجهة بحرية",
      titleEn: "Seafront Living",
      descAr: "مباني حديثة تطل على الخليج",
      descEn: "Modern buildings overlooking the Gulf",
      image: zahraaAsset("7.png"),
      span: "small" as const,
    },
  ],
};

export const ZAHRAA_INFRASTRUCTURE = {
  titleAr: "تطوير متكامل",
  titleEn: "Integrated Development",
  subtitleAr: "من البنية التحتية إلى الرفاهية المطلقة",
  subtitleEn: "From Infrastructure to Absolute Comfort",
  bodyAr:
    "تفوقنا في توفير بنية تحتية لا مثيل لها — شبكات صرف صحي متطورة، وتطوير كامل لطريق الكورنيش ليصبح واحة من الجمال والراحة.",
  bodyEn:
    "Unmatched infrastructure — advanced sewage networks and a fully developed corniche road becoming an oasis of beauty and comfort.",
  image: zahraaAsset("5.png"),
  highlights: [
    {
      titleAr: "صرف صحي متطور",
      titleEn: "Advanced Sewage",
      descAr: "شبكات حديثة تلبي احتياجات المخطط",
      descEn: "Modern networks serving the masterplan",
    },
    {
      titleAr: "كورنيش مطوّر",
      titleEn: "Developed Corniche",
      descAr: "واحة جمال ورفاهية على البحر",
      descEn: "An oasis of beauty on the sea",
    },
    {
      titleAr: "حدائق منسقة",
      titleEn: "Landscaped Gardens",
      descAr: "مساحات خضراء وفلل فاخرة",
      descEn: "Green spaces and premium villas",
    },
  ],
};

export const ZAHRAA_SHOWCASE = [
  {
    id: "aerial",
    src: zahraaAsset("2.png"),
    titleAr: "مخطط شامل",
    titleEn: "Full Masterplan",
    descAr: "رؤية جوية للمشروع بالكامل",
    descEn: "Aerial vision of the entire project",
  },
  {
    id: "community",
    src: zahraaAsset("8.png"),
    titleAr: "حياة مجتمعية",
    titleEn: "Community Life",
    descAr: "بيئة عائلية متكاملة على الكورنيش",
    descEn: "Integrated family environment on the corniche",
  },
];

export const ZAHRAA_CTA = {
  titleAr: "الزهراء.. الوجهة الأذكى",
  titleEn: "Al-Zahraa — The Smartest Destination",
  subtitleAr: "استثمر اليوم في مخطط يضمن لك قيمة تصاعدية ومستقبلاً زاهراً",
  subtitleEn:
    "Invest today in a masterplan that guarantees rising value and a bright future",
  bodyAr: "النموذج المثالي لاحتضان أفضل المشاريع",
  bodyEn: "The ideal model for hosting the finest developments",
  image: zahraaAsset("4.png"),
};

export const ZAHRAA_GALLERY = [
  zahraaAsset("hero.png"),
  zahraaAsset("1.png"),
  zahraaAsset("2.png"),
  zahraaAsset("3.png"),
  zahraaAsset("4.png"),
  zahraaAsset("5.png"),
  zahraaAsset("6.png"),
  zahraaAsset("7.png"),
  zahraaAsset("8.png"),
];
