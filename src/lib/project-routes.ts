/** Immersive project pages — use these paths instead of /projects/$slug */
export const DEDICATED_PROJECT_PATHS = {
  "tidara-towers": "/projects/tidara-towers",
  "alshubaily-ahl-albayt": "/projects/rabia-makkah",
  "rabia-makkah": "/projects/rabia-makkah",
  "dammam-olympic-city": "/projects/dammam-olympic-city",
  "hail-walkway": "/projects/hail-walkway",
  "alshubaily-high-rise": "/projects/alshubaily-high-rise",
  "sultanat-al-sharq": "/projects/sultanat-al-sharq",
  "hail-corniche": "/projects/hail-corniche",
  "al-zahraa": "/projects/al-zahraa",
  "alshubaily-new-beach": "/projects/alshubaily-new-beach",
  "rabia-road": "/projects/rabia-road",
} as const;

export type DedicatedProjectSlug = keyof typeof DEDICATED_PROJECT_PATHS;

export function getDedicatedProjectPath(slug: string): string | undefined {
  return DEDICATED_PROJECT_PATHS[slug as DedicatedProjectSlug];
}

/** Link props for TanStack Router — avoids matching the generic $slug route */
export function getProjectLinkProps(slug: string) {
  const dedicated = getDedicatedProjectPath(slug);
  if (dedicated) {
    return { to: dedicated };
  }
  return { to: "/projects/$slug" as const, params: { slug } };
}
