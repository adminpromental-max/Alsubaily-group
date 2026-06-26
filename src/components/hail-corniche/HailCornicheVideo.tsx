import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_CORNICHE_HERO_IMAGE,
  HAIL_CORNICHE_VIDEO_URL,
} from "@/data/hail-corniche-content";

gsap.registerPlugin(ScrollTrigger);

export function HailCornicheVideo() {
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
      className="corniche-cinema-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(74,124,89,0.12),transparent_68%)]"
      />

      <div
        data-video-reveal
        className="relative border-b border-[#4A7C59]/20 px-6 py-10 text-center md:py-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B9B72]">
          {t("جولة بالسيارة", "Driving Tour")}
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
          {t("على متن الكورنيش", "Along the Corniche")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
          {t(
            "جولة سينمائية بالعربية على كورنيش حائل البري",
            "A cinematic car tour along Hail's land corniche",
          )}
        </p>
      </div>

      <div
        data-video-reveal
        className="relative px-4 pb-2 pt-2 md:px-8 md:pb-4 md:pt-4"
      >
        <div className="corniche-cinema-stage">
          <div className="corniche-cinema-bar" aria-hidden />

          <div className="corniche-cinema-screen">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="corniche-cinema-video"
              poster={HAIL_CORNICHE_HERO_IMAGE}
            >
              <source src={HAIL_CORNICHE_VIDEO_URL} type="video/quicktime" />
              <source src={HAIL_CORNICHE_VIDEO_URL} type="video/mp4" />
            </video>
            <div
              className="corniche-cinema-grain pointer-events-none absolute inset-0 mix-blend-overlay"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]"
              aria-hidden
            />
          </div>

          <div className="corniche-cinema-bar" aria-hidden />
        </div>

        <p className="corniche-cinema-caption">
          {t("كورنيش حائل — جولة بالعربية", "Hail Corniche — Car Tour")}
        </p>
      </div>
    </section>
  );
}
