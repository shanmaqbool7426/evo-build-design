import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, MessageCircle, Phone, Star } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { services, seoLandingPages, reviews, company } from "@/data/site";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

// ─── Route head — resolves meta for both service types ───────────────────────

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    // Check SEO landing pages first (more specific)
    const seoPage = seoLandingPages.find((p) => p.slug === params.slug);
    if (seoPage) {
      return {
        meta: buildSeoMeta({
          title: seoPage.metaTitle,
          description: seoPage.metaDescription,
          path: `/services/${seoPage.slug}`,
          ogImage: seoPage.image,
        }),
        links: buildCanonical(`/services/${seoPage.slug}`),
        scripts: [
          {
            type: "application/ld+json" as const,
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: seoPage.title,
              description: seoPage.metaDescription,
              provider: { "@id": `${SITE_URL}/#organisation` },
              url: absoluteUrl(`/services/${seoPage.slug}`),
              areaServed: [
                { "@type": "City", name: "Croydon" },
                { "@type": "Place", name: "South London" },
              ],
              serviceType: seoPage.title,
            }),
          },
          // FAQ schema
          {
            type: "application/ld+json" as const,
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: seoPage.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          },
        ],
      };
    }

    // Fall back to standard service
    const service = services.find((s) => s.slug === params.slug);
    if (!service) {
      return { meta: [{ title: "Service — ARZ Construction Ltd" }], links: [] };
    }
    return {
      meta: buildSeoMeta({
        title: `${service.title} — ARZ Construction Ltd`,
        description: service.description,
        path: `/services/${service.slug}`,
        ogImage: service.image,
      }),
      links: buildCanonical(`/services/${service.slug}`),
      scripts: [
        {
          type: "application/ld+json" as const,
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": `${SITE_URL}/#organisation` },
            url: absoluteUrl(`/services/${service.slug}`),
            areaServed: { "@type": "Place", name: "London and surrounding counties" },
            serviceType: service.title,
          }),
        },
      ],
    };
  },
  component: ServicePageRouter,
});

// ─── Router — decides which template to render ───────────────────────────────

function ServicePageRouter() {
  const { slug } = Route.useParams();
  const seoPage = seoLandingPages.find((p) => p.slug === slug);
  if (seoPage) return <SeoLandingPageDetail page={seoPage} />;

  const service = services.find((s) => s.slug === slug);
  if (service) return <StandardServiceDetail slug={slug} />;

  return (
    <section className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl font-extrabold text-navy">404</h1>
        <p className="mt-3 text-muted-foreground">Service not found.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-bright hover:text-navy"
        >
          <ArrowLeft className="size-4" /> Back to Services
        </Link>
      </div>
    </section>
  );
}

// ─── SEO Landing Page template ───────────────────────────────────────────────

import type { SeoLandingPage } from "@/data/site";

