import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Leaf, Zap } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { BINYAN_STATS, type BinyanStat } from "@/data/binyan-residence-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Building2, Zap, Leaf] as const;

function CountUp({
  target,
  suffix,
  active,
  format,
}: {
  target: number;
  suffix?: string;
  active: boolean;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 2.4,
      ease: "power2.out",
      onUpdate: () => {
        const n = Math.round(obj.val);
        el.textContent = `${format ? format(n) : n.toLocaleString()}${suffix ?? ""}`;
      },
    });
    return () => tween.kill();
  }, [active, format, suffix, target]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix ?? ""}
    </span>
  );
}

export function BinyanStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-stat-card]"),
      { y: 32, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => setActive(true),
        },
      },
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0EBE3] to-[#F8F5F0] py-12 md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 top-0 h-48 w-48 rounded-full bg-[#C4783A]/8 blur-3xl"
      />
      <div
        ref={ref}
        className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 md:gap-6 md:px-8"
      >
        {BINYAN_STATS.map((stat: BinyanStat, i) => {
          const Icon = STAT_ICONS[i] ?? Building2;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          const format =
            stat.value >= 1000000 ? (n: number) => n.toLocaleString() : undefined;
          return (
            <div
              key={stat.labelEn}
              data-stat-card
              className="min-w-[140px] flex-1 rounded-2xl border border-[#C4783A]/15 bg-white/90 px-5 py-5 text-center shadow-sm backdrop-blur-sm md:max-w-[220px] md:px-6 md:py-6"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C4783A]/15 to-[#3D4F63]/15 text-[#C4783A]">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-2xl font-bold text-[#3D4F63] md:text-3xl">
                <CountUp
                  target={stat.value}
                  suffix={suffix}
                  active={active}
                  format={format}
                />
              </p>
              <p className="mt-1 text-xs text-[#2A3340]/65 md:text-sm">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
