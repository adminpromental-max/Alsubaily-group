/** Real asset paths for projects with uploaded media */
import { dammamAsset, beachAsset, tidaraAsset } from "@/data/asset-paths";

export const REAL_PROJECT_ASSETS: Record<
  string,
  { hero: string; gallery: string[] }
> = {
  "dammam-olympic-city": {
    hero: dammamAsset("City-landscape.png"),
    gallery: [
      dammamAsset("City-landscape.png"),
      dammamAsset("Football-studium.jpg"),
      dammamAsset("Ball-Area.png"),
      dammamAsset("Polo.png"),
      dammamAsset("Runner's-zone..png"),
      dammamAsset("Bike-ride.png"),
      dammamAsset("Walway.png"),
      dammamAsset("Gulf.png"),
    ],
  },
  "alshubaily-high-rise": {
    hero: "/assets/projects/High-rise/لقطه-بانوراميه.png",
    gallery: [
      "/assets/projects/High-rise/لقطه-بانوراميه.png",
      "/assets/projects/High-rise/السياق-الجغرافي.png",
      "/assets/projects/High-rise/المارينا.png",
      "/assets/projects/High-rise/فلل.png",
      "/assets/projects/High-rise/جراند-مول.png",
      "/assets/projects/High-rise/مكاتب.png",
      "/assets/projects/High-rise/النهر-الصناعي.png",
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
    hero: beachAsset("Hero.jpg"),
    gallery: [
      beachAsset("Hero.jpg"),
      beachAsset("1.jpg"),
      beachAsset("2.jpg"),
      beachAsset("3.jpg"),
    ],
  },
};

export const FEATURED_SLUGS = [
  "dammam-olympic-city",
  "tidara-towers",
  "alshubaily-new-beach",
];
