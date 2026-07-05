import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { TOWN_INTRO } from "@/data/alshubaily-town-content";

gsap.registerPlugin(ScrollTrigger);

export function TownIntro() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-intro-reveal]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF6F0] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-intro-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8B6914]">
            {t(TOWN_INTRO.titleAr, TOWN_INTRO.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#3D2A1E] md:text-4xl">
            {t("الشبيلي تاون", "AlShubaily Town")}
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#3D2A1E]/75 md:text-base">
            {t(TOWN_INTRO.bodyAr, TOWN_INTRO.bodyEn)}
          </p>
        </div>

        <div
          data-intro-reveal
          className="overflow-hidden rounded-2xl shadow-xl md:rounded-3xl"
        >
          <img
            src={TOWN_INTRO.image}
            alt={t("الشبيلي تاون", "AlShubaily Town")}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
