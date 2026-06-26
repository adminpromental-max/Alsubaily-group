import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { ProjectDetailLink } from "@/components/projects/ProjectDetailLink";
import {
  PROJECTS,
  REGIONS,
  type Project,
  type RegionId,
} from "@/data/projects";
import { cn } from "@/lib/utils";

function matchesSearch(project: Project, query: string, lang: string) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const haystack = [
    project.nameAr,
    project.nameEn,
    project.regionAr,
    project.regionEn,
    project.typeAr,
    project.typeEn,
    project.descriptionAr,
    project.descriptionEn,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function ProjectsPortfolio() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<RegionId>("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((project) => {
      const regionOk = filter === "all" || project.region === filter;
      const searchOk = matchesSearch(project, search, lang);
      return regionOk && searchOk;
    });
  }, [filter, search, lang]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    gsap.fromTo(
      header.querySelectorAll("[data-portfolio-reveal]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      },
    );
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-project-card]");
    gsap.killTweensOf(cards);

    gsap.fromTo(
      cards,
      { y: 36, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.06,
        clearProps: "transform",
      },
    );
  }, [filtered]);

  return (
    <div className="projects-portfolio relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,169,98,0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(107,29,58,0.08),transparent)]"
      />

      <div ref={headerRef} className="relative">
        <div data-portfolio-reveal className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#C9A962]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-white md:text-5xl">
            {t("مشاريع مجموعة الشبيلي", "AlShubaily Group Projects")}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            {t(
              "استكشف محفظتنا في مختلف مناطق المملكة — ابحث أو اختر منطقة لعرض المشاريع.",
              "Explore our portfolio across the Kingdom — search or pick a region to filter projects.",
            )}
          </p>
        </div>

        <div
          data-portfolio-reveal
          className="relative z-10 mt-8 space-y-2 md:mt-10"
        >
          <label className="map-search-bar max-w-2xl">
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
                className="text-[#8A8175] transition hover:text-[#1A1612]"
                aria-label={t("مسح", "Clear")}
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
                onClick={() => setFilter(region.id)}
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

        <p
          data-portfolio-reveal
          className="mt-5 text-xs font-medium tracking-wide text-white/40"
        >
          {t(
            `${filtered.length} مشروع`,
            `${filtered.length} project${filtered.length === 1 ? "" : "s"}`,
          )}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="relative mt-16 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-sm">
          <p className="text-lg font-medium text-white/70">
            {t("لا توجد مشاريع مطابقة", "No matching projects")}
          </p>
          <p className="mt-2 text-sm text-white/40">
            {t(
              "جرّب تغيير المنطقة أو كلمات البحث",
              "Try changing the region or search terms",
            )}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setFilter("all");
            }}
            className="mt-6 rounded-full border border-[#C9A962]/40 bg-[#C9A962]/10 px-5 py-2 text-sm font-medium text-[#E8D5A3] transition hover:bg-[#C9A962]/20"
          >
            {t("عرض جميع المشاريع", "Show all projects")}
          </button>
        </div>
      ) : (
        <div
          ref={gridRef}
          className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {filtered.map((project) => (
            <ProjectDetailLink
              key={project.slug}
              slug={project.slug}
              data-project-card
              className="projects-cinema-card group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={lang === "ar" ? project.nameAr : project.nameEn}
                  className="projects-cinema-img h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="projects-cinema-vignette pointer-events-none absolute inset-0" />
                <div className="projects-cinema-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span
                  className="absolute start-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-white/90 backdrop-blur-md"
                  style={{
                    background: `${project.color}33`,
                    border: `1px solid ${project.color}66`,
                  }}
                >
                  {lang === "ar" ? project.regionAr : project.regionEn}
                </span>

                <span className="absolute end-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9A962]/90">
                    {lang === "ar" ? project.typeAr : project.typeEn}
                  </p>
                  <h2 className="mt-1.5 font-heading text-xl font-bold leading-snug text-white md:text-2xl">
                    {lang === "ar" ? project.nameAr : project.nameEn}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60 transition-colors duration-300 group-hover:text-white/75">
                    {lang === "ar"
                      ? project.descriptionAr
                      : project.descriptionEn}
                  </p>
                  <div className="mt-4 h-px w-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </ProjectDetailLink>
          ))}
        </div>
      )}
    </div>
  );
}
