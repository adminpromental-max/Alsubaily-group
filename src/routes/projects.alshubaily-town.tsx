import { createFileRoute } from "@tanstack/react-router";
import { TownCTA } from "@/components/alshubaily-town/TownCTA";
import { TownGallerySlider } from "@/components/alshubaily-town/TownGallerySlider";
import { TownHero } from "@/components/alshubaily-town/TownHero";
import { TownIntro } from "@/components/alshubaily-town/TownIntro";
import { TownLocation } from "@/components/alshubaily-town/TownLocation";
import { TownMasterPlan } from "@/components/alshubaily-town/TownMasterPlan";
import { TownStats } from "@/components/alshubaily-town/TownStats";
import { TownZones } from "@/components/alshubaily-town/TownZones";
import { TOWN_COVER_IMAGE } from "@/data/alshubaily-town-content";

export const Route = createFileRoute("/projects/alshubaily-town")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي تاون — مجموعة الشبيلي | AlShubaily Town",
      },
      {
        name: "description",
        content:
          "الشبيلي تاون — مدينة متكاملة على ضفاف الخبر. 5,993,129 م² تجمع بين جراند مول، قرية الصيادين، الكرنفال، والريزيدنس.",
      },
      {
        property: "og:title",
        content: "AlShubaily Town — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "An integrated town on the Al Khobar waterfront — 5.99M m² with grand mall, villages, and luxury living.",
      },
      {
        property: "og:image",
        content: TOWN_COVER_IMAGE,
      },
    ],
  }),
  component: TownPage,
});

function TownPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <TownHero />
      <TownStats />
      <TownIntro />
      <TownMasterPlan />
      <TownZones />
      <TownLocation />
      <TownGallerySlider />
      <TownCTA />
    </main>
  );
}
