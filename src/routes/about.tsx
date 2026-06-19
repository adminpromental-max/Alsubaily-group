import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — مجموعة الشبيلي | AlShubaily" },
      {
        name: "description",
        content:
          "تعرّف على مجموعة الشبيلي ورؤيتها في تطوير المشاريع العقارية والاستثمارية في المملكة العربية السعودية.",
      },
      { property: "og:title", content: "About — AlShubaily Group" },
      {
        property: "og:description",
        content:
          "Learn about AlShubaily Group and its vision for real estate and investment development across Saudi Arabia.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-stone-cream px-6 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9A7B3A]">
          {t("من نحن", "About Us")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1A1612] md:text-5xl">
          {t("مجموعة الشبيلي", "AlShubaily Group")}
        </h1>
        <p className="mt-6 text-lg leading-loose text-[#5C5348]">
          {t(
            "نبني وجهات عقارية واستثمارية تُجسّد طموح المملكة العربية السعودية وتلتزم بأعلى معايير الجودة والاستدامة، لنصنع قيمة دائمة لمجتمعاتنا وشركائنا.",
            "We build real estate and investment destinations that embody the Kingdom's ambition and the highest standards of quality and sustainability — creating lasting value for our communities and partners.",
          )}
        </p>
        <p className="mt-12 rounded-2xl border border-[#E0D3C2] bg-white p-6 text-sm text-[#5C5348]">
          {t(
            "هذه الصفحة قيد التطوير — سيتم نقل المحتوى الكامل والتجربة التفاعلية في المرحلة الثانية من البورت.",
            "This page is being ported. The full content and interactive experience will arrive in phase 2.",
          )}
        </p>
      </div>
    </main>
  );
}
