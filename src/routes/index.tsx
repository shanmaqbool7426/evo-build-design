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
import { ProjectGalleryCard } from "@/components/ProjectLightbox";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ReviewCard, ReviewsBanner } from "@/components/ReviewCard";
import {
  areas,
  company,
  images,
  process,
  projects,
  reviews,
  reviewSummary,
  services,
} from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Loft Conversions & House Extensions in Croydon — ARZ Construction Ltd",
      description:
        "Expert loft conversions, house extensions, kitchen & bathroom renovations and electrical services in Croydon & South London. Free quote within 24 hours. 10+ years' experience.",
      path: "/",
    }),
    links: buildCanonical("/"),
  }),
  component: Home,
});

const trust = [
  "10+ Years in South London",
  "5★ Google Rated",
  "Free Quote in 24 Hours",
  "No Hidden Extras",
];

const whyChoose = [
  {
    icon: HardHat,
    title: "Proper Tradespeople",
    text: "Not subcontractors hired last minute — our core team has worked together for years and knows what a good finish looks like.",
  },
  {
    icon: MessageSquare,
    title: "You'll Always Know What's Happening",
    text: "One project manager, one phone number. Weekly updates as standard — no chasing, no silence.",
  },
  {
    icon: ClipboardCheck,
    title: "We Stick to the Programme",
    text: "We plan the build properly before we start, so the timeline we give you is one we can actually keep.",
  },
  {
    icon: Ruler,
    title: "The Details Matter to Us",
    text: "Level lines, neat junctions, tidy reveals. The things you notice up close are the things we care about most.",
  },
  {
    icon: Layers,
    title: "One Team, Everything Covered",
    text: "Structure, plumbing, electrics, plastering, decorating — all under one contract. No coordinating separate trades yourself.",
  },
  {
    icon: Smile,
    title: "We're Not Done Until You're Happy",
    text: "We walk every finished job with you. If something's not right, we fix it. That's not a policy — it's just how we work.",
  },
];

