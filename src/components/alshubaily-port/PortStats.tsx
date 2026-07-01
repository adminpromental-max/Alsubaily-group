import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Anchor, Building2, Car, ShoppingBag, Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_STATS, type PortStat } from "@/data/port-content";

const STAT_ICONS = [Waves, Building2, Anchor, ShoppingBag, Car] as const;

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

export function PortStats() {
  const { t } = useLang();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="port-stats-strip relative z-[4] border-y border-[#2E8FA8]/12 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#2E8FA8]/10 px-4 py-6 md:grid-cols-5 md:px-8 md:py-8">
        {PORT_STATS.map((stat: PortStat, i) => {
          const Icon = STAT_ICONS[i] ?? Waves;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          return (
            <div
              key={stat.labelEn}
              className="flex flex-col items-center bg-white px-2 py-2 text-center md:px-3"
            >
              <Icon className="mb-2 h-4 w-4 text-[#2E8FA8]" strokeWidth={1.5} />
              <p className="text-base font-bold text-[#1A4A6E] md:text-xl">
                <CountUp target={stat.value} suffix={suffix} active={active} />
              </p>
              <p className="mt-1 text-[10px] text-[#5A8499] md:text-xs">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
