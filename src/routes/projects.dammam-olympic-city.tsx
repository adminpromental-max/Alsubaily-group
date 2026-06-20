import { createFileRoute } from "@tanstack/react-router";
import { DammamOlympicPage } from "@/components/dammam/DammamOlympicPage";
import { dammamAsset } from "@/data/asset-paths";

export const Route = createFileRoute("/projects/dammam-olympic-city")({
  head: () => ({
    meta: [
      { title: "مدينة الدمام الأولمبية — مجموعة الشبيلي | Dammam Olympic City" },
      {
        name: "description",
        content:
          "مدينة الدمام الأولمبية — مدينة رياضية وصحية عالمية المستوى في قلب الدمام. +45,000 مقعد · +30 منشأة رياضية · 2.4M m².",
      },
      {
        property: "og:title",
        content: "Dammam Olympic City — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A world-class sports and wellness city in the heart of Dammam — Vision 2030 destination in the Eastern Region.",
      },
      {
        property: "og:image",
        content: dammamAsset("City-landscape.png"),
      },
    ],
  }),
  component: DammamOlympicCityPage,
});

function DammamOlympicCityPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <DammamOlympicPage />
    </main>
  );
}
