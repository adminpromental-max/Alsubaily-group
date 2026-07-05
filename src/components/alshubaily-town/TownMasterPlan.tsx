import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { TOWN_MASTERPLAN } from "@/data/alshubaily-town-content";

gsap.registerPlugin(ScrollTrigger);

export function TownMasterPlan() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#5C4033] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-plan-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#E8D5A3]">
            {t("المخطط العام", "Master Plan")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(TOWN_MASTERPLAN.titleAr, TOWN_MASTERPLAN.titleEn)}
          </h2>
        </div>

        <div
          data-plan-reveal
          className="mb-10 overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl"
        >
          <img
            src={TOWN_MASTERPLAN.image}
            alt={t(TOWN_MASTERPLAN.titleAr, TOWN_MASTERPLAN.titleEn)}
            className="w-full object-cover"
          />
        </div>

        <ol
          data-plan-reveal
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TOWN_MASTERPLAN.zones.map((zone, i) => (
            <li
              key={zone.labelEn}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C9A962]/20 text-xs font-bold text-[#E8D5A3]">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-white/85">
                {t(zone.labelAr, zone.labelEn)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
