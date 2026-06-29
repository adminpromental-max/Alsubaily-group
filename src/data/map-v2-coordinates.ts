/**
 * Marker positions (% of map image) for new-map3.png (2784×1536).
 * Pin needle tip anchors on the colored region blobs.
 */
export const MAP_V2_SRC = "/assets/new-map3.png";
export const MAP_V2_SIZE = { w: 2784, h: 1536 };

export const MAP_V2_COORDINATES: Record<number, { x: number; y: number }> = {
  // Mecca — western zone
  2: { x: 20.5, y: 64 },
  20: { x: 20.5, y: 67 },
  // Hail — tan northern blob
  3: { x: 22.5, y: 37 },
  4: { x: 24.5, y: 40 },
  // Riyadh — spread slightly downward into open area
  5: { x: 32, y: 57 },
  6: { x: 35, y: 58.5 },
  7: { x: 37.5, y: 59.5 },
  8: { x: 33.5, y: 57.5 },
  // Eastern — spread across the full grey eastern region (new-map3)
  9: { x: 48, y: 44 },
  10: { x: 52, y: 46 },
  11: { x: 56, y: 48 },
  12: { x: 58, y: 52 },
  13: { x: 50, y: 45 },
  14: { x: 46, y: 42 },
  15: { x: 54, y: 50 },
  16: { x: 60, y: 46 },
  17: { x: 48, y: 58 },
  18: { x: 56, y: 60 },
  19: { x: 52, y: 54 },
};
