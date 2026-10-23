import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/blog";
import { buildSeoMeta, buildCanonical, buildBreadcrumb } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Loft Conversion & Extension Guides — Croydon Costs & Rules | ARZ",
      description:
        "Free guides from Croydon builders: loft conversion costs in 2026, dormer vs hip-to-gable, party wall agreements and planning rules for South London homes.",
      path: "/blog",
    }),
    links: buildCanonical("/blog"),
    scripts: buildBreadcrumb([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/blog" },
    ]),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Guides & Advice"
        title="Loft & Extension Guides for Croydon Homes"
        subtitle="Straight answers from the builders doing the work — real prices, planning rules and practical advice for South London homeowners. No jargon, no sales pitch."
        breadcrumb="Guides"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex size-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-lift"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width={1400}
                      height={933}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-sm bg-navy/90 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex grow flex-col p-5">
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg leading-snug font-extrabold text-navy group-hover:text-bright">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 grow text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-bright">
                      Read the guide
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a Loft Conversion or Extension?"
        text="Get a free, itemised quotation from our Croydon team. We'll visit the property, talk through the options and confirm the scope in writing."
      />
    </>
  );
}
