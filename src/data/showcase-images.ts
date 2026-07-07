/** Project gallery photos — served from public/assets/showcase */
const SHOWCASE_DIR = "/assets/showcase";

export const SHOWCASE_IMAGE_SPECS = {
  width: 1200,
  height: 1500,
  ratio: "4:5",
  format: "WebP",
  maxFileSizeKb: 350,
  folder: "public/assets/showcase",
} as const;

function showcase(file: string) {
  return encodeURI(`${SHOWCASE_DIR}/${file}`);
}

/** Synced with public/assets/showcase — WebP exports only */
export const SHOWCASE_IMAGES = [
  showcase("01.webp"),
  showcase("04.webp"),
  showcase("05.webp"),
  showcase("06.webp"),
  showcase("1.webp"),
  showcase("10.webp"),
  showcase("11.webp"),
  showcase("14.webp"),
  showcase("17.webp"),
  showcase("18.webp"),
  showcase("19.webp"),
  showcase("20.webp"),
  showcase("21.webp"),
  showcase("4.webp"),
  showcase("5.webp"),
  showcase("6.webp"),
  showcase("7.webp"),
  showcase("8.webp"),
  showcase("9.webp"),
  showcase("F  -   20.webp"),
  showcase("Hero-section.webp"),
  showcase("Port (23).webp"),
  showcase("Port (29).webp"),
  showcase("Port (36).webp"),
  showcase("Port (40).webp"),
  showcase("Port (42).webp"),
  showcase("T  01.webp"),
  showcase("final Co    -     05.webp"),
  showcase("مكاتب.webp"),
];
