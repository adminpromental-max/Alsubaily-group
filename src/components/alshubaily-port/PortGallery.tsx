import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_GALLERY, PORT_LOCATION } from "@/data/port-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function PortGallery() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = PORT_GALLERY.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((prev) => (prev + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelector("[data-gallery-stage]"),
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
    const track = trackRef.current;
    if (!track) return;
    gsap.to(track, {
      x: `${-active * 100}%`,
      duration: 0.75,
      ease: "power3.inOut",
    });
  }, [active]);

  useEffect(() => {
    const timer = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(timer);
  }, [go]);

  return (
    <section ref={sectionRef} className="port-section port-section--sky">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
              {t("معرض التصاميم", "Design Gallery")}
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-[#1A4A6E] md:text-4xl">
              {t("جمال الواجهة البحرية", "Waterfront Beauty")}
            </h2>
          </div>
          <p className="text-sm tabular-nums text-[#5A8499]">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        <div data-gallery-stage className="port-gallery-slider">
          <div className="port-gallery-viewport overflow-hidden rounded-2xl md:rounded-3xl">
            <div ref={trackRef} className="port-gallery-track flex">
              {PORT_GALLERY.map((src, i) => (
                <div key={src} className="port-gallery-slide min-w-full shrink-0">
                  <img
                    src={src}
                    alt={t(
                      `الشبيلي بورت — تصميم ${i + 1}`,
                      `AlShubaily Port — Design ${i + 1}`,
                    )}
                    loading={i <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            className="port-gallery-nav port-gallery-nav--prev"
            aria-label={t("السابق", "Previous")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="port-gallery-nav port-gallery-nav--next"
            aria-label={t("التالي", "Next")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {PORT_GALLERY.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "port-gallery-thumb shrink-0 overflow-hidden rounded-lg transition-all",
                  active === i
                    ? "ring-2 ring-[#2E8FA8] ring-offset-2 ring-offset-[#EAF4F9]"
                    : "opacity-55 hover:opacity-90",
                )}
                aria-label={t(`صورة ${i + 1}`, `Image ${i + 1}`)}
              >
                <img src={src} alt="" className="h-14 w-20 object-cover md:h-16 md:w-24" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-location-reveal]"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="port-section port-section--white">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <MapPin
          data-location-reveal
          className="mx-auto h-8 w-8 text-[#2E8FA8]"
          strokeWidth={1.25}
        />
        <h2
          data-location-reveal
          className="font-heading mt-4 text-3xl font-bold text-[#1A4A6E] md:text-4xl"
        >
          {t(PORT_LOCATION.titleAr, PORT_LOCATION.titleEn)}
        </h2>
        <p
          data-location-reveal
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3D6B8A] md:text-base"
        >
          {t(PORT_LOCATION.bodyAr, PORT_LOCATION.bodyEn)}
        </p>

        <div
          data-location-reveal
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {PORT_LOCATION.landmarks.map((item) => (
            <span
              key={item.labelEn}
              className="rounded-full border border-[#2E8FA8]/20 bg-[#EAF4F9] px-4 py-2 text-xs font-medium text-[#1A4A6E] md:text-sm"
            >
              {t(item.labelAr, item.labelEn)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
