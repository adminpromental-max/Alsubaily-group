import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HIGH_RISE_2,
  HIGH_RISE_2_HERO_IMAGE,
} from "@/data/high-rise-2-content";

export function HighRise2ComingSoon() {
  const { t } = useLang();

  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#1A1410]">
      <div className="absolute inset-0">
        <img
          src={HIGH_RISE_2_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410]/60 via-[#2A1E16]/50 to-[#1A1410]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(74,59,107,0.18),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10 md:px-8">
        <Link to="/" hash="map" className="olympic-back-link">
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
          <div>
            <p className="mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
              <MapPin className="h-3.5 w-3.5" />
              {t(HIGH_RISE_2.regionAr, HIGH_RISE_2.regionEn)}
            </p>

            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              {t(HIGH_RISE_2.titleAr, HIGH_RISE_2.titleEn)}
            </h1>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-[#C9A962]/30 bg-[#1A1410]/70 px-8 py-10 backdrop-blur-md md:px-12 md:py-11">
            <p className="font-heading text-2xl font-bold leading-snug text-[#C9A962] md:text-3xl">
              {t(HIGH_RISE_2.headlineAr, HIGH_RISE_2.headlineEn)}
            </p>
            <p className="mt-3 text-sm text-white/55 md:text-base">
              {t(HIGH_RISE_2.sublineAr, HIGH_RISE_2.sublineEn)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
