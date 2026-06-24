import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "خدماتنا | مجموعة الشبيلي" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-stone-cream px-6 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#9A7B3A]">
          {t("خدماتنا", "Our Services")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl">
          {t("خدمات مجموعة الشبيلي", "AlShubaily Group Services")}
        </h1>
        <p className="mt-5 text-sm leading-8 text-[#5C5348] md:text-base">
          {t(
            "هذه الصفحة قيد التطوير — سيتم إضافة تفاصيل خدمات المجموعة قريباً.",
            "This page is under development — group services details will be added soon.",
          )}
        </p>
      </div>
    </main>
  );
}
