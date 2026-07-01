import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { PORT_GALLERY, PORT_LOCATION } from "@/data/port-content";

gsap.registerPlugin(ScrollTrigger);

export function PortGallery() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-gallery-item]"),
      { y: 24, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="port-section port-section--deep">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4ECDC4]">
            {t("معرض التصاميم", "Design Gallery")}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("جمال الواجهة البحرية", "Waterfront Beauty")}
          </h2>
        </div>

        <div className="port-gallery-grid">
          {PORT_GALLERY.map((src, i) => (
            <div
              key={src}
              data-gallery-item
              className="port-gallery-item port-frame overflow-hidden rounded-xl md:rounded-2xl"
            >
              <img
                src={src}
                alt={t(`الشبيلي بورت — صورة ${i + 1}`, `AlShubaily Port — Image ${i + 1}`)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortLocation() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-location-reveal]"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="port-section port-section--light">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <MapPin
          data-location-reveal
          className="mx-auto h-8 w-8 text-[#1E4D6B]"
          strokeWidth={1.25}
        />
        <h2
          data-location-reveal
          className="font-heading mt-4 text-3xl font-bold text-[#0B1624] md:text-4xl"
        >
          {t(PORT_LOCATION.titleAr, PORT_LOCATION.titleEn)}
        </h2>
        <p
          data-location-reveal
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3D5266] md:text-base"
        >
          {t(PORT_LOCATION.bodyAr, PORT_LOCATION.bodyEn)}
        </p>

        <div
          data-location-reveal
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {PORT_LOCATION.landmarks.map((item) => (
            <span
              key={item.labelEn}
              className="rounded-full border border-[#1E4D6B]/20 bg-white px-4 py-2 text-xs font-medium text-[#1E4D6B] md:text-sm"
            >
              {t(item.labelAr, item.labelEn)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
