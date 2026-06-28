import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clapperboard, Gamepad2 } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_PORTALS, GRAND_MALL_ZONES } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallEntertainment() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const cinemaZone = GRAND_MALL_ZONES[3];
  const entertainmentZone = GRAND_MALL_ZONES[2];
  const entertainImages = GRAND_MALL_PORTALS[2].images;
  const panels = [
    { zone: entertainmentZone, icon: Gamepad2, image: GRAND_MALL_ZONES[2].image },
    { zone: cinemaZone, icon: Clapperboard, image: GRAND_MALL_ZONES[3].image },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const interval = window.setInterval(() => {
      setActive((p) => (p + 1) % panels.length);
    }, 5000);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-ent-card]"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        },
      );
    }, section);

    return () => {
      window.clearInterval(interval);
      ctx.revert();
    };
  }, [panels.length]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1A0F0A] py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(180,40,40,0.12),transparent)]" />
      <div className="gm-marquee absolute inset-x-0 top-8 overflow-hidden opacity-20">
        <p className="gm-marquee-track whitespace-nowrap text-6xl font-black uppercase tracking-[0.2em] text-[#C9A962]">
          CINEMA · ENTERTAINMENT · FAMILY · EVENTS · CINEMA · ENTERTAINMENT
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("Zone C · D", "Zone C · D")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("الترفيه والسينما", "Entertainment & Cinema")}
          </h2>
        </div>

        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-3xl border border-[#C9A962]/20 shadow-2xl">
          {panels.map((panel, i) => (
            <div
              key={panel.zone.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                active === i ? "opacity-100" : "opacity-0",
              )}
            >
              <img
                src={panel.image}
                alt={t(panel.zone.titleAr, panel.zone.titleEn)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/90 via-[#1A0F0A]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <panel.icon className="mb-3 h-8 w-8 text-[#C9A962]" />
                <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  {t(panel.zone.titleAr, panel.zone.titleEn)}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/75 md:text-base">
                  {t(panel.zone.bodyAr, panel.zone.bodyEn)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {entertainImages.map((src, i) => (
            <div
              key={src}
              data-ent-card
              className="group aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
