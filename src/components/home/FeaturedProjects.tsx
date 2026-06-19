import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SHOWCASE_IMAGES } from "@/data/showcase-images";
import { useLang } from "@/contexts/lang-context";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { SHOWCASE_OVERRIDE_KEY } from "@/lib/showcase-override";

const DEFAULT_AUTOPLAY_MS = 5200;
const SWIPE_THRESHOLD = 80;
const STACK_DEPTH = 4; // how many cards are visible in the stack

interface FeaturedProjectsProps {
  autoPlay?: boolean | number;
  pauseOnHover?: boolean;
  pauseOnInteraction?: boolean;
}

export function FeaturedProjects({
  autoPlay = true,
  pauseOnHover = true,
  pauseOnInteraction = true,
}: FeaturedProjectsProps) {
  const { t } = useLang();
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [drag, setDrag] = useState(0);
  const [flyOut, setFlyOut] = useState<null | "left" | "right">(null);
  const [override, setOverride] = useState<string[] | null>(null);
  const dragStartX = useRef<number | null>(null);

  // Load override from localStorage (set by /admin/showcase after Drive sync)
  useEffect(() => {
    const read = () => {
      try {
        const raw = window.localStorage.getItem(SHOWCASE_OVERRIDE_KEY);
        if (!raw) return setOverride(null);
        const parsed = JSON.parse(raw) as { images?: string[] };
        setOverride(parsed?.images?.length ? parsed.images : null);
      } catch {
        setOverride(null);
      }
    };
    read();
    window.addEventListener("showcase-override-changed", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("showcase-override-changed", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  const images = useMemo(
    () => (override && override.length ? override : SHOWCASE_IMAGES),
    [override],
  );
  const total = images.length;
  const wrap = useCallback(
    (i: number) => ((i % total) + total) % total,
    [total],
  );

  const autoPlayDelay =
    typeof autoPlay === "number" ? autoPlay : autoPlay ? DEFAULT_AUTOPLAY_MS : 0;
  const autoPlayEnabled = autoPlayDelay > 0;

  // Reset index when source list shrinks
  useEffect(() => {
    setIndex((c) => (c >= total ? 0 : c));
  }, [total]);

  const go = useCallback((dir: 1 | -1) => {
    setFlyOut(dir === 1 ? "left" : "right");
    window.setTimeout(() => {
      setIndex((c) => wrap(c + dir));
      setFlyOut(null);
      setDrag(0);
    }, 380);
  }, [wrap]);

  // Preload
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  // Autoplay
  useEffect(() => {
    if (!autoPlayEnabled || paused || flyOut) return;
    const timer = window.setInterval(() => go(1), autoPlayDelay);
    return () => window.clearInterval(timer);
  }, [go, paused, flyOut, autoPlayEnabled, autoPlayDelay]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (flyOut) return;
    dragStartX.current = e.clientX;
    if (pauseOnInteraction) setPaused(true);
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
      go(dx < 0 ? 1 : -1);
    } else {
      setDrag(0);
    }
    if (pauseOnInteraction) setPaused(false);
  };

  // Build visible stack (front-most first)
  const stack = Array.from({ length: Math.min(STACK_DEPTH, total) }, (_, i) => ({
    src: images[wrap(index + i)],
    depth: i,
  }));

  const activeSrc = images[index];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-20 lg:py-28"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* Ambient blurred backdrop of active image */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-125 object-cover blur-[80px] saturate-125 transition-opacity duration-[1200ms] ease-out will-change-[opacity]"
            style={{ opacity: src === activeSrc ? 0.35 : 0 }}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-[#14110D]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080605] via-transparent to-[#080605]" />
      </div>
      <div className="section-gradient-showcase pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent" />
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/[0.08] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div data-reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mx-auto mb-3 h-px w-12 bg-[#C9A962]" />
          <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            {t("مشاريع مجموعة الشبيلي العقارية", "AlShubaily Real Estate Group Projects")}
          </h2>
          <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#C9A962]">
            {t("اسحب البطاقة أو انقر للتقليب", "Swipe or tap to flip the cards")}
          </p>
        </div>

        {/* Card deck stage */}
        <div
          className="card-deck-stage relative mx-auto flex h-[460px] max-w-3xl items-center justify-center md:h-[540px] lg:h-[580px] lg:max-w-4xl"
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
              const offsetY = depth * 22; // stacked below — more visible peek
              const scale = 1 - depth * 0.06;
              const rotateBase = depth === 0 ? 0 : depth % 2 === 0 ? -2.5 : 2.5;
              const opacity = 1 - depth * 0.16;

              // Top card drag transform
              let topTransform = "";
              if (isTop) {
                if (flyOut) {
                  const dir = flyOut === "left" ? -1 : 1;
                  topTransform = `translate(${dir * 140}%, -40px) rotate(${dir * 22}deg)`;
                } else if (drag !== 0) {
                  const rot = drag / 18;
                  topTransform = `translate(${drag}px, 0) rotate(${rot}deg)`;
                }
              }

              return (
                <div
                  key={`${src}-${depth}`}
                  className={cn(
                    "deck-card stone-surface-dark absolute h-[88%] w-[82%] max-w-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] md:max-w-[460px] lg:h-[90%] lg:max-w-[540px]",
                    isTop && "deck-card--top ring-1 ring-[#C9A962]/40 shadow-[0_0_60px_rgba(201,169,98,0.18)]",
                    isTop && !flyOut && drag === 0 && "cursor-grab",
                    isTop && drag !== 0 && "cursor-grabbing",
                  )}
                  style={{
                    zIndex: STACK_DEPTH - depth,
                    transform: isTop
                      ? topTransform ||
                        `translateY(0) scale(1) rotate(0deg)`
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
                    alt=""
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080605]/85 via-[#080605]/15 to-transparent" />

                  {/* Card back details — only on top card */}
                  {isTop && (
                    <>
                      {/* Corner indices (playing-card style) */}
                      <div className="pointer-events-none absolute left-4 top-4 font-mono text-xs tracking-widest text-[#C9A962]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="pointer-events-none absolute right-4 bottom-4 rotate-180 font-mono text-xs tracking-widest text-[#C9A962]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Bottom label */}
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6">
                        <span className="rounded-full bg-[#C9A962] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#080605]">
                          {t("معرض المشاريع", "Project Gallery")}
                        </span>
                        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-2 backdrop-blur-md">
                          <span className="font-mono text-xs tracking-widest text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-3 w-px bg-[#C9A962]/60" />
                          <span className="font-mono text-xs tracking-widest text-white/50">
                            {String(total).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}


          {/* Floating prev/next */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t("السابق", "Previous")}
            className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#C9A962] backdrop-blur-md transition-all hover:border-[#C9A962] hover:bg-black/60 active:scale-95 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t("التالي", "Next")}
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#C9A962] backdrop-blur-md transition-all hover:border-[#C9A962] hover:bg-black/60 active:scale-95 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => {
                if (dotIndex === index || flyOut) return;
                setFlyOut(dotIndex > index ? "left" : "right");
                window.setTimeout(() => {
                  setIndex(dotIndex);
                  setFlyOut(null);
                  setDrag(0);
                }, 380);
              }}
              aria-label={`Slide ${dotIndex + 1}`}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                dotIndex === index
                  ? "w-10 bg-[#C9A962]"
                  : "w-1.5 bg-white/15 hover:bg-white/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
