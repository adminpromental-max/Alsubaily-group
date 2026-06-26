import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, MapPinned, Route } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { HIGH_RISE_LOCATION } from "@/data/high-rise-content";

gsap.registerPlugin(ScrollTrigger);

const PIN_ICONS = [Anchor, Route, MapPinned] as const;

export function HighRiseLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-loc-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        },
      );

      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAF8F4] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-loc-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4A7AB8]">
            {t("الموقع", "Location")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A1612] md:text-4xl">
            {t(HIGH_RISE_LOCATION.titleAr, HIGH_RISE_LOCATION.titleEn)}
          </h2>
          <p className="mt-2 text-sm font-medium text-[#9A7B3A]">
            {t(HIGH_RISE_LOCATION.subtitleAr, HIGH_RISE_LOCATION.subtitleEn)}
          </p>
          <p className="mt-5 text-sm leading-8 text-[#5C5348] md:text-base">
            {t(HIGH_RISE_LOCATION.bodyAr, HIGH_RISE_LOCATION.bodyEn)}
          </p>

          <ul className="mt-8 space-y-3">
            {HIGH_RISE_LOCATION.pins.map((pin, i) => {
              const Icon = PIN_ICONS[i] ?? MapPinned;
              return (
                <li
                  key={pin.labelEn}
                  data-loc-reveal
                  className="flex items-center gap-3 rounded-xl border border-[#E0D3C2]/80 bg-white px-4 py-3 shadow-sm transition hover:border-[#4A7AB8]/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4A7AB8]/10 text-[#4A7AB8]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium text-[#1A1612]">
                    {t(pin.labelAr, pin.labelEn)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          ref={imageRef}
          data-loc-reveal
          className="relative overflow-hidden rounded-2xl border border-[#E0D3C2]/60 shadow-[0_24px_60px_-24px_rgba(26,22,18,0.25)]"
        >
          <img
            src={HIGH_RISE_LOCATION.image}
            alt={t("خريطة موقع المشروع", "Project location map")}
            className="block w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080c]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
