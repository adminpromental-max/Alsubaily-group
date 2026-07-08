/** Real asset paths for projects with uploaded media */
import { dammamAsset, beachAsset, tidaraAsset, highRiseAsset, newBeachAsset } from "@/data/asset-paths";

export const REAL_PROJECT_ASSETS: Record<
  string,
  { hero: string; gallery: string[] }
> = {
  "dammam-olympic-city": {
    hero: dammamAsset("WORLD STADIUMS FOOTBALL STADIUM/MAIN MASTER PLAN.png"),
    gallery: [
      dammamAsset("WORLD STADIUMS FOOTBALL STADIUM/MAIN MASTER PLAN.png"),
      dammamAsset("PLAY BALL SQUARE/PLAY BALL SQUARE.png"),
      dammamAsset("POLO SIDE SQUARE/POLO SIDE SQUARE.png"),
      dammamAsset("RUNNER SQUARE/RUNNER SQUARE.png"),
      dammamAsset("BIKE RIDE SQUARE/BIKE RIDE SQUARE.png"),
      dammamAsset("GOLF ICE SQUARE/GOLF ICE SQUARE.png"),
      dammamAsset("dammam-City-landscape.png"),
    ],
  },
  "alshubaily-high-rise": {
    hero: highRiseAsset("hero.jpeg"),
    gallery: [
      highRiseAsset("hero.jpeg"),
      highRiseAsset("WhatsApp Image 2026-07-07 at 6.32.36 PM.jpeg"),
      highRiseAsset("5.jpeg"),
      highRiseAsset("6.jpeg"),
      highRiseAsset("8.jpeg"),
      highRiseAsset("9.jpeg"),
    ],
  },
  "sultanat-al-sharq": {
    hero: "/assets/projects/سلطانه-الشرق/Hero Section - الجزر.png",
    gallery: [
      "/assets/projects/سلطانه-الشرق/Hero Section - الجزر.png",
      "/assets/projects/سلطانه-الشرق/الجزر.png",
      "/assets/projects/سلطانه-الشرق/Private Beach - Perspective.png",
      "/assets/projects/سلطانه-الشرق/Luxury Palace.png",
      "/assets/projects/سلطانه-الشرق/Central Zone.png",
      "/assets/projects/سلطانه-الشرق/Infrastructure-1.png",
      "/assets/projects/سلطانه-الشرق/Infrastructure-2.png",
      "/assets/projects/سلطانه-الشرق/Infrastructure-3.png",
      "/assets/projects/سلطانه-الشرق/Arial Detail.png",
    ],
  },
  "hail-corniche": {
    hero: "/assets/projects/Hail-cournish/Hero-section.png",
    gallery: [
      "/assets/projects/Hail-cournish/Hero-section.png",
      "/assets/projects/Hail-cournish/1.png",
      "/assets/projects/Hail-cournish/2.png",
      "/assets/projects/Hail-cournish/3.png",
      "/assets/projects/Hail-cournish/4.png",
      "/assets/projects/Hail-cournish/5.png",
    ],
  },
  "al-zahraa": {
    hero: "/assets/projects/Alzahraa2/hero.png",
    gallery: [
      "/assets/projects/Alzahraa2/hero.png",
      "/assets/projects/Alzahraa2/1.png",
      "/assets/projects/Alzahraa2/2.png",
      "/assets/projects/Alzahraa2/3.png",
      "/assets/projects/Alzahraa2/4.png",
      "/assets/projects/Alzahraa2/5.png",
      "/assets/projects/Alzahraa2/6.png",
      "/assets/projects/Alzahraa2/7.png",
      "/assets/projects/Alzahraa2/8.png",
    ],
  },
  "alshubaily-new-beach": {
    hero: newBeachAsset("1.jpeg"),
    gallery: [
      newBeachAsset("1.jpeg"),
      newBeachAsset("2.jpeg"),
      newBeachAsset("3.jpeg"),
      newBeachAsset("4.jpeg"),
    ],
  },
  "rabia-makkah": {
    hero: "/assets/projects/rabia-road/WhatsApp Image 2026-06-25 at 3.27.46 PM.jpeg",
    gallery: [
      "/assets/projects/rabia-road/WhatsApp Image 2026-06-25 at 3.27.46 PM.jpeg",
      "/assets/projects/rabia-road/WhatsApp Image 2026-06-25 at 3.27.46 PM (1).jpeg",
      "/assets/projects/rabia-road/WhatsApp Image 2026-06-25 at 3.27.46 PM (2).jpeg",
      "/assets/projects/rabia-road/WhatsApp Image 2026-06-25 at 3.27.46 PM (3).jpeg",
    ],
  },
};

export const FEATURED_SLUGS = [
  "dammam-olympic-city",
  "tidara-towers",
  "alshubaily-new-beach",
];
