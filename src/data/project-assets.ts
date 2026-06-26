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
