export const SHOWCASE_OVERRIDE_KEY = "showcase:images:v1";

export type ShowcaseOverride = {
  folderId?: string;
  images: string[];
  updatedAt: number;
};

export function loadShowcaseOverride(): ShowcaseOverride | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SHOWCASE_OVERRIDE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ShowcaseOverride;
    if (!parsed?.images?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveShowcaseOverride(value: ShowcaseOverride) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SHOWCASE_OVERRIDE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("showcase-override-changed"));
}

export function clearShowcaseOverride() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SHOWCASE_OVERRIDE_KEY);
  window.dispatchEvent(new CustomEvent("showcase-override-changed"));
}
