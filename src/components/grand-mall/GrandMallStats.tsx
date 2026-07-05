import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_STATS, type GrandMallStat } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

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
      duration: 2.4,
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

function StatCard({
  stat,
  active,
  className,
}: {
  stat: GrandMallStat;
  active: boolean;
  className?: string;
}) {
  const { t } = useLang();
  const suffix = stat.suffixAr ? t(stat.suffixAr, stat.suffixEn ?? "") : undefined;

  return (
    <article
      className={cn(
        "gm-stat-card group relative overflow-hidden rounded-2xl border border-[#C9A962]/20 bg-gradient-to-br from-[#141210] to-[#0A0908] p-5 transition-colors hover:border-[#C9A962]/45 md:p-6",
        stat.featured && "md:col-span-2 md:row-span-2 md:p-8",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -end-6 -top-6 h-24 w-24 rounded-full bg-[#C9A962]/10 blur-2xl transition-opacity group-hover:opacity-150"
        aria-hidden
      />
      <p
        className={cn(
          "font-heading font-bold text-white",
          stat.featured ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl",
        )}
      >
        <CountUp target={stat.value} suffix={suffix} active={active} />
      </p>
      <p
        className={cn(
          "mt-2 text-[#C9A962]/90",
          stat.featured ? "text-sm md:text-base" : "text-xs md:text-sm",
        )}
      >
        {t(stat.labelAr, stat.labelEn)}
      </p>
    </article>
  );
}

export function GrandMallStats() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        once: true,
        onEnter: () => setActive(true),
      });

      gsap.fromTo(
        section.querySelectorAll("[data-stat-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const featured = GRAND_MALL_STATS.find((s) => s.featured);
  const rest = GRAND_MALL_STATS.filter((s) => !s.featured);

  return (
    <section
      ref={sectionRef}
      className="gm-stats-bento relative z-[4] -mt-2 px-4 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8"
    >
      <div className="mx-auto max-w-6xl">
        <div data-stat-reveal className="mb-6 text-center md:mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("أرقام المشروع", "Project at a Glance")}
          </p>
          <h2 className="font-heading mt-2 text-xl font-bold text-white md:text-2xl">
            {t("وجهة استثمارية بمقاييس عالمية", "An Investment Destination at Global Scale")}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {featured ? (
            <div data-stat-reveal className="col-span-2 row-span-2">
              <StatCard stat={featured} active={active} className="h-full min-h-[180px] md:min-h-[240px]" />
            </div>
          ) : null}
          {rest.map((stat) => (
            <div key={stat.labelEn} data-stat-reveal>
              <StatCard stat={stat} active={active} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
