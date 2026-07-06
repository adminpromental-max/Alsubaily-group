import { useCallback, useEffect, useRef, useState } from "react";
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

const STEP = 360 / PROJECT_CATEGORIES.length;

function countByCategory(id: ProjectCategoryId) {
  return PROJECTS.filter((p) => PROJECT_CATEGORY_BY_SLUG[p.slug] === id).length;
}

function useOrbitMetrics() {
  const [metrics, setMetrics] = useState({
    radius: 118,
    size: 64,
    ring: 300,
    centerW: 200,
    centerH: 260,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMetrics({ radius: 108, size: 58, ring: 270, centerW: 188, centerH: 248 });
      } else if (w < 1024) {
        setMetrics({ radius: 148, size: 80, ring: 360, centerW: 240, centerH: 300 });
      } else {
        setMetrics({ radius: 178, size: 92, ring: 420, centerW: 280, centerH: 340 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return metrics;
}

export function ProjectTypesSection() {
  const { t, lang } = useLang();
  const { radius, size, ring, centerW, centerH } = useOrbitMetrics();
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startRot: 0 });

  const activeIndex = pinned ?? hovered ?? 0;
  const activeCat = PROJECT_CATEGORIES[activeIndex];
  const ActiveIcon = CATEGORY_ICONS[activeCat.id];
  const activeCount = countByCategory(activeCat.id);

  const spin = useCallback((dir: number) => {
    setRotation((r) => r + STEP * dir);
    setPinned(null);
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragRef.current.active = false;
    };
    window.addEventListener("pointerup", onUp);
    return () => window.removeEventListener("pointerup", onUp);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startRot: rotation,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const delta = e.clientX - dragRef.current.startX;
    setRotation(dragRef.current.startRot + delta * 0.45);
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  return (
    <section
      ref={sectionRef}
      className="group-activities relative overflow-hidden py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9A7B3A]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#1A1612] md:text-5xl">
            {t("نشاطات المجموعة", "Group Activities")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#5C5348]">
            {t(
              "اسحبي الدائرة أو اضغطي على أي نشاط",
              "Drag the circle or tap any activity",
            )}
          </p>
        </div>

        <div
          data-reveal
          className="projects-orbit-section overflow-hidden rounded-[2rem] border border-[#E0D3C2]/70"
        >
          <div
            className="relative mx-auto flex items-center justify-center"
            style={{ height: ring + size }}
          >
            {/* Center — image with text overlay */}
            <div
              className="absolute z-20 overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(26,22,18,0.35)] ring-1 ring-[#C9A962]/30 md:rounded-3xl"
              style={{ width: centerW, height: centerH }}
            >
              {PROJECT_CATEGORIES.map((category, i) => (
                <img
                  key={category.id}
                  src={category.image}
                  alt={lang === "ar" ? category.nameAr : category.nameEn}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-600",
                    i === activeIndex ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/92 via-[#1A1612]/35 to-[#1A1612]/10" />

              <div className="absolute inset-x-0 bottom-0 p-4 text-center md:p-5">
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962]">
                  <ActiveIcon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-bold leading-snug text-white md:text-lg">
                  {lang === "ar" ? activeCat.nameAr : activeCat.nameEn}
                </h3>
                {activeCount > 0 && (
                  <span className="mt-1.5 inline-block rounded-full bg-[#C9A962] px-2.5 py-0.5 text-[10px] font-bold text-[#1A1612]">
                    {activeCount} {t("مشروع", "projects")}
                  </span>
                )}
                <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-white/80 md:text-xs">
                  {lang === "ar" ? activeCat.bioAr : activeCat.bioEn}
                </p>
              </div>
            </div>

            {/* Orbit wheel */}
            <div
              className="projects-orbit-wheel absolute cursor-grab touch-none active:cursor-grabbing"
              style={{
                width: ring,
                height: ring,
                transform: `rotate(${rotation}deg)`,
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {PROJECT_CATEGORIES.map((category, i) => {
                const angle = STEP * i;
                const isActive = activeIndex === i;
                const half = size / 2;
                const Icon = CATEGORY_ICONS[category.id];

                return (
                  <button
                    key={category.id}
                    type="button"
                    className="absolute left-1/2 top-1/2 origin-center border-0 bg-transparent p-0"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: -half,
                      marginTop: -half,
                      transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setPinned((p) => (p === i ? null : i))}
                    aria-label={
                      lang === "ar" ? category.nameAr : category.nameEn
                    }
                  >
                    <div
                      className={cn(
                        "relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-out",
                        isActive
                          ? "z-50 scale-[1.55] ring-2 ring-[#C9A962] shadow-[0_16px_36px_-8px_rgba(201,169,98,0.5)] sm:scale-[1.75]"
                          : "ring-1 ring-white/80 hover:scale-110",
                      )}
                      style={{ transform: `rotate(${-rotation}deg)` }}
                    >
                      <img
                        src={category.image}
                        alt={lang === "ar" ? category.nameAr : category.nameEn}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-[#1A1612]/25" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-0.5 bg-[#1A1612]/70 px-1 py-1">
                        <Icon className="h-2.5 w-2.5 text-[#C9A962]" strokeWidth={2} />
                        <span className="text-[7px] font-bold text-white sm:text-[8px]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full border border-dashed border-[#C9A962]/25"
              style={{
                width: radius * 2 + size * 0.35,
                height: radius * 2 + size * 0.35,
              }}
            />
          </div>

          <div className="flex items-center justify-center gap-3 pb-8 pt-2 md:pb-10">
            <button
              type="button"
              onClick={() => spin(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E0D3C2] bg-white text-[#1A1612] shadow-sm transition hover:border-[#C9A962]/50 hover:bg-[#FAF8F4]"
              aria-label={t("تدوير لليسار", "Rotate left")}
            >
              {lang === "ar" ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
            <span className="min-w-[4.5rem] text-center text-xs font-semibold tracking-wider text-[#9A7B3A]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(PROJECT_CATEGORIES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => spin(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E0D3C2] bg-white text-[#1A1612] shadow-sm transition hover:border-[#C9A962]/50 hover:bg-[#FAF8F4]"
              aria-label={t("تدوير لليمين", "Rotate right")}
            >
              {lang === "ar" ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
