import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ABOUT_GROUP } from "@/data/about-content";

gsap.registerPlugin(ScrollTrigger);

export function AboutGroupBanner() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-about-reveal]"),
      { y: 36, opacity: 0 },
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
    <section ref={sectionRef} className="about-group-banner relative w-full">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ABOUT_GROUP.bannerImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1612]/88 via-[#1A1612]/82 to-[#1A1612]/92" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,169,98,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24 lg:py-28">
        <p
          data-about-reveal
          className="text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C9A962]"
        >
          {t(ABOUT_GROUP.eyebrowAr, ABOUT_GROUP.eyebrowEn)}
        </p>
        <p
          data-about-reveal
          className="mt-8 text-center text-base leading-[2rem] text-white/85 md:text-lg md:leading-[2.1rem]"
        >
          {t(ABOUT_GROUP.bodyAr, ABOUT_GROUP.bodyEn)}
        </p>
      </div>
    </section>
  );
}
