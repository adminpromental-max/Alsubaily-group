import type { MediaExternalSourceId } from "@/data/media-articles";
import { cn } from "@/lib/utils";

type MediaSourceIconProps = {
  platform: MediaExternalSourceId;
  className?: string;
};

export function MediaSourceIcon({ platform, className }: MediaSourceIconProps) {
  const base = cn("h-5 w-5", className);

  switch (platform) {
    case "alriyadh":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#006633" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            الرياض
          </text>
        </svg>
      );
    case "sabq":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#1A4B8C" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            سبق
          </text>
        </svg>
      );
    case "ajel":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#C41E3A" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            عاجل
          </text>
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#FFFC00" />
          <path
            fill="#000"
            d="M12 5.5c1.8 0 3.2 1.1 3.6 2.8-.9.2-1.7.6-2.4 1.1.3-.9.9-1.5 1.8-1.7-.5 1.1-1.5 1.9-2.7 2.1.1.4.2.8.2 1.2 0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5c0-.4.1-.8.2-1.2-1.2-.2-2.2-1-2.7-2.1.9.2 1.5.8 1.8 1.7-.7-.5-1.5-.9-2.4-1.1.4-1.7 1.8-2.8 3.6-2.8zm-1.5 7.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#FF0000" />
          <path fill="white" d="M10 8.5v7l6-3.5-6-3.5z" />
        </svg>
      );
  }
}
