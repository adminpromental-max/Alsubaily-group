import { createFileRoute } from "@tanstack/react-router";
import { HighRise2ComingSoon } from "@/components/high-rise/HighRise2ComingSoon";
import { HIGH_RISE_2_HERO_IMAGE } from "@/data/high-rise-2-content";

export const Route = createFileRoute("/projects/alshubaily-high-rise-2")({
  head: () => ({
    meta: [
      {
        title: "الشبيلي هاي رايز (2) — مجموعة الشبيلي | AlShubaily High Rise 2",
      },
      {
        name: "description",
        content: "الشبيلي هاي رايز (2) — المشروع تحت الإنشاء. انتظرونا قريباً.",
      },
      {
        property: "og:title",
        content: "AlShubaily High Rise (2) — AlShubaily Group",
      },
      {
        property: "og:description",
        content: "AlShubaily High Rise (2) — under construction. Coming soon.",
      },
      {
        property: "og:image",
        content: HIGH_RISE_2_HERO_IMAGE,
      },
    ],
  }),
  component: HighRise2ComingSoon,
});
