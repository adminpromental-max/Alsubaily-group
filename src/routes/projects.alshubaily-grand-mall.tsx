import { createFileRoute } from "@tanstack/react-router";
import { GrandMallCTA } from "@/components/grand-mall/GrandMallCTA";
import { GrandMallCinema } from "@/components/grand-mall/GrandMallCinema";
import { GrandMallEntertainment } from "@/components/grand-mall/GrandMallEntertainment";
import { GrandMallGallery } from "@/components/grand-mall/GrandMallGallery";
import { GrandMallHero } from "@/components/grand-mall/GrandMallHero";
import { GrandMallLakes } from "@/components/grand-mall/GrandMallLakes";
import { GrandMallPortals } from "@/components/grand-mall/GrandMallPortals";
import { GrandMallRetail } from "@/components/grand-mall/GrandMallRetail";
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
    <main className="min-h-screen bg-[#0A0908]">
      <GrandMallHero />
      <GrandMallCinema />
      <GrandMallPortals />
      <GrandMallZones />
      <GrandMallRetail />
      <GrandMallLakes />
      <GrandMallEntertainment />
      <GrandMallStats />
      <GrandMallGallery />
      <GrandMallCTA />
    </main>
  );
}
