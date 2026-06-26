import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flower2, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_HERO, ZAHRAA_HERO_IMAGE } from "@/data/al-zahraa-content";

gsap.registerPlugin(ScrollTrigger);

export function ZahraaHero() {
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
          { scale: 1.04 },
          { scale: 1.14, duration: 16, ease: "none", repeat: -1, yoyo: true },
        );
        gsap.fromTo(
          bg,
          { y: "-5%" },
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
            y: 56,
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
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0c2a3a]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
      >
        <img
          src={ZAHRAA_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c2a3a]/40 via-[#1E6B8A]/10 to-[#0c2a3a]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_70%,rgba(30,107,138,0.25),transparent)]" />
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
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#7EC8E3]/40 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Flower2 className="h-3.5 w-3.5 text-[#7EC8E3]" strokeWidth={1.5} />
          <span className="text-xs font-medium text-white/90">
            {t("واجهتك للحياة العصرية", "Your Modern Living Front")}
          </span>
        </div>

        <p
          data-hero-reveal
          className="olympic-hero-eyebrow mt-4 flex items-center gap-2 text-[#7EC8E3]"
        >
          <MapPin className="h-3.5 w-3.5" />
          {t(ZAHRAA_HERO.eyebrowAr, ZAHRAA_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(ZAHRAA_HERO.titleAr, ZAHRAA_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="mt-2 text-lg font-medium text-[#A8DCE8] md:text-xl"
        >
          {t(ZAHRAA_HERO.taglineAr, ZAHRAA_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(ZAHRAA_HERO.subtitleAr, ZAHRAA_HERO.subtitleEn)}
        </p>
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line bg-[#7EC8E3]/50" />
      </div>
    </section>
  );
}
