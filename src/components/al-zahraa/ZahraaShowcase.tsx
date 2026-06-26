import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/contexts/lang-context";
import { ZAHRAA_SHOWCASE } from "@/data/al-zahraa-content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ZahraaShowcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll("[data-flip-card]"),
      { y: 40, opacity: 0, rotateY: -15 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1A2E38] py-16 md:py-20"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#7EC8E3]">
          {t("اكتشف المزيد", "Discover More")}
        </p>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {ZAHRAA_SHOWCASE.map((item, i) => {
            const isFlipped = flipped === i;
            return (
              <button
                key={item.id}
                type="button"
                data-flip-card
                onClick={() => setFlipped(isFlipped ? null : i)}
                className="group relative h-[320px] w-full md:h-[380px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={cn(
                    "absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isFlipped && "[transform:rotateY(180deg)]",
                  )}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="absolute inset-0 overflow-hidden rounded-2xl border border-[#7EC8E3]/20 shadow-xl md:rounded-3xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={item.src}
                      alt={t(item.titleAr, item.titleEn)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E38]/80 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-start">
                      <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                        {t(item.titleAr, item.titleEn)}
                      </h3>
                      <p className="mt-1 text-xs text-[#7EC8E3]">
                        {t("اضغط للتفاصيل", "Tap for details")}
                      </p>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-2xl border border-[#7EC8E3]/30 bg-gradient-to-br from-[#1E6B8A] to-[#0c2a3a] p-6 text-start md:rounded-3xl md:p-8"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                      {t(item.titleAr, item.titleEn)}
                    </h3>
                    <p className="mt-3 text-sm leading-8 text-white/80">
                      {t(item.descAr, item.descEn)}
                    </p>
                    <span className="mt-4 text-xs text-[#7EC8E3]">
                      {t("اضغط للعودة", "Tap to flip back")}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
