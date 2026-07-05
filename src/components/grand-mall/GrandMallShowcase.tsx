import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_SHOWCASE_SLIDES } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallShowcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const [thumbRef, thumbApi] = useEmblaCarousel({
    align: "center",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const goTo = useCallback(
    (index: number) => {
      const next = (index + GRAND_MALL_SHOWCASE_SLIDES.length) % GRAND_MALL_SHOWCASE_SLIDES.length;
      setActive(next);
      thumbApi?.scrollTo(next);
    },
    [thumbApi],
  );

  useEffect(() => {
    if (!thumbApi) return;
    const onSelect = () => {
      const idx = thumbApi.selectedScrollSnap();
      setActive(idx);
    };
    thumbApi.on("select", onSelect);
    return () => {
      thumbApi.off("select", onSelect);
    };
  }, [thumbApi]);

  useEffect(() => {
    const section = sectionRef.current;
    const main = mainRef.current;
    if (!section || !main) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-showcase-head]"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        main,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const imgs = main.querySelectorAll<HTMLElement>("[data-showcase-main]");
    imgs.forEach((img, i) => {
      gsap.killTweensOf(img);
      gsap.set(img, { opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.04 });
      if (i === active) {
        gsap.fromTo(img, { scale: 1.02 }, { scale: 1.08, duration: 6, ease: "none" });
      }
    });
  }, [active]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") goTo(active + 1);
      if (e.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo, lightbox]);

  const slide = GRAND_MALL_SHOWCASE_SLIDES[active];

  return (
    <>
      <section ref={sectionRef} className="gm-section gm-section--darker">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div data-showcase-head className="mb-8 text-center md:mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
              {t("معرض الصور", "Photo Gallery")}
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
              {t("استكشف جمال المشروع", "Explore the Project")}
            </h2>
          </div>

          <div ref={mainRef} className="gm-showcase-gallery">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#C9A962]/25 bg-[#0A0908] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              {GRAND_MALL_SHOWCASE_SLIDES.map((item, i) => (
                <img
                  key={item.src}
                  data-showcase-main
                  src={item.src}
                  alt={t(item.labelAr, item.labelEn)}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover will-change-transform",
                    i === active ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-[#0A0908]/20" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-7">
                <div>
                  <p className="font-heading text-lg font-semibold text-white md:text-2xl">
                    {t(slide.labelAr, slide.labelEn)}
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-white/75 md:text-base">
                    {t(slide.captionAr, slide.captionEn)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={t("الصورة السابقة", "Previous image")}
                className="absolute start-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962] group-hover:opacity-100 md:start-5 md:h-11 md:w-11"
                onClick={() => goTo(active - 1)}
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                aria-label={t("الصورة التالية", "Next image")}
                className="absolute end-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962] group-hover:opacity-100 md:end-5 md:h-11 md:w-11"
                onClick={() => goTo(active + 1)}
              >
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                aria-label={t("عرض بالحجم الكامل", "View full size")}
                className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:border-[#C9A962]/50 hover:text-[#C9A962] group-hover:opacity-100 md:end-5 md:top-5"
                onClick={() => setLightbox(true)}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 overflow-hidden" ref={thumbRef}>
              <div className="flex gap-3">
                {GRAND_MALL_SHOWCASE_SLIDES.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={t(item.labelAr, item.labelEn)}
                    aria-current={active === i}
                    className={cn(
                      "gm-showcase-thumb relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all md:h-24 md:w-36",
                      active === i
                        ? "border-[#C9A962] shadow-[0_0_20px_rgba(201,169,98,0.35)]"
                        : "border-transparent opacity-60 hover:opacity-100",
                    )}
                    onClick={() => goTo(i)}
                  >
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1 text-[10px] font-medium text-white md:text-xs">
                      {t(item.labelAr, item.labelEn)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="absolute end-4 top-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            onClick={() => setLightbox(false)}
          >
            {t("إغلاق", "Close")}
          </button>
          <button
            type="button"
            aria-label={t("الصورة السابقة", "Previous image")}
            className="absolute start-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white"
            onClick={(e) => {
              e.stopPropagation();
              goTo(active - 1);
            }}
          >
            <ChevronLeft className="h-6 w-6 rtl:rotate-180" />
          </button>
          <img
            src={slide.src}
            alt={t(slide.labelAr, slide.labelEn)}
            className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label={t("الصورة التالية", "Next image")}
            className="absolute end-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white"
            onClick={(e) => {
              e.stopPropagation();
              goTo(active + 1);
            }}
          >
            <ChevronRight className="h-6 w-6 rtl:rotate-180" />
          </button>
        </div>
      ) : null}
    </>
  );
}
