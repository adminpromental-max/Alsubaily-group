import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import {
  PORT_HERO_POSTER,
  PORT_GALLERY,
  PORT_VIDEO_URL,
} from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortCinema() {
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
    <section
      ref={sectionRef}
      className="port-cinema-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(78,205,196,0.1),transparent_68%)]"
      />

      <div
        data-video-reveal
        className="relative border-b border-[#4ECDC4]/15 px-6 py-10 text-center md:py-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4ECDC4]">
          {t("تجربة سينمائية", "Cinematic Experience")}
        </p>
        <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
          {t("جولة في الشبيلي بورت", "Tour AlShubaily Port")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
          {t(
            "شاهد رؤية المشروع في فيلم تعريفي فاخر",
            "Experience the project vision in a premium showcase film",
          )}
        </p>
      </div>

      <div
        data-video-reveal
        className="relative px-4 pb-2 pt-2 md:px-8 md:pb-4 md:pt-4"
      >
        <div className="port-cinema-stage">
          <div className="port-cinema-bar" aria-hidden />

          <div className="port-cinema-screen">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="port-cinema-video"
              poster={PORT_HERO_POSTER}
            >
              <source src={PORT_VIDEO_URL} type="video/quicktime" />
              <source src={PORT_VIDEO_URL} type="video/mp4" />
            </video>
            <div
              className="port-cinema-grain pointer-events-none absolute inset-0 mix-blend-overlay"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]"
              aria-hidden
            />
          </div>

          <div className="port-cinema-bar" aria-hidden />
        </div>

        <p className="port-cinema-caption">
          {t("الشبيلي بورت — فيلم تعريفي", "AlShubaily Port — Showcase Film")}
        </p>
      </div>
    </section>
  );
}
