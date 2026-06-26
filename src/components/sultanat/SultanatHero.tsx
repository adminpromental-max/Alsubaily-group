import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crown, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  SULTANAT_HERO,
  SULTANAT_HERO_IMAGE,
} from "@/data/sultanat-content";

gsap.registerPlugin(ScrollTrigger);

function ArchFrame() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-4 z-20 opacity-60 md:inset-8"
      viewBox="0 0 400 600"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M200 20 C 80 20, 20 80, 20 200 L 20 580 L 380 580 L 380 200 C 380 80, 320 20, 200 20 Z"
        stroke="url(#archGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M200 20 C 120 20, 60 60, 60 140 L 60 540 L 340 540 L 340 140 C 340 60, 280 20, 200 20 Z"
        stroke="rgba(201,169,98,0.25)"
        strokeWidth="0.75"
      />
      <defs>
        <linearGradient id="archGrad" x1="0" y1="0" x2="400" y2="600">
          <stop offset="0%" stopColor="#C9A962" />
          <stop offset="50%" stopColor="#C45C3E" />
          <stop offset="100%" stopColor="#C9A962" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SultanatHero() {
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
          bg.querySelector("img"),
          { scale: 1.05 },
          {
            scale: 1.18,
            duration: 14,
            ease: "none",
            repeat: -1,
            yoyo: true,
          },
        );
        gsap.fromTo(
          bg,
          { y: "-4%" },
          {
            y: "8%",
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
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
      const reveals = content?.querySelectorAll("[data-hero-reveal]");
      if (reveals?.length) {
        gsap.fromTo(
          reveals,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.2,
          },
        );
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="sultanat-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#1a1209]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[6%] -bottom-[6%] will-change-transform"
      >
        <img
          src={SULTANAT_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1209]/55 via-[#1a1209]/15 to-[#1a1209]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_75%,rgba(196,92,62,0.18),transparent)]" />
      </div>

      <ArchFrame />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 md:px-8 md:pb-20"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/40 bg-[#C9A962]/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Crown className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide text-[#E8D5C4]">
            {t("تاج الفخامة", "Crown of Luxury")}
          </span>
        </div>

        <p data-hero-reveal className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#C45C3E]">
          <MapPin className="h-3.5 w-3.5" />
          {t(SULTANAT_HERO.eyebrowAr, SULTANAT_HERO.eyebrowEn)}
        </p>
        <h1
          data-hero-reveal
          className="olympic-hero-title mt-1 max-w-4xl bg-gradient-to-l from-[#E8D5C4] via-white to-[#C9A962] bg-clip-text text-transparent"
        >
          {t(SULTANAT_HERO.titleAr, SULTANAT_HERO.titleEn)}
        </h1>
        <p data-hero-reveal className="mt-2 text-lg font-medium text-[#C45C3E] md:text-xl">
          {t(SULTANAT_HERO.taglineAr, SULTANAT_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl text-[#E8D5C4]/90">
          {t(SULTANAT_HERO.subtitleAr, SULTANAT_HERO.subtitleEn)}
        </p>
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line bg-[#C9A962]/60" />
      </div>
    </section>
  );
}
