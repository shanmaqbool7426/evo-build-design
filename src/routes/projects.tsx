import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectGalleryCard } from "@/components/ProjectLightbox";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { projects, seoLandingPages } from "@/data/site";
import { buildSeoMeta, buildCanonical, buildBreadcrumb } from "@/lib/seo";

const projectFaqs = [
  {
    q: "Can I visit a project before appointing ARZ Construction?",
    a: "Yes. We can arrange a visit to a completed project or, where the homeowner agrees, an active site near you. Site visits are by appointment so we never disrupt a customer's home unannounced.",
  },
  {
    q: "Do you only work in Croydon?",
    a: "Croydon and South London are our main service area, and we also take on projects across Bromley, Sutton, Merton, Lambeth, Lewisham and Southwark. The projects shown here include homes outside those boroughs.",
  },
  {
    q: "How do I get a quotation for a project like these?",
    a: "Call or WhatsApp +44 7860 135189, or use the contact form. We survey the property, agree the scope and return a fixed, itemised written quotation within 24 hours.",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Project Portfolio — Loft Conversions & Extensions | ARZ",
      description:
        "Browse real photos of completed loft conversions, house extensions, kitchen and bathroom renovations across Croydon and South London by ARZ Construction Ltd.",
      path: "/projects",
    }),
    links: buildCanonical("/projects"),
    scripts: [
      ...buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Projects" }]),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: projectFaqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
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

      {/* HOW THESE PROJECTS ARE DELIVERED */}
      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="What Every Project Has in Common"
                subtitle="The photos differ, but the way each job is run does not. These are the working practices that sit behind every project on this page."
                align="left"
              />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Every project starts with a survey of the property and a written, itemised
                  quotation. The scope, the materials and the payment stages are agreed in writing
                  before work begins, so the price you sign is the price you pay. Nothing is added
                  mid-build without a variation agreed with you first.
                </p>
                <p>
                  One project manager runs the job from first day to handover. Groundworks,
                  brickwork, carpentry, plumbing, electrics, plastering and decorating are
                  sequenced by the same team rather than left for you to coordinate, and you get a
                  weekly progress update so you always know which trade is in the house.
                </p>
                <p>
                  Building regulations drawings, structural calculations, party wall notices and
                  sign-off are handled by us where the project needs them. The work is fully
                  insured, and every job carries a written workmanship guarantee at completion.
                  Locations on this page are shown at borough or area level only — never a
                  customer's full address.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-sm font-bold tracking-wide text-navy uppercase">
                Included as standard
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Fixed, itemised written quotation",
                  "One project manager per job",
                  "Weekly written progress updates",
                  "Building regulations and drawings managed",
                  "Party wall notices where required",
                  "Fully insured, all trades under one contract",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-semibold text-navy"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                      <Check className="size-3 text-navy" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BROWSE BY SERVICE */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Project Types"
            title="Browse Projects by Service"
            subtitle="Each detailed page explains the build route, typical costs and the planning rules that apply in Croydon and South London."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {seoLandingPages
              .filter((page) => !page.isTown)
              .map((page) => (
                <li key={page.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: page.slug }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-navy transition-colors hover:border-bright hover:text-bright"
                  >
                    {page.title} <ArrowRight className="size-3" aria-hidden="true" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* PROJECT FAQs */}
      <section className="border-t border-border bg-white py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title="Project Questions, Answered"
            subtitle="The things homeowners ask most often before appointing a builder."
          />
          <dl className="mt-8 space-y-3">
            {projectFaqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-border bg-blue-tint p-5"
              >
                <dt className="text-sm font-bold text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Planning Something Similar?"
        text="Request a free, no-obligation quotation for your extension, loft conversion or renovation. We'll visit the property and confirm the scope in writing."
      />
    </>
  );
}
