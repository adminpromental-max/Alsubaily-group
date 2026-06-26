import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { Navigation } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  HAIL_CORNICHE_CONNECT,
  HAIL_CORNICHE_CTA,
} from "@/data/hail-corniche-content";

gsap.registerPlugin(ScrollTrigger);

export function HailCornicheConnect() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-connect-reveal]"),
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1a1814] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(74,124,89,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-connect-reveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6B9B72]">
            {t(HAIL_CORNICHE_CONNECT.titleAr, HAIL_CORNICHE_CONNECT.titleEn)}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#E8E4DC] md:text-4xl">
            {t(
              HAIL_CORNICHE_CONNECT.subtitleAr,
              HAIL_CORNICHE_CONNECT.subtitleEn,
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#E8E4DC]/70 md:text-base">
            {t(HAIL_CORNICHE_CONNECT.bodyAr, HAIL_CORNICHE_CONNECT.bodyEn)}
          </p>
        </div>

        <div
          data-connect-reveal
          className="flex flex-wrap justify-center gap-3"
        >
          {HAIL_CORNICHE_CONNECT.roads.map((road) => (
            <span
              key={road.labelEn}
              className="inline-flex items-center gap-2 rounded-full border border-[#4A7C59]/35 bg-[#4A7C59]/10 px-4 py-2 text-xs text-[#E8E4DC] md:text-sm"
            >
              <Navigation className="h-3.5 w-3.5 text-[#6B9B72]" />
              {t(road.labelAr, road.labelEn)}
            </span>
          ))}
        </div>

        <div data-connect-reveal className="mt-14 text-center">
          <h3 className="font-heading text-2xl font-bold text-[#E8E4DC] md:text-3xl">
            {t(HAIL_CORNICHE_CTA.titleAr, HAIL_CORNICHE_CTA.titleEn)}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#E8E4DC]/65">
            {t(HAIL_CORNICHE_CTA.subtitleAr, HAIL_CORNICHE_CTA.subtitleEn)}
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#4A7C59]/50 bg-[#4A7C59]/15 px-8 py-3.5 text-sm font-semibold text-[#E8E4DC] transition hover:bg-[#4A7C59]/30"
          >
            {t("تواصل معنا", "Contact Us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
