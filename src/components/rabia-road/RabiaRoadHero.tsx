import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Route } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_HERO, RABIA_ROAD_HERO_IMAGE } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

function HighwayRibbon() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 w-full text-[#F5EDE0] md:h-28"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      <path fill="currentColor" d="M0,60 L0,100 L1440,100 L1440,45 C1080,75 720,25 360,55 C180,70 60,65 0,60 Z" />
      <path
        fill="none"
        stroke="#C4A574"
        strokeWidth="3"
        strokeDasharray="12 8"
        d="M0,58 C360,30 720,80 1080,50 C1260,38 1380,42 1440,45"
        className="rabia-highway-line"
      />
    </svg>
  );
}

export function RabiaRoadHero() {
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
      if (bg) {
        gsap.fromTo(
          bg,
          { y: "-5%", scale: 1.03 },
          {
            y: "14%",
            scale: 1.12,
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
            y: 55,
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
      gsap.fromTo(
        content?.querySelectorAll("[data-hero-reveal]") ?? [],
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        },
      );
      gsap.fromTo(
        hero.querySelector(".rabia-highway-line"),
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
          delay: 0.8,
        },
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#1A0F0A]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[4%] will-change-transform"
      >
        <img
          src={RABIA_ROAD_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A]/50 via-[#6B1D3A]/20 to-[#1A0F0A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_90%,rgba(196,165,116,0.2),transparent)]" />
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
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C4A574]/40 bg-[#C4A574]/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Route className="h-3.5 w-3.5 text-[#C4A574]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("طريق مكة–جدة السريع", "Mecca–Jeddah Expressway")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#C4A574]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(RABIA_ROAD_HERO.eyebrowAr, RABIA_ROAD_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(RABIA_ROAD_HERO.titleAr, RABIA_ROAD_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#E8D5B5] md:text-xl"
        >
          {t(RABIA_ROAD_HERO.taglineAr, RABIA_ROAD_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(RABIA_ROAD_HERO.subtitleAr, RABIA_ROAD_HERO.subtitleEn)}
        </p>
      </div>

      <HighwayRibbon />
    </section>
  );
}
