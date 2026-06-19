import { PROJECTS } from "@/data/projects";
import {
  PROJECT_CATEGORIES,
  PROJECT_CATEGORY_BY_SLUG,
  type ProjectCategoryId,
} from "@/data/site-content";
import { useLang } from "@/contexts/lang-context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function countByCategory(id: ProjectCategoryId) {
  return PROJECTS.filter((p) => PROJECT_CATEGORY_BY_SLUG[p.slug] === id).length;
}

export function ProjectTypesSection() {
  const { t, lang } = useLang();
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5EEE2] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div data-reveal className="relative mb-14 md:mb-20">
          <div
            className="pointer-events-none absolute -top-6 select-none text-[44px] font-black leading-none text-[#C9A962]/10 md:text-[80px]"
            style={{
              [lang === "ar" ? "right" : "left"]: "-0.25rem",
            } as React.CSSProperties}
            aria-hidden
          >
            ACTIVITIES
          </div>
          <h2 className="font-heading relative z-10 text-3xl font-black text-[#0A0A0A] md:text-5xl">
            {t("نشاطات المجموعة", "Group Activities")}
          </h2>
          <div className="mt-3 flex items-center">
            <span className="h-[2px] w-12 bg-[#C9A962]" />
            <p className="ms-3 text-sm font-medium tracking-wide text-[#0A0A0A]/60 md:text-base">
              {t("خلق مجتمعات متكاملة", "Crafting integrated communities")}
            </p>
          </div>
        </div>

        {/* Monolith stack */}
        <div className="space-y-20 md:grid md:grid-cols-3 md:gap-10 md:space-y-0">
          {PROJECT_CATEGORIES.map((cat) => {
            const count = countByCategory(cat.id);
            return (
              <article
                key={cat.id}
                data-reveal
                className="monolith-card group relative"
              >
                {/* Image slab */}
                <div className="monolith-img-wrap relative z-10 overflow-hidden shadow-2xl">
                  <img
                    src={cat.image}
                    alt={lang === "ar" ? cat.nameAr : cat.nameEn}
                    loading="lazy"
                    className="monolith-img"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.35),transparent_55%)]" />
                </div>

                {/* Black caption block */}
                <div className="monolith-caption group-hover:-translate-y-2">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-[#FAFAF8] md:text-2xl">
                      {lang === "ar" ? cat.nameAr : cat.nameEn}
                    </h3>
                    <span className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#8A6A2E]">
                      {lang === "ar" ? cat.nameEn : cat.nameAr}
                    </span>
                  </div>
                  <p className="mb-4 text-[13px] leading-relaxed text-[#FAFAF8]/70 md:text-sm">
                    {lang === "ar" ? cat.bioAr : cat.bioEn}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#8A6A2E] md:text-xs">
                      {count} {t("مشروع", "projects")}
                    </span>
                    <span className="h-px flex-1 bg-[#C9A962]/30" />
                  </div>
                </div>

                {/* Outline frame */}
                <span className="monolith-frame" aria-hidden />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
