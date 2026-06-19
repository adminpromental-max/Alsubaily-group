import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_LOCATION } from "@/data/rabia-content";

gsap.registerPlugin(ScrollTrigger);

export function RabiaLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-loc-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rabia-location"
      className="relative overflow-hidden bg-[#0e0b08] px-6 py-16 md:px-8 md:py-24"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,169,98,0.07),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div data-loc-reveal className="mb-10 text-center md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#C9A962]">
            {t(RABIA_LOCATION.eyebrowAr, RABIA_LOCATION.eyebrowEn)}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold text-[#FAF8F4] md:text-4xl">
            {t(RABIA_LOCATION.titleAr, RABIA_LOCATION.titleEn)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            {t(RABIA_LOCATION.bodyAr, RABIA_LOCATION.bodyEn)}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          {/* Map image */}
          <div data-loc-reveal className="relative overflow-hidden rounded-2xl border border-[#C9A962]/20">
            <img
              src={RABIA_LOCATION.image}
              alt={t(RABIA_LOCATION.imageAltAr, RABIA_LOCATION.imageAltEn)}
              className="h-full w-full object-cover"
              loading="lazy"
              style={{ minHeight: "340px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08]/30 to-transparent" />
          </div>

          {/* Distance cards */}
          <div data-loc-reveal className="flex flex-col gap-4">
            <div className="mb-2 flex items-center gap-2">
              <Navigation className="h-4 w-4 text-[#C9A962]" strokeWidth={1.5} />
              <p className="text-sm font-medium tracking-wide text-[#C9A962]">
                {t("المسافات من المشروع", "Distances from Project")}
              </p>
            </div>

            {RABIA_LOCATION.highlights.map((h, i) => (
              <div
                key={i}
                className="group flex items-center justify-between rounded-xl border border-[#C9A962]/15 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-[#C9A962]/35 hover:bg-white/8"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#C9A962]/60 group-hover:bg-[#C9A962]" />
                  <p className="text-sm text-white/80">
                    {t(h.labelAr, h.labelEn)}
                  </p>
                </div>
                <p className="text-lg font-semibold text-[#C9A962]">
                  {t(h.valueAr, h.valueEn)}
                </p>
              </div>
            ))}

            {/* Stat card */}
            <div className="mt-4 rounded-2xl border border-[#C9A962]/25 bg-[#C9A962]/8 px-5 py-6">
              <p className="text-3xl font-bold text-[#C9A962]">230,000</p>
              <p className="mt-1 text-sm text-white/60">
                {t("م² — إجمالي مساحة المشروع", "m² — Total Project Area")}
              </p>
              <div className="mt-4 h-px w-full bg-[#C9A962]/20" />
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                {t(
                  "موقع: مدينة مكة المكرمة، المملكة العربية السعودية",
                  "Location: Makkah Al-Mukarramah City, Saudi Arabia",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
