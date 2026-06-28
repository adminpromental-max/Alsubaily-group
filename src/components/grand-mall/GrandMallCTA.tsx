import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, Mail } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_CTA_BG } from "@/data/grand-mall-content";

export function GrandMallCTA() {
  const { t } = useLang();

  return (
    <section className="gm-section gm-section--last relative min-h-[420px] overflow-hidden md:min-h-[480px]">
      <img
        src={GRAND_MALL_CTA_BG}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/95 via-[#0A0908]/75 to-[#0A0908]/55" />

      <div className="relative mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-6 text-center md:min-h-[480px] md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
          {t("جراند مول", "Grand Mall")}
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
          {t("ابدأ رحلتك", "Start Your Journey")}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
          {t(
            "وجهة متكاملة للتسوق والترفيه في المنطقة الشرقية — تواصل معنا لمعرفة فرص الاستثمار والتأجير.",
            "An integrated shopping and entertainment destination in the Eastern Region — contact us for investment and leasing opportunities.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A962] px-6 py-3 text-sm font-semibold text-[#1A1612] transition hover:bg-[#D4BA7A]"
          >
            <Mail className="h-4 w-4" />
            {t("تواصل معنا", "Contact Us")}
          </Link>
          <Link
            to="/"
            hash="map"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962]"
          >
            <ArrowUpLeft className="h-4 w-4" />
            {t("كل المشاريع", "All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
