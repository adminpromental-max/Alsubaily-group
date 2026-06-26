import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_CTA } from "@/data/new-beach-content";

export function NewBeachCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[65vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${NEW_BEACH_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/95 via-[#0a2540]/70 to-[#0a2540]/45" />

      <div className="relative mx-auto flex min-h-[65vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#E8C99A]/25 bg-[#0a2540]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#E8C99A]">
            {t("ابدأ استثمارك", "Start Investing")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(NEW_BEACH_CTA.titleAr, NEW_BEACH_CTA.titleEn)}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-white/75">
            {t(NEW_BEACH_CTA.subtitleAr, NEW_BEACH_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#E8C99A]/50 bg-[#2E6B8A]/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2E6B8A]/50"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
