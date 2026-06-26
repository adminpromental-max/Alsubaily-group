import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { PROJECTS } from "@/data/projects";
import { ProjectDetailLink } from "@/components/projects/ProjectDetailLink";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "المشاريع | مجموعة الشبيلي" },
      {
        name: "description",
        content: "استكشف مشاريع مجموعة الشبيلي في مختلف مناطق المملكة.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t, lang } = useLang();

  return (
    <main className="min-h-screen bg-stone-cream px-6 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#9A7B3A]">
            {t("محفظة المشاريع", "Project Portfolio")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1A1612] md:text-5xl">
            {t("مشاريع مجموعة الشبيلي", "AlShubaily Group Projects")}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5C5348] md:text-base">
            {t(
              "استكشف مشاريعنا في مختلف مناطق المملكة — سيتم تطوير هذه الصفحة قريباً.",
              "Explore our projects across the Kingdom — this page will be enhanced soon.",
            )}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectDetailLink
              key={project.slug}
              slug={project.slug}
              className="group overflow-hidden rounded-2xl border border-[#E0D3C2]/80 bg-white transition hover:border-[#C9A962]/50 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={lang === "ar" ? project.nameAr : project.nameEn}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-[11px] tracking-wide text-[#9A7B3A]">
                  {lang === "ar" ? project.regionAr : project.regionEn}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-[#1A1612]">
                  {lang === "ar" ? project.nameAr : project.nameEn}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5C5348]">
                  {lang === "ar" ? project.descriptionAr : project.descriptionEn}
                </p>
              </div>
            </ProjectDetailLink>
          ))}
        </div>
      </div>
    </main>
  );
}
