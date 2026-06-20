/** Real asset paths for projects with uploaded media */
import { dammamAsset, beachAsset, tidaraAsset } from "@/data/asset-paths";

export const REAL_PROJECT_ASSETS: Record<
  string,
  { hero: string; gallery: string[] }
> = {
  "dammam-olympic-city": {
    hero: dammamAsset("Hero.png"),
    gallery: [
      dammamAsset("Hero.png"),
      dammamAsset("1.png"),
      dammamAsset("2.png"),
      dammamAsset("3.png"),
      dammamAsset("4.jpg"),
      dammamAsset("5.jpg"),
      dammamAsset("6.jpg"),
      dammamAsset("7.jpg"),
    ],
  },
  "alshubaily-high-rise": {
    hero: "/assets/projects/Twin-Tower/Hero.jpg",
    gallery: [
      "/assets/projects/Twin-Tower/Hero.jpg",
      "/assets/projects/Twin-Tower/1.jpg",
      "/assets/projects/Twin-Tower/2.jpg",
      "/assets/projects/Twin-Tower/3.jpg",
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
