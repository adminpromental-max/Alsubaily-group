import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/contexts/lang-context";
import { ABOUT_WELCOME } from "@/data/about-content";

export function AboutWelcome() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 },
    );
  }, []);

  return (
    <section
      ref={ref}
      className="mx-auto max-w-4xl px-6 pb-12 pt-4 text-center md:px-8 md:pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent"
      />
      <h1 className="font-heading text-2xl font-semibold leading-relaxed text-[#1A1612] md:text-3xl lg:text-4xl">
        {t(ABOUT_WELCOME.titleAr, ABOUT_WELCOME.titleEn)}
      </h1>
      <div
        aria-hidden
        className="pointer-events-none mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent"
      />
    </section>
  );
}
