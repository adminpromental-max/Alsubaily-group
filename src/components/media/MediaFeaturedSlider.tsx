import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  MEDIA_HERO_BANNER,
  getCategoryById,
  type MediaArticle,
} from "@/data/media-articles";
import { cn } from "@/lib/utils";

type MediaFeaturedSliderProps = {
  articles: MediaArticle[];
  onSelect: (article: MediaArticle) => void;
};

function formatDate(date: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function MediaFeaturedSlider({
  articles,
  onSelect,
}: MediaFeaturedSliderProps) {
  const { t, lang } = useLang();
  const [index, setIndex] = useState(0);
  const isRtl = lang === "ar";

  useEffect(() => {
    setIndex(0);
  }, [articles]);

  useEffect(() => {
    if (articles.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % articles.length),
      6000,
    );
    return () => clearInterval(id);
  }, [articles.length]);

  if (!articles.length) return null;

  const article = articles[index]!;
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const excerpt = lang === "ar" ? article.excerptAr : article.excerptEn;
  const category = getCategoryById(article.category);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % articles.length);

  return (
    <section className="media-featured-slider">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A962]">
            {t("آخر الأخبار", "Latest News")}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
            {t("أبرز التطورات", "Featured Updates")}
          </h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={prev}
            className="media-slider-nav"
            aria-label={t("السابق", "Previous")}
          >
            {isRtl ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={next}
            className="media-slider-nav"
            aria-label={t("التالي", "Next")}
          >
            {isRtl ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div className="media-featured-frame group relative overflow-hidden rounded-3xl">
        <button
          type="button"
          onClick={() => onSelect(article)}
          className="relative block w-full text-start"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#14110D] md:aspect-[21/9]">
            <img
              key={article.id}
              src={article.image ?? MEDIA_HERO_BANNER}
              alt=""
              className="media-featured-img h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-[#0C0A08]/45 to-[#0C0A08]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08]/70 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#C9A962]">
                <span className="rounded-full border border-[#C9A962]/35 bg-[#C9A962]/10 px-3 py-1">
                  {lang === "ar" ? category.nameAr : category.nameEn}
                </span>
                <span className="text-white/45">
                  {formatDate(article.date, lang)}
                </span>
              </div>
              <h3 className="mt-4 max-w-4xl font-heading text-2xl font-bold leading-snug text-white md:text-4xl">
                {title}
              </h3>
              <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
                {excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E8D5A3] transition-colors group-hover:text-[#C9A962]">
                {t("اقرأ المزيد", "Read more")}
                <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </button>

        <div className="absolute end-4 top-4 flex gap-2 sm:hidden">
          <button
            type="button"
            onClick={prev}
            className="media-slider-nav"
            aria-label={t("السابق", "Previous")}
          >
            {isRtl ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={next}
            className="media-slider-nav"
            aria-label={t("التالي", "Next")}
          >
            {isRtl ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {articles.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "h-1 flex-1 rounded-full transition-all",
              i === index ? "bg-[#C9A962]" : "bg-white/15 hover:bg-white/25",
            )}
            aria-label={t(`خبر ${i + 1}`, `News ${i + 1}`)}
          />
        ))}
      </div>
    </section>
  );
}
