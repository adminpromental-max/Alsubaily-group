import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { TidaraAlternatingSections } from "@/components/tidara/TidaraAlternatingSections";
import { TidaraHero } from "@/components/tidara/TidaraHero";
import { TidaraIntro } from "@/components/tidara/TidaraIntro";
import { tidaraAsset } from "@/data/asset-paths";

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
      <TidaraIntro />
      <TidaraAlternatingSections />

      <section className="border-t border-[#E8E0D4] px-6 py-12 text-center md:px-8">
        <p className="text-sm text-[#5C5348]">
          {t(
            "الأقسام التالية (البانر، معرض الدوائر) — قيد التنفيذ.",
            "Upcoming sections (banner, circle gallery) — in progress.",
          )}
        </p>
      </section>
    </main>
  );
}
