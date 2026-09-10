import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";

// Icon map — one SVG per service number
function ServiceIcon({ number }: { number: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": (
      // House Renovations
      <path
        d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    "02": (
      // Extensions
      <>
        <path d="M3 21h18" strokeLinecap="round" />
        <path d="M5 21V10l5-4h6l5 4v11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 21v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10h4v4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    "03": (
      // Loft Conversions
      <>
        <path
          d="M3 21h18M12 3 2 12h3v9h14v-9h3L12 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v4" strokeLinecap="round" />
      </>
    ),
    "04": (
      // Kitchen
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M7 5V3M17 5V3M3 10h18" strokeLinecap="round" />
        <circle cx="8" cy="15" r="1.5" />
        <path d="M13 13h5v4h-5z" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    "05": (
      // Bathroom
      <>
        <path
          d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" strokeLinecap="round" />
        <path d="M4 12H2M22 12h-2" strokeLinecap="round" />
      </>
    ),
    "06": (
      // Plumbing
      <>
        <path
          d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"
          strokeLinecap="round"
        />
      </>
    ),
    "07": (
      // Electrical
      <>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    "08": (
      // Other services
      <>
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {icons[number] ?? icons["01"]}
    </svg>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      aria-label={`Learn more about ${service.title}`}
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} by ARZ Construction in Croydon`}
          loading="lazy"
          width={800}
          height={450}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark gradient overlay so number badge is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

        {/* Number badge — bottom-left on image */}
        <span className="absolute bottom-3 left-4 font-display text-3xl font-extrabold leading-none text-white/30 select-none">
          {service.number}
        </span>

        {/* Icon pill — top-right */}
        <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-yellow text-navy shadow-sm">
          <ServiceIcon number={service.number} />
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-navy group-hover:text-bright transition-colors duration-200">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>

        {/* Arrow CTA */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-bright uppercase transition-colors group-hover:text-navy">
          Learn More
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      {/* Bottom accent bar — slides in on hover */}
      <span
        className="block h-0.5 w-full origin-left scale-x-0 bg-yellow transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
