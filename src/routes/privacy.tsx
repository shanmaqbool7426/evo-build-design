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
                  <li>
                    Website usage data collected by analytics, only where you have accepted
                    analytics cookies (pages viewed, approximate location and device type)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">3. How We Use Your Data</h2>
                <p>
                  We rely on legitimate interests to respond to enquiries and deliver contracted
                  work, on your consent for analytics cookies, and on legal obligation for records
                  we are required to keep. We use your information to:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Respond to enquiries and provide quotations</li>
                  <li>Manage and deliver construction projects</li>
                  <li>Communicate with you about your project</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal, tax and insurance obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">4. Cookies and Analytics</h2>
                <p>
                  Essential cookies are required for the site to work. Non-essential analytics
                  cookies are not set until you choose &ldquo;Accept analytics&rdquo; in the cookie
                  banner. Your choice is stored in your browser&rsquo;s local storage (key{" "}
                  <code>arz-cookie-consent</code>) so the banner does not reappear, and you can
                  change it at any time using the <strong>Cookie settings</strong> link in the
                  footer.
                </p>
                <p className="mt-3">
                  Analytics is provided by Google Analytics 4, loaded through Google Tag Manager
                  (container GT-TQR2XG2K). Google Consent Mode is set to denied by default, so no
                  analytics storage is written until consent is given. Blocking analytics cookies
                  does not affect your ability to use the site or submit an enquiry.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">5. Who Processes Data For Us</h2>
                <p>
                  Enquiry forms are delivered by Web3Forms, which forwards the submission to our
                  email inbox. Website analytics, where consented, is processed by Google Ireland
                  Limited. These providers process data on our instructions and under their own
                  data-processing terms. We do not sell personal data or share it for advertising
                  purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">6. Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes for
                  which it was collected, or as required by law. Enquiries that do not become
                  projects are normally deleted within 24 months. Project records are typically
                  kept for seven years for tax and insurance purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">7. Your Rights</h2>
                <p>Under data protection law, you have the right to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent for analytics at any time</li>
                </ul>
                <p className="mt-3">
                  If you are unhappy with how we have handled your data you can complain to the
                  Information Commissioner&rsquo;s Office at{" "}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-navy hover:text-bright"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">8. Contact</h2>
                <p>
                  To exercise any of these rights or if you have questions about this policy,
                  contact us at{" "}
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy hover:text-bright">
                    {company.email}
                  </a>{" "}
                  or call{" "}
                  <a href={company.phoneHref} className="font-semibold text-navy hover:text-bright">
                    {company.phone}
                  </a>
                  .
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Last updated: October 2026. {company.name} · Company No. {company.companyNumber} ·
                Registered in England &amp; Wales. Registered office:{" "}
                {company.addressLines.join(", ")}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
