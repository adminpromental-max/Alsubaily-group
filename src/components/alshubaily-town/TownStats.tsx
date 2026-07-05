import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Hotel, Ruler, Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { TOWN_STATS, type TownStat } from "@/data/alshubaily-town-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Ruler, Building2, Hotel, Waves] as const;

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

export function TownStats() {
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
        stagger: 0.1,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EDE3] to-[#FAF6F0] py-12 md:py-16">
      <div
        ref={ref}
        className="relative mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4 md:gap-5 md:px-8"
      >
        {TOWN_STATS.map((stat: TownStat, i) => {
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
              className="rounded-2xl border border-[#5C4033]/12 bg-white/90 px-4 py-5 text-center shadow-sm md:px-5 md:py-6"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5C4033]/12 to-[#C9A962]/18 text-[#5C4033]">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-xl font-bold text-[#5C4033] md:text-2xl">
                <CountUp
                  target={stat.value}
                  suffix={suffix}
                  active={active}
                  format={format}
                />
              </p>
              <p className="mt-1 text-xs text-[#3D2A1E]/65 md:text-sm">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
