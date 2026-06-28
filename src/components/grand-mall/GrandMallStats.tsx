import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Building2,
  Car,
  Film,
  ShoppingBag,
  Waves,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_STATS, type GrandMallStat } from "@/data/grand-mall-content";

const STAT_ICONS = [Building2, ShoppingBag, Film, Car, Waves] as const;

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
        el.textContent = `${Math.round(obj.val).toLocaleString()}${suffix ?? ""}`;
      },
    });
    return () => tween.kill();
  }, [active, suffix, target]);
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix ?? ""}
    </span>
  );
}

export function GrandMallStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="gm-stats-strip relative z-[4] border-y border-[#C9A962]/15 bg-[#0A0908]/95 backdrop-blur-md">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#C9A962]/10 px-4 py-6 md:grid-cols-5 md:px-8 md:py-8"
      >
        {GRAND_MALL_STATS.map((stat: GrandMallStat, i) => {
          const Icon = STAT_ICONS[i] ?? Building2;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          return (
            <div
              key={stat.labelEn}
              className="flex flex-col items-center bg-[#0A0908] px-2 py-2 text-center md:px-3"
            >
              <Icon className="mb-2 h-4 w-4 text-[#C9A962]/80" strokeWidth={1.5} />
              <p className="text-base font-bold text-white md:text-xl">
                <CountUp target={stat.value} suffix={suffix} active={active} />
              </p>
              <p className="mt-1 text-[10px] text-white/55 md:text-xs">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
