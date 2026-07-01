import { projectTypeAsset } from "@/data/asset-paths";

export type ProjectCategoryId =
  | "residential"
  | "neighborhoods"
  | "commercial"
  | "tourism"
  | "office";

export type ProjectCategory = {
  id: ProjectCategoryId;
  nameAr: string;
  nameEn: string;
  bioAr: string;
  bioEn: string;
  image: string;
};

/** Maps each project slug → category for filters & type cards */
export const PROJECT_CATEGORY_BY_SLUG: Record<string, ProjectCategoryId> = {
  "alshubaily-ahl-albayt": "commercial",
  "rabia-makkah": "residential",
  "hail-corniche": "tourism",
  "hail-walkway": "tourism",
  "benban-residence": "residential",
  "alshubaily-residence": "residential",
  "riyadh-boulevard": "tourism",
  "golf-city": "tourism",
  "alshubaily-town": "commercial",
  "alshubaily-grand-mall": "commercial",
  "beach-house-resort": "tourism",
  "alshubaily-port": "commercial",
  "dammam-olympic-city": "tourism",
  "al-zahraa": "residential",
  "alshubaily-high-rise": "office",
  "alshubaily-high-rise-2": "office",
  "sultanat-al-sharq": "commercial",
  "alshubaily-new-beach": "tourism",
  "rabia-road": "commercial",
  "tidara-towers": "office",
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "tourism",
    nameAr: "سياحي",
    nameEn: "Tourism",
    bioAr: "نصمم وجهات تتجاوز التوقعات، حيث يلتقي الابتكار بالرفاهية لتجربة سياحية فريدة.",
    bioEn: "Destinations that exceed expectations — where innovation meets luxury for a unique experience.",
    image: projectTypeAsset("سياحي.png"),
  },
  {
    id: "residential",
    nameAr: "سكني",
    nameEn: "Residential",
    bioAr: "أكثر من مجرد سكن؛ مجتمعات سكنية متكاملة تمنحك الخصوصية والرفاهية التي تستحقها.",
    bioEn: "More than housing — integrated communities offering the privacy and luxury you deserve.",
    image: projectTypeAsset("سكني.jpeg"),
  },
  {
    id: "neighborhoods",
    nameAr: "أحياء سكنية",
    nameEn: "Residential Neighborhoods",
    bioAr: "نخطط وننفّذ أحياء سكنية متكاملة تجمع بين التصميم العمراني الراقي وجودة الحياة.",
    bioEn: "We plan and develop integrated residential neighborhoods that blend refined urban design with quality of life.",
    image: projectTypeAsset("احياء سكنية.png"),
  },
  {
    id: "commercial",
    nameAr: "تجاري",
    nameEn: "Commercial",
    bioAr: "مولات تجارية تجمع البراندات العالمية (جراند مول).",
    bioEn: "Commercial malls bringing together international brands (Grand Mall).",
    image: projectTypeAsset("تجاري.png"),
  },
  {
    id: "office",
    nameAr: "مكتبي",
    nameEn: "Office",
    bioAr: "تضم مشاريع الشبيلي مكاتب استثمارية تناسب الشركات بجميع أنواعها.",
    bioEn: "AlShubaily projects include investment-grade offices suited to companies of every scale.",
    image: projectTypeAsset("مكتبي.png"),
  },
];

export const SITE_STATS = {
  projects: 18,
  investors: 850,
  requests: 2400,
};

export const VISION_MISSION = {
  eyebrowAr: "الرؤية والرسالة",
  eyebrowEn: "Vision & Mission",
  visionTitleAr: "الرؤية",
  visionTitleEn: "Vision",
  visionAr:
    "أن نكون الروّاد في تطوير الوجهات العقارية والاستثمارية التي تُجسّد رؤية المملكة 2030 وتُلهم المستقبل.",
  visionEn:
    "To be pioneers in developing real estate and investment destinations that embody Vision 2030 and inspire the future.",
  missionTitleAr: "الرسالة",
  missionTitleEn: "Mission",
  missionAr:
    "نلتزم بأعلى معايير الجودة والاستدامة لنخلق قيمة دائمة لمجتمعاتنا وشركائنا، من خلال مشاريع مبتكرة تلبي تطلعات عملائنا.",
  missionEn:
    "We are committed to the highest standards of quality and sustainability to create lasting value for our communities and partners through innovative projects that meet our clients' aspirations.",
};

export const CHAIRMAN_CONTENT = {
  eyebrowAr: "الرؤية والرسالة",
  eyebrowEn: "Vision & Message",
  quoteAr:
    "نبني وجهات عقارية واستثمارية تُجسّد طموح المملكة وتلتزم بأعلى معايير الجودة والاستدامة — لنصنع قيمة دائمة لمجتمعاتنا وشركائنا.",
  quoteEn:
    "We build real estate and investment destinations that embody the Kingdom's ambition and the highest standards of quality and sustainability — creating lasting value for our communities and partners.",
  nameAr: "خالد سعود الشبيلي",
  nameEn: "Khalid Saud AlShubaily",
  roleAr: "رئيس مجلس الإدارة",
  roleEn: "Chairman of the Board",
  signatureNameAr: "خالد سعود الشبيلي",
  signatureNameEn: "Khalid AlShubaily",
};
