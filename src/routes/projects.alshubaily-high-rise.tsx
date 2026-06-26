import { createFileRoute } from "@tanstack/react-router";
import { HighRiseCTA } from "@/components/high-rise/HighRiseCTA";
import { HighRiseGallery } from "@/components/high-rise/HighRiseGallery";
import { HighRiseHero } from "@/components/high-rise/HighRiseHero";
import { HighRiseLocation } from "@/components/high-rise/HighRiseLocation";
import { HighRiseWhy } from "@/components/high-rise/HighRiseWhy";
import { HighRiseZones } from "@/components/high-rise/HighRiseZones";
import { HIGH_RISE_HERO_IMAGE } from "@/data/high-rise-content";

export const Route = createFileRoute("/projects/alshubaily-high-rise")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي هاي رايز — مجموعة الشبيلي | AlShubaily High Rise",
      },
      {
        name: "description",
        content:
          "الشبيلي هاي رايز — القلب النابض لمدينة الخبر. وجهة استثمارية وسياحية على امتداد 2 كم من الواجهة البحرية في المنطقة الشرقية.",
      },
      {
        property: "og:title",
        content: "AlShubaily High Rise — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "The beating heart of Khobar — 2 km seafront with marina, grand mall, towers, and artificial river.",
      },
      {
        property: "og:image",
        content: HIGH_RISE_HERO_IMAGE,
      },
    ],
  }),
  component: HighRisePage,
});

function HighRisePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <HighRiseHero />
      <HighRiseLocation />
      <HighRiseZones />
      <HighRiseWhy />
      <HighRiseGallery />
      <HighRiseCTA />
    </main>
  );
}
