import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Contact Us — ARZ Construction Ltd",
      description:
        "Get in touch with ARZ Construction for a free quotation. Call, WhatsApp, email or fill in our enquiry form. We respond within one working day.",
      path: "/contact",
    }),
    links: buildCanonical("/contact"),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        subtitle="Send us a few details and we'll arrange a visit at a time that suits you. Quotations are free and there's no obligation."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* CONTACT INFO */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-extrabold">Contact Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We're available by phone, email and WhatsApp during business hours.
                Or fill in the form and we'll get back to you within one working day.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Phone</dt>
                    <dd className="mt-1">
                      <a href={company.phoneHref} className="text-base font-bold text-navy hover:text-bright">
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${company.email}`} className="text-base font-bold text-navy hover:text-bright">
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <MessageCircle className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">WhatsApp</dt>
                    <dd className="mt-1">
                      <a
                        href={company.whatsappHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base font-bold text-navy hover:text-bright"
                      >
                        Message us on WhatsApp
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-tint text-navy">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Office</dt>
                    <dd className="mt-1">
                      {company.addressLines.map((line) => (
                        <span key={line} className="block text-sm font-semibold text-navy">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 rounded-lg border border-border bg-blue-tint p-5">
                <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">Business Hours</p>
                <p className="mt-2 text-sm font-semibold text-navy">{company.hours}</p>
              </div>
            </Reveal>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Prefer To Call?" text="Pick up the phone — we're always happy to chat through your project and answer any questions." />
    </>
  );
}
