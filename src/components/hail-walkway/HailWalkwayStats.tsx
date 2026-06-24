import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, ShoppingBag, Store, Users } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_WALKWAY_STATS,
  type WalkwayStat,
} from "@/data/hail-walkway-content";

gsap.registerPlugin(ScrollTrigger);

const STAT_ICONS = [Building2, Users, Store, ShoppingBag] as const;

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

export function HailWalkwayStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll<HTMLElement>("[data-stat-card]"),
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
    <section className="relative bg-[#FAF8F4] py-10 md:py-14">
      <div
        ref={ref}
        className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-6 sm:gap-4 md:gap-5 md:px-8"
      >
        {HAIL_WALKWAY_STATS.map((stat: WalkwayStat, i) => {
          const Icon = STAT_ICONS[i] ?? Building2;
          const suffix = stat.suffixAr
            ? t(stat.suffixAr, stat.suffixEn ?? "")
            : undefined;
          return (
            <div
              key={stat.labelEn}
              data-stat-card
              className="group relative overflow-hidden rounded-2xl border border-[#C9A962]/20 bg-white px-3 py-4 text-center shadow-sm transition-all duration-500 hover:border-[#C9A962]/45 hover:shadow-md md:px-5 md:py-6"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A962]/25 bg-[#C9A962]/10 text-[#8A6A2E] md:mb-3 md:h-10 md:w-10">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <p className="text-xl font-semibold text-[#8A6A2E] sm:text-2xl md:text-3xl">
                <CountUp target={stat.value} suffix={suffix} active={active} />
              </p>
              <p className="mt-1 text-[10px] leading-snug tracking-wide text-[#0A0A0A]/65 sm:text-xs md:text-sm">
                {t(stat.labelAr, stat.labelEn)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
