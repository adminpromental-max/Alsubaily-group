import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ALSHUBAILY_LOGO, GROUP_SUBSIDIARIES } from "@/data/group-logos";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function LogoMarqueeBanner() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-group-reveal]"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        el.querySelectorAll("[data-group-card]"),
        { y: 28, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el.querySelector(".group-companies-grid"), start: "top 88%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="group"
      ref={sectionRef}
      className="group-companies-section relative w-full overflow-hidden bg-[#FAF9F6] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[min(100vw,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(201,169,98,0.12),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div data-group-reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9A7B3A] md:text-sm">
            {t("هيكل المجموعة", "Group Structure")}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#1A1612] md:text-5xl lg:text-6xl">
            {t("شركات المجموعة", "Group Companies")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5C5348] md:text-base">
            {t(
              "منظومة متكاملة من الشركات التابعة تحت مظلة واحدة — كل شركة تُكمل رؤية المجموعة في التطوير والاستثمار والخدمات.",
              "An integrated ecosystem of subsidiaries under one umbrella — each company advancing the group's vision in development, investment, and services.",
            )}
          </p>
        </div>

        <div data-group-reveal className="group-companies-hero relative mx-auto mt-12 flex justify-center md:mt-14">
          <div className="group-companies-hero-ring relative flex items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.22)_0%,transparent_70%)] blur-xl"
            />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#C9A962]/25 bg-white/80 p-5 shadow-[0_20px_60px_-20px_rgba(201,169,98,0.45)] backdrop-blur-sm md:h-44 md:w-44 md:p-6 lg:h-48 lg:w-48">
              <img
                src={ALSHUBAILY_LOGO}
                alt={t("مجموعة الشبيلي", "AlShubaily Group")}
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <ul
          className="group-companies-grid mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:mt-14 md:grid-cols-3 md:gap-6"
          aria-label={t("شركات مجموعة الشبيلي", "AlShubaily Group Companies")}
        >
          {GROUP_SUBSIDIARIES.map((company) => (
            <li key={company.id} data-group-card>
              <article
                className={cn(
                  "group-companies-card group flex h-full flex-col items-center rounded-2xl border border-[#E0D3C2]/70 bg-white/90 px-4 py-6 text-center shadow-[0_8px_32px_-12px_rgba(26,22,18,0.1)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962]/45 hover:shadow-[0_20px_48px_-16px_rgba(201,169,98,0.28)] md:px-5 md:py-7",
                )}
              >
                <div className="flex h-16 w-full items-center justify-center md:h-20">
                  <img
                    src={company.logo}
                    alt={lang === "ar" ? company.nameAr : company.nameEn}
                    className="max-h-full max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-xs font-semibold leading-relaxed text-[#1A1612] md:text-sm">
                  {lang === "ar" ? company.nameAr : company.nameEn}
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#C9A962] to-[#E8D5A3] transition-all duration-500 group-hover:w-10" />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
