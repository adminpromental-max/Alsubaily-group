import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, Flower2, TreePalm } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_INFRASTRUCTURE } from "@/data/al-zahraa-content";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHT_ICONS = [Droplets, TreePalm, Flower2] as const;

export function ZahraaInfrastructure() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const bloomRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const bloom = bloomRef.current;
    if (!el) return;

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

      if (bloom) {
        gsap.fromTo(
          bloom,
          { scale: 0, rotate: -30, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 0.15,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 70%", once: true },
          },
        );
      }

      gsap.fromTo(
        el.querySelector("[data-infra-img]"),
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(75% at 50% 50%)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF6F9] to-[#E8F4E8] py-16 md:py-24"
    >
      <svg
        ref={bloomRef}
        aria-hidden
        className="pointer-events-none absolute end-8 top-12 h-40 w-40 text-[#1E6B8A] md:end-16 md:h-56 md:w-56"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle cx="50" cy="50" r="12" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="22"
            rx="10"
            ry="20"
            transform={`rotate(${deg} 50 50)`}
            opacity="0.7"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-infra-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#1E6B8A]">
            {t(
              ZAHRAA_INFRASTRUCTURE.titleAr,
              ZAHRAA_INFRASTRUCTURE.titleEn,
            )}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#1A2E38] md:text-4xl">
            {t(
              ZAHRAA_INFRASTRUCTURE.subtitleAr,
              ZAHRAA_INFRASTRUCTURE.subtitleEn,
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-[#1A2E38]/70">
            {t(ZAHRAA_INFRASTRUCTURE.bodyAr, ZAHRAA_INFRASTRUCTURE.bodyEn)}
          </p>
        </div>

        <div
          data-infra-img
          data-infra-reveal
          className="relative mb-10 overflow-hidden rounded-3xl shadow-xl md:mb-12"
        >
          <img
            src={ZAHRAA_INFRASTRUCTURE.image}
            alt={t(
              ZAHRAA_INFRASTRUCTURE.subtitleAr,
              ZAHRAA_INFRASTRUCTURE.subtitleEn,
            )}
            className="aspect-[21/9] w-full object-cover md:aspect-[2.4/1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E38]/40 via-transparent to-transparent" />
        </div>

        <div
          data-infra-reveal
          className="grid gap-4 md:grid-cols-3 md:gap-6"
        >
          {ZAHRAA_INFRASTRUCTURE.highlights.map((item, i) => {
            const Icon = HIGHLIGHT_ICONS[i] ?? Flower2;
            return (
              <div
                key={item.titleEn}
                className="rounded-2xl border border-[#1E6B8A]/15 bg-white/80 p-5 backdrop-blur-sm md:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E6B8A]/10 text-[#1E6B8A]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A2E38]">
                  {t(item.titleAr, item.titleEn)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A2E38]/65">
                  {t(item.descAr, item.descEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
