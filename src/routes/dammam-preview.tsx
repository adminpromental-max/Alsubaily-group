import { createFileRoute } from "@tanstack/react-router";
import { DammamSplitScreen } from "@/components/dammam/DammamSplitScreen";
import { dammamAsset } from "@/data/asset-paths";

export const Route = createFileRoute("/dammam-preview")({
  head: () => ({
    meta: [
      { title: "مدينة الدمام الأولمبية — معاينة تفاعلية | AlShubaily" },
      {
        name: "description",
        content:
          "جولة تفاعلية داخل مشروع مدينة الدمام الأولمبية — تجربة split-screen ومعرض دائري.",
      },
      {
        property: "og:title",
        content: "Dammam Olympic City — Interactive Preview",
      },
      {
        property: "og:image",
        content: dammamAsset("Hero.png"),
      },
    ],
  }),
  component: DammamPreviewPage,
});

function DammamPreviewPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <DammamSplitScreen />
    </main>
  );
}
