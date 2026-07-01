import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { PORT_SHOWCASE_SLIDES } from "@/data/port-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function PortShowcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll("[data-showcase-reveal]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      },
    );
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    gsap.fromTo(
      image,
      { scale: 1.04, opacity: 0.85 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
    );
  }, [active]);

  return (
    <section ref={sectionRef} className="port-section port-section--white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-showcase-reveal className="mb-10 md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
            {t("نظرة شاملة", "Overview")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#1A4A6E] md:text-4xl">
            {t("وجهة الواجهة البحرية", "The Waterfront Destination")}
          </h2>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div
            ref={imageRef}
            data-showcase-reveal
            className="port-showcase-editorial relative min-h-[280px] overflow-hidden rounded-2xl md:min-h-[420px] md:rounded-3xl"
          >
            {PORT_SHOWCASE_SLIDES.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={t(slide.labelAr, slide.labelEn)}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  active === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A4A6E]/35 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(PORT_SHOWCASE_SLIDES.length).padStart(2, "0")}
              </span>
              <p className="font-heading mt-1 text-xl font-semibold text-white md:text-2xl">
                {t(
                  PORT_SHOWCASE_SLIDES[active].labelAr,
                  PORT_SHOWCASE_SLIDES[active].labelEn,
                )}
              </p>
            </div>
          </div>

          <div data-showcase-reveal className="flex flex-col gap-2">
            {PORT_SHOWCASE_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "port-showcase-pick group flex items-center gap-4 rounded-xl border px-4 py-3 text-start transition-all",
                  active === i
                    ? "border-[#2E8FA8]/40 bg-[#EAF4F9] shadow-sm"
                    : "border-transparent bg-[#F5FAFC] hover:border-[#2E8FA8]/20 hover:bg-white",
                )}
              >
                <span
                  className={cn(
                    "font-heading text-lg font-bold tabular-nums transition-colors",
                    active === i ? "text-[#2E8FA8]" : "text-[#B8D4E3]",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      active === i ? "text-[#1A4A6E]" : "text-[#5A8499]",
                    )}
                  >
                    {t(slide.labelAr, slide.labelEn)}
                  </p>
                </div>
                <div
                  className={cn(
                    "h-12 w-16 shrink-0 overflow-hidden rounded-lg transition-opacity",
                    active === i ? "opacity-100" : "opacity-50 group-hover:opacity-80",
                  )}
                >
                  <img
                    src={slide.src}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
