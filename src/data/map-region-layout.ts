import type { RegionId } from "@/data/projects";

export const MAP_V2_SRC = encodeURI("/assets/new-map 2.png");
export const MAP_V2_SIZE = { w: 1392, h: 768 };

export type MapV2RegionId = Exclude<RegionId, "all">;

export type MapV2RegionLayout = {
  id: MapV2RegionId;
  nameAr: string;
  nameEn: string;
  anchor: { x: number; y: number };
  /** Clickable zone (% of map) */
  hit: { x: number; y: number; r: number };
  color: string;
};

export type MapV2ProjectLabel = {
  projectId: number;
  label: { x: number; y: number };
};

/** Region anchors aligned to new-map 2.png (1392×768) */
export const MAP_V2_REGIONS: MapV2RegionLayout[] = [
  {
    id: "hail",
    nameAr: "حائل",
    nameEn: "Hail",
    anchor: { x: 23, y: 28 },
    hit: { x: 23, y: 28, r: 9 },
    color: "#B8954A",
  },
  {
    id: "mecca",
    nameAr: "مكة المكرمة",
    nameEn: "Mecca",
    anchor: { x: 17.5, y: 57 },
    hit: { x: 17.5, y: 57, r: 8.5 },
    color: "#6B5B4A",
  },
  {
    id: "riyadh",
    nameAr: "الرياض",
    nameEn: "Riyadh",
    anchor: { x: 34, y: 47 },
    hit: { x: 34, y: 47, r: 10 },
    color: "#C4783A",
  },
  {
    id: "eastern",
    nameAr: "المنطقة الشرقية",
    nameEn: "Eastern Region",
    anchor: { x: 47, y: 44 },
    hit: { x: 47, y: 44, r: 12 },
    color: "#2E5A6B",
  },
];

/** Label positions (% of map) — arrows draw from region anchor to here */
export const MAP_V2_PROJECT_LABELS: MapV2ProjectLabel[] = [
  // Mecca
  { projectId: 2, label: { x: 6, y: 54 } },
  { projectId: 20, label: { x: 6, y: 66 } },
  // Hail
  { projectId: 3, label: { x: 5, y: 18 } },
  { projectId: 4, label: { x: 5, y: 28 } },
  // Riyadh
  { projectId: 5, label: { x: 8, y: 38 } },
  { projectId: 6, label: { x: 8, y: 46 } },
  { projectId: 7, label: { x: 8, y: 54 } },
  { projectId: 8, label: { x: 8, y: 62 } },
  // Eastern
  { projectId: 9, label: { x: 58, y: 16 } },
  { projectId: 10, label: { x: 58, y: 24 } },
  { projectId: 11, label: { x: 58, y: 32 } },
  { projectId: 12, label: { x: 58, y: 40 } },
  { projectId: 13, label: { x: 58, y: 48 } },
  { projectId: 14, label: { x: 58, y: 56 } },
  { projectId: 15, label: { x: 58, y: 64 } },
  { projectId: 16, label: { x: 68, y: 20 } },
  { projectId: 17, label: { x: 68, y: 32 } },
  { projectId: 18, label: { x: 68, y: 44 } },
  { projectId: 19, label: { x: 68, y: 56 } },
];

/** Dedupe — project 20 is mecca only */
export const MAP_V2_LABEL_BY_PROJECT = Object.fromEntries(
  MAP_V2_PROJECT_LABELS.filter(
    (entry, i, arr) => arr.findIndex((e) => e.projectId === entry.projectId) === i,
  ).map((e) => [e.projectId, e.label]),
) as Record<number, { x: number; y: number }>;

export function getRegionLayout(id: MapV2RegionId) {
  return MAP_V2_REGIONS.find((r) => r.id === id);
}
