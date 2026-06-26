import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { SULTANAT_CTA } from "@/data/sultanat-content";

export function SultanatCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[70vh] overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${SULTANAT_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1209]/95 via-[#1a1209]/70 to-[#1a1209]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_80%,rgba(196,92,62,0.2),transparent)]" />

      <div className="relative mx-auto max-w-lg px-6 md:px-8">
        <div className="rounded-3xl border border-[#C9A962]/25 bg-[#2C1810]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("دعوة للاستثمار", "Investment Invitation")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#E8D5C4] md:text-4xl">
            {t(SULTANAT_CTA.titleAr, SULTANAT_CTA.titleEn)}
          </h2>
          <p className="mt-3 text-sm font-medium leading-8 text-[#C45C3E]">
            {t(SULTANAT_CTA.subtitleAr, SULTANAT_CTA.subtitleEn)}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-8 text-[#E8D5C4]/75">
            {t(SULTANAT_CTA.bodyAr, SULTANAT_CTA.bodyEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#C9A962]/15 px-8 py-3.5 text-sm font-semibold text-[#E8D5C4] transition hover:bg-[#C9A962]/30"
          >
            {t("احجز أرضك أو استفسر", "Reserve Land or Inquire")}
          </Link>
        </div>
      </div>
    </section>
  );
}
