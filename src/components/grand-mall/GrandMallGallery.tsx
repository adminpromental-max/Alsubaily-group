import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_GALLERY } from "@/data/grand-mall-content";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallGallery() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0908]"
      style={{ minHeight: "120vh" }}
    >
      <div className="absolute left-6 top-8 z-10 md:left-8 md:top-12">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
          {t("معرض بصري", "Visual Gallery")}
        </p>
        <h2 className="font-heading mt-1 text-2xl font-bold text-white md:text-3xl">
          {t("جراند مول", "Grand Mall")}
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex h-[100svh] items-center gap-4 px-6 pt-20 will-change-transform md:gap-6 md:px-8"
      >
        {GRAND_MALL_GALLERY.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="gm-gallery-slide relative h-[55vh] w-[min(78vw,420px)] shrink-0 overflow-hidden rounded-3xl border border-[#C9A962]/15 md:h-[62vh] md:w-[480px]"
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
