import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonAnchor, ButtonLink } from "./Button";
import { company, navLinks, navServices } from "@/data/site";
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-navy text-blue-soft text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-white/10">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
        <span>London Design &amp; Build Specialists · Fixed-Price Guaranteed Quotes</span>
      </div>

      {/* HEADER */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-white transition-all duration-300",
          scrolled && "shadow-card",
        )}
      >
        <div className={cn("container-x flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
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
                      <div className="w-[540px] rounded-xl border border-border bg-white p-4 shadow-lift">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="col-span-2 px-3 py-1">
                            <p className="text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                              Our Services
                            </p>
                          </div>
                          {navServices.map((s) => (
                            <Link
                              key={s.slug}
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-tint"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
                              <span>
                                <span className="block text-sm font-bold text-navy transition-colors group-hover:text-bright">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                  {s.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 border-t border-border px-3 pt-3">
                          <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-bright uppercase hover:text-navy transition-colors"
                          >
                            <span>View All Services</span>
                            <span>→</span>
                          </Link>
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

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              aria-label={`Call ${company.name}`}
              className="hidden sm:flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-[13px] font-semibold text-navy transition-colors hover:border-navy hover:bg-blue-tint"
            >
              <Phone className="size-4" />
              {company.phoneDisplay}
            </a>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Message us on WhatsApp"
              className="hidden sm:flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-[12px] font-bold tracking-wide text-white uppercase transition-all hover:bg-[#20bd5a] hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
            <ButtonLink to="/contact" variant="accent" className="hidden sm:inline-flex">
              Get a Free Quote
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
              {navLinks.filter(l => l.label !== "Services").map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="border-b border-border/70 py-3 text-sm font-semibold text-navy last:border-0 data-[status=active]:text-bright"
                >
                  {link.label}
                </Link>
              ))}
              <p className="px-1 pt-3 text-[11px] font-bold tracking-[0.2em] text-bright uppercase">
                Services
              </p>
              {navServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="border-b border-border/70 py-2.5 pl-3 text-sm font-semibold text-navy/80 hover:text-bright"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                to="/services"
                className="py-2.5 text-sm font-bold text-bright"
              >
                All Services →
              </Link>
              <div className="mt-4 grid gap-2 pb-4">
                <ButtonLink to="/contact" variant="accent" className="w-full">
                  Get a Free Quote
                </ButtonLink>
                <ButtonAnchor href={company.phoneHref} variant="outline" className="w-full">
                  <Phone className="size-4" /> {company.phone}
                </ButtonAnchor>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
