import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleDot, Route, Waypoints } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_LOCATION } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

const ROAD_ICONS = [Route, CircleDot, Waypoints] as const;

export function RabiaRoadLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-loc-reveal]"),
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

      gsap.fromTo(
        el.querySelector("[data-highway-draw]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F5EDE0] to-[#EDE4D4] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#C4A574]/40 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B1D3A]">
            {t(RABIA_ROAD_LOCATION.titleAr, RABIA_ROAD_LOCATION.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A0F0A] md:text-4xl">
            {t("واجهة مكة الغربية", "Makkah's Western Facade")}
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#3D2314]/80 md:text-base">
            {t(RABIA_ROAD_LOCATION.bodyAr, RABIA_ROAD_LOCATION.bodyEn)}
          </p>

          <div
            data-highway-draw
            className="my-6 h-1 w-full origin-left rounded-full bg-gradient-to-r from-[#6B1D3A] via-[#C4A574] to-[#6B1D3A]"
          />

          <div className="space-y-3">
            {RABIA_ROAD_LOCATION.roads.map((road, i) => {
              const Icon = ROAD_ICONS[i] ?? Route;
              return (
                <div
                  key={road.labelEn}
                  data-loc-reveal
                  className="flex items-center gap-4 rounded-xl border border-[#6B1D3A]/15 bg-white/60 px-4 py-3 backdrop-blur-sm transition hover:border-[#C4A574]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6B1D3A]/10 text-[#6B1D3A]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-[#1A0F0A]">
                    {t(road.labelAr, road.labelEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-loc-reveal
          className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#C4A574]/20"
        >
          <img
            src={RABIA_ROAD_LOCATION.image}
            alt={t(RABIA_ROAD_LOCATION.titleAr, RABIA_ROAD_LOCATION.titleEn)}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/65 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="inline-block rounded-full border border-[#C4A574]/40 bg-[#C4A574]/15 px-3 py-1 text-xs text-[#E8D5B5]">
              2,450,000 m²
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
