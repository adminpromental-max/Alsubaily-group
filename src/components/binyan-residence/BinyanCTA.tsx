import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { BINYAN_CTA } from "@/data/binyan-residence-content";

export function BinyanCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${BINYAN_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2430]/95 via-[#3D4F63]/75 to-[#1E2430]/40" />

      <div className="relative mx-auto flex min-h-[60vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#C4783A]/25 bg-[#1E2430]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#F0D4B8]">
            {t("قريباً", "Coming Soon")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(BINYAN_CTA.titleAr, BINYAN_CTA.titleEn)}
          </h2>
          <p className="mt-3 text-sm font-medium leading-8 text-[#F0D4B8]">
            {t(BINYAN_CTA.subtitleAr, BINYAN_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C4783A]/50 bg-[#C4783A]/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#C4783A]/50"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
