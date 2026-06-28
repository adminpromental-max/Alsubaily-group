import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Store } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  GRAND_MALL_PORTALS,
  GRAND_MALL_RETAIL_FEATURE,
} from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallRetail() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const retailImages = GRAND_MALL_PORTALS[0].images;

  useEffect(() => {
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    if (!section || !parallax) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-retail-copy]"),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );
      gsap.to(parallax.querySelectorAll("[data-parallax-layer]"), {
        y: (i) => (i + 1) * 60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAF9F6] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-retail-copy>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/10 px-4 py-1.5">
            <Store className="h-4 w-4 text-[#8A6A2E]" />
            <span className="text-xs font-semibold text-[#5C5348]">
              {t("Zone A", "Zone A")}
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#0A0908] md:text-4xl">
            {t("المحلات التجارية", "Retail Boulevard")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5348] md:text-base">
            {t(
              "ممرات فاخرة تجمع أرقى العلامات العالمية — تجربة تسوق استثنائية في بيئة معمارية راقية.",
              "Luxury corridors hosting the finest global brands — an exceptional shopping experience in refined architecture.",
            )}
          </p>
        </div>

        <div ref={parallaxRef} className="relative h-[420px] md:h-[480px]">
          <div
            data-parallax-layer
            className="absolute inset-[8%] overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={GRAND_MALL_RETAIL_FEATURE}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            data-parallax-layer
            className="absolute -right-2 top-0 h-[45%] w-[55%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:-right-4"
          >
            <img src={retailImages[0]} alt="" className="h-full w-full object-cover" />
          </div>
          <div
            data-parallax-layer
            className="absolute -left-2 bottom-0 h-[42%] w-[52%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:-left-4"
          >
            <img src={retailImages[1]} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
