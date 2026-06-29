/**
 * Marker positions (% of map image) for new-map3.png (2784×1536).
 * Pin needle tip anchors on region labels / colored blobs.
 */
export const MAP_V2_SRC = "/assets/new-map3.png";
export const MAP_V2_SIZE = { w: 2784, h: 1536 };

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — shifted right onto مكة label
  2: { x: 28, y: 64 },
  20: { x: 29.5, y: 68 },
  // Hail — onto حائل zone
  3: { x: 33.5, y: 29 },
  4: { x: 31.5, y: 33.5 },
  // Riyadh
  5: { x: 43, y: 61 },
  6: { x: 46, y: 62.5 },
  7: { x: 41.5, y: 57 },
  8: { x: 44.5, y: 56 },
  // Eastern
  9: { x: 62, y: 51 },
  10: { x: 59, y: 54 },
  11: { x: 63, y: 56 },
  12: { x: 65, y: 60 },
  13: { x: 64, y: 53 },
  14: { x: 60, y: 47 },
  15: { x: 61, y: 58 },
  16: { x: 67, y: 54 },
  17: { x: 63, y: 65 },
  18: { x: 63, y: 68 },
  19: { x: 59, y: 62 },
};
