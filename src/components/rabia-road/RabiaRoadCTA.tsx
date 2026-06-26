import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_CTA } from "@/data/rabia-road-content";

export function RabiaRoadCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[65vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${RABIA_ROAD_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/95 via-[#6B1D3A]/60 to-[#1A0F0A]/50" />

      <div className="relative mx-auto flex min-h-[65vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#C4A574]/25 bg-[#1A0F0A]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C4A574]">
            {t("ابدأ استثمارك", "Start Investing")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(RABIA_ROAD_CTA.titleAr, RABIA_ROAD_CTA.titleEn)}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-white/75">
            {t(RABIA_ROAD_CTA.subtitleAr, RABIA_ROAD_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C4A574]/50 bg-[#6B1D3A]/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#6B1D3A]/60"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
