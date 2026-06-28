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

export const HAIL_WALKWAY_GALLERY_DIR = "gallery-Hail-walkaway";

export function hailWalkwayAsset(file: string) {
  return encodeURI(`/assets/${HAIL_WALKWAY_GALLERY_DIR}/${file}`);
}

export const HAIL_CORNICHE_DIR = "Hail-cournish";

export function hailCornicheAsset(file: string) {
  return projectAsset(HAIL_CORNICHE_DIR, file);
}

export const HIGH_RISE_DIR = "High-rise";

export function highRiseAsset(file: string) {
  return projectAsset(HIGH_RISE_DIR, file);
}

export const SULTANAT_DIR = "سلطانه-الشرق";

export function sultanatAsset(file: string) {
  return projectAsset(SULTANAT_DIR, file);
}

export const ZAHRAA_DIR = "Alzahraa2";

export function zahraaAsset(file: string) {
  return projectAsset(ZAHRAA_DIR, file);
}

export const NEW_BEACH_DIR = "New-beach";

export function newBeachAsset(file: string) {
  return projectAsset(NEW_BEACH_DIR, file);
}

export const RABIA_ROAD_DIR = "rabia-road";

export function rabiaRoadAsset(file: string) {
  return projectAsset(RABIA_ROAD_DIR, file);
}

export const GRAND_MALL_DIR = "Grand-Mall";

export function grandMallAsset(...parts: string[]) {
  return projectAsset(GRAND_MALL_DIR, parts.join("/"));
}

export const LOGO_DIR = "لوجوهات مجموعة الشبيلي";

export function groupLogo(file: string) {
  return encodeURI(`/assets/${LOGO_DIR}/${file}`);
}
