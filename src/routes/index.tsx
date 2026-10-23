import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  HardHat,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import {
  areas,
  company,
  faqs,
  images,
  process,
  projects,
  services,
  stats,
} from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Builders in Croydon | Extensions & Lofts | ARZ Construction",
      description:
        "ARZ Construction Ltd provides house extensions, loft conversions and home renovations in Croydon and South London. Contact our team for a free quote.",
      path: "/",
    }),
    // No <link rel=preload> for the hero: the image sits at the top of <main>
    // with fetchpriority="high", so the preload scanner finds it immediately and
    // a second request only duplicates the one the browser already starts.
    links: buildCanonical("/"),
  }),
  component: Home,
});

// ─── Section 2: the services the homepage promotes, in the order the brief
// lists them. Titles here are the customer-facing names, not the page H1s.
const homeServiceOrder: { slug: string; title: string }[] = [
  { slug: "extensions", title: "House Extensions" },
  { slug: "loft-conversions", title: "Loft Conversions" },
  { slug: "house-renovations", title: "Full House Renovations" },
  { slug: "kitchen-renovations", title: "Kitchen Renovations" },
  { slug: "bathroom-renovations", title: "Bathroom Renovations" },
  { slug: "roofing", title: "Roofing and Guttering" },
  { slug: "plumbing", title: "Plumbing" },
  { slug: "electrical", title: "Electrical Services" },
];

const homeServices = homeServiceOrder.flatMap((entry) => {
  const service = services.find((s) => s.slug === entry.slug);
  return service ? [{ ...service, title: entry.title }] : [];
});

const heroPoints = [
  "Free, itemised quotations",
  "One project manager per job",
  "Trades coordinated under one contract",
  "12-month workmanship guarantee",
];

const whyChoose = [
  {
    icon: Layers,
    title: "Coordinated Trades",
    text: "Groundworks, brickwork, carpentry, plumbing, electrics, plastering and decorating are sequenced by one team — you are not left managing separate contractors.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Quotations",
    text: "Quotations are written and itemised, so you can see what is included in the price before you commit to anything.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "One project manager and one point of contact, with updates as the work progresses rather than silence followed by surprises.",
  },
  {
    icon: Ruler,
    title: "Attention to Workmanship",
    text: "Each stage is checked before the next trade starts, so issues are put right as we go instead of being left on a snagging list at the end.",
  },
  {
    icon: HardHat,
    title: "Realistic Programmes",
    text: "The programme is planned around lead times and site access before work starts, and any change that affects it is discussed with you first.",
  },
  {
    icon: ShieldCheck,
    title: "Aftercare",
    text: "Workmanship is covered by a 12-month guarantee from practical completion, with manufacturer warranties passed to you at handover.",
  },
];

