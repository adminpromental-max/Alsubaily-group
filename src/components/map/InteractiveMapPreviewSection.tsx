import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { useLang } from "@/contexts/lang-context";
import { PROJECTS, REGIONS, type RegionId } from "@/data/projects";
import {
  MAP_V2_COORDINATES,
  MAP_V2_SIZE,
  MAP_V2_SRC,
} from "@/data/map-v2-coordinates";
import { cn } from "@/lib/utils";

export function InteractiveMapPreviewSection() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<RegionId>("all");

  const visibleCount =
    filter === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.region === filter).length;

  return (
    <section id="map-preview" className="relative w-full bg-[#FAF9F6] pb-0">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-4 text-center md:pt-24 md:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/10 px-4 py-2 text-xs text-[#8A6A2E]">
          <span>{t("معاينة — خريطة بدون أرقام مدمجة", "Preview — map without baked numbers")}</span>
          <span className="text-[#1A1612]/30">·</span>
          <Link to="/" hash="map" className="font-medium hover:underline">
            {t("الخريطة الرئيسية", "Homepage map")}
          </Link>
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#8A6A2E]">
          {t("خريطة المشاريع", "Projects Map")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl">
          {t("مشاريع الشبيلي", "AlShubaily Projects")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1A1612]/60 md:text-base">
          {t(
            "مرّر على أي pin لعرض اسم المشروع، واضغط لفتح البطاقة. اختر منطقة من الشريط — واضغط على الخريطة للعودة.",
            "Hover a pin to see the project name, click to open its card. Filter by region — tap the map to reset.",
          )}
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-3 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => {
              if (region.id === "all") {
                setFilter("all");
              } else {
                setFilter(region.id);
              }
            }}
                className={cn("map-filter-chip shrink-0", filter === region.id && "is-active")}
              >
                {lang === "ar" ? region.nameAr : region.nameEn}
              </button>
            ))}
          </div>

          <label className="map-search-bar sm:w-64">
            <Search className="h-4 w-4 shrink-0 text-[#8A8175]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("ابحث عن مشروع...", "Search project...")}
              className="min-w-0 flex-1 bg-transparent text-sm text-[#1A1612] outline-none placeholder:text-[#8A8175]"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")} className="text-[#8A8175]">
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>

        <p className="mt-3 text-xs text-[#1A1612]/50">
          {t(
            `${visibleCount} مشروع · اضغط على أي نقطة مضيئة`,
            `${visibleCount} projects · tap any highlighted point`,
          )}
        </p>
      </div>

      <div className="w-full">
        <InteractiveMap
          hideControls
          externalSearch={search}
          externalFilter={filter}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
          mapSrc={MAP_V2_SRC}
          mapDefault={MAP_V2_SIZE}
          coordinates={MAP_V2_COORDINATES}
          pinMode="gmap"
          regionPinColors
        />
      </div>
    </section>
  );
}
