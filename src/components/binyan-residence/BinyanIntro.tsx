import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { BINYAN_INTRO } from "@/data/binyan-residence-content";

gsap.registerPlugin(ScrollTrigger);

export function BinyanIntro() {
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
    <section ref={sectionRef} className="bg-[#F8F5F0] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-intro-reveal className="relative overflow-hidden rounded-2xl shadow-xl md:rounded-3xl">
          <img
            src={BINYAN_INTRO.image}
            alt={t("قريباً", "Coming Soon")}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2430]/30 via-transparent to-transparent" />
        </div>

        <div data-intro-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C4783A]">
            {t(BINYAN_INTRO.titleAr, BINYAN_INTRO.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#2A3340] md:text-4xl">
            {t("شمال الرياض.. بنيان ريزدنس", "North Riyadh.. Binyan Residence")}
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#2A3340]/75 md:text-base">
            {t(BINYAN_INTRO.bodyAr, BINYAN_INTRO.bodyEn)}
          </p>
        </div>
      </div>
    </section>
  );
}
