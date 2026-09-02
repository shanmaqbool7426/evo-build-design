import { MessageCircle, Phone } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "./Button";
import { company } from "@/data/site";

export function CTASection({
  title = "Ready To Transform Your Home?",
  text = "Tell us about your project and receive a free quotation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-blue-soft">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <ButtonLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
            Request a Free Quotation
          </ButtonLink>
          <ButtonAnchor href={company.phoneHref} variant="ghostLight" size="lg" className="w-full sm:w-auto">
            <Phone className="size-4" /> Call Us
          </ButtonAnchor>
          <ButtonAnchor
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghostLight"
            size="lg"
            className="w-full sm:w-auto"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}
