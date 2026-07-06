import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { MediaSourceIcon } from "@/components/media/MediaSourceIcon";
import type { MediaExternalSource } from "@/data/media-articles";
import { cn } from "@/lib/utils";

type MediaArticleSourcesProps = {
  sources: MediaExternalSource[];
};

const PLATFORM_STYLES: Record<
  MediaExternalSource["id"],
  { active: string; inactive: string }
> = {
  alriyadh: {
    active: "border-[#006633]/25 bg-[#006633]/8 hover:border-[#006633]/45 hover:bg-[#006633]/14",
    inactive: "border-[#006633]/15 bg-[#006633]/5 opacity-50",
  },
  sabq: {
    active: "border-[#1A4B8C]/25 bg-[#1A4B8C]/8 hover:border-[#1A4B8C]/45 hover:bg-[#1A4B8C]/14",
    inactive: "border-[#1A4B8C]/15 bg-[#1A4B8C]/5 opacity-50",
  },
  ajel: {
    active: "border-[#C41E3A]/25 bg-[#C41E3A]/8 hover:border-[#C41E3A]/45 hover:bg-[#C41E3A]/14",
    inactive: "border-[#C41E3A]/15 bg-[#C41E3A]/5 opacity-50",
  },
  x: {
    active: "border-[#1A1612]/20 bg-[#1A1612]/6 hover:border-[#1A1612]/35 hover:bg-[#1A1612]/10",
    inactive: "border-[#1A1612]/12 bg-[#1A1612]/4 opacity-50",
  },
  snapchat: {
    active: "border-[#D4C800]/35 bg-[#FFFC00]/15 hover:border-[#D4C800]/55 hover:bg-[#FFFC00]/25",
    inactive: "border-[#D4C800]/20 bg-[#FFFC00]/8 opacity-50",
  },
  youtube: {
    active: "border-[#FF0000]/25 bg-[#FF0000]/8 hover:border-[#FF0000]/45 hover:bg-[#FF0000]/14",
    inactive: "border-[#FF0000]/15 bg-[#FF0000]/5 opacity-50",
  },
  instagram: {
    active: "border-[#D62976]/25 bg-[#D62976]/8 hover:border-[#D62976]/45 hover:bg-[#D62976]/14",
    inactive: "border-[#D62976]/15 bg-[#D62976]/5 opacity-50",
  },
};

function SourceButton({
  source,
  url,
  index,
  total,
}: {
  source: MediaExternalSource;
  url?: string;
  index?: number;
  total?: number;
}) {
  const { lang, t } = useLang();
  const label = lang === "ar" ? source.labelAr : source.labelEn;
  const hasUrl = Boolean(url);
  const styles = PLATFORM_STYLES[source.id];
  const showIndex = total !== undefined && total > 1 && index !== undefined;

  const content = (
    <>
      <MediaSourceIcon platform={source.id} />
      <span className="text-[11px] font-medium leading-none text-[#1A1612]/80">
        {label}
        {showIndex && (
          <span className="ms-0.5 text-[10px] text-[#9A7B3A]">
            {index! + 1}
          </span>
        )}
      </span>
      {hasUrl && (
        <ExternalLink
          className="h-3 w-3 text-[#9A7B3A]/70"
          strokeWidth={1.5}
          aria-hidden
        />
      )}
    </>
  );

  const className = cn(
    "inline-flex items-center gap-2 rounded-full border px-3 py-2 transition-colors",
    hasUrl ? styles.active : cn(styles.inactive, "cursor-default"),
  );

  if (!hasUrl) {
    return (
      <span
        className={className}
        title={t("الرابط غير متوفر بعد", "Link not available yet")}
        aria-label={`${label} — ${t("الرابط غير متوفر بعد", "Link not available yet")}`}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${label}${showIndex ? ` ${index! + 1}` : ""}`}
    >
      {content}
    </a>
  );
}

function MultiUrlSource({ source }: { source: MediaExternalSource }) {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const styles = PLATFORM_STYLES[source.id];
  const label = lang === "ar" ? source.labelAr : source.labelEn;

  if (source.urls.length === 1) {
    return <SourceButton source={source} url={source.urls[0]} />;
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-2 transition-colors",
          styles.active,
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <MediaSourceIcon platform={source.id} />
        <span className="text-[11px] font-medium leading-none text-[#1A1612]/80">
          {label}
        </span>
        <span className="rounded-full bg-[#C9A962]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#9A7B3A]">
          {source.urls.length}
        </span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute start-0 top-full z-10 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-[#E8E0D4] bg-white py-1 shadow-lg"
        >
          {source.urls.map((url, i) => (
            <li key={url} role="none">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#1A1612] transition-colors hover:bg-[#F2EDE4]"
                onClick={() => setOpen(false)}
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#9A7B3A]" strokeWidth={1.5} />
                {t(`رابط ${i + 1}`, `Link ${i + 1}`)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function MediaArticleSources({ sources }: MediaArticleSourcesProps) {
  const { t } = useLang();

  if (!sources.length) return null;

  return (
    <div className="space-y-3 border-t border-[#E8E0D4] pt-6">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9A7B3A]">
        {t("التغطية في وسائل الإعلام", "Media coverage")}
      </p>
      <div className="flex flex-wrap gap-2">
        {sources.map((source) =>
          source.urls.length > 1 ? (
            <MultiUrlSource key={source.id} source={source} />
          ) : (
            <SourceButton
              key={source.id}
              source={source}
              url={source.urls[0]}
            />
          ),
        )}
      </div>
    </div>
  );
}
