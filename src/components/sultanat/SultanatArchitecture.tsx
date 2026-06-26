import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Anchor,
  Home,
  Palmtree,
  Sparkles,
  Waves,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { SULTANAT_ARCHITECTURE } from "@/data/sultanat-content";

gsap.registerPlugin(ScrollTrigger);

const ARCH_ICONS = [Home, Sparkles, Sparkles, Palmtree, Anchor] as const;

export function SultanatArchitecture() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-arch-card]"),
      { y: 40, opacity: 0, rotateY: -12 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1a1209] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(196,92,62,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("الطراز المعماري", "Architectural Style")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#E8D5C4] md:text-4xl">
            {t("البحر الأحمر والخليج العربي", "Red Sea & Arabian Gulf")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#E8D5C4]/65">
            {t(
              "Spanish Revival — قرميد، أقواس، وخضرة استوائية على ضفاف الخليج",
              "Spanish Revival — terracotta, arches & tropical greenery on the Gulf",
            )}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SULTANAT_ARCHITECTURE.map((item, i) => {
            const Icon = ARCH_ICONS[i] ?? Waves;
            return (
              <article
                key={item.id}
                data-arch-card
                className="group relative overflow-hidden rounded-2xl border border-[#C9A962]/20 bg-[#2C1810]/80 p-5 backdrop-blur-sm transition-colors hover:border-[#C45C3E]/40 hover:bg-[#2C1810]"
                style={{ perspective: "800px" }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#C45C3E]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-bold text-[#E8D5C4]">
                  {t(item.titleAr, item.titleEn)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#E8D5C4]/60">
                  {t(item.descAr, item.descEn)}
                </p>
                <div
                  aria-hidden
                  className="absolute -bottom-4 -end-4 h-16 w-16 rounded-full bg-[#C45C3E]/10 blur-xl transition-opacity group-hover:opacity-100 opacity-0"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
