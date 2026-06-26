import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_ARCHITECTURE } from "@/data/al-zahraa-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ZahraaArchitecture() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-arch-reveal]"),
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
  }, []);

  const tiles = ZAHRAA_ARCHITECTURE.tiles;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7FAFC] py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-arch-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#1E6B8A]">
            {t(ZAHRAA_ARCHITECTURE.titleAr, ZAHRAA_ARCHITECTURE.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A2E38] md:text-4xl">
            {t(
              ZAHRAA_ARCHITECTURE.subtitleAr,
              ZAHRAA_ARCHITECTURE.subtitleEn,
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-[#1A2E38]/70">
            {t(ZAHRAA_ARCHITECTURE.bodyAr, ZAHRAA_ARCHITECTURE.bodyEn)}
          </p>
        </div>

        <div
          data-arch-reveal
          className="grid gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4 md:h-[520px]"
        >
          {tiles.map((tile, i) => {
            const isActive = active === i;
            const isLarge = tile.span === "large";
            return (
              <button
                key={tile.id}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl text-start transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:rounded-3xl",
                  isLarge
                    ? cn(
                        "min-h-[280px] md:col-span-2 md:row-span-2",
                        isActive ? "md:col-span-3" : "md:col-span-2",
                      )
                    : cn(
                        "min-h-[200px] md:col-span-1 md:row-span-1",
                        isActive && "md:col-span-2 md:row-span-2 md:col-start-auto",
                      ),
                  isActive && "ring-2 ring-[#1E6B8A]/40 ring-offset-2 ring-offset-[#F7FAFC]",
                )}
              >
                <img
                  src={tile.image}
                  alt={t(tile.titleAr, tile.titleEn)}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "scale-100",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-500",
                    isActive
                      ? "bg-gradient-to-t from-[#1A2E38]/90 via-[#1A2E38]/30 to-transparent"
                      : "bg-gradient-to-t from-[#1A2E38]/80 via-[#1A2E38]/20 to-transparent",
                  )}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3
                    className={cn(
                      "font-heading font-bold text-white transition-all duration-500",
                      isActive ? "text-2xl md:text-3xl" : "text-lg",
                    )}
                  >
                    {t(tile.titleAr, tile.titleEn)}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm text-white/80 transition-all duration-500",
                      isActive ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0",
                    )}
                  >
                    {t(tile.descAr, tile.descEn)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
