import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
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

const AUTOPLAY_MS = 6000;

function countByCategory(id: ProjectCategoryId) {
  return PROJECTS.filter((p) => PROJECT_CATEGORY_BY_SLUG[p.slug] === id).length;
}

export function ProjectTypesSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const stageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const total = PROJECT_CATEGORIES.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goNext(), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, paused]);

  useEffect(() => {
    const stage = stageRef.current;
    const info = infoRef.current;
    if (!stage || !info) return;

    const imgs = stage.querySelectorAll<HTMLElement>("[data-cat-img]");
    imgs.forEach((img, i) => {
      gsap.to(img, {
        opacity: i === active ? 1 : 0,
        scale: i === active ? 1.06 : 1,
        duration: 0.9,
        ease: "power2.inOut",
      });
    });

    gsap.fromTo(
      info,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
    );
  }, [active]);

  const cat = PROJECT_CATEGORIES[active];
  const Icon = CATEGORY_ICONS[cat.id];
  const count = countByCategory(cat.id);
  const name = lang === "ar" ? cat.nameAr : cat.nameEn;
  const bio = lang === "ar" ? cat.bioAr : cat.bioEn;

  return (
    <section
      ref={sectionRef}
      className="activities-spotlight relative overflow-hidden bg-[#0A0908] py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(100vw,800px)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(201,169,98,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A962]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-white md:text-5xl">
            {t("نشاطات المجموعة", "Group Activities")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
            {t(
              "اختر نشاطاً واستكشف رؤيتنا في كل قطاع",
              "Pick an activity and explore our vision in each sector",
            )}
          </p>
        </div>

        <div
          data-reveal
          className="mb-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mb-7 md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={t("نشاطات المجموعة", "Group Activities")}
        >
          {PROJECT_CATEGORIES.map((category, i) => {
            const CatIcon = CATEGORY_ICONS[category.id];
            const label = lang === "ar" ? category.nameAr : category.nameEn;
            const isActive = active === i;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "activity-chip shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-400 md:px-5 md:py-3",
                  isActive
                    ? "border-[#C9A962] bg-[#C9A962] text-[#1A1612] shadow-[0_8px_24px_rgba(201,169,98,0.35)]"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-[#C9A962]/40 hover:bg-white/10 hover:text-white",
                )}
                onClick={() => goTo(i)}
              >
                <span className="inline-flex items-center gap-2">
                  <CatIcon className="h-4 w-4" strokeWidth={1.5} />
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          data-reveal
          className="group relative overflow-hidden rounded-3xl border border-[#C9A962]/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div
            ref={stageRef}
            className="relative aspect-[16/10] bg-[#141210] md:aspect-[21/9]"
          >
            {PROJECT_CATEGORIES.map((category, i) => (
              <img
                key={category.id}
                data-cat-img
                src={category.image}
                alt={lang === "ar" ? category.nameAr : category.nameEn}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover will-change-transform",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-[#0A0908]/25 to-[#0A0908]/20" />

            <button
              type="button"
              aria-label={t("السابق", "Previous")}
              className="absolute start-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962] group-hover:opacity-100 md:start-5 md:h-11 md:w-11"
              onClick={goPrev}
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <button
              type="button"
              aria-label={t("التالي", "Next")}
              className="absolute end-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962] group-hover:opacity-100 md:end-5 md:h-11 md:w-11"
              onClick={goNext}
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </div>

          <div
            ref={infoRef}
            className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-5 md:flex-row md:items-end md:justify-between md:p-8"
          >
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962]">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                {count > 0 ? (
                  <span className="rounded-full bg-[#C9A962] px-3 py-1 text-xs font-bold text-[#1A1612]">
                    {count} {t("مشروع", "projects")}
                  </span>
                ) : null}
              </div>
              <h3 className="font-heading text-2xl font-bold text-white md:text-4xl">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">{bio}</p>
            </div>

            <div className="flex items-center gap-1.5 self-start md:self-auto">
              {PROJECT_CATEGORIES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={t("انتقل للنشاط", "Go to activity")}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === active ? "w-8 bg-[#C9A962]" : "w-2 bg-white/25 hover:bg-white/45",
                  )}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
