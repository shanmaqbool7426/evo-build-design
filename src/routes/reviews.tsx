import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — LOPO Construction Ltd" },
      {
        name: "description",
        content:
          "Read genuine reviews from homeowners across London. See what our clients say about our construction, renovation and extension work.",
      },
      { property: "og:title", content: "Customer Reviews — LOPO Construction Ltd" },
      {
        property: "og:description",
        content:
          "Honest feedback from homeowners who trusted LOPO Construction with their projects.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Customers Say"
        subtitle="We let our work speak for itself — and our clients speak for us. Here's what homeowners across London have to say about working with LOPO Construction."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Genuine Feedback"
              title="Reviews From Real Homeowners"
              subtitle="Every review below comes from a client who trusted us with their home. We're proud of the relationships we've built alongside the spaces we've created."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 60}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 rounded-xl border border-border bg-navy p-8 text-center sm:p-12">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Your Project Could Be Next
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-blue-soft">
                Join the growing list of satisfied homeowners who chose LOPO Construction
                for their renovation, extension or property improvement project.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow px-7 py-3.5 text-xs font-bold tracking-wide text-navy uppercase shadow-card transition-all hover:brightness-95"
                >
                  Request a Free Quotation
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
