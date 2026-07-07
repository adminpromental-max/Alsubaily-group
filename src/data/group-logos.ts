const BANNER_BASE = "/assets/Banner-logos";

export type GroupSubsidiary = {
  id: string;
  logo: string;
  nameAr: string;
  nameEn: string;
  chipClass: string;
};

/** Primary group logo — header, group section, favicon */
export const ALSHUBAILY_LOGO = "/assets/projects/Alshubaily-logo.png";

/** Main group logo — used in chairman / vision section */
export const GROUP_HERO_LOGO = ALSHUBAILY_LOGO;

/** Compact icon — used in the banner header */
export const GROUP_ICON = ALSHUBAILY_LOGO;

/** Background video for the logo marquee banner — hosted on Cloudinary CDN */
export const BANNER_VIDEO =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/q_auto,f_mp4/v1781615121/banner-video_ciymr0.mov";

/** Top row (RTL): الإيسار → أهل البيت → Front · Bottom row: 1 · 3 · 5 */
export const GROUP_SUBSIDIARIES: GroupSubsidiary[] = [
  {
    id: "esaar",
    logo: `${BANNER_BASE}/Esaar.png`,
    nameAr: "الإيسار العربية",
    nameEn: "Al Eisaar Al Arabiya",
    chipClass:
      "border-[#2E6B8A]/35 bg-[#2E6B8A]/10 text-[#1E4A5F] hover:bg-[#2E6B8A]/18 hover:border-[#2E6B8A]/55",
  },
  {
    id: "ahl-albayt",
    logo: `${BANNER_BASE}/Ahl-albait.png`,
    nameAr: "الشبيلي وأهل البيت",
    nameEn: "AlShubaily & Ahl al-Bayt",
    chipClass:
      "border-[#C9A962]/35 bg-[#C9A962]/12 text-[#8A6E2F] hover:bg-[#C9A962]/22 hover:border-[#C9A962]/55",
  },
  {
    id: "front",
    logo: `${BANNER_BASE}/front.png`,
    nameAr: "فرونت",
    nameEn: "Front",
    chipClass:
      "border-[#6B4FA0]/35 bg-[#6B4FA0]/10 text-[#4A3570] hover:bg-[#6B4FA0]/18 hover:border-[#6B4FA0]/55",
  },
  {
    id: "development",
    logo: `${BANNER_BASE}/1.png`,
    nameAr: "الشبيلي للتطوير العقاري",
    nameEn: "AlShubaily Real Estate Development",
    chipClass:
      "border-[#C9A962]/35 bg-[#C9A962]/12 text-[#8A6E2F] hover:bg-[#C9A962]/22 hover:border-[#C9A962]/55",
  },
  {
    id: "investment",
    logo: `${BANNER_BASE}/3.png`,
    nameAr: "الشبيلي للاستثمار",
    nameEn: "AlShubaily Investment",
    chipClass:
      "border-[#6B4FA0]/35 bg-[#6B4FA0]/10 text-[#4A3570] hover:bg-[#6B4FA0]/18 hover:border-[#6B4FA0]/55",
  },
  {
    id: "trading",
    logo: `${BANNER_BASE}/5.png`,
    nameAr: "الشبيلي للتجارة",
    nameEn: "AlShubaily Trading",
    chipClass:
      "border-[#3D7A5A]/35 bg-[#3D7A5A]/10 text-[#2A5540] hover:bg-[#3D7A5A]/18 hover:border-[#3D7A5A]/55",
  },
];
