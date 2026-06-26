import { createFileRoute } from "@tanstack/react-router";
import { ZahraaArchitecture } from "@/components/al-zahraa/ZahraaArchitecture";
import { ZahraaCTA } from "@/components/al-zahraa/ZahraaCTA";
import { ZahraaHero } from "@/components/al-zahraa/ZahraaHero";
import { ZahraaInfrastructure } from "@/components/al-zahraa/ZahraaInfrastructure";
import { ZahraaLocation } from "@/components/al-zahraa/ZahraaLocation";
import { ZahraaShowcase } from "@/components/al-zahraa/ZahraaShowcase";
import { ZahraaStats } from "@/components/al-zahraa/ZahraaStats";
import { ZAHRAA_HERO_IMAGE } from "@/data/al-zahraa-content";

export const Route = createFileRoute("/projects/al-zahraa")({
  head: () => ({
    meta: [
      {
        title: "مشروع الزهراء — مجموعة الشبيلي | Al-Zahraa Project",
      },
      {
        name: "description",
        content:
          "مشروع الزهراء — نبض القطيف الجديد على ضفاف الخليج. مخطط 1,260,000 م² بواجهة بحرية 1,200 متر في القطيف.",
      },
      {
        property: "og:title",
        content: "Al-Zahraa Project — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "The new pulse of Al-Qatif on the Gulf — 1.26M m² masterplan with 1,200m seafront.",
      },
      {
        property: "og:image",
        content: ZAHRAA_HERO_IMAGE,
      },
    ],
  }),
  component: ZahraaPage,
});

function ZahraaPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      <ZahraaHero />
      <ZahraaStats />
      <ZahraaLocation />
      <ZahraaArchitecture />
      <ZahraaInfrastructure />
      <ZahraaShowcase />
      <ZahraaCTA />
    </main>
  );
}
