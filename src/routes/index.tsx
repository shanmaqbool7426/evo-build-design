import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  HardHat,
  Layers,
  MessageSquare,
  Ruler,
  ShieldCheck,
  Smile,
  Users,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { areas, company, images, process, projects, services } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeoMeta({
      title: "ARZ Construction Ltd — Renovations & Extensions in London",
      description:
        "Professional construction, renovations, extensions and property improvements in London. 10+ years' experience, free quotations and quality workmanship.",
      path: "/",
    }),
    links: buildCanonical("/"),
  }),
  component: Home,
});

const trust = ["10+ Years Experience", "Quality Craftsmanship", "Fully Professional", "Free Quotations"];

const whyChoose = [
  { icon: HardHat, title: "Quality Craftsmanship", text: "Experienced trades who take pride in a clean, precise finish." },
  { icon: MessageSquare, title: "Transparent Communication", text: "Weekly updates and one number to call, from start to sign-off." },
  { icon: ClipboardCheck, title: "Reliable Project Management", text: "Programmes we plan properly and then actually stick to." },
  { icon: Ruler, title: "Attention to Detail", text: "Level lines, tidy junctions and details that hold up close." },
  { icon: Layers, title: "Complete Building Services", text: "Structure, services and finishes handled under one contract." },
  { icon: Smile, title: "Customer Satisfaction", text: "Work isn't finished until you've walked it and you're happy." },
];

const quality = [
  { icon: BadgeCheck, title: "Quality Workmanship", text: "Every stage checked against a defined standard before we move on." },
  { icon: ShieldCheck, title: "Reliable Service", text: "Agreed start dates, predictable hours and a site kept safe and tidy." },
  { icon: Users, title: "Professional Standards", text: "Insured, certificated and fully documented work at handover." },
];

function Home() {
  const featured = projects[0]!;
  const latest = projects[1]!;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Modern UK home with a contemporary rear extension built by ARZ Construction"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/75 to-navy/35" />
        <div className="container-x relative py-20 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-sm bg-yellow px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-navy uppercase">
              ARZ Construction Ltd
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl">
              Building Better Spaces.
              <span className="block text-yellow">Built to Last.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-soft sm:text-lg">
              Professional construction, renovations, extensions and property improvements delivered
              with quality, precision and care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Free Quotation
              </ButtonLink>
              <ButtonLink to="/projects" variant="ghostLight" size="lg" className="w-full sm:w-auto">
                View Our Projects
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/15 bg-navy-deep/80">
          <ul className="container-x grid gap-y-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                <Check className="size-4 shrink-0 text-yellow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Transforming Homes Through Quality Construction"
              subtitle="ARZ Construction Ltd provides professional construction, renovation and property improvement services for homeowners across London. We take on the whole job — structure, services and finishes — so you deal with one team that is accountable for the result."
            />
            <ul className="mt-8 space-y-3">
              {["Quality workmanship", "Reliable project management", "Clear communication"].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="flex size-6 items-center justify-center rounded-full bg-yellow-soft">
                    <Check className="size-3.5 text-navy" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink to="/about" variant="primary" className="mt-8">
              More About Us
            </ButtonLink>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.about}
              alt="Construction professionals reviewing architectural plans on site"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="pb-16 lg:pb-24">
        <div className="container-x">
          <Reveal>
            <h2 className="sr-only">ARZ Construction in numbers</h2>
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-blue-tint py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src={featured.image}
              alt={`${featured.title} in ${featured.location}`}
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Featured Project</span>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{featured.description}</p>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              {featured.metrics?.map((m) => (
                <div key={m.label} className="rounded-lg border border-border bg-white px-5 py-4">
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {m.label}
                  </dt>
                  <dd className="font-display text-xl font-extrabold text-navy">{m.value}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink to="/projects" variant="primary" className="mt-8">
              View Project Details <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Our Construction Expertise"
              subtitle="From complete renovations to specialist building work, we provide dependable solutions for every stage of your project."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={i * 70} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/services" variant="outline">
              All Services <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* LATEST PROJECT */}
      <section className="bg-blue-tint py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="eyebrow">Latest Project</span>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold sm:text-4xl">{latest.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{latest.description}</p>
            <ul className="mt-7 space-y-3">
              {[
                "Complete renovation",
                "Modern interior finishes",
                "Professional project management",
                "High-quality materials",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="flex size-6 items-center justify-center rounded-full bg-yellow">
                    <Check className="size-3.5 text-navy" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink to="/projects" variant="primary" className="mt-8">
              View Project <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={latest.image}
              alt={`${latest.title} in ${latest.location}`}
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* BLUE FEATURE */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Our Approach"
              title="Built With Precision"
              subtitle="Every project is managed with careful planning, experienced workmanship and attention to detail."
            />
            <ol className="mt-9 space-y-6">
              {[
                { n: "01", t: "Experienced Team", d: "Long-standing trades who have worked together for years." },
                { n: "02", t: "Quality Materials", d: "Specified properly and sourced from suppliers we trust." },
                { n: "03", t: "Reliable Project Management", d: "One manager accountable for programme and quality." },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow font-display text-sm font-extrabold text-navy">
                    {item.n}
                  </span>
                  <span>
                    <span className="block font-bold text-white">{item.t}</span>
                    <span className="mt-1 block text-sm text-blue-soft">{item.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.precision}
              alt="Project manager reviewing architectural plans"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-yellow-soft py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Standards"
              title="Quality Above All"
              subtitle="We believe great construction starts with careful planning, quality workmanship and attention to every detail."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quality.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-white p-6 shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Portfolio"
              title="Gallery of Our Work"
              subtitle="Real projects. Real craftsmanship."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-bright uppercase hover:text-navy"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Transformations"
              title="See The Transformation"
              subtitle="Drag the slider to see the difference."
            />
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
            <BeforeAfter
              before={images.before}
              after={images.after}
              beforeAlt="Dated living room before renovation"
              afterAlt="The same living room after full renovation"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Why Us"
              title="Why Choose ARZ Construction?"
              subtitle="The things our clients tell us made the difference on their project."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-white p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-blue-soft text-bright">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Our Process"
              subtitle="Five clear stages, so you always know where your project stands."
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 70}>
                <li className="relative h-full rounded-xl border border-border bg-white p-6">
                  <span className="font-display text-3xl font-extrabold text-navy">
                    {step.number}
                    <span className="text-yellow">.</span>
                  </span>
                  <h3 className="mt-3 text-sm font-bold tracking-wide uppercase">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>


      {/* AREAS */}
      <section className="bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Coverage"
              title="Areas We Cover"
              subtitle={`ARZ Construction serves selected areas across London and the surrounding counties — ${company.areasSummary}.`}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.name} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-white p-6">
                  <h3 className="text-base font-bold">{area.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{area.places}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* CONTACT */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's Talk About Your Project."
              subtitle="Send us a few details and we'll arrange a visit at a time that suits you. Quotations are free and there's no obligation."
            />
            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Phone</dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a href={company.phoneHref} className="hover:text-bright">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Email</dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a href={`mailto:${company.email}`} className="hover:text-bright">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">WhatsApp</dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-bright"
                  >
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Business Hours
                </dt>
                <dd className="mt-1 font-semibold text-navy">{company.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Areas Covered
                </dt>
                <dd className="mt-1 font-semibold text-navy">{company.areasSummary}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
