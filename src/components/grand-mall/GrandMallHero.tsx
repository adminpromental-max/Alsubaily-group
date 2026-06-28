import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ShoppingBag } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  GRAND_MALL_HERO,
  GRAND_MALL_HERO_COPY,
  GRAND_MALL_HERO_MOBILE,
} from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallHero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" },
      );
      gsap.fromTo(
        contentRef.current?.querySelectorAll("[data-hero-reveal]") ?? [],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, delay: 0.3, ease: "power3.out" },
      );

      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: "-2%" },
          {
            y: "6%",
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="gm-hero relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-[#0A0908]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[4%] -bottom-[4%] will-change-transform"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={GRAND_MALL_HERO_MOBILE} />
          <img
            src={GRAND_MALL_HERO}
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/60 via-[#0A0908]/30 to-[#0A0908]/95" />
      </div>

      <div
        ref={contentRef}
        className="gm-section relative z-[2] mx-auto w-full max-w-6xl pb-16 pt-28 md:pb-24"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/35 bg-black/30 px-4 py-1.5 backdrop-blur-md"
        >
          <ShoppingBag className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("تسوق · ترفيه · سينما", "Shopping · Entertainment · Cinema")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-5 flex items-center gap-2 text-[#C9A962]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(GRAND_MALL_HERO_COPY.eyebrowAr, GRAND_MALL_HERO_COPY.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(GRAND_MALL_HERO_COPY.titleAr, GRAND_MALL_HERO_COPY.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#E8D5B5] md:text-xl"
        >
          {t(GRAND_MALL_HERO_COPY.taglineAr, GRAND_MALL_HERO_COPY.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(GRAND_MALL_HERO_COPY.subtitleAr, GRAND_MALL_HERO_COPY.subtitleEn)}
        </p>
      </div>
    </section>
  );
}
