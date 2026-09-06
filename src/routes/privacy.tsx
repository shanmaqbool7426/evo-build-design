import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Privacy Policy — ARZ Construction Ltd",
      description: `${company.name} privacy and cookie policy. How we collect, use and protect your personal data.`,
      path: "/privacy",
    }),
    links: buildCanonical("/privacy"),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy &amp; Cookie Policy" breadcrumb="Privacy Policy" />

      <section className="py-16 lg:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <div className="max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-navy">1. Introduction</h2>
                <p>
                  {company.name} ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use and safeguard your personal data when you visit our website, contact us or engage our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">2. Data We Collect</h2>
                <p>We may collect the following information:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Name, email address and telephone number</li>
                  <li>Property address and postcode</li>
                  <li>Project details and photographs you provide</li>
                  <li>Website usage data via cookies and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">3. How We Use Your Data</h2>
                <p>We use your information to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Respond to enquiries and provide quotations</li>
                  <li>Manage and deliver construction projects</li>
                  <li>Communicate with you about your project</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">4. Cookies</h2>
                <p>
                  Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences. Essential cookies are required for the site to function. Analytics cookies help us understand how visitors use our site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">5. Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Project records are typically kept for seven years for tax and insurance purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">6. Your Rights</h2>
                <p>Under data protection law, you have the right to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">7. Contact</h2>
                <p>
                  To exercise any of these rights or if you have questions about this policy, contact us at{" "}
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy hover:text-bright">
                    {company.email}
                  </a>.
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Last updated: January 2026. {company.name} · Company No. {company.companyNumber} · Registered in England &amp; Wales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
