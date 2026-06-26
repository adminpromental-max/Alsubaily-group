import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { SULTANAT_INFRASTRUCTURE } from "@/data/sultanat-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function SultanatInfrastructure() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const slides = SULTANAT_INFRASTRUCTURE.slides;

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
    if (!children.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[index];
    if (!slide) return;
    const target =
      slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-infra-reveal]"),
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

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current.active = false;
    el.releasePointerCapture(e.pointerId);
    el.style.cursor = "grab";
    updateActive();
  };

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E8D5C4] py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-infra-reveal className="mb-8 md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C45C3E]">
            {t(SULTANAT_INFRASTRUCTURE.titleAr, SULTANAT_INFRASTRUCTURE.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#2C1810] md:text-4xl">
            {t(
              SULTANAT_INFRASTRUCTURE.subtitleAr,
              SULTANAT_INFRASTRUCTURE.subtitleEn,
            )}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-8 text-[#2C1810]/70 md:text-base">
            {t(SULTANAT_INFRASTRUCTURE.bodyAr, SULTANAT_INFRASTRUCTURE.bodyEn)}
          </p>
        </div>

        <div data-infra-reveal className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs text-[#2C1810]/55">
            {t("اسحب لاستكشاف البنية التحتية", "Swipe to explore infrastructure")}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={t("السابق", "Previous")}
              onClick={() => scrollToSlide(Math.max(0, active - 1))}
              disabled={active === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C45C3E]/30 bg-white/80 text-[#2C1810] transition hover:bg-white disabled:opacity-35"
            >
              <PrevIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={t("التالي", "Next")}
              onClick={() =>
                scrollToSlide(Math.min(slides.length - 1, active + 1))
              }
              disabled={active === slides.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C45C3E]/30 bg-white/80 text-[#2C1810] transition hover:bg-white disabled:opacity-35"
            >
              <NextIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        data-infra-reveal
        ref={scrollerRef}
        className="flex cursor-grab gap-5 overflow-x-auto overscroll-x-contain px-6 pb-2 pt-1 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            data-slide
            className={cn(
              "group relative shrink-0 snap-center overflow-hidden rounded-3xl shadow-xl",
              "w-[min(88vw,520px)]",
            )}
          >
            <img
              src={slide.src}
              alt={t(slide.captionAr, slide.captionEn)}
              draggable={false}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A962]" />
                <span className="text-sm font-medium leading-relaxed text-white md:text-base">
                  {t(slide.captionAr, slide.captionEn)}
                </span>
              </div>
              <span className="mt-3 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] text-white/80">
                {i + 1} / {slides.length}
              </span>
            </figcaption>
          </figure>
        ))}
        <div className="w-6 shrink-0 md:w-8" aria-hidden />
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={t(slide.captionAr, slide.captionEn)}
            onClick={() => scrollToSlide(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === i ? "w-8 bg-[#C45C3E]" : "w-3 bg-[#2C1810]/25",
            )}
          />
        ))}
      </div>
    </section>
  );
}
