import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — LOPO Construction Ltd" },
      {
        name: "description",
        content:
          "Answers to common questions about quotations, project timelines, payments, building regulations and more. LOPO Construction Ltd.",
      },
      { property: "og:title", content: "FAQs — LOPO Construction Ltd" },
      {
        property: "og:description",
        content:
          "Everything you need to know before starting your construction project with us.",
      },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: FAQsPage,
});

function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Answers to the questions homeowners most commonly ask before starting a project with us. If yours isn't here, just get in touch."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="Common Questions"
                title="Everything You Need to Know"
                subtitle="From quotations and timelines to building regulations and guarantees — here are honest answers to help you plan with confidence."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10">
                <FAQAccordion items={faqs} />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-14 rounded-xl border border-border bg-navy p-8 text-center">
                <h2 className="font-display text-2xl font-extrabold text-white">
                  Still Have Questions?
                </h2>
                <p className="mt-3 text-blue-soft">
                  We're happy to chat through your project in detail. No pressure, no obligation.
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-yellow px-7 py-3.5 text-xs font-bold tracking-wide text-navy uppercase shadow-card transition-all hover:brightness-95"
                >
                  Get In Touch
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
