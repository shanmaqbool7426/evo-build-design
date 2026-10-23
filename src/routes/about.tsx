import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { images, process } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildSeoMeta({
      title: "About ARZ Construction Ltd | Builders in Croydon & South London",
      description:
        "ARZ Construction Ltd is a residential construction company working on extensions, loft conversions and renovations in Croydon and South London. Company No. 12858978.",
      path: "/about",
    }),
    links: buildCanonical("/about"),
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Transforming Homes Through Quality Construction"
        subtitle="ARZ Construction Ltd is a residential construction company working with homeowners across Croydon and South London on extensions, loft conversions, renovations and property improvements."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Small Team, a Clear Process and Work We're Happy to Put Our Name To"
              subtitle="ARZ Construction Ltd is a limited company (Company No. 12858978) built around a core team of trades rather than a sales operation. We take on extensions, loft conversions and whole-house refurbishments across Croydon and South London, with one project manager coordinating every trade on site and a written, itemised quotation agreed before work starts."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Quality workmanship checked at every stage of the build",
                "Reliable project management and realistic programmes",
                "Clear communication from first visit to final sign-off",
                "Certificates, warranties and care information handed over at completion",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm font-semibold text-navy">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                    <Check className="size-3.5 text-navy" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.about}
              alt="ARZ Construction team reviewing plans on a residential site"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-x">
          <h2 className="sr-only">Our track record</h2>
          <Stats />
        </div>
      </section>

      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Process"
            subtitle="Five clear stages, so you always know where your project stands."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {process.map((step) => (
              <li key={step.number} className="rounded-xl border border-border bg-white p-6">
                <span className="font-display text-3xl font-extrabold text-navy">
                  {step.number}
                  <span className="text-yellow">.</span>
                </span>
                <h3 className="mt-3 text-sm font-bold tracking-wide uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
