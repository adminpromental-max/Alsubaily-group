import { dammamAsset, hailCornicheAsset, rabiaAsset } from "@/data/asset-paths";
import { HAIL_CORNICHE_VIDEO_URL } from "@/data/hail-corniche-content";
import { RABIA_VIDEO_URL } from "@/data/rabia-content";

export type MediaCategoryId =
  | "company-news"
  | "project-updates"
  | "media-coverage"
  | "events";

export type MediaArticleMediaType = "image" | "video" | "image-video";

export type MediaCategory = {
  id: MediaCategoryId;
  nameAr: string;
  nameEn: string;
};

export type MediaArticle = {
  id: string;
  category: MediaCategoryId;
  date: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  bodyAr: string;
  bodyEn: string;
  image?: string;
  videoUrl?: string;
  featured?: boolean;
};

export const MEDIA_CATEGORIES: MediaCategory[] = [
  {
    id: "company-news",
    nameAr: "أخبار الشركة",
    nameEn: "Company News",
  },
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
): MediaArticleMediaType {
  if (article.image && article.videoUrl) return "image-video";
  if (article.videoUrl) return "video";
  return "image";
}

export function getCategoryById(id: MediaCategoryId): MediaCategory {
  return MEDIA_CATEGORIES.find((c) => c.id === id) ?? MEDIA_CATEGORIES[0];
}

