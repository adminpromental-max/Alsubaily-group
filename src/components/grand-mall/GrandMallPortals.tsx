import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_LOGO, GRAND_MALL_PORTALS } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function PortalColumn({
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
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: col, start: "top 88%", once: true },
      },
    );
  }, [index]);

  return (
    <div ref={colRef} className="gm-portal-col group">
      <div className="gm-portal-arch">
        {portal.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t(portal.titleAr, portal.titleEn)}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700",
              active === i ? "scale-100 opacity-100" : "scale-110 opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-[#0A0908]/15 to-[#0A0908]/30" />
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0908] py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-portal-head className="mb-10 text-center md:mb-14">
          <img
            src={GRAND_MALL_LOGO}
            alt=""
            className="mx-auto mb-6 h-auto w-[min(55vw,240px)] opacity-90"
          />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("ثلاث بوابات · ثلاث عوالم", "Three Gates · Three Worlds")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("مرايا العرض", "Display Mirrors")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {GRAND_MALL_PORTALS.map((portal, i) => (
            <PortalColumn key={portal.id} portal={portal} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
