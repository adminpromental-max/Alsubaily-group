import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_GALLERY, PORT_LOCATION } from "@/data/port-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_MS = 5200;
const SWIPE_THRESHOLD = 80;
const STACK_DEPTH = 4;

export function PortGallery() {
  const { t, lang } = useLang();
  const isRTL = lang === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [drag, setDrag] = useState(0);
  const [flyOut, setFlyOut] = useState<null | "left" | "right">(null);
  const dragStartX = useRef<number | null>(null);

  const images = PORT_GALLERY;
  const total = images.length;

  const wrap = useCallback(
    (i: number) => ((i % total) + total) % total,
    [total],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelector("[data-gallery-head]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  const go = useCallback(
    (dir: 1 | -1, exitSide?: "left" | "right") => {
      setFlyOut(exitSide ?? (dir === 1 ? "left" : "right"));
      window.setTimeout(() => {
        setIndex((c) => wrap(c + dir));
        setFlyOut(null);
        setDrag(0);
      }, 380);
    },
    [wrap],
  );

  const goNext = useCallback(
    (exitSide?: "left" | "right") => {
      go(isRTL ? -1 : 1, exitSide ?? (isRTL ? "right" : "left"));
    },
    [go, isRTL],
  );

  const goPrev = useCallback(
    (exitSide?: "left" | "right") => {
      go(isRTL ? 1 : -1, exitSide ?? (isRTL ? "left" : "right"));
    },
    [go, isRTL],
  );

  useEffect(() => {
    if (paused || flyOut) return;
    const timer = window.setInterval(() => goNext(), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, paused, flyOut]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (flyOut) return;
    dragStartX.current = e.clientX;
    setPaused(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    setDrag(e.clientX - dragStartX.current);
  };

  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    const dx = drag;
    dragStartX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) goNext("left");
      else goPrev("right");
    } else {
      setDrag(0);
    }
    setPaused(false);
  };

  const stack = Array.from({ length: Math.min(STACK_DEPTH, total) }, (_, i) => ({
    src: images[wrap(index + i)],
    depth: i,
  }));

  const activeSrc = images[index];

  return (
    <section
      ref={sectionRef}
      className="port-section port-gallery-deck relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full scale-125 object-cover blur-[72px] saturate-110 transition-opacity duration-[1000ms]"
            style={{ opacity: src === activeSrc ? 0.28 : 0 }}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-[#EAF4F9]/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div data-gallery-head className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <div className="mx-auto mb-3 h-px w-12 bg-[#2E8FA8]" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
            {t("معرض التصاميم", "Design Gallery")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#1A4A6E] md:text-4xl">
            {t("جمال الواجهة البحرية", "Waterfront Beauty")}
          </h2>
          <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#5A8499]">
            {t("اسحب البطاقة أو انقر للتقليب", "Swipe or tap to flip the cards")}
          </p>
        </div>

        <div
          className="card-deck-stage relative mx-auto flex h-[420px] max-w-3xl items-center justify-center md:h-[500px] lg:h-[540px] lg:max-w-4xl"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {stack
            .slice()
            .reverse()
            .map(({ src, depth }) => {
              const isTop = depth === 0;
              const offsetY = depth * 20;
              const scale = 1 - depth * 0.06;
              const rotateBase = depth === 0 ? 0 : depth % 2 === 0 ? -2.5 : 2.5;
              const opacity = 1 - depth * 0.16;

              let topTransform = "";
              if (isTop) {
                if (flyOut) {
                  const dir = flyOut === "left" ? -1 : 1;
                  topTransform = `translate(${dir * 140}%, -40px) rotate(${dir * 22}deg)`;
                } else if (drag !== 0) {
                  topTransform = `translate(${drag}px, 0) rotate(${drag / 18}deg)`;
                }
              }

              return (
                <div
                  key={`${src}-${depth}`}
                  className={cn(
                    "deck-card port-deck-card absolute h-[88%] w-[82%] max-w-[420px] overflow-hidden rounded-[1.75rem] md:max-w-[460px] lg:h-[90%] lg:max-w-[520px]",
                    isTop &&
                      "deck-card--top ring-1 ring-[#2E8FA8]/45 shadow-[0_0_50px_rgba(46,143,168,0.2)]",
                    isTop && !flyOut && drag === 0 && "cursor-grab",
                    isTop && drag !== 0 && "cursor-grabbing",
                  )}
                  style={{
                    zIndex: STACK_DEPTH - depth,
                    transform: isTop
                      ? topTransform || "translateY(0) scale(1) rotate(0deg)"
                      : `translateY(${offsetY}px) scale(${scale}) rotate(${rotateBase}deg)`,
                    opacity,
                    transition:
                      isTop && drag !== 0 && !flyOut
                        ? "none"
                        : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease",
                  }}
                >
                  <img
                    src={src}
                    alt={t(
                      `الشبيلي بورت — تصميم ${wrap(index + depth) + 1}`,
                      `AlShubaily Port — Design ${wrap(index + depth) + 1}`,
                    )}
                    className="h-full w-full object-cover"
                    draggable={false}
                    loading={depth <= 1 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A4A6E]/75 via-[#1A4A6E]/10 to-transparent" />

                  {isTop && (
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-6">
                      <span className="rounded-full bg-[#2E8FA8] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                        {t("معرض التصاميم", "Design Gallery")}
                      </span>
                      <span className="text-[10px] tabular-nums tracking-widest text-white/80">
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

          <button
            type="button"
            onClick={() => goPrev()}
            aria-label={t("السابق", "Previous")}
            className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#2E8FA8]/25 bg-white/90 text-[#1A4A6E] shadow-md backdrop-blur-md transition-all hover:border-[#2E8FA8] hover:bg-white active:scale-95 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goNext()}
            aria-label={t("التالي", "Next")}
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#2E8FA8]/25 bg-white/90 text-[#1A4A6E] shadow-md backdrop-blur-md transition-all hover:border-[#2E8FA8] hover:bg-white active:scale-95 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => {
                if (dotIndex === index || flyOut) return;
                const forward = dotIndex > index;
                setFlyOut(
                  forward
                    ? isRTL
                      ? "right"
                      : "left"
                    : isRTL
                      ? "left"
                      : "right",
                );
                window.setTimeout(() => {
                  setIndex(dotIndex);
                  setFlyOut(null);
                  setDrag(0);
                }, 380);
              }}
              aria-label={t("انتقل للصورة", "Go to image")}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                dotIndex === index
                  ? "w-10 bg-[#2E8FA8]"
                  : "w-1.5 bg-[#2E8FA8]/25 hover:bg-[#2E8FA8]/45",
              )}
            />
          ))}
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
