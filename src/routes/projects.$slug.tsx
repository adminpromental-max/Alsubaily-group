import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { HeroCinematicVideo } from "@/components/home/HeroCinematicVideo";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "مشروع — مجموعة الشبيلي | AlShubaily" },
      {
        name: "description",
        content: "تفاصيل المشروع ضمن محفظة مجموعة الشبيلي العقارية.",
      },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-stone-cream px-6 pt-32 pb-20 md:px-8">
      {/* Hero cinematic specific to the project page */}
      <HeroCinematicVideo
        poster="/assets/projects/Tidara-tower/Hero.png"
        mp4={"https://res.cloudinary.com/dfzaghfsv/video/upload/v1781801274/Cinematic_architectural_film__on4pal.mp4"}
      />

      <div className="mx-auto max-w-4xl mt-8">
        <Link
          to="/"
          className="text-sm text-[#9A7B3A] hover:text-[#1A1612]"
        >
          {t("← العودة للرئيسية", "← Back to home")}
        </Link>
        <h1 className="mt-6 text-4xl font-semibold text-[#1A1612] md:text-5xl">
          {slug}
        </h1>
        <p className="mt-6 text-[#5C5348]">
          {t(
            "صفحة تفاصيل المشروع قيد التجهيز — سيتم نقل المعرض السينمائي وتفاصيل المشروع في المرحلة الثانية.",
            "Project detail page is being ported. The cinematic gallery and full details arrive in phase 2.",
          )}
        </p>
      </div>
    </main>
  );
}
