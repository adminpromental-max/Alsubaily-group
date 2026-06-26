import { createFileRoute } from "@tanstack/react-router";
import { HailCornicheConnect } from "@/components/hail-corniche/HailCornicheConnect";
import { HailCornicheHero } from "@/components/hail-corniche/HailCornicheHero";
import { HailCornicheJourney } from "@/components/hail-corniche/HailCornicheJourney";
import { HailCornicheStats } from "@/components/hail-corniche/HailCornicheStats";
import { HailCornicheVideo } from "@/components/hail-corniche/HailCornicheVideo";
import { HAIL_CORNICHE_HERO_IMAGE } from "@/data/hail-corniche-content";

export const Route = createFileRoute("/projects/hail-corniche")({
  head: () => ({
    meta: [
      {
        title: "كورنيش حائل — مجموعة الشبيلي | Hail Corniche",
      },
      {
        name: "description",
        content:
          "كورنيش حائل — الكورنيش البري الأول من نوعه في المملكة. مشروع تجاري وسياحي بمساحة 2,500,000 م² في وادي الأديرع، حائل.",
      },
      {
        property: "og:title",
        content: "Hail Corniche — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "The Kingdom's first land corniche — 2.5M m² commercial and tourism destination in Wadi Al-Adair'a, Hail.",
      },
      {
        property: "og:image",
        content: HAIL_CORNICHE_HERO_IMAGE,
      },
    ],
  }),
  component: HailCornichePage,
});

function HailCornichePage() {
  return (
    <main className="min-h-screen bg-[#F0EBE3]">
      <HailCornicheHero />
      <HailCornicheStats />
      <HailCornicheJourney from={0} to={2} showHeader />
      <HailCornicheVideo />
      <HailCornicheJourney from={2} to={5} />
      <HailCornicheConnect />
    </main>
  );
}
