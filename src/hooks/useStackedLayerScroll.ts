import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Scroll-driven rise for stacked homepage sections (layered-cards feel). */
export function useStackedLayerScroll() {
  useEffect(() => {
    const layers = gsap.utils.toArray<HTMLElement>(".stacked-section--layer");
    if (!layers.length) return;

    const triggers: ScrollTrigger[] = [];

    layers.forEach((layer) => {
      const tween = gsap.fromTo(
        layer,
        { y: 64 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: layer,
            start: "top 98%",
            end: "top 52%",
            scrub: 0.55,
          },
        },
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);
}
