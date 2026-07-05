import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Hotel, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GOLF_CITY_ABOUT, GOLF_CITY_PILLARS } from "@/data/golf-city-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PILLAR_ICONS = [Building2, Hotel, Sparkles] as const;

export function GolfCityPillars() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-pillar-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF8F4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-pillar-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2D5A3D]">
            {t(GOLF_CITY_ABOUT.titleAr, GOLF_CITY_ABOUT.titleEn)}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-[#1A2E1F]/75 md:text-base">
            {t(GOLF_CITY_ABOUT.bodyAr, GOLF_CITY_ABOUT.bodyEn)}
          </p>
        </div>

        <div
          data-pillar-reveal
          className="hidden h-[460px] gap-3 md:flex"
          onMouseLeave={() => setActive(0)}
        >
          {GOLF_CITY_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Building2;
            const isActive = active === i;
            return (
              <div
                key={pillar.id}
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
                  src={pillar.image}
                  alt={t(pillar.titleAr, pillar.titleEn)}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "scale-100",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3324]/90 via-[#2D5A3D]/35 to-transparent" />

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
                      {t(pillar.titleAr, pillar.titleEn)}
                    </h3>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        isActive ? "mt-3 max-h-32 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-sm text-sm leading-relaxed text-white/85">
                        {t(pillar.descAr, pillar.descEn)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 md:hidden">
          {GOLF_CITY_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Building2;
            return (
              <div
                key={pillar.id}
                data-pillar-reveal
                className="relative h-64 overflow-hidden rounded-3xl"
              >
                <img
                  src={pillar.image}
                  alt={t(pillar.titleAr, pillar.titleEn)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3324]/90 via-[#2D5A3D]/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {t(pillar.titleAr, pillar.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      {t(pillar.descAr, pillar.descEn)}
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
