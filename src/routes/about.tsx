import { createFileRoute } from "@tanstack/react-router";
import { AboutChairman } from "@/components/about/AboutChairman";
import { AboutGroupBanner } from "@/components/about/AboutGroupBanner";
import { AboutWelcome } from "@/components/about/AboutWelcome";
import { GroupCompaniesOrbit } from "@/components/about/GroupCompaniesOrbit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "عن المجموعة — مجموعة خالد بن سعود الشبيلي | AlShubaily Group",
      },
      {
        name: "description",
        content:
          "تعرّف على مجموعة خالد بن سعود الشبيلي للاستثمار والتطوير العقاري — رؤيتنا ورسالتنا وشركاتنا التابعة.",
      },
      { property: "og:title", content: "About — AlShubaily Group" },
      {
        property: "og:description",
        content:
          "Learn about Khalid Bin Saud AlShubaily Group for real estate investment and development across Saudi Arabia.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-cream pb-20 pt-32">
      <AboutWelcome />
      <AboutGroupBanner />
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AboutChairman />
        <GroupCompaniesOrbit />
      </div>
    </main>
  );
}
