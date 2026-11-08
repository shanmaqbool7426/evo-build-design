import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Clock, ShieldCheck, Star } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { blogPosts } from "@/data/blog";
import { company } from "@/data/site";
import { buildSeoMeta, buildCanonical, buildBreadcrumb, buildArticle } from "@/lib/seo";
import { MessageCircle, Phone } from "lucide-react";

// ─── Route head + guard ───────────────────────────────────────────────────────

export const Route = createFileRoute("/blog/$slug")({
  // Unknown guide slugs must return a real HTTP 404, not a soft-404 page.
  beforeLoad: ({ params }) => {
    if (!blogPosts.some((p) => p.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
      meta: buildSeoMeta({
        title: post.metaTitle,
        description: post.metaDescription,
        path: `/blog/${post.slug}`,
        ogImage: post.image,
      }),
      links: buildCanonical(`/blog/${post.slug}`),
      scripts: [
        ...buildArticle({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          image: post.image,
          date: post.date,
        }),
        ...buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog" },
          { name: post.title },
        ]),
        {
          type: "application/ld+json" as const,
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        // Google's preferred-sources library, loaded in manual mode so it never
        // rewrites the React tree (the default mode replaces a placeholder div,
        // which tears nodes out from under React and breaks hydration).
        // The inline queue runs before the async library, so the API is captured
        // the moment it lands; the button in the article body drives the flow.
        {
          children:
            "window.__arzPreferredSource=function(ps){try{ps.init({theme:'light'});window.__arzPs=ps;}catch(e){}};(self.PREFERRED_SOURCE=self.PREFERRED_SOURCE||[]).push(window.__arzPreferredSource);",
        },
        {
          src: "https://news.google.com/swg/js/v1/publisher.js",
          async: true,
          "preferred-sources-control": "manual",
        },
      ],
    };
  },
  component: BlogPostPage,
});

// ─── Google "preferred source" ────────────────────────────────────────────

// Where the reader lands if the publisher library is blocked (ad blockers and
// strict privacy extensions do block it) — Google's own deeplink flow.
const PREFERRED_SOURCE_DEEPLINK =
  "https://www.google.com/preferences/source?q=www.arzconstructionltd.com";

function addPreferredSource() {
  const win = window as Window & {
    __arzPs?: { addPreferredSource?: () => void };
    dataLayer?: unknown[];
  };

  // Tracked so this can be judged on clicks rather than opinion: if nobody
  // clicks it in a month, it gets deleted.
  win.dataLayer?.push({ event: "preferred_source_click" });

  try {
    if (win.__arzPs?.addPreferredSource) {
      win.__arzPs.addPreferredSource();
      return;
    }
  } catch {
    // Google rejects domains that aren't in its publisher list — fall through
    // to the deeplink so the click still goes somewhere instead of dying.
  }

  window.open(PREFERRED_SOURCE_DEEPLINK, "_blank", "noopener,noreferrer");
}

// ─── Inline [anchor](/path) links → typed router Links ───────────────────────

const STATIC_ROUTES = new Set([
  "/",
  "/about",
  "/areas-we-cover",
  "/blog",
  "/contact",
  "/faqs",
  "/privacy",
  "/projects",
  "/services",
  "/terms",
]);

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const anchor = m[1] ?? "";
        const href = m[2] ?? "";
        if (href.startsWith("/services/")) {
          return (
            <Link
              key={i}
              to="/services/$slug"
              params={{ slug: href.slice("/services/".length) }}
              className="font-bold text-bright transition-colors hover:text-navy"
            >
              {anchor}
            </Link>
          );
        }
        if (href.startsWith("/blog/")) {
          return (
            <Link
              key={i}
              to="/blog/$slug"
              params={{ slug: href.slice("/blog/".length) }}
              className="font-bold text-bright transition-colors hover:text-navy"
            >
              {anchor}
            </Link>
          );
        }
        if (STATIC_ROUTES.has(href)) {
          return (
            <Link
              key={i}
              to={href as "/" | "/about" | "/areas-we-cover" | "/blog" | "/contact" | "/faqs" | "/projects" | "/services"}
              className="font-bold text-bright transition-colors hover:text-navy"
            >
              {anchor}
            </Link>
          );
        }
        return (
          <a key={i} href={href} className="font-bold text-bright transition-colors hover:text-navy">
            {anchor}
          </a>
        );
      })}
    </>
  );
}

