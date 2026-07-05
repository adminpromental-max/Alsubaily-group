import { createFileRoute } from "@tanstack/react-router";
import { BinyanCTA } from "@/components/binyan-residence/BinyanCTA";
import { BinyanGallery } from "@/components/binyan-residence/BinyanGallery";
import { BinyanHero } from "@/components/binyan-residence/BinyanHero";
import { BinyanIntro } from "@/components/binyan-residence/BinyanIntro";
import { BinyanStats } from "@/components/binyan-residence/BinyanStats";
import { BinyanVision } from "@/components/binyan-residence/BinyanVision";
import { BINYAN_HERO_IMAGE } from "@/data/binyan-residence-content";

export const Route = createFileRoute("/projects/benban-residence")({
  head: () => ({
    meta: [
      {
        title: "بنيان ريزدنس — مجموعة الشبيلي | Binyan Residence",
      },
      {
        name: "description",
        content:
          "بنيان ريزدنس — مجتمع ذكي ومستدام قريباً شمال الرياض. مساحة 6,200,000 م² لمخططات سكنية ذكية وبنية تحتية متطورة.",
      },
      {
        property: "og:title",
        content: "Binyan Residence — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A smart, sustainable community coming soon in North Riyadh — 6.2M m² with smart housing, advanced infrastructure, and green spaces.",
      },
      {
        property: "og:image",
        content: BINYAN_HERO_IMAGE,
      },
    ],
  }),
  component: BinyanPage,
});

function BinyanPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <BinyanHero />
      <BinyanStats />
      <BinyanIntro />
      <BinyanVision />
      <BinyanGallery />
      <BinyanCTA />
    </main>
  );
}