/** Replace or extend this list when publishing real articles. */
export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: "cn-001",
    category: "company-news",
    date: "2026-06-15",
    featured: true,
    titleAr: "مجموعة الشبيلي تُعزّز حضورها في قطاع التطوير العقاري",
    titleEn: "AlShubaily Group strengthens its real estate development presence",
    excerptAr:
      "خطوات استراتيجية جديدة لتوسيع محفظة المشاريع وتعزيز الشراكات الاستثمارية على مستوى المملكة.",
    excerptEn:
      "New strategic steps to expand the project portfolio and strengthen investment partnerships across the Kingdom.",
    bodyAr:
      "أعلنت مجموعة خالد بن سعود الشبيلي عن خطط توسّع تهدف إلى تعزيز حضورها في قطاع التطوير العقاري، مع التركيز على مشاريع متكاملة تجمع بين الجودة والاستدامة. وتأتي هذه الخطوة في إطار رؤية المجموعة لبناء وجهات عقارية تُلبّي تطلعات المستثمرين والمجتمعات.",
    bodyEn:
      "Khalid Bin Saud AlShubaily Group announced expansion plans to strengthen its presence in real estate development, focusing on integrated projects that combine quality and sustainability — building destinations that meet investor and community aspirations.",
    image: "/assets/hero/Hero-1.jpg",
  },
  {
    id: "cn-002",
    category: "company-news",
    date: "2026-05-28",
    titleAr: "توقيع اتفاقية شراكة استراتيجية جديدة",
    titleEn: "Signing of a new strategic partnership agreement",
    excerptAr: "شراكة تدعم تسريع تنفيذ المشاريع وتوسيع نطاق الخدمات.",
    excerptEn: "A partnership supporting faster project delivery and expanded services.",
    bodyAr:
      "وقّعت المجموعة اتفاقية شراكة استراتيجية تهدف إلى تسريع تنفيذ المشاريع القائمة والمستقبلية، وتعزيز جودة التسليم في مختلف المناطق.",
    bodyEn:
      "The Group signed a strategic partnership agreement aimed at accelerating current and future projects while enhancing delivery quality across regions.",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
    videoUrl: RABIA_VIDEO_URL,
  },
  {
    id: "pu-001",
    category: "project-updates",
    date: "2026-06-20",
    featured: true,
    titleAr: "تقدم ملحوظ في أعمال كورنيش حائل",
    titleEn: "Notable progress at Hail Corniche",
    excerptAr: "مشاهد جديدة من سير العمل في أحد أبرز مشاريع المنطقة.",
    excerptEn: "New scenes from one of the region's landmark developments.",
    bodyAr:
      "شهد مشروع كورنيش حائل تقدماً ملحوظاً في مراحل التطوير، مع استمرار الأعمال في الواجهة البحرية والمرافق الترفيهية المصممة بمعايير عالمية.",
    bodyEn:
      "Hail Corniche has seen notable development progress, with ongoing work on the waterfront and entertainment facilities designed to international standards.",
    image: hailCornicheAsset("Hero-section.png"),
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
  },
  {
    id: "pu-002",
    category: "project-updates",
    date: "2026-06-08",
    titleAr: "مدينة الدمام الأولمبية — مرحلة جديدة من البنية التحتية",
    titleEn: "Dammam Olympic City — new infrastructure phase",
    excerptAr: "تحديثات من موقع المشروع الرياضي المتكامل.",
    excerptEn: "Updates from the integrated sports city site.",
    bodyAr:
      "انطلقت مرحلة جديدة من أعمال البنية التحتية في مدينة الدمام الأولمبية، تمهيداً لاستكمال المراف الرياضية والترفيهية.",
    bodyEn:
      "A new infrastructure phase has begun at Dammam Olympic City, paving the way for completion of sports and entertainment facilities.",
    image: dammamAsset("City-landscape.png"),
  },
  {
    id: "pu-003",
    category: "project-updates",
    date: "2026-05-12",
    titleAr: "حائل واك واي — لقطات جوية من الموقع",
    titleEn: "Hail Walkway — aerial site footage",
    excerptAr: "فيديو يُبرز المسار والتصميم العمراني للممشى.",
    excerptEn: "Video highlighting the walkway route and urban design.",
    bodyAr:
      "مقطع مرئي يستعرض تقدم أعمال مشروع حائل واك واي، ويُظهر التكامل بين المساحات الخضراء والمرافق التجارية.",
    bodyEn:
      "A visual update on Hail Walkway progress, showing the integration of green spaces and commercial facilities.",
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
  },
  {
    id: "mc-001",
    category: "media-coverage",
    date: "2026-06-10",
    titleAr: "تغطية إعلامية لإطلاق أحدث مشاريع المجموعة",
    titleEn: "Media coverage of the Group's latest project launch",
    excerptAr: "استقطاب اهتمام وسائل الإعلام المحلية والإقليمية.",
    excerptEn: "Drawing attention from local and regional media outlets.",
    bodyAr:
      "حظي إطلاق أحدث مشاريع مجموعة الشبيلي بتغطية إعلامية واسعة، سلطت الضوء على رؤية المجموعة في تطوير وجهات عقارية متميزة.",
    bodyEn:
      "The launch of AlShubaily Group's latest project received broad media coverage, highlighting the Group's vision for distinctive real estate destinations.",
    image: "/assets/hero/Hero-2.jpg",
  },
  {
    id: "mc-002",
    category: "media-coverage",
    date: "2026-04-22",
    titleAr: "لقاء صحفي مع قيادة المجموعة",
    titleEn: "Press briefing with Group leadership",
    excerptAr: "تصريحات حول مستقبل المشاريع وخطط التوسع.",
    excerptEn: "Statements on the future of projects and expansion plans.",
    bodyAr:
      "عقدت المجموعة لقاءً صحفياً استعرض فيه أبرز محاور العمل المستقبلية، والتزامها بأعلى معايير الجودة في التطوير العقاري.",
    bodyEn:
      "The Group held a press briefing outlining key future workstreams and its commitment to the highest standards in real estate development.",
    image: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.43 PM.jpeg"),
    videoUrl: RABIA_VIDEO_URL,
  },
  {
    id: "ev-001",
    category: "events",
    date: "2026-06-01",
    featured: true,
    titleAr: "حفل تدشين مشروع الشبيلي جراند مول",
    titleEn: "AlShubaily Grand Mall inauguration ceremony",
    excerptAr: "فعالية حضورها نخبة من الشركاء والمستثمرين.",
    excerptEn: "An event attended by partners and investors.",
    bodyAr:
      "أقيم حفل تدشين مشروع الشبيلي جراند مول بحضور نخبة من الشركاء والمستثمرين، احتفاءً بإطلاق وجهة تجارية جديدة في المنطقة الشرقية.",
    bodyEn:
      "AlShubaily Grand Mall inauguration was held with partners and investors, celebrating a new commercial destination in the Eastern Region.",
    image: "/assets/hero/Hero-3.jpg",
  },
  {
    id: "ev-002",
    category: "events",
    date: "2026-03-18",
    titleAr: "مشاركة المجموعة في معرض عقاري دولي",
    titleEn: "Group participation in an international real estate exhibition",
    excerptAr: "عرض أبرز المشاريع والفرص الاستثمارية.",
    excerptEn: "Showcasing flagship projects and investment opportunities.",
    bodyAr:
      "شاركت مجموعة الشبيلي في معرض عقاري دولي، حيث عرضت نموذجاً لأبرز مشاريعها وفرص الاستثمار المتاحة للشركاء.",
    bodyEn:
      "AlShubaily Group participated in an international real estate exhibition, presenting flagship projects and investment opportunities for partners.",
    image: dammamAsset("Football-studium.jpg"),
    videoUrl: HAIL_CORNICHE_VIDEO_URL,
  },
];
