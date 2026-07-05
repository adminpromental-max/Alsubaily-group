import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/assets/showcase";
const MAX_WIDTH = 1600;
const QUALITY = 78;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name) && !entry.name.endsWith(".webp"))
      files.push(full);
  }
  return files;
}

const files = await walk(ROOT);
for (const file of files) {
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const meta = await sharp(file).metadata();
  const pipeline = sharp(file).rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: QUALITY, effort: 4 }).toFile(out);
  const [before, after] = await Promise.all([fs.stat(file), fs.stat(out)]);
  console.log(
    `${path.basename(file)} → ${(before.size / 1024 / 1024).toFixed(1)}MB to ${(after.size / 1024).toFixed(0)}KB`,
  );
}

console.log(`Done: ${files.length} images`);
