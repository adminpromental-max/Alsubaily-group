import { createFileRoute } from "@tanstack/react-router";
import { TidaraAlternatingSections } from "@/components/tidara/TidaraAlternatingSections";
import { TidaraBanner } from "@/components/tidara/TidaraBanner";
import { TidaraCircleGallery } from "@/components/tidara/TidaraCircleGallery";
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
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <TidaraHero />
      <TidaraIntro />
      <TidaraAlternatingSections />
      <TidaraBanner />
      <TidaraCircleGallery />
    </main>
  );
}
