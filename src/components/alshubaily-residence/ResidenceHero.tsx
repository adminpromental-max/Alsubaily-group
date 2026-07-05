import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RESIDENCE_HERO, RESIDENCE_HERO_IMAGE } from "@/data/alshubaily-residence-content";

gsap.registerPlugin(ScrollTrigger);

export function ResidenceHero() {
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
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#1A1624]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[12%] -bottom-[12%] will-change-transform"
      >
        <img
          src={RESIDENCE_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1624]/50 via-[#3D3450]/25 to-[#1A1624]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_75%,rgba(201,169,98,0.12),transparent)]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 will-change-transform md:px-8 md:pb-20 md:pt-32"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/40 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#E8D5A3]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t(RESIDENCE_HERO.taglineAr, RESIDENCE_HERO.taglineEn)}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#C9A962]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(RESIDENCE_HERO.eyebrowAr, RESIDENCE_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(RESIDENCE_HERO.titleAr, RESIDENCE_HERO.titleEn)}
        </h1>
        {RESIDENCE_HERO.subtitleAr && (
          <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
            {t(RESIDENCE_HERO.subtitleAr, RESIDENCE_HERO.subtitleEn)}
          </p>
        )}
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line bg-[#C9A962]/50" />
      </div>
    </section>
  );
}
