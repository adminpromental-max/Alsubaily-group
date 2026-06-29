/**
 * Marker positions (% of map image) for new-map 2.png (1392×768).
 * Pin needle tip anchors on the colored region blobs.
 */
export const MAP_V2_SRC = encodeURI("/assets/new-map 2.png");
export const MAP_V2_SIZE = { w: 1392, h: 768 };

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — western hatched zone
  2: { x: 17, y: 64 },
  20: { x: 19, y: 67 },
  // Hail — tan northern blob
  3: { x: 22.5, y: 37 },
  4: { x: 24.5, y: 40 },
  // Riyadh — central grey blob
  5: { x: 33, y: 55 },
  6: { x: 35, y: 57 },
  7: { x: 36.5, y: 58.5 },
  8: { x: 34, y: 56 },
  // Eastern — dark grey north-east blob
  9: { x: 49, y: 53 },
  10: { x: 51, y: 54.5 },
  11: { x: 53, y: 56 },
  12: { x: 55, y: 57 },
  13: { x: 50, y: 54 },
  14: { x: 48, y: 52 },
  15: { x: 52, y: 55.5 },
  16: { x: 54, y: 53.5 },
  17: { x: 50.5, y: 56.5 },
  18: { x: 53.5, y: 58 },
  19: { x: 49.5, y: 55 },
};
