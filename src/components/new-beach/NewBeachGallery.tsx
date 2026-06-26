import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_GALLERY } from "@/data/new-beach-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function NewBeachGallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const slides = NEW_BEACH_GALLERY;

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
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F5E6D0] to-[#E8F4F8] py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <p
          data-gallery-reveal
          className="mb-8 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#2E6B8A]"
        >
          {t("معرض المشروع", "Project Gallery")}
        </p>

        <div data-gallery-reveal className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
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
            className="absolute start-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0a2540]/50 text-white backdrop-blur-sm md:start-4"
            aria-label={t("السابق", "Previous")}
          >
            <PrevIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute end-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0a2540]/50 text-white backdrop-blur-sm md:end-4"
            aria-label={t("التالي", "Next")}
          >
            <NextIcon className="h-5 w-5" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  active === i ? "w-8 bg-[#2E6B8A]" : "w-2 bg-[#2E6B8A]/30",
                )}
                aria-label={t(`صورة ${i + 1}`, `Image ${i + 1}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
