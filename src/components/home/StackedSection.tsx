import { ReactNode } from "react";

interface StackedSectionProps {
  children: ReactNode;
  index: number;
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
  background = "#F5EEE2",
  index,
  total = 12,
  className = "",
}: StackedSectionProps) {
  const isHero = index === 0;
  // Later sections get LOWER z-index → they appear to slide in *under*
  // the current section as the user scrolls.
  const zIndex = total - index;

  return (
    <div
      className={`stacked-section ${isHero ? "stacked-section--hero" : "stacked-section--layer"} ${className}`}
      style={{
        background,
        zIndex,
      }}
    >
      {children}
    </div>
  );
}
