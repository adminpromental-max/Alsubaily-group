import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { BEACH_HOUSE_CTA } from "@/data/beach-house-content";

export function BeachHouseCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${BEACH_HOUSE_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/95 via-[#2C2416]/70 to-[#2C2416]/45" />

      <div className="relative mx-auto flex min-h-[60vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#C9A962]/25 bg-[#2C2416]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("ابدأ رحلتك", "Start Your Journey")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(BEACH_HOUSE_CTA.titleAr, BEACH_HOUSE_CTA.titleEn)}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-white/75">
            {t(BEACH_HOUSE_CTA.subtitleAr, BEACH_HOUSE_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#C9A962]/15 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#C9A962]/30"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
