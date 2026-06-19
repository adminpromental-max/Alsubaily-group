import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import {
  TIDARA_ALTERNATING,
  type TidaraAlternatingSection,
} from "@/data/tidara-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function AlternatingRow({
  section,
  index,
}: {
  section: TidaraAlternatingSection;
  index: number;
}) {
  const { t } = useLang();
  const rowRef = useRef<HTMLElement>(null);
  const isLeft = index % 2 === 1;
  const step = String(index + 1).padStart(2, "0");

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const image = row.querySelector<HTMLElement>("[data-alt-image]");
    const content = row.querySelector<HTMLElement>("[data-alt-content]");
    const imageX = isLeft ? -56 : 56;

    const ctx = gsap.context(() => {
      if (image) {
        gsap.fromTo(
          image,
          { x: imageX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
      if (content) {
        gsap.fromTo(
          content,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.15,
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, row);

    return () => ctx.revert();
  }, [isLeft]);

  return (
    <section ref={rowRef} className="olympic-section">
      <div
        className={cn(
          "olympic-section-inner",
          isLeft && "olympic-section-inner--left",
        )}
      >
        <div className="olympic-section-img-wrap" data-alt-image>
          <div className="olympic-section-img">
            <img
              src={section.image}
              alt={t(section.imageAltAr, section.imageAltEn)}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="olympic-img-corner olympic-img-corner--tl" aria-hidden />
            <span className="olympic-img-corner olympic-img-corner--br" aria-hidden />
            <span className="olympic-step-badge">{step}</span>
          </div>
        </div>

        <div className="olympic-section-content" data-alt-content>
          <p className="olympic-section-eyebrow">
            {t(section.eyebrowAr, section.eyebrowEn)}
          </p>
          <h3 className="olympic-section-title">
            {t(section.titleAr, section.titleEn)}
          </h3>
          <div className="olympic-section-rule" aria-hidden />
          <p className="olympic-section-body">
            {t(section.bodyAr, section.bodyEn)}
          </p>
        </div>
      </div>
    </section>
  );
}

export function TidaraAlternatingSections() {
  const { t } = useLang();

  return (
    <div id="tidara-program" className="bg-[#FAF8F4]">
      <div className="px-6 pb-4 pt-8 text-center md:px-8 md:pb-6 md:pt-12">
        <p className="text-[11px] uppercase tracking-[0.42em] text-[#9A7B3A]">
          {t("برنامج المشروع", "Project Program")}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold text-[#1A1612] md:text-4xl">
          {t("سكني · تجاري · فندقي", "Residential · Commercial · Hospitality")}
        </h2>
      </div>

      {TIDARA_ALTERNATING.map((section, index) => (
        <AlternatingRow key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
