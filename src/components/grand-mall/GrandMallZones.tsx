import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_ZONES } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallZones() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (GRAND_MALL_ZONES.length - 0.35)}`,
        pin: pin,
        scrub: 0.45,
        onUpdate: (self) => {
          const idx = Math.min(
            GRAND_MALL_ZONES.length - 1,
            Math.floor(self.progress * GRAND_MALL_ZONES.length),
          );
          setActive(idx);
        },
      });

      gsap.fromTo(
        section.querySelector("[data-zone-head]"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#12100E]"
      style={{ minHeight: `${100 + GRAND_MALL_ZONES.length * 75}vh` }}
    >
      <div
        ref={pinRef}
        className="flex min-h-[100svh] flex-col justify-center py-16 md:py-20"
      >
        <div data-zone-head className="mx-auto mb-8 max-w-6xl px-6 text-center md:mb-10 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("استكشف المول", "Explore the Mall")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("خريطة المناطق", "Zone Map")}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-[#C9A962]/20 shadow-2xl">
            {GRAND_MALL_ZONES.map((zone, i) => (
              <img
                key={zone.id}
                src={zone.image}
                alt={t(zone.titleAr, zone.titleEn)}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-2 p-4">
              {GRAND_MALL_ZONES.map((zone, i) => (
                <button
                  key={zone.id}
                  type="button"
                  className={cn(
                    "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all md:text-xs",
                    active === i
                      ? "bg-[#C9A962] text-[#1A1612]"
                      : "bg-white/10 text-white/70 backdrop-blur-sm",
                  )}
                  onClick={() => setActive(i)}
                >
                  {t(zone.eyebrowAr, zone.eyebrowEn)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[260px]">
            {GRAND_MALL_ZONES.map((zone, i) => (
              <article
                key={zone.id}
                className={cn(
                  "absolute inset-0 transition-all duration-600",
                  active === i
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-5 opacity-0",
                )}
              >
                <p className="text-sm font-medium text-[#C9A962]">
                  {t(zone.eyebrowAr, zone.eyebrowEn)}
                </p>
                <h3 className="font-heading mt-1 text-2xl font-bold text-white md:text-3xl">
                  {t(zone.titleAr, zone.titleEn)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  {t(zone.bodyAr, zone.bodyEn)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
