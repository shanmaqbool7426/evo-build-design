import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — LOPO Construction Ltd" },
      {
        name: "description",
        content:
          "Browse our portfolio of completed construction projects — extensions, renovations, kitchens, bathrooms and loft conversions across London.",
      },
      { property: "og:title", content: "Our Projects — LOPO Construction Ltd" },
      {
        property: "og:description",
        content:
          "Real projects, real craftsmanship. See how we've transformed homes across London.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Completed Projects"
        subtitle="Every project tells a story of careful planning, quality construction and attention to detail. Browse our recent work across London."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Built With Precision, Finished With Care"
              subtitle="From contemporary extensions to complete property transformations, each project reflects our commitment to quality workmanship."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a Project in Mind?" text="Let's discuss your plans. We provide free, no-obligation quotations for all types of construction work." />
    </>
  );
}
