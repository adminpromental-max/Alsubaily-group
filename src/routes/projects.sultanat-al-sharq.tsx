import { createFileRoute } from "@tanstack/react-router";
import { SultanatArchitecture } from "@/components/sultanat/SultanatArchitecture";
import { SultanatCTA } from "@/components/sultanat/SultanatCTA";
import { SultanatHero } from "@/components/sultanat/SultanatHero";
import { SultanatIdentity } from "@/components/sultanat/SultanatIdentity";
import { SultanatCircleGallery } from "@/components/sultanat/SultanatCircleGallery";
import { SultanatLocation } from "@/components/sultanat/SultanatLocation";
import { SULTANAT_HERO_IMAGE } from "@/data/sultanat-content";

export const Route = createFileRoute("/projects/sultanat-al-sharq")({
  head: () => ({
    meta: [
      {
        title: "سلطانة الشرق — مجموعة الشبيلي | Sultanat Al Sharq",
      },
      {
        name: "description",
        content:
          "سلطانة الشرق — قمة الفخامة والخصوصية على ضفاف الخليج. حي سكني فاخر بمساحة 765,000 م² وواجهة بحرية 1,100 متر في الخبر.",
      },
      {
        property: "og:title",
        content: "Sultanat Al Sharq — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "The pinnacle of luxury on the Gulf — private islands, palatial estates on the Red Sea and Arabian Gulf in Khobar.",
      },
      {
        property: "og:image",
        content: SULTANAT_HERO_IMAGE,
      },
    ],
  }),
  component: SultanatPage,
});

function SultanatPage() {
  return (
    <main className="min-h-screen bg-[#F5EDE0]">
      <SultanatHero />
      <SultanatLocation />
      <SultanatIdentity />
      <SultanatCircleGallery />
      <SultanatArchitecture />
      <SultanatCTA />
    </main>
  );
}
