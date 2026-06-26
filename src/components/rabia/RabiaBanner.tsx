import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { RABIA_BANNER } from "@/data/rabia-content";

gsap.registerPlugin(ScrollTrigger);

export function RabiaBanner() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rabia-banner"
      className="relative flex min-h-[52vh] items-center justify-center overflow-hidden md:min-h-[68vh]"
      aria-label={t(RABIA_BANNER.titleAr, RABIA_BANNER.titleEn)}
    >
      <img
        ref={imgRef}
        src={RABIA_BANNER.image}
        alt={t(RABIA_BANNER.imageAltAr, RABIA_BANNER.imageAltEn)}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* Layered gradient for cinematic depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0e0b08]/40 via-[#0e0b08]/50 to-[#0e0b08]/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.14),transparent_60%)]"
        aria-hidden
      />
      {/* Subtle arabesque pattern overlay */}
      <div
        className="cta-arabesque-bg absolute inset-0 opacity-20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-24">
        <p
          data-banner-reveal
          className="text-[11px] uppercase tracking-[0.45em] text-[#C9A962]"
        >
          {t("الشبيلي وأهل البيت", "AlShubaily & Ahl al-Bayt")}
        </p>
        <h2
          data-banner-reveal
          className="mt-4 font-heading text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          {t(RABIA_BANNER.titleAr, RABIA_BANNER.titleEn)}
        </h2>
        <p
          data-banner-reveal
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {t(RABIA_BANNER.subtitleAr, RABIA_BANNER.subtitleEn)}
        </p>
        <div data-banner-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="map"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#C9A962]/15 px-7 py-3 text-sm font-medium text-[#FAF8F4] backdrop-blur-sm transition-all duration-300 hover:bg-[#C9A962]/30 hover:border-[#C9A962]/70"
          >
            {t("استكشف المشاريع", "Explore Projects")}
          </Link>
          <a
            href="#rabia-gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/35"
          >
            {t("معرض الصور", "View Gallery")}
          </a>
        </div>
      </div>
    </section>
  );
}
