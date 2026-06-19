import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, REGIONS, type Project, type RegionId } from "@/data/projects";
import { useLang } from "@/contexts/lang-context";
import { cn } from "@/lib/utils";
import mapAsset from "@/assets/ksa-map.png.asset.json";

const ZOOM = 2.2;

export function InteractiveMap() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Project | null>(null);
  const [region, setRegion] = useState<RegionId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (region !== "all" && p.region !== region) return false;
      if (!q) return true;
      return (
        p.nameAr.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.typeAr.toLowerCase().includes(q) ||
        p.typeEn.toLowerCase().includes(q)
      );
    });
  }, [region, query]);

  const zoomed = active !== null;
  const originX = active?.x ?? 50;
  const originY = active?.y ?? 50;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
      {/* Search / Filter bar */}
      <div className="px-4 md:px-10">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#C9A962]/30 bg-white/80 p-3 shadow-[0_10px_40px_-12px_rgba(26,22,18,0.18)] backdrop-blur-xl md:p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* Search input */}
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 grid w-10 place-items-center text-[#1A1612]/40 ltr:left-0 rtl:right-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("ابحث عن مشروع...", "Search a project…")}
                className="h-11 w-full rounded-full border border-[#1A1612]/10 bg-white/70 text-sm text-[#1A1612] placeholder:text-[#1A1612]/40 outline-none transition focus:border-[#C9A962] focus:bg-white ltr:pl-10 ltr:pr-4 rtl:pr-10 rtl:pl-4"
              />
            </div>
            {/* Region chips */}
            <div className="flex flex-wrap items-center gap-2">
              {REGIONS.map((r) => {
                const isActive = region === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      setRegion(r.id);
                      setActive(null);
                    }}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition",
                      isActive
                        ? "bg-[#1A1612] text-[#FAFAF8] shadow-[0_6px_20px_rgba(26,22,18,0.25)]"
                        : "bg-transparent text-[#1A1612]/70 hover:bg-[#1A1612]/5",
                    )}
                  >
                    {t(r.nameAr, r.nameEn)}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-2 px-2 text-[11px] text-[#1A1612]/50">
            {t(
              `${filtered.length} مشروع · اضغطي على أي نقطة مضيئة`,
              `${filtered.length} projects · tap any glowing point`,
            )}
          </p>
        </div>
      </div>

      {/* Map stage */}
      <div className="relative mt-6 w-full overflow-hidden bg-[#E8DFD0]" style={{ aspectRatio: "2000 / 1111" }}>
        <div
          className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: zoomed ? `scale(${ZOOM})` : "scale(1)",
            transformOrigin: `${originX}% ${originY}%`,
          }}
        >
          <img
            src={mapAsset.url}
            alt={t("خريطة مشاريع الشبيلي", "AlShubaily projects map")}
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
          />

          {filtered.map((p) => {
            const isActive = active?.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(isActive ? null : p)}
                aria-label={t(p.nameAr, p.nameEn)}
                className="group absolute cursor-pointer focus:outline-none"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: zoomed
                    ? `translate(-50%, -50%) scale(${1 / ZOOM})`
                    : "translate(-50%, -50%)",
                  transformOrigin: "center",
                  transition: "transform 1200ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <span
                  className="absolute inset-0 -m-4 rounded-full opacity-60 blur-[3px] animate-ping"
                  style={{ background: p.color }}
                />
                <span
                  className={cn(
                    "relative grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-white shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_4px_14px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-125",
                    isActive && "ring-4 ring-white/80",
                  )}
                  style={{ background: p.color }}
                >
                  {p.id}
                </span>
              </button>
            );
          })}
        </div>

        {zoomed && (
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 z-20 rounded-full border border-[#C9A962]/40 bg-white/90 px-4 py-2 text-xs font-semibold text-[#1A1612] shadow-lg backdrop-blur transition hover:bg-white ltr:left-4 rtl:right-4"
          >
            {t("← عرض الخريطة كاملة", "← Reset view")}
          </button>
        )}

        {active && (
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="absolute bottom-6 left-1/2 z-30 w-[min(92vw,380px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 bg-[#0F0F0F]/95 text-white shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:bottom-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white/80 transition hover:bg-black/70 hover:text-white ltr:right-2 rtl:left-2"
            >
              ×
            </button>
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={active.heroImage}
                alt={t(active.nameAr, active.nameEn)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span
                className="absolute top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ltr:left-3 rtl:right-3"
                style={{ background: active.color }}
              >
                {String(active.id).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C9A962]">
                {t(active.regionAr, active.regionEn)} · {t(active.typeAr, active.typeEn)}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight">
                {t(active.nameAr, active.nameEn)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {t(active.descriptionAr, active.descriptionEn)}
              </p>
              <Link
                to="/projects/$slug"
                params={{ slug: active.slug }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C9A962] px-4 py-2 text-xs font-semibold text-[#0A0A0A] transition hover:bg-[#d8b970]"
              >
                {t("عرض تفاصيل المشروع", "View project details")}
                <span aria-hidden>{lang === "ar" ? "←" : "→"}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
