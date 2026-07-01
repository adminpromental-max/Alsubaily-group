import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { getCategoryById, type MediaArticle } from "@/data/media-articles";
import { cn } from "@/lib/utils";

type MediaNewsTickerProps = {
  articles: MediaArticle[];
  onSelect: (article: MediaArticle) => void;
};

export function MediaNewsTicker({ articles, onSelect }: MediaNewsTickerProps) {
  const { t, lang } = useLang();
  const [index, setIndex] = useState(0);
  const isRtl = lang === "ar";

  useEffect(() => {
    if (articles.length <= 1) return;
    const id = setInterval(
      () => setIndex((p) => (p + 1) % articles.length),
      4500,
    );
    return () => clearInterval(id);
  }, [articles.length]);

  if (!articles.length) return null;

  const article = articles[index]!;
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const category = getCategoryById(article.category);

  const prev = () =>
    setIndex((p) => (p - 1 + articles.length) % articles.length);
  const next = () => setIndex((p) => (p + 1) % articles.length);

  return (
    <div className="media-ticker border-y border-[#1A1612]/15 bg-[#1A1612] text-white">
      <div className="mx-auto flex max-w-7xl items-stretch">
        <div className="flex shrink-0 items-center bg-[#C9A962] px-4 py-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1612] md:text-[11px]">
            {t("عاجل", "Breaking")}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSelect(article)}
          className="group flex min-w-0 flex-1 items-center gap-3 px-4 py-2.5 text-start transition-colors hover:bg-white/5 md:px-6"
        >
          <span className="hidden shrink-0 text-[10px] uppercase tracking-wider text-[#C9A962] sm:inline">
            {lang === "ar" ? category.nameAr : category.nameEn}
          </span>
          <span className="h-3 w-px shrink-0 bg-white/20 sm:block" aria-hidden />
          <span className="truncate text-sm font-medium text-white/95 transition-colors group-hover:text-[#C9A962] md:text-[15px]">
            {title}
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-1 border-s border-white/10 px-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center rounded-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={t("السابق", "Previous")}
          >
            {isRtl ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
          <span className="min-w-[2.5rem] text-center text-[10px] tabular-nums text-white/50">
            {index + 1}/{articles.length}
          </span>
          <button
            type="button"
            onClick={next}
            className="flex h-8 w-8 items-center justify-center rounded-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
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

      <div className="flex gap-0.5 px-4 pb-2 md:px-6">
        {articles.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "h-0.5 flex-1 rounded-full transition-all",
              i === index ? "bg-[#C9A962]" : "bg-white/20",
            )}
            aria-label={t(`خبر ${i + 1}`, `News ${i + 1}`)}
          />
        ))}
      </div>
    </div>
  );
}
