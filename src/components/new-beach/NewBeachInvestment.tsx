import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Coffee,
  Hotel,
  Palmtree,
  ShoppingBag,
  Home,
  Wrench,
} from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_INVESTMENT } from "@/data/new-beach-content";

gsap.registerPlugin(ScrollTrigger);

const SECTOR_ICONS = [Hotel, Palmtree, Home, ShoppingBag, Coffee, Wrench] as const;

export function NewBeachInvestment() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-inv-reveal]"),
      { y: 28, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a2540] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(232,201,154,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div data-inv-reveal className="relative overflow-hidden rounded-3xl shadow-2xl lg:order-2">
            <img
              src={NEW_BEACH_INVESTMENT.image}
              alt={t(
                NEW_BEACH_INVESTMENT.titleAr,
                NEW_BEACH_INVESTMENT.titleEn,
              )}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/70 via-transparent to-transparent" />
          </div>

          <div className="lg:order-1">
            <p data-inv-reveal className="text-xs font-medium uppercase tracking-[0.35em] text-[#E8C99A]">
              {t(NEW_BEACH_INVESTMENT.subtitleAr, NEW_BEACH_INVESTMENT.subtitleEn)}
            </p>
            <h2
              data-inv-reveal
              className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl"
            >
              {t(NEW_BEACH_INVESTMENT.titleAr, NEW_BEACH_INVESTMENT.titleEn)}
            </h2>
            <p data-inv-reveal className="mt-4 text-sm leading-8 text-white/75 md:text-base">
              {t(NEW_BEACH_INVESTMENT.bodyAr, NEW_BEACH_INVESTMENT.bodyEn)}
            </p>

            <div data-inv-reveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {NEW_BEACH_INVESTMENT.sectors.map((sector, i) => {
                const Icon = SECTOR_ICONS[i] ?? Hotel;
                return (
                  <div
                    key={sector.labelEn}
                    className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center transition hover:border-[#E8C99A]/40 hover:bg-[#2E6B8A]/20"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8C99A]/15 text-[#E8C99A] transition group-hover:scale-110">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-white/85">
                      {t(sector.labelAr, sector.labelEn)}
                    </span>
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
