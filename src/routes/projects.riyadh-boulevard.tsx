import { createFileRoute } from "@tanstack/react-router";
import { RiyadhBoulevardComingSoon } from "@/components/riyadh-boulevard/RiyadhBoulevardComingSoon";
import { RIYADH_BOULEVARD_HERO_IMAGE } from "@/data/riyadh-boulevard-content";

export const Route = createFileRoute("/projects/riyadh-boulevard")({
  head: () => ({
    meta: [
      {
        title: "رياض بوليفارد — مجموعة الشبيلي | Riyadh Boulevard",
      },
      {
        name: "description",
        content: "رياض بوليفارد — المشروع تحت الإنشاء. انتظرونا قريباً.",
      },
      {
        property: "og:title",
        content: "Riyadh Boulevard — AlShubaily Group",
      },
      {
        property: "og:description",
        content: "Riyadh Boulevard — project under construction. Coming soon.",
      },
      {
        property: "og:image",
        content: RIYADH_BOULEVARD_HERO_IMAGE,
      },
    ],
  }),
  component: RiyadhBoulevardComingSoon,
});
