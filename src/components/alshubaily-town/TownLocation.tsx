import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  GraduationCap,
  Palmtree,
  Plane,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { TOWN_LOCATION } from "@/data/alshubaily-town-content";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHT_ICONS = [Building2, Palmtree, Sparkles, GraduationCap, Plane] as const;

export function TownLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2A1E16] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(201,169,98,0.12),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t(TOWN_LOCATION.titleAr, TOWN_LOCATION.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(TOWN_LOCATION.subtitleAr, TOWN_LOCATION.subtitleEn)}
          </h2>

          <ul className="mt-8 space-y-3">
            {TOWN_LOCATION.highlights.map((item, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? Building2;
              return (
                <li
                  key={item.labelEn}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#C9A962]" strokeWidth={1.5} />
                  <span className="text-sm text-white/85">{t(item.labelAr, item.labelEn)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          data-loc-reveal
          className="overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl"
        >
          <img
            src={TOWN_LOCATION.image}
            alt={t(TOWN_LOCATION.titleAr, TOWN_LOCATION.titleEn)}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
