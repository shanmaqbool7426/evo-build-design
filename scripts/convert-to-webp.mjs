// One-off asset optimisation: convert every photo PNG in src/assets to WebP.
// Photographic PNGs are huge (1.7–2.9 MB each); WebP at quality 82 renders the
// same image ~10x smaller with no visible loss. Run: node scripts/convert-to-webp.mjs
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = new URL("../src/assets/", import.meta.url);
const dirPath = fileURLToPath(dir);
const pngs = (await readdir(dirPath)).filter((f) => f.endsWith(".png"));

for (const file of pngs) {
  const out = file.replace(/\.png$/, ".webp");
  await sharp(fileURLToPath(new URL(file, dir))).webp({ quality: 82 }).toFile(dirPath + out);
  console.log(`${file} -> ${out}`);
}
console.log(`Converted ${pngs.length} image(s).`);