function Home() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          srcSet={images.heroSrcSet}
          sizes={images.heroSizes}
          alt="Home in South London with a contemporary rear extension built by ARZ Construction"
          width={1792}
          height={1024}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/94 via-navy/80 to-navy/40" />
        <div className="container-x relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block rounded-sm bg-yellow px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-navy uppercase">
              Croydon &amp; South London
            </span>
            <h1 className="mt-6 text-3xl leading-[1.1] font-extrabold text-white sm:text-4xl lg:text-5xl">
              House Extensions, Loft Conversions &amp; Renovations
              <span className="block text-yellow">in Croydon and South London</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-soft sm:text-lg">
              ARZ Construction Ltd provides residential construction and property renovation
              services across Croydon and South London. From house extensions and loft
              conversions to complete property refurbishments, our team helps homeowners
              transform their spaces with careful planning and quality workmanship.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Free Quote
              </ButtonLink>
              <ButtonLink
                to="/projects"
                variant="ghostLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                View Our Projects
              </ButtonLink>
            </div>

            {/* Prominent call and WhatsApp options */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Phone className="size-4 text-yellow" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <MessageCircle className="size-4 text-yellow" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>

            <p className="mt-6 text-[11px] font-semibold tracking-[0.14em] text-blue-soft/70 uppercase">
              {company.name} · Company No. {company.companyNumber}
            </p>
          </div>
        </div>
        <div className="relative border-t border-white/15 bg-navy-deep/80">
          <ul className="container-x grid gap-y-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroPoints.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                <Check className="size-4 shrink-0 text-yellow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. MAIN SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Main Services"
              title="Construction and Renovation Services in Croydon"
              subtitle="Eight core services delivered under one contract, from the structure and roof through to the kitchen, bathroom and finish."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/services" variant="outline">
              View All Services <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT ARZ CONSTRUCTION ────────────────────────────────────── */}
      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About ARZ Construction"
              title="A Residential Construction Team Built Around How Your Home Actually Works"
              subtitle="ARZ Construction Ltd is a limited company delivering extensions, loft conversions and whole-property renovations in Croydon and South London. Work is managed by one project manager who coordinates every trade on site, so the build runs to an agreed programme instead of being passed between subcontractors."
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Projects are carried out at customers' homes and site visits are by appointment.
              Registered office and company details are listed in the footer and on our contact
              page.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "One project manager accountable from first visit to handover",
                "Trades coordinated under a single written contract",
                "Itemised written quotations before work starts",
                "Building control inspections coordinated where the work requires them",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold text-navy">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-soft">
                    <Check className="size-3.5 text-navy" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink to="/about" variant="primary">
                More About Us
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.about}
              alt="ARZ Construction project manager reviewing plans on a residential site"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>

        <div className="container-x mt-14">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white px-5 py-5 text-center"
              >
                <dd className="font-display text-3xl font-extrabold text-navy">{stat.value}</dd>
                <dt className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 4. COMPLETED PROJECTS ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Completed Projects"
              title="Recent Work, Shown With the Scope of Each Job"
              subtitle="A selection of completed projects. Each one lists the work carried out and the general area — we show locations at borough level, never a customer's address."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-bright uppercase hover:text-navy"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 70} className="h-full">
                <ProjectSummaryCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE ARZ ────────────────────────────────────────────── */}
      <section className="border-y border-border bg-yellow-soft py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose ARZ Construction"
              title="What You Can Expect When We Take On Your Project"
              subtitle="Coordinated trades, a written scope before work starts and one project manager who stays with the job from the first visit to the final walkthrough."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="h-full">
                <div className="flex h-full gap-4 rounded-xl border border-border bg-white p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-blue-soft text-bright">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Five Stages From First Enquiry to Handover"
              subtitle="Every project follows the same sequence, so you always know what happens next and what is expected of you."
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <li key={step.number} className="h-full">
                <Reveal delay={i * 70} className="h-full">
                  <div className="h-full rounded-xl border border-border bg-white p-6 shadow-card">
                    <span className="font-display text-3xl font-extrabold text-navy">
                      {step.number}
                      <span className="text-yellow">.</span>
                    </span>
                    <h3 className="mt-3 text-sm font-bold tracking-wide uppercase">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 7. AREAS COVERED ─────────────────────────────────────────────── */}
      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Areas Covered"
              title="Where We Work Across Croydon and South London"
              subtitle="Croydon and the surrounding South London boroughs are our core area. Wider London and the surrounding counties are taken on by arrangement."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.name} delay={i * 60} className="h-full">
                <div className="flex h-full gap-4 rounded-xl border border-border bg-white p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{area.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {area.places}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/areas-we-cover" variant="outline">
              See Full Coverage <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── 8. FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title="Questions Homeowners Ask Before Starting"
              subtitle="Quotations, timelines, planning permission and building regulations — answered without promising that every project is the same."
            />
            <div className="mt-6">
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 text-sm font-bold text-bright transition-colors hover:text-navy"
              >
                All frequently asked questions <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <FAQAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT ───────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow text-yellow">Get in Touch</span>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Request a Free Quote for Your Project
            </h2>
            <p className="mt-4 leading-relaxed text-blue-soft">
              Send us a few details and we will arrange a site visit at a time that suits you.
              Quotations are free, written and itemised, with no obligation.
            </p>

            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={company.phoneHref}
                    className="text-base font-bold text-white hover:text-yellow"
                  >
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-bold text-white hover:text-yellow"
                  >
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-base font-bold text-white hover:text-yellow"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  Business Hours
                </dt>
                <dd className="mt-1 font-semibold text-white">{company.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  Areas Covered
                </dt>
                <dd className="mt-1 font-semibold text-white">{company.areasSummary}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase">
                  {company.addressLabel}
                </dt>
                <dd className="mt-1">
                  {company.addressLines.map((line) => (
                    <span key={line} className="block font-semibold text-white">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-xs text-blue-soft/80">
                    Company No. {company.companyNumber}
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-blue-soft/80">
              {company.operatingStatement}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

// ─── Homepage project card — photo, scope and the related service link ────────

function ProjectSummaryCard({ project }: { project: (typeof projects)[number] }) {
  const service = project.relatedService
    ? services.find((s) => s.slug === project.relatedService)
    : undefined;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — ${project.category.toLowerCase()} in ${project.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover"
        />
        <span className="absolute top-4 left-4 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-navy uppercase">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-4 space-y-1.5">
          {project.scope.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs font-semibold text-navy">
              <Check className="mt-0.5 size-3.5 shrink-0 text-bright" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        {service && (
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold tracking-wide text-bright uppercase transition-colors hover:text-navy"
          >
            {service.title} <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
