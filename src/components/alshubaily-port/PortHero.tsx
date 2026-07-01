import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  PORT_HERO_COPY,
  PORT_HERO_POSTER,
  PORT_VIDEO_URL,
} from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortHero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero) return;

    video?.play().catch(() => {});

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll("[data-hero-reveal]") ?? [],
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.4, ease: "power3.out" },
      );

      gsap.fromTo(
        hero.querySelector(".port-hero-vignette"),
        { opacity: 0.6 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="port-hero relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0B1624]"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={PORT_HERO_POSTER}
          className="h-full w-full object-cover"
        >
          <source src={PORT_VIDEO_URL} type="video/quicktime" />
          <source src={PORT_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="port-hero-vignette absolute inset-0 bg-gradient-to-b from-[#0B1624]/55 via-[#0B1624]/25 to-[#0B1624]/92" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
          aria-hidden
        />
      </div>

      <div
        ref={contentRef}
        className="port-section relative z-[2] mx-auto w-full max-w-6xl pb-16 pt-28 md:pb-24"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <div
          data-hero-reveal
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#4ECDC4]/35 bg-[#0B1624]/40 px-4 py-1.5 backdrop-blur-md"
        >
          <Anchor className="h-3.5 w-3.5 text-[#4ECDC4]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("مارينا · سكن · تجزئة", "Marina · Residential · Retail")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-5 flex items-center gap-2 text-[#4ECDC4]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(PORT_HERO_COPY.eyebrowAr, PORT_HERO_COPY.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(PORT_HERO_COPY.titleAr, PORT_HERO_COPY.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#A8E6E0] md:text-xl"
        >
          {t(PORT_HERO_COPY.taglineAr, PORT_HERO_COPY.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(PORT_HERO_COPY.subtitleAr, PORT_HERO_COPY.subtitleEn)}
        </p>

        <div
          data-hero-reveal
          className="port-scroll-hint mt-10 hidden md:flex"
          aria-hidden
        >
          <span className="port-scroll-line" />
        </div>
      </div>
    </section>
  );
}