function SeoLandingPageDetail({ page }: { page: SeoLandingPage }) {
  const relatedServices = services.filter((s) => page.relatedSlugs.includes(s.slug));
  // Show 2 on-topic reviews
  const featuredReviews = reviews.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={page.image}
          alt={page.heroHeading}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/93 via-navy/78 to-navy/38" />
        <div className="container-x relative py-20 lg:py-32">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-blue-soft uppercase hover:text-yellow"
          >
            <ArrowLeft className="size-3.5" /> All Services
          </Link>
          <span className="mt-6 inline-block rounded-sm bg-yellow px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-navy uppercase">
            {page.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl">
            {page.heroHeading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-soft sm:text-lg">
            {page.heroSubtitle}
          </p>

          {/* 24hr promise */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 backdrop-blur-sm">
            <Clock className="size-4 shrink-0 text-yellow" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">
              Free quote guaranteed within <span className="text-yellow font-bold">24 hours</span>
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
              Get Your Free Quote in 24 Hours
            </ButtonLink>
            <ButtonAnchor
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              variant="ghostLight"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="size-4" /> WhatsApp Us
            </ButtonAnchor>
          </div>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-3 lg:gap-16">
          {/* MAIN CONTENT */}
          <div className="space-y-12 lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-extrabold sm:text-3xl">About This Service</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{page.intro}</p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="text-xl font-extrabold">What's Included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {page.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                      <Check className="size-3.5 text-navy" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-navy">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="overflow-hidden rounded-xl shadow-card">
                <img
                  src={page.image}
                  alt={`${page.title} by ARZ Construction in Croydon`}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="w-full object-cover"
                />
              </div>
            </Reveal>

            {/* REVIEWS */}
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow text-yellow" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy">What our clients say</span>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {featuredReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <div className="mt-5">
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 text-sm font-bold text-bright hover:text-navy"
                >
                  Read all Google reviews <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={120}>
              <h2 className="text-xl font-extrabold">Frequently Asked Questions</h2>
              <dl className="mt-5 space-y-4">
                {page.faqs.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </dl>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <Reveal delay={100}>
            <aside className="sticky top-28 space-y-5">
              {/* 24hr Quote card */}
              <div className="rounded-xl border-2 border-yellow bg-yellow-soft p-6">
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-navy" aria-hidden="true" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-navy">
                    Free Quote · 24 Hours
                  </h3>
                </div>
                <p className="mt-2 text-sm text-navy/80">
                  Tell us about your project. We'll respond with a detailed, no-obligation quotation
                  within one working day.
                </p>
                <ButtonLink to="/contact" variant="accent" size="lg" className="mt-4 w-full">
                  Get My Free Quote
                </ButtonLink>
              </div>

              {/* Call / WhatsApp */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Prefer to Talk?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Speak directly with our team — no call centres.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <ButtonAnchor href={company.phoneHref} variant="outline" className="w-full">
                    <Phone className="size-4" /> {company.phoneDisplay}
                  </ButtonAnchor>
                  <ButtonAnchor
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </ButtonAnchor>
                </div>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                    Related Services
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="flex items-center justify-between text-sm font-semibold text-navy/80 transition-colors hover:text-bright"
                        >
                          {s.title}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust signals */}
              <div className="rounded-xl bg-blue-tint p-5">
                <ul className="space-y-2.5">
                  {[
                    "10+ years' experience",
                    "5★ Google reviews",
                    "Free no-obligation quotes",
                    "Croydon & South London specialists",
                    "One project manager throughout",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-xs font-semibold text-navy"
                    >
                      <Check className="size-3.5 shrink-0 text-bright" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Ready to Start Your ${page.title}?`}
        text="Get a free, no-obligation quotation. We respond to every enquiry within 24 hours — guaranteed."
      />
    </>
  );
}

// ─── Accordion FAQ item ───────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-border bg-white">
      <dt>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-semibold text-navy [&::-webkit-details-marker]:hidden">
            {q}
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-tint text-bright transition-transform group-open:rotate-180">
              <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <dd className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground">{a}</dd>
        </details>
      </dt>
    </div>
  );
}

// ─── Standard service template (unchanged logic, extracted to function) ───────

function StandardServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug)!;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/75 to-navy/35" />
        <div className="container-x relative py-20 lg:py-28">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-blue-soft uppercase hover:text-yellow"
          >
            <ArrowLeft className="size-3.5" /> All Services
          </Link>
          <span className="mt-6 inline-block rounded-sm bg-yellow px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-navy uppercase">
            {service.number} — {service.title}
          </span>
          <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-soft sm:text-lg">
            {service.short}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
              Get Your Free Quote in 24 Hours
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-extrabold sm:text-3xl">What We Deliver</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-10 text-lg font-bold">Service Highlights</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                      <Check className="size-3.5 text-navy" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-navy">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 overflow-hidden rounded-xl shadow-card">
                <img
                  src={service.image}
                  alt={`${service.title} work by ARZ Construction`}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <aside className="sticky top-28 space-y-6">
              <div className="rounded-xl border-2 border-yellow bg-yellow-soft p-6">
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-navy" aria-hidden="true" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-navy">
                    Free Quote · 24 Hours
                  </h3>
                </div>
                <p className="mt-2 text-sm text-navy/80">
                  Free, no-obligation quotation. We respond within one working day.
                </p>
                <ButtonLink to="/contact" variant="accent" size="lg" className="mt-4 w-full">
                  Get My Free Quote
                </ButtonLink>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Other Services
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="flex items-center justify-between text-sm font-semibold text-navy/80 transition-colors hover:text-bright"
                      >
                        {s.title}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="border-y border-border bg-blue-tint py-8">
        <div className="container-x flex items-center justify-between gap-4">
          {prevService ? (
            <Link
              to="/services/$slug"
              params={{ slug: prevService.slug }}
              className="flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-bright"
            >
              <ArrowLeft className="size-4" /> {prevService.title}
            </Link>
          ) : (
            <span />
          )}
          {nextService ? (
            <Link
              to="/services/$slug"
              params={{ slug: nextService.slug }}
              className="flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-bright"
            >
              {nextService.title} <ArrowRight className="size-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
