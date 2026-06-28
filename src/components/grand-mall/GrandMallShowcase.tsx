import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_SHOWCASE } from "@/data/grand-mall-content";

export function GrandMallShowcase() {
  const { t } = useLang();

  return (
    <section className="gm-section gm-section--darker">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("نظرة شاملة", "Overview")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("وجهة متكاملة", "All-in-One Destination")}
          </h2>
        </div>

        <div className="gm-showcase-frame mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#C9A962]/20">
          <img
            src={GRAND_MALL_SHOWCASE}
            alt={t("الشبيلي جراند مول", "AlShubaily Grand Mall")}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
