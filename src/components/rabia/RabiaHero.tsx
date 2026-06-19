import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { Building2, Compass, MapPin, MoonStar } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { rabiaAsset } from "@/data/asset-paths";
import {
  RABIA_HERO,
  RABIA_STATS,
  RABIA_VIDEO_URL,
  type RabiaStat,
} from "@/data/rabia-content";
import { cn } from "@/lib/utils";

const STAT_ICONS = [Building2, MoonStar, MapPin, Compass] as const;

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
        el.textContent = `${Math.round(obj.val).toLocaleString("en-US")}${suffix ?? ""}`;
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

function RabiaHeroStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-stat-card]");
    gsap.fromTo(
      items,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.5,
        onStart: () => setActive(true),
      },
    );
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10 md:grid-cols-4 md:gap-5"
    >
      {RABIA_STATS.map((stat: RabiaStat, i) => {
        const Icon = STAT_ICONS[i] ?? Building2;
        const suffix = stat.suffixAr
          ? t(stat.suffixAr, stat.suffixEn ?? "")
          : undefined;
        return (
          <div
            key={stat.labelEn}
            data-stat-card
            className="group relative overflow-hidden rounded-2xl border border-[#C9A962]/25 bg-black/40 px-3 py-4 text-center backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/55 hover:bg-black/55 md:px-4 md:py-5"
          >
            {/* Ambient glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] md:mb-3 md:h-10 md:w-10">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-semibold text-[#C9A962] sm:text-2xl md:text-3xl lg:text-4xl">
              <CountUp target={stat.value} suffix={suffix} active={active} />
            </p>
            <p className="mt-1 text-[10px] leading-snug tracking-wide text-white/70 sm:text-xs md:text-sm">
              {t(stat.labelAr, stat.labelEn)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function RabiaHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const poster = rabiaAsset("WhatsApp Image 2026-06-18 at 10.07.41 PM.jpeg");

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setCanPlay(true);
    v.addEventListener("playing", onPlay, { once: true });
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlay);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={poster}
        alt=""
        aria-hidden
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          canPlay ? "opacity-0" : "opacity-100",
        )}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={RABIA_VIDEO_URL}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Deep cinematic gradient — darker at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/85" />
      {/* Subtle golden tint layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(201,169,98,0.08),transparent)]" />
    </div>
  );
}

export function RabiaHero() {
  const { t } = useLang();
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-hero-reveal]");
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      },
    );
  }, []);

  return (
    <section
      id="rabia-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black"
    >
      <RabiaHeroVideo />

      <div
        ref={headingRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32"
      >
        <Link to="/" hash="map" className="olympic-back-link" data-hero-reveal>
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <p data-hero-reveal className="olympic-hero-eyebrow mt-4">
          {t(RABIA_HERO.eyebrowAr, RABIA_HERO.eyebrowEn)}
        </p>
        <h1
          data-hero-reveal
          className="olympic-hero-title mt-1 max-w-4xl"
        >
          {t(RABIA_HERO.titleAr, RABIA_HERO.titleEn)}
        </h1>
        <p
          data-hero-reveal
          className="olympic-hero-sub mt-4 max-w-2xl"
        >
          {t(RABIA_HERO.subtitleAr, RABIA_HERO.subtitleEn)}
        </p>

        <RabiaHeroStats />
      </div>

      <div className="olympic-hero-scroll pointer-events-none" aria-hidden>
        <div className="olympic-scroll-line" />
      </div>
    </section>
  );
}
