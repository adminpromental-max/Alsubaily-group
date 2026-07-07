import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { MediaArticleModal } from "@/components/media/MediaArticleModal";
import { MediaFeaturedSlider } from "@/components/media/MediaFeaturedSlider";
import {
  MEDIA_ARTICLES,
  MEDIA_CATEGORIES,
  MEDIA_HERO,
  MEDIA_HERO_BANNER,
  getCategoryById,
  type MediaArticle,
  type MediaCategoryId,
} from "@/data/media-articles";
import { cn } from "@/lib/utils";

type FilterId = "all" | MediaCategoryId;

function formatDateShort(date: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function matchesSearch(article: MediaArticle, query: string) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const cat = getCategoryById(article.category);
  const haystack = [
    article.titleAr,
    article.titleEn,
    article.excerptAr,
    article.excerptEn,
    cat.nameAr,
    cat.nameEn,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

function MediaArticleCard({
  article,
  onOpen,
}: {
  article: MediaArticle;
  onOpen: () => void;
}) {
  const { lang } = useLang();
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const cat = getCategoryById(article.category);

  return (
    <button
      type="button"
      data-media-card
      onClick={onOpen}
      className="projects-cinema-card group relative block w-full overflow-hidden rounded-2xl text-start"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={article.image ?? MEDIA_HERO_BANNER}
          alt=""
          className="projects-cinema-img h-full w-full object-cover"
          loading="lazy"
        />
        <div className="projects-cinema-vignette pointer-events-none absolute inset-0" />
        <div className="projects-cinema-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span
          className="absolute start-4 top-4 z-10 rounded-full border border-[#C9A962]/35 bg-[#C9A962]/15 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#E8D5A3] backdrop-blur-md"
        >
          {lang === "ar" ? cat.nameAr : cat.nameEn}
        </span>

        <span className="absolute end-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </span>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9A962]/90">
            {formatDateShort(article.date, lang)}
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-white md:text-2xl">
            {title}
          </h3>
          <div className="mt-4 h-px w-0 bg-gradient-to-r from-[#C9A962] to-transparent transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </button>
  );
}

export function MediaCenterPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<FilterId>("all");
  const [search, setSearch] = useState("");
  const [activeArticle, setActiveArticle] = useState<MediaArticle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const sorted = useMemo(
    () =>
      [...MEDIA_ARTICLES].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  );

  const filtered = useMemo(() => {
    return sorted.filter((article) => {
      const categoryOk = filter === "all" || article.category === filter;
      const searchOk = matchesSearch(article, search);
      return categoryOk && searchOk;
    });
  }, [filter, search, sorted]);

  const featuredArticles = filtered.slice(0, 3);
  const gridArticles = filtered.slice(3);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    gsap.fromTo(
      hero.querySelectorAll("[data-media-hero-reveal]"),
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
    const cards = grid.querySelectorAll("[data-media-card]");
    gsap.killTweensOf(cards);
    gsap.fromTo(
      cards,
      { y: 32, opacity: 0, scale: 0.96 },
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

  const openArticle = (article: MediaArticle) => {
    setActiveArticle(article);
    setModalOpen(true);
  };

  return (
    <div className="media-center relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,169,98,0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(107,74,90,0.1),transparent)]"
      />

      <section ref={heroRef} className="media-center-hero relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${MEDIA_HERO_BANNER}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/30 via-[#0C0A08]/85 to-[#0C0A08]" />

        <div className="relative">
          <div data-media-hero-reveal className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#C9A962]">
              {t(MEDIA_HERO.eyebrowAr, MEDIA_HERO.eyebrowEn)}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-white md:text-5xl">
              {t(MEDIA_HERO.titleAr, MEDIA_HERO.titleEn)}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              {t(MEDIA_HERO.bodyAr, MEDIA_HERO.bodyEn)}
            </p>
          </div>

          <div
            data-media-hero-reveal
            className="mt-8 grid max-w-3xl grid-cols-3 gap-3 md:gap-5"
          >
            {MEDIA_HERO.stats.map((stat) => (
              <div
                key={stat.labelEn}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm md:px-5 md:py-5"
              >
                <p className="font-heading text-2xl font-bold text-[#E8D5A3] md:text-3xl">
                  {lang === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-white/45 md:text-xs">
                  {t(stat.labelAr, stat.labelEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-8 space-y-3 md:mt-10">
        <label className="map-search-bar max-w-2xl">
          <Search className="h-4 w-4 shrink-0 text-[#8A8175]" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(
              "ابحث في الأخبار أو التصنيف",
              "Search news or category",
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
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "map-filter-chip shrink-0",
              filter === "all" && "is-active",
            )}
          >
            {t("الكل", "All")}
          </button>
          {MEDIA_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "map-filter-chip shrink-0",
                filter === cat.id && "is-active",
              )}
            >
              {lang === "ar" ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        <p className="text-xs font-medium tracking-wide text-white/40">
          {t(
            `${filtered.length} خبر`,
            `${filtered.length} article${filtered.length === 1 ? "" : "s"}`,
          )}
        </p>
      </section>

      {filtered.length === 0 ? (
        <div className="relative mt-16 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-sm">
          <p className="text-lg font-medium text-white/70">
            {t("لا توجد أخبار مطابقة", "No matching articles")}
          </p>
          <p className="mt-2 text-sm text-white/40">
            {t(
              "جرّب تغيير التصنيف أو كلمات البحث",
              "Try changing the category or search terms",
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
            {t("عرض جميع الأخبار", "Show all articles")}
          </button>
        </div>
      ) : (
        <>
          {featuredArticles.length > 0 && (
            <div className="relative z-10 mt-10 md:mt-12">
              <MediaFeaturedSlider
                articles={featuredArticles}
                onSelect={openArticle}
              />
            </div>
          )}

          {gridArticles.length > 0 && (
            <section className="relative z-10 mt-14 md:mt-16">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A962]">
                    {t("أرشيف الأخبار", "News Archive")}
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
                    {t("المزيد من الأخبار", "More News")}
                  </h2>
                </div>
              </div>

              <div
                ref={gridRef}
                className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              >
                {gridArticles.map((article) => (
                  <MediaArticleCard
                    key={article.id}
                    article={article}
                    onOpen={() => openArticle(article)}
                  />
                ))}
              </div>

              <div className="media-articles-track flex gap-4 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {gridArticles.map((article) => (
                  <div key={article.id} className="w-[min(82vw,320px)] shrink-0">
                    <MediaArticleCard
                      article={article}
                      onOpen={() => openArticle(article)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <MediaArticleModal
        article={activeArticle}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
