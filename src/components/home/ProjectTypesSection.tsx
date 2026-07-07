import { useState } from "react";
import {
  Building2,
  Home,
  Landmark,
  Palmtree,
  Store,
} from "lucide-react";
import {
  PROJECT_CATEGORIES,
} from "@/data/site-content";
import { useLang } from "@/contexts/lang-context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS = {
  tourism: Palmtree,
  residential: Home,
  neighborhoods: Landmark,
  commercial: Store,
  office: Building2,
} as const;

export function ProjectTypesSection() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="group-activities relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9A7B3A]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#1A1612] md:text-5xl">
            {t("نشاطات المجموعة", "Group Activities")}
          </h2>
        </div>

        <div
          data-reveal
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5"
        >
          {PROJECT_CATEGORIES.map((category, i) => {
            const Icon = CATEGORY_ICONS[category.id];
            const name = lang === "ar" ? category.nameAr : category.nameEn;
            const bio = lang === "ar" ? category.bioAr : category.bioEn;
            const isExpanded = expanded === i;

            return (
              <button
                key={category.id}
                type="button"
                aria-expanded={isExpanded}
                className={cn(
                  "activity-card group relative min-h-[300px] overflow-hidden rounded-2xl text-start shadow-[0_8px_30px_-8px_rgba(26,22,18,0.2)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-[340px] md:rounded-3xl",
                  "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(201,169,98,0.35)]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A962]",
                  isExpanded &&
                    "-translate-y-1.5 shadow-[0_20px_50px_-12px_rgba(201,169,98,0.4)] ring-2 ring-[#C9A962]/70",
                )}
                onClick={() => setExpanded((prev) => (prev === i ? null : i))}
                onMouseEnter={() => setExpanded(i)}
                onMouseLeave={() => setExpanded(null)}
              >
                <img
                  src={category.image}
                  alt={name}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out",
                    isExpanded ? "scale-110" : "scale-100 group-hover:scale-105",
                  )}
                />

                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-500",
                    isExpanded
                      ? "bg-gradient-to-t from-[#1A1612]/95 via-[#1A1612]/55 to-[#1A1612]/20"
                      : "bg-gradient-to-t from-[#1A1612]/90 via-[#1A1612]/40 to-[#1A1612]/10",
                  )}
                />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
                  <span className="font-heading text-3xl font-black text-white/20 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962] backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                    {name}
                  </h3>

                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed text-white/80 transition-all duration-500",
                      isExpanded ? "line-clamp-none opacity-100" : "line-clamp-2 opacity-90",
                    )}
                  >
                    {bio}
                  </p>

                  <span
                    className={cn(
                      "mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#C9A962] transition-opacity duration-400 md:text-[11px]",
                      isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  >
                    {t("اقرأ المزيد", "Read more")}
                    <span aria-hidden className="text-xs">
                      {lang === "ar" ? "←" : "→"}
                    </span>
                  </span>
                </div>

                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-2xl border-2 transition-colors duration-500 md:rounded-3xl",
                    isExpanded
                      ? "border-[#C9A962]/60"
                      : "border-transparent group-hover:border-[#C9A962]/40",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
