import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_SHOWCASE_SLIDES } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallShowcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const screen = screenRef.current;
    if (!section || !screen) return;

    const imgs = screen.querySelectorAll<HTMLElement>("[data-showcase-slide]");
    let index = 0;

    const crossfade = () => {
      const next = (index + 1) % GRAND_MALL_SHOWCASE_SLIDES.length;
      const current = imgs[index];
      const upcoming = imgs[next];
      if (!current || !upcoming) return;

      gsap
        .timeline()
        .to(current, { opacity: 0, scale: 1.08, duration: 1.3, ease: "power2.inOut" })
        .fromTo(
          upcoming,
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1.05, duration: 1.5, ease: "power2.out" },
          "-=0.85",
        )
        .to(upcoming, { scale: 1.12, duration: 4.8, ease: "none" }, "-=0.3");

      index = next;
      setActive(next);
    };

    gsap.set(imgs[0], { opacity: 1, scale: 1.04 });
    gsap.to(imgs[0], { scale: 1.1, duration: 5, ease: "none" });

    const interval = window.setInterval(crossfade, 5200);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-showcase-head]"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        screen,
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

    return () => {
      window.clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="gm-section gm-section--darker">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-showcase-head className="mb-8 text-center md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("نظرة شاملة", "Overview")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("وجهة متكاملة", "All-in-One Destination")}
          </h2>
        </div>

        <div className="gm-showcase-stage mx-auto max-w-4xl">
          <div ref={screenRef} className="gm-showcase-cinema relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#C9A962]/25">
            {GRAND_MALL_SHOWCASE_SLIDES.map((slide, i) => (
              <img
                key={slide.src}
                data-showcase-slide
                src={slide.src}
                alt={t(slide.labelAr, slide.labelEn)}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover will-change-transform",
                  i === 0 ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-[#0A0908]/25" />
            <div className="gm-cinema-scanline pointer-events-none absolute inset-0" aria-hidden />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <p className="font-heading text-lg font-semibold text-white md:text-xl">
                {t(
                  GRAND_MALL_SHOWCASE_SLIDES[active].labelAr,
                  GRAND_MALL_SHOWCASE_SLIDES[active].labelEn,
                )}
              </p>
              <div className="flex gap-1.5">
                {GRAND_MALL_SHOWCASE_SLIDES.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      active === i ? "w-7 bg-[#C9A962]" : "w-2 bg-white/30",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
