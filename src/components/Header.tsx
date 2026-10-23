import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonAnchor, ButtonLink } from "./Button";
import { company, navLinks, navServices, navSeoServices } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu + services dropdown on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-navy text-blue-soft text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-white/10">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
        <span>
          Croydon &amp; South London Specialists · Free, Itemised Quotations · One Project Manager
        </span>
      </div>

      {/* HEADER */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-white transition-all duration-300",
          scrolled && "shadow-card",
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          {/* DESKTOP NAV */}
          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-semibold text-navy/80 transition-colors hover:bg-blue-tint hover:text-navy data-[status=active]:text-bright"
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </Link>

                    {/* MEGA MENU */}
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                        servicesOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-1",
                      )}
                    >
                      <div className="w-[640px] rounded-xl border border-border bg-white p-5 shadow-lift">
                        <div className="grid grid-cols-2 gap-5">
                          {/* LEFT — All services */}
                          <div>
                            <p className="px-1 pb-2 text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                              All Services
                            </p>
                            <div className="space-y-0.5">
                              {navServices.map((s) => (
                                <Link
                                  key={s.slug}
                                  to="/services/$slug"
                                  params={{ slug: s.slug }}
                                  className="group flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors hover:bg-blue-tint"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border group-hover:bg-yellow transition-colors" />
                                  <span className="block text-sm font-semibold text-navy transition-colors group-hover:text-bright">
                                    {s.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* RIGHT — South London specialists */}
                          <div className="rounded-lg bg-blue-tint p-3">
                            <div className="flex items-center gap-1.5 px-1 pb-2">
                              <MapPin className="size-3 text-bright" aria-hidden="true" />
                              <p className="text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                                South London Specialists
                              </p>
                            </div>
                            <div className="space-y-0.5">
                              {navSeoServices.map((s) => (
                                <Link
                                  key={s.slug}
                                  to="/services/$slug"
                                  params={{ slug: s.slug }}
                                  className="group flex items-start gap-2.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-white"
                                >
                                  <span
                                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-yellow ring-2 ring-navy/10"
                                    aria-hidden="true"
                                  />
                                  <span>
                                    <span className="block text-sm font-bold text-navy transition-colors group-hover:text-bright">
                                      {s.title}
                                    </span>
                                    <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                                      Croydon &amp; South London
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer row */}
                        <div className="mt-3 flex items-center justify-between border-t border-border pt-3 px-1">
                          <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-bright uppercase hover:text-navy transition-colors"
                          >
                            View All Services →
                          </Link>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Check className="size-3 text-bright" aria-hidden="true" />
                            Free, no-obligation quotations
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="rounded-md px-3 py-2 text-[13px] font-semibold text-navy/80 transition-colors hover:bg-blue-tint hover:text-navy data-[status=active]:text-bright"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              aria-label={`Call ${company.name}`}
              className="hidden sm:flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-[13px] font-semibold text-navy transition-colors hover:border-navy hover:bg-blue-tint"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <ButtonLink to="/contact" variant="accent" className="hidden lg:inline-flex">
              Request a Free Quote
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-md border border-border text-navy xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open ? (
          <div id="mobile-nav" className="border-t border-border bg-white xl:hidden">
            <nav aria-label="Mobile" className="container-x flex flex-col py-3">
              {/* Main links (excluding Services) */}
              {navLinks
                .filter((l) => l.label !== "Services")
                .map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="flex items-center justify-between border-b border-border/70 py-3 text-sm font-semibold text-navy last:border-0 data-[status=active]:text-bright"
                  >
                    {link.label}
                  </Link>
                ))}

              {/* Services section */}
              <div className="border-b border-border/70 pb-3">
                <p className="px-0 pt-3 pb-1 text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                  All Services
                </p>
                {navServices.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block border-b border-border/40 py-2.5 pl-2 text-sm font-semibold text-navy/80 hover:text-bright last:border-0"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" className="block py-2.5 text-sm font-bold text-bright">
                  All Services →
                </Link>
              </div>

              {/* SEO landing pages */}
              <div className="border-b border-border/70 pb-3">
                <div className="flex items-center gap-1.5 pt-3 pb-1">
                  <MapPin className="size-3 text-bright" aria-hidden="true" />
                  <p className="text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                    South London Specialists
                  </p>
                </div>
                {navSeoServices.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-center gap-2 border-b border-border/40 py-2.5 pl-2 text-sm font-semibold text-navy/80 hover:text-bright last:border-0"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-yellow ring-2 ring-navy/10"
                      aria-hidden="true"
                    />
                    {s.title}
                  </Link>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-4 grid gap-2 pb-4">
                <ButtonLink to="/contact" variant="accent" className="w-full">
                  Request a Free Quote
                </ButtonLink>
                <ButtonAnchor
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="outline"
                  className="w-full border-[#0B7A6B] text-[#0B7A6B]"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp Us
                </ButtonAnchor>
                <ButtonAnchor href={company.phoneHref} variant="outline" className="w-full">
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phone}
                </ButtonAnchor>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
