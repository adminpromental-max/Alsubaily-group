import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";

export const Route = createFileRoute("/dammam-preview")({
  head: () => ({
    meta: [
      { title: "مدينة الدمام الأولمبية — مجموعة الشبيلي" },
      {
        name: "description",
        content: "معاينة مشروع مدينة الدمام الأولمبية ضمن محفظة مجموعة الشبيلي.",
      },
    ],
  }),
  component: DammamPreviewPage,
});

function DammamPreviewPage() {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 pt-32 pb-20 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
          {t("معاينة", "Preview")}
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          {t("مدينة الدمام الأولمبية", "Dammam Olympic City")}
        </h1>
        <p className="mt-6 max-w-2xl text-white/70">
          {t(
            "تجربة المعاينة الكاملة (Split-screen + Olympic Circle Gallery) سيتم نقلها في المرحلة الرابعة مع باقي المكونات السينمائية وخريطة Leaflet.",
            "The full split-screen and Olympic Circle Gallery experience will be ported in phase 4 alongside the cinematic components and Leaflet map.",
          )}
        </p>
      </div>
    </main>
  );
}
