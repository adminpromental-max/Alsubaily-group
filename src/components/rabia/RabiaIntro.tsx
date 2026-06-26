import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landmark, MapPin, Star } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { rabiaAsset } from "@/data/asset-paths";
import {
  RABIA_INTRO,
  RABIA_INTRO_HIGHLIGHTS,
  RABIA_LOCATION,
} from "@/data/rabia-content";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHT_ICONS = [Star, Landmark, MapPin] as const;

function ArcDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-10 -translate-y-[calc(100%-1px)] text-[#FAF8F4]"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
      >
        <path
          fill="currentColor"
          d="M0,40 C360,90 720,0 1080,50 C1260,70 1380,20 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export function RabiaIntro() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll<HTMLElement>("[data-intro-reveal]"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        section.querySelectorAll<HTMLElement>("[data-intro-card]"),
        { y: 28, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section.querySelector("[data-intro-cards]"),
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      if (imageWrap) {
        gsap.to(imageWrap, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rabia-intro"
      className="relative overflow-hidden bg-[#FAF8F4] px-6 pb-20 pt-6 md:px-8 md:pb-28 md:pt-10"
    >
      <ArcDivider />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -end-32 top-16 h-96 w-96 rounded-full bg-[#C9A962]/8 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -start-20 bottom-24 h-72 w-72 rounded-full bg-[#8B4513]/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div data-intro-reveal className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A962]/70" aria-hidden />
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#9A7B3A]">
                {t(RABIA_INTRO.eyebrowAr, RABIA_INTRO.eyebrowEn)}
              </p>
            </div>

            <h2
              data-intro-reveal
              className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#1A1612] md:text-4xl"
            >
              {t(RABIA_INTRO.titleAr, RABIA_INTRO.titleEn)}
            </h2>

            <blockquote
              data-intro-reveal
              className="relative mt-8 border-s-[3px] border-[#C9A962] ps-5 md:ps-6"
            >
              <p className="font-heading text-2xl leading-snug text-[#1A1612] md:text-3xl lg:text-[1.85rem]">
                {t(RABIA_INTRO.quoteAr, RABIA_INTRO.quoteEn)}
              </p>
            </blockquote>

            <p
              data-intro-reveal
              className="mt-8 text-lg leading-relaxed text-[#1A1612]/90 md:text-xl"
            >
              {t(RABIA_INTRO.leadAr, RABIA_INTRO.leadEn)}
            </p>
            <p
              data-intro-reveal
              className="mt-4 text-base leading-relaxed text-[#5C5348] md:text-lg"
            >
              {t(RABIA_INTRO.bodyAr, RABIA_INTRO.bodyEn)}
            </p>

            <div
              data-intro-reveal
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#9A7B3A]"
            >
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span>{t(RABIA_LOCATION.highlights[0].labelAr, RABIA_LOCATION.highlights[0].labelEn)} · {t(RABIA_LOCATION.highlights[0].valueAr, RABIA_LOCATION.highlights[0].valueEn)}</span>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div
              ref={imageWrapRef}
              data-intro-reveal
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="olympic-section-img-wrap">
                <div className="olympic-section-img aspect-[4/5] min-h-[320px] md:min-h-[460px]">
                  <img
                    src={rabiaAsset(
                      "WhatsApp Image 2026-06-18 at 10.07.39 PM (1).jpeg",
                    )}
                    alt={t(
                      "منظر جوي لمشروع الشبيلي وأهل البيت",
                      "Aerial view of AlShubaily & Ahl al-Bayt",
                    )}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="olympic-img-corner olympic-img-corner--tl" aria-hidden />
                  <span className="olympic-img-corner olympic-img-corner--br" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/35 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 start-4 rounded-2xl border border-[#E8E0D4] bg-white/95 px-5 py-4 shadow-[0_16px_48px_rgba(26,22,18,0.12)] backdrop-blur-md md:-start-6 md:bottom-6">
                <p className="font-heading text-3xl font-semibold text-[#C9A962]">
                  230K
                </p>
                <p className="mt-1 max-w-[140px] text-xs leading-relaxed text-[#5C5348]">
                  {t("م² — إجمالي مساحة المشروع", "m² Total Project Area")}
                </p>
              </div>

              {/* Accent ring */}
              <div
                className="pointer-events-none absolute -end-6 -top-6 hidden h-24 w-24 rounded-full border border-[#C9A962]/25 md:block"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div
          data-intro-cards
          className="mt-16 grid gap-4 sm:grid-cols-3 md:mt-20 md:gap-5"
        >
          {RABIA_INTRO_HIGHLIGHTS.map((item, i) => {
            const Icon = HIGHLIGHT_ICONS[i] ?? Star;
            return (
              <article
                key={item.id}
                data-intro-card
                className="group relative overflow-hidden rounded-2xl border border-[#E8E0D4] bg-white p-5 shadow-[0_4px_0_#EDE8E0,0_12px_40px_rgba(26,22,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A962]/40 hover:shadow-[0_6px_0_#d4c9b4,0_20px_50px_rgba(26,22,18,0.1)] md:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A962]/25 bg-[#C9A962]/10 text-[#9A7B3A] transition-colors group-hover:bg-[#C9A962]/18">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1A1612]">
                  {t(item.titleAr, item.titleEn)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C5348]">
                  {t(item.bodyAr, item.bodyEn)}
                </p>
                <div
                  className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-[#C9A962]/5 transition-transform duration-500 group-hover:scale-125"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
