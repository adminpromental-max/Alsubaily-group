import { createFileRoute } from "@tanstack/react-router";
import { ResidenceBanner } from "@/components/alshubaily-residence/ResidenceBanner";
import { ResidenceCTA } from "@/components/alshubaily-residence/ResidenceCTA";
import { ResidenceGallery } from "@/components/alshubaily-residence/ResidenceGallery";
import { ResidenceHero } from "@/components/alshubaily-residence/ResidenceHero";
import { ResidenceIntro } from "@/components/alshubaily-residence/ResidenceIntro";
import { ResidencePillars } from "@/components/alshubaily-residence/ResidencePillars";
import { ResidenceStats } from "@/components/alshubaily-residence/ResidenceStats";
import { RESIDENCE_HERO_IMAGE } from "@/data/alshubaily-residence-content";

export const Route = createFileRoute("/projects/alshubaily-residence")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي ريزيدنس — مجموعة الشبيلي | Al Shabili Residence",
      },
      {
        name: "description",
        content:
          "الشبيلي ريزيدنس — عنوان الفخامة على طريق تركي الأول. مجتمع سكني خاص وبوابة تجارية حيوية على 24,000 م².",
      },
      {
        property: "og:title",
        content: "Al Shabili Residence — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "Luxury living on Turki Al-Awwal Road — a private compound and vibrant promenade across 24,000 m².",
      },
      {
        property: "og:image",
        content: RESIDENCE_HERO_IMAGE,
      },
    ],
  }),
  component: ResidencePage,
});

function ResidencePage() {
  return (
    <main className="min-h-screen bg-[#FAF8FC]">
      <ResidenceHero />
      <ResidenceStats />
      <ResidenceIntro />
      <ResidencePillars />
      <ResidenceBanner />
      <ResidenceGallery />
      <ResidenceCTA />
    </main>
  );
}
