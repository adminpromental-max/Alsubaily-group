import { createFileRoute } from "@tanstack/react-router";
import { RabiaRoadCTA } from "@/components/rabia-road/RabiaRoadCTA";
import { RabiaRoadGallery } from "@/components/rabia-road/RabiaRoadGallery";
import { RabiaRoadHero } from "@/components/rabia-road/RabiaRoadHero";
import { RabiaRoadInfrastructure } from "@/components/rabia-road/RabiaRoadInfrastructure";
import { RabiaRoadInvestment } from "@/components/rabia-road/RabiaRoadInvestment";
import { RabiaRoadLocation } from "@/components/rabia-road/RabiaRoadLocation";
import { RabiaRoadPlanning } from "@/components/rabia-road/RabiaRoadPlanning";
import { RabiaRoadStats } from "@/components/rabia-road/RabiaRoadStats";
import { RABIA_ROAD_HERO_IMAGE } from "@/data/rabia-road-content";

export const Route = createFileRoute("/projects/rabia-makkah")({
  head: () => ({
    meta: [
      {
        title: "رابية مكة — مجموعة الشبيلي | Rabia Makkah",
      },
      {
        name: "description",
        content:
          "رابية مكة — واجهة مكة الغربية على طريق مكة جدة السريع. 2,450,000 م² على بعد دقائق من الحرم المكي الشريف.",
      },
      {
        property: "og:title",
        content: "Rabia Makkah — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "Makkah's western facade on the Mecca–Jeddah Expressway — 2.45M m² minutes from the Holy Mosque.",
      },
      {
        property: "og:image",
        content: RABIA_ROAD_HERO_IMAGE,
      },
    ],
  }),
  component: RabiaMakkahPage,
});

function RabiaMakkahPage() {
  return (
    <main className="min-h-screen bg-[#F5EDE0]">
      <RabiaRoadHero />
      <RabiaRoadStats />
      <RabiaRoadLocation />
      <RabiaRoadPlanning />
      <RabiaRoadInfrastructure />
      <RabiaRoadInvestment />
      <RabiaRoadGallery />
      <RabiaRoadCTA />
    </main>
  );
}
