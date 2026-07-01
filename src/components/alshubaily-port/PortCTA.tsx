import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, Mail } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_CTA_BG } from "@/data/port-content";

export function PortCTA() {
  const { t } = useLang();

  return (
    <section className="port-section port-section--last relative min-h-[420px] overflow-hidden md:min-h-[480px]">
      <img
        src={PORT_CTA_BG}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624]/95 via-[#0B1624]/75 to-[#0B1624]/55" />

      <div className="relative mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-6 text-center md:min-h-[480px] md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4ECDC4]">
          {t("الشبيلي بورت", "AlShubaily Port")}
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
          {t("استثمر في المستقبل", "Invest in the Future")}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
          {t(
            "وجهة واجهة بحرية فاخرة في قلب الخبر — تواصل معنا لمعرفة فرص الاستثمار والتملك.",
            "A premium waterfront destination in the heart of Khobar — contact us for investment and ownership opportunities.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4] px-6 py-3 text-sm font-semibold text-[#0B1624] transition hover:bg-[#6DD9D2]"
          >
            <Mail className="h-4 w-4" />
            {t("تواصل معنا", "Contact Us")}
          </Link>
          <Link
            to="/"
            hash="map"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#0B1624]/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#4ECDC4]/50 hover:text-[#4ECDC4]"
          >
            <ArrowUpLeft className="h-4 w-4" />
            {t("كل المشاريع", "All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
