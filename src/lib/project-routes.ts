/** Immersive project pages — use these paths instead of /projects/$slug */
export const DEDICATED_PROJECT_PATHS = {
  "tidara-towers": "/projects/tidara-towers",
  "rabia-makkah": "/projects/rabia-makkah",
  "dammam-olympic-city": "/projects/dammam-olympic-city",
  "hail-walkway": "/projects/hail-walkway",
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
