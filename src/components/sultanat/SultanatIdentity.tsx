import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { SULTANAT_IDENTITY_STEPS } from "@/data/sultanat-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function SultanatIdentity() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (SULTANAT_IDENTITY_STEPS.length - 0.5)}`,
        pin: pin,
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(
            SULTANAT_IDENTITY_STEPS.length - 1,
            Math.floor(self.progress * SULTANAT_IDENTITY_STEPS.length),
          );
          setActiveStep(idx);
        },
      });

      gsap.fromTo(
        section.querySelector("[data-id-head]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#2C1810]"
      style={{ minHeight: `${100 + SULTANAT_IDENTITY_STEPS.length * 70}vh` }}
    >
      <div
        ref={pinRef}
        className="flex min-h-[100svh] flex-col justify-center py-16 md:py-20"
      >
        <div data-id-head className="mx-auto mb-8 max-w-6xl px-6 text-center md:mb-12 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("التخطيط لبناء الهوية", "Planning Identity")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#E8D5C4] md:text-4xl">
            {t("القصور والجزر الخاصة", "Private Palaces & Islands")}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            {SULTANAT_IDENTITY_STEPS.map((step, i) => (
              <img
                key={step.id}
                src={step.image}
                alt={t(step.subtitleAr, step.subtitleEn)}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                  activeStep === i
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4">
              {SULTANAT_IDENTITY_STEPS.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  aria-label={t(step.subtitleAr, step.subtitleEn)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    activeStep === i
                      ? "w-8 bg-[#C9A962]"
                      : "w-3 bg-white/40",
                  )}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px]">
            {SULTANAT_IDENTITY_STEPS.map((step, i) => (
              <article
                key={step.id}
                className={cn(
                  "absolute inset-0 transition-all duration-600",
                  activeStep === i
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0",
                )}
              >
                <p className="text-sm font-medium text-[#C45C3E]">
                  {t(step.titleAr, step.titleEn)}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-[#E8D5C4] md:text-3xl">
                  {t(step.subtitleAr, step.subtitleEn)}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#E8D5C4]/75 md:text-base">
                  {t(step.bodyAr, step.bodyEn)}
                </p>

                <div className="mt-6 flex gap-1">
                  {SULTANAT_IDENTITY_STEPS.map((_, j) => (
                    <div
                      key={j}
                      className={cn(
                        "h-0.5 flex-1 rounded-full transition-colors duration-500",
                        j <= i ? "bg-[#C9A962]" : "bg-white/15",
                      )}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
