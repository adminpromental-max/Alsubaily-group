import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  FileText,
  Globe,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { HeroCinematic } from "./HeroCinematic";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type StatItem = {
  value: number;
  labelAr: string;
  labelEn: string;
  suffixAr?: string;
  suffixEn?: string;
  icon: typeof Building2;
};

const STATS: StatItem[] = [
  { value: 18, labelAr: "عدد المشاريع", labelEn: "Projects", icon: Building2 },
  { value: 850, labelAr: "عدد المستثمرين", labelEn: "Investors", suffixAr: "+", suffixEn: "+", icon: Users },
  { value: 2400, labelAr: "عدد الطلبات", labelEn: "Requests", suffixAr: "+", suffixEn: "+", icon: FileText },
  { value: 12, labelAr: "مدن", labelEn: "Cities", suffixAr: "+", suffixEn: "+", icon: MapPin },
  { value: 25, labelAr: "سنوات الخبرة", labelEn: "Years", suffixAr: "+", suffixEn: "+", icon: Landmark },
  { value: 100, labelAr: "شراكات", labelEn: "Partners", suffixAr: "+", suffixEn: "+", icon: Globe },
];

function CountUp({ target, suffix, active }: { target: number; suffix?: string; active: boolean }) {
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
        el.textContent = `${Math.round(obj.val)}${suffix ?? ""}`;
      },
    });
    return () => { tween.kill(); };
  }, [active, suffix, target]);
  return <span ref={ref} className="tabular-nums">0{suffix ?? ""}</span>;
}

function HeroStats() {
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
        stagger: 0.15,
        delay: 0.3,
        onStart: () => setActive(true),
      },
    );
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6 md:gap-4"
    >
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.labelEn}
            data-stat-card
            className="group rounded-xl border border-[#C9A962]/25 bg-black/40 px-2 py-3 text-center backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/55 hover:bg-black/50 sm:rounded-2xl sm:px-3 sm:py-4 md:px-4 md:py-5"
          >
            <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] sm:mb-2 sm:h-9 sm:w-9 md:mb-2.5 md:h-10 md:w-10">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-semibold text-[#C9A962] sm:text-2xl md:text-3xl">
              <CountUp
                target={stat.value}
                suffix={stat.suffixAr ? t(stat.suffixAr, stat.suffixEn ?? "") : undefined}
                active={active}
              />
            </p>
            <p className="mt-0.5 text-[9px] tracking-wide text-white/70 sm:text-[10px] md:mt-1 md:text-xs">
              {t(stat.labelAr, stat.labelEn)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function HeroChairman() {
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
            y: "12%",
            scale: 1.12,
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
            y: 80,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "60% top",
              scrub: 0.5,
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
      id="hero"
      data-parallax-section
      className="hero-full-screen relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[10%] -bottom-[10%] will-change-transform"
      >
        <HeroCinematic />
      </div>

      <div className="flex-1" aria-hidden />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8 will-change-transform md:px-8 md:pb-10"
      >
        <div className="mb-5 text-center md:mb-7">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a962]">
            {t("مجموعة الشبيلي", "AlShubaily Group")}
          </p>
          <h1
            className={cn(
              "mx-auto mt-3 max-w-4xl text-[clamp(1.35rem,3.2vw,2.35rem)] font-semibold leading-tight text-white",
              "sm:whitespace-nowrap drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]",
            )}
          >
            {t(
              "نبني وجهات تجسّد روح المملكة",
              "Building destinations that embody the Kingdom's spirit",
            )}
          </h1>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
