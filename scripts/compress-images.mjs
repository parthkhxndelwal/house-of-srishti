/**
 * In-place image compressor for public/. Quality-preserving:
 * - JPEG: auto-orient from EXIF, then mozjpeg q82 (visually lossless for photos).
 * - PNG:  lossless re-encode (max zlib effort), no quantization.
 * A re-encoded file is written back only if it is actually smaller.
 *
 * Run: node scripts/compress-images.mjs
 * ponytail: q82/lossless-png is the "no visible loss" default; hero PNGs barely
 * shrink losslessly — convert those to WebP separately if size still matters.
 */
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public";

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const fmt = (n) => (n / 1024 / 1024).toFixed(2) + " MB";

let before = 0, after = 0, changed = 0, skipped = 0;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";
  const isPng = ext === ".png";
  if (!isJpeg && !isPng) continue;

  const orig = await readFile(file);
  let out;
  if (isJpeg) {
    out = await sharp(orig).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  } else {
    out = await sharp(orig).png({ compressionLevel: 9, effort: 10 }).toBuffer();
  }

  before += orig.length;
  if (out.length < orig.length) {
    await writeFile(file, out);
    after += out.length;
    changed++;
    console.log(`✓ ${file}  ${fmt(orig.length)} → ${fmt(out.length)}`);
  } else {
    after += orig.length;
    skipped++;
    console.log(`· ${file}  kept (${fmt(orig.length)}, re-encode not smaller)`);
  }
}

console.log(`\nDone. ${changed} compressed, ${skipped} kept.`);
console.log(`Total: ${fmt(before)} → ${fmt(after)}  (saved ${fmt(before - after)})`);
