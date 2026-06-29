import { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import {
  MAP_V2_LABEL_BY_PROJECT,
  MAP_V2_REGIONS,
  MAP_V2_SIZE,
  MAP_V2_SRC,
  type MapV2RegionId,
} from "@/data/map-region-layout";
import { useLang } from "@/contexts/lang-context";
import { ProjectDetailLink } from "@/components/projects/ProjectDetailLink";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SelectedRegion = MapV2RegionId | null;

export function RegionInteractiveMap() {
  const { t, lang } = useLang();
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegion>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const projectsByRegion = useMemo(() => {
    const map: Record<MapV2RegionId, Project[]> = {
      mecca: [],
      hail: [],
      riyadh: [],
      eastern: [],
    };
    for (const p of PROJECTS) {
      if (p.region in map) map[p.region as MapV2RegionId].push(p);
    }
    return map;
  }, []);

  const activeRegionLayout = selectedRegion
    ? MAP_V2_REGIONS.find((r) => r.id === selectedRegion)
    : null;

  const visibleProjects = selectedRegion ? projectsByRegion[selectedRegion] : [];

  const selectRegion = useCallback((id: MapV2RegionId) => {
    setActiveProject(null);
    setSelectedRegion((prev) => (prev === id ? null : id));
  }, []);

  const reset = useCallback(() => {
    setSelectedRegion(null);
    setActiveProject(null);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative mx-auto mb-4 flex flex-wrap items-center justify-between gap-3 px-4 md:px-0">
        <p className="text-sm text-[#5C5348]">
          {selectedRegion
            ? t(
                "اضغط على اسم مشروع أو اختر منطقة أخرى",
                "Tap a project name or choose another region",
              )
            : t(
                "اضغط على منطقة لاستكشاف مشاريعها",
                "Tap a region to explore its projects",
              )}
        </p>
        {selectedRegion && (
          <button
            type="button"
            onClick={reset}
            className="text-xs font-semibold text-[#8A6A2E] underline-offset-2 hover:underline"
          >
            {t("إظهار كل المناطق", "Show all regions")}
          </button>
        )}
      </div>

      <div
        className={cn(
          "region-map-viewport relative mx-auto w-full",
          "h-[55vw] min-h-[340px] max-h-[760px]",
        )}
      >
        <div
          ref={canvasRef}
          className="relative h-full w-full overflow-hidden rounded-2xl border border-[#C9A962]/20 bg-[#FAF8F4] shadow-lg"
        >
          <img
            src={MAP_V2_SRC}
            alt={t("خريطة مشاريع الشبيلي", "AlShubaily Projects Map")}
            width={MAP_V2_SIZE.w}
            height={MAP_V2_SIZE.h}
            draggable={false}
            className="block h-full w-full select-none object-contain"
          />

          {/* Region hit zones */}
          <div className="absolute inset-0">
            {MAP_V2_REGIONS.map((region) => {
              const isActive = selectedRegion === region.id;
              const isDimmed = selectedRegion && !isActive;
              return (
                <button
                  key={region.id}
                  type="button"
                  aria-label={lang === "ar" ? region.nameAr : region.nameEn}
                  onClick={() => selectRegion(region.id)}
                  className={cn(
                    "region-hit-zone absolute rounded-full transition-all duration-400",
                    isActive && "is-active",
                    isDimmed && "is-dimmed",
                  )}
                  style={{
                    left: `${region.hit.x}%`,
                    top: `${region.hit.y}%`,
                    width: `${region.hit.r * 2}%`,
                    height: `${region.hit.r * 2}%`,
                    transform: "translate(-50%, -50%)",
                    ["--region-color" as string]: region.color,
                  }}
                />
              );
            })}
          </div>

          {/* Arrows + labels when region selected */}
          {activeRegionLayout && visibleProjects.length > 0 && (
            <>
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <marker
                    id="region-arrow"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                {visibleProjects.map((project) => {
                  const label = MAP_V2_LABEL_BY_PROJECT[project.id];
                  if (!label) return null;
                  return (
                    <line
                      key={project.id}
                      x1={activeRegionLayout.anchor.x}
                      y1={activeRegionLayout.anchor.y}
                      x2={label.x + (label.x < activeRegionLayout.anchor.x ? 4 : -1)}
                      y2={label.y}
                      stroke={activeRegionLayout.color}
                      strokeWidth="0.2"
                      strokeOpacity="0.85"
                      markerEnd="url(#region-arrow)"
                      style={{ color: activeRegionLayout.color }}
                    />
                  );
                })}
              </svg>

              {visibleProjects.map((project) => {
                const label = MAP_V2_LABEL_BY_PROJECT[project.id];
                if (!label) return null;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className={cn(
                      "region-map-label absolute max-w-[min(42vw,200px)] truncate rounded-full border px-3 py-1.5 text-[10px] font-semibold shadow-md backdrop-blur-sm transition-all md:max-w-[220px] md:text-xs",
                      activeProject?.id === project.id
                        ? "border-[#C9A962] bg-[#C9A962] text-[#1A1612]"
                        : "border-white/40 bg-[#14110D]/85 text-white hover:border-[#C9A962]/60 hover:bg-[#14110D]",
                    )}
                    style={{
                      left: `${label.x}%`,
                      top: `${label.y}%`,
                      transform: "translate(0, -50%)",
                    }}
                  >
                    {lang === "ar" ? project.nameAr : project.nameEn}
                  </button>
                );
              })}
            </>
          )}
        </div>
      </div>

      {activeProject &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="map-popup-portal fixed inset-0 z-[300] flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div className="absolute inset-0 bg-[#14110D]/45 backdrop-blur-[2px]" />
            <RegionMapProjectPopup
              project={activeProject}
              lang={lang}
              t={t}
              onClose={() => setActiveProject(null)}
            />
          </div>,
          document.body,
        )}
    </div>
  );
}

function RegionMapProjectPopup({
  project,
  lang,
  t,
  onClose,
}: {
  project: Project;
  lang: string;
  t: (ar: string, en: string) => string;
  onClose: () => void;
}) {
  return (
    <div
      className="map-project-popup pointer-events-auto relative z-10 w-[min(92vw,400px)] overflow-hidden rounded-2xl border border-white/10 bg-[#14110D] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.heroImage}
          alt={lang === "ar" ? project.nameAr : project.nameEn}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110D] via-transparent to-transparent" />
        <button
          type="button"
          onClick={onClose}
          className="absolute start-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
          aria-label={t("إغلاق", "Close")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-xs font-medium text-[#C9A962]">
          {lang === "ar"
            ? `${project.regionAr} · ${project.typeAr}`
            : `${project.regionEn} · ${project.typeEn}`}
        </p>
        <h3 className="text-lg font-semibold text-[#FAFAF8]">
          {lang === "ar" ? project.nameAr : project.nameEn}
        </h3>
        <p className="text-sm leading-7 text-[#FAFAF8]/65">
          {lang === "ar" ? project.descriptionAr : project.descriptionEn}
        </p>
        <ProjectDetailLink
          slug={project.slug}
          className={cn(
            buttonVariants({ size: "default" }),
            "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A962] text-[#14110D] hover:bg-[#B8954A]",
          )}
        >
          {t("عرض تفاصيل المشروع", "View Project Details")}
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </ProjectDetailLink>
      </div>
    </div>
  );
}

export function RegionMapPreviewBanner() {
  const { t } = useLang();
  return (
    <div className="mb-6 rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 px-4 py-3 text-center text-sm text-[#5C5348]">
      {t(
        "معاينة تجريبية — ",
        "Experimental preview — ",
      )}
      <Link to="/" hash="map" className="font-semibold text-[#8A6A2E] underline-offset-2 hover:underline">
        {t("الخريطة الحالية على الرئيسية", "current map on homepage")}
      </Link>
    </div>
  );
}
