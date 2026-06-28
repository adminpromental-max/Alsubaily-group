import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_PORTALS } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function PortalMirror({
  portal,
  index,
}: {
  portal: (typeof GRAND_MALL_PORTALS)[number];
  index: number;
}) {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const colRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % portal.images.length);
    }, 3200 + index * 400);
    return () => window.clearInterval(interval);
  }, [portal.images.length, index]);

  useEffect(() => {
    const col = colRef.current;
    if (!col) return;
    gsap.fromTo(
      col,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: col, start: "top 88%", once: true },
      },
    );
  }, [index]);

  return (
    <div ref={colRef} className="gm-portal-col">
      <div className="gm-portal-arch">
        {portal.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t(portal.titleAr, portal.titleEn)}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700",
              active === i ? "scale-100 opacity-100" : "scale-110 opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/85 via-[#0A0908]/20 to-[#0A0908]/35" />
        <span className="gm-portal-tag">{t(portal.tagAr, portal.tagEn)}</span>
      </div>
      <h3 className="font-heading mt-4 text-center text-lg font-bold text-white md:text-xl">
        {t(portal.titleAr, portal.titleEn)}
      </h3>
      <div className="mt-2 flex justify-center gap-1.5">
        {portal.images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1 rounded-full transition-all",
              active === i ? "w-6 bg-[#C9A962]" : "w-2 bg-white/30",
            )}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

export function GrandMallPortals() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.fromTo(
      section.querySelector("[data-portal-head]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="gm-section gm-section--dark">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div data-portal-head className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("ثلاث بوابات · ثلاث عوالم", "Three Gates · Three Worlds")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("مرايا العرض", "Display Mirrors")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {GRAND_MALL_PORTALS.map((portal, i) => (
            <PortalMirror key={portal.id} portal={portal} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
