import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectGalleryCard } from "@/components/ProjectLightbox";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Project Portfolio — Loft Conversions & Extensions in Croydon | ARZ Construction",
      description:
        "Browse real photos of completed loft conversions, house extensions, kitchen and bathroom renovations across Croydon and South London by ARZ Construction Ltd.",
      path: "/projects",
    }),
    links: buildCanonical("/projects"),
  }),
  component: ProjectsPage,
});

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Real Projects. Real Photos."
        subtitle="Every image below is from an actual ARZ Construction project in Croydon or South London — no stock photos, no mock-ups. Click any card to open the full photo gallery."
      />

      {/* CATEGORY LEGEND */}
      <section className="border-b border-border bg-white py-6">
        <div className="container-x">
          <div
            className="flex flex-wrap items-center gap-2"
            role="list"
            aria-label="Project categories"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className="rounded-full border border-border bg-blue-tint px-3.5 py-1.5 text-xs font-semibold text-navy"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Built With Precision, Finished With Care"
              subtitle="From contemporary loft conversions to complete property transformations — each project reflects our commitment to quality workmanship in South London."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <ProjectGalleryCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* Instruction hint */}
          <Reveal delay={80}>
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Click any project card or thumbnail to open the full photo gallery. Use arrow keys or
              swipe to navigate.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        text="Get a free quote for your loft conversion, extension or renovation in Croydon or South London. We respond within 24 hours."
      />
    </>
  );
}
