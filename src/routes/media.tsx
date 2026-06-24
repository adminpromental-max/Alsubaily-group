import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [{ title: "المركز الإعلامي | مجموعة الشبيلي" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-stone-cream px-6 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#9A7B3A]">
          {t("المركز الإعلامي", "Media Center")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl">
          {t("المركز الإعلامي", "Media Center")}
        </h1>
        <p className="mt-5 text-sm leading-8 text-[#5C5348] md:text-base">
          {t(
            "هذه الصفحة قيد التطوير — سيتم إضافة الأخبار والتغطيات الإعلامية قريباً.",
            "This page is under development — news and media coverage will be added soon.",
          )}
        </p>
      </div>
    </main>
  );
}
