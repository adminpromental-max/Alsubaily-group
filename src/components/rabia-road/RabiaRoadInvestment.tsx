import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Crown, Hotel } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_INVESTMENT } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

const SECTOR_ICONS = [Hotel, Building2, Crown] as const;

export function RabiaRoadInvestment() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-inv-reveal]"),
      { y: 32, opacity: 0, rotateX: 8 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#3D2314] py-16 md:py-24"
      style={{ perspective: "1200px" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_20%_100%,rgba(196,165,116,0.15),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div data-inv-reveal className="relative overflow-hidden rounded-3xl shadow-2xl lg:order-2">
            <img
              src={RABIA_ROAD_INVESTMENT.image}
              alt={t(
                RABIA_ROAD_INVESTMENT.titleAr,
                RABIA_ROAD_INVESTMENT.titleEn,
              )}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/75 via-transparent to-transparent" />
          </div>

          <div className="lg:order-1">
            <p data-inv-reveal className="text-xs font-medium uppercase tracking-[0.35em] text-[#C4A574]">
              {t(
                RABIA_ROAD_INVESTMENT.subtitleAr,
                RABIA_ROAD_INVESTMENT.subtitleEn,
              )}
            </p>
            <h2
              data-inv-reveal
              className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl"
            >
              {t(RABIA_ROAD_INVESTMENT.titleAr, RABIA_ROAD_INVESTMENT.titleEn)}
            </h2>
            <p data-inv-reveal className="mt-4 text-sm leading-8 text-white/75 md:text-base">
              {t(RABIA_ROAD_INVESTMENT.bodyAr, RABIA_ROAD_INVESTMENT.bodyEn)}
            </p>

            <div className="mt-8 space-y-4">
              {RABIA_ROAD_INVESTMENT.sectors.map((sector, i) => {
                const Icon = SECTOR_ICONS[i] ?? Hotel;
                return (
                  <div
                    key={sector.titleEn}
                    data-inv-reveal
                    className="group flex items-start gap-4 rounded-2xl border border-[#C4A574]/20 bg-[#1A0F0A]/40 p-5 transition hover:border-[#C4A574]/45 hover:bg-[#6B1D3A]/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C4A574]/15 text-[#C4A574] transition group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white md:text-lg">
                        {t(sector.titleAr, sector.titleEn)}
                      </h3>
                      <p className="mt-1 text-sm text-white/65">
                        {t(sector.descAr, sector.descEn)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
