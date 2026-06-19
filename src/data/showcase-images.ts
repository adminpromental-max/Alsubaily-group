/** Curated project photos synced from Google Drive — bundled as assets */
import img03 from "@/assets/showcase/03.jpg";
import img04 from "@/assets/showcase/04.jpg";
import img06 from "@/assets/showcase/06.jpg";
import img10 from "@/assets/showcase/10.jpg";
import img11 from "@/assets/showcase/11.jpg";
import img12 from "@/assets/showcase/12.jpg";
import img13 from "@/assets/showcase/13.jpg";
import img14 from "@/assets/showcase/14.jpg";
import img15 from "@/assets/showcase/15.jpg";
import img16 from "@/assets/showcase/16.jpg";
import img17 from "@/assets/showcase/17.jpg";
import img18 from "@/assets/showcase/18.jpg";
import img19 from "@/assets/showcase/19.jpg";
import img20 from "@/assets/showcase/20.jpg";
import masterplan from "@/assets/showcase/masterplan.png";
import walkthrough2 from "@/assets/showcase/walkthrough-2.png";
import walkthrough3 from "@/assets/showcase/walkthrough-3.png";
import wa1 from "@/assets/showcase/wa-1.jpeg";
import wa2 from "@/assets/showcase/wa-2.jpeg";
import wa3 from "@/assets/showcase/wa-3.jpeg";

export const SHOWCASE_IMAGE_SPECS = {
  width: 1200,
  height: 1500,
  ratio: "4:5",
  format: "JPEG",
  maxFileSizeKb: 350,
  folder: "src/assets/showcase",
} as const;

export const SHOWCASE_IMAGES = [
  masterplan,
  walkthrough2,
  walkthrough3,
  img04,
  img06,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  wa1,
  wa2,
  wa3,
];
