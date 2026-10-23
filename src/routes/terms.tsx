import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Terms & Conditions — ARZ Construction Ltd",
      description: `${company.name} terms and conditions for construction services, quotations, payments and guarantees.`,
      path: "/terms",
    }),
    links: buildCanonical("/terms"),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms &amp; Conditions" breadcrumb="Terms" />

      <section className="py-16 lg:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <div className="max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-navy">1. About These Terms</h2>
                <p>
                  These terms and conditions apply to all construction, renovation and building services provided by {company.name} (Company No. {company.companyNumber}), registered in England &amp; Wales.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">2. Quotations</h2>
                <p>
                  All quotations are provided in writing and are valid for 30 days from the date of issue unless stated otherwise. Quotations are based on the scope of work discussed during our site visit. Any additional work requested after acceptance will be quoted separately and requires written approval before proceeding.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">3. Payment Terms</h2>
                <p>
                  Work is staged against agreed milestones. Payment is due upon completion of each stage as set out in the written quotation. A deposit may be required before work commences, typically covering materials and initial labour costs. Invoices are payable within 14 days of issue.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">4. Project Timeline</h2>
                <p>
                  Indicative timelines are provided with each quotation. Completion dates are estimates based on the agreed scope of work and may be affected by unforeseen circumstances such as weather, supply chain delays, or additional work discovered during construction. We will communicate any changes to the programme promptly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">5. Changes to Scope</h2>
                <p>
                  Any changes to the agreed scope of work must be confirmed in writing. We will provide a revised quotation for any additional work before proceeding. Changes may affect the project timeline and cost.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">6. Guarantees</h2>
                <p>
                  All workmanship is guaranteed for a period of twelve months from practical completion. Manufacturer warranties on materials, appliances and fixtures are passed on to the client in the handover pack. The guarantee does not cover damage caused by misuse, lack of maintenance or work carried out by third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">7. Insurance &amp; Liability</h2>
                <p>
                  We maintain public liability insurance for the work we carry out and keep a safe
                  site throughout the project. A copy of our current insurance certificate is
                  available on request before work starts. Clients are advised to notify their home
                  insurance provider before construction work begins.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">8. Right to Cancel</h2>
                <p>
                  Where a contract is agreed at a distance or away from our premises, you may have
                  a 14-day right to cancel under the Consumer Contracts Regulations 2013. Because
                  building work is usually bespoke and may begin at your request within that
                  period, we may ask you to confirm in writing that you want work to start, and you
                  may be charged for work properly carried out before cancellation. This does not
                  affect your statutory rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">9. Dispute Resolution</h2>
                <p>
                  In the unlikely event of a dispute, we aim to resolve matters promptly and fairly.
                  If a resolution cannot be reached informally, both parties agree to mediation
                  before pursuing any legal action.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy">10. Contact</h2>
                <p>
                  For any questions about these terms, contact us at{" "}
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy hover:text-bright">
                    {company.email}
                  </a>{" "}
                  or call{" "}
                  <a href={company.phoneHref} className="font-semibold text-navy hover:text-bright">
                    {company.phone}
                  </a>.
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
