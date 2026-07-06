import { createFileRoute } from "@tanstack/react-router";
import { PortCTA } from "@/components/alshubaily-port/PortCTA";
import { PortCinema } from "@/components/alshubaily-port/PortCinema";
import { PortDistricts } from "@/components/alshubaily-port/PortDistricts";
import { PortGallery, PortLocation } from "@/components/alshubaily-port/PortGallery";
import { PortHero } from "@/components/alshubaily-port/PortHero";
import { PortShowcase } from "@/components/alshubaily-port/PortShowcase";
import { PortStats } from "@/components/alshubaily-port/PortStats";
import { PortVision } from "@/components/alshubaily-port/PortVision";
import { PORT_HERO_IMAGE } from "@/data/port-content";

export const Route = createFileRoute("/projects/alshubaily-port")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي بورت — مجموعة الشبيلي | AlShubaily Port",
      },
      {
        name: "description",
        content:
          "الشبيلي بورت — مشروع ساحلي ضخم على واجهة بحرية مباشرة للخليج العربي. وحدات سكنية فاخرة، منتجعات سياحية، ومنطقة تجارية بجوار جسر الملك فهد.",
      },
      {
        property: "og:title",
        content: "AlShubaily Port — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "A vast coastal destination on the Arabian Gulf — luxury residences, international resorts, and a vibrant commercial district beside King Fahd Causeway.",
      },
      {
        property: "og:image",
        content: PORT_HERO_IMAGE,
      },
    ],
  }),
  component: AlshubailyPortPage,
});

function AlshubailyPortPage() {
  return (
    <main className="port-page min-h-screen bg-[#EAF4F9]">
      <PortHero />
      <PortStats />
      <PortVision />
      <PortShowcase />
      <PortDistricts />
      <PortCinema />
      <PortGallery />
      <PortLocation />
      <PortCTA />
    </main>
  );
}
