import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { PORT_VISION, PORT_VISION_IMAGE } from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortVision() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-vision-reveal]"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="port-section port-section--deep">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <div data-vision-reveal className="relative">
          <div className="port-frame overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={PORT_VISION_IMAGE}
              alt={t("الشبيلي بورت — منظر جوي", "AlShubaily Port — Aerial View")}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div
            className="pointer-events-none absolute -inset-3 rounded-[1.75rem] border border-[#4ECDC4]/20 md:-inset-4 md:rounded-[2rem]"
            aria-hidden
          />
        </div>

        <div>
          <p
            data-vision-reveal
            className="text-xs font-medium uppercase tracking-[0.35em] text-[#4ECDC4]"
          >
            {t("الشبيلي بورت", "AlShubaily Port")}
          </p>
          <h2
            data-vision-reveal
            className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl"
          >
            {t(PORT_VISION.titleAr, PORT_VISION.titleEn)}
          </h2>
          <p
            data-vision-reveal
            className="mt-5 text-sm leading-relaxed text-white/75 md:text-base"
          >
            {t(PORT_VISION.bodyAr, PORT_VISION.bodyEn)}
          </p>

          <ul className="mt-8 space-y-4">
            {PORT_VISION.highlights.map((item) => (
              <li
                key={item.labelEn}
                data-vision-reveal
                className="flex gap-4 border-s-2 border-[#4ECDC4]/40 ps-4"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t(item.labelAr, item.labelEn)}
                  </p>
                  <p className="mt-0.5 text-xs text-white/55">
                    {t(item.descAr, item.descEn)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
