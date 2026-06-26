import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_LOCATION } from "@/data/al-zahraa-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ZahraaLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [activePin, setActivePin] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
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

      gsap.fromTo(
        el.querySelectorAll("[data-pin-dot]"),
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "back.out(2.5)",
          stagger: 0.15,
          delay: 0.4,
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setActivePin((p) => (p + 1) % ZAHRAA_LOCATION.pins.length),
      3500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1A2E38] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(30,107,138,0.2),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7EC8E3]">
            {t(ZAHRAA_LOCATION.titleAr, ZAHRAA_LOCATION.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t(ZAHRAA_LOCATION.subtitleAr, ZAHRAA_LOCATION.subtitleEn)}
          </h2>
          <p className="mt-4 text-sm leading-8 text-white/75 md:text-base">
            {t(ZAHRAA_LOCATION.bodyAr, ZAHRAA_LOCATION.bodyEn)}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {ZAHRAA_LOCATION.pins.map((pin, i) => (
              <button
                key={pin.labelEn}
                type="button"
                onClick={() => setActivePin(i)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs transition-all md:text-sm",
                  activePin === i
                    ? "border-[#7EC8E3] bg-[#1E6B8A]/40 text-white"
                    : "border-white/20 bg-white/5 text-white/70 hover:border-white/40",
                )}
              >
                {t(pin.labelAr, pin.labelEn)}
              </button>
            ))}
          </div>
        </div>

        <div
          data-loc-reveal
          className="relative overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl"
        >
          <img
            src={ZAHRAA_LOCATION.image}
            alt={t(ZAHRAA_LOCATION.subtitleAr, ZAHRAA_LOCATION.subtitleEn)}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E38]/50 via-transparent to-transparent" />

          {ZAHRAA_LOCATION.pins.map((pin, i) => (
            <div
              key={pin.labelEn}
              data-pin-dot
              className="absolute"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <button
                type="button"
                aria-label={t(pin.labelAr, pin.labelEn)}
                onClick={() => setActivePin(i)}
                className={cn(
                  "relative -translate-x-1/2 -translate-y-1/2",
                  activePin === i ? "z-20" : "z-10",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-0 animate-ping rounded-full opacity-40",
                    activePin === i ? "bg-[#7EC8E3]" : "bg-white",
                  )}
                  style={{ margin: -6 }}
                />
                <span
                  className={cn(
                    "relative block h-4 w-4 rounded-full border-2 border-white shadow-lg",
                    activePin === i ? "bg-[#7EC8E3]" : "bg-[#1E6B8A]",
                  )}
                />
              </button>
              {activePin === i && (
                <div className="absolute start-1/2 top-6 z-30 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white/95 px-3 py-1.5 text-xs font-medium text-[#1A2E38] shadow-lg">
                  {t(pin.labelAr, pin.labelEn)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
