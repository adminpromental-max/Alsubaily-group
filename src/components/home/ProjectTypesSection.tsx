import { useState, type CSSProperties } from "react";
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
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.12 });
  const isRtl = lang === "ar";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div data-reveal className="relative mb-10 md:mb-12">
          <div
            className="pointer-events-none absolute -top-6 select-none text-[44px] font-black leading-none text-[#C9A962]/10 md:text-[80px]"
            style={{
              [isRtl ? "right" : "left"]: "-0.25rem",
            } as CSSProperties}
            aria-hidden
          >
            ACTIVITIES
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading relative z-10 text-3xl font-black text-[#0A0A0A] md:text-5xl">
                {t("نشاطات المجموعة", "Group Activities")}
              </h2>
              <div className="mt-3 flex items-center">
                <span className="h-[2px] w-12 bg-[#C9A962]" />
                <p className="ms-3 text-sm font-medium tracking-wide text-[#0A0A0A]/60 md:text-base">
                  {t("خلق مجتمعات متكاملة", "Crafting integrated communities")}
                </p>
              </div>
            </div>
            <p className="text-xs text-[#5C5348]/80 md:text-sm">
              {t(
                "اضغط أو مرّر لاستكشاف كل نشاط",
                "Tap or hover to explore each activity",
              )}
            </p>
          </div>
        </div>

        <div
          data-reveal
          className="activity-accordion flex h-[min(72svh,420px)] min-h-[320px] gap-2 sm:gap-2.5 md:h-[480px] md:gap-3"
          role="tablist"
          aria-label={t("نشاطات المجموعة", "Group Activities")}
        >
          {PROJECT_CATEGORIES.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.id];
            const isActive = active === i;
            const count = countByCategory(cat.id);
            const name = lang === "ar" ? cat.nameAr : cat.nameEn;
            const bio = lang === "ar" ? cat.bioAr : cat.bioEn;

            return (
              <button
                key={cat.id}
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
                  src={cat.image}
                  alt={name}
                  loading="lazy"
                  className={cn(
                    "activity-panel-img absolute inset-0 h-full w-full object-cover",
                    isActive && "is-active",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/35 to-[#0A0A0A]/15" />

                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm md:h-11 md:w-11">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                    </div>
                    <span
                      className={cn(
                        "rounded-full bg-[#C9A962] px-2.5 py-0.5 text-[10px] font-semibold text-[#1A1612] transition-opacity duration-400 md:px-3 md:py-1 md:text-xs",
                        isActive && count > 0 ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {count} {t("مشروع", "projects")}
                    </span>
                  </div>

                  <div className="text-start">
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
                          ? "mt-2 max-h-40 opacity-100 md:mt-3"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-md text-[11px] leading-relaxed text-white/85 sm:text-xs md:text-sm md:leading-relaxed">
                        {bio}
                      </p>
                      <span className="mt-2 inline-block text-[10px] font-medium uppercase tracking-wider text-[#C9A962] md:mt-3 md:text-xs">
                        {lang === "ar" ? cat.nameEn : cat.nameAr}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
