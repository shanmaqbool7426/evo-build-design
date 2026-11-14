import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { seoLandingPages, services } from "./data/site";
import { blogPosts } from "./data/blog";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// ── Canonical host redirect (SEO) ─────────────────────────────────────────────
// The site must resolve on exactly one host — https://www.arzconstructionltd.com —
// so apex requests (and plain http) are 301'd to the canonical host to keep
// Google's indexing signals consolidated. Local/dev hosts are never redirected.
const CANONICAL_HOST = "www.arzconstructionltd.com";
const APEX_HOST = "arzconstructionltd.com";

// ── Service slug guard (real 404s for unknown /services/* URLs) ───────────────
// The catch-all /services/$slug route renders a notFound UI, but SSR still
// responds with status 200 — a soft-404 that search engines can index as
// duplicate content. This outer guard returns a real HTTP 404 first.
const KNOWN_SERVICE_SLUGS = new Set(
  [...services, ...seoLandingPages].map((entry) => entry.slug),
);
const KNOWN_BLOG_SLUGS = new Set(blogPosts.map((p) => p.slug));

// ── Consolidated service pages (301) ────────────────────────────────────────
// Thin general pages duplicated the intent of their richer Croydon
// equivalents, so each one permanently redirects to the stronger page.
const SERVICE_REDIRECTS = new Map<string, string>(
  services
    .filter((service) => service.redirectTo)
    .map((service) => [`/services/${service.slug}`, `/services/${service.redirectTo}`]),
);

/** True when pathname sits under prefix with a slug that is not in `known`. */
function unknownSlugIn(pathname: string, prefix: string, known: Set<string>): boolean {
  if (!pathname.startsWith(prefix)) return false;
  let slug = pathname.slice(prefix.length);
  if (slug.endsWith("/")) slug = slug.slice(0, -1);
  // Multi-segment or empty paths never match the $slug route — the router's
  // own not-found handling already returns 404 for those.
  if (!slug || slug.includes("/")) return false;
  try {
    slug = decodeURIComponent(slug);
  } catch {
    return true; // malformed encoding — never a real page
  }
  return !known.has(slug);
}

function serviceNotFoundResponse(): Response {
  const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Page Not Found — ARZ Construction Ltd</title>
<style>
  body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f6f8fb; color: #123B7A; display: flex; min-height: 100vh; align-items: center; justify-content: center; text-align: center; }
  main { padding: 48px 24px; }
  h1 { font-size: 28px; margin: 0 0 12px; }
  p { color: #5a6b85; margin: 0 0 28px; }
  a { color: #123B7A; font-weight: 700; text-decoration: none; border: 2px solid #123B7A; border-radius: 8px; padding: 12px 22px; display: inline-block; margin: 0 6px; }
</style>
</head>
<body>
<main>
<h1>404 — Page Not Found</h1>
<p>The page you're looking for doesn't exist or may have moved.</p>
<a href="/">Go to Homepage</a>
<a href="/services">Browse Our Services</a>
</main>
</body>
</html>`;
  return new Response(html, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// ── Permanently retired pages (410 Gone) ─────────────────────────────────────
// The customer reviews page was retired as part of the content clean-up. No
// equivalent page replaced it, so a 410 is returned rather than a 301.
const GONE_PATHS = new Set(["/reviews", "/reviews/"]);

function goneResponse(): Response {
  const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Page Retired — ARZ Construction Ltd</title>
<style>
  body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f6f8fb; color: #123B7A; display: flex; min-height: 100vh; align-items: center; justify-content: center; text-align: center; }
  main { padding: 48px 24px; }
  h1 { font-size: 28px; margin: 0 0 12px; }
  p { color: #5a6b85; margin: 0 0 28px; max-width: 34rem; }
  a { color: #123B7A; font-weight: 700; text-decoration: none; border: 2px solid #123B7A; border-radius: 8px; padding: 12px 22px; display: inline-block; margin: 6px; }
</style>
</head>
<body>
<main>
<h1>This Page Has Been Retired</h1>
<p>We no longer publish a customer reviews page. You can see completed work in our project portfolio, or get in touch to discuss your own project.</p>
<a href="/projects">View Our Projects</a>
<a href="/services">Browse Our Services</a>
<a href="/contact">Contact Us</a>
</main>
</body>
</html>`;
  return new Response(html, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
  });
}

function canonicalHostRedirect(request: Request): Response | undefined {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  const isLocalDevHost =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "0.0.0.0" ||
    host.endsWith(".localhost");
  if (isLocalDevHost) return undefined;

  const destination = `https://${CANONICAL_HOST}${url.pathname}${url.search}`;
  if (host === APEX_HOST) {
    return new Response(null, { status: 301, headers: { location: destination } });
  }
  if (host === CANONICAL_HOST && url.protocol === "http:") {
    return new Response(null, { status: 301, headers: { location: destination } });
  }
  return undefined;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const redirect = canonicalHostRedirect(request);
      if (redirect) return redirect;
      const normalisedPath = url.pathname.replace(/\/$/, "") || "/";
      const serviceTarget = SERVICE_REDIRECTS.get(normalisedPath);
      if (serviceTarget) {
        return new Response(null, {
          status: 301,
          headers: { location: `${serviceTarget}${url.search}` },
        });
      }
      if (GONE_PATHS.has(url.pathname)) return goneResponse();
      if (unknownSlugIn(url.pathname, "/services/", KNOWN_SERVICE_SLUGS))
        return serviceNotFoundResponse();
      if (unknownSlugIn(url.pathname, "/blog/", KNOWN_BLOG_SLUGS))
        return serviceNotFoundResponse();
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
