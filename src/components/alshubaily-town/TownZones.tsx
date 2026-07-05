import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { TOWN_ZONES } from "@/data/alshubaily-town-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function TownZones() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-zone-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF6F0] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-zone-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8B6914]">
            {t("مناطق المدينة", "Town Districts")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#3D2A1E] md:text-4xl">
            {t("وجهات داخل الشبيلي تاون", "Destinations Within AlShubaily Town")}
          </h2>
        </div>

        <div
          data-zone-reveal
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {TOWN_ZONES.map((zone, i) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "group relative min-h-[280px] overflow-hidden rounded-2xl text-start shadow-lg transition-all duration-500 md:rounded-3xl",
                active === i && "ring-2 ring-[#C9A962]/50 ring-offset-2 ring-offset-[#FAF6F0]",
                i === 0 && "md:col-span-2 lg:col-span-2 lg:row-span-1",
              )}
            >
              <img
                src={zone.image}
                alt={t(zone.titleAr, zone.titleEn)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E16]/95 via-[#5C4033]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                  {t(zone.titleAr, zone.titleEn)}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-white/80 transition-all duration-500",
                    active === i ? "max-h-32 opacity-100" : "max-h-0 overflow-hidden opacity-0 md:max-h-none md:opacity-100",
                  )}
                >
                  {t(zone.descAr, zone.descEn)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
