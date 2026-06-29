import { useState, type CSSProperties } from "react";
import { ImageIcon } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BEACH_HOUSE_GALLERY, BEACH_HOUSE_TOUR } from "@/data/beach-house-content";
import { cn } from "@/lib/utils";

export function BeachHouseGallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>({ y: 36, stagger: 0.1 });
  const isRtl = lang === "ar";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div data-reveal className="relative mb-10 md:mb-12">
          <div
            className="pointer-events-none absolute -top-6 select-none text-[40px] font-black leading-none text-white/25 md:text-[72px]"
            style={{
              [isRtl ? "right" : "left"]: "-0.25rem",
            } as CSSProperties}
            aria-hidden
          >
            TOUR
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading relative z-10 text-3xl font-black text-[#0A3D5C] md:text-5xl">
                {t(BEACH_HOUSE_TOUR.titleAr, BEACH_HOUSE_TOUR.titleEn)}
              </h2>
              <div className="mt-3 flex items-center">
                <span className="h-[2px] w-12 bg-[#C9A962]" />
                <p className="ms-3 text-sm font-medium tracking-wide text-[#0A3D5C]/70 md:text-base">
                  {t(BEACH_HOUSE_TOUR.subtitleAr, BEACH_HOUSE_TOUR.subtitleEn)}
                </p>
              </div>
            </div>
            <p className="text-xs text-[#0A3D5C]/65 md:text-sm">
              {t(
                "اضغط أو مرّر لاستكشاف كل صورة",
                "Tap or hover to explore each view",
              )}
            </p>
          </div>
        </div>

        <div
          data-reveal
          className="activity-accordion flex h-[min(72svh,420px)] min-h-[320px] gap-2 sm:gap-2.5 md:h-[480px] md:gap-3"
          role="tablist"
          aria-label={t(BEACH_HOUSE_TOUR.titleAr, BEACH_HOUSE_TOUR.titleEn)}
        >
          {BEACH_HOUSE_GALLERY.map((slide, i) => {
            const isActive = active === i;
            const title = t(slide.titleAr, slide.titleEn);

            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-expanded={isActive}
                className={cn(
                  "activity-panel group relative overflow-hidden rounded-2xl outline-none md:rounded-3xl",
                  isActive && "is-active",
                )}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <img
                  src={slide.src}
                  alt={title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "activity-panel-img absolute inset-0 h-full w-full object-cover",
                    isActive && "is-active",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/35 to-[#0A2540]/10" />

                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm md:h-11 md:w-11">
                      <ImageIcon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                    </div>
                    <span
                      className={cn(
                        "rounded-full bg-[#C9A962] px-2.5 py-0.5 text-[10px] font-semibold text-[#1A1612] transition-opacity duration-400 md:px-3 md:py-1 md:text-xs",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {i + 1} / {BEACH_HOUSE_GALLERY.length}
                    </span>
                  </div>

                  <div className="text-start">
                    <h3
                      className={cn(
                        "font-heading font-bold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "text-lg sm:text-xl md:text-3xl"
                          : cn(
                              "text-sm sm:text-base md:text-xl",
                              "activity-panel-title-collapsed",
                              isRtl && "activity-panel-title-collapsed--rtl",
                            ),
                      )}
                    >
                      {title}
                    </h3>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "mt-2 max-h-24 opacity-100 md:mt-3"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="max-w-md text-[11px] leading-relaxed text-white/85 sm:text-xs md:text-sm md:leading-relaxed">
                        {t(slide.descAr, slide.descEn)}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
