import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonAnchor, ButtonLink } from "./Button";
import { company, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-white transition-all duration-300",
        scrolled && "shadow-card",
      )}
    >
      <div className={cn("container-x flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-[13px] font-semibold text-navy/80 transition-colors hover:bg-blue-tint hover:text-navy data-[status=active]:text-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            aria-label={`Call ${company.name}`}
            className="flex size-10 items-center justify-center rounded-md border border-border text-navy transition-colors hover:border-navy hover:bg-blue-tint"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Message us on WhatsApp"
            className="flex size-10 items-center justify-center rounded-md border border-border text-navy transition-colors hover:border-navy hover:bg-blue-tint"
          >
            <MessageCircle className="size-4" />
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

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-white xl:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b border-border/70 py-3 text-sm font-semibold text-navy last:border-0 data-[status=active]:text-bright"
              >
                {link.label}
              </Link>
            ))}
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
  );
}
