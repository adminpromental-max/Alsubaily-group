import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { GRAND_MALL_CINEMA_SLIDES } from "@/data/grand-mall-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GrandMallCinema() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const screen = screenRef.current;
    if (!section || !screen) return;

    const imgs = screen.querySelectorAll("[data-cinema-slide]");
    let index = 0;

    const crossfade = () => {
      const next = (index + 1) % GRAND_MALL_CINEMA_SLIDES.length;
      const current = imgs[index];
      const upcoming = imgs[next];
      if (!current || !upcoming) return;

      gsap
        .timeline()
        .to(current, { opacity: 0, scale: 1.08, duration: 1.4, ease: "power2.inOut" })
        .fromTo(
          upcoming,
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1.06, duration: 1.6, ease: "power2.out" },
          "-=0.9",
        )
        .to(upcoming, { scale: 1.12, duration: 4.5, ease: "none" }, "-=0.2");

      index = next;
      setActive(next);
    };

    gsap.set(imgs[0], { opacity: 1, scale: 1.04 });
    gsap.to(imgs[0], { scale: 1.12, duration: 5, ease: "none" });

    const interval = window.setInterval(crossfade, 5500);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-cinema-head]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        },
      );
      gsap.fromTo(
        screen,
        { y: 40, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );
    }, section);

    return () => {
      window.clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gm-cinema relative overflow-hidden bg-[#050504] py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,169,98,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div data-cinema-head className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A962]">
            {t("تجربة سينمائية", "Cinematic Experience")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("اكتشف جراند مول", "Discover Grand Mall")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
            {t(
              "رحلة بصرية عبر وجهات المول — حركة سينمائية حية بالصور",
              "A visual journey through the mall — live cinematic motion with imagery",
            )}
          </p>
        </div>

        <div className="gm-cinema-stage mx-auto max-w-5xl">
          <div className="gm-cinema-audience" aria-hidden />
          <div ref={screenRef} className="gm-cinema-screen">
            {GRAND_MALL_CINEMA_SLIDES.map((src, i) => (
              <img
                key={src}
                data-cinema-slide
                src={src}
                alt=""
                className={cn(
                  "absolute inset-0 h-full w-full object-cover",
                  i === 0 ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            <div className="gm-cinema-scanline" aria-hidden />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {GRAND_MALL_CINEMA_SLIDES.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  active === i ? "w-8 bg-[#C9A962]" : "w-3 bg-white/25",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
