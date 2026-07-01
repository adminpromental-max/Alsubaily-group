import { Calendar, ImageIcon, Layers, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLang } from "@/contexts/lang-context";
import {
  getCategoryById,
  type MediaArticle,
  type MediaArticleLayout,
} from "@/data/media-articles";
import { cn } from "@/lib/utils";

type MediaArticleModalProps = {
  article: MediaArticle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function formatArticleDate(date: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function MediaTypeBadge({ layout }: { layout: MediaArticleLayout }) {
  const { t } = useLang();
  const Icon =
    layout === "image-video" ? Layers : layout === "video-cover" ? Play : ImageIcon;
  const label =
    layout === "image-video"
      ? t("صورة + فيديو", "Photo + Video")
      : layout === "video-cover"
        ? t("فيديو", "Video")
        : t("صورة", "Photo");

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A962]/35 bg-[#C9A962]/10 px-3 py-1 text-[11px] font-medium text-[#9A7B3A]">
      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      {label}
    </span>
  );
}

function ArticleVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  return (
    <video
      src={src}
      controls
      playsInline
      preload="metadata"
      poster={poster}
      className={cn("w-full bg-black object-cover", className)}
    />
  );
}

export function MediaArticleModal({
  article,
  open,
  onOpenChange,
}: MediaArticleModalProps) {
  const { t, lang } = useLang();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {article && (
        <DialogContent
          className={cn(
            "flex max-h-[min(92svh,880px)] w-[calc(100%-1.5rem)] max-w-3xl flex-col gap-0 overflow-hidden border-[#E8E0D4] bg-[#FAF8F4] p-0 sm:rounded-3xl",
            "[&>button]:end-4 [&>button]:start-auto [&>button]:top-4 [&>button]:z-20 [&>button]:rounded-full [&>button]:border [&>button]:border-[#E8E0D4] [&>button]:bg-white/95 [&>button]:p-2 [&>button]:shadow-sm",
          )}
        >
          <DialogTitle className="sr-only">
            {lang === "ar" ? article.titleAr : article.titleEn}
          </DialogTitle>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            {article.layout === "video-cover" && article.videoUrl ? (
              <div className="relative w-full overflow-hidden bg-[#1A1612]">
                <ArticleVideo
                  src={article.videoUrl}
                  poster={article.image}
                  className="aspect-video max-h-[50svh]"
                />
              </div>
            ) : article.image ? (
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[#1A1612]">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0A08]/50 via-transparent to-transparent" />
              </div>
            ) : null}

            <div className="space-y-5 px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#1A1612] px-3 py-1 text-[11px] font-medium text-[#C9A962]">
                  {lang === "ar"
                    ? getCategoryById(article.category).nameAr
                    : getCategoryById(article.category).nameEn}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#5C5348]">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {formatArticleDate(article.date, lang)}
                </span>
                <MediaTypeBadge layout={article.layout} />
              </div>

              <h2 className="font-heading text-2xl font-semibold leading-snug text-[#1A1612] md:text-3xl">
                {lang === "ar" ? article.titleAr : article.titleEn}
              </h2>

              <div className="space-y-4 border-s-2 border-[#C9A962]/40 ps-5">
                {(lang === "ar"
                  ? article.bodyParagraphsAr
                  : article.bodyParagraphsEn
                ).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-[1.85] text-[#1A1612]/85 md:text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {article.layout === "image-video" && article.videoUrl && (
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9A7B3A]">
                    {t("شاهد الفيديو", "Watch the video")}
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-[#E8E0D4] bg-[#1A1612] shadow-lg">
                    <ArticleVideo
                      src={article.videoUrl}
                      poster={article.image}
                      className="aspect-video"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
