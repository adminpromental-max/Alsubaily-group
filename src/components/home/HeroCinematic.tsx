import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/v1782344165/introoooo_ckv6c3.mov";
const POSTER_URL = "/assets/hero/Hero-1.jpg";

/**
 * Cinematic hero background using the Cloudinary banner video.
 * Falls back to the static poster image on devices that can't autoplay.
 */
export function HeroCinematic() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setCanPlay(true);
    v.addEventListener("playing", onPlay, { once: true });
    // best-effort autoplay
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlay);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={POSTER_URL}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          canPlay ? "opacity-0" : "opacity-90"
        }`}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        poster={POSTER_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />
    </div>
  );
}
