import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Store } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RESIDENCE_ABOUT, RESIDENCE_PILLARS } from "@/data/alshubaily-residence-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PILLAR_ICONS = [Building2, Store] as const;

export function ResidencePillars() {
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
    <section ref={sectionRef} className="bg-[#F3F0F7] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-pillar-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B5B7B]">
            {t(RESIDENCE_ABOUT.titleAr, RESIDENCE_ABOUT.titleEn)}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-[#2A2438]/75 md:text-base">
            {t(RESIDENCE_ABOUT.bodyAr, RESIDENCE_ABOUT.bodyEn)}
          </p>
        </div>

        <div
          data-pillar-reveal
          className="hidden h-[460px] gap-3 md:flex"
          onMouseLeave={() => setActive(0)}
        >
          {RESIDENCE_PILLARS.map((pillar, i) => {
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1624]/90 via-[#3D3450]/35 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#C9A962]/90">
                      {t(pillar.subtitleAr, pillar.subtitleEn)}
                    </p>
                    <h3
                      className={cn(
                        "font-heading font-bold text-white transition-all duration-500",
                        isActive
                          ? "mt-1 text-2xl md:text-3xl"
                          : lang === "ar"
                            ? "mt-1 text-lg [writing-mode:vertical-rl]"
                            : "mt-1 text-lg -rotate-90 origin-bottom-left translate-x-6",
                      )}
                    >
                      {t(pillar.titleAr, pillar.titleEn)}
                    </h3>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        isActive ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-md text-sm leading-relaxed text-white/85">
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
          {RESIDENCE_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Building2;
            return (
              <div
                key={pillar.id}
                data-pillar-reveal
                className="relative min-h-72 overflow-hidden rounded-3xl"
              >
                <img
                  src={pillar.image}
                  alt={t(pillar.titleAr, pillar.titleEn)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1624]/90 via-[#3D3450]/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#C9A962]/90">
                      {t(pillar.subtitleAr, pillar.subtitleEn)}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-white md:text-2xl">
                      {t(pillar.titleAr, pillar.titleEn)}
                    </h3>
                    <p className="mt-2 text-sm text-white/85">
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
