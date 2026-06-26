import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPortfolio } from "@/components/projects/ProjectsPortfolio";

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
  return (
    <main className="min-h-screen bg-[#0C0A08] px-6 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <ProjectsPortfolio />
      </div>
    </main>
  );
}
