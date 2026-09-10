import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ReviewCard, ReviewsBanner, StarRating } from "@/components/ReviewCard";
import { reviews, reviewSummary } from "@/data/site";
import { buildSeoMeta, buildCanonical, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Customer Reviews — ARZ Construction Ltd · Croydon & South London",
      description: `Rated ${reviewSummary.average} stars on Google. Read real reviews from homeowners across Croydon and South London who trusted ARZ Construction with their loft conversions, extensions and renovations.`,
      path: "/reviews",
    }),
    links: buildCanonical("/reviews"),
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#organisation`,
          name: "ARZ Construction Ltd",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewSummary.average.toFixed(1),
            reviewCount: reviewSummary.total,
            bestRating: "5",
            worstRating: "1",
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            datePublished: r.date,
            reviewBody: r.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: "5",
            },
          })),
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="What Our Clients Say"
        subtitle="Real feedback from homeowners across Croydon and South London. We're proud of every project — and even prouder of how our clients feel when it's finished."
      />

      {/* AGGREGATE SCORE BANNER */}
      <section className="border-b border-border bg-white py-10">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl bg-blue-tint px-8 py-7">
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-bold tracking-[0.2em] text-bright uppercase">
                  Google Reviews
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl font-extrabold text-navy">
                    {reviewSummary.average.toFixed(1)}
                  </span>
                  <span className="text-lg font-semibold text-muted-foreground">/ 5.0</span>
                </div>
                <StarRating rating={5} />
                <p className="mt-1 text-sm text-muted-foreground">
                  Based on {reviewSummary.total}+ verified Google Reviews
                </p>
              </div>

              {/* Distribution bars */}
              <div className="flex flex-col gap-2 min-w-[200px]">
                {[
                  { stars: 5, pct: 91 },
                  { stars: 4, pct: 7 },
                  { stars: 3, pct: 2 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 0 },
                ].map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-6 text-right text-xs font-semibold text-navy">{stars}★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-yellow transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-xs text-muted-foreground">{pct}%</span>
                  </div>
                ))}
              </div>

              <a
                href={reviewSummary.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-royal"
              >
                Read on Google <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEW GRID */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Verified Reviews"
              title="Trusted by Homeowners Across South London"
              subtitle="Every review below is from a real customer — verified on Google. No cherry-picking, no edits."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.id} delay={i * 70}>
                <ReviewCard review={review} featured={i === 0} />
              </Reveal>
            ))}
          </div>

          {/* Leave a review CTA */}
          <Reveal delay={100}>
            <div className="mt-14 rounded-xl bg-blue-tint p-8 text-center">
              <h2 className="text-xl font-extrabold text-navy">Had work done by us?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We'd love to hear how your project went. Leaving a Google review takes under a
                minute and helps other homeowners in Croydon and South London find us.
              </p>
              <a
                href={reviewSummary.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-yellow px-6 py-3 text-sm font-bold text-navy transition-all hover:bg-yellow/80 hover:-translate-y-0.5"
              >
                Leave Us a Google Review <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Happy Clients?"
        text="Get a free, no-obligation quotation for your loft conversion, extension or renovation in Croydon or South London."
      />
    </>
  );
}
