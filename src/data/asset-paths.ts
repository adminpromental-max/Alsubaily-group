/** Exact folder names as committed in git / deployed on Vercel */
/** مدينة الدمام — من مشروع alshubaily (web) الأصلي */
export const DAMMAM_PROJECT_DIR = "dammam-olympic";
export const BEACH_PROJECT_DIR = "منتجع منزل البحر ";

export function projectAsset(dir: string, file: string) {
  return encodeURI(`/assets/projects/${dir}/${file}`);
}

export function dammamAsset(file: string) {
  return projectAsset(DAMMAM_PROJECT_DIR, file);
}

export function beachAsset(file: string) {
  return projectAsset(BEACH_PROJECT_DIR, file);
}

export const TIDARA_PROJECT_DIR = "Tidara-tower";

export function tidaraAsset(file: string) {
  return projectAsset(TIDARA_PROJECT_DIR, file);
}

export const PROJECT_TYPES_DIR = "انواع المشاريع";

export function projectTypeAsset(file: string) {
  return projectAsset(PROJECT_TYPES_DIR, file);
}

export const RABIA_PROJECT_DIR = "رابية مكه المكرمه";

export function rabiaAsset(file: string) {
  return projectAsset(RABIA_PROJECT_DIR, file);
}

export const LOGO_DIR = "لوجوهات مجموعة الشبيلي";

export function groupLogo(file: string) {
  return encodeURI(`/assets/${LOGO_DIR}/${file}`);
}
