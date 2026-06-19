import { ReactNode } from "react";

export type SectionSurface =
  | "plain-cream"
  | "plain-dark"
  | "stone-cream"
  | "stone-dark"
  | "cover-creamy"
  | "cover-slider-stone";

interface StackedSectionProps {
  children: ReactNode;
  index: number;
  surface?: SectionSurface;
  /** @deprecated Use surface instead */
  tone?: "cream" | "dark";
  /** Total stacked sections — later sections sit under earlier ones. */
  total?: number;
  /** Kept for API compatibility. */
  fadeFromTop?: string;
  fadeHeight?: number;
  className?: string;
}

const SURFACE_CLASS: Record<SectionSurface, string> = {
  "plain-cream": "bg-plain-cream",
  "plain-dark": "bg-plain-dark",
  "stone-cream": "bg-stone-cream",
  "stone-dark": "bg-stone-dark",
  "cover-creamy": "bg-cover-creamy",
  "cover-slider-stone": "bg-cover-slider-stone",
};

export function StackedSection({
  children,
  surface,
  tone,
  index,
  total = 12,
  className = "",
}: StackedSectionProps) {
  const isHero = index === 0;
  const zIndex = total - index;
  const resolvedSurface =
    surface ?? (tone === "dark" ? "stone-dark" : "stone-cream");
  const surfaceClass = SURFACE_CLASS[resolvedSurface];

  return (
    <div
      data-surface={resolvedSurface}
      className={`stacked-section ${surfaceClass} ${isHero ? "stacked-section--hero" : "stacked-section--layer"} ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
