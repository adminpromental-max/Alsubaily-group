import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { RESIDENCE_INTRO } from "@/data/alshubaily-residence-content";

gsap.registerPlugin(ScrollTrigger);

export function ResidenceIntro() {
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
    <section ref={sectionRef} className="bg-[#FAF8FC] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-intro-reveal className="relative overflow-hidden rounded-2xl shadow-xl md:rounded-3xl">
          <img
            src={RESIDENCE_INTRO.image}
            alt={t(RESIDENCE_INTRO.titleAr, RESIDENCE_INTRO.titleEn)}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1624]/30 via-transparent to-transparent" />
        </div>

        <div data-intro-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B5B7B]">
            {t(RESIDENCE_INTRO.eyebrowAr, RESIDENCE_INTRO.eyebrowEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#2A2438] md:text-4xl">
            {t(RESIDENCE_INTRO.titleAr, RESIDENCE_INTRO.titleEn)}
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#2A2438]/75 md:text-base">
            {t(RESIDENCE_INTRO.bodyAr, RESIDENCE_INTRO.bodyEn)}
          </p>
        </div>
      </div>
    </section>
  );
}
