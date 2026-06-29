/**
 * Marker positions (% of map image) for new-map3.png (2784×1536).
 * Pin needle tip anchors on region labels / colored blobs.
 */
export const MAP_V2_SRC = "/assets/new-map3.png";
export const MAP_V2_SIZE = { w: 2784, h: 1536 };

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — shifted right onto مكة label
  2: { x: 28, y: 64 },
  20: { x: 28, y: 67 },
  // Hail — spread north/south, shifted right onto حائل
  3: { x: 25, y: 34 },
  4: { x: 26, y: 39 },
  // Riyadh — shifted right & down onto الرياض label (same spacing)
  5: { x: 36, y: 61 },
  6: { x: 39, y: 62.5 },
  7: { x: 41.5, y: 63.5 },
  8: { x: 37.5, y: 61.5 },
  // Eastern — shifted right & down onto المنطقة الشرقية label (same spacing)
  9: { x: 55, y: 52 },
  10: { x: 59, y: 54 },
  11: { x: 63, y: 56 },
  12: { x: 65, y: 60 },
  13: { x: 57, y: 53 },
  14: { x: 53, y: 50 },
  15: { x: 61, y: 58 },
  16: { x: 67, y: 54 },
  17: { x: 55, y: 66 },
  18: { x: 63, y: 68 },
  19: { x: 59, y: 62 },
};
