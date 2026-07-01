import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, Mail } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_CTA_BG } from "@/data/port-content";

export function PortCTA() {
  const { t } = useLang();

  return (
    <section className="port-section port-section--last relative min-h-[400px] overflow-hidden md:min-h-[460px]">
      <img
        src={PORT_CTA_BG}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A6E]/88 via-[#2E8FA8]/45 to-[#EAF4F9]/30" />

      <div className="relative mx-auto flex min-h-[400px] max-w-3xl flex-col items-center justify-center px-6 text-center md:min-h-[460px] md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8E8F0]">
          {t("الشبيلي بورت", "AlShubaily Port")}
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
          {t("استثمر في المستقبل", "Invest in the Future")}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
          {t(
            "وجهة واجهة بحرية فاخرة في قلب الخبر — تواصل معنا لمعرفة فرص الاستثمار والتملك.",
            "A premium waterfront destination in the heart of Khobar — contact us for investment and ownership opportunities.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4A6E] transition hover:bg-[#EAF4F9]"
          >
            <Mail className="h-4 w-4" />
            {t("تواصل معنا", "Contact Us")}
          </Link>
          <Link
            to="/"
            hash="map"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <ArrowUpLeft className="h-4 w-4" />
            {t("كل المشاريع", "All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
