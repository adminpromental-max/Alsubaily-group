import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  SULTANAT_GALLERY_HEADER,
  SULTANAT_GALLERY_ITEMS,
  type SultanatGalleryItem,
} from "@/data/sultanat-content";

gsap.registerPlugin(ScrollTrigger);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function GalleryItem({
  item,
  index,
  isMobile,
  isOpen,
  onToggle,
}: {
  item: SultanatGalleryItem;
  index: number;
  isMobile: boolean;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const { t } = useLang();

  const handleClick = () => onToggle(index);

  return (
    <div
      className={`ocg-item sultanat-ocg-item ${isOpen ? "ocg-item--open" : ""}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={t(item.titleAr, item.titleEn)}
      data-index={index}
    >
      <img
        src={item.src}
        alt={t(item.titleAr, item.titleEn)}
        className="ocg-img absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />

      <div className="ocg-ring" aria-hidden />
      <div className="ocg-shine" aria-hidden />

      <span className="ocg-thumb-label">{t(item.titleAr, item.titleEn)}</span>

      {!isMobile && (
        <div className="ocg-caption sultanat-ocg-hover-caption">
          <p className="ocg-caption-title">{t(item.titleAr, item.titleEn)}</p>
          <p className="ocg-caption-desc">{t(item.descAr, item.descEn)}</p>
        </div>
      )}

      {isOpen && (
        <>
          <button
            type="button"
            className="ocg-close"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(index);
            }}
            aria-label={t("إغلاق", "Close")}
          >
            ×
          </button>
          <div className="ocg-caption">
            <p className="ocg-caption-title">{t(item.titleAr, item.titleEn)}</p>
            <p className="ocg-caption-desc">{t(item.descAr, item.descEn)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export function SultanatCircleGallery() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [lightboxItem, setLightboxItem] = useState<SultanatGalleryItem | null>(
    null,
  );
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const close = useCallback(() => setActive(null), []);

  const toggle = useCallback(
    (index: number) => {
      if (isMobile) {
        const item = SULTANAT_GALLERY_ITEMS[index];
        setLightboxItem((prev) =>
          prev?.id === item.id ? null : item,
        );
        return;
      }
      setActive((prev) => (prev === index ? null : index));
    },
    [isMobile],
  );

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-gallery-reveal]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);

    const openEl = trackRef.current?.querySelector(".ocg-item--open");
    openEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    return () => document.removeEventListener("keydown", onKey);
  }, [active, close]);

  useEffect(() => {
    if (!lightboxItem) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxItem, closeLightbox]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(".ocg-item--open")) return;
      dragRef.current = {
        active: true,
        startX: e.pageX,
        scrollLeft: track.scrollLeft,
      };
      track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      const dx = e.pageX - dragRef.current.startX;
      track.scrollLeft = dragRef.current.scrollLeft - dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      dragRef.current.active = false;
      track.releasePointerCapture(e.pointerId);
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sultanat-ocg relative overflow-hidden bg-[#E8D5C4] py-16 md:py-24"
      id="sultanat-gallery"
    >
      <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
        <p
          data-gallery-reveal
          className="text-xs font-medium uppercase tracking-[0.35em] text-[#C45C3E]"
        >
          {t(SULTANAT_GALLERY_HEADER.eyebrowAr, SULTANAT_GALLERY_HEADER.eyebrowEn)}
        </p>
        <h2
          data-gallery-reveal
          className="mt-2 font-heading text-3xl font-bold text-[#2C1810] md:text-4xl"
        >
          {t(SULTANAT_GALLERY_HEADER.titleAr, SULTANAT_GALLERY_HEADER.titleEn)}
        </h2>
        <p data-gallery-reveal className="sultanat-ocg-hint">
          {t(
            isMobile
              ? "اسحب للتصفح · اضغط على الصورة للتكبير"
              : "اسحب للتصفح · اضغط أو مرّر لتوسيع الصورة",
            isMobile
              ? "Swipe to browse · Tap an image to enlarge"
              : "Drag to browse · Click or hover to expand an image",
          )}
        </p>
      </div>

      <div
        data-gallery-reveal
        ref={wrapRef}
        className={`ocg-wrap sultanat-ocg-wrap ${active !== null ? "ocg-wrap--has-active" : ""}`}
      >
        <div className="ocg-fade ocg-fade--start sultanat-ocg-fade" aria-hidden />
        <div className="ocg-fade ocg-fade--end sultanat-ocg-fade" aria-hidden />
        <div ref={trackRef} className="ocg-track sultanat-ocg-track">
          {SULTANAT_GALLERY_ITEMS.map((item, i) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={i}
              isMobile={isMobile}
              isOpen={active === i}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>

      {lightboxItem && (
        <>
          <button
            type="button"
            className="ocg-lightbox-backdrop"
            aria-label={t("إغلاق", "Close")}
            onClick={closeLightbox}
          />
          <button
            type="button"
            className="ocg-lightbox-close"
            aria-label={t("إغلاق", "Close")}
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <div
            className="sultanat-ocg-lightbox"
            role="dialog"
            aria-modal="true"
          >
            <div className="sultanat-ocg-lightbox-media">
              <img
                src={lightboxItem.src}
                alt={t(lightboxItem.titleAr, lightboxItem.titleEn)}
                className="sultanat-ocg-lightbox-img"
              />
            </div>
            <div className="sultanat-ocg-lightbox-caption">
              <p className="sultanat-ocg-lightbox-title">
                {t(lightboxItem.titleAr, lightboxItem.titleEn)}
              </p>
              <p className="sultanat-ocg-lightbox-desc">
                {t(lightboxItem.descAr, lightboxItem.descEn)}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
