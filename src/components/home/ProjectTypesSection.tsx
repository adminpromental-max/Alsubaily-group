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
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });

  const activeCat = PROJECT_CATEGORIES[active];
  const ActiveIcon = CATEGORY_ICONS[activeCat.id];

  return (
    <section
      ref={sectionRef}
      className="group-activities relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#C9A962]/6 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9A7B3A]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#1A1612] md:text-5xl">
            {t("نشاطات المجموعة", "Group Activities")}
          </h2>
        </div>

        <div
          data-reveal
          className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14"
        >
          {/* Activity index list */}
          <div
            className="flex flex-col rounded-2xl border border-[#E8E0D4] bg-white/70 p-2 shadow-[0_8px_40px_-12px_rgba(26,22,18,0.12)] backdrop-blur-sm md:rounded-3xl md:p-3"
            role="tablist"
            aria-label={t("نشاطات المجموعة", "Group Activities")}
          >
            {PROJECT_CATEGORIES.map((category, i) => {
              const Icon = CATEGORY_ICONS[category.id];
              const isActive = active === i;
              const count = countByCategory(category.id);
              const name = lang === "ar" ? category.nameAr : category.nameEn;
              const bio = lang === "ar" ? category.bioAr : category.bioEn;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "group/item relative flex w-full items-start gap-4 rounded-xl px-4 py-4 text-start transition-all duration-400 md:gap-5 md:px-5 md:py-5",
                    isActive
                      ? "bg-[#1A1612] shadow-[0_12px_32px_-8px_rgba(26,22,18,0.35)]"
                      : "hover:bg-[#F2EDE4]/80",
                  )}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span
                    className={cn(
                      "font-heading shrink-0 text-2xl font-black leading-none transition-colors duration-400 md:text-3xl",
                      isActive ? "text-[#C9A962]/90" : "text-[#E8E0D4]",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-400 md:h-9 md:w-9",
                          isActive
                            ? "border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962]"
                            : "border-[#E8E0D4] bg-[#F2EDE4] text-[#9A7B3A]",
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <h3
                        className={cn(
                          "font-heading text-base font-bold leading-snug transition-colors duration-400 md:text-lg",
                          isActive ? "text-white" : "text-[#1A1612]",
                        )}
                      >
                        {name}
                      </h3>
                      {count > 0 && (
                        <span
                          className={cn(
                            "ms-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold md:text-[11px]",
                            isActive
                              ? "bg-[#C9A962] text-[#1A1612]"
                              : "bg-[#E8E0D4] text-[#5C5348]",
                          )}
                        >
                          {count}
                        </span>
                      )}
                    </div>

                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed transition-all duration-400",
                        isActive
                          ? "text-white/75"
                          : "line-clamp-2 text-[#5C5348]/80",
                      )}
                    >
                      {bio}
                    </p>
                  </div>

                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-y-3 start-0 w-1 rounded-full bg-[#C9A962]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Preview panel */}
          <div
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#E8E0D4] shadow-[0_20px_60px_-16px_rgba(26,22,18,0.2)] md:min-h-[480px] md:rounded-3xl lg:min-h-0"
            role="tabpanel"
            aria-label={
              lang === "ar" ? activeCat.nameAr : activeCat.nameEn
            }
          >
            {PROJECT_CATEGORIES.map((category, i) => (
              <img
                key={category.id}
                src={category.image}
                alt={lang === "ar" ? category.nameAr : category.nameEn}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1612]/85 via-[#1A1612]/20 to-transparent" />

            <div
              aria-hidden
              className="pointer-events-none absolute end-4 top-4 font-heading text-[5rem] font-black leading-none text-white/[0.07] md:end-6 md:top-6 md:text-[7rem]"
            >
              {String(active + 1).padStart(2, "0")}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962]">
                  <ActiveIcon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A962]">
                    {t("قطاع", "Sector")} {String(active + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-white md:text-3xl">
                    {lang === "ar" ? activeCat.nameAr : activeCat.nameEn}
                  </h3>
                </div>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                {lang === "ar" ? activeCat.bioAr : activeCat.bioEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
