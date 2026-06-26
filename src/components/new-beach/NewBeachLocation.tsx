import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_LOCATION } from "@/data/new-beach-content";

gsap.registerPlugin(ScrollTrigger);

const DIR_ICONS = [ArrowUp, ArrowDown, ArrowLeft] as const;

export function NewBeachLocation() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-loc-reveal]"),
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F5E6D0] to-[#E8F4F8] py-16 md:py-24"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div
          data-loc-reveal
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={NEW_BEACH_LOCATION.image}
            alt={t(NEW_BEACH_LOCATION.titleAr, NEW_BEACH_LOCATION.titleEn)}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 via-transparent to-transparent" />
        </div>

        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E6B8A]">
            {t(NEW_BEACH_LOCATION.titleAr, NEW_BEACH_LOCATION.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#0a2540] md:text-4xl">
            {t("موقع لا يُكرّر", "An Unrepeatable Location")}
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#0a2540]/75 md:text-base">
            {t(NEW_BEACH_LOCATION.bodyAr, NEW_BEACH_LOCATION.bodyEn)}
          </p>

          <div className="mt-8 space-y-3">
            {NEW_BEACH_LOCATION.neighbors.map((n, i) => {
              const Icon = DIR_ICONS[i] ?? ArrowUp;
              return (
                <div
                  key={n.labelEn}
                  className="flex items-center gap-4 rounded-xl border border-[#2E6B8A]/15 bg-white/70 px-4 py-3 backdrop-blur-sm transition hover:border-[#2E6B8A]/35"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E6B8A]/10 text-[#2E6B8A]">
                    <Icon
                      className="h-4 w-4"
                      style={
                        lang === "ar" && i === 2
                          ? { transform: "scaleX(-1)" }
                          : undefined
                      }
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#2E6B8A]/70">
                      {t(n.dirAr, n.dirEn)}
                    </p>
                    <p className="text-sm font-semibold text-[#0a2540]">
                      {t(n.labelAr, n.labelEn)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
