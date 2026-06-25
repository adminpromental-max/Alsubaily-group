import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { ProjectDetailLink } from "@/components/projects/ProjectDetailLink";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const STEP = 360 / PROJECTS.length;

function useOrbitMetrics() {
  const [metrics, setMetrics] = useState({ radius: 168, size: 76, ring: 340 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMetrics({ radius: 138, size: 64, ring: 300 });
      } else if (w < 1024) {
        setMetrics({ radius: 178, size: 88, ring: 400 });
      } else {
        setMetrics({ radius: 210, size: 100, ring: 480 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return metrics;
}

export function ProjectsCircularShowcase() {
  const { t, lang } = useLang();
  const { radius, size, ring } = useOrbitMetrics();
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startRot: 0 });

  const activeIndex = pinned ?? hovered;
  const activeProject: Project | undefined =
    activeIndex !== null ? PROJECTS[activeIndex] : undefined;

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
    <section className="projects-orbit-section relative mt-16 overflow-hidden rounded-[2rem] border border-[#E0D3C2]/70 md:mt-20">
      <div className="projects-orbit-header px-6 py-10 text-center md:px-10 md:py-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#9A7B3A] md:text-xs">
          {t("تجربة عرض تفاعلية", "Interactive Showcase")}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[#1A1612] md:text-4xl">
          {t("دائرة المشاريع", "Projects Orbit")}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#5C5348]">
          {t(
            "اسحب الدائرة أو مرّر فوق أي مشروع لاستكشاف التفاصيل",
            "Drag the ring or hover a project to explore its details",
          )}
        </p>
      </div>

      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ height: ring + size }}
      >
        {/* Center info */}
        <div className="pointer-events-none absolute z-20 mx-auto max-w-[min(88vw,320px)] px-4 text-center md:max-w-sm">
          {activeProject ? (
            <div className="projects-orbit-detail">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A7B3A]">
                {lang === "ar" ? activeProject.regionAr : activeProject.regionEn}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-[#1A1612] md:text-xl">
                {lang === "ar" ? activeProject.nameAr : activeProject.nameEn}
              </h3>
              <p className="mt-2 line-clamp-3 text-xs leading-6 text-[#5C5348] md:text-sm md:leading-7">
                {lang === "ar"
                  ? activeProject.descriptionAr
                  : activeProject.descriptionEn}
              </p>
              <ProjectDetailLink
                slug={activeProject.slug}
                className="pointer-events-auto mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#9A7B3A] transition hover:text-[#1A1612]"
              >
                {t("عرض المشروع ←", "View Project →")}
              </ProjectDetailLink>
            </div>
          ) : (
            <div>
              <p className="font-heading text-2xl font-bold text-[#1A1612] md:text-3xl">
                {PROJECTS.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#9A7B3A]">
                {t("مشروع", "Projects")}
              </p>
              <p className="mt-2 text-xs text-[#5C5348]/80">
                {t("اسحب للاستكشاف", "Drag to explore")}
              </p>
            </div>
          )}
        </div>

        {/* Rotating ring */}
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
          {PROJECTS.map((project, i) => {
            const angle = STEP * i;
            const isActive = activeIndex === i;
            const half = size / 2;

            return (
              <button
                key={project.slug}
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
                aria-label={lang === "ar" ? project.nameAr : project.nameEn}
              >
                <div
                  className={cn(
                    "projects-orbit-item relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-out",
                    isActive
                      ? "z-50 scale-[1.65] ring-2 ring-[#C9A962]/80 shadow-[0_20px_40px_-12px_rgba(201,169,98,0.45)] sm:scale-[2]"
                      : "ring-1 ring-[#E0D3C2]/80 hover:scale-110",
                  )}
                  style={{ transform: `rotate(${-rotation}deg)` }}
                >
                  <img
                    src={project.heroImage}
                    alt={lang === "ar" ? project.nameAr : project.nameEn}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-1.5 py-1.5 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <span className="block truncate text-center text-[8px] font-medium text-white md:text-[9px]">
                      {lang === "ar" ? project.nameAr : project.nameEn}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Decorative ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full border border-dashed border-[#C9A962]/25"
          style={{ width: radius * 2 + size * 0.4, height: radius * 2 + size * 0.4 }}
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
