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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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
  }, []);

  useEffect(() => {
    const v = sectionRef.current?.querySelector("video");
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

      <div data-video-reveal className="relative w-full bg-black px-0 md:px-6 lg:px-10">
        {/* 16:9 frame — object-contain shows full frame including bottom-right captions */}
        <div className="walkway-video-frame relative mx-auto w-full max-w-6xl overflow-hidden md:rounded-2xl md:border md:border-[#C9A962]/20">
          <div className="relative aspect-video w-full bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 h-full w-full object-contain object-center"
              poster={HAIL_WALKWAY_HERO_IMAGE}
            >
              <source src={HAIL_WALKWAY_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Light top fade only — no bottom/side overlays that hide captions */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black/35 to-transparent"
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
