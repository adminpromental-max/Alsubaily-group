import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  RIYADH_BOULEVARD,
  RIYADH_BOULEVARD_HERO_IMAGE,
} from "@/data/riyadh-boulevard-content";

export function RiyadhBoulevardComingSoon() {
  const { t } = useLang();

  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#1A1410]">
      <div className="absolute inset-0">
        <img
          src={RIYADH_BOULEVARD_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410]/60 via-[#2A1E16]/50 to-[#1A1410]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(212,133,74,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10 md:px-8">
        <Link to="/" hash="map" className="olympic-back-link">
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-[#F5D4B8]">
            <MapPin className="h-3.5 w-3.5" />
            {t("الرياض", "Riyadh")}
          </p>

          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            {t(RIYADH_BOULEVARD.titleAr, RIYADH_BOULEVARD.titleEn)}
          </h1>

          <div className="mt-10 rounded-3xl border border-[#D4854A]/30 bg-[#1A1410]/50 px-8 py-10 backdrop-blur-md md:px-14 md:py-12">
            <p className="font-heading text-3xl font-bold text-[#F5D4B8] md:text-4xl">
              {t(RIYADH_BOULEVARD.headlineAr, RIYADH_BOULEVARD.headlineEn)}
            </p>
            <p className="mt-4 text-sm text-white/60 md:text-base">
              {t(RIYADH_BOULEVARD.sublineAr, RIYADH_BOULEVARD.sublineEn)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
