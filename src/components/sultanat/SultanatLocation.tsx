import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPin, Sun } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  SULTANAT_LOCATION,
  SULTANAT_STATS,
  type SultanatStat,
} from "@/data/sultanat-content";

gsap.registerPlugin(ScrollTrigger);

const PIN_ICONS = [Anchor, MapPin, Sun] as const;

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
    return () => {
      tween.kill();
    };
  }, [active, format, suffix, target]);
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix ?? ""}
    </span>
  );
}

export function SultanatLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const imgWrap = imageRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-loc-reveal]"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );

      if (imgWrap) {
        gsap.fromTo(
          imgWrap,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: imgWrap, start: "top 80%", once: true },
          },
        );
      }

      gsap.fromTo(
        el.querySelectorAll("[data-pin]"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
          stagger: 0.15,
          delay: 0.5,
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
          onComplete: () => setStatsActive(true),
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5EDE0] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-24 top-0 h-64 w-64 rounded-full bg-[#C45C3E]/8 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div
          ref={imageRef}
          data-loc-reveal
          className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#2C1810]/15"
        >
          <img
            src={SULTANAT_LOCATION.image}
            alt={t(SULTANAT_LOCATION.subtitleAr, SULTANAT_LOCATION.subtitleEn)}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
            {SULTANAT_LOCATION.pins.map((pin, i) => {
              const Icon = PIN_ICONS[i] ?? MapPin;
              return (
                <span
                  key={pin.labelEn}
                  data-pin
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs text-white backdrop-blur-md"
                >
                  <Icon className="h-3 w-3 text-[#C9A962]" />
                  {t(pin.labelAr, pin.labelEn)}
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <p data-loc-reveal className="text-xs font-medium uppercase tracking-[0.35em] text-[#C45C3E]">
            {t(SULTANAT_LOCATION.titleAr, SULTANAT_LOCATION.titleEn)}
          </p>
          <h2
            data-loc-reveal
            className="mt-2 font-heading text-3xl font-bold text-[#2C1810] md:text-4xl"
          >
            {t(SULTANAT_LOCATION.subtitleAr, SULTANAT_LOCATION.subtitleEn)}
          </h2>
          <p data-loc-reveal className="mt-4 text-sm leading-8 text-[#2C1810]/75 md:text-base">
            {t(SULTANAT_LOCATION.bodyAr, SULTANAT_LOCATION.bodyEn)}
          </p>

          <div data-loc-reveal className="mt-8 grid grid-cols-2 gap-4">
            {SULTANAT_STATS.map((stat: SultanatStat) => {
              const suffix = stat.suffixAr
                ? t(stat.suffixAr, stat.suffixEn ?? "")
                : undefined;
              const format =
                stat.value >= 1000
                  ? (n: number) => n.toLocaleString()
                  : undefined;
              return (
                <div
                  key={stat.labelEn}
                  className="rounded-2xl border border-[#C45C3E]/20 bg-white/70 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-[#C45C3E] md:text-3xl">
                    <CountUp
                      target={stat.value}
                      suffix={suffix}
                      active={statsActive}
                      format={format}
                    />
                  </p>
                  <p className="mt-1 text-xs text-[#2C1810]/65">
                    {t(stat.labelAr, stat.labelEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
