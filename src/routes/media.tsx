import { createFileRoute } from "@tanstack/react-router";
import { MediaCenterPage } from "@/components/media/MediaCenterPage";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      {
        title: "المركز الإعلامي — مجموعة الشبيلي | Media Center",
      },
      {
        name: "description",
        content:
          "أخبار مجموعة الشبيلي، تطورات المشاريع، التغطية الإعلامية، والمناسبات والفعاليات.",
      },
      {
        property: "og:title",
        content: "Media Center — AlShubaily Group",
      },
      {
        property: "og:description",
        content:
          "Company news, project updates, media coverage, and events from AlShubaily Group.",
      },
    ],
  }),
  component: MediaRoutePage,
});

function MediaRoutePage() {
  return (
    <main className="min-h-screen bg-[#F2EDE4]">
      <MediaCenterPage />
    </main>
  );
}
