import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghostLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide uppercase text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-royal shadow-card",
  accent: "bg-yellow text-navy hover:brightness-95 shadow-card",
  outline: "border border-navy/25 bg-white text-navy hover:border-navy hover:bg-blue-tint",
  ghostLight: "border border-white/50 bg-white/5 text-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5",
  lg: "h-13 px-7 text-[13px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}
