import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Car,
  Film,
  ShoppingBag,
  Waves,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_STATS, type GrandMallStat } from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

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
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-stat-card]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
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
    <section className="relative bg-[#FAF9F6] py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-6xl px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8A6A2E]">
          {t("أرقام المول", "Mall in Numbers")}
        </p>
        <h2 className="font-heading mt-2 text-2xl font-bold text-[#0A0908] md:text-3xl">
          {t("جراند مول بالأرقام", "Grand Mall by the Numbers")}
        </h2>
        <p className="mt-2 text-xs text-[#5C5348]/70">
          {t("* أرقام تقديرية — قابلة للتحديث", "* Estimated figures — subject to update")}
        </p>
      </div>
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-6 md:grid-cols-5 md:gap-4 md:px-8"
      >
        {GRAND_MALL_STATS.map((stat: GrandMallStat, i) => {
          const Icon = STAT_ICONS[i] ?? Building2;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          return (
            <div
              key={stat.labelEn}
              data-stat-card
              className="rounded-2xl border border-[#C9A962]/20 bg-white px-3 py-5 text-center shadow-sm md:px-4 md:py-6"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A962]/15 text-[#8A6A2E]">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-bold text-[#0A0908] md:text-xl">
                {stat.textAr ? (
                  t(stat.textAr, stat.textEn ?? "")
                ) : (
                  <CountUp target={stat.value} suffix={suffix} active={active} />
                )}
              </p>
              <p className="mt-1 text-[10px] text-[#5C5348] md:text-xs">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
