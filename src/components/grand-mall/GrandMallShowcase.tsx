import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clapperboard, Film, Gamepad2, Store, Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  GRAND_MALL_FEATURES,
  GRAND_MALL_SHOWCASE,
} from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

const FEATURE_ICONS = {
  store: Store,
  waves: Waves,
  gamepad: Gamepad2,
  film: Film,
} as const;

export function GrandMallShowcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-showcase-img]"),
        { scale: 1.06, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        },
      );
      gsap.fromTo(
        section.querySelectorAll("[data-showcase-badge]"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const positions = [
    "top-[12%] start-[8%]",
    "top-[18%] end-[6%]",
    "bottom-[22%] start-[5%]",
    "bottom-[14%] end-[8%]",
  ] as const;

  return (
    <section ref={sectionRef} className="gm-section gm-section--darker">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("نظرة شاملة", "Overview")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("وجهة متكاملة", "All-in-One Destination")}
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="gm-showcase-frame relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#C9A962]/20">
            <img
              data-showcase-img
              src={GRAND_MALL_SHOWCASE}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/50 via-transparent to-[#0A0908]/20" />

            {GRAND_MALL_FEATURES.map((feat, i) => {
              const FIcon = FEATURE_ICONS[feat.icon];
              return (
                <button
                  key={feat.icon}
                  type="button"
                  data-showcase-badge
                  className={`gm-showcase-badge absolute ${positions[i]} flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-md transition-transform duration-300 hover:scale-105 md:px-4 md:py-2.5`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                >
                  <FIcon
                    className={`h-4 w-4 transition-colors ${hovered === i ? "text-[#C9A962]" : "text-white/80"}`}
                  />
                  <span className="text-xs font-semibold text-white md:text-sm">
                    {t(feat.labelAr, feat.labelEn)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            {t(
              "مرّر واستكشف — كل منطقة لها هويتها داخل المول",
              "Scroll and explore — each zone has its own identity within the mall",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
