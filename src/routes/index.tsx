import { createFileRoute } from "@tanstack/react-router";
import { HeroChairman } from "@/components/home/HeroChairman";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { LogoMarqueeBanner } from "@/components/home/LogoMarqueeBanner";
import { ProjectTypesSection } from "@/components/home/ProjectTypesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FilmGrain } from "@/components/home/FilmGrain";
import { StackedSection } from "@/components/home/StackedSection";
import { InteractiveMapSection } from "@/components/map/InteractiveMapSection";
import { ContactSection } from "@/components/home/ContactSection";
import { useStackedLayerScroll } from "@/hooks/useStackedLayerScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlShubaily | مجموعة خالد سعود الشبيلي" },
      {
        name: "description",
        content:
          "مجموعة الشبيلي — 18 مشروعاً عقارياً واستثمارياً في أنحاء المملكة العربية السعودية.",
      },
      {
        property: "og:title",
        content: "AlShubaily Group — Real Estate Investment",
      },
      {
        property: "og:description",
        content:
          "AlShubaily Group — 18 real estate projects across Saudi Arabia.",
      },
      { property: "og:image", content: "/assets/hero/Hero-1.jpg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useStackedLayerScroll();

  return (
    <div className="relative min-h-screen bg-plain-cream text-[#1A1612]">
      <main className="stacked-sections relative z-[2]">
        <StackedSection index={0} total={6} surface="stone-dark">
          <HeroChairman />
        </StackedSection>

        <StackedSection index={1} total={6} surface="cover-slider-stone">
          <VisionMissionSection />
        </StackedSection>

        <StackedSection index={2} total={6} surface="cover-creamy">
          <LogoMarqueeBanner />
        </StackedSection>

        <StackedSection index={3} total={6} surface="plain-cream">
          <ProjectTypesSection />
        </StackedSection>

        <StackedSection index={4} total={6} surface="cover-slider-stone">
          <FeaturedProjects />
        </StackedSection>
      </main>

      {/* Full-bleed map — outside stacked sections to avoid overflow:hidden clipping */}
      <InteractiveMapSection />

      <main className="stacked-sections relative z-[2]">
        <StackedSection
          index={0}
          total={1}
          surface="plain-dark"
          className="stacked-section--deep"
        >
          <ContactSection />
        </StackedSection>
      </main>

      <FilmGrain />
    </div>
  );
}
