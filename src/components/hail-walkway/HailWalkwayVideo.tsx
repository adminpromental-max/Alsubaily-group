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
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF8F4] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div data-video-reveal className="mb-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8A6A2E]">
            {t("فيديو المشروع", "Project Video")}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#0A0A0A] md:text-3xl">
            {t("جولة مرئية", "Visual Tour")}
          </h2>
        </div>

        <div data-video-reveal className="dss-video-section mx-auto max-w-4xl">
          <div className="dss-tv-frame">
            <div className="dss-tv-screen">
              <video
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
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.3),transparent_40%)]" />
            </div>
            <div className="olympic-tv-base" />
          </div>
          <p className="olympic-tv-caption">
            {t("حائل واك واي — جولة داخلية", "Hail Walkway — Inside Tour")}
          </p>
        </div>
      </div>
    </section>
  );
}
