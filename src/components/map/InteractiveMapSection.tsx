import { useState } from "react";
import { Search, X } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { useLang } from "@/contexts/lang-context";
import { REGIONS, type RegionId } from "@/data/projects";
import { cn } from "@/lib/utils";

export function InteractiveMapSection() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<RegionId>("all");

  return (
    <section id="map" className="relative w-full bg-[#FAF9F6]" style={{ paddingBottom: "clamp(44px, 6.5vw, 100px)" }}>

      {/* Header */}
      <div className="mx-auto max-w-4xl px-4 pb-6 pt-16 text-center md:pb-8 md:pt-24 md:px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8A6A2E]">
          {t("خريطة المشاريع", "Projects Map")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl">
          {t("مشاريع الشبيلي", "AlShubaily Projects")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1A1612]/60 md:text-base">
          {t(
            "اضغط على أي رقم على الخريطة لاستكشاف المشروع",
            "Tap any numbered point on the map to explore a project",
          )}
        </p>
      </div>

      {/* Search bar + region filters — outside the map */}
      <div className="mx-auto max-w-4xl space-y-3 px-4 pb-4 md:px-6">
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

        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setFilter(region.id)}
              className={cn("map-filter-chip shrink-0", filter === region.id && "is-active")}
            >
              {lang === "ar" ? region.nameAr : region.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Full-bleed interactive map */}
      <div className="w-full">
        <InteractiveMap
          hideControls
          externalSearch={search}
          externalFilter={filter}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
        />
      </div>
    </section>
  );
}
