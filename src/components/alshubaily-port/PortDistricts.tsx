import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { PORT_DISTRICTS } from "@/data/port-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function PortDistricts() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.fromTo(
      section.querySelectorAll("[data-district-reveal]"),
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
    <section ref={sectionRef} className="port-section port-section--light">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-district-reveal className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
            {t("استكشف المشروع", "Explore the Project")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#1A4A6E] md:text-4xl">
            {t("مناطق الشبيلي بورت", "AlShubaily Port Districts")}
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2" data-district-reveal>
          {PORT_DISTRICTS.map((zone, i) => (
            <button
              key={zone.id}
              type="button"
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all md:text-sm",
                active === i
                  ? "bg-[#2E8FA8] text-white"
                  : "bg-[#2E8FA8]/10 text-[#1A4A6E] hover:bg-[#2E8FA8]/18",
              )}
              onClick={() => setActive(i)}
            >
              {t(zone.eyebrowAr, zone.eyebrowEn)}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div
            data-district-reveal
            className="port-frame relative aspect-[3/2] overflow-hidden rounded-3xl"
          >
            {PORT_DISTRICTS.map((zone, i) => (
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

          <div data-district-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#2E8FA8]">
              {t(PORT_DISTRICTS[active].eyebrowAr, PORT_DISTRICTS[active].eyebrowEn)}
            </p>
            <h3 className="font-heading mt-2 text-2xl font-bold text-[#1A4A6E] md:text-3xl">
              {t(PORT_DISTRICTS[active].titleAr, PORT_DISTRICTS[active].titleEn)}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#3D6B8A] md:text-base">
              {t(PORT_DISTRICTS[active].bodyAr, PORT_DISTRICTS[active].bodyEn)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
