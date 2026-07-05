import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Route, Sun } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GOLF_CITY_LOCATION } from "@/data/golf-city-content";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHT_ICONS = [Mountain, Route, Sun] as const;

export function GolfCityLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1A3324] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(201,169,98,0.15),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("الموقع", "Location")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(GOLF_CITY_LOCATION.titleAr, GOLF_CITY_LOCATION.titleEn)}
          </h2>
          <p className="mt-4 text-sm leading-8 text-white/75 md:text-base">
            {t(GOLF_CITY_LOCATION.bodyAr, GOLF_CITY_LOCATION.bodyEn)}
          </p>
          <p className="mt-4 text-sm leading-8 text-white/75 md:text-base">
            {t(GOLF_CITY_LOCATION.body2Ar, GOLF_CITY_LOCATION.body2En)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {GOLF_CITY_LOCATION.highlights.map((item, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? Mountain;
              return (
                <div
                  key={item.labelEn}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 md:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={1.5} />
                  {t(item.labelAr, item.labelEn)}
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-loc-reveal
          className="relative overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl"
        >
          <img
            src={GOLF_CITY_LOCATION.image}
            alt={t("قريباً", "Coming Soon")}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3324]/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
