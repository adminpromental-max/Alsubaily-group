import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_PORTALS, GRAND_MALL_ZONES } from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallLakes() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const lakeZone = GRAND_MALL_ZONES[1];
  const lakeImages = GRAND_MALL_PORTALS[1].images;

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          },
        );
      }
      gsap.fromTo(
        section.querySelector("[data-lakes-copy]"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0A0908]">
      <div className="relative min-h-[70svh] md:min-h-[80svh]">
        <img
          ref={imgRef}
          src={lakeZone.image}
          alt={t(lakeZone.titleAr, lakeZone.titleEn)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/50 to-transparent" />
        <div className="gm-lake-shimmer absolute inset-x-0 bottom-0 h-32" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-6 py-20 md:min-h-[80svh] md:px-8">
          <div data-lakes-copy className="max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 text-[#C9A962]">
              <Waves className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                {t("Zone B", "Zone B")}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
              {t(lakeZone.titleAr, lakeZone.titleEn)}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              {t(lakeZone.bodyAr, lakeZone.bodyEn)}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-6 py-10 md:gap-4 md:px-8">
        {lakeImages.map((src) => (
          <div
            key={src}
            className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#C9A962]/15"
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
