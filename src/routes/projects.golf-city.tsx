import { createFileRoute } from "@tanstack/react-router";
import { GolfCityCTA } from "@/components/golf-city/GolfCityCTA";
import { GolfCityGallery } from "@/components/golf-city/GolfCityGallery";
import { GolfCityHero } from "@/components/golf-city/GolfCityHero";
import { GolfCityIntro } from "@/components/golf-city/GolfCityIntro";
import { GolfCityLocation } from "@/components/golf-city/GolfCityLocation";
import { GolfCityPillars } from "@/components/golf-city/GolfCityPillars";
import { GolfCityStats } from "@/components/golf-city/GolfCityStats";
import { GOLF_CITY_HERO_IMAGE } from "@/data/golf-city-content";

export const Route = createFileRoute("/projects/golf-city")({
  head: () => ({
    meta: [
      {
        title: "جولف سيتي — مجموعة الشبيلي | Golf City",
      },
      {
        name: "description",
        content:
          "جولف سيتي — مجتمع متكامل ووجهة طموحة في قلب المزاحمية. عالم سكني، ضيافة فندقية، ووجهة ترفيهية — انتظرونا قريباً!",
      },
      {
        property: "og:title",
        content: "Golf City — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "An integrated community in Al-Muzahimiyah — residential, hospitality, and entertainment. Stay tuned, coming soon!",
      },
      {
        property: "og:image",
        content: GOLF_CITY_HERO_IMAGE,
      },
    ],
  }),
  component: GolfCityPage,
});

function GolfCityPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <GolfCityHero />
      <GolfCityStats />
      <GolfCityIntro />
      <GolfCityPillars />
      <GolfCityLocation />
      <GolfCityGallery />
      <GolfCityCTA />
    </main>
  );
}
