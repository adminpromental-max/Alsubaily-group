import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  TIDARA_GALLERY,
  TIDARA_GALLERY_HEADER,
  type TidaraGalleryItem,
} from "@/data/tidara-content";

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
  isMobile,
  onOpen,
}: {
  item: TidaraGalleryItem;
  isMobile: boolean;
  onOpen: (item: TidaraGalleryItem) => void;
}) {
  const { t } = useLang();

  const handleClick = () => {
    if (isMobile) {
      onOpen(item);
    }
  };

  return (
    <button
      type="button"
      className="ocg-item tidara-ocg-item"
      aria-label={t(item.altAr, item.altEn)}
      onClick={handleClick}
    >
      <img
        src={item.image}
        alt={t(item.altAr, item.altEn)}
        className="ocg-img absolute inset-0 h-full w-full"
        loading="lazy"
        draggable={false}
      />
      <span className="ocg-tag">{t(item.tagAr, item.tagEn)}</span>
      <div className="ocg-caption">
        <p className="ocg-caption-tag">{t(item.tagAr, item.tagEn)}</p>
        <p className="ocg-caption-desc">{t(item.descAr, item.descEn)}</p>
      </div>
      <span className="ocg-ring" aria-hidden />
      <span className="ocg-shine" aria-hidden />
      <span className="ocg-corner" aria-hidden />
    </button>
  );
}

export function TidaraCircleGallery() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxItem, setLightboxItem] = useState<TidaraGalleryItem | null>(
    null,
  );
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

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
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

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
      dragRef.current = {
        active: true,
        startX: e.pageX - track.offsetLeft,
        scrollLeft: track.scrollLeft,
      };
      track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft =
        dragRef.current.scrollLeft - (x - dragRef.current.startX);
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
      className="olympic-gallery tidara-ocg"
      id="tidara-gallery"
    >
      <div className="olympic-gallery-header">
        <p data-gallery-reveal className="olympic-gallery-eyebrow">
          {t(TIDARA_GALLERY_HEADER.eyebrowAr, TIDARA_GALLERY_HEADER.eyebrowEn)}
        </p>
        <h2 data-gallery-reveal className="olympic-gallery-title">
          {t(TIDARA_GALLERY_HEADER.titleAr, TIDARA_GALLERY_HEADER.titleEn)}
        </h2>
        <p data-gallery-reveal className="tidara-ocg-hint">
          {t(
            isMobile
              ? "اسحب للتصفح · اضغط على الصورة للتكبير"
              : "اسحب للتصفح · مرّر المؤشر لتوسيع الصورة",
            isMobile
              ? "Swipe to browse · Tap an image to enlarge"
              : "Drag to browse · Hover to expand an image",
          )}
        </p>
      </div>

      <div data-gallery-reveal className="ocg-wrap">
        <div className="ocg-fade ocg-fade--start" aria-hidden />
        <div className="ocg-fade ocg-fade--end" aria-hidden />
        <div ref={trackRef} className="ocg-track tidara-ocg-track">
          {TIDARA_GALLERY.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              isMobile={isMobile}
              onOpen={setLightboxItem}
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
          <div className="tidara-ocg-lightbox" role="dialog" aria-modal="true">
            <div className="tidara-ocg-lightbox-media">
              <img
                src={lightboxItem.image}
                alt={t(lightboxItem.altAr, lightboxItem.altEn)}
                className="tidara-ocg-lightbox-img"
              />
            </div>
            <div className="tidara-ocg-lightbox-caption">
              <span className="tidara-ocg-lightbox-tag">
                {t(lightboxItem.tagAr, lightboxItem.tagEn)}
              </span>
              <p className="tidara-ocg-lightbox-desc">
                {t(lightboxItem.descAr, lightboxItem.descEn)}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
