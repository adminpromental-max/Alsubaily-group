import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, FileText, Users } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { CHAIRMAN_CONTENT, SITE_STATS } from "@/data/site-content";
import { HeroCinematic } from "./HeroCinematic";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type StatItem = {
  key: keyof typeof SITE_STATS;
  labelAr: string;
  labelEn: string;
  suffixAr?: string;
  suffixEn?: string;
  icon: typeof Building2;
};

const STATS: StatItem[] = [
  { key: "projects", labelAr: "عدد المشاريع", labelEn: "Projects", icon: Building2 },
  { key: "investors", labelAr: "عدد المستثمرين", labelEn: "Investors", suffixAr: "+", suffixEn: "+", icon: Users },
  { key: "requests", labelAr: "عدد الطلبات", labelEn: "Requests", suffixAr: "+", suffixEn: "+", icon: FileText },
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
      className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 md:mt-12 md:max-w-2xl"
    >
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.key}
            data-stat-card
            className="group rounded-2xl border border-[#C9A962]/25 bg-black/30 px-3 py-4 text-center backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/55 hover:bg-black/40 md:px-5 md:py-6"
          >
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] md:mb-3 md:h-11 md:w-11">
              <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-[#C9A962] sm:text-3xl md:text-4xl lg:text-5xl">
              <CountUp
                target={SITE_STATS[stat.key]}
                suffix={stat.suffixAr ? t(stat.suffixAr, stat.suffixEn ?? "") : undefined}
                active={active}
              />
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-white/70 sm:text-xs md:mt-2 md:text-sm">
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
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <HeroCinematic />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a962]">
          {t("مجموعة الشبيلي", "AlShubaily Group")}
        </p>
        <h1 className={cn(
          "mt-4 max-w-4xl text-4xl font-semibold leading-[1.15] text-white md:text-6xl lg:text-7xl",
          "drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]",
        )}>
          {t(
            "نبني وجهات تجسّد طموح المملكة",
            "Building destinations that embody the Kingdom's ambition",
          )}
        </h1>

        <HeroStats />
      </div>
    </section>
  );
}

export function ChairmanQuote() {
  const { t } = useLang();
  return (
    <div
      id="chairman"
      className="relative border-t border-white/10 bg-stone-dark px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a962]">
          {t(CHAIRMAN_CONTENT.eyebrowAr, CHAIRMAN_CONTENT.eyebrowEn)}
        </p>
        <blockquote className="mt-6 text-xl font-light leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
          “{t(CHAIRMAN_CONTENT.quoteAr, CHAIRMAN_CONTENT.quoteEn)}”
        </blockquote>
        <div className="mt-8">
          <p className="text-lg font-semibold text-white">
            {t(CHAIRMAN_CONTENT.nameAr, CHAIRMAN_CONTENT.nameEn)}
          </p>
          <p className="text-sm text-white/60">
            {t(CHAIRMAN_CONTENT.roleAr, CHAIRMAN_CONTENT.roleEn)}
          </p>
        </div>
      </div>
    </div>
  );
}
