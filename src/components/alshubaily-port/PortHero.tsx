import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_HERO_COPY, PORT_HERO_IMAGE } from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortHero() {
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
        { scale: 1.06, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" },
      );
      gsap.fromTo(
        contentRef.current?.querySelectorAll("[data-hero-reveal]") ?? [],
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.35, ease: "power3.out" },
      );

      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: "-2%" },
          {
            y: "5%",
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
      className="port-hero relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-[#D6EBF5]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[4%] -bottom-[4%] will-change-transform"
      >
        <img
          src={PORT_HERO_IMAGE}
          alt={t("الشبيلي بورت", "AlShubaily Port")}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="port-hero-vignette absolute inset-0 bg-gradient-to-b from-[#EAF4F9]/40 via-transparent to-[#1A4A6E]/75" />
      </div>

      <div
        ref={contentRef}
        className="port-section relative z-[2] mx-auto w-full max-w-6xl pb-16 pt-28 md:pb-24"
      >
        <Link to="/" hash="map" className="olympic-back-link !text-white/90" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 backdrop-blur-md"
        >
          <Anchor className="h-3.5 w-3.5 text-white" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white">
            {t("مارينا · سكن · تجزئة", "Marina · Residential · Retail")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-5 flex items-center gap-2 !text-[#B8E8F0]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(PORT_HERO_COPY.eyebrowAr, PORT_HERO_COPY.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl text-white">
          {t(PORT_HERO_COPY.titleAr, PORT_HERO_COPY.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#E8F7FA] md:text-xl"
        >
          {t(PORT_HERO_COPY.taglineAr, PORT_HERO_COPY.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl !text-white/85">
          {t(PORT_HERO_COPY.subtitleAr, PORT_HERO_COPY.subtitleEn)}
        </p>

        <div data-hero-reveal className="port-scroll-hint mt-10 hidden md:flex" aria-hidden>
          <span className="port-scroll-line" />
        </div>
      </div>
    </section>
  );
}
