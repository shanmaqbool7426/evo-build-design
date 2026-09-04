import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — LOPO Construction Ltd" },
      {
        name: "description",
        content:
          "Renovations, extensions, loft conversions, kitchens, bathrooms, plumbing, electrical and more. Full construction services across London.",
      },
      { property: "og:title", content: "Our Services — LOPO Construction Ltd" },
      {
        property: "og:description",
        content:
          "Complete construction services including house renovations, extensions, loft conversions, kitchen and bathroom installations.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Complete Construction Services"
        subtitle="From whole-house renovations to specialist building work, we provide dependable solutions for every stage of your project — all managed by one accountable team."
        breadcrumb="Services"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Services Built Around Your Home"
              subtitle="Whether you need a single bathroom refit or a complete property transformation, our experienced team handles structure, services and finishes under one contract."
            />
          </Reveal>

          <div className="mt-14 space-y-16">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xl shadow-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={1400}
                      height={1000}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-md bg-yellow font-display text-sm font-extrabold text-navy">
                        {service.number}
                      </span>
                      <h2 className="text-2xl font-extrabold sm:text-3xl">{service.title}</h2>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                            <Check className="size-3 text-navy" aria-hidden="true" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
