import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { VISION_MISSION, CHAIRMAN_CONTENT } from "@/data/site-content";

gsap.registerPlugin(ScrollTrigger);

export function VisionMissionSection() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const quote = section.querySelector<HTMLElement>(".vm-quote");
    const signature = section.querySelector<HTMLElement>(".vm-signature");
    const cards = section.querySelectorAll<HTMLElement>(".vm-glass-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    if (quote) {
      tl.fromTo(
        quote,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
      );
    }

    if (signature) {
      tl.fromTo(
        signature,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
        "-=0.35",
      );
    }

    tl.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=0.2",
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [lang]);

  const isRTL = lang === "ar";

  return (
    <section
      ref={sectionRef}
      id="vision-mission"
      className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(42,32,26,0.55) 0%, rgba(29,24,18,0.45) 38%, rgba(22,18,14,0.5) 72%, rgba(20,17,13,0.65) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(201,169,98,0.08) 30%, transparent 55%, rgba(201,169,98,0.05) 80%, transparent 100%)",
          }}
        />
        <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#c9a962] opacity-[0.08] blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#8a6a2e] opacity-[0.10] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <blockquote className="vm-quote mx-auto max-w-3xl text-center text-base font-light leading-relaxed text-white/85 md:text-lg">
          {t(CHAIRMAN_CONTENT.quoteAr, CHAIRMAN_CONTENT.quoteEn)}
        </blockquote>

        <div className="vm-signature mt-8 text-center md:mt-10">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#c9a962]/60 to-transparent" />
          <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#c9a962]/80">
            {t(CHAIRMAN_CONTENT.roleAr, CHAIRMAN_CONTENT.roleEn)}
          </p>
          <p className="mt-1 text-lg font-semibold text-white md:text-xl">
            {t(CHAIRMAN_CONTENT.nameAr, CHAIRMAN_CONTENT.nameEn)}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          <div className="vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#c9a962]/30 bg-[#c9a962]/10 text-[#c9a962] transition-transform duration-500 group-hover:scale-110">
                <Eye className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <h3 className="text-lg font-semibold text-white">
                  {t(VISION_MISSION.visionTitleAr, VISION_MISSION.visionTitleEn)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {t(VISION_MISSION.visionAr, VISION_MISSION.visionEn)}
                </p>
              </div>
            </div>
          </div>

          <div className="vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#c9a962]/30 bg-[#c9a962]/10 text-[#c9a962] transition-transform duration-500 group-hover:scale-110">
                <Target className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <h3 className="text-lg font-semibold text-white">
                  {t(
                    VISION_MISSION.missionTitleAr,
                    VISION_MISSION.missionTitleEn,
                  )}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {t(VISION_MISSION.missionAr, VISION_MISSION.missionEn)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
