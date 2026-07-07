import {
  dammamAsset,
  hailCornicheAsset,
  hailWalkwayAsset,
  mediaCenterAsset,
  rabiaAsset,
} from "@/data/asset-paths";
import { HAIL_CORNICHE_VIDEO_URL } from "@/data/hail-corniche-content";
import { RABIA_VIDEO_URL } from "@/data/rabia-content";

export type MediaCategoryId =
  | "company-news"
  | "project-updates"
  | "media-coverage"
  | "events";

/** image = cover photo · video-cover = cover video · image-video = photo hero + text + inline video */
export type MediaArticleLayout = "image" | "video-cover" | "image-video";

export type MediaExternalSourceId =
  | "alriyadh"
  | "sabq"
  | "ajel"
  | "x"
  | "snapchat"
  | "youtube"
  | "instagram";

export type MediaExternalSource = {
  id: MediaExternalSourceId;
  labelAr: string;
  labelEn: string;
  /** Supports multiple URLs per platform (e.g. several YouTube videos). */
  urls: string[];
};

export type MediaCategory = {
  id: MediaCategoryId;
  nameAr: string;
  nameEn: string;
};

export type MediaArticle = {
  id: string;
  category: MediaCategoryId;
  layout: MediaArticleLayout;
  date: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  bodyParagraphsAr: string[];
  bodyParagraphsEn: string[];
  image?: string;
  videoUrl?: string;
  featured?: boolean;
  externalSources?: MediaExternalSource[];
};

export const MEDIA_HERO_BANNER = dammamAsset("City-landscape.png");

export const MEDIA_HERO = {
  eyebrowAr: "المركز الإعلامي",
  eyebrowEn: "Media Center",
  titleAr: "أخبار وإنجازات مجموعة خالد سعود الشبيلي",
  titleEn: "News & Achievements — Khalid Saud AlShubaily Group",
  bodyAr:
    "تابعوا آخر مستجدات مجموعة خالد بن سعود الشبيلي — تطورات المشاريع، التغطية الإعلامية، والفعاليات في مختلف مناطق المملكة. مركز إعلامي يعكس مسيرة عقارية واستثمارية تمتد لأكثر من ثلاثين عاماً.",
  bodyEn:
    "Follow the latest from Khalid Bin Saud AlShubaily Group — project milestones, media coverage, and events across the Kingdom. A media hub reflecting more than thirty years of real estate and investment excellence.",
  stats: [
    {
      valueAr: "+37",
      valueEn: "37+",
      labelAr: "عاماً من العطاء",
      labelEn: "Years of Excellence",
    },
    {
      valueAr: "4",
      valueEn: "4",
      labelAr: "مناطق استراتيجية",
      labelEn: "Strategic Regions",
    },
    {
      valueAr: "40",
      valueEn: "40",
      labelAr: "مشروع نوعي",
      labelEn: "Landmark Projects",
    },
  ],
};

export const MEDIA_TAGLINE = {
  word1Ar: "آخر",
  word2Ar: "الأخبار",
  word1En: "Latest",
  word2En: "News",
};

export const MEDIA_CATEGORIES: MediaCategory[] = [
  { id: "company-news", nameAr: "أخبار الشركة", nameEn: "Company News" },
  {
    id: "project-updates",
    nameAr: "تطورات المشاريع",
    nameEn: "Project Updates",
  },
  {
    id: "media-coverage",
    nameAr: "التغطية الإعلامية",
    nameEn: "Media Coverage",
  },
  {
    id: "events",
    nameAr: "المناسبات والفعاليات",
    nameEn: "Events & Occasions",
  },
];

export function getArticleMediaType(
  article: MediaArticle,
): MediaArticleLayout {
  return article.layout;
}

export function getCategoryById(id: MediaCategoryId): MediaCategory {
  return MEDIA_CATEGORIES.find((c) => c.id === id) ?? MEDIA_CATEGORIES[0];
}

