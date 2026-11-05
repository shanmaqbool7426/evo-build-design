/**
 * Submits every URL in public/sitemap.xml to IndexNow (api.indexnow.org),
 * which fans the notification out to Bing, Yandex, Seznam and other
 * participating search engines in one request.
 *
 * Requires the key file to already be hosted at the site root — see
 * public/<key>.txt (generated from the Bing Webmaster Tools IndexNow page).
 *
 * Run: node scripts/submit-indexnow.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = resolve(ROOT, "public");
const HOST = "www.arzconstructionltd.com";

const keyFile = readdirSync(PUBLIC).find((f) => /^[0-9a-f]{32}\.txt$/i.test(f));
if (!keyFile) {
  console.error("No IndexNow key file (32 hex chars + .txt) found in public/.");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");

const sitemap = readFileSync(resolve(PUBLIC, "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
  console.error("No <loc> entries found in public/sitemap.xml.");
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URLs to IndexNow as host "${HOST}" with key ${key}...`);

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList,
  }),
});

const body = await res.text();
console.log(`IndexNow response: ${res.status} ${res.statusText}${body ? ` — ${body}` : ""}`);

if (![200, 202].includes(res.status)) {
  process.exit(1);
}
