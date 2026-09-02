import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "./Button";
import { services } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a contact number").max(30),
  postcode: z.string().trim().min(3, "Please enter your postcode").max(12),
  projectType: z.string().trim().min(1, "Please choose a project type"),
  budget: z.string().trim().max(60).optional(),
  contactMethod: z.string().trim().min(1),
  message: z.string().trim().min(10, "Please tell us a little about the project").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-bright focus:ring-2 focus:ring-ring/30 focus:outline-none";
const label = "block text-xs font-bold tracking-wide text-navy uppercase";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

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
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 1100);
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-10 text-bright" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold">Thank you — your request is with us</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A member of the team will be in touch within one working day to arrange your free
          quotation.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" className={field} placeholder="Jane Smith" maxLength={100} />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="jane@email.com" maxLength={255} />
          <FieldError message={errors.email} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="07700 900123" maxLength={30} />
          <FieldError message={errors.phone} />
        </div>
        <div>
          <label className={label} htmlFor="postcode">
            Postcode
          </label>
          <input id="postcode" name="postcode" className={field} placeholder="SW1A 1AA" maxLength={12} />
          <FieldError message={errors.postcode} />
        </div>
        <div>
          <label className={label} htmlFor="projectType">
            Project Type
          </label>
          <select id="projectType" name="projectType" defaultValue="" className={field}>
            <option value="">Please select</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          <FieldError message={errors.projectType} />
        </div>
        <div>
          <label className={label} htmlFor="budget">
            Estimated Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={field}>
            <option value="">Not sure yet</option>
            <option value="Under £10k">Under £10k</option>
            <option value="£10k – £30k">£10k – £30k</option>
            <option value="£30k – £75k">£30k – £75k</option>
            <option value="£75k+">£75k+</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="contactMethod">
            Preferred Contact Method
          </label>
          <select id="contactMethod" name="contactMethod" defaultValue="Phone" className={field}>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Project Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            className={field}
            placeholder="Tell us what you'd like to achieve, and any timescales you have in mind."
          />
          <FieldError message={errors.message} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="photos">
            Upload Photos (optional)
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="mt-1.5 w-full rounded-md border border-dashed border-border bg-blue-tint px-3.5 py-3 text-sm text-muted-foreground file:mr-3 file:rounded-sm file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Please check the highlighted fields and try again.
        </p>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request My Free Quotation"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We only use your details to respond to your enquiry.
      </p>
    </form>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}
