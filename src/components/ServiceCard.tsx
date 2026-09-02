import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bright hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-md bg-blue-tint text-navy transition-colors group-hover:bg-yellow">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="font-display text-2xl font-extrabold text-blue-soft">{service.number}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-bright uppercase">
        Learn More
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
