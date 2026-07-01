import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_HERO_IMAGE, PORT_VIDEO_URL } from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortCinema() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll<HTMLElement>("[data-video-reveal]"),
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
  }, []);

  return (
    <section ref={sectionRef} className="port-section port-section--wave relative overflow-hidden">
      <div className="port-wave-top" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-video-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#2E8FA8]">
            {t("فيلم تعريفي", "Showcase Film")}
          </p>
          <h2 className="font-heading mt-2 text-2xl font-bold text-[#1A4A6E] md:text-3xl">
            {t("جولة في الشبيلي بورت", "Tour AlShubaily Port")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#3D6B8A] md:text-base">
            {t(
              "استكشف رؤية المشروع في فيلم يعرّف بالوجهة الساحلية — المارينا، الأبراج، والممشى في تجربة بصرية واحدة.",
              "Explore the project vision in a film introducing the coastal destination — marina, towers, and promenade in one visual journey.",
            )}
          </p>
          <div className="mt-6 flex items-center gap-3 text-xs text-[#5A8499]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2E8FA8]/15 text-[#2E8FA8]">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            {t("اضغط للتشغيل · جولة سينمائية", "Tap to play · Cinematic tour")}
          </div>
        </div>

        <div data-video-reveal className="port-video-card">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster={PORT_HERO_IMAGE}
            className="port-video-player w-full"
          >
            <source src={PORT_VIDEO_URL} type="video/quicktime" />
            <source src={PORT_VIDEO_URL} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="port-wave-bottom" aria-hidden />
    </section>
  );
}
