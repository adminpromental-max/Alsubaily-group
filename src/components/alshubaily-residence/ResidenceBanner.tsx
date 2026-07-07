import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { RESIDENCE_BANNER } from "@/data/alshubaily-residence-content";

gsap.registerPlugin(ScrollTrigger);

export function ResidenceBanner() {
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
          scale: 1.08,
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
      id="residence-banner"
      className="relative flex min-h-[52vh] items-center justify-center overflow-hidden md:min-h-[68vh]"
      aria-label={t(RESIDENCE_BANNER.titleAr, RESIDENCE_BANNER.titleEn)}
    >
      <img
        ref={imgRef}
        src={RESIDENCE_BANNER.image}
        alt={t(RESIDENCE_BANNER.imageAltAr, RESIDENCE_BANNER.imageAltEn)}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1A1624]/45 via-[#3D3450]/55 to-[#1A1624]/85"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.14),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-24">
        <p
          data-banner-reveal
          className="text-[11px] uppercase tracking-[0.45em] text-[#C9A962]"
        >
          {t("الشبيلي ريزيدنس", "Al Shabili Residence")}
        </p>
        <h2
          data-banner-reveal
          className="mt-4 font-heading text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          {t(RESIDENCE_BANNER.titleAr, RESIDENCE_BANNER.titleEn)}
        </h2>
        <p
          data-banner-reveal
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {t(RESIDENCE_BANNER.subtitleAr, RESIDENCE_BANNER.subtitleEn)}
        </p>
        <a
          href="#residence-gallery"
          data-banner-reveal
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[#C9A962]/50 bg-[#C9A962]/15 px-7 py-3 text-sm font-medium text-[#FAF8F4] backdrop-blur-sm transition-all duration-300 hover:border-[#C9A962]/70 hover:bg-[#C9A962]/30"
        >
          {t("معرض الصور", "View Gallery")}
        </a>
      </div>
    </section>
  );
}
