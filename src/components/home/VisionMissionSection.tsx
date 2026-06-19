import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target, Quote } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { VISION_MISSION, CHAIRMAN_CONTENT } from "@/data/site-content";

gsap.registerPlugin(ScrollTrigger);

export function VisionMissionSection() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".vm-glass-card");
    const sig = section.querySelector<HTMLElement>(".vm-signature");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", stagger: 0.2 }
    );

    if (sig) {
      tl.fromTo(
        sig,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  const isRTL = lang === "ar";

  return (
    <section
      ref={sectionRef}
      id="vision-mission"
      className="relative overflow-hidden bg-stone-dark px-6 py-20 md:px-8 md:py-28"
    >
      {/* Depth tint over stone texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(42,32,26,0.55) 0%, rgba(29,24,18,0.45) 38%, rgba(22,18,14,0.5) 72%, rgba(20,17,13,0.65) 100%)",
        }}
      />
      {/* Metallic sheen overlays */}
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
        {/* subtle grain via noise gradient */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.4em] text-[#c9a962]">
          {t(VISION_MISSION.eyebrowAr, VISION_MISSION.eyebrowEn)}
        </p>

        {/* Glass cards grid */}
        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {/* Vision card */}
          <div className="vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10">
            {/* glass top highlight */}
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

          {/* Mission card */}
          <div className="vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#c9a962]/30 bg-[#c9a962]/10 text-[#c9a962] transition-transform duration-500 group-hover:scale-110">
                <Target className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <h3 className="text-lg font-semibold text-white">
                  {t(VISION_MISSION.missionTitleAr, VISION_MISSION.missionTitleEn)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {t(VISION_MISSION.missionAr, VISION_MISSION.missionEn)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chairman signature block */}
        <div className="vm-signature mt-14 text-center md:mt-20">
          <div className="mx-auto inline-flex flex-col items-center">
            <Quote className="mb-3 h-6 w-6 text-[#c9a962]/70" strokeWidth={1.5} />
            <blockquote className="max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-lg">
              "{t(CHAIRMAN_CONTENT.quoteAr, CHAIRMAN_CONTENT.quoteEn)}"
            </blockquote>
            <div className="mt-6 flex flex-col items-center">
              <div className="relative mb-3">
                <p
                  className="text-xl font-semibold italic text-white md:text-2xl"
                  style={{ fontFamily: '"Cairo", "Brush Script MT", cursive' }}
                >
                  {t(CHAIRMAN_CONTENT.signatureNameAr, CHAIRMAN_CONTENT.signatureNameEn)}
                </p>
                <div className="mx-auto mt-2 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#c9a962]/60 to-transparent" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a962]/80">
                {t(CHAIRMAN_CONTENT.roleAr, CHAIRMAN_CONTENT.roleEn)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
