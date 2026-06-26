import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { HIGH_RISE_CTA, HIGH_RISE_HERO_IMAGE } from "@/data/high-rise-content";

export function HighRiseCTA() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-[#06080c] py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('${HIGH_RISE_HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#06080c]/82" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(74,120,180,0.15),transparent)]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7eb8e8]">
          {t("خطوتك القادمة", "Your Next Step")}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
          {t(HIGH_RISE_CTA.titleAr, HIGH_RISE_CTA.titleEn)}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-white/70 md:text-base">
          {t(HIGH_RISE_CTA.subtitleAr, HIGH_RISE_CTA.subtitleEn)}
        </p>
        <Link
          to="/"
          hash="contact"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#7eb8e8]/50 bg-[#7eb8e8]/15 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7eb8e8]/30"
        >
          {t("تواصل معنا", "Contact Us")}
        </Link>
      </div>
    </section>
  );
}