// ─── Post page ────────────────────────────────────────────────────────────────

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug)!;
  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/94 via-navy/80 to-navy/45" />
        <div className="container-x relative py-16 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-bold tracking-wide text-blue-soft/80 uppercase"
          >
            <Link to="/" className="transition-colors hover:text-yellow">
              Home
            </Link>
            <span className="mx-1.5 text-yellow" aria-hidden="true">
              /
            </span>
            <Link to="/blog" className="transition-colors hover:text-yellow">
              Guides
            </Link>
            <span className="mx-1.5 text-yellow" aria-hidden="true">
              /
            </span>
            <span className="text-white">{post.category}</span>
          </nav>
          <span className="mt-6 inline-block rounded-sm bg-yellow px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-navy uppercase">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] font-extrabold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-soft">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readTime} min read
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              12-month workmanship guarantee
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE + SIDEBAR */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid items-start gap-10 lg:grid-cols-3 lg:gap-16">
          <article className="space-y-10 lg:col-span-2">
            <Reveal>
              <p className="text-lg leading-relaxed font-medium text-navy">
                <RichText text={post.intro} />
              </p>
            </Reveal>

            {post.sections.map((section, i) => (
              <Reveal key={section.heading} delay={40}>
                <h2 className="text-2xl font-extrabold">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    <RichText text={p} />
                  </p>
                ))}
                {/* Takeaways box after the first section */}
                {i === 0 && post.takeaways.length > 0 && (
                  <aside className="mt-6 rounded-xl border-2 border-yellow bg-yellow-soft p-5">
                    <h3 className="text-sm font-extrabold tracking-wide text-navy uppercase">
                      Key takeaways
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {post.takeaways.map((t) => (
                        <li key={t} className="flex items-start gap-2.5 text-sm font-semibold text-navy">
                          <Check className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}
              </Reveal>
            ))}

            {/* FAQ */}
            <Reveal delay={80}>
              <h2 className="text-2xl font-extrabold">Frequently Asked Questions</h2>
              <dl className="mt-5 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-lg border border-border bg-white">
                    <dt>
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                          {faq.q}
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-tint text-bright transition-transform group-open:rotate-180">
                            <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                              <path
                                d="M2 4l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </summary>
                        <dd className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground">
                          <RichText text={faq.a} />
                        </dd>
                      </details>
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* MORE GUIDES */}
            {others.length > 0 && (
              <Reveal delay={100}>
                <h2 className="text-2xl font-extrabold">More Guides</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      to="/blog/$slug"
                      params={{ slug: other.slug }}
                      className="group rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-card"
                    >
                      <span className="text-xs font-bold text-bright uppercase">{other.category}</span>
                      <h3 className="mt-1.5 text-sm leading-snug font-extrabold text-navy group-hover:text-bright">
                        {other.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-bright">
                        Read guide{" "}
                        <ArrowRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}

            {/* GOOGLE PREFERRED SOURCE */}
            {/* Shown at the end of the article, where the reader has finished.
                Only guides load it — service pages stay free of the extra
                third-party script, which is where Core Web Vitals matter most. */}
            <Reveal delay={110}>
              <div className="mt-10 rounded-xl border border-border bg-blue-tint p-6">
                <p className="text-base font-extrabold text-navy">
                  Want our guides to show up first in Google?
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Add ARZ Construction as a preferred source. Once you do, our building guides are
                  more likely to be highlighted in Google's AI answers for the questions you ask
                  about extensions, lofts and renovations.
                </p>
                <button
                  type="button"
                  onClick={addPreferredSource}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-navy/90"
                >
                  <Star className="size-4" aria-hidden="true" />
                  Add ARZ as a preferred source
                </button>
              </div>
            </Reveal>
          </article>

          {/* SIDEBAR */}
          <Reveal delay={120}>
            <aside className="sticky top-28 space-y-5">
              <div className="rounded-xl border-2 border-yellow bg-yellow-soft p-6">
                <h3 className="text-sm font-extrabold tracking-wide text-navy uppercase">
                  Free, No-Obligation Quote
                </h3>
                <p className="mt-2 text-sm text-navy/80">
                  Want a real price for your project? We visit, measure and provide a written,
                  itemised quotation — free and with no obligation.
                </p>
                <ButtonLink to="/contact" variant="accent" size="lg" className="mt-4 w-full">
                  Request a Free Quote
                </ButtonLink>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold tracking-wide text-navy uppercase">
                  Prefer to Talk?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Speak directly with our team — no call centres.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <ButtonAnchor href={company.phoneHref} variant="outline" className="w-full">
                    <Phone className="size-4" /> {company.phoneDisplay}
                  </ButtonAnchor>
                  <ButtonAnchor
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    className="w-full border-[#0B7A6B] text-[#0B7A6B] hover:bg-[#0B7A6B]/5"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </ButtonAnchor>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Build?"
        text="Request a free, no-obligation quotation. We'll visit the property, confirm the scope in writing and set out an indicative programme."
      />
    </>
  );
}
