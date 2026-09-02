import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="LOPO Construction Ltd — home">
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-md ${
          light ? "bg-yellow" : "bg-navy"
        }`}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            d="M3 21V10l6-4v15M9 21V9l7-5v17M16 21V11l5 3v7"
            fill="none"
            stroke={light ? "#123B7A" : "#F5C400"}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          LOPO
        </span>
        <span
          className={`block text-[10px] font-semibold tracking-[0.18em] uppercase ${
            light ? "text-blue-soft" : "text-muted-foreground"
          }`}
        >
          Construction Ltd
        </span>
      </span>
    </Link>
  );
}
