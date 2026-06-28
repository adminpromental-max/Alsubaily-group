import { createFileRoute } from "@tanstack/react-router";
import { GrandMallCTA } from "@/components/grand-mall/GrandMallCTA";
import { GrandMallHero } from "@/components/grand-mall/GrandMallHero";
import { GrandMallPortals } from "@/components/grand-mall/GrandMallPortals";
import { GrandMallShowcase } from "@/components/grand-mall/GrandMallShowcase";
import { GrandMallStats } from "@/components/grand-mall/GrandMallStats";
import { GrandMallZones } from "@/components/grand-mall/GrandMallZones";
import { GRAND_MALL_HERO } from "@/data/grand-mall-content";

export const Route = createFileRoute("/projects/alshubaily-grand-mall")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي جراند مول — مجموعة الشبيلي | AlShubaily Grand Mall",
      },
      {
        name: "description",
        content:
          "الشبيلي جراند مول — وجهة تسوق وترفيه متكاملة في المنطقة الشرقية. محلات عالمية، بحيرات صناعية، ترفيه عائلي، ومجمع سينما.",
      },
      {
        property: "og:title",
        content: "AlShubaily Grand Mall — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A premier integrated shopping and entertainment destination — retail, artificial lakes, family entertainment, and cinema.",
      },
      {
        property: "og:image",
        content: GRAND_MALL_HERO,
      },
    ],
  }),
  component: GrandMallPage,
});

function GrandMallPage() {
  return (
    <main className="gm-page min-h-screen bg-[#0A0908]">
      <GrandMallHero />
      <GrandMallStats />
      <GrandMallPortals />
      <GrandMallShowcase />
      <GrandMallZones />
      <GrandMallCTA />
    </main>
  );
}
