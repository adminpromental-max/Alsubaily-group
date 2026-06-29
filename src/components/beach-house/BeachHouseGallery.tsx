import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { BEACH_HOUSE_GALLERY } from "@/data/beach-house-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function BeachHouseGallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const slides = BEACH_HOUSE_GALLERY;

  const next = useCallback(
    () => setActive((p) => (p + 1) % slides.length),
    [slides.length],
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-gallery-reveal]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#E8DCC8] to-[#D4C4A8] py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <p
          data-gallery-reveal
          className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#8A6A2E]"
        >
          {t("معرض المشروع", "Project Gallery")}
        </p>
        <h2
          data-gallery-reveal
          className="mb-10 text-center font-heading text-2xl font-semibold text-[#2C2416] md:text-3xl"
        >
          {t("رؤية منتجع منزل البحر", "Maison de la Mer Vision")}
        </h2>

        <div data-gallery-reveal className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
            {slides.map((slide, i) => (
              <figure
                key={slide.src}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  active === i
                    ? "z-10 scale-100 opacity-100"
                    : "z-0 scale-105 opacity-0",
                )}
              >
                <img
                  src={slide.src}
                  alt={t(slide.titleAr, slide.titleEn)}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/75 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="font-heading text-xl font-bold text-white md:text-2xl">
                    {t(slide.titleAr, slide.titleEn)}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label={t("السابق", "Previous")}
            className="absolute start-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#2C2416]/50 text-white backdrop-blur-md transition hover:bg-[#2C2416]/70"
          >
            <PrevIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t("التالي", "Next")}
            className="absolute end-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#2C2416]/50 text-white backdrop-blur-md transition hover:bg-[#2C2416]/70"
          >
            <NextIcon className="h-5 w-5" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active === i ? "w-8 bg-[#2C2416]" : "w-1.5 bg-[#2C2416]/30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
