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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.fromTo(
      section.querySelectorAll("[data-zone-reveal]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="gm-section gm-section--light">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-zone-reveal className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8A6A2E]">
            {t("استكشف المول", "Explore the Mall")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#0A0908] md:text-4xl">
            {t("خريطة المناطق", "Zone Map")}
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2" data-zone-reveal>
          {GRAND_MALL_ZONES.map((zone, i) => (
            <button
              key={zone.id}
              type="button"
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all md:text-sm",
                active === i
                  ? "bg-[#0A0908] text-[#C9A962]"
                  : "bg-[#0A0908]/8 text-[#5C5348] hover:bg-[#0A0908]/12",
              )}
              onClick={() => setActive(i)}
            >
              {t(zone.eyebrowAr, zone.eyebrowEn)}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div
            data-zone-reveal
            className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-[#C9A962]/15 shadow-xl"
          >
            {GRAND_MALL_ZONES.map((zone, i) => (
              <img
                key={zone.id}
                src={zone.image}
                alt={t(zone.titleAr, zone.titleEn)}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  active === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>

          <article data-zone-reveal className="min-h-[200px]">
            <p className="text-sm font-medium text-[#C9A962]">
              {t(GRAND_MALL_ZONES[active].eyebrowAr, GRAND_MALL_ZONES[active].eyebrowEn)}
            </p>
            <h3 className="font-heading mt-1 text-2xl font-bold text-[#0A0908] md:text-3xl">
              {t(
                GRAND_MALL_ZONES[active].titleAr,
                GRAND_MALL_ZONES[active].titleEn,
              )}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5348] md:text-base">
              {t(
                GRAND_MALL_ZONES[active].bodyAr,
                GRAND_MALL_ZONES[active].bodyEn,
              )}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
