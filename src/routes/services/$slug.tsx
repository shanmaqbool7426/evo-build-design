import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) {
      return {
        meta: [{ title: "Service — ARZ Construction Ltd" }],
        links: [],
      };
    }
    return {
      meta: [
        ...buildSeoMeta({
          title: `${service.title} — ARZ Construction Ltd`,
          description: service.description,
          path: `/services/${service.slug}`,
          ogImage: service.image,
        }),
      ],
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
            areaServed: {
              "@type": "Place",
              name: "London and surrounding counties",
            },
            serviceType: service.title,
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-5xl font-extrabold text-navy">404</h1>
          <p className="mt-3 text-muted-foreground">Service not found.</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-bright hover:text-navy">
            <ArrowLeft className="size-4" /> Back to Services
          </Link>
        </div>
      </section>
    );
  }

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
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-blue-soft uppercase hover:text-yellow">
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
          <div className="mt-8">
            <ButtonLink to="/contact" variant="accent" size="lg">
              Request a Free Quotation
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
                  <li key={h} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
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
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <Reveal delay={120}>
            <aside className="sticky top-28 space-y-6">
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold tracking-wide text-navy uppercase">Get Started</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ready to discuss your project? We offer free, no-obligation quotations.
                </p>
                <ButtonLink to="/contact" variant="accent" size="lg" className="mt-4 w-full">
                  Request a Quote
                </ButtonLink>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold tracking-wide text-navy uppercase">Other Services</h3>
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

      {/* PREV / NEXT NAVIGATION */}
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
