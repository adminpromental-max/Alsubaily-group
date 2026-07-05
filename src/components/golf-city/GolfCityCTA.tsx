import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { GOLF_CITY_CTA } from "@/data/golf-city-content";

export function GolfCityCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${GOLF_CITY_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3324]/95 via-[#2D5A3D]/75 to-[#1A3324]/40" />

      <div className="relative mx-auto flex min-h-[60vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#C9A962]/25 bg-[#1A3324]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("قريباً", "Coming Soon")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(GOLF_CITY_CTA.titleAr, GOLF_CITY_CTA.titleEn)}
          </h2>
          <p className="mt-3 text-sm font-medium leading-8 text-[#E8D5A3]">
            {t(GOLF_CITY_CTA.subtitleAr, GOLF_CITY_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#2D5A3D]/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2D5A3D]/60"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
