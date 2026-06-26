import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Route, Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_ZONES, NEW_BEACH_ZONES_IMAGE } from "@/data/new-beach-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ZONE_ICONS = { waves: Waves, building: Building2, route: Route } as const;

export function NewBeachZones() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-zone-reveal]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    gsap.fromTo(
      panel,
      { opacity: 0.7, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [active]);

  const zone = NEW_BEACH_ZONES[active];
  const Icon = ZONE_ICONS[zone.icon];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a2540] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,107,138,0.25),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-zone-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#7EC8E3]">
            {t("التخطيط لبناء الهوية", "Planning for Identity")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            {t("ثلاث مناطق رئيسية", "Three Main Zones")}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          <div data-zone-reveal className="flex flex-col gap-3">
            {NEW_BEACH_ZONES.map((z, i) => {
              const ZIcon = ZONE_ICONS[z.icon];
              const isActive = active === i;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl border p-5 text-start transition-all duration-500",
                    isActive
                      ? "border-[#E8C99A]/50 bg-[#2E6B8A]/30 shadow-lg"
                      : "border-white/10 bg-white/5 hover:border-white/25",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                      isActive
                        ? "bg-[#E8C99A]/20 text-[#E8C99A]"
                        : "bg-white/10 text-[#7EC8E3]",
                    )}
                  >
                    <ZIcon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-heading font-bold transition-colors",
                        isActive ? "text-xl text-white" : "text-base text-white/80",
                      )}
                    >
                      {t(z.titleAr, z.titleEn)}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-relaxed transition-all duration-500",
                        isActive
                          ? "max-h-24 opacity-100 text-white/75"
                          : "max-h-0 overflow-hidden opacity-0",
                      )}
                    >
                      {t(z.descAr, z.descEn)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            ref={panelRef}
            data-zone-reveal
            className="relative min-h-[280px] overflow-hidden rounded-3xl border border-[#7EC8E3]/20 shadow-2xl lg:min-h-[420px]"
          >
            <img
              src={NEW_BEACH_ZONES_IMAGE}
              alt={t(zone.titleAr, zone.titleEn)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8C99A]/30 bg-[#E8C99A]/10 px-3 py-1">
                <Icon className="h-3.5 w-3.5 text-[#E8C99A]" />
                <span className="text-xs text-[#E8C99A]">
                  {t("المنطقة", "Zone")} {active + 1}/3
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                {t(zone.titleAr, zone.titleEn)}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                {t(zone.descAr, zone.descEn)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
