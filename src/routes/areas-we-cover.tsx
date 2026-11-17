import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { areas, company, townLandingPages } from "@/data/site";
import { buildSeoMeta, buildCanonical, buildBreadcrumb } from "@/lib/seo";

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Areas We Cover — Croydon, Bromley & South London | ARZ",
      description:
        "Builders covering Croydon, Bromley and South London, plus Esher, Cobham, Claygate, Walton-on-Thames, Egham and Banstead. Loft conversions and extensions.",
      path: "/areas-we-cover",
    }),
    links: buildCanonical("/areas-we-cover"),
    scripts: buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Areas We Cover" }]),
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Areas We Cover"
        subtitle={`${company.name} works across Croydon and South London, with wider London and the surrounding counties covered by arrangement.`}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Service Area"
              title="Croydon and South London First"
              subtitle="Croydon borough and the neighbouring South London boroughs are our core service area. Projects further out are considered case by case — if your postcode isn't listed, ask and we'll tell you honestly whether we can help."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.name} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{area.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{area.places}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Loft Conversions in Surrey &amp; North Downs Towns
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Dedicated pages for the towns we work in most, with local planning notes for
                Elmbridge, Runnymede and Reigate &amp; Banstead.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {townLandingPages.map((p) => (
                  <Link
                    key={p.slug}
                    to="/services/$slug"
                    params={{ slug: p.slug }}
                    className="group flex items-center justify-between rounded-lg border border-border bg-white px-5 py-4 text-sm font-semibold shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span>{p.title}</span>
                    <ArrowRight
                      className="size-4 text-royal transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 rounded-xl border border-border bg-blue-tint p-8 text-center sm:p-12">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Not Sure If We Cover Your Area?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Don't worry — just give us a call or send us a message. We'll let you know
                honestly whether we can help with your project.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-7 py-3.5 text-xs font-bold tracking-wide text-white uppercase shadow-card transition-all hover:bg-royal"
                >
                  Call {company.phone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow px-7 py-3.5 text-xs font-bold tracking-wide text-navy uppercase shadow-card transition-all hover:brightness-95"
                >
                  Send Us a Message
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
