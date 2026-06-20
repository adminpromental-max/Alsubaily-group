import { Link } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ArrowLeft, Search, X } from "lucide-react";
import {
  PROJECTS,
  REGIONS,
  getRegionClusters,
  type Project,
  type RegionId,
} from "@/data/projects";
import { NEW_MAP_COORDINATES } from "@/data/map-coordinates";
import { useLang } from "@/contexts/lang-context";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MAP_SRC = "/assets/new-map.png";
const MAP_DEFAULT = { w: 1392, h: 768 };
const MAX_ZOOM_RATIO = 3.2;
const ZOOM_STEP_RATIO = 0.1;
const MOBILE_BREAKPOINT = 1024;
const MOBILE_COVER_OVERSCAN = 1.06;
const REGION_ZOOM = 1.85;
const CLICK_THRESHOLD = 6;

type MapMode = "overview" | "region" | "project";
type Transform = { x: number; y: number; scale: number };

function withMapCoordinates(projects: Project[]): Project[] {
  return projects.map((p) => {
    const c = NEW_MAP_COORDINATES[p.id];
    return c ? { ...p, x: c.x, y: c.y } : p;
  });
}

function clampTransform(
  t: Transform,
  vw: number,
  vh: number,
  iw: number,
  ih: number,
): Transform {
  const scaledW = iw * t.scale;
  const scaledH = ih * t.scale;
  let x = t.x;
  let y = t.y;

  if (scaledW <= vw) x = (vw - scaledW) / 2;
  else x = Math.min(0, Math.max(vw - scaledW, x));

  if (scaledH <= vh) y = (vh - scaledH) / 2;
  else y = Math.min(0, Math.max(vh - scaledH, y));

  return { x, y, scale: t.scale };
}

interface InteractiveMapProps {
  initialRegion?: Exclude<RegionId, "all">;
  initialProjectId?: number;
  hideControls?: boolean;
  externalSearch?: string;
  externalFilter?: RegionId;
  onSearchChange?: (v: string) => void;
  onFilterChange?: (v: RegionId) => void;
}

