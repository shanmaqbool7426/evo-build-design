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
import { CookieConsent } from "@/components/CookieConsent";
import { initConversionTracking } from "@/lib/analytics";
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

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
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
      { title: "ARZ Construction Ltd — Builders in Croydon & South London" },
      {
        name: "description",
        content:
          "ARZ Construction Ltd provides house extensions, loft conversions, renovations and property improvements across Croydon and South London.",
      },

      // ── Open Graph ──────────────────────────────────────────────────────
      { property: "og:site_name", content: "ARZ Construction Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:title",
        content: "ARZ Construction Ltd — Builders in Croydon & South London",
      },
      {
        property: "og:description",
        content:
          "ARZ Construction Ltd provides house extensions, loft conversions, renovations and property improvements across Croydon and South London.",
      },

      // ── Twitter ─────────────────────────────────────────────────────────
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ARZConstruction" },

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
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16 32x32 48x48 96x96 256x256",
      },
      { rel: "apple-touch-icon", href: "/icon-192.png", sizes: "192x192" },
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
      // ── Analytics: single path via GTM ─────────────────────────────────
      // GA4 (G-9259G9KNNH) must be added as a "Google tag" inside the GTM
      // container GT-TQR2XG2K. The standalone gtag.js below was removed to
      // avoid double-counting pageviews when both paths are active.

      // ── Consent Mode v2 defaults ────────────────────────────────────────
      // Must run before GTM. Everything non-essential starts denied; only
      // components/CookieConsent.tsx can flip these to granted.
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});`,
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
          logo: `${SITE_URL}/icon-512.png`,
          image: `${SITE_URL}/icon-512.png`,
          description:
            "House extensions, loft conversions, renovations and property improvements in Croydon and South London.",
          telephone: company.phoneHref.replace("tel:", ""),
          email: company.email,
          identifier: {
            "@type": "PropertyValue",
            name: "Company number",
            value: company.companyNumber,
          },
          foundingDate: "2020-09-04",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: company.phoneHref.replace("tel:", ""),
            email: company.email,
            areaServed: "GB",
            availableLanguage: "en-GB",
          },
          // Registered office on Companies House (company 12858978) — kept
          // identical to the address on the Google Business Profile.
          address: {
            "@type": "PostalAddress",
            streetAddress: "4th Floor, Silverstream House, 45 Fitzroy Street",
            addressLocality: "London",
            addressRegion: "Greater London",
            postalCode: "W1T 6EB",
            addressCountry: "GB",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Croydon" },
            { "@type": "City", name: "Bromley" },
            { "@type": "City", name: "Sutton" },
            { "@type": "City", name: "Merton" },
            { "@type": "City", name: "Lambeth" },
            { "@type": "City", name: "Lewisham" },
            { "@type": "City", name: "Southwark" },
            { "@type": "Place", name: "South London" },
            { "@type": "Place", name: "Greater London" },
          ],
          priceRange: "££",
          // ── AEO: what this business is an authority on ──
          knowsAbout: [
            "Loft conversions",
            "Dormer loft conversions",
            "Hip-to-gable loft conversions",
            "Attic and rooflight conversions",
            "House extensions",
            "Rear and side-return extensions",
            "Wrap-around extensions",
            "Full house renovations",
            "Kitchen renovation",
            "Bathroom renovation",
            "Electrical rewires and Part P certification",
            "Roofing",
            "Plastering and tiling",
            "Permitted development and planning permission",
            "Party wall agreements",
            "Building regulations",
          ],
          // ── AEO: service catalogue with published starting prices ──
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Construction services in Croydon & South London",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Loft conversions",
                  url: `${SITE_URL}/services/loft-conversion-croydon`,
                  provider: { "@id": `${SITE_URL}/#organisation` },
                },
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: 25000,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "House extensions",
                  url: `${SITE_URL}/services/house-extension-croydon`,
                  provider: { "@id": `${SITE_URL}/#organisation` },
                },
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: 45000,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kitchen and bathroom renovations",
                  url: `${SITE_URL}/services/kitchen-bathroom-renovations`,
                  provider: { "@id": `${SITE_URL}/#organisation` },
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Electrical services and Part P certification",
                  url: `${SITE_URL}/services/electrical-services`,
                  provider: { "@id": `${SITE_URL}/#organisation` },
                },
              },
            ],
          },
          sameAs: Object.values(company.socials).filter((url) => url.length > 0),
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

  useEffect(() => initConversionTracking(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main" aria-label="Main content">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
      <CookieConsent />
    </QueryClientProvider>
  );
}
