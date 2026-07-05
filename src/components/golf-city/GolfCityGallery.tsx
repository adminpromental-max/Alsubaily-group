import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  GOLF_CITY_GALLERY,
  GOLF_CITY_GALLERY_HEADER,
} from "@/data/golf-city-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const slides = GOLF_CITY_GALLERY;

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

export function GolfCityGallery() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F0E8] py-16 md:py-24"
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-gallery-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8B6914]">
            {t(
              GOLF_CITY_GALLERY_HEADER.eyebrowAr,
              GOLF_CITY_GALLERY_HEADER.eyebrowEn,
            )}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A2E1F] md:text-4xl">
            {t(
              GOLF_CITY_GALLERY_HEADER.titleAr,
              GOLF_CITY_GALLERY_HEADER.titleEn,
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#1A2E1F]/65">
            {t(
              GOLF_CITY_GALLERY_HEADER.subtitleAr,
              GOLF_CITY_GALLERY_HEADER.subtitleEn,
            )}
          </p>
        </div>

        <div
          data-gallery-reveal
          className="relative mx-auto h-[320px] max-w-5xl sm:h-[380px] md:h-[440px]"
        >
          {slides.map((slide, i) => {
            const offset = getOffset(i, active, slides.length);
            const isActive = offset === 0;
            return (
              <div
                key={slide.titleEn}
                className="absolute start-1/2 top-1/2 w-[min(88vw,380px)] -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[420px]"
                style={{
                  transform: `translate(calc(-50% + ${offset * spacing}px), -50%) scale(${isActive ? 1 : 0.82})`,
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 md:rounded-3xl",
                    isActive && "ring-2 ring-[#C9A962]/40",
                  )}
                >
                  <img
                    src={slide.src}
                    alt={t(slide.titleAr, slide.titleEn)}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="bg-[#1A3324] px-5 py-4 text-center">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {t(slide.titleAr, slide.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm text-[#C9A962]">
                      {t(slide.descAr, slide.descEn)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          data-gallery-reveal
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={prev}
            aria-label={t("السابق", "Previous")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2D5A3D]/20 bg-white text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
          >
            <ChevronRight
              className={cn("h-5 w-5", lang === "en" && "rotate-180")}
            />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  active === i
                    ? "w-8 bg-[#2D5A3D]"
                    : "w-2 bg-[#2D5A3D]/25 hover:bg-[#2D5A3D]/50",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label={t("التالي", "Next")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2D5A3D]/20 bg-white text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
          >
            <ChevronLeft
              className={cn("h-5 w-5", lang === "en" && "rotate-180")}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
