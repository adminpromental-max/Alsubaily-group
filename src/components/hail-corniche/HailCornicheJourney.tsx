import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_CORNICHE_JOURNEY,
  type CornicheJourneyStop,
} from "@/data/hail-corniche-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  from?: number;
  to?: number;
  showHeader?: boolean;
};

export function HailCornicheJourney({
  from = 0,
  to = HAIL_CORNICHE_JOURNEY.length,
  showHeader = false,
}: Props) {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const stops = HAIL_CORNICHE_JOURNEY.slice(from, to);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (showHeader) {
        gsap.fromTo(
          el.querySelectorAll("[data-journey-head]"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      }

      el.querySelectorAll<HTMLElement>("[data-journey-stop]").forEach((stop) => {
        const img = stop.querySelector("[data-journey-img]");
        const text = stop.querySelector("[data-journey-text]");
        const marker = stop.querySelector("[data-journey-marker]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stop,
            start: "top 78%",
            once: true,
          },
        });

        if (marker) {
          tl.fromTo(
            marker,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
          );
        }
        if (text) {
          tl.fromTo(
            text,
            { x: stop.dataset.side === "left" ? -32 : 32, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.2",
          );
        }
        if (img) {
          tl.fromTo(
            img,
            { scale: 1.08, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.6",
          );
        }
      });

      const path = el.querySelector("[data-journey-path-fill]");
      if (path) {
        gsap.fromTo(
          path,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 0.6,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [showHeader, from, to]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E8E2D8] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(74,124,89,0.08), transparent 50%), radial-gradient(circle at 80% 80%, rgba(139,119,90,0.1), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {showHeader && (
          <div data-journey-head className="mb-12 text-center md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4A7C59]">
              {t("رحلة داخل الكورنيش", "Journey Through the Corniche")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#1a1814] md:text-4xl">
              {t("من الوادي إلى الوجهة", "From the Wadi to the Destination")}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-8 text-[#1a1814]/65">
              {t(
                "تتبّع مسار الكورنيش البري — من طبيعة وادي الأديرع إلى تجمعات سكنية واستثمارية متكاملة",
                "Follow the land corniche path — from Wadi Al-Adair'a nature to integrated residential and investment hubs",
              )}
            </p>
          </div>
        )}

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 top-0 w-0.5 bg-[#8B775A]/20"
            style={{ insetInlineStart: "1.25rem" }}
          />
          <div
            data-journey-path-fill
            aria-hidden
            className="absolute bottom-0 top-0 w-0.5 origin-top bg-gradient-to-b from-[#4A7C59] to-[#8B775A]"
            style={{ insetInlineStart: "1.25rem" }}
          />

          <div className="space-y-16 md:space-y-24">
            {stops.map((stop: CornicheJourneyStop, i) => {
              const globalIndex = from + i;
              const isEven = globalIndex % 2 === 0;
              return (
                <article
                  key={stop.id}
                  data-journey-stop
                  data-side={isEven ? "right" : "left"}
                  className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12"
                >
                  <div
                    data-journey-marker
                    className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4A7C59] bg-[#E8E2D8] text-sm font-bold text-[#4A7C59] shadow-md"
                    style={{ insetInlineStart: 0, top: "1.5rem" }}
                  >
                    {stop.step}
                  </div>

                  <div
                    data-journey-text
                    className={cn(
                      "ps-14 md:ps-0",
                      isEven ? "md:order-1" : "md:order-2",
                    )}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8B775A]">
                      {t("محطة", "Stop")} {stop.step}
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-[#1a1814] md:text-3xl">
                      {t(stop.titleAr, stop.titleEn)}
                    </h3>
                    <p className="mt-3 text-sm leading-8 text-[#1a1814]/70 md:text-base">
                      {t(stop.descAr, stop.descEn)}
                    </p>
                  </div>

                  <div
                    data-journey-img
                    className={cn(
                      "ps-14 md:ps-0",
                      isEven ? "md:order-2" : "md:order-1",
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[#8B775A]/20 shadow-xl shadow-[#1a1814]/10 md:rounded-3xl">
                      <img
                        src={stop.image}
                        alt={t(stop.titleAr, stop.titleEn)}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
