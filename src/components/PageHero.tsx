import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="border-b border-border bg-blue-tint py-14 lg:py-20">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-muted-foreground">
          <Link to="/" className="hover:text-bright">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{breadcrumb ?? title}</span>
        </nav>
        {eyebrow ? <span className="eyebrow mt-6 block">{eyebrow}</span> : null}
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
