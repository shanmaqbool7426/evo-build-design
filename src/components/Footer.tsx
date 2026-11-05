import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { company, navLinks, services, seoLandingPages, townLandingPages } from "@/data/site";

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
            Professional loft conversions, house extensions, kitchen &amp; bathroom renovations and
            electrical services across Croydon and South London.
          </p>
          <div className="mt-4 text-xs text-blue-soft/70">
            <span className="block font-semibold tracking-wide text-blue-soft uppercase">
              {company.addressLabel}
            </span>
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-2 block">
              Registered in England &amp; Wales · Company No. {company.companyNumber}
            </span>
            <span className="mt-2 block">{company.operatingStatement}</span>
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
          <h3 className="mt-5 text-xs font-bold tracking-[0.14em] text-yellow uppercase">
            South London Specialists
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm">
            {seoLandingPages
              .filter((p) => !p.isTown)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: p.slug }}
                    className="transition-colors hover:text-yellow"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
          <h3 className="mt-5 text-xs font-bold tracking-[0.14em] text-yellow uppercase">
            Surrey &amp; North Downs
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm">
            {townLandingPages.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-yellow"
                >
                  {p.title}
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
                <Phone className="size-4 text-yellow" /> {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-yellow"
              >
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
                <WhatsAppIcon className="size-4 text-yellow" /> WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={company.socials.googleBusiness}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-yellow"
              >
                <MapPin className="size-4 text-yellow" /> Find us on Google
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
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("arz:cookie-settings"))}
                className="transition-colors hover:text-yellow"
              >
                Cookie settings
              </button>
            </li>
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
