/**
 * Generates the ARZ Construction favicon set from the brand mark defined in
 * public/favicon.svg (navy hexagon shield + gold A-frame, 44x44 viewBox).
 *
 * Outputs:
 *   public/favicon.ico        multi-size ICO (16/32/48/96/256, PNG-compressed entries)
 *   public/icon-192.png       PWA / apple-touch-icon
 *   public/icon-512.png       PWA / Organization schema logo
 *
 * Run: node scripts/gen-favicon.mjs
 * Pure Node (zlib only) — no image dependencies.
 */
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = resolve(ROOT, "public");

// ── Brand geometry (viewBox 0 0 44 44, matching public/favicon.svg) ──────────
const NAVY = [0x12, 0x3b, 0x7a]; // #123B7A
const GOLD = [0xf5, 0xc4, 0x00]; // #F5C400
const HEX = [
  [22, 2], [38, 11], [38, 33], [22, 42], [6, 33], [6, 11],
];
const BORDER_W = 2.2 / 2;
const A_FRAME = [
  [[10, 31], [22, 10]],
  [[22, 10], [34, 31]],
];
const A_W = 3 / 2;
const CROSS = [[14, 24], [30, 24]];
const CROSS_W = 2.5 / 2;
const APEX = { x: 22, y: 10, r: 1.8 };

// ── Rasteriser ────────────────────────────────────────────────────────────────
const MASTER = 1536; // divisible by 512/256/192/96/48/32/16 → clean box downsample

function inPoly(px, py, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function distSeg(px, py, [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return Math.hypot(px - cx, py - cy);
}

function distHexEdge(px, py) {
  let d = Infinity;
  for (let i = 0; i < HEX.length; i++) {
    d = Math.min(d, distSeg(px, py, HEX[i], HEX[(i + 1) % HEX.length]));
  }
  return d;
}

function classify(u, v) {
  // Draw order mirrors the SVG: A-frame, crossbar and apex dot sit on top.
  for (const seg of A_FRAME) if (distSeg(u, v, seg[0], seg[1]) <= A_W + 0.35) return GOLD;
  if (distSeg(u, v, CROSS[0], CROSS[1]) <= CROSS_W + 0.35) return GOLD;
  if (Math.hypot(u - APEX.x, v - APEX.y) <= APEX.r + 0.35) return GOLD;
  if (distHexEdge(u, v) <= BORDER_W + 0.35) return GOLD;
  if (inPoly(u, v, HEX)) return NAVY;
  return null; // transparent
}

function renderMaster() {
  const out = new Uint8Array(MASTER * MASTER * 4);
  const scale = 44 / MASTER;
  for (let y = 0; y < MASTER; y++) {
    const v = (y + 0.5) * scale;
    for (let x = 0; x < MASTER; x++) {
      const c = classify((x + 0.5) * scale, v);
      if (!c) continue;
      const i = (y * MASTER + x) * 4;
      out[i] = c[0];
      out[i + 1] = c[1];
      out[i + 2] = c[2];
      out[i + 3] = 255;
    }
  }
  return out;
}

function downsample(master, size) {
  const f = MASTER / size; // integer for every target size below
  const out = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let dy = 0; dy < f; dy++) {
        for (let dx = 0; dx < f; dx++) {
          const i = ((y * f + dy) * MASTER + (x * f + dx)) * 4;
          const al = master[i + 3];
          r += master[i] * al;
          g += master[i + 1] * al;
          b += master[i + 2] * al;
          a += al;
        }
      }
      const o = (y * size + x) * 4;
      if (a > 0) {
        out[o] = Math.round(r / a);
        out[o + 1] = Math.round(g / a);
        out[o + 2] = Math.round(b / a);
      }
      out[o + 3] = Math.round(a / (f * f));
    }
  }
  return out;
}

// ── PNG encoder (8-bit RGBA, filter 0) ────────────────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function png(rgba, size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type RGBA
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter: none
    Buffer.from(rgba.buffer, rgba.byteOffset + y * size * 4, size * 4).copy(
      raw,
      y * (size * 4 + 1) + 1,
    );
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ── ICO container (PNG-compressed entries, 256 encoded as 0) ──────────────────
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);
  let offset = 6 + entries.length * 16;
  const dir = [];
  for (const { size, data } of entries) {
    const e = Buffer.alloc(16);
    e[0] = size >= 256 ? 0 : size;
    e[1] = size >= 256 ? 0 : size;
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bpp
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    dir.push(e);
    offset += data.length;
  }
  return Buffer.concat([header, ...dir, ...entries.map((e) => e.data)]);
}

// ── Run ───────────────────────────────────────────────────────────────────────
const master = renderMaster();
const icoSizes = [16, 32, 48, 96, 256];
const icoEntries = icoSizes.map((size) => ({
  size,
  data: png(downsample(master, size), size),
}));
writeFileSync(resolve(PUBLIC, "favicon.ico"), ico(icoEntries));
writeFileSync(resolve(PUBLIC, "icon-192.png"), png(downsample(master, 192), 192));
writeFileSync(resolve(PUBLIC, "icon-512.png"), png(downsample(master, 512), 512));
console.log("favicon.ico (" + icoSizes.join("/") + "), icon-192.png, icon-512.png generated");
