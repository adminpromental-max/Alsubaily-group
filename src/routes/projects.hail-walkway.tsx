import { createFileRoute } from "@tanstack/react-router";
import { HailWalkwayGallerySlider } from "@/components/hail-walkway/HailWalkwayGallerySlider";
import { HailWalkwayHero } from "@/components/hail-walkway/HailWalkwayHero";
import { HailWalkwayStats } from "@/components/hail-walkway/HailWalkwayStats";
import { HailWalkwayTypePanels } from "@/components/hail-walkway/HailWalkwayTypePanels";
import { HailWalkwayVideo } from "@/components/hail-walkway/HailWalkwayVideo";
import { HAIL_WALKWAY_HERO_IMAGE } from "@/data/hail-walkway-content";

export const Route = createFileRoute("/projects/hail-walkway")({
  head: () => ({
    meta: [
      {
        title: "حائل واك واي — مجموعة الشبيلي | Hail Walkway",
      },
      {
        name: "description",
        content:
          "حائل واك واي — وجهة سياحية وتجارية فاخرة بطول 2 كم وأكثر من 200 متجر في الشبيلي الشرقي، حائل. قلب حائل الجديد.",
      },
      {
        property: "og:title",
        content: "Hail Walkway — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A luxury tourism and commercial destination — 2 km long with 200+ stores in Eastern AlShubaily, Hail.",
      },
      {
        property: "og:image",
        content: HAIL_WALKWAY_HERO_IMAGE,
      },
    ],
  }),
  component: HailWalkwayPage,
});

function HailWalkwayPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <HailWalkwayHero />
      <HailWalkwayStats />
      <HailWalkwayTypePanels />
      <HailWalkwayVideo />
      <HailWalkwayGallerySlider />
    </main>
  );
}
