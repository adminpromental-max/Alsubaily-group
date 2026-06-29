import type { RegionId } from "@/data/projects";

/**
 * Marker positions (% of map image) for new-map 2.png (1392×768).
 * Pin tip (bottom of teardrop) sits on the colored region blobs — not above labels.
 */
export const MAP_V2_SRC = encodeURI("/assets/new-map 2.png");
export const MAP_V2_SIZE = { w: 1392, h: 768 };

/** Gold glow pin theme (all regions share the same look) */
export const MAP_V2_PIN_GOLD = "#C9A962";
export const MAP_V2_PIN_DARK = "#14110D";

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — western coastal / hatched zone
  2: { x: 16.5, y: 63.5 },
  20: { x: 18.5, y: 66.5 },
  // Hail — tan northern blob
  3: { x: 22, y: 36.5 },
  4: { x: 24, y: 39.5 },
  // Riyadh — central grey blob
  5: { x: 32.5, y: 54 },
  6: { x: 34.5, y: 56 },
  7: { x: 36, y: 57.5 },
  8: { x: 33.5, y: 55 },
  // Eastern — dark grey north-east blob
  9: { x: 48.5, y: 52 },
  10: { x: 50.5, y: 53.5 },
  11: { x: 52.5, y: 55 },
  12: { x: 54.5, y: 56 },
  13: { x: 49.5, y: 53 },
  14: { x: 47.5, y: 51 },
  15: { x: 51.5, y: 54.5 },
  16: { x: 53.5, y: 52.5 },
  17: { x: 50, y: 55.5 },
  18: { x: 53, y: 57 },
  19: { x: 49, y: 54 },
};

/** @deprecated kept for type compat — preview uses unified gold pins */
export const MAP_V2_REGION_COLORS: Record<Exclude<RegionId, "all">, string> = {
  mecca: MAP_V2_PIN_GOLD,
  hail: MAP_V2_PIN_GOLD,
  riyadh: MAP_V2_PIN_GOLD,
  eastern: MAP_V2_PIN_GOLD,
};

export function getMapV2RegionColor(_region: Exclude<RegionId, "all">): string {
  return MAP_V2_PIN_GOLD;
}
