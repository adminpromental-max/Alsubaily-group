import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { PORT_HERO_IMAGE, PORT_VIDEO_URL } from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortCinema() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll<HTMLElement>("[data-video-reveal]"),
      { y: 36, opacity: 0 },
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

  return (
    <section ref={sectionRef} className="port-section port-cinema-banner relative overflow-hidden px-0">
      <div data-video-reveal className="mx-auto mb-8 max-w-3xl px-6 text-center md:mb-10 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
          {t("فيلم تعريفي", "Showcase Film")}
        </p>
        <h2 className="font-heading mt-2 text-2xl font-bold text-[#1A4A6E] md:text-3xl">
          {t("جولة في الشبيلي بورت", "Tour AlShubaily Port")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#3D6B8A] md:text-base">
          {t(
            "تجربة سينمائية بانورامية على الواجهة البحرية",
            "A panoramic cinematic experience of the waterfront",
          )}
        </p>
      </div>

      <div data-video-reveal className="port-cinema-banner-frame relative w-full">
        <div className="port-cinema-banner-bar port-cinema-banner-bar--top" aria-hidden />
        <div className="port-cinema-banner-screen relative overflow-hidden">
          <video
            controls
            playsInline
            preload="metadata"
            poster={PORT_HERO_IMAGE}
            className="port-cinema-banner-video"
          >
            <source src={PORT_VIDEO_URL} type="video/quicktime" />
            <source src={PORT_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A4A6E]/55 via-transparent to-[#EAF4F9]/15" />
          <div className="port-cinema-banner-grain pointer-events-none absolute inset-0" aria-hidden />
          <p className="pointer-events-none absolute inset-x-0 bottom-0 hidden p-6 text-center text-[10px] uppercase tracking-[0.35em] text-white/70 md:block md:p-8">
            {t("الشبيلي بورت — فيلم تعريفي", "AlShubaily Port — Showcase Film")}
          </p>
        </div>
        <div className="port-cinema-banner-bar port-cinema-banner-bar--bottom" aria-hidden />
      </div>
    </section>
  );
}
