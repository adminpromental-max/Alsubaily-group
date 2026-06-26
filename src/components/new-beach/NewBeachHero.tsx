import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_HERO, NEW_BEACH_HERO_IMAGE } from "@/data/new-beach-content";

gsap.registerPlugin(ScrollTrigger);

function WaveDivider() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 w-full text-[#F5E6D0] md:h-24"
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

export function NewBeachHero() {
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
          { y: "-4%", scale: 1.02 },
          {
            y: "12%",
            scale: 1.1,
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
            y: 60,
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        },
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0a2540]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[4%] will-change-transform"
      >
        <img
          src={NEW_BEACH_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/35 via-[#1a4a6e]/15 to-[#0a2540]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_85%,rgba(46,107,138,0.35),transparent)]" />
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
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E8C99A]/40 bg-[#E8C99A]/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Anchor className="h-3.5 w-3.5 text-[#E8C99A]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("على الشاطئ مباشرة", "Direct Beachfront")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#7EC8E3]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(NEW_BEACH_HERO.eyebrowAr, NEW_BEACH_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(NEW_BEACH_HERO.titleAr, NEW_BEACH_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#E8C99A] md:text-xl"
        >
          {t(NEW_BEACH_HERO.taglineAr, NEW_BEACH_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(NEW_BEACH_HERO.subtitleAr, NEW_BEACH_HERO.subtitleEn)}
        </p>
      </div>

      <WaveDivider />
    </section>
  );
}
