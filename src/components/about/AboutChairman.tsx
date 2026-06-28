import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ABOUT_CHAIRMAN } from "@/data/about-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function AboutChairman() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-chair-reveal]"),
      { y: 32, opacity: 0 },
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
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24"
    >
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
        {/* Quote — right in AR, left in EN */}
        <div
          data-chair-reveal
          className={cn(
            "relative",
            lang === "ar" ? "md:order-1" : "md:order-2",
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9A7B3A]">
            {t(ABOUT_CHAIRMAN.eyebrowAr, ABOUT_CHAIRMAN.eyebrowEn)}
          </p>
          <blockquote className="mt-5 border-s-2 border-[#C9A962]/60 ps-5 md:ps-6">
            <p className="font-heading text-xl font-bold leading-relaxed text-[#1A1612] md:text-2xl">
              {t(ABOUT_CHAIRMAN.quoteLeadAr, ABOUT_CHAIRMAN.quoteLeadEn)}
            </p>
            <p className="mt-5 text-sm leading-8 text-[#5C5348] md:text-base md:leading-9">
              {t(ABOUT_CHAIRMAN.bodyAr, ABOUT_CHAIRMAN.bodyEn)}
            </p>
          </blockquote>
          <footer className="mt-6">
            <p className="font-heading text-base font-semibold text-[#1A1612]">
              {t(ABOUT_CHAIRMAN.nameAr, ABOUT_CHAIRMAN.nameEn)}
            </p>
            <p className="mt-1 text-sm text-[#9A7B3A]">
              {t(ABOUT_CHAIRMAN.roleAr, ABOUT_CHAIRMAN.roleEn)}
            </p>
          </footer>
        </div>

        {/* Portrait — left in AR, right in EN */}
        <div
          data-chair-reveal
          className={cn(
            "flex justify-center",
            lang === "ar" ? "md:order-2" : "md:order-1",
          )}
        >
          <div className="about-chairman-frame relative">
            <div className="about-chairman-frame-inner overflow-hidden">
              <img
                src={ABOUT_CHAIRMAN.image}
                alt={t(ABOUT_CHAIRMAN.nameAr, ABOUT_CHAIRMAN.nameEn)}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="about-chairman-frame-corner about-chairman-frame-corner--tl" aria-hidden />
            <div className="about-chairman-frame-corner about-chairman-frame-corner--tr" aria-hidden />
            <div className="about-chairman-frame-corner about-chairman-frame-corner--bl" aria-hidden />
            <div className="about-chairman-frame-corner about-chairman-frame-corner--br" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
