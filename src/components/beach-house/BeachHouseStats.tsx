import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Layers, Ruler, Palmtree, UtensilsCrossed, Sailboat } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  BEACH_HOUSE_COMPONENTS,
  BEACH_HOUSE_DETAILS,
  BEACH_HOUSE_STATS,
  type BeachHouseStat,
} from "@/data/beach-house-content";

gsap.registerPlugin(ScrollTrigger);

const COMPONENT_ICONS = {
  palm: Palmtree,
  dining: UtensilsCrossed,
  sail: Sailboat,
} as const;

const STAT_ICONS = [Ruler, Layers, Building2] as const;

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

export function BeachHouseStats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-stat-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
          onEnter: () => setActive(true),
        },
      },
    );
  }, []);

  return (
    <section ref={ref} className="bh-stats bg-[#E8DCC8] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BEACH_HOUSE_STATS.map((stat: BeachHouseStat, i) => {
            const Icon = STAT_ICONS[i] ?? Ruler;
            return (
              <div
                key={stat.labelEn}
                data-stat-reveal
                className="rounded-2xl border border-[#2C2416]/10 bg-white/60 p-6 backdrop-blur-sm"
              >
                <Icon className="mb-3 h-5 w-5 text-[#8A6A2E]" strokeWidth={1.5} />
                <p className="font-heading text-2xl font-bold text-[#2C2416] md:text-3xl">
                  <CountUp
                    target={stat.value}
                    suffix={t(stat.suffixAr ?? "", stat.suffixEn ?? "")}
                    active={active}
                  />
                </p>
                <p className="mt-1 text-sm text-[#2C2416]/65">
                  {t(stat.labelAr, stat.labelEn)}
                </p>
              </div>
            );
          })}

          <div
            data-stat-reveal
            className="rounded-2xl border border-[#2C2416]/10 bg-white/60 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-2"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A6A2E]">
              {t("نوع التطوير", "Development Type")}
            </p>
            <p className="mt-2 font-heading text-lg font-semibold text-[#2C2416]">
              {t(BEACH_HOUSE_DETAILS.devTypeAr, BEACH_HOUSE_DETAILS.devTypeEn)}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-[#8A6A2E]">
              {t("استخدام المشروع", "Project Use")}
            </p>
            <p className="mt-2 font-heading text-lg font-semibold text-[#2C2416]">
              {t(BEACH_HOUSE_DETAILS.useAr, BEACH_HOUSE_DETAILS.useEn)}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {BEACH_HOUSE_COMPONENTS.map((item) => {
            const Icon = COMPONENT_ICONS[item.icon];
            return (
              <div
                key={item.id}
                data-stat-reveal
                className="flex items-center gap-4 rounded-2xl border border-[#2C2416]/10 bg-[#2C2416] p-5 text-white"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A962]/20">
                  <Icon className="h-6 w-6 text-[#C9A962]" strokeWidth={1.5} />
                </span>
                <p className="font-heading text-lg font-semibold">
                  {t(item.titleAr, item.titleEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
