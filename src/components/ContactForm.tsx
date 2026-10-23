import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "./Button";
import { services, company } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

// ─── Web3Forms ───────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "02b2cb25-9bae-454e-bda2-02228432290f";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// ─── Validation ──────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a contact number").max(30),
  postcode: z.string().trim().min(3, "Please enter your postcode").max(12),
  projectType: z.string().trim().min(1, "Please choose a project type"),
  budget: z.string().trim().max(60).optional(),
  contactMethod: z.string().trim().min(1),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about the project")
    .max(2000),
});

type FormDataState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormDataState, string>>;
type Status = "idle" | "loading" | "success" | "error" | "network-error";

// ─── Styles ──────────────────────────────────────────────────────────────────
const fieldBase =
  "mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/30";
const fieldNormal = `${fieldBase} border-border focus:border-bright`;
const fieldError = `${fieldBase} border-destructive focus:border-destructive focus:ring-destructive/20`;
const labelCls = "block text-xs font-bold tracking-wide text-navy uppercase";

// ─── Component ───────────────────────────────────────────────────────────────
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  // ── Form Submission ──
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    const raw = Object.fromEntries(formDataObj.entries());

    // ── Client-side validation ──
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("loading");

    // ── Build Web3Forms payload ──
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `New Quotation Request — ${parsed.data.projectType} (${parsed.data.postcode})`,
      from_name: parsed.data.name,
      botcheck: typeof raw["botcheck"] === "string" ? raw["botcheck"] : "",

      // Structured fields in email
      "Full Name": parsed.data.name,
      "Email Address": parsed.data.email,
      "Phone Number": parsed.data.phone,
      "Postcode": parsed.data.postcode,
      "Project Type": parsed.data.projectType,
      "Estimated Budget": parsed.data.budget || "Not specified",
      "Preferred Contact": parsed.data.contactMethod,
      "Project Description": parsed.data.message,
      "Company": company.name,
      "Submitted From":
        typeof window !== "undefined" ? window.location.href : "/contact",
    };

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        // Conversion event for GTM/GA4 — no personal data is pushed.
        trackEvent("quote_request_submitted", {
          project_type: parsed.data.projectType,
          postcode_area: parsed.data.postcode.split(/\s+/)[0] ?? "",
        });
        setStatus("success");
        form.reset();
      } else {
        setServerError(json.message ?? "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError(
        "Could not reach our servers. Please try again or call us directly."
      );
      setStatus("network-error");
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-green-200 bg-white px-8 py-12 text-center shadow-card">
        <span className="flex size-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="size-9 text-green-500" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-navy">
          Request Received — Thank You!
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          A member of the ARZ Construction team will be in touch to arrange your{" "}
          <strong>free, no-obligation quotation</strong>.
        </p>
        <div className="mt-3 flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <span>
            Or call us now:{" "}
            <a href={company.phoneHref} className="font-bold text-navy hover:text-bright">
              {company.phone}
            </a>
          </span>
          <span>
            Email:{" "}
            <a href={`mailto:${company.email}`} className="underline hover:text-bright">
              {company.email}
            </a>
          </span>
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  const f = (k: keyof FormDataState) => (errors[k] ? fieldError : fieldNormal);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Honeypot — hidden from people, filled in by bots */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* ── Full Name ── */}
        <div>
          <label className={labelCls} htmlFor="cf-name">
            Full Name <Required />
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            className={f("name")}
            placeholder="John Smith"
          />
          <FieldError message={errors.name ?? undefined} />
        </div>

        {/* ── Email ── */}
        <div>
          <label className={labelCls} htmlFor="cf-email">
            Email Address <Required />
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={f("email")}
            placeholder="john@example.com"
          />
          <FieldError message={errors.email ?? undefined} />
        </div>

        {/* ── Phone ── */}
        <div>
          <label className={labelCls} htmlFor="cf-phone">
            Phone Number <Required />
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={f("phone")}
            placeholder="07860 135189"
            maxLength={30}
          />
          <FieldError message={errors.phone ?? undefined} />
        </div>

        {/* ── Postcode ── */}
        <div>
          <label className={labelCls} htmlFor="cf-postcode">
            Postcode <Required />
          </label>
          <input
            id="cf-postcode"
            name="postcode"
            autoComplete="postal-code"
            className={f("postcode")}
            placeholder="CR0 1AA"
            maxLength={12}
          />
          <FieldError message={errors.postcode ?? undefined} />
        </div>

        {/* ── Project Type ── */}
        <div>
          <label className={labelCls} htmlFor="cf-projectType">
            Project Type <Required />
          </label>
          <select
            id="cf-projectType"
            name="projectType"
            defaultValue=""
            className={f("projectType")}
          >
            <option value="" disabled>
              Please select…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Multiple Services</option>
          </select>
          <FieldError message={errors.projectType ?? undefined} />
        </div>

        {/* ── Budget ── */}
        <div>
          <label className={labelCls} htmlFor="cf-budget">
            Estimated Budget
          </label>
          <select
            id="cf-budget"
            name="budget"
            defaultValue=""
            className={fieldNormal}
          >
            <option value="">Not sure yet</option>
            <option value="Under £10k">Under £10,000</option>
            <option value="£10k – £30k">£10,000 – £30,000</option>
            <option value="£30k – £75k">£30,000 – £75,000</option>
            <option value="£75k – £150k">£75,000 – £150,000</option>
            <option value="£150k+">£150,000+</option>
          </select>
        </div>

        {/* ── Preferred Contact ── */}
        <div>
          <label className={labelCls} htmlFor="cf-contactMethod">
            Preferred Contact Method
          </label>
          <select
            id="cf-contactMethod"
            name="contactMethod"
            defaultValue="Phone"
            className={fieldNormal}
          >
            <option value="Phone">Phone Call</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>

        {/* ── Message ── */}
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="cf-message">
            Project Description <Required />
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            maxLength={2000}
            className={f("message")}
            placeholder="Tell us what you'd like to achieve, current state of property, dimensions, or timescale…"
          />
          <FieldError message={errors.message ?? undefined} />
        </div>
      </div>

      {/* ── Validation / server error banner ── */}
      {(status === "error" || status === "network-error" || serverError) && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/8 px-4 py-3"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <p className="text-sm text-destructive">
            {serverError ||
              "Please check the highlighted fields and try again."}
          </p>
        </div>
      )}

      {/* ── Submit ── */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="mt-6 w-full gap-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending your request…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Request My Free Quotation
          </>
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        No obligation · Free, itemised quotation ·{" "}
        <a href={`mailto:${company.email}`} className="font-medium text-navy hover:underline">
          {company.email}
        </a>
      </p>
    </form>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Required() {
  return (
    <span className="ml-0.5 text-destructive" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
      <AlertCircle className="size-3 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}
