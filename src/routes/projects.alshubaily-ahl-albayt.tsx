import { createFileRoute } from "@tanstack/react-router";
import { RabiaAlternatingSections } from "@/components/rabia/RabiaAlternatingSections";
import { RabiaBanner } from "@/components/rabia/RabiaBanner";
import { RabiaGallery } from "@/components/rabia/RabiaGallery";
import { RabiaHero } from "@/components/rabia/RabiaHero";
import { RabiaIntro } from "@/components/rabia/RabiaIntro";
import { RabiaLocation } from "@/components/rabia/RabiaLocation";
import { rabiaAsset } from "@/data/asset-paths";

export const Route = createFileRoute("/projects/alshubaily-ahl-albayt")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي وأهل البيت — مجموعة الشبيلي | AlShubaily & Ahl al-Bayt",
      },
      {
        name: "description",
        content:
          "الشبيلي وأهل البيت — وجهة متكاملة تجمع بين عظمة الموروث الإسلامي وأرقى معايير الحياة العصرية على أرض المقدسات. 230,000 م² · 3 أبراج · 6 كم من المسجد الحرام.",
      },
      {
        property: "og:title",
        content: "AlShubaily & Ahl al-Bayt — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "An integrated destination blending Islamic heritage grandeur with the finest contemporary living — 230,000 m² in the holy city of Makkah.",
      },
      {
        property: "og:image",
        content: rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg"),
      },
    ],
  }),
  component: AlshubailyAhlAlbaytPage,
});

function AlshubailyAhlAlbaytPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <RabiaHero />
      <RabiaIntro />
      <RabiaAlternatingSections />
      <RabiaLocation />
      <RabiaBanner />
      <RabiaGallery />
    </main>
  );
}
