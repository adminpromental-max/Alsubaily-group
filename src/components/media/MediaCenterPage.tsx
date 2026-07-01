import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useLang } from "@/contexts/lang-context";
import { MediaArticleModal } from "@/components/media/MediaArticleModal";
import { MediaNewsTicker } from "@/components/media/MediaNewsTicker";
import {
  MEDIA_ARTICLES,
  MEDIA_CATEGORIES,
  MEDIA_HERO_BANNER,
  MEDIA_TAGLINE,
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
  }).format(new Date(date));
}

function formatDateFull(date: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function HeadlineRail({
  articles,
  activeId,
  onSelect,
}: {
  articles: MediaArticle[];
  activeId?: string;
  onSelect: (a: MediaArticle) => void;
}) {
  const { lang, t } = useLang();

  return (
    <aside className="media-headline-rail flex flex-col border-[#1A1612]/12 bg-[#EDE8DE] lg:border-e">
      <div className="border-b border-[#1A1612]/12 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9A7B3A]">
          {t("عناوين", "Headlines")}
        </p>
      </div>
      <ul className="flex flex-1 flex-col divide-y divide-[#1A1612]/10">
        {articles.map((article, i) => {
          const title = lang === "ar" ? article.titleAr : article.titleEn;
          const cat = getCategoryById(article.category);
          return (
            <li key={article.id}>
              <button
                type="button"
                onClick={() => onSelect(article)}
                className={cn(
                  "group flex w-full flex-col gap-1.5 px-4 py-4 text-start transition-colors hover:bg-[#E5DFD3]",
                  activeId === article.id && "bg-[#E5DFD3]",
                )}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A7B3A]">
                  {String(i + 1).padStart(2, "0")} ·{" "}
                  {lang === "ar" ? cat.nameAr : cat.nameEn}
                </span>
                <span className="font-heading text-[13px] font-semibold leading-snug text-[#1A1612] transition-colors group-hover:text-[#8A6A2E] lg:text-sm">
                  {title}
                </span>
                <span className="text-[10px] text-[#5C5348]/80">
                  {formatDateShort(article.date, lang)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function LeadStory({
  article,
  onOpen,
}: {
  article: MediaArticle;
  onOpen: () => void;
}) {
  const { lang, t } = useLang();
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const excerpt = lang === "ar" ? article.excerptAr : article.excerptEn;
  const cat = getCategoryById(article.category);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col text-start"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1612] lg:aspect-auto lg:min-h-[280px] lg:flex-1">
        {article.image ? (
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${MEDIA_HERO_BANNER}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/90 via-[#1A1612]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <span className="inline-block border border-[#C9A962]/50 bg-[#C9A962]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C9A962]">
            {lang === "ar" ? cat.nameAr : cat.nameEn}
          </span>
          <h2 className="mt-3 font-heading text-xl font-bold leading-snug text-white md:text-2xl lg:text-[1.65rem]">
            {title}
          </h2>
        </div>
      </div>
      <div className="border-b border-[#1A1612]/10 bg-white px-5 py-4 md:px-7">
        <p className="text-sm leading-relaxed text-[#5C5348] md:text-[15px]">
          {excerpt}
        </p>
        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[#C9A962]">
          {t("اقرأ التقرير الكامل ←", "Read full story →")}
        </span>
      </div>
    </button>
  );
}

function SideBriefs({
  articles,
  onSelect,
}: {
  articles: MediaArticle[];
  onSelect: (a: MediaArticle) => void;
}) {
  const { lang, t } = useLang();

  return (
    <aside className="flex flex-col border-[#1A1612]/12 bg-[#F7F4EE] lg:border-s">
      <div className="border-b border-[#1A1612]/12 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9A7B3A]">
          {t("مختصرات", "Briefs")}
        </p>
      </div>
      <ul className="divide-y divide-[#1A1612]/10">
        {articles.map((article) => {
          const title = lang === "ar" ? article.titleAr : article.titleEn;
          return (
            <li key={article.id}>
              <button
                type="button"
                onClick={() => onSelect(article)}
                className="group flex gap-3 px-4 py-3.5 text-start transition-colors hover:bg-[#EDE8DE]"
              >
                {article.image && (
                  <img
                    src={article.image}
                    alt=""
                    className="h-14 w-14 shrink-0 object-cover"
                  />
                )}
                <div className="min-w-0">
                  <p className="line-clamp-3 font-heading text-xs font-semibold leading-snug text-[#1A1612] group-hover:text-[#8A6A2E]">
                    {title}
                  </p>
                  <p className="mt-1 text-[10px] text-[#5C5348]">
                    {formatDateShort(article.date, lang)}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function NewspaperRow({
  article,
  onOpen,
}: {
  article: MediaArticle;
  onOpen: () => void;
}) {
  const { lang } = useLang();
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const excerpt = lang === "ar" ? article.excerptAr : article.excerptEn;
  const cat = getCategoryById(article.category);

  return (
    <article
      data-media-row
      className="group grid gap-4 border-b border-[#1A1612]/12 py-7 md:grid-cols-[140px_1fr] md:gap-6 lg:grid-cols-[180px_1fr]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-[4/3] overflow-hidden bg-[#1A1612] md:aspect-square"
      >
        {article.image ? (
          <img
            src={article.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('${MEDIA_HERO_BANNER}')` }}
          />
        )}
      </button>
      <button type="button" onClick={onOpen} className="text-start">
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wider text-[#9A7B3A]">
          <span>{lang === "ar" ? cat.nameAr : cat.nameEn}</span>
          <span aria-hidden>·</span>
          <span className="text-[#5C5348]">
            {formatDateShort(article.date, lang)}
          </span>
        </div>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-[#1A1612] transition-colors group-hover:text-[#8A6A2E] md:text-xl">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#5C5348] md:text-[15px]">
          {excerpt}
        </p>
      </button>
    </article>
  );
}

export function MediaCenterPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<FilterId>("all");
  const [activeArticle, setActiveArticle] = useState<MediaArticle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [leadId, setLeadId] = useState<string | undefined>();
  const feedRef = useRef<HTMLDivElement>(null);

  const sorted = useMemo(
    () =>
      [...MEDIA_ARTICLES].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? sorted
        : sorted.filter((a) => a.category === filter);
    return list;
  }, [filter, sorted]);

  const lead = filtered.find((a) => a.id === leadId) ?? filtered[0];
  const headlineRail = filtered.slice(0, 6);
  const sideBriefs = filtered.slice(1, 5);
  const feedArticles = filtered.filter((a) => a.id !== lead?.id);

  useEffect(() => {
    setLeadId(undefined);
  }, [filter]);

  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    const rows = feed.querySelectorAll("[data-media-row]");
    gsap.killTweensOf(rows);
    gsap.fromTo(
      rows,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
      },
    );
  }, [filter]);

  const openArticle = (article: MediaArticle) => {
    setActiveArticle(article);
    setModalOpen(true);
  };

  const today = formatDateFull(new Date().toISOString().slice(0, 10), lang);

  return (
    <div className="media-newspaper min-h-screen bg-[#F2EDE4]">
      {/* Masthead */}
      <header className="border-b-2 border-[#1A1612] px-6 pt-28 pb-5 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] tracking-[0.35em] text-[#5C5348]">{today}</p>
          <div className="my-3 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-[#1A1612]/25 sm:block" />
            <h1 className="font-heading text-3xl font-black tracking-tight text-[#1A1612] md:text-5xl">
              {t("المركز الإعلامي", "Media Center")}
            </h1>
            <span className="hidden h-px flex-1 bg-[#1A1612]/25 sm:block" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#9A7B3A]">
            {t("مجموعة خالد بن سعود الشبيلي", "Khalid Bin Saud AlShubaily Group")}
          </p>
        </div>
      </header>

      <MediaNewsTicker articles={sorted.slice(0, 8)} onSelect={openArticle} />

      {/* Newspaper spread: headlines | banner + lead | briefs */}
      <section className="mx-auto max-w-7xl border-b-2 border-[#1A1612]/20 px-0">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(13rem,16rem)_1fr_minmax(11rem,14rem)]"
          dir="ltr"
        >
          <div dir={lang === "ar" ? "rtl" : "ltr"} className="hidden lg:block">
            <HeadlineRail
              articles={headlineRail}
              activeId={lead?.id}
              onSelect={(a) => setLeadId(a.id)}
            />
          </div>

          <div dir={lang === "ar" ? "rtl" : "ltr"} className="flex flex-col">
            {/* Two-word banner */}
            <div className="relative overflow-hidden border-b border-[#1A1612]/12">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${MEDIA_HERO_BANNER}')` }}
              />
              <div className="absolute inset-0 bg-[#1A1612]/78" />
              <div className="relative flex min-h-[120px] items-center justify-center gap-4 px-6 py-8 md:min-h-[140px] md:gap-8">
                <span className="font-heading text-4xl font-black text-[#C9A962] md:text-6xl">
                  {lang === "ar" ? MEDIA_TAGLINE.word1Ar : MEDIA_TAGLINE.word1En}
                </span>
                <span
                  className="h-12 w-px bg-[#C9A962]/50 md:h-16"
                  aria-hidden
                />
                <span className="font-heading text-4xl font-black text-white md:text-6xl">
                  {lang === "ar" ? MEDIA_TAGLINE.word2Ar : MEDIA_TAGLINE.word2En}
                </span>
              </div>
            </div>

            {lead && (
              <LeadStory article={lead} onOpen={() => openArticle(lead)} />
            )}
          </div>

          <div dir={lang === "ar" ? "rtl" : "ltr"} className="hidden lg:block">
            <SideBriefs articles={sideBriefs} onSelect={openArticle} />
          </div>
        </div>

        {/* Mobile headlines scroll */}
        <div className="border-t border-[#1A1612]/12 lg:hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory">
            {headlineRail.map((article) => {
              const title = lang === "ar" ? article.titleAr : article.titleEn;
              return (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => openArticle(article)}
                  className="min-w-[75vw] shrink-0 snap-start border-e border-[#1A1612]/10 px-4 py-4 text-start sm:min-w-[50vw]"
                >
                  <p className="line-clamp-2 font-heading text-sm font-semibold text-[#1A1612]">
                    {title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section rubrics */}
      <nav className="sticky top-[72px] z-30 border-b border-[#1A1612]/15 bg-[#F2EDE4]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-0 px-6 md:px-8">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors md:text-[13px]",
              filter === "all"
                ? "border-[#C9A962] text-[#1A1612]"
                : "border-transparent text-[#5C5348] hover:text-[#1A1612]",
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
                "border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors md:text-[13px]",
                filter === cat.id
                  ? "border-[#C9A962] text-[#1A1612]"
                  : "border-transparent text-[#5C5348] hover:text-[#1A1612]",
              )}
            >
              {lang === "ar" ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>
      </nav>

      {/* Main feed — newspaper columns */}
      <section className="px-6 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between border-b border-[#1A1612] pb-2">
            <h2 className="font-heading text-xl font-black uppercase tracking-wide text-[#1A1612] md:text-2xl">
              {filter === "all"
                ? t("أرشيف الأخبار", "News Archive")
                : lang === "ar"
                  ? getCategoryById(filter).nameAr
                  : getCategoryById(filter).nameEn}
            </h2>
            <span className="text-[11px] text-[#5C5348]">
              {filtered.length} {t("تقرير", "reports")}
            </span>
          </div>

          {feedArticles.length === 0 ? (
            <p className="py-12 text-center text-[#5C5348]">
              {t("لا توجد مقالات إضافية.", "No additional articles.")}
            </p>
          ) : (
            <div ref={feedRef} className="lg:columns-2 lg:gap-10">
              {feedArticles.map((article) => (
                <div key={article.id} className="break-inside-avoid">
                  <NewspaperRow
                    article={article}
                    onOpen={() => openArticle(article)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <MediaArticleModal
        article={activeArticle}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
