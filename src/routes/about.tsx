import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { images, process } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ARZ Construction Ltd" },
      {
        name: "description",
        content:
          "Meet ARZ Construction Ltd: a London construction company delivering renovations, extensions and property improvements with quality workmanship.",
      },
      { property: "og:title", content: "About ARZ Construction Ltd" },
      {
        property: "og:description",
        content:
          "A London construction team delivering renovations, extensions and property improvements with quality workmanship.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Transforming Homes Through Quality Construction"
        subtitle="ARZ Construction Ltd is a London-based construction company working with homeowners and property owners on renovations, extensions and improvements of every scale."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Ten years of building work we're happy to put our name to"
              subtitle="We started as a small team of trades taking on local renovations. A decade later we run full-scale extensions, loft conversions and whole-house refurbishments — with the same principle: one accountable team, honest pricing and a finish that stands up to inspection."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Quality workmanship on every stage of the build",
                "Reliable project management and realistic programmes",
                "Clear communication from first visit to final sign-off",
                "Insured, certificated and fully documented work",
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
