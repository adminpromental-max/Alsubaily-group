import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Calendar,
  ImageIcon,
  Layers,
  Newspaper,
  Play,
  Radio,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { MediaArticleModal } from "@/components/media/MediaArticleModal";
import {
  MEDIA_ARTICLES,
  MEDIA_CATEGORIES,
  MEDIA_HERO_BANNER,
  type MediaArticle,
  type MediaArticleLayout,
  type MediaCategoryId,
} from "@/data/media-articles";
import { cn } from "@/lib/utils";

type FilterId = "all" | MediaCategoryId;

const CATEGORY_ICONS = {
  "company-news": Newspaper,
  "project-updates": TrendingUp,
  "media-coverage": Radio,
  events: Sparkles,
} as const;

function formatArticleDate(date: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function LayoutIcon({ layout }: { layout: MediaArticleLayout }) {
  const Icon =
    layout === "image-video" ? Layers : layout === "video-cover" ? Play : ImageIcon;
  return <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />;
}

function CardCover({ article }: { article: MediaArticle }) {
  if (article.layout === "video-cover" && article.videoUrl) {
    return (
      <video
        src={article.videoUrl}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster={article.image}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  if (article.image) {
    return (
      <img
        src={article.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-[#1A1612] via-[#2A2218] to-[#1A1612]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A962]/40 bg-[#C9A962]/15 text-[#C9A962]">
        <Play className="h-7 w-7 fill-current" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function ArticleCard({
  article,
  featured,
  onOpen,
}: {
  article: MediaArticle;
  featured?: boolean;
  onOpen: (article: MediaArticle) => void;
}) {
  const { t, lang } = useLang();
  const category = MEDIA_CATEGORIES.find((c) => c.id === article.category);
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const excerpt = lang === "ar" ? article.excerptAr : article.excerptEn;

  return (
    <article
      data-media-card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8E0D4]/80 bg-white shadow-[0_8px_40px_rgba(26,22,18,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962]/40 hover:shadow-[0_20px_60px_rgba(26,22,18,0.12)]",
        featured && "md:col-span-2 md:grid md:grid-cols-2 md:gap-0",
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(article)}
        className="flex h-full flex-col text-start"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-[#1A1612]",
            featured ? "min-h-[240px] md:min-h-full" : "aspect-[16/10]",
          )}
        >
          <CardCover article={article} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/80 via-[#0C0A08]/10 to-transparent" />

          {article.layout === "video-cover" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm">
                <Play className="h-6 w-6 fill-current" strokeWidth={1.5} />
              </div>
            </div>
          )}

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full bg-[#C9A962] px-3 py-1 text-[10px] font-semibold text-[#1A1612]">
              {category
                ? lang === "ar"
                  ? category.nameAr
                  : category.nameEn
                : ""}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm">
              <LayoutIcon layout={article.layout} />
            </span>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-5 md:p-6",
            featured && "md:justify-center",
          )}
        >
          <div className="mb-3 flex items-center gap-2 text-[11px] text-[#9A7B3A]">
            <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
            {formatArticleDate(article.date, lang)}
          </div>
          <h3
            className={cn(
              "font-heading font-semibold leading-snug text-[#1A1612] transition-colors group-hover:text-[#8A6A2E]",
              featured ? "text-xl md:text-2xl" : "text-lg",
            )}
          >
            {title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#5C5348]">
            {excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A962]">
            {t("اقرأ المزيد", "Read more")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-180" />
          </span>
        </div>
      </button>
    </article>
  );
}

export function MediaCenterPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<FilterId>("all");
  const [activeArticle, setActiveArticle] = useState<MediaArticle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? MEDIA_ARTICLES
        : MEDIA_ARTICLES.filter((a) => a.category === filter);
    return [...list].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [filter]);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    gsap.fromTo(
      hero.querySelectorAll("[data-media-hero]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.15,
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
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.07,
      },
    );
  }, [filter]);

  const openArticle = (article: MediaArticle) => {
    setActiveArticle(article);
    setModalOpen(true);
  };

  return (
    <>
      <section
        ref={heroRef}
        className="media-hero-banner relative min-h-[340px] overflow-hidden px-6 pt-32 pb-14 md:min-h-[420px] md:px-8 md:pb-20"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${MEDIA_HERO_BANNER}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1612]/55 via-[#1A1612]/70 to-[#FAF8F4]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(201,169,98,0.18),transparent_65%)]"
        />

        <div className="relative mx-auto max-w-7xl">
          <p
            data-media-hero
            className="text-[11px] uppercase tracking-[0.42em] text-[#C9A962]"
          >
            {t("المركز الإعلامي", "Media Center")}
          </p>
          <h1
            data-media-hero
            className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {t("آخر الأخبار والتغطيات", "Latest News & Coverage")}
          </h1>
          <p
            data-media-hero
            className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base"
          >
            {t(
              "تابع أخبار مجموعة الشبيلي، تطورات المشاريع، التغطيات الإعلامية، والفعاليات — في مكان واحد.",
              "Follow AlShubaily Group news, project updates, media coverage, and events — all in one place.",
            )}
          </p>

          <div
            data-media-hero
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {MEDIA_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id];
              const count = MEDIA_ARTICLES.filter(
                (a) => a.category === cat.id,
              ).length;
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A962]/35 bg-[#C9A962]/15 text-[#C9A962]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <p className="font-heading text-sm font-semibold text-white">
                    {lang === "ar" ? cat.nameAr : cat.nameEn}
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    {count} {t("مقال", "articles")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-b border-[#E8E0D4]/80 bg-[#FAF8F4]/95 px-6 py-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium transition-all md:text-sm",
              filter === "all"
                ? "bg-[#1A1612] text-[#C9A962]"
                : "border border-[#E8E0D4] bg-white text-[#5C5348] hover:border-[#C9A962]/40",
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
                "rounded-full px-4 py-2 text-xs font-medium transition-all md:text-sm",
                filter === cat.id
                  ? "bg-[#1A1612] text-[#C9A962]"
                  : "border border-[#E8E0D4] bg-white text-[#5C5348] hover:border-[#C9A962]/40",
              )}
            >
              {lang === "ar" ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF8F4] px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-[#5C5348]">
              {t(
                "لا توجد مقالات في هذا القسم حالياً.",
                "No articles in this section yet.",
              )}
            </p>
          ) : (
            <div
              ref={gridRef}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {featured && (
                <ArticleCard
                  article={featured}
                  featured
                  onOpen={openArticle}
                />
              )}
              {rest.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onOpen={openArticle}
                />
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
    </>
  );
}