const quality = [
  {
    icon: BadgeCheck,
    title: "Quality You Can See",
    text: "We check our own work at every stage before moving on. You shouldn't have to point out problems — we find them first.",
  },
  {
    icon: ShieldCheck,
    title: "We Show Up When We Say We Will",
    text: "Agreed start date, consistent hours, site kept clean and safe. Basics that too many builders get wrong.",
  },
  {
    icon: Users,
    title: "Fully Insured and Certified",
    text: "All work is carried out by insured trades and signed off properly. You get the paperwork at handover — no chasing for certificates.",
  },
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
              ARZ Construction Ltd · Croydon &amp; South London
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl">
              Loft Conversions &amp; House Extensions
              <span className="block text-yellow">in Croydon &amp; South London</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-soft sm:text-lg">
              We build loft conversions, house extensions, kitchen and bathroom renovations, and
              handle electrical work — all across Croydon and South London. One team, one point of
              contact, and a finish you'll actually be proud of.
            </p>
            {/* 24-Hour Quote Promise */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 backdrop-blur-sm">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-yellow font-bold text-[11px] text-navy">
                ✓
              </span>
              <span className="text-sm font-semibold text-white">
                Send us a message — we'll get back to you within{" "}
                <span className="text-yellow font-bold">24 hours</span>, guaranteed
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                Get Your Free Quote in 24 Hours
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
              title="Croydon's Local Construction Team — Not a Big Firm, Not a One-Man Band"
              subtitle="ARZ Construction has been working with homeowners across Croydon and South London for over a decade. We're not a large national contractor passing your job to whoever's available — we're a tight team of experienced tradespeople who take on a limited number of projects so every one gets proper attention."
            />
            <ul className="mt-8 space-y-3">
              {[
                "We manage the whole build — no coordinating separate trades yourself",
                "Fixed-price quotes with no surprise extras at the end",
                "You'll have one project manager's direct number from day one",
              ].map((point) => (
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
            <h2 className="mt-3 text-3xl leading-tight font-extrabold sm:text-4xl">
              {featured.title}
            </h2>
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
              eyebrow="What We Do"
              title="Loft Conversions, Extensions & More in Croydon"
              subtitle="Whether you need an extra bedroom, a bigger kitchen, or a full house renovation — we cover it all. Based in South London, with 10+ years of completed projects across the borough."
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
            <h2 className="mt-3 text-3xl leading-tight font-extrabold sm:text-4xl">
              {latest.title}
            </h2>
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
              eyebrow="How We Build"
              title="We Plan It Properly Before We Touch a Wall"
              subtitle="Rushed starts cause most build problems. We take time upfront to plan the programme, sort materials and coordinate trades — so the build itself runs smoothly and you're not constantly firefighting."
            />
            <ol className="mt-9 space-y-6">
              {[
                {
                  n: "01",
                  t: "An Experienced Team You Can Trust",
                  d: "Our core trades have worked together for years. You get experienced hands on your job, not whoever was free this week.",
                },
                {
                  n: "02",
                  t: "Materials Specified and Sourced Properly",
                  d: "We don't leave material choices to chance. Everything is specified correctly and ordered from suppliers we have long relationships with.",
                },
                {
                  n: "03",
                  t: "One Manager Responsible for Everything",
                  d: "One person runs your project from first visit to final walkthrough. They're accountable for the programme, the quality and the communication.",
                },
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
              eyebrow="Our Standards"
              title="Good Enough Isn't Good Enough for Us"
              subtitle="Most complaints about builders come down to the same things — they cut corners, they don't communicate, and they disappear when something goes wrong. We've built our business on doing the opposite."
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
              eyebrow="Recent Work"
              title="Projects We've Completed in South London"
              subtitle="Every photo below is from a real ARZ Construction project. No stock images, no renders — just finished work in people's homes."
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
                <ProjectGalleryCard project={project} />
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
              eyebrow="Before & After"
              title="This Is What a Proper Renovation Looks Like"
              subtitle="Drag the slider to see the difference. Same room, same house — completely transformed. This is the kind of result we aim for on every project."
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
              eyebrow="Why ARZ?"
              title="Why Croydon Homeowners Choose Us Over Other Builders"
              subtitle="We're not going to tell you we're the best — our clients' reviews say that. Here's what they actually tell us made the difference."
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

      {/* PROCESS */}
      <section className="border-y border-border bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From First Call to Finished Build — Here's What Happens"
              subtitle="No mystery, no vague timelines. Here's exactly how a project with ARZ Construction runs from start to finish."
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

      {/* GOOGLE REVIEWS */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                align="left"
                eyebrow="Google Reviews"
                title="Don't Take Our Word for It"
                subtitle="These are real reviews from homeowners in Croydon and South London — verified on Google, unedited."
              />
              <ReviewsBanner
                average={reviewSummary.average}
                total={reviewSummary.total}
                link={reviewSummary.link}
              />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <Reveal key={review.id} delay={i * 70}>
                <ReviewCard review={review} featured={i === 0} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink to="/reviews" variant="outline">
              Read All Reviews <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-blue-tint py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Based in Croydon, Building Across South London"
              subtitle="We're a local team — not a national company dispatching crews from a depot. Most of our work is within 30 minutes of our base, which means we're on site when we say we will be."
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
              eyebrow="Get in Touch"
              title="Tell Us About Your Project — We'll Take It From There"
              subtitle="Fill in the form and we'll come back to you within 24 hours. If you'd rather talk first, just call or WhatsApp — no scripts, no sales pressure, just a straight conversation about what you're looking to do."
            />
            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Phone
                </dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a href={company.phoneHref} className="hover:text-bright">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a href={`mailto:${company.email}`} className="hover:text-bright">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  WhatsApp
                </dt>
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
