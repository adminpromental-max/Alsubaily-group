import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_CTA } from "@/data/al-zahraa-content";

export function ZahraaCTA() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${ZAHRAA_CTA.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2a3a]/95 via-[#1A2E38]/75 to-[#1A2E38]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_80%,rgba(30,107,138,0.25),transparent)]" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-lg items-center px-6 py-20 md:px-8">
        <div className="w-full rounded-3xl border border-[#7EC8E3]/25 bg-[#1A2E38]/55 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7EC8E3]">
            {t("دعوة للاستثمار", "Investment Invitation")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(ZAHRAA_CTA.titleAr, ZAHRAA_CTA.titleEn)}
          </h2>
          <p className="mt-3 text-sm font-medium leading-8 text-[#A8DCE8]">
            {t(ZAHRAA_CTA.subtitleAr, ZAHRAA_CTA.subtitleEn)}
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
            {t(ZAHRAA_CTA.bodyAr, ZAHRAA_CTA.bodyEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#7EC8E3]/50 bg-[#1E6B8A]/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1E6B8A]/50"
          >
            {t("استثمر في الزهراء", "Invest in Al-Zahraa")}
          </Link>
        </div>
      </div>
    </section>
  );
}
