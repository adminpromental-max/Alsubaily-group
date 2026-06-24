import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { HAIL_WALKWAY_HERO, HAIL_WALKWAY_HERO_IMAGE } from "@/data/hail-walkway-content";

gsap.registerPlugin(ScrollTrigger);

export function HailWalkwayHero() {
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
          { y: "-8%", scale: 1 },
          {
            y: "14%",
            scale: 1.14,
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
            y: 72,
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

      const reveals = content?.querySelectorAll<HTMLElement>("[data-hero-reveal]");
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
      id="hail-walkway-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[12%] -bottom-[12%] will-change-transform"
      >
        <img
          src={HAIL_WALKWAY_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_75%,rgba(201,169,98,0.1),transparent)]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 will-change-transform md:px-8 md:pb-20 md:pt-32"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <p data-hero-reveal className="olympic-hero-eyebrow mt-4">
          {t(HAIL_WALKWAY_HERO.eyebrowAr, HAIL_WALKWAY_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(HAIL_WALKWAY_HERO.titleAr, HAIL_WALKWAY_HERO.titleEn)}
        </h1>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(HAIL_WALKWAY_HERO.subtitleAr, HAIL_WALKWAY_HERO.subtitleEn)}
        </p>
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line" />
      </div>
    </section>
  );
}
