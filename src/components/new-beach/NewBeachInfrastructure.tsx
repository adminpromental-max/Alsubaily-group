import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { NEW_BEACH_INFRASTRUCTURE } from "@/data/new-beach-content";

gsap.registerPlugin(ScrollTrigger);

export function NewBeachInfrastructure() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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

      gsap.fromTo(
        el.querySelector("[data-infra-line]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E8F4F8] py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-infra-reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E6B8A]">
              {t(
                NEW_BEACH_INFRASTRUCTURE.titleAr,
                NEW_BEACH_INFRASTRUCTURE.titleEn,
              )}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#0a2540] md:text-4xl">
              {t("بنية تحتية راقية", "Premium Infrastructure")}
            </h2>
            <div
              data-infra-line
              className="my-5 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-[#2E6B8A] to-[#E8C99A]"
            />
            <p className="text-sm leading-8 text-[#0a2540]/75 md:text-base">
              {t(
                NEW_BEACH_INFRASTRUCTURE.bodyAr,
                NEW_BEACH_INFRASTRUCTURE.bodyEn,
              )}
            </p>
          </div>

          <div
            data-infra-reveal
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={NEW_BEACH_INFRASTRUCTURE.image}
              alt={t(
                NEW_BEACH_INFRASTRUCTURE.titleAr,
                NEW_BEACH_INFRASTRUCTURE.titleEn,
              )}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
