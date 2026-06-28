import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ShoppingBag } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  GRAND_MALL_GATES,
  GRAND_MALL_HERO,
  GRAND_MALL_HERO_COPY,
  GRAND_MALL_HERO_MOBILE,
  GRAND_MALL_LOGO,
} from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallHero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const gatesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.14, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8 },
      )
        .fromTo(
          logoRef.current,
          { y: 24, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1 },
          "-=1.1",
        )
        .fromTo(
          gatesRef.current,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.8",
        )
        .fromTo(
          contentRef.current?.querySelectorAll("[data-hero-reveal]") ?? [],
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
          "-=0.5",
        );

      if (bgRef.current) {
        gsap.to(bgRef.current.querySelector("img"), {
          scale: 1.1,
          duration: 10,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.fromTo(
          bgRef.current,
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

      gsap.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        {
          y: 48,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "45% top",
            scrub: 0.5,
          },
        },
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="gm-hero relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0A0908]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[6%] will-change-transform"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={GRAND_MALL_HERO_MOBILE} />
          <img
            src={GRAND_MALL_HERO}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/55 via-[#0A0908]/25 to-[#0A0908]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,98,0.18),transparent)]" />
      </div>

      <div
        ref={gatesRef}
        className="pointer-events-none absolute inset-x-0 top-[12%] z-[2] flex justify-center px-4 md:top-[10%]"
      >
        <img
          src={GRAND_MALL_GATES}
          alt=""
          className="gm-gates-overlay w-full max-w-4xl opacity-95 md:max-w-5xl"
        />
      </div>

      <div className="relative z-[3] mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-8 pt-24 md:px-8 md:pb-12">
        <img
          ref={logoRef}
          src={GRAND_MALL_LOGO}
          alt={t("الشبيلي جراند مول", "AlShubaily Grand Mall")}
          className="gm-hero-logo mb-6 h-auto w-[min(72vw,320px)] md:w-[min(42vw,380px)]"
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-[3] mx-auto w-full max-w-6xl px-6 pb-20 md:px-8 md:pb-28"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/35 bg-[#C9A962]/10 px-4 py-1.5 backdrop-blur-md"
        >
          <ShoppingBag className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("تسوق · ترفيه · سينما", "Shopping · Entertainment · Cinema")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#C9A962]"
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
