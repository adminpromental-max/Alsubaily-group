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
  const DARK = "#14110D";
  const CREAM = "#F5EEE2";

  return (
    <div className="relative min-h-screen bg-[#F5EEE2] text-[#1A1612]">
      <main className="relative z-[2] isolate stacked-sections">
        <StackedSection index={0} total={7} background={DARK}>
          <HeroChairman />
        </StackedSection>

        <StackedSection index={1} total={7} background={DARK}>
          <VisionMissionSection />
        </StackedSection>

        <StackedSection index={2} total={7} background={CREAM}>
          <LogoMarqueeBanner />
        </StackedSection>

        <StackedSection index={3} total={7} background={CREAM}>
          <ProjectTypesSection />
        </StackedSection>

        <StackedSection index={4} total={7} background={DARK}>
          <FeaturedProjects />
        </StackedSection>

        <StackedSection index={5} total={7} background={CREAM}>
          <InteractiveMapSection />
        </StackedSection>

        <StackedSection index={6} total={7} background={DARK} className="stacked-section--deep">
          <ContactSection />
        </StackedSection>
      </main>

      <FilmGrain />
    </div>
  );
}
