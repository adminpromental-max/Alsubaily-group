import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_WALKWAY_HERO_IMAGE,
  HAIL_WALKWAY_VIDEO_URL,
} from "@/data/hail-walkway-content";

gsap.registerPlugin(ScrollTrigger);

export function HailWalkwayVideo() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const banner = bannerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll<HTMLElement>("[data-video-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );

      if (banner) {
        gsap.fromTo(
          banner.querySelector("[data-cinema-video]"),
          { scale: 1.08 },
          {
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: banner,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#050505]">
      <div
        data-video-reveal
        className="border-b border-[#C9A962]/15 px-6 py-10 text-center md:py-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
          {t("فيديو المشروع", "Project Video")}
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
          {t("جولة مرئية", "Visual Tour")}
        </h2>
      </div>

      <div
        ref={bannerRef}
        data-video-reveal
        className="relative w-full"
      >
        <div className="relative w-full overflow-hidden bg-black">
          {/* Cinematic letterbox frame — full viewport width */}
          <div className="relative aspect-[21/9] w-full min-h-[200px] sm:min-h-[260px] md:min-h-[340px] lg:min-h-[420px]">
            <div
              data-cinema-video
              className="absolute inset-0 will-change-transform"
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="absolute inset-0 h-full w-full object-cover"
                poster={HAIL_WALKWAY_HERO_IMAGE}
              >
                <source src={HAIL_WALKWAY_VIDEO_URL} type="video/mp4" />
              </video>
            </div>

            {/* Letterbox bars */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[6%] min-h-[10px] bg-gradient-to-b from-black via-black/95 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[6%] min-h-[10px] bg-gradient-to-t from-black via-black/95 to-transparent"
              aria-hidden
            />

            {/* Vignette + cinematic tint */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_35%,rgba(0,0,0,0.55)_100%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(105deg,rgba(201,169,98,0.06)_0%,transparent_40%,transparent_60%,rgba(201,169,98,0.04)_100%)]"
              aria-hidden
            />

            {/* Film grain */}
            <div
              className="walkway-cinema-grain pointer-events-none absolute inset-0 z-10 opacity-[0.18] mix-blend-overlay"
              aria-hidden
            />

            {/* Side fade — draws eye to center */}
            <div
              className="pointer-events-none absolute inset-y-0 start-0 z-10 w-[8%] bg-gradient-to-r from-black/70 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 end-0 z-10 w-[8%] bg-gradient-to-l from-black/70 to-transparent"
              aria-hidden
            />

            {/* Golden accent lines */}
            <div
              className="pointer-events-none absolute inset-x-[6%] top-[6%] z-10 h-px bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-[6%] bottom-[6%] z-10 h-px bg-gradient-to-r from-transparent via-[#C9A962]/35 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <p className="walkway-cinema-caption">
          {t("حائل واك واي — جولة داخلية", "Hail Walkway — Inside Tour")}
        </p>
      </div>
    </section>
  );
}
