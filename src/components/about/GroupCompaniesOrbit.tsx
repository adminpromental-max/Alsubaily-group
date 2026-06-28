import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { ABOUT_COMPANIES } from "@/data/about-content";
import {
  GROUP_SUBSIDIARIES,
  type GroupSubsidiary,
} from "@/data/group-logos";
import { cn } from "@/lib/utils";

const COMPANIES = GROUP_SUBSIDIARIES;
const STEP = 360 / COMPANIES.length;

function useOrbitMetrics() {
  const [metrics, setMetrics] = useState({ radius: 148, size: 72, ring: 320 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMetrics({ radius: 120, size: 60, ring: 280 });
      } else if (w < 1024) {
        setMetrics({ radius: 160, size: 84, ring: 380 });
      } else {
        setMetrics({ radius: 190, size: 96, ring: 440 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return metrics;
}

export function GroupCompaniesOrbit() {
  const { t, lang } = useLang();
  const { radius, size, ring } = useOrbitMetrics();
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startRot: 0 });

  const activeIndex = pinned ?? hovered;
  const activeCompany: GroupSubsidiary | undefined =
    activeIndex !== null ? COMPANIES[activeIndex] : undefined;

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
    <section className="projects-orbit-section relative mt-8 overflow-hidden rounded-[2rem] border border-[#E0D3C2]/70 md:mt-12">
      <div className="projects-orbit-header px-6 py-10 text-center md:px-10 md:py-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#9A7B3A] md:text-xs">
          {t("هيكل المجموعة", "Group Structure")}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[#1A1612] md:text-4xl">
          {t(ABOUT_COMPANIES.titleAr, ABOUT_COMPANIES.titleEn)}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#5C5348]">
          {t(ABOUT_COMPANIES.subtitleAr, ABOUT_COMPANIES.subtitleEn)}
        </p>
      </div>

      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ height: ring + size }}
      >
        <div className="pointer-events-none absolute z-20 mx-auto max-w-[min(88vw,320px)] px-4 text-center md:max-w-sm">
          {activeCompany ? (
            <div className="projects-orbit-detail">
              <h3 className="font-heading text-lg font-bold leading-snug text-[#1A1612] md:text-xl">
                {lang === "ar"
                  ? activeCompany.nameAr
                  : activeCompany.nameEn}
              </h3>
              <span
                className={cn(
                  "mt-3 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide",
                  activeCompany.chipClass,
                )}
              >
                {lang === "ar"
                  ? activeCompany.nameAr
                  : activeCompany.nameEn}
              </span>
            </div>
          ) : (
            <div>
              <p className="font-heading text-2xl font-bold text-[#1A1612] md:text-3xl">
                {COMPANIES.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#9A7B3A]">
                {t("شركة", "Companies")}
              </p>
              <p className="mt-2 text-xs text-[#5C5348]/80">
                {t("اسحب للاستكشاف", "Drag to explore")}
              </p>
            </div>
          )}
        </div>

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
          {COMPANIES.map((company, i) => {
            const angle = STEP * i;
            const isActive = activeIndex === i;
            const half = size / 2;

            return (
              <button
                key={company.id}
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
                  lang === "ar" ? company.nameAr : company.nameEn
                }
              >
                <div
                  className={cn(
                    "projects-orbit-item relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg transition-all duration-300 ease-out",
                    isActive
                      ? "z-50 scale-[1.65] ring-2 ring-[#C9A962]/80 shadow-[0_20px_40px_-12px_rgba(201,169,98,0.45)] sm:scale-[2]"
                      : "ring-1 ring-[#E0D3C2]/80 hover:scale-110",
                  )}
                  style={{ transform: `rotate(${-rotation}deg)` }}
                >
                  <img
                    src={company.logo}
                    alt={lang === "ar" ? company.nameAr : company.nameEn}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full border border-dashed border-[#C9A962]/25"
          style={{
            width: radius * 2 + size * 0.4,
            height: radius * 2 + size * 0.4,
          }}
        />
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 pb-10 md:pb-12">
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
    </section>
  );
}
