import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, Mail } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_LOGO } from "@/data/grand-mall-content";

export function GrandMallCTA() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-[#12100E] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,98,0.15),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <img
          src={GRAND_MALL_LOGO}
          alt=""
          className="mx-auto mb-8 h-auto w-[min(50vw,220px)] opacity-90"
        />
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          {t("اكتشف جراند مول", "Discover Grand Mall")}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-[#C9A962]/50 hover:text-[#C9A962]"
          >
            <ArrowUpLeft className="h-4 w-4" />
            {t("كل المشاريع", "All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
