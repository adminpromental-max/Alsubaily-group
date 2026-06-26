import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Clapperboard,
  Home,
  LayoutGrid,
  Store,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_PLANNING } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

const USE_ICONS = [Store, Clapperboard, Building2, Home, LayoutGrid] as const;

export function RabiaRoadPlanning() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-plan-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );

      const chips = chipsRef.current?.querySelectorAll("[data-use-chip]");
      if (chips?.length) {
        gsap.fromTo(
          chips,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: chipsRef.current, start: "top 90%", once: true },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1A0F0A] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_80%_20%,rgba(107,29,58,0.35),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div
            data-plan-reveal
            className="relative overflow-hidden rounded-3xl border border-[#C4A574]/20 shadow-2xl"
          >
            <img
              src={RABIA_ROAD_PLANNING.image}
              alt={t(RABIA_ROAD_PLANNING.titleAr, RABIA_ROAD_PLANNING.titleEn)}
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/80 via-[#1A0F0A]/20 to-transparent" />
          </div>

          <div>
            <p data-plan-reveal className="text-xs font-medium uppercase tracking-[0.35em] text-[#C4A574]">
              {t(RABIA_ROAD_PLANNING.titleAr, RABIA_ROAD_PLANNING.titleEn)}
            </p>
            <h2
              data-plan-reveal
              className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl"
            >
              {t("بيئة عمرانية متكاملة", "Integrated Urban Environment")}
            </h2>
            <p data-plan-reveal className="mt-4 text-sm leading-8 text-white/75 md:text-base">
              {t(RABIA_ROAD_PLANNING.bodyAr, RABIA_ROAD_PLANNING.bodyEn)}
            </p>
            <p data-plan-reveal className="mt-3 text-sm leading-8 text-white/60">
              {t(RABIA_ROAD_PLANNING.detailAr, RABIA_ROAD_PLANNING.detailEn)}
            </p>

            <div
              ref={chipsRef}
              className="mt-8 flex flex-wrap gap-2"
            >
              {RABIA_ROAD_PLANNING.uses.map((use, i) => {
                const Icon = USE_ICONS[i] ?? Store;
                return (
                  <span
                    key={use.labelEn}
                    data-use-chip
                    className="inline-flex items-center gap-2 rounded-full border border-[#C4A574]/30 bg-[#6B1D3A]/25 px-4 py-2 text-xs font-medium text-[#E8D5B5] transition hover:border-[#C4A574]/60 hover:bg-[#6B1D3A]/40"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#C4A574]" strokeWidth={1.5} />
                    {t(use.labelAr, use.labelEn)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
