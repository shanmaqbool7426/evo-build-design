/**
 * Centralised SEO configuration for ARZ Construction Ltd.
 * Domain: https://www.arzconstructionltd.com
 *
 * All canonical URLs, og:url, og:image and structured-data URLs
 * are derived from the SITE_URL constant below.
 */

import heroImg from "@/assets/hero.webp";

// ─── Site ────────────────────────────────────────────────────────────────────
export const SITE_URL = "https://www.arzconstructionltd.com";

// ─── Default social-share image (1200×630 minimum recommended) ───────────────
export const DEFAULT_OG_IMAGE = heroImg;

// ─── Helper: build an absolute URL from a relative path ──────────────────────
export function absoluteUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

// ─── Helper: build a full set of Open-Graph + Twitter meta tags ──────────────
export type SeoMeta = {
  title: string;
  description: string;
  path: string; // relative, e.g. "/about"
  ogImage?: string;
};

export function buildSeoMeta({ title, description, path, ogImage }: SeoMeta) {
  const rawImage = ogImage ?? DEFAULT_OG_IMAGE;
  // og:image must be an absolute URL — Vite returns asset paths like /assets/x.webp.
  const image = rawImage.startsWith("http") ? rawImage : absoluteUrl(rawImage);
  const url = absoluteUrl(path);

  return [
    // Title & description
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

// ─── Helper: build canonical link ────────────────────────────────────────────
export function buildCanonical(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}

// ─── Helper: build a BreadcrumbList structured-data trail ────────────────────
export function buildBreadcrumb(items: { name: string; path?: string }[]) {
  return [
    {
      type: "application/ld+json" as const,
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          ...(item.path ? { item: absoluteUrl(item.path) } : {}),
        })),
      }),
    },
  ];
}

// ─── Helper: BlogPosting structured data for a guide post ───────────────
export function buildArticle(post: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
}) {
  return [
    {
      type: "application/ld+json" as const,
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.image),
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organisation`,
          name: "ARZ Construction Ltd",
          url: SITE_URL,
        },
        // Google needs a raster publisher logo; the SVG favicon is ignored.
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organisation`,
          name: "ARZ Construction Ltd",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon-512.png`,
            width: 512,
            height: 512,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(post.path) },
        url: absoluteUrl(post.path),
      }),
    },
  ];
}
