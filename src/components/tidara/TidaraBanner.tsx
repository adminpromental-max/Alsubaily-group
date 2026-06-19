import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { TIDARA_BANNER } from "@/data/tidara-content";

gsap.registerPlugin(ScrollTrigger);

export function TidaraBanner() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-banner-reveal]"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tidara-banner"
      className="relative flex min-h-[44vh] items-center justify-center overflow-hidden md:min-h-[56vh]"
      aria-label={t(TIDARA_BANNER.titleAr, TIDARA_BANNER.titleEn)}
    >
      <img
        src={TIDARA_BANNER.image}
        alt={t(TIDARA_BANNER.imageAltAr, TIDARA_BANNER.imageAltEn)}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0e0b08]/55 via-[#0e0b08]/45 to-[#0e0b08]/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.12),transparent_65%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-20">
        <p
          data-banner-reveal
          className="text-[11px] uppercase tracking-[0.45em] text-[#C9A962]"
        >
          {t("أبراج تيدارا", "Tidara Towers")}
        </p>
        <h2
          data-banner-reveal
          className="mt-4 font-heading text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          {t(TIDARA_BANNER.titleAr, TIDARA_BANNER.titleEn)}
        </h2>
        <p
          data-banner-reveal
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {t(TIDARA_BANNER.subtitleAr, TIDARA_BANNER.subtitleEn)}
        </p>
        <div data-banner-reveal className="mt-8">
          <Link
            to="/"
            hash="map"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#C9A962]/15 px-6 py-2.5 text-sm font-medium text-[#FAF8F4] backdrop-blur-sm transition-colors hover:bg-[#C9A962]/30"
          >
            {t("استكشف المشاريع", "Explore Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
