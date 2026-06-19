/**
 * Lightweight runtime checks for adapting the cinematic 3D layer to
 * the visitor's device. All checks are SSR-safe (return conservative
 * defaults when window is undefined).
 */

export function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export type PerfTier = "high" | "medium" | "low";

export function getPerfTier(): PerfTier {
  if (typeof navigator === "undefined") return "medium";
  const cores = navigator.hardwareConcurrency ?? 4;
  // deviceMemory is non-standard; treat undefined as unknown.
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const mobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  if (cores <= 4 || (mem !== undefined && mem <= 4) || mobile) {
    if (cores <= 2 || (mem !== undefined && mem <= 2)) return "low";
    return "medium";
  }
  return "high";
}
