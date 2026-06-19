import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowUp, Building2, Home, Layers } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { tidaraAsset } from "@/data/asset-paths";
import {
  TIDARA_HERO,
  TIDARA_STATS,
  TIDARA_VIDEO_URL,
  type TidaraStat,
} from "@/data/tidara-content";
import { cn } from "@/lib/utils";

const STAT_ICONS = [Building2, Layers, ArrowUp, Home] as const;

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
      duration: 2,
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

function TidaraHeroStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-stat-card]");
    gsap.fromTo(
      items,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
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
      className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10 md:grid-cols-4 md:gap-5"
    >
      {TIDARA_STATS.map((stat: TidaraStat, i) => {
        const Icon = STAT_ICONS[i] ?? Building2;
        const suffix = stat.suffixAr
          ? t(stat.suffixAr, stat.suffixEn ?? "")
          : undefined;
        return (
          <div
            key={stat.labelEn}
            data-stat-card
            className="group rounded-2xl border border-[#C9A962]/25 bg-black/35 px-3 py-4 text-center backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/55 hover:bg-black/45 md:px-4 md:py-5"
          >
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

function TidaraHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const poster = tidaraAsset("Hero.png");

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
        src={TIDARA_VIDEO_URL}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/88" />
    </div>
  );
}

export function TidaraHero() {
  const { t } = useLang();

  return (
    <section
      id="tidara-hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black"
    >
      <TidaraHeroVideo />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
        <Link to="/" hash="map" className="olympic-back-link">
          {t("← العودة للمشاريع", "← Back to projects")}
        </Link>

        <p className="olympic-hero-eyebrow mt-4">
          {t(TIDARA_HERO.eyebrowAr, TIDARA_HERO.eyebrowEn)}
        </p>
        <h1 className="olympic-hero-title mt-1 max-w-4xl">
          {t(TIDARA_HERO.titleAr, TIDARA_HERO.titleEn)}
        </h1>
        <p className="olympic-hero-sub mt-4 max-w-xl">
          {t(TIDARA_HERO.subtitleAr, TIDARA_HERO.subtitleEn)}
        </p>

        <TidaraHeroStats />
      </div>

      <div
        className="olympic-hero-scroll pointer-events-none"
        aria-hidden
      >
        <div className="olympic-scroll-line" />
      </div>
    </section>
  );
}
