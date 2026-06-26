import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { RABIA_ROAD_INFRASTRUCTURE } from "@/data/rabia-road-content";

gsap.registerPlugin(ScrollTrigger);

function MountainSilhouette() {
  return (
    <svg
      aria-hidden
      className="absolute inset-x-0 bottom-0 z-10 h-24 w-full text-[#3D2314]/90 md:h-32"
      viewBox="0 0 800 120"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,120 L0,80 L120,45 L220,70 L340,25 L480,55 L600,15 L720,50 L800,30 L800,120 Z"
        className="rabia-mountain-layer"
      />
    </svg>
  );
}

export function RabiaRoadInfrastructure() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-infra-reveal]"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );

      if (imageWrap) {
        gsap.fromTo(
          imageWrap.querySelector(".rabia-mountain-layer"),
          { y: 0 },
          {
            y: 80,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: imageWrap,
              start: "top 75%",
              end: "bottom 40%",
              scrub: 0.6,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#EDE4D4] py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div data-infra-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B1D3A]">
              {t(
                RABIA_ROAD_INFRASTRUCTURE.titleAr,
                RABIA_ROAD_INFRASTRUCTURE.titleEn,
              )}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A0F0A] md:text-4xl">
              {t("من الجبال إلى السهول", "From Mountains to Plains")}
            </h2>
            <div className="my-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#6B1D3A]" />
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B1D3A] to-[#C4A574]" />
              <div className="h-2 w-2 rounded-full bg-[#C4A574]" />
            </div>
            <p className="text-sm leading-8 text-[#3D2314]/80 md:text-base">
              {t(
                RABIA_ROAD_INFRASTRUCTURE.bodyAr,
                RABIA_ROAD_INFRASTRUCTURE.bodyEn,
              )}
            </p>
          </div>

          <div
            ref={imageWrapRef}
            data-infra-reveal
            className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#C4A574]/15"
          >
            <img
              src={RABIA_ROAD_INFRASTRUCTURE.image}
              alt={t(
                RABIA_ROAD_INFRASTRUCTURE.titleAr,
                RABIA_ROAD_INFRASTRUCTURE.titleEn,
              )}
              className="aspect-[4/3] w-full object-cover"
            />
            <MountainSilhouette />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
