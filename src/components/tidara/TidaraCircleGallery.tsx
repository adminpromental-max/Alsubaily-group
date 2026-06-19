import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import {
  TIDARA_GALLERY,
  TIDARA_GALLERY_HEADER,
  type TidaraGalleryItem,
} from "@/data/tidara-content";
import { cn } from "@/lib/utils";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function GalleryItem({
  item,
  isOpen,
  isMobile,
  onToggle,
}: {
  item: TidaraGalleryItem;
  isOpen: boolean;
  isMobile: boolean;
  onToggle: () => void;
}) {
  const { t } = useLang();

  return (
    <button
      type="button"
      className={cn(
        "ocg-item",
        isOpen && "ocg-item--open",
        isMobile && isOpen && "ocg-item--lightbox",
      )}
      aria-expanded={isOpen}
      aria-label={t(item.altAr, item.altEn)}
      onClick={onToggle}
    >
      <img
        src={item.image}
        alt={t(item.altAr, item.altEn)}
        className="ocg-img absolute inset-0 h-full w-full"
        draggable={false}
      />
      <span className="ocg-ring" aria-hidden />
      <span className="ocg-shine" aria-hidden />
      <span className="ocg-corner" aria-hidden />
    </button>
  );
}

export function TidaraCircleGallery() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const [openId, setOpenId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const close = useCallback(() => setOpenId(null), []);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!openId || !isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openId, isMobile, close]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(".ocg-item--open")) return;
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
      track.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX);
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
    <section className="olympic-gallery tidara-ocg" id="tidara-gallery">
      <div className="olympic-gallery-header">
        <p className="olympic-gallery-eyebrow">
          {t(TIDARA_GALLERY_HEADER.eyebrowAr, TIDARA_GALLERY_HEADER.eyebrowEn)}
        </p>
        <h2 className="olympic-gallery-title">
          {t(TIDARA_GALLERY_HEADER.titleAr, TIDARA_GALLERY_HEADER.titleEn)}
        </h2>
      </div>

      {isMobile && openId && (
        <button
          type="button"
          className="ocg-lightbox-backdrop"
          aria-label={t("إغلاق", "Close")}
          onClick={close}
        />
      )}

      {isMobile && openId && (
        <button
          type="button"
          className="ocg-lightbox-close"
          aria-label={t("إغلاق", "Close")}
          onClick={close}
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      )}

      <div className="ocg-wrap">
        <div className="ocg-fade ocg-fade--start" aria-hidden />
        <div className="ocg-fade ocg-fade--end" aria-hidden />
        <div ref={trackRef} className="ocg-track">
          {TIDARA_GALLERY.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              isMobile={isMobile}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
