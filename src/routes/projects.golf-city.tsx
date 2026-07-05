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
          "جولف سيتي — وجهة متكاملة قريباً في المزاحمية. مجتمع سكني وضيافة فندقية ووجهة ترفيهية على مساحة 1,850,000 م².",
      },
      {
        property: "og:title",
        content: "Golf City — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "An integrated destination coming soon in Al-Muzahimiyah — residential, hospitality, and entertainment across 1.85M m².",
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
