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

export function HailWalkwayGallerySlider() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="hail-walkway-gallery"
      className="overflow-hidden bg-[#0A0A0A] py-16 md:py-24"
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        data-gallery-reveal
        className="mx-auto mb-12 max-w-4xl px-6 text-center md:px-8"
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

      <div
        data-gallery-reveal
        className="relative mx-auto h-[360px] max-w-6xl px-4 md:h-[460px] md:px-8"
        style={{ perspective: "1600px" }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slides.map((slide, i) => {
            const offset = getOffset(i, active, slides.length);
            const isActive = offset === 0;
            const abs = Math.abs(offset);
            const visible = abs <= 2;

            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={t(slide.titleAr, slide.titleEn)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "absolute left-1/2 top-1/2 h-[280px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[400px] md:w-[300px]",
                  visible ? "pointer-events-auto" : "pointer-events-none",
                )}
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(${offset} * 56%)) rotateY(${offset * -28}deg) scale(${isActive ? 1 : 0.82})`,
                  opacity: visible ? (isActive ? 1 : 0.55) : 0,
                  zIndex: 20 - abs,
                  filter: isActive ? "blur(0px)" : "blur(1px)",
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
                      ? "bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      : "bg-black/40",
                  )}
                />
                {isActive && (
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-5",
                      lang === "ar" ? "text-right" : "text-left",
                    )}
                  >
                    <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                      {t(slide.titleAr, slide.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">
                      {t(slide.descAr, slide.descEn)}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        data-gallery-reveal
        className="mt-10 flex items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
          aria-label={t("السابق", "Previous")}
        >
          {lang === "ar" ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>

        <div className="flex max-w-[200px] flex-wrap justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={t(`الانتقال إلى الشريحة ${i + 1}`, `Go to slide ${i + 1}`)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === i ? "w-8 bg-[#C9A962]" : "w-2 bg-white/40",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
          aria-label={t("التالي", "Next")}
        >
          {lang === "ar" ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </button>
      </div>
    </section>
  );
}
