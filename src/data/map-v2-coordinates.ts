import type { RegionId } from "@/data/projects";

/**
 * Marker positions (% of map image) for new-map 2.png (1392×768).
 * Tuned to region anchors on the clean map artwork.
 */
export const MAP_V2_SRC = encodeURI("/assets/new-map 2.png");
export const MAP_V2_SIZE = { w: 1392, h: 768 };

/** Unified pin color per region (map preview) */
export const MAP_V2_REGION_COLORS: Record<Exclude<RegionId, "all">, string> = {
  mecca: "#8B6914",
  hail: "#5C7A8A",
  riyadh: "#D4782C",
  eastern: "#2E8B57",
};

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — anchor ~17.5, 57
  2: { x: 17.2, y: 55.5 },
  20: { x: 17.8, y: 59.5 },
  // Hail — anchor ~23, 28
  3: { x: 22.5, y: 27 },
  4: { x: 23.5, y: 30.5 },
  // Riyadh — anchor ~34, 47
  5: { x: 32, y: 45 },
  6: { x: 33.5, y: 47.5 },
  7: { x: 35, y: 49.5 },
  8: { x: 34, y: 46 },
  // Eastern — anchor ~47, 44
  9: { x: 45.5, y: 39.5 },
  10: { x: 47.5, y: 41.5 },
  11: { x: 49.5, y: 43.5 },
  12: { x: 51.5, y: 45.5 },
  13: { x: 48.5, y: 40.5 },
  14: { x: 46.5, y: 42.5 },
  15: { x: 50.5, y: 44.5 },
  16: { x: 52.5, y: 41.5 },
  17: { x: 49, y: 46.5 },
  18: { x: 51, y: 48.5 },
  19: { x: 47, y: 45 },
};

export function getMapV2RegionColor(region: Exclude<RegionId, "all">): string {
  return MAP_V2_REGION_COLORS[region];
}
