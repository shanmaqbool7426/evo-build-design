import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { SITE_URL } from "@/lib/seo";
import { company } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-bold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-royal"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-royal"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-navy uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ARZ Construction Ltd — Renovations & Extensions in London" },
      {
        name: "description",
        content:
          "ARZ Construction Ltd delivers professional renovations, extensions, loft conversions and property improvements across London.",
      },

      // ── Open Graph ──────────────────────────────────────────────────────
      { property: "og:site_name", content: "ARZ Construction Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:title",
        content: "ARZ Construction Ltd — Renovations & Extensions in London",
      },
      {
        property: "og:description",
        content:
          "ARZ Construction Ltd delivers professional renovations, extensions, loft conversions and property improvements across London.",
      },

      // ── Twitter ─────────────────────────────────────────────────────────
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ARZConstruction" },

      // ── Geo meta (local SEO) ────────────────────────────────────────────
      { name: "geo.region", content: "GB-LND" },
      { name: "geo.placename", content: "London" },
      { name: "geo.position", content: "51.5975;-0.1354" },
      { name: "ICBM", content: "51.5975, -0.1354" },

      // ── Misc ────────────────────────────────────────────────────────────
      { name: "theme-color", content: "#123B7A" },
      { name: "robots", content: "index, follow" },

      // ── Google Search Console verification ──────────────────────────────
      // GTM (GT-TQR2XG2K) can verify Search Console ownership automatically
      // once the GTM tag is published. No separate meta tag needed when using GTM.
      // If you prefer the HTML tag method, uncomment the line below and paste your token:
      // { name: "google-site-verification", content: "YOUR_TOKEN_HERE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "canonical", href: SITE_URL },
      { rel: "sitemap", href: "/sitemap.xml", type: "application/xml" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      // ── Google Analytics 4 (GA4) ────────────────────────────────────────
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-9259G9KNNH",
        async: true,
      },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-9259G9KNNH');`,
      },

      // ── Google Tag Manager (GTM) ─────────────────────────────────────────
      // Container: GT-TQR2XG2K — loads additional tags configured in GTM
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GT-TQR2XG2K');`,
      },

      // ── Organisation structured data (LocalBusiness + GeneralContractor) ──
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": `${SITE_URL}/#organisation`,
          name: company.name,
          alternateName: company.shortName,
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          image: `${SITE_URL}/favicon.svg`,
          description:
            "Professional construction, renovation and property improvement services across London and the surrounding areas.",
          telephone: company.phoneHref.replace("tel:", ""),
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.addressLines.slice(0, 2).join(", "),
            addressLocality: "London",
            addressRegion: "Greater London",
            postalCode: "W1T 6EB",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.5975,
            longitude: -0.1354,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "14:00",
            },
          ],
          areaServed: {
            "@type": "Place",
            name: "London and surrounding counties",
          },
          priceRange: "££",
          sameAs: [],
        }),
      },
      // ── BreadcrumbList schema ────────────────────────────────────────────
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* GTM noscript fallback — required by GTM implementation spec */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-TQR2XG2K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main" aria-label="Main content">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
    </QueryClientProvider>
  );
}
