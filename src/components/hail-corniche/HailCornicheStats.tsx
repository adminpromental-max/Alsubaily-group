import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Map, Route } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_CORNICHE_STATS,
  type CornicheStat,
} from "@/data/hail-corniche-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Map, Award, Route] as const;

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

export function HailCornicheStats() {
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
    <section className="relative bg-[#F0EBE3] py-10 md:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(139,119,90,0.06) 0px, rgba(139,119,90,0.06) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-4xl grid-cols-3 gap-3 px-6 md:gap-5 md:px-8"
      >
        {HAIL_CORNICHE_STATS.map((stat: CornicheStat, i) => {
          const Icon = STAT_ICONS[i] ?? Map;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          const format =
            stat.value >= 1000000 ? (n: number) => n.toLocaleString() : undefined;
          const displayValue =
            stat.textAr && stat.textEn
              ? t(stat.textAr, stat.textEn)
              : null;

          return (
            <div
              key={stat.labelEn}
              data-stat-card
              className="rounded-2xl border border-[#8B775A]/25 bg-white/80 px-3 py-4 text-center backdrop-blur-sm md:px-5 md:py-6"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#4A7C59]/25 bg-[#4A7C59]/10 text-[#4A7C59] md:mb-3 md:h-10 md:w-10">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-semibold text-[#4A7C59] sm:text-xl md:text-2xl">
                {displayValue ?? (
                  <CountUp
                    target={stat.value}
                    suffix={suffix}
                    active={active}
                    format={format}
                  />
                )}
              </p>
              <p className="mt-1 text-[10px] text-[#1a1814]/65 sm:text-xs md:text-sm">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
      <p className="relative mt-6 text-center text-xs tracking-wide text-[#8B775A]">
        {t("مشروع مكتمل · تجاري / سياحي", "Completed · Commercial / Tourism")}
      </p>
    </section>
  );
}
