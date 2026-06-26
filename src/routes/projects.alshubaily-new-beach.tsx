import { createFileRoute } from "@tanstack/react-router";
import { NewBeachCTA } from "@/components/new-beach/NewBeachCTA";
import { NewBeachGallery } from "@/components/new-beach/NewBeachGallery";
import { NewBeachHero } from "@/components/new-beach/NewBeachHero";
import { NewBeachInfrastructure } from "@/components/new-beach/NewBeachInfrastructure";
import { NewBeachInvestment } from "@/components/new-beach/NewBeachInvestment";
import { NewBeachLocation } from "@/components/new-beach/NewBeachLocation";
import { NewBeachStats } from "@/components/new-beach/NewBeachStats";
import { NewBeachZones } from "@/components/new-beach/NewBeachZones";
import { NEW_BEACH_HERO_IMAGE } from "@/data/new-beach-content";

export const Route = createFileRoute("/projects/alshubaily-new-beach")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي نيو بيتش — مجموعة الشبيلي | AlShubaily New Beach",
      },
      {
        name: "description",
        content:
          "الشبيلي نيو بيتش — الأول في الخبر على الشاطئ مباشرة. 2,909,000 م² بواجهة بحرية في قلب المنطقة الشرقية.",
      },
      {
        property: "og:title",
        content: "AlShubaily New Beach — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "Al Khobar's premier beachfront — 2.9M m² between King Fahd Causeway and Sultanat Al Sharq.",
      },
      {
        property: "og:image",
        content: NEW_BEACH_HERO_IMAGE,
      },
    ],
  }),
  component: NewBeachPage,
});

function NewBeachPage() {
  return (
    <main className="min-h-screen bg-[#F5E6D0]">
      <NewBeachHero />
      <NewBeachStats />
      <NewBeachLocation />
      <NewBeachZones />
      <NewBeachInfrastructure />
      <NewBeachInvestment />
      <NewBeachGallery />
      <NewBeachCTA />
    </main>
  );
}
