import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palmtree, Store } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { HAIL_WALKWAY_TYPE_PANELS } from "@/data/hail-walkway-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PANEL_ICONS = [Palmtree, Store] as const;

export function HailWalkwayTypePanels() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll<HTMLElement>("[data-panel-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF8F4] py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div data-panel-reveal className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8A6A2E]">
            {t("طبيعة المشروع", "Project Nature")}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#0A0A0A] md:text-3xl">
            {t("سياحي وتجاري", "Tourism & Commercial")}
          </h2>
        </div>

        <div
          data-panel-reveal
          className="hidden h-[420px] gap-3 md:flex"
          onMouseLeave={() => setActive(0)}
        >
          {HAIL_WALKWAY_TYPE_PANELS.map((panel, i) => {
            const Icon = PANEL_ICONS[i] ?? Store;
            const isActive = active === i;
            return (
              <div
                key={panel.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-3xl outline-none transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-[#C9A962]",
                  isActive ? "flex-[3]" : "flex-1",
                )}
              >
                <img
                  src={panel.image}
                  alt={t(panel.titleAr, panel.titleEn)}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "scale-100",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "font-heading font-bold text-white transition-all duration-500",
                        isActive
                          ? "text-3xl"
                          : lang === "ar"
                            ? "text-xl [writing-mode:vertical-rl]"
                            : "text-xl -rotate-90 origin-bottom-left translate-x-6",
                      )}
                    >
                      {t(panel.titleAr, panel.titleEn)}
                    </h3>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        isActive ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-xs text-sm leading-relaxed text-white/85">
                        {t(panel.descAr, panel.descEn)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 md:hidden">
          {HAIL_WALKWAY_TYPE_PANELS.map((panel, i) => {
            const Icon = PANEL_ICONS[i] ?? Store;
            return (
              <div
                key={panel.id}
                data-panel-reveal
                className="relative h-56 overflow-hidden rounded-3xl"
              >
                <img
                  src={panel.image}
                  alt={t(panel.titleAr, panel.titleEn)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {t(panel.titleAr, panel.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      {t(panel.descAr, panel.descEn)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
