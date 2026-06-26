import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, MapPinned, Ruler } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_STATS, type RabiaRoadStat } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Ruler, MapPinned, Clock] as const;

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
        const n = obj.val;
        const displayed = format ? format(Math.round(n)) : String(Math.round(n));
        el.textContent = `${displayed}${suffix ?? ""}`;
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

export function RabiaRoadStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-stat-card]"),
      { y: 36, opacity: 0 },
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
    <section className="relative bg-[#F5EDE0] py-12 md:py-16">
      <div
        ref={ref}
        className="mx-auto grid max-w-4xl grid-cols-3 gap-3 px-6 md:gap-5 md:px-8"
      >
        {RABIA_ROAD_STATS.map((stat: RabiaRoadStat, i) => {
          const Icon = STAT_ICONS[i] ?? Ruler;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          const format =
            stat.value >= 1000000 ? (n: number) => n.toLocaleString() : undefined;
          return (
            <div
              key={stat.labelEn}
              data-stat-card
              className="rounded-2xl border border-[#6B1D3A]/15 bg-white/70 px-3 py-5 text-center shadow-sm backdrop-blur-sm md:px-5 md:py-6"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6B1D3A]/15 to-[#C4A574]/25 text-[#6B1D3A] md:mb-3">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-bold text-[#3D2314] sm:text-xl md:text-2xl">
                {stat.textAr ? (
                  t(stat.textAr, stat.textEn ?? "")
                ) : (
                  <CountUp
                    target={stat.value}
                    suffix={suffix}
                    active={active}
                    format={format}
                  />
                )}
              </p>
              <p className="mt-1 text-[10px] text-[#1a1814]/65 sm:text-xs">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
