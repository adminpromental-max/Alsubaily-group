import { useState } from "react";
import {
  Building2,
  Home,
  Landmark,
  Palmtree,
  Store,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import {
  PROJECT_CATEGORIES,
  PROJECT_CATEGORY_BY_SLUG,
  type ProjectCategoryId,
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

function countByCategory(id: ProjectCategoryId) {
  return PROJECTS.filter((p) => PROJECT_CATEGORY_BY_SLUG[p.slug] === id).length;
}

export function ProjectTypesSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const isRtl = lang === "ar";

  return (
    <section
      ref={sectionRef}
      className="group-activities relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[min(100vw,720px)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(201,169,98,0.1),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9A7B3A]">
              {t("محفظة المشاريع", "Project Portfolio")}
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-[#1A1612] md:text-5xl">
              {t("نشاطات المجموعة", "Group Activities")}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#5C5348] md:text-end md:text-base">
            {t(
              "مرّري أو اضغطي على أي نشاط لاستكشاف تفاصيله",
              "Hover or tap any activity to explore its details",
            )}
          </p>
        </div>

        <div
          data-reveal
          className="activity-accordion flex h-[min(72svh,460px)] min-h-[340px] gap-2 sm:gap-2.5 md:h-[500px] md:gap-3"
          role="tablist"
          aria-label={t("نشاطات المجموعة", "Group Activities")}
        >
          {PROJECT_CATEGORIES.map((category, i) => {
            const isActive = active === i;
            const Icon = CATEGORY_ICONS[category.id];
            const count = countByCategory(category.id);
            const name = lang === "ar" ? category.nameAr : category.nameEn;
            const bio = lang === "ar" ? category.bioAr : category.bioEn;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-expanded={isActive}
                className={cn(
                  "activity-panel group relative overflow-hidden rounded-2xl outline-none md:rounded-3xl",
                  isActive && "is-active",
                )}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <img
                  src={category.image}
                  alt={name}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "activity-panel-img absolute inset-0 h-full w-full object-cover",
                    isActive && "is-active",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/92 via-[#1A1612]/40 to-[#1A1612]/15" />

                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962] backdrop-blur-sm md:h-11 md:w-11">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                    </div>
                    <span
                      className={cn(
                        "font-heading text-[10px] font-bold tracking-wider text-[#C9A962]/80 transition-opacity duration-400 md:text-xs",
                        isActive ? "opacity-100" : "opacity-60",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="text-start">
                    <div
                      className={cn(
                        "flex flex-wrap items-center gap-2 transition-all duration-500",
                        isActive ? "mb-2 opacity-100" : "mb-0 max-h-0 opacity-0",
                      )}
                    >
                      {count > 0 ? (
                        <span className="rounded-full bg-[#C9A962] px-2.5 py-0.5 text-[10px] font-bold text-[#1A1612] md:px-3 md:py-1 md:text-xs">
                          {count} {t("مشروع", "projects")}
                        </span>
                      ) : null}
                    </div>

                    <h3
                      className={cn(
                        "font-heading font-bold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "text-lg sm:text-xl md:text-3xl"
                          : cn(
                              "text-sm sm:text-base md:text-xl",
                              "activity-panel-title-collapsed",
                              isRtl && "activity-panel-title-collapsed--rtl",
                            ),
                      )}
                    >
                      {name}
                    </h3>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "mt-2 max-h-28 opacity-100 md:mt-3 md:max-h-32"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-md text-[11px] leading-relaxed text-white/85 sm:text-xs md:text-sm md:leading-relaxed">
                        {bio}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-5 hidden items-center justify-center gap-6 border-t border-[#E8E0D4] pt-5 md:flex"
          aria-hidden
        >
          {PROJECT_CATEGORIES.map((category, i) => {
            const label = lang === "ar" ? category.nameAr : category.nameEn;
            return (
              <button
                key={category.id}
                type="button"
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider transition-colors",
                  active === i
                    ? "text-[#9A7B3A]"
                    : "text-[#5C5348]/50 hover:text-[#5C5348]",
                )}
                onClick={() => setActive(i)}
              >
                <span className="me-1.5 text-[#C9A962]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
