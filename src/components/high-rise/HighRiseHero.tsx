import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, MapPin, Waves, Wind } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HIGH_RISE_HERO,
  HIGH_RISE_HERO_IMAGE,
  HIGH_RISE_STATS,
  type HighRiseStat,
} from "@/data/high-rise-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Waves, Building2, Building2, Wind] as const;

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix?: string;
  active: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.val)}${suffix ?? ""}`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [active, suffix, target]);
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix ?? ""}
    </span>
  );
}

function HighRiseHeroStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-stat-card]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.45,
        onStart: () => setActive(true),
      },
    );
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10 md:grid-cols-4"
    >
      {HIGH_RISE_STATS.map((stat: HighRiseStat, i) => {
        const Icon = STAT_ICONS[i] ?? Building2;
        const suffix = stat.suffixAr
          ? t(stat.suffixAr, stat.suffixEn ?? "")
          : undefined;
        return (
          <div
            key={stat.labelEn}
            data-stat-card
            className="rounded-2xl border border-[#C9A962]/25 bg-black/40 px-3 py-4 text-center backdrop-blur-md md:px-4 md:py-5"
          >
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962]">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-semibold text-[#C9A962] sm:text-2xl md:text-3xl">
              <CountUp target={stat.value} suffix={suffix} active={active} />
            </p>
            <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
              {t(stat.labelAr, stat.labelEn)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function HighRiseHero() {
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
            y: "10%",
            scale: 1.1,
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
      id="high-rise-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#06080c]"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
      >
        <img
          src={HIGH_RISE_HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080c]/50 via-[#06080c]/20 to-[#06080c]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_80%,rgba(74,120,180,0.15),transparent)]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:px-8 md:pb-16"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <p data-hero-reveal className="olympic-hero-eyebrow mt-4 flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" />
          {t(HIGH_RISE_HERO.eyebrowAr, HIGH_RISE_HERO.eyebrowEn)}
        </p>
        <h1 data-hero-reveal className="olympic-hero-title mt-1 max-w-4xl">
          {t(HIGH_RISE_HERO.titleAr, HIGH_RISE_HERO.titleEn)}
        </h1>
        <p data-hero-reveal className="mt-2 text-lg font-medium text-[#7eb8e8] md:text-xl">
          {t(HIGH_RISE_HERO.taglineAr, HIGH_RISE_HERO.taglineEn)}
        </p>
        <p data-hero-reveal className="olympic-hero-sub mt-4 max-w-2xl">
          {t(HIGH_RISE_HERO.subtitleAr, HIGH_RISE_HERO.subtitleEn)}
        </p>

        <HighRiseHeroStats />
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line" />
      </div>
    </section>
  );
}
