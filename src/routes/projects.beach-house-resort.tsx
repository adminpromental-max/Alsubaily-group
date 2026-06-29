import { createFileRoute } from "@tanstack/react-router";
import { BeachHouseBanner } from "@/components/beach-house/BeachHouseBanner";
import { BeachHouseCTA } from "@/components/beach-house/BeachHouseCTA";
import { BeachHouseGallery } from "@/components/beach-house/BeachHouseGallery";
import { BeachHouseHero } from "@/components/beach-house/BeachHouseHero";
import { BeachHouseWaveSeparator } from "@/components/beach-house/BeachHouseWaveSeparator";
import { BEACH_HOUSE_HERO_IMAGE } from "@/data/beach-house-content";

export const Route = createFileRoute("/projects/beach-house-resort")({
  head: () => ({
    meta: [
      {
        title: "منتجع منزل البحر — مجموعة الشبيلي | Maison de la Mer Resort",
      },
      {
        name: "description",
        content:
          "منتجع منزل البحر — مشروع متعدد الاستخدامات يضم سياحة ومطاعم ومارينا. 62,000 م² من مسطحات البناء في المنطقة الشرقية.",
      },
      {
        property: "og:title",
        content: "Maison de la Mer Resort — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "Multi-use coastal resort — tourism, restaurants, and marina. 62,000 m² total building area.",
      },
      {
        property: "og:image",
        content: BEACH_HOUSE_HERO_IMAGE,
      },
    ],
  }),
  component: BeachHousePage,
});

function BeachHousePage() {
  return (
    <main className="bh-page min-h-screen bg-[#8EC5DB]">
      <BeachHouseHero />
      <BeachHouseGallery />
      <BeachHouseBanner />
      <BeachHouseWaveSeparator />
      <BeachHouseCTA />
    </main>
  );
}
