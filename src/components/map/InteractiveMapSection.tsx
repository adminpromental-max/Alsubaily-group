import { InteractiveMap } from "./InteractiveMap";
import { useLang } from "@/contexts/lang-context";

export function InteractiveMapSection() {
  const { t } = useLang();

  return (
    <section id="map" className="relative bg-[#F5EEE2] pt-16 md:pt-24 pb-0">
      <div className="mx-auto mb-10 max-w-4xl px-4 text-center md:mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8A6A2E]">
          {t("خريطة المشاريع", "Projects Map")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl">
          {t("مشاريع الشبيلي", "AlShubaily Projects")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1A1612]/60 md:text-base">
          {t(
            "اضغطي على أي نقطة مضيئة لاستكشاف المشروع وتفاصيله.",
            "Tap any glowing point to explore the project and its details.",
          )}
        </p>
      </div>

      <InteractiveMap />
    </section>
  );
}
