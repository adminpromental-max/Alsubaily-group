import { createFileRoute, Link } from "@tanstack/react-router";
import {
  RegionInteractiveMap,
  RegionMapPreviewBanner,
} from "@/components/map/RegionInteractiveMap";
import { useLang } from "@/contexts/lang-context";
import { MAP_V2_SRC } from "@/data/map-region-layout";

export const Route = createFileRoute("/map-preview")({
  head: () => ({
    meta: [
      {
        title: "خريطة المناطق — معاينة | AlShubaily Map Preview",
      },
      {
        name: "description",
        content:
          "معاينة الخريطة التفاعلية الجديدة — اضغط على منطقة لعرض مشاريعها بأسهم وأسماء.",
      },
      { property: "og:image", content: MAP_V2_SRC },
    ],
  }),
  component: MapPreviewPage,
});

function MapPreviewPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-[#FAF9F6] pb-20 pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#8A6A2E] hover:underline"
        >
          ← {t("العودة للرئيسية", "Back to Home")}
        </Link>

        <RegionMapPreviewBanner />

        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8A6A2E]">
            {t("خريطة المناطق", "Regional Map")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-4xl">
            {t("معاينة الخريطة التفاعلية", "Interactive Map Preview")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1A1612]/60 md:text-base">
            {t(
              "اضغط على أي منطقة — مكة، حائل، الرياض، أو الشرقية — لتظهر أسهم بأسماء المشاريع. اضغط على اسم المشروع لفتح البطاقة.",
              "Tap any region — Mecca, Hail, Riyadh, or Eastern — to reveal project arrows and names. Tap a project to open its card.",
            )}
          </p>
        </div>

        <RegionInteractiveMap />
      </div>
    </main>
  );
}