export function InteractiveMap({
  initialRegion,
  initialProjectId,
  hideControls,
  externalSearch,
  externalFilter,
  onSearchChange,
  onFilterChange,
}: InteractiveMapProps = {}) {
  const { t, lang } = useLang();
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const imgSizeRef = useRef(MAP_DEFAULT);
  const baseScaleRef = useRef(1);
  const transformRef = useRef<Transform>({ x: 0, y: 0, scale: 1 });
  const panStartRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(
    null,
  );
  const didPanRef = useRef(false);
  const initializedRef = useRef(false);

  const [ready, setReady] = useState(false);
  const [imgSize, setImgSize] = useState(MAP_DEFAULT);
  const [filterInternal, setFilterInternal] = useState<RegionId>(initialRegion ?? "all");
  const [mapMode, setMapMode] = useState<MapMode>(initialRegion ? "region" : "overview");
  const [activeRegion, setActiveRegion] = useState<Exclude<RegionId, "all"> | null>(
    initialRegion ?? null,
  );
  const [activeId, setActiveId] = useState<number | null>(initialProjectId ?? null);
  const [searchInternal, setSearchInternal] = useState("");

  const search = externalSearch !== undefined ? externalSearch : searchInternal;
  const filter = externalFilter !== undefined ? externalFilter : filterInternal;
  const setSearch = onSearchChange ?? setSearchInternal;
  const setFilter: (v: RegionId) => void = onFilterChange ?? setFilterInternal;

  const allProjects = useMemo(() => withMapCoordinates(PROJECTS), []);
  const clusters = getRegionClusters();

  const searchFiltered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list =
      filter === "all" ? allProjects : allProjects.filter((p) => p.region === filter);
    if (!q) return list;
    return list.filter(
      (p) =>
        p.nameAr.includes(search.trim()) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.regionAr.includes(search.trim()) ||
        p.regionEn.toLowerCase().includes(q),
    );
  }, [allProjects, filter, search]);

  const activeProject = activeId
    ? (allProjects.find((p) => p.id === activeId) ?? null)
    : null;

  const applyTransform = useCallback((animate = false) => {
    const canvas = canvasRef.current;
    const viewport = viewportRef.current;
    if (!canvas || !viewport) return;

    const { w, h } = imgSizeRef.current;
    const clamped = clampTransform(
      transformRef.current,
      viewport.clientWidth,
      viewport.clientHeight,
      w,
      h,
    );
    transformRef.current = clamped;

    if (animate) {
      gsap.killTweensOf(canvas);
      gsap.to(canvas, {
        x: clamped.x,
        y: clamped.y,
        scale: clamped.scale,
        duration: 0.65,
        ease: "power3.inOut",
        transformOrigin: "0 0",
        overwrite: true,
      });
    } else {
      gsap.set(canvas, {
        x: clamped.x,
        y: clamped.y,
        scale: clamped.scale,
        transformOrigin: "0 0",
      });
    }
  }, []);

  const fitMap = useCallback(
    (animate = false) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const vw = viewport.clientWidth;
      const vh = viewport.clientHeight;
      const { w, h } = imgSizeRef.current;
      if (vw < 10 || vh < 10 || !w || !h) return;

      const isMobile = vw < MOBILE_BREAKPOINT;
      const nextBase = isMobile
        ? Math.max(vw / w, vh / h) * MOBILE_COVER_OVERSCAN
        : Math.min(vw / w, vh / h);
      baseScaleRef.current = nextBase;
      transformRef.current = {
        x: (vw - w * nextBase) / 2,
        y: (vh - h * nextBase) / 2,
        scale: nextBase,
      };
      applyTransform(animate);
      setReady(true);
    },
    [applyTransform],
  );

  const zoomToPoint = useCallback(
    (px: number, py: number, scaleMultiplier: number, animate = true) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const { w, h } = imgSizeRef.current;
      const vw = viewport.clientWidth;
      const vh = viewport.clientHeight;
      const targetScale = Math.min(
        baseScaleRef.current * scaleMultiplier,
        baseScaleRef.current * MAX_ZOOM_RATIO,
      );

      const mapX = (px / 100) * w;
      const mapY = (py / 100) * h;

      transformRef.current = {
        scale: targetScale,
        x: vw / 2 - mapX * targetScale,
        y: vh / 2 - mapY * targetScale,
      };
      applyTransform(animate);
    },
    [applyTransform],
  );

  const handleImageLoad = () => {
    const img = imgRef.current;
    if (img?.naturalWidth) {
      const next = { w: img.naturalWidth, h: img.naturalHeight };
      imgSizeRef.current = next;
      setImgSize(next);
      fitMap(false);
    }
  };

  useLayoutEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth) {
      const next = {
        w: imgRef.current.naturalWidth,
        h: imgRef.current.naturalHeight,
      };
      imgSizeRef.current = next;
      setImgSize(next);
    }
    fitMap(false);
  }, [fitMap]);

  // Auto-zoom to initial region/project once map is ready
  useEffect(() => {
    if (!ready) return;
    if (initializedRef.current) return;
    initializedRef.current = true;

    const id = setTimeout(() => {
      if (initialProjectId) {
        const project = allProjects.find((p) => p.id === initialProjectId);
        if (project) {
          zoomToPoint(project.x, project.y, REGION_ZOOM, true);
          setMapMode("project");
        }
      } else if (initialRegion) {
        const cluster = clusters.find((c) => c.id === initialRegion);
        if (cluster) zoomToPoint(cluster.x, cluster.y, REGION_ZOOM, true);
      }
    }, 120);

    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(() => fitMap(false));
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [fitMap]);

  const zoomFromCenter = (delta: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const min = baseScaleRef.current;
    const max = baseScaleRef.current * MAX_ZOOM_RATIO;
    const next = Math.min(max, Math.max(min, transformRef.current.scale + delta));
    if (next === transformRef.current.scale) return;

    const cx = viewport.clientWidth / 2;
    const cy = viewport.clientHeight / 2;
    const ratio = next / transformRef.current.scale;

    transformRef.current = {
      scale: next,
      x: cx - (cx - transformRef.current.x) * ratio,
      y: cy - (cy - transformRef.current.y) * ratio,
    };
    applyTransform(true);
  };

  const resetMap = useCallback(() => {
    setActiveId(null);
    setActiveRegion(null);
    setMapMode("overview");
    setFilter("all");
    setSearch("");
    fitMap(true);
  }, [fitMap]);

  const selectRegion = useCallback(
    (regionId: Exclude<RegionId, "all">) => {
      const cluster = clusters.find((c) => c.id === regionId);
      if (!cluster) return;
      setActiveId(null);
      setActiveRegion(regionId);
      setMapMode("region");
      setFilter(regionId);
      zoomToPoint(cluster.x, cluster.y, REGION_ZOOM, true);
    },
    [clusters, zoomToPoint],
  );

  const selectProject = useCallback((project: Project) => {
    setActiveId(project.id);
    setActiveRegion(project.region);
    setMapMode("project");
    setFilter(project.region);
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const viewport = viewportRef.current;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const min = baseScaleRef.current;
    const max = baseScaleRef.current * MAX_ZOOM_RATIO;
    const factor = e.deltaY < 0 ? 1.1 : 0.91;
    const next = Math.min(max, Math.max(min, transformRef.current.scale * factor));
    if (next === transformRef.current.scale) return;

    const ratio = next / transformRef.current.scale;
    transformRef.current = {
      scale: next,
      x: cursorX - (cursorX - transformRef.current.x) * ratio,
      y: cursorY - (cursorY - transformRef.current.y) * ratio,
    };
    applyTransform(false);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".map-hit-target, .map-float-controls, .map-project-popup, button, a, input")) {
      return;
    }

    didPanRef.current = false;
    panStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      tx: transformRef.current.x,
      ty: transformRef.current.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const start = panStartRef.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
    didPanRef.current = true;
    transformRef.current = {
      ...transformRef.current,
      x: start.tx + dx,
      y: start.ty + dy,
    };
    applyTransform(false);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = panStartRef.current;
    panStartRef.current = null;
    if (!start) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const isClick =
      !didPanRef.current &&
      Math.abs(dx) < CLICK_THRESHOLD &&
      Math.abs(dy) < CLICK_THRESHOLD;

    if (isClick && (activeId || mapMode !== "overview")) {
      resetMap();
    }
  };

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "relative w-full transition-opacity duration-300",
          /* natural ratio of new-map.png (1392×768 ≈ 55.2%) with good minimums */
          "h-[55vw] min-h-[340px] max-h-[760px]",
          ready ? "opacity-100" : "opacity-40",
        )}
      >
        <div
          ref={viewportRef}
          className="map-viewport map-viewport--full relative h-full w-full overflow-hidden bg-[#FAF8F4]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
        >
          {!hideControls && <div className="map-float-controls pointer-events-none absolute inset-x-0 top-0 z-40 px-3 pt-3 md:px-5 md:pt-4">
            <div className="pointer-events-auto mx-auto max-w-4xl space-y-2">
              <label className="map-search-bar">
                <Search className="h-4 w-4 shrink-0 text-[#8A8175]" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t(
                    "ابحث بالمنطقة أو اسم المشروع",
                    "Search by area or project name",
                  )}
                  className="min-w-0 flex-1 bg-transparent text-sm text-[#1A1612] outline-none placeholder:text-[#8A8175]"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-[#8A8175]"
                    aria-label="Clear"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </label>

              <div className="map-filter-scroll flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => {
                      if (region.id === "all") resetMap();
                      else selectRegion(region.id);
                    }}
                    className={cn(
                      "map-filter-chip shrink-0",
                      filter === region.id && "is-active",
                    )}
                  >
                    {lang === "ar" ? region.nameAr : region.nameEn}
                  </button>
                ))}
              </div>
            </div>
          </div>}


          <div
            ref={canvasRef}
            className={cn(
              "absolute top-0 left-0 touch-none will-change-transform",
              !ready && "invisible",
            )}
            style={{ width: imgSize.w, height: imgSize.h }}
          >
            <img
              ref={imgRef}
              src={MAP_SRC}
              alt={t("خريطة مشاريع الشبيلي", "AlShubaily Projects Map")}
              width={MAP_DEFAULT.w}
              height={MAP_DEFAULT.h}
              onLoad={handleImageLoad}
              draggable={false}
              className="block h-auto w-full max-w-none select-none"
            />

            <div className="absolute inset-0">
              {searchFiltered.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={lang === "ar" ? project.nameAr : project.nameEn}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectProject(project);
                  }}
                  className={cn(
                    "map-hit-target absolute",
                    activeId === project.id && "is-active",
                    activeId && activeId !== project.id && "is-dimmed",
                  )}
                  style={
                    {
                      left: `${project.x}%`,
                      top: `${project.y}%`,
                      transform: "translate(-50%, -50%)",
                      ["--pin-color" as string]: project.color,
                    } as React.CSSProperties
                  }
                >
                  <span className="map-hit-ring" aria-hidden />
                  <span className="map-hit-core" aria-hidden>{project.id}</span>
                </button>
              ))}
            </div>
          </div>

          {activeProject && (
            <>
              <button
                type="button"
                aria-label={t("إغلاق", "Close")}
                className="map-popup-backdrop absolute inset-0 z-[45] cursor-default bg-[#14110D]/35 backdrop-blur-[2px]"
                onClick={resetMap}
              />
              <MapProjectPopup
                project={activeProject}
                lang={lang}
                t={t}
                onClose={resetMap}
              />
            </>
          )}

          <div className="map-zoom-stack absolute end-3 bottom-3 z-30 md:end-4 md:bottom-4">
            <button
              type="button"
              className="map-zoom-pill"
              onClick={() => zoomFromCenter(baseScaleRef.current * ZOOM_STEP_RATIO)}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              className="map-zoom-pill"
              onClick={() => zoomFromCenter(-baseScaleRef.current * ZOOM_STEP_RATIO)}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapProjectPopup({
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
      className="map-project-popup pointer-events-auto absolute left-1/2 top-[48%] z-50 w-[min(88vw,380px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#14110D] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.heroImage}
          alt={lang === "ar" ? project.nameAr : project.nameEn}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110D] via-transparent to-transparent" />
        <span
          className="absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg"
          style={{ background: project.color }}
        >
          {project.id}
        </span>
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
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className={cn(
            buttonVariants({ size: "default" }),
            "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A962] text-[#14110D] hover:bg-[#B8954A]",
          )}
        >
          {t("عرض تفاصيل المشروع", "View Project Details")}
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
