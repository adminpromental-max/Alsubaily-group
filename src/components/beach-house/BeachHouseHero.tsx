import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  BEACH_HOUSE_HERO,
  BEACH_HOUSE_HERO_IMAGE,
} from "@/data/beach-house-content";

gsap.registerPlugin(ScrollTrigger);

function WaveDivider() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 w-full text-[#8EC5DB] md:h-24"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
      />
    </svg>
  );
}

export function BeachHouseHero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.06, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.35, ease: "power2.out" },
      );
      gsap.fromTo(
        content?.querySelectorAll("[data-hero-reveal]") ?? [],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          delay: 0.25,
          ease: "power3.out",
        },
      );
      if (bg) {
        gsap.fromTo(
          bg,
          { y: "-4%" },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.85,
            },
          },
        );
      }
      if (content) {
        gsap.fromTo(
          content,
          { y: 0, opacity: 1 },
          {
            y: 48,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "50% top",
              scrub: 0.5,
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
      className="bh-hero relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#2C2416]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[4%] will-change-transform"
      >
        <img
          src={BEACH_HOUSE_HERO_IMAGE}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/40 via-[#2C2416]/15 to-[#2C2416]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_90%,rgba(201,169,98,0.22),transparent)]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-28 md:px-8 md:pb-28"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/40 bg-[#C9A962]/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Anchor className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("سياحة · مطاعم · مارينا", "Tourism · Restaurants · Marina")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#C9A962]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(BEACH_HOUSE_HERO.eyebrowAr, BEACH_HOUSE_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(BEACH_HOUSE_HERO.titleAr, BEACH_HOUSE_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#E8DCC8] md:text-xl"
        >
          {t(BEACH_HOUSE_HERO.taglineAr, BEACH_HOUSE_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(BEACH_HOUSE_HERO.subtitleAr, BEACH_HOUSE_HERO.subtitleEn)}
        </p>
      </div>

      <WaveDivider />
    </section>
  );
}
