/**
 * Marker positions (% of map image) for new-map 2.png (1392×768).
 * Pin needle tip anchors on the colored region blobs.
 */
export const MAP_V2_SRC = encodeURI("/assets/new-map 2.png");
export const MAP_V2_SIZE = { w: 1392, h: 768 };

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — slight shift right
  2: { x: 18.5, y: 64 },
  20: { x: 20.5, y: 67 },
  // Hail — tan northern blob
  3: { x: 22.5, y: 37 },
  4: { x: 24.5, y: 40 },
  // Riyadh — spread slightly downward into open area
  5: { x: 32, y: 57 },
  6: { x: 35, y: 58.5 },
  7: { x: 37.5, y: 59.5 },
  8: { x: 33.5, y: 57.5 },
  // Eastern — spread north/south, away from far-right edge
  9: { x: 46.5, y: 49.5 },
  10: { x: 48.5, y: 51.5 },
  11: { x: 50.5, y: 53.5 },
  12: { x: 49, y: 55.5 },
  13: { x: 47.5, y: 50.5 },
  14: { x: 45.5, y: 48.5 },
  15: { x: 48.5, y: 54.5 },
  16: { x: 49.5, y: 49 },
  17: { x: 46, y: 56.5 },
  18: { x: 50, y: 58 },
  19: { x: 47, y: 52.5 },
};
