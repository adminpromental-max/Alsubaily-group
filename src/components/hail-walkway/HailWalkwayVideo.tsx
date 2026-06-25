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
    <section ref={sectionRef} className="walkway-cinema-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(201,169,98,0.1),transparent_68%)]"
      />

      <div
        data-video-reveal
        className="relative border-b border-[#C9A962]/15 px-6 py-10 text-center md:py-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
          {t("فيديو المشروع", "Project Video")}
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
          {t("جولة مرئية", "Visual Tour")}
        </h2>
      </div>

      <div data-video-reveal className="relative px-4 pb-2 pt-2 md:px-8 md:pb-4 md:pt-4">
        <div className="walkway-cinema-stage">
          <div className="walkway-cinema-bar" aria-hidden />

          <div className="walkway-cinema-screen">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="walkway-cinema-video"
              poster={HAIL_WALKWAY_HERO_IMAGE}
            >
              <source src={HAIL_WALKWAY_VIDEO_URL} type="video/mp4" />
            </video>
            <div
              className="walkway-cinema-grain pointer-events-none absolute inset-0 mix-blend-overlay"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]"
              aria-hidden
            />
          </div>

          <div className="walkway-cinema-bar" aria-hidden />
        </div>

        <p className="walkway-cinema-caption">
          {t("حائل واك واي — جولة داخلية", "Hail Walkway — Inside Tour")}
        </p>
      </div>
    </section>
  );
}
