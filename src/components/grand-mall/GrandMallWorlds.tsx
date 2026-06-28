import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clapperboard, Gamepad2, Store, Waves } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_WORLDS } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const WORLD_ICONS = { retail: Store, lakes: Waves, entertainment: Clapperboard } as const;

export function GrandMallWorlds() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activeWorld = GRAND_MALL_WORLDS[active];
  const Icon = WORLD_ICONS[activeWorld.id as keyof typeof WORLD_ICONS] ?? Gamepad2;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.fromTo(
      section.querySelectorAll("[data-world-reveal]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="gm-section gm-section--dark">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-world-reveal className="mb-12 text-center md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("ثلاث عوالم", "Three Worlds")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("اكتشف ما بداخل المول", "Discover What's Inside")}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div className="flex flex-col gap-3">
            {GRAND_MALL_WORLDS.map((world, i) => {
              const WIcon = WORLD_ICONS[world.id as keyof typeof WORLD_ICONS] ?? Store;
              const isActive = active === i;
              return (
                <button
                  key={world.id}
                  type="button"
                  data-world-reveal
                  onClick={() => setActive(i)}
                  className={cn(
                    "gm-world-card group flex items-center gap-4 rounded-2xl border p-4 text-start transition-all duration-400 md:p-5",
                    isActive
                      ? "border-[#C9A962]/50 bg-[#C9A962]/10 shadow-lg shadow-black/20"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20",
                  )}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors"
                    style={{
                      backgroundColor: isActive ? `${world.accent}22` : "rgba(255,255,255,0.06)",
                      color: isActive ? world.accent : "rgba(255,255,255,0.6)",
                    }}
                  >
                    <WIcon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A962]">
                      {t(world.tagAr, world.tagEn)}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {t(world.titleAr, world.titleEn)}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/55 md:text-sm">
                      {t(world.descAr, world.descEn)}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full transition-all",
                      isActive ? "scale-125 bg-[#C9A962]" : "bg-white/20",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div data-world-reveal className="relative">
            <div className="gm-world-frame relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#C9A962]/25 md:aspect-[3/4]">
              {GRAND_MALL_WORLDS.map((world, i) => (
                <img
                  key={world.id}
                  src={world.image}
                  alt={t(world.titleAr, world.titleEn)}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    active === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-[#0A0908]/20" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: `${activeWorld.accent}33`, color: activeWorld.accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {t(activeWorld.titleAr, activeWorld.titleEn)}
                </h3>
              </div>
            </div>
            <div className="gm-world-ring pointer-events-none absolute -inset-4 rounded-[2rem] border border-[#C9A962]/10" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
