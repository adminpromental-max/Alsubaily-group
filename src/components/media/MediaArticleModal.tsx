import { Calendar, ImageIcon, Layers, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLang } from "@/contexts/lang-context";
import {
  getArticleMediaType,
  getCategoryById,
  type MediaArticle,
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

function MediaTypeBadge({ article }: { article: MediaArticle }) {
  const { t } = useLang();
  const type = getArticleMediaType(article);
  const Icon =
    type === "image-video" ? Layers : type === "video" ? Play : ImageIcon;
  const label =
    type === "image-video"
      ? t("صورة + فيديو", "Photo + Video")
      : type === "video"
        ? t("فيديو", "Video")
        : t("صورة", "Photo");

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A962]/35 bg-[#C9A962]/10 px-3 py-1 text-[11px] font-medium text-[#9A7B3A]">
      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      {label}
    </span>
  );
}

export function MediaArticleModal({
  article,
  open,
  onOpenChange,
}: MediaArticleModalProps) {
  const { t, lang } = useLang();
  if (!article) return null;

  const category = getCategoryById(article.category);
  const title = lang === "ar" ? article.titleAr : article.titleEn;
  const body = lang === "ar" ? article.bodyAr : article.bodyEn;
  const mediaType = getArticleMediaType(article);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-h-[92svh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto border-[#E8E0D4] bg-[#FAF8F4] p-0 sm:rounded-3xl",
          "[&>button]:end-4 [&>button]:start-auto [&>button]:top-4 [&>button]:rounded-full [&>button]:border [&>button]:border-[#E8E0D4] [&>button]:bg-white/90 [&>button]:p-2",
        )}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {article.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:rounded-t-3xl">
            <img
              src={article.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/70 via-transparent to-transparent" />
            {mediaType === "image-video" && (
              <div className="absolute bottom-4 start-4">
                <MediaTypeBadge article={article} />
              </div>
            )}
          </div>
        )}

        <div className="space-y-5 px-6 pb-8 pt-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#1A1612] px-3 py-1 text-[11px] font-medium text-[#C9A962]">
              {lang === "ar" ? category.nameAr : category.nameEn}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#5C5348]">
              <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
              {formatArticleDate(article.date, lang)}
            </span>
            {!article.image && <MediaTypeBadge article={article} />}
          </div>

          <h2 className="font-heading text-2xl font-semibold leading-snug text-[#1A1612] md:text-3xl">
            {title}
          </h2>

          <p className="text-base leading-relaxed text-[#5C5348] md:text-lg">
            {body}
          </p>

          {article.videoUrl && (
            <div className="overflow-hidden rounded-2xl border border-[#E8E0D4] bg-[#1A1612] shadow-lg">
              <video
                src={article.videoUrl}
                controls
                playsInline
                preload="metadata"
                poster={article.image}
                className="aspect-video w-full bg-black object-cover"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
