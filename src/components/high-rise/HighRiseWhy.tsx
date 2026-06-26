import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Layers, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { HIGH_RISE_WHY } from "@/data/high-rise-content";

gsap.registerPlugin(ScrollTrigger);

const WHY_ICONS = [Compass, Layers, Sparkles] as const;

export function HighRiseWhy() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-why-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[#E0D3C2]/50 bg-stone-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-why-reveal className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#9A7B3A]">
            {t("لماذا الشبيلي هاي رايز؟", "Why AlShubaily High Rise?")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A1612] md:text-4xl">
            {t("ريادة وتفرد", "Leadership & Uniqueness")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGH_RISE_WHY.map((item, i) => {
            const Icon = WHY_ICONS[i] ?? Sparkles;
            return (
              <article
                key={item.titleEn}
                data-why-reveal
                className="group rounded-2xl border border-[#E0D3C2]/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4A7AB8]/35 hover:shadow-md md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A7AB8]/10 text-[#4A7AB8] transition group-hover:scale-110 group-hover:bg-[#4A7AB8]/15">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1A1612]">
                  {t(item.titleAr, item.titleEn)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5C5348]">
                  {t(item.descAr, item.descEn)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
