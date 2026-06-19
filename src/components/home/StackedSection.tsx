import { ReactNode } from "react";

export type SectionTone = "cream" | "dark";

interface StackedSectionProps {
  children: ReactNode;
  index: number;
  tone?: SectionTone;
  /** @deprecated Use tone="cream" | "dark" instead */
  background?: string;
  /** Total number of stacked sections — used to invert z-index so later
   *  sections sit visually UNDER earlier ones (layered-cards effect). */
  total?: number;
  /** Kept for API compatibility. */
  fadeFromTop?: string;
  fadeHeight?: number;
  className?: string;
}

export function StackedSection({
  children,
  tone = "cream",
  index,
  total = 12,
  className = "",
}: StackedSectionProps) {
  const isHero = index === 0;
  const zIndex = total - index;
  const stoneClass = tone === "dark" ? "bg-stone-dark" : "bg-stone-cream";

  return (
    <div
      className={`stacked-section ${stoneClass} ${isHero ? "stacked-section--hero" : "stacked-section--layer"} ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
