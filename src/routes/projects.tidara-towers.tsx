import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { TidaraHero } from "@/components/tidara/TidaraHero";
import { tidaraAsset } from "@/data/asset-paths";
import { TIDARA_INTRO, TIDARA_PROGRAM } from "@/data/tidara-content";

export const Route = createFileRoute("/projects/tidara-towers")({
  head: () => ({
    meta: [
      { title: "أبراج تيدارا — مجموعة الشبيلي | Tidara Towers" },
      {
        name: "description",
        content:
          "أبراج تيدارا — بوابة ساحلية على مارينا الخبر. مشروع متعدد الاستخدامات: فندق، مكاتب، ووحدات سكنية.",
      },
      {
        property: "og:title",
        content: "Tidara Towers — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A living edge between city and sea — integrated waterfront destination in Al Khobar.",
      },
      {
        property: "og:image",
        content: tidaraAsset("Hero.png"),
      },
    ],
  }),
  component: TidaraTowersPage,
});

function TidaraTowersPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <TidaraHero />

      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm uppercase tracking-[0.35em] text-[#9A7B3A]">
            {t(TIDARA_INTRO.titleAr, TIDARA_INTRO.titleEn)}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5C5348] md:text-xl">
            {t(TIDARA_INTRO.bodyAr, TIDARA_INTRO.bodyEn)}
          </p>
          <p className="mt-4 text-sm text-[#9A7B3A]">
            {t(TIDARA_PROGRAM.locationAr, TIDARA_PROGRAM.locationEn)}
          </p>
        </div>
      </section>

      <section className="border-t border-[#E8E0D4] px-6 py-12 text-center md:px-8">
        <p className="text-sm text-[#5C5348]">
          {t(
            "الأقسام التالية (الصور المتناوبة، البانر، معرض الدوائر) — قيد التنفيذ.",
            "Upcoming sections (alternating images, banner, circle gallery) — in progress.",
          )}
        </p>
      </section>
    </main>
  );
}
