import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mountain } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_CORNICHE_HERO,
  HAIL_CORNICHE_HERO_IMAGE,
} from "@/data/hail-corniche-content";

gsap.registerPlugin(ScrollTrigger);

export function HailCornicheHero() {
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
          { y: "-6%", scale: 1 },
          {
            y: "12%",
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
            y: 64,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "55% top",
              scrub: 0.5,
            },
          },
        );
      }
      const reveals = content?.querySelectorAll("[data-hero-reveal]");
      if (reveals?.length) {
        gsap.fromTo(
          reveals,
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
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hail-corniche-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#1a1814]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[10%] -bottom-[10%] will-change-transform"
      >
        <img
          src={HAIL_CORNICHE_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1814]/45 via-[#1a1814]/15 to-[#1a1814]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_80%,rgba(74,124,89,0.15),transparent)]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 md:px-8 md:pb-20"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4A7C59]/40 bg-[#4A7C59]/15 px-4 py-1.5 backdrop-blur-sm"
        >
          <Mountain className="h-3.5 w-3.5 text-[#6B9B72]" strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide text-[#E8E4DC]">
            {t("كورنيش بري", "Land Corniche")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#6B9B72]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(HAIL_CORNICHE_HERO.eyebrowAr, HAIL_CORNICHE_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(HAIL_CORNICHE_HERO.titleAr, HAIL_CORNICHE_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#8AB892] md:text-xl"
        >
          {t(HAIL_CORNICHE_HERO.taglineAr, HAIL_CORNICHE_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(HAIL_CORNICHE_HERO.subtitleAr, HAIL_CORNICHE_HERO.subtitleEn)}
        </p>
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line bg-[#4A7C59]/50" />
      </div>
    </section>
  );
}
