import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  RESIDENCE_GALLERY,
  RESIDENCE_GALLERY_HEADER,
} from "@/data/alshubaily-residence-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const slides = RESIDENCE_GALLERY;

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

export function ResidenceGallery() {
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
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [auto, next]);

  return (
    <section
      ref={sectionRef}
      id="residence-gallery"
      className="relative overflow-hidden bg-[#FAF8FC] py-16 md:py-24"
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-gallery-reveal className="relative z-30 mb-16 text-center md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B5B7B]">
            {t(
              RESIDENCE_GALLERY_HEADER.eyebrowAr,
              RESIDENCE_GALLERY_HEADER.eyebrowEn,
            )}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#2A2438] md:text-4xl">
            {t(
              RESIDENCE_GALLERY_HEADER.titleAr,
              RESIDENCE_GALLERY_HEADER.titleEn,
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-xl pb-6 text-sm text-[#2A2438]/65 md:pb-8">
            {t(
              RESIDENCE_GALLERY_HEADER.subtitleAr,
              RESIDENCE_GALLERY_HEADER.subtitleEn,
            )}
          </p>
        </div>

        <div
          data-gallery-reveal
          className="relative z-0 mx-auto mt-4 h-[360px] max-w-5xl sm:mt-6 sm:h-[420px] md:mt-8 md:h-[480px]"
        >
          {slides.map((slide, i) => {
            const offset = getOffset(i, active, slides.length);
            const isActive = offset === 0;
            return (
              <div
                key={slide.src}
                className="absolute start-1/2 top-[72%] w-[min(88vw,380px)] -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[420px]"
                style={{
                  transform: `translate(calc(-50% + ${offset * spacing}px), -50%) scale(${isActive ? 1 : 0.82})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
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
                    loading="lazy"
                  />
                  <div className="bg-[#1A1624] px-5 py-4 text-center">
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
          className="mt-10 flex items-center justify-center gap-4 md:mt-12"
        >
          <button
            type="button"
            onClick={prev}
            aria-label={t("السابق", "Previous")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6B5B7B]/20 bg-white text-[#6B5B7B] transition hover:bg-[#6B5B7B] hover:text-white"
          >
            <ChevronRight
              className={cn("h-5 w-5", lang === "en" && "rotate-180")}
            />
          </button>
          <div className="flex max-w-xs flex-wrap justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  active === i
                    ? "w-8 bg-[#6B5B7B]"
                    : "w-2 bg-[#6B5B7B]/25 hover:bg-[#6B5B7B]/50",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label={t("التالي", "Next")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6B5B7B]/20 bg-white text-[#6B5B7B] transition hover:bg-[#6B5B7B] hover:text-white"
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
