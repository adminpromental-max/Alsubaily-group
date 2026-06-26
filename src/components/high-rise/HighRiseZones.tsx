import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { HIGH_RISE_ZONES } from "@/data/high-rise-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function HighRiseZones() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-zone-reveal]"),
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#06080c] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(74,120,180,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-zone-reveal className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7eb8e8]">
            {t("مناطق المشروع", "Project Zones")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t("استثمار وحياة", "Investment & Life")}
          </h2>
        </div>

        {/* Desktop: expanding panels */}
        <div
          data-zone-reveal
          className="hidden h-[480px] gap-2 md:flex"
          onMouseLeave={() => setActive(0)}
        >
          {HIGH_RISE_ZONES.map((zone, i) => {
            const isActive = active === i;
            return (
              <div
                key={zone.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-2xl transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7eb8e8]",
                  isActive ? "flex-[2.5]" : "flex-1",
                )}
              >
                <img
                  src={zone.image}
                  alt={t(zone.titleAr, zone.titleEn)}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "scale-100",
                  )}
                />
                {"accent" in zone && zone.accent && isActive && (
                  <img
                    src={zone.accent}
                    alt=""
                    aria-hidden
                    className="absolute bottom-4 end-4 h-20 w-28 rounded-lg object-cover opacity-90 shadow-lg ring-2 ring-white/20"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <h3
                    className={cn(
                      "font-heading font-bold text-white transition-all duration-500",
                      isActive ? "text-2xl md:text-3xl" : "text-lg",
                    )}
                  >
                    {t(zone.titleAr, zone.titleEn)}
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isActive ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-sm font-medium text-[#7eb8e8]">
                      {t(zone.featuresAr, zone.featuresEn)}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                      {t(zone.vibeAr, zone.vibeEn)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: cards */}
        <div className="grid gap-4 md:hidden">
          {HIGH_RISE_ZONES.map((zone) => (
            <article
              key={zone.id}
              data-zone-reveal
              className="relative h-64 overflow-hidden rounded-2xl"
            >
              <img
                src={zone.image}
                alt={t(zone.titleAr, zone.titleEn)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-heading text-xl font-bold text-white">
                  {t(zone.titleAr, zone.titleEn)}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#7eb8e8]">
                  {t(zone.featuresAr, zone.featuresEn)}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  {t(zone.vibeAr, zone.vibeEn)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