export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: "pu-005",
    category: "project-updates",
    layout: "image",
    date: "2026-07-07",
    featured: true,
    titleAr:
      'شبيلي جراند مول على مشارف الانطلاق.. نسبة تأجير تجاوزت 84% وعلامات عالمية تدخل الشرقية لأول مرة',
    titleEn:
      "AlShubaily Grand Mall nears launch — over 84% leased with global brands entering the Eastern Region for the first time",
    excerptAr:
      "المشروع يستعد لاستقبال الزوار خلال العام الجاري وسط إقبال واسع من العلامات التجارية المحلية والعالمية.",
    excerptEn:
      "The project prepares to welcome visitors this year amid strong interest from local and international retail brands.",
    bodyParagraphsAr: [
      'يوشك «الشبيلي جراند مول» على فتح أبوابه أمام الجمهور خلال العام الجاري، في خطوة تُترقّب باهتمام متزايد من قطاع التجزئة والاستثمار في المنطقة الشرقية، وسط مؤشرات إيجابية تعكس حجم الثقة التي يحظى بها المشروع.',
      'وسجّل المول نسبة تأجير تجاوزت 84%، مع انضمام مجموعة متنوعة من العلامات المحلية والعالمية المرموقة، إلى جانب استقطاب علامات تُسجّل حضورها الأول في المنطقة الشرقية، ما يُثري التنوع والتجربة التي سيقدمها للزوار.',
      'وتنعكس هذه النتائج في الجاهزية التشغيلية المتقدمة التي يشهدها المشروع حالياً، تمهيداً لإطلاق وجهة شاملة تجمع التسوق والترفيه والمطاعم في فضاء عصري واحد يلبي تطلعات الزوار والعائلات.',
      'ومن المنتظر أن يُسهم المول في تنشيط الحركة التجارية والترفيهية بمدينة الخُبر والمنطقة الشرقية، ويصبح محطّة جذب جديدة للسكان والزوار على حدٍّ سواء.',
    ],
    bodyParagraphsEn: [
      "AlShubaily Grand Mall is preparing to open its doors to the public later this year, drawing growing interest from the retail and investment sectors in the Eastern Region amid strong indicators of market confidence in the project.",
      "The mall has surpassed 84% leasing, welcoming a diverse mix of prestigious local and international brands — including several making their debut in the Eastern Region — enriching the variety and experience it will offer visitors.",
      "These results reflect the project's advanced operational readiness, paving the way for a comprehensive destination combining shopping, entertainment, and dining in a single contemporary space meeting visitor and family expectations.",
      "The mall is expected to energize commercial and leisure activity in Al Khobar and the Eastern Region, becoming a new attraction for residents and visitors alike.",
    ],
    image: mediaCenterAsset("grand-mall.webp"),
    externalSources: [
      {
        id: "alriyadh",
        labelAr: "جريدة الرياض",
        labelEn: "Al Riyadh",
        urls: ["https://alriyadh.com/2193262"],
      },
      {
        id: "ajel",
        labelAr: "عاجل",
        labelEn: "Ajel",
        urls: [
          "https://x.com/ajelnews24/status/2066146356075348298?s=46&t=FtbaxRAAz2xJudxwIJoBRA",
        ],
      },
      {
        id: "x",
        labelAr: "X",
        labelEn: "X",
        urls: [
          "https://x.com/saudinews50/status/2066144566009331898?s=46",
          "https://x.com/eastprojectsksa/status/2066143866034548884?s=48",
          "https://x.com/anas_s_alrajhi/status/2066143838968647754?s=48&t=8kHoVRAowhQwgz6_6Prd_w",
          "https://x.com/i/status/2066145477616177384",
          "https://x.com/Eyaaaad/status/2066487705853128869",
          "https://x.com/whrumor/status/2066506355645518150?s=46",
        ],
      },
      {
        id: "instagram",
        labelAr: "إنستغرام",
        labelEn: "Instagram",
        urls: [
          "https://www.instagram.com/reel/DZmqZ7oI7Va/?igsh=MTV1dHduOXE0MXJsYQ==",
        ],
      },
    ],
  },
  {
    id: "pu-004",
    category: "project-updates",
    layout: "image",
    date: "2026-07-06",
    featured: true,
    titleAr:
      'الشبيلي تاون بالخُبر.. وجهة متكاملة تجمع التسوّق والضيافة والترفيه على الساحل الشرقي',
    titleEn:
      "AlShubaily Town in Al Khobar — an integrated destination for retail, hospitality, and leisure",
    excerptAr:
      "مشروع ضخم على مساحة 900 ألف م² يضم أكبر بحيرة صناعية في الشرق الأوسط، ويستعد للانطلاق في الربع الأول من 2025.",
    excerptEn:
      "A 900,000 m² development featuring the largest artificial lake in the Middle East, preparing to launch in Q1 2025.",
    bodyParagraphsAr: [
      'تستعد شركة "الإيسار العربية" لافتتاح مشروع "الشبيلي تاون" في مدينة الخُبر، في إطار خططها لتقديم وجهة عمرانية متكاملة تجمع بين السكن الفاخر والتجزئة والترفيه والضيافة، وذلك خلال الربع الأول من عام 2025.',
      'يمتد المشروع على مساحة 900 ألف متر مربع على امتداد الساحل الشرقي مقابل جسر الملك فهد، ليصبح أحد أبرز المعالم السياحية والاستثمارية في المنطقة الشرقية، ويضم أكبر بحيرة صناعية في الشرق الأوسط.',
      'يضم "الشبيلي تاون" عدداً من المكونات الرئيسية، أبرزها "الشبيلي جراند مول" الذي يُقام على جزيرة عائمة تحيط بها المياه من ثلاث جهات، مستوحى تصميمه من العمارة الأندلسية وقصر الحمراء، ويغطي مساحة تتجاوز 331 ألف متر مربع مع واجهة بحرية بطول 1.7 كم.',
      'كما يتضمن المشروع "الشبيلي ريزيدنس" بأكثر من 1200 وحدة سكنية فاخرة، و10 فنادق خمس نجوم يديرها كبرى سلاسل الضيافة العالمية، إضافة إلى 600 متجر و7 مناطق ترفيهية و5000 موقف للسيارات، إلى جانب قرية الحرفيين وقرية الكرنفال.',
      'أكد المهندس سعود بن خالد الشبيلي، الرئيس التنفيذي لشركة الإيسار العربية، أن المشروع يمثل إضافة نوعية للاقتصاد المحلي ويدعم مستهدفات رؤية المملكة 2030 في تعزيز السياحة وجذب الاستثمارات، مشيراً إلى أن الشركة بدأت بالفعل عمليات تأجير "الشبيلي جراند مول".',
      'ويأتي "الشبيلي تاون" ضمن محفظة الإيسار العربية التي تضم 6 مشاريع واسعة النطاق في الرياض ومكة المكرمة والقطيف وحائل والخُبر، جميعها تُنفَّذ وفق معايير عالمية لتلبية تطلعات السوق السعودي المتنامي.',
    ],
    bodyParagraphsEn: [
      'Al Eisaar Al Arabiya is preparing to launch AlShubaily Town in Al Khobar, delivering an integrated urban destination combining premium residential, retail, entertainment, and hospitality, targeted for Q1 2025.',
      "Spanning 900,000 square meters along the Eastern Province coastline opposite King Fahd Causeway, the project will become a landmark tourism and investment destination, featuring the largest artificial lake in the Middle East.",
      'AlShubaily Town comprises several key components, led by AlShubaily Grand Mall — built on a floating island surrounded by water on three sides, inspired by Andalusian architecture and the Alhambra Palace, covering over 331,000 m² with a 1.7 km waterfront.',
      'The development also includes AlShubaily Residence with over 1,200 luxury residential units, 10 five-star hotels operated by leading global hospitality brands, 600 retail outlets, 7 entertainment zones, 5,000 parking spaces, plus the Artisans Village and Carnival Village.',
      'Eng. Saud Bin Khalid AlShubaily, CEO of Al Eisaar Al Arabiya, confirmed the project is a significant economic addition supporting Vision 2030 tourism and investment goals, noting that leasing for AlShubaily Grand Mall has already begun.',
      'AlShubaily Town is part of Al Eisaar Al Arabiya\'s portfolio of six large-scale projects across Riyadh, Makkah, Qatif, Hail, and Al Khobar — all delivered to international standards for Saudi Arabia\'s growing market.',
    ],
    image: mediaCenterAsset("الشبيلي-تاون.jpg"),
    externalSources: [
      {
        id: "alriyadh",
        labelAr: "جريدة الرياض",
        labelEn: "Al Riyadh",
        urls: ["https://www.alriyadh.com/66819"],
      },
      {
        id: "sabq",
        labelAr: "سبق",
        labelEn: "Sabq",
        urls: ["https://sabq.org/article/oIageF6"],
      },
      {
        id: "ajel",
        labelAr: "عاجل",
        labelEn: "Ajel",
        urls: ["https://ajel.sa/economy/zwgjdw073l"],
      },
      {
        id: "x",
        labelAr: "X",
        labelEn: "X",
        urls: [],
      },
      {
        id: "snapchat",
        labelAr: "سناب شات",
        labelEn: "Snapchat",
        urls: [],
      },
      {
        id: "youtube",
        labelAr: "يوتيوب",
        labelEn: "YouTube",
        urls: ["https://youtu.be/cUTxki_3YBs?si=O8Ar4orSsRfsMGCN"],
      },
    ],
  },
  {
    id: "cn-001",
    category: "company-news",
    layout: "image",
    date: "2026-06-15",
    featured: true,
    titleAr: "مجموعة الشبيلي تُعزّز حضورها في قطاع التطوير العقاري",
    titleEn: "AlShubaily Group strengthens its real estate development presence",
    excerptAr:
      "خطوات استراتيجية جديدة لتوسيع محفظة المشاريع وتعزيز الشراكات الاستثمارية على مستوى المملكة.",
    excerptEn:
      "New strategic steps to expand the project portfolio and strengthen investment partnerships across the Kingdom.",
    bodyParagraphsAr: [
      "أعلنت مجموعة خالد بن سعود الشبيلي عن خطط توسّع طموحة تهدف إلى تعزيز حضورها في قطاع التطوير العقاري، مع التركيز على مشاريع متكاملة تجمع بين الجودة والاستدامة وتواكب تطلعات رؤية المملكة 2030.",
      "وتشمل الخطة تعزيز الشراكات مع المطورين والمستثمرين المحليين والدوليين، وتسريع وتيرة التسليم في المشاريع القائمة، مع الحفاظ على أعلى معايير الجودة في التصميم والتنفيذ.",
      "وأكدت قيادة المجموعة أن هذه الخطوة تأتي ضمن رؤية طويلة المدى لبناء وجهات عقارية واستثمارية تُلبّي تطلعات المجتمعات وتُسهم في تنمية المناطق التي تعمل بها.",
    ],
    bodyParagraphsEn: [
      "Khalid Bin Saud AlShubaily Group announced ambitious expansion plans to strengthen its presence in real estate development, focusing on integrated projects that combine quality, sustainability, and alignment with Vision 2030.",
      "The plan includes strengthening partnerships with local and international developers and investors, accelerating delivery across active projects while maintaining the highest design and execution standards.",
      "Group leadership confirmed this step is part of a long-term vision to build real estate and investment destinations that meet community aspirations and contribute to regional development.",
    ],
    image: "/assets/hero/Hero-1.jpg",
  },
  {
    id: "cn-002",
    category: "company-news",
    layout: "image-video",
    date: "2026-05-28",
    titleAr: "توقيع اتفاقية شراكة استراتيجية جديدة",
    titleEn: "Signing of a new strategic partnership agreement",
    excerptAr: "شراكة تدعم تسريع تنفيذ المشاريع وتوسيع نطاق الخدمات.",
    excerptEn: "A partnership supporting faster project delivery and expanded services.",
    bodyParagraphsAr: [
      "وقّعت مجموعة الشبيلي اتفاقية شراكة استراتيجية مع شريك استثماري رائد، تهدف إلى تسريع تنفيذ المشاريع القائمة والمستقبلية في مختلف مناطق المملكة.",
      "وتُمكّن الاتفاقية من تبادل الخبرات في التخطيط العمراني وإدارة المشاريع الكبرى، بما يعزز جودة التسليم ويُسرّع من جاهزية الوجهات الجديدة للاستثمار.",
      "وأشارت المجموعة إلى أن الشراكة تُمثل خطوة محورية في مسيرة التوسع، وتفتح آفاقاً جديدة لاستقطاب فرص استثمارية نوعية في قطاعات التجزئة والضيافة والسكن الراقي.",
    ],
    bodyParagraphsEn: [
      "AlShubaily Group signed a strategic partnership agreement with a leading investment partner to accelerate current and future projects across the Kingdom.",
      "The agreement enables knowledge exchange in urban planning and large-scale project management, enhancing delivery quality and speeding readiness of new investment destinations.",
      "The Group noted the partnership is a pivotal step in its expansion journey, opening new avenues for quality investment opportunities in retail, hospitality, and premium residential sectors.",
    ],
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
    videoUrl: RABIA_VIDEO_URL,
  },
  {
    id: "pu-001",
    category: "project-updates",
    layout: "image-video",
    date: "2026-06-20",
    featured: true,
    titleAr: "تقدم ملحوظ في أعمال كورنيش حائل",
    titleEn: "Notable progress at Hail Corniche",
    excerptAr: "مشاهد جديدة من سير العمل في أحد أبرز مشاريع المنطقة.",
    excerptEn: "New scenes from one of the region's landmark developments.",
    bodyParagraphsAr: [
      "شهد مشروع كورنيش حائل تقدماً ملحوظاً في مراحل التطوير، حيث تتواصل الأعمال في الواجهة البحرية والمرافق الترفيهية المصممة بمعايير عالمية.",
      "ويشمل المشروع مساحات خضراء واسعة وممرات للمشاة ومناطق ترفيهية عائلية، بهدف خلق وجهة سياحية وترفيهية متكاملة تُعزّز من جاذبية منطقة حائل.",
      "وأكد فريق التطوير أن الأعمال تسير وفق الجدول الزمني المخطط، مع التركيز على جودة التشطيبات والبنية التحتية المتكاملة التي تضمن تجربة زوار استثنائية.",
    ],
    bodyParagraphsEn: [
      "Hail Corniche has seen notable development progress, with ongoing work on the waterfront and entertainment facilities designed to international standards.",
      "The project includes expansive green spaces, pedestrian promenades, and family entertainment zones, creating an integrated tourism and leisure destination that enhances Hail's appeal.",
      "The development team confirmed work is on schedule, with a focus on finishing quality and integrated infrastructure ensuring an exceptional visitor experience.",
    ],
    image: hailCornicheAsset("Hero-section.png"),
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
  },
  {
    id: "pu-002",
    category: "project-updates",
    layout: "image",
    date: "2026-06-08",
    titleAr: "مدينة الدمام الأولمبية — مرحلة جديدة من البنية التحتية",
    titleEn: "Dammam Olympic City — new infrastructure phase",
    excerptAr: "تحديثات من موقع المشروع الرياضي المتكامل.",
    excerptEn: "Updates from the integrated sports city site.",
    bodyParagraphsAr: [
      "انطلقت مرحلة جديدة من أعمال البنية التحتية في مدينة الدمام الأولمبية، تمهيداً لاستكمال المرافق الرياضية والترفيهية التي ستُشكّل أحد أبرز الوجهات في المنطقة الشرقية.",
      "ويشمل المشروع ملاعب متعددة الأغراض ومناطق تدريب ومرافق ترفيهية وضيافية، في إطار رؤية متكاملة لمدينة رياضية عصرية تخدم المجتمع المحلي والزوار.",
      "وتُظهر اللقطات من الموقع حجم العمل الجاري في تسوية الأراضي وشبكات المرافق، بما يؤكد التزام المجموعة بإنجاز المشروع وفق أعلى المعايير الهندسية.",
    ],
    bodyParagraphsEn: [
      "A new infrastructure phase has begun at Dammam Olympic City, paving the way for completion of sports and entertainment facilities that will become a landmark destination in the Eastern Region.",
      "The project includes multi-purpose stadiums, training zones, and hospitality and entertainment facilities within a vision for a modern sports city serving local communities and visitors.",
      "Site footage shows ongoing land preparation and utility networks, confirming the Group's commitment to delivering the project to the highest engineering standards.",
    ],
    image: dammamAsset("City-landscape.png"),
  },
  {
    id: "pu-003",
    category: "project-updates",
    layout: "video-cover",
    date: "2026-05-12",
    titleAr: "حائل واك واي — لقطات جوية من الموقع",
    titleEn: "Hail Walkway — aerial site footage",
    excerptAr: "فيديو يُبرز المسار والتصميم العمراني للممشى.",
    excerptEn: "Video highlighting the walkway route and urban design.",
    bodyParagraphsAr: [
      "يستعرض هذا المقطع المرئي تقدم أعمال مشروع حائل واك واي، أحد أهم المشاريع الترفيهية والتجارية في منطقة حائل.",
      "ويتميز الممشى بتصميم عمراني راقٍ يربط بين المساحات الخضراء والمرافق التجارية، ليخلق تجربة متكاملة للزوار والمقيمين على حدٍّ سواء.",
      "وأكد فريق المشروع أن الأعمال تتقدم بخطى ثابتة، مع التركيز على تفاصيل التنسيق الحضري والإضاءة التي تُضفي على الممشى طابعاً مميزاً ليلاً ونهاراً.",
    ],
    bodyParagraphsEn: [
      "This video showcases progress at Hail Walkway, one of the region's key entertainment and commercial developments.",
      "The walkway features refined urban design connecting green spaces and commercial facilities, creating an integrated experience for visitors and residents alike.",
      "The project team confirmed steady progress, with a focus on landscaping and lighting details that give the walkway a distinctive character day and night.",
    ],
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
    image: hailWalkwayAsset("6.jpeg"),
  },
  {
    id: "mc-001",
    category: "media-coverage",
    layout: "image",
    date: "2026-06-10",
    titleAr: "تغطية إعلامية لإطلاق أحدث مشاريع المجموعة",
    titleEn: "Media coverage of the Group's latest project launch",
    excerptAr: "استقطاب اهتمام وسائل الإعلام المحلية والإقليمية.",
    excerptEn: "Drawing attention from local and regional media outlets.",
    bodyParagraphsAr: [
      "حظي إطلاق أحدث مشاريع مجموعة الشبيلي بتغطية إعلامية واسعة من عدد من وسائل الإعلام المحلية والإقليمية، التي سلطت الضوء على رؤية المجموعة في تطوير وجهات عقارية متميزة.",
      "وركّزت التقارير الإعلامية على حجم الاستثمار والموقع الاستراتيجي للمشروع، إضافة إلى التصميم المعماري الذي يجمع بين الحداثة والهوية المحلية.",
      "وأشاد المحللون بخطط المجموعة في تنويع محفظتها العقارية، وقدرتها على تقديم مشاريع متكاملة تُلبّي احتياجات السوق السعودي المتنامي.",
    ],
    bodyParagraphsEn: [
      "The launch of AlShubaily Group's latest project received broad coverage from local and regional media, highlighting the Group's vision for distinctive real estate destinations.",
      "Reports focused on investment scale, strategic location, and architectural design blending modernity with local identity.",
      "Analysts praised the Group's portfolio diversification and its ability to deliver integrated projects meeting the needs of Saudi Arabia's growing market.",
    ],
    image: "/assets/hero/Hero-2.jpg",
  },
  {
    id: "mc-002",
    category: "media-coverage",
    layout: "image-video",
    date: "2026-04-22",
    titleAr: "لقاء صحفي مع قيادة المجموعة",
    titleEn: "Press briefing with Group leadership",
    excerptAr: "تصريحات حول مستقبل المشاريع وخطط التوسع.",
    excerptEn: "Statements on the future of projects and expansion plans.",
    bodyParagraphsAr: [
      "عقدت مجموعة الشبيلي لقاءً صحفياً حضره ممثلون عن عدد من وسائل الإعلام، استعرضت فيه أبرز محاور العمل المستقبلية والتزامها بأعلى معايير الجودة.",
      "وتناول اللقاء خطط التوسع في مناطق جديدة، ودور المجموعة في دعم رؤية المملكة 2030 من خلال مشاريع عقارية واستثمارية نوعية.",
      "وأكدت القيادة أن المجموعة تسير بثقة نحو مستقبل واعد، مع محفظة مشاريع متنوعة في مكة والرياض وحائل والمنطقة الشرقية.",
    ],
    bodyParagraphsEn: [
      "AlShubaily Group held a press briefing attended by media representatives, outlining key future workstreams and its commitment to the highest quality standards.",
      "The briefing covered expansion plans in new regions and the Group's role in supporting Vision 2030 through distinctive real estate and investment projects.",
      "Leadership confirmed the Group is moving confidently toward a promising future, with a diverse portfolio across Makkah, Riyadh, Hail, and the Eastern Region.",
    ],
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM.jpeg"),
    videoUrl: RABIA_VIDEO_URL,
  },
  {
    id: "ev-001",
    category: "events",
    layout: "image",
    date: "2026-06-01",
    featured: true,
    titleAr: "حفل تدشين مشروع الشبيلي جراند مول",
    titleEn: "AlShubaily Grand Mall inauguration ceremony",
    excerptAr: "فعالية حضورها نخبة من الشركاء والمستثمرين.",
    excerptEn: "An event attended by partners and investors.",
    bodyParagraphsAr: [
      "أقيم حفل تدشين مشروع الشبيلي جراند مول بحضور نخبة من الشركاء والمستثمرين ومسؤولين محليين، احتفاءً بإطلاق وجهة تجارية جديدة في المنطقة الشرقية.",
      "وتضمّنت الفعالية جولة في المشروع وعرضاً للتصميم المعماري والمرافق التي ستضمها الوجهة، بما في ذلك مساحات تجارية وترفيهية وخدمية.",
      "وأكد الحضور أن المشروع يُمثل إضافة نوعية للقطاع التجاري في المنطقة، ويعكس التزام مجموعة الشبيلي بتقديم وجهات تلبي تطلعات الزوار والمستثمرين.",
    ],
    bodyParagraphsEn: [
      "AlShubaily Grand Mall inauguration was held with partners, investors, and local officials, celebrating a new commercial destination in the Eastern Region.",
      "The event included a project tour and presentation of architectural design and facilities, including retail, entertainment, and service spaces.",
      "Attendees confirmed the project is a quality addition to the region's commercial sector, reflecting AlShubaily Group's commitment to destinations meeting visitor and investor expectations.",
    ],
    image: "/assets/hero/Hero-3.jpg",
  },
  {
    id: "ev-002",
    category: "events",
    layout: "image-video",
    date: "2026-03-18",
    titleAr: "مشاركة المجموعة في معرض عقاري دولي",
    titleEn: "Group participation in an international real estate exhibition",
    excerptAr: "عرض أبرز المشاريع والفرص الاستثمارية.",
    excerptEn: "Showcasing flagship projects and investment opportunities.",
    bodyParagraphsAr: [
      "شاركت مجموعة الشبيلي في معرض عقاري دولي حضره آلاف الزوار والمستثمرين، حيث عرضت نماذج لأبرز مشاريعها وفرص الاستثمار المتاحة.",
      "وتضمّن جناح المجموعة عروضاً مرئية تفاعلية ونماذج مصغرة للمشاريع، إلى جانب لقاءات مع مستثمرين مهتمين بالسوق السعودي.",
      "وأشاد زوار المعرض بتنوع محفظة المجموعة وجودة التصاميم المعروضة، مما يعكس مكانة الشبيلي كإحدى المجموعات الرائدة في التطوير العقاري.",
    ],
    bodyParagraphsEn: [
      "AlShubaily Group participated in an international real estate exhibition attended by thousands of visitors and investors, presenting models of flagship projects and available investment opportunities.",
      "The Group's pavilion included interactive visual displays and project models, alongside meetings with investors interested in the Saudi market.",
      "Exhibition visitors praised the Group's portfolio diversity and design quality, reflecting AlShubaily's standing as a leading real estate development group.",
    ],
    image: dammamAsset("Football-studium.jpg"),
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
  },
  {
    id: "cn-003",
    category: "company-news",
    layout: "video-cover",
    date: "2026-04-05",
    titleAr: "فيلم تعريفي — رحلة مجموعة الشبيلي",
    titleEn: "Corporate film — The AlShubaily Group journey",
    excerptAr: "عرض مرئي يستعرض محفظة المشاريع ورؤية المجموعة.",
    excerptEn: "A visual showcase of the project portfolio and Group vision.",
    bodyParagraphsAr: [
      "أطلقت مجموعة الشبيلي فيلماً تعريفياً جديداً يستعرض رحلة المجموعة ومحفظة مشاريعها في مختلف مناطق المملكة.",
      "ويتناول الفيلم رؤية المجموعة ورسالتها في بناء وجهات عقارية متكاملة، مع لقطات سينمائية من أبرز المشاريع القائمة والقادمة.",
      "ويهدف العرض إلى إطلاع الشركاء والمستثمرين والجمهور على حجم الإنجازات وطموحات المجموعة المستقبلية في قطاع التطوير العقاري.",
    ],
    bodyParagraphsEn: [
      "AlShubaily Group released a new corporate film showcasing the Group's journey and project portfolio across the Kingdom.",
      "The film presents the Group's vision and mission in building integrated real estate destinations, with cinematic footage from flagship current and upcoming projects.",
      "The presentation aims to inform partners, investors, and the public about achievements and future ambitions in real estate development.",
    ],
    videoUrl: RABIA_VIDEO_URL,
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.38 PM.jpeg"),
  },
];
