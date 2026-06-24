import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_WALKWAY_GALLERY,
  HAIL_WALKWAY_GALLERY_HEADER,
} from "@/data/hail-walkway-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const slides = HAIL_WALKWAY_GALLERY;

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
      if (w < 640) setSpacing(Math.round(w * 0.78));
      else if (w < 1024) setSpacing(Math.round(w * 0.42));
      else setSpacing(Math.min(Math.round(w * 0.34), 460));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return spacing;
}

export function HailWalkwayGallerySlider() {
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
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [auto, next]);

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={sectionRef}
      id="hail-walkway-gallery"
      className="overflow-hidden bg-[#0A0A0A] pb-10 pt-12 md:pb-14 md:pt-16"
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        data-gallery-reveal
        className="mx-auto mb-8 max-w-4xl px-6 text-center md:mb-10 md:px-8"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
          {t(
            HAIL_WALKWAY_GALLERY_HEADER.eyebrowAr,
            HAIL_WALKWAY_GALLERY_HEADER.eyebrowEn,
          )}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold leading-snug text-white md:text-4xl">
          {t(
            HAIL_WALKWAY_GALLERY_HEADER.titleAr,
            HAIL_WALKWAY_GALLERY_HEADER.titleEn,
          )}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
          {t(
            HAIL_WALKWAY_GALLERY_HEADER.subtitleAr,
            HAIL_WALKWAY_GALLERY_HEADER.subtitleEn,
          )}
        </p>
      </div>

      <div data-gallery-reveal className="relative w-full px-0">
        {/* Carousel — full width, height tied to slide size */}
        <div
          className="relative mx-auto h-[min(52vw,360px)] w-full sm:h-[min(48vw,420px)] md:h-[min(32vw,480px)] lg:h-[min(28vw,520px)]"
          style={{ perspective: "1800px" }}
        >
          <div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
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
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "walkway-gallery-slide absolute top-1/2 overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:rounded-3xl",
                    "h-[min(50vw,340px)] w-[min(88vw,520px)] sm:h-[min(46vw,400px)] sm:w-[min(78vw,560px)] md:h-[min(30vw,460px)] md:w-[min(52vw,640px)] lg:h-[min(26vw,500px)] lg:w-[min(46vw,720px)]",
                    visible ? "pointer-events-auto" : "pointer-events-none",
                  )}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translateX(${xOffset}px) rotateY(${offset * -22}deg) scale(${isActive ? 1 : 0.86})`,
                    opacity: visible ? (isActive ? 1 : 0.5) : 0,
                    zIndex: 20 - abs,
                    filter: isActive ? "blur(0px)" : "blur(1.5px)",
                    transformStyle: "preserve-3d",
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
                      "absolute inset-0 transition-opacity duration-500",
                      isActive
                        ? "bg-gradient-to-t from-black/85 via-black/10 to-transparent"
                        : "bg-black/45",
                    )}
                  />
                  {isActive && (
                    <div
                      className={cn(
                        "absolute inset-x-0 bottom-0 p-4 md:p-6",
                        lang === "ar" ? "text-right" : "text-left",
                      )}
                    >
                      <h3 className="font-heading text-lg font-bold text-white md:text-2xl">
                        {t(slide.titleAr, slide.titleEn)}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/85 md:text-sm">
                        {t(slide.descAr, slide.descEn)}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Side arrows — anchored to carousel, not far below */}
          <button
            type="button"
            onClick={prev}
            className="absolute start-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-[#C9A962]/60 hover:bg-[#C9A962]/20 sm:start-4 sm:h-12 sm:w-12 md:start-6 lg:start-10"
            aria-label={t("السابق", "Previous")}
          >
            <PrevIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute end-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-[#C9A962]/60 hover:bg-[#C9A962]/20 sm:end-4 sm:h-12 sm:w-12 md:end-6 lg:end-10"
            aria-label={t("التالي", "Next")}
          >
            <NextIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Dots — close under slides */}
        <div className="mt-5 flex items-center justify-center gap-1.5 px-4 md:mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={t(
                `الانتقال إلى الشريحة ${i + 1}`,
                `Go to slide ${i + 1}`,
              )}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === i ? "w-7 bg-[#C9A962]" : "w-1.5 bg-white/35",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
