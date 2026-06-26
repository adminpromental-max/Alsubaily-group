import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { HIGH_RISE_GALLERY } from "@/data/high-rise-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const slides = HIGH_RISE_GALLERY;

function getOffset(index: number, active: number, total: number) {
  let offset = index - active;
  const half = Math.floor(total / 2);
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

function useSlideSpacing() {
  const [spacing, setSpacing] = useState(260);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSpacing(Math.round(w * 0.72));
      else if (w < 1024) setSpacing(Math.round(w * 0.38));
      else setSpacing(Math.min(Math.round(w * 0.32), 420));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return spacing;
}

export function HighRiseGallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const spacing = useSlideSpacing();

  const next = useCallback(
    () => setActive((p) => (p + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll<HTMLElement>("[data-gallery-reveal]"),
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [auto, next]);

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0A0A0A] pb-10 pt-12 md:pb-14 md:pt-16"
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        data-gallery-reveal
        className="mx-auto mb-8 max-w-4xl px-6 text-center md:mb-10 md:px-8"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7eb8e8]">
          {t("معرض المشروع", "Project Gallery")}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-white md:text-4xl">
          {t("جولة في الشبيلي هاي رايز", "Tour AlShubaily High Rise")}
        </h2>
      </div>

      <div data-gallery-reveal className="relative w-full px-0">
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ height: "min(52vw, 400px)", minHeight: 320, perspective: "1800px" }}
        >
          <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {slides.map((slide, i) => {
              const offset = getOffset(i, active, slides.length);
              const isActive = offset === 0;
              const abs = Math.abs(offset);
              const visible = abs <= 2;
              const xOffset = offset * spacing;

              return (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={t(slide.titleAr, slide.titleEn)}
                  className={cn(
                    "absolute left-1/2 top-1/2 overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:rounded-3xl",
                    "h-[min(48vw,320px)] w-[min(85vw,480px)] md:h-[min(32vw,380px)] md:w-[min(48vw,560px)]",
                    visible ? "pointer-events-auto" : "pointer-events-none",
                  )}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${xOffset}px) rotateY(${offset * -22}deg) scale(${isActive ? 1 : 0.86})`,
                    opacity: visible ? (isActive ? 1 : 0.5) : 0,
                    zIndex: 20 - abs,
                    filter: isActive ? "blur(0px)" : "blur(1.5px)",
                  }}
                >
                  <img
                    src={slide.src}
                    alt={t(slide.titleAr, slide.titleEn)}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={cn(
                      "absolute inset-0",
                      isActive
                        ? "bg-gradient-to-t from-[#06080c]/85 via-transparent to-transparent"
                        : "bg-black/45",
                    )}
                  />
                  {isActive && (
                    <div
                      className={cn(
                        "absolute inset-x-0 bottom-0 p-4 md:p-5",
                        lang === "ar" ? "text-right" : "text-left",
                      )}
                    >
                      <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                        {t(slide.titleAr, slide.titleEn)}
                      </h3>
                      <p className="mt-1 text-xs text-white/85 md:text-sm">
                        {t(slide.descAr, slide.descEn)}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute start-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm sm:start-4 md:start-8"
            aria-label={t("السابق", "Previous")}
          >
            <PrevIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute end-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm sm:end-4 md:end-8"
            aria-label={t("التالي", "Next")}
          >
            <NextIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-7 bg-[#7eb8e8]" : "w-1.5 bg-white/35",
              )}
              aria-label={t(`شريحة ${i + 1}`, `Slide ${i + 1}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
