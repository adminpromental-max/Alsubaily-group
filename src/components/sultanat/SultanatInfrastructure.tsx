import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { SULTANAT_INFRASTRUCTURE } from "@/data/sultanat-content";

gsap.registerPlugin(ScrollTrigger);

function LampPost({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el.querySelector("[data-glow]"), {
      opacity: 0.9,
      duration: 1.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay,
    });
  }, [delay]);

  return (
    <div ref={ref} className="flex shrink-0 flex-col items-center px-2" aria-hidden>
      <div
        data-glow
        className="mb-1 h-3 w-3 rounded-full bg-[#C9A962] opacity-50 shadow-[0_0_12px_4px_rgba(201,169,98,0.5)]"
      />
      <div className="h-16 w-1 rounded-full bg-gradient-to-b from-[#C9A962] to-[#8A8A8A]" />
      <div className="h-1 w-6 rounded-full bg-[#8A8A8A]/60" />
    </div>
  );
}

export function SultanatInfrastructure() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-infra-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );

      const scrollWidth = track.scrollWidth - track.clientWidth;
      if (scrollWidth > 0) {
        gsap.to(track, {
          x: () => -(track.scrollWidth - track.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 20%",
            end: () => `+=${scrollWidth + 200}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const slides = SULTANAT_INFRASTRUCTURE.slides;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E8D5C4] py-16 md:py-0"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 md:py-20">
        <div data-infra-reveal className="mb-10 md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C45C3E]">
            {t(SULTANAT_INFRASTRUCTURE.titleAr, SULTANAT_INFRASTRUCTURE.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#2C1810] md:text-4xl">
            {t(
              SULTANAT_INFRASTRUCTURE.subtitleAr,
              SULTANAT_INFRASTRUCTURE.subtitleEn,
            )}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-8 text-[#2C1810]/70 md:text-base">
            {t(SULTANAT_INFRASTRUCTURE.bodyAr, SULTANAT_INFRASTRUCTURE.bodyEn)}
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex items-center gap-4 md:gap-6"
          style={{ width: "max-content" }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src} className="flex items-center">
              {i > 0 && <LampPost delay={i * 0.4} />}
              <figure className="group relative w-[72vw] shrink-0 overflow-hidden rounded-3xl shadow-xl md:w-[420px] lg:w-[480px]">
                <img
                  src={slide.src}
                  alt={t(slide.captionAr, slide.captionEn)}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
                  <Lightbulb className="h-4 w-4 shrink-0 text-[#C9A962]" />
                  <span className="text-sm font-medium text-white">
                    {t(slide.captionAr, slide.captionEn)}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
          <LampPost delay={1.2} />
        </div>
      </div>
    </section>
  );
}
