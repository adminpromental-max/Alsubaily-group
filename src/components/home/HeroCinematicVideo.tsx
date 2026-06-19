import { useEffect, useRef, useState } from "react";

/**
 * HeroCinematicVideo
 * Uses remote MP4 as source with lazy load and poster fallback.
 * Top-of-page hero: autoplay, muted, loop, playsInline.
 *
 * LOCAL ASSET PREP (run locally):
 * ffmpeg -ss 00:00:02 -i input.mp4 -vframes 1 -q:v 2 poster.jpg
 * cwebp -q 80 poster.jpg -o poster.webp
 * ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -an hero.webm
 * ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -an hero-1080.mp4
 *
 * Cloudinary remote used: https://res.cloudinary.com/dfzaghfsv/video/upload/v1781801274/Cinematic_architectural_film__on4pal.mp4
 */

export function HeroCinematicVideo({
  poster = "/assets/projects/Tidara-tower/Hero.png",
  mp4 =
    "https://res.cloudinary.com/dfzaghfsv/video/upload/v1781801274/Cinematic_architectural_film__on4pal.mp4",
  webm = "/assets/projects/Tidara-tower/hero.webm", // optional local/webm path
}: {
  poster?: string;
  mp4?: string;
  webm?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[min(62vw,560px)] min-h-[360px] overflow-hidden rounded-2xl">
      {!inView && (
        <img src={poster} alt="Tidara Towers" className="w-full h-full object-cover" />
      )}

      {inView && (
        <video
          className="w-full h-full object-cover"
          poster={poster}
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          onCanPlay={() => setPlay(true)}
        >
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
          {/* Fallback image */}
        </video>
      )}

      {/* CTA to start interactive 3D (placeholder) */}
      <button
        aria-label="Start 3D tour"
        onClick={() => {
          // integrate Three.js loader / open modal
          // Placeholder: toggle play state
          setPlay((s) => !s);
        }}
        className="absolute start-6 bottom-6 rounded-full bg-[#C9A962] px-4 py-2 text-[#14110D] font-semibold shadow-lg"
      >
        بدء الجولة
      </button>
    </div>
  );
}
