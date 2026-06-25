import { createFileRoute } from "@tanstack/react-router";
import { ProjectsCircularShowcase } from "@/components/projects/ProjectsCircularShowcase";
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
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
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
        </div>

        <ProjectsCircularShowcase />

        <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-[#C9A962]/40 bg-white/60 px-5 py-4 text-center text-xs leading-6 text-[#5C5348]">
          {t(
            "هذا العرض التجريبي للمشاريع — نختبره هنا قبل اعتماده في صفحة المشاريع الرسمية.",
            "This is an experimental projects layout — we're testing it here before the official projects page.",
          )}
        </p>
      </div>
    </main>
  );
}
