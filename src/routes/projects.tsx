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
        title="Our Completed Projects"
        subtitle="Completed projects with the scope of work carried out and the general area. Locations are shown at borough level only — never a customer's address. Click any card to open the full photo gallery."
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
              subtitle="From loft conversions and extensions to full property refurbishments — each entry lists the work involved so you can see what a project of that type covers."
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
        title="Planning Something Similar?"
        text="Request a free, no-obligation quotation for your extension, loft conversion or renovation. We'll visit the property and confirm the scope in writing."
      />
    </>
  );
}
