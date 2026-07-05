import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/assets/projects/Grand-Mall";
const MAX_WIDTH = 1920;
const QUALITY = 78;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name) && !entry.name.endsWith(".webp")) {
      files.push(full);
    }
  }
  return files;
}

async function compress(file) {
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const meta = await sharp(file).metadata();
  const pipeline = sharp(file).rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: QUALITY, effort: 4 }).toFile(out);

  const [before, after] = await Promise.all([
    fs.stat(file),
    fs.stat(out),
  ]);
  return { file, out, before: before.size, after: after.size };
}

const files = await walk(ROOT);
const results = [];
for (const file of files) {
  results.push(await compress(file));
}

const saved = results.reduce((sum, r) => sum + (r.before - r.after), 0);
console.log(`Compressed ${results.length} images`);
console.log(`Saved ${(saved / 1024 / 1024).toFixed(1)} MB total`);
for (const r of results.sort((a, b) => b.before - a.before).slice(0, 8)) {
  console.log(
    `${path.basename(r.file)}: ${(r.before / 1024 / 1024).toFixed(1)}MB → ${(r.after / 1024 / 1024).toFixed(2)}MB`,
  );
}
