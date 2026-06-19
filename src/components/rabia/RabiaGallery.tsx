import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  RABIA_GALLERY,
  RABIA_GALLERY_HEADER,
  type RabiaGalleryItem,
} from "@/data/rabia-content";

gsap.registerPlugin(ScrollTrigger);

function GalleryItem({
  item,
  onOpen,
}: {
  item: RabiaGalleryItem;
  onOpen: (item: RabiaGalleryItem) => void;
}) {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    onOpen(item);
  };

  return (
    <button
      className={`ocg-item ${isOpen ? "ocg-item--open" : ""}`}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={t(item.altAr, item.altEn)}
      type="button"
    >
      <img
        src={item.image}
        alt={t(item.altAr, item.altEn)}
        className="ocg-img absolute inset-0 h-full w-full"
        loading="lazy"
      />
      <span className="ocg-ring" aria-hidden />
      <span className="ocg-shine" aria-hidden />
      <span className="ocg-corner" aria-hidden />
    </button>
  );
}

export function RabiaGallery() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxItem, setLightboxItem] = useState<RabiaGalleryItem | null>(
    null,
  );

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

  /* Drag-to-scroll on the track */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;
    let scrollLeft = 0;
    let isDragging = false;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = "grabbing";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX);
    };
    const onMouseUp = () => {
      isDragging = false;
      track.style.cursor = "grab";
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const closeLightbox = () => setLightboxItem(null);

  return (
    <div ref={sectionRef} id="rabia-gallery" className="olympic-gallery">
      <div className="olympic-gallery-header">
        <p
          data-gallery-reveal
          className="olympic-gallery-eyebrow"
        >
          {t(RABIA_GALLERY_HEADER.eyebrowAr, RABIA_GALLERY_HEADER.eyebrowEn)}
        </p>
        <h2
          data-gallery-reveal
          className="olympic-gallery-title"
        >
          {t(RABIA_GALLERY_HEADER.titleAr, RABIA_GALLERY_HEADER.titleEn)}
        </h2>
      </div>

      <div data-gallery-reveal className="tidara-ocg ocg-wrap">
        <div className="ocg-fade ocg-fade--start" aria-hidden />
        <div className="ocg-fade ocg-fade--end" aria-hidden />
        <div ref={trackRef} className="ocg-track">
          {RABIA_GALLERY.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onOpen={setLightboxItem}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <>
          <button
            className="ocg-lightbox-backdrop"
            onClick={closeLightbox}
            aria-label={t("إغلاق", "Close")}
            type="button"
          />
          <button
            className="ocg-lightbox-close"
            onClick={closeLightbox}
            aria-label={t("إغلاق", "Close")}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="fixed inset-4 z-[105] flex items-center justify-center md:inset-12">
            <img
              src={lightboxItem.image}
              alt={t(lightboxItem.altAr, lightboxItem.altEn)}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-[0_32px_100px_rgba(0,0,0,0.7)]"
            />
          </div>
        </>
      )}
    </div>
  );
}
