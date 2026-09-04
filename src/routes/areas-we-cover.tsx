import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { areas, company } from "@/data/site";

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: [
      { title: "Areas We Cover — LOPO Construction Ltd" },
      {
        name: "description",
        content:
          "LOPO Construction provides renovation, extension and building services across London and the surrounding counties. Check if we cover your area.",
      },
      { property: "og:title", content: "Areas We Cover — LOPO Construction Ltd" },
      {
        property: "og:description",
        content:
          "Professional construction services across North, South, East, West and Central London, plus Hertfordshire, Essex, Surrey and Kent.",
      },
      { property: "og:url", content: "/areas-we-cover" },
    ],
    links: [{ rel: "canonical", href: "/areas-we-cover" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Areas We Cover"
        subtitle={`${company.name} provides construction, renovation and property improvement services across London and the surrounding counties.`}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Service Area"
              title="Working Across London & Beyond"
              subtitle="We take on projects in every corner of the capital and regularly work in the home counties. If you're unsure whether we cover your area, just get in touch."
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
