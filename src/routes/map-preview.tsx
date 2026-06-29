import { createFileRoute } from "@tanstack/react-router";
import { InteractiveMapPreviewSection } from "@/components/map/InteractiveMapPreviewSection";
import { MAP_V2_SRC } from "@/data/map-v2-coordinates";

export const Route = createFileRoute("/map-preview")({
  head: () => ({
    meta: [
      {
        title: "معاينة الخريطة | AlShubaily Map Preview",
      },
      {
        name: "description",
        content:
          "معاينة الخريطة التفاعلية الجديدة — pins بأسماء المشاريع، فلترة بالمناطق، وعرض كامل.",
      },
      { property: "og:image", content: MAP_V2_SRC },
    ],
  }),
  component: MapPreviewPage,
});

function MapPreviewPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <InteractiveMapPreviewSection />
    </main>
  );
}
