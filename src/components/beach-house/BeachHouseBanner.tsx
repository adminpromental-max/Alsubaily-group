import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palmtree, Ruler, Sailboat, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  BEACH_HOUSE_BANNER,
  BEACH_HOUSE_BANNER_IMAGE,
  BEACH_HOUSE_COMPONENTS,
  BEACH_HOUSE_DETAILS,
} from "@/data/beach-house-content";

gsap.registerPlugin(ScrollTrigger);

const COMPONENT_ICONS = {
  palm: Palmtree,
  dining: UtensilsCrossed,
  sail: Sailboat,
} as const;

export function BeachHouseBanner() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-banner-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        },
      );
      if (bg) {
        gsap.fromTo(
          bg,
          { y: "-6%" },
          {
            y: "6%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bh-banner relative isolate min-h-[85vh] overflow-hidden md:min-h-[90vh]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
      >
        <img
          src={BEACH_HOUSE_BANNER_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2416]/88 via-[#2C2416]/55 to-[#2C2416]/25 md:from-[#2C2416]/92 md:via-[#2C2416]/50 md:to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20 md:min-h-[90vh] md:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-center">
          <div data-banner-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
              {t("منتجع منزل البحر", "Maison de la Mer Resort")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {t(BEACH_HOUSE_BANNER.titleAr, BEACH_HOUSE_BANNER.titleEn)}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-8 text-white/80 md:text-base">
              {t(BEACH_HOUSE_BANNER.bodyAr, BEACH_HOUSE_BANNER.bodyEn)}
            </p>
          </div>

          <div className="space-y-4" data-banner-reveal>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A962]">
                {t("نوع التطوير", "Development Type")}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">
                {t(BEACH_HOUSE_DETAILS.devTypeAr, BEACH_HOUSE_DETAILS.devTypeEn)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A962]">
                {t("استخدام المشروع", "Project Use")}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">
                {t(BEACH_HOUSE_DETAILS.useAr, BEACH_HOUSE_DETAILS.useEn)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Ruler className="h-5 w-5 text-[#C9A962]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A962]">
                    {t("مسطحات البناء", "Building Area")}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-white">
                    62,000 {t("م²", "m²")}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {BEACH_HOUSE_COMPONENTS.map((item) => {
                const Icon = COMPONENT_ICONS[item.icon];
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/15 bg-[#2C2416]/40 p-3 text-center backdrop-blur-md"
                  >
                    <Icon className="h-5 w-5 text-[#C9A962]" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-white/90">
                      {t(item.titleAr, item.titleEn)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
