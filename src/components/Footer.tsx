import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, services } from "@/data/site";

const legal = [
  { label: "Privacy Policy", to: "/privacy" as const },
  { label: "Cookie Policy", to: "/privacy" as const },
  { label: "Terms & Conditions", to: "/terms" as const },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-20 text-blue-soft xl:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Professional construction, renovation and property improvement services across London
            and the surrounding areas.
          </p>
          <div className="mt-4 text-xs text-blue-soft/70">
            {company.addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="mt-2 block">
              Registered in England &amp; Wales · Company No. {company.companyNumber}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Navigation</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-yellow"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-2 hover:text-yellow">
                <Phone className="size-4 text-yellow" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-yellow">
                <Mail className="size-4 text-yellow" /> {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-yellow"
              >
                <MessageCircle className="size-4 text-yellow" /> WhatsApp us
              </a>
            </li>
          </ul>
          <h2 className="mt-6 text-sm font-bold tracking-[0.14em] text-white uppercase">Legal</h2>
          <ul className="mt-3 space-y-2.5 text-sm">
            {legal.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© 2026 ARZ Construction Ltd. All Rights Reserved.</p>
          <p>{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
