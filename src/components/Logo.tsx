import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  // Brand colours (matching the site's CSS variables)
  const gold = "#F5C400";
  const navy = "#123B7A";
  const navyDeep = "#0D2854";

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3"
      aria-label="ARZ Construction Ltd — home"
    >
      {/* ─── Badge / Mark ─────────────────────────────── */}
      <span className="arz-badge relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ filter: "drop-shadow(0 2px 8px rgba(245,196,0,0.35))" }}
        >
          {/* Outer hexagonal shield */}
          <path
            d="M22 2L38 11V33L22 42L6 33V11L22 2Z"
            fill={light ? gold : navy}
            stroke={light ? navyDeep : gold}
            strokeWidth="1.5"
          />

          {/* Inner glow band — top diagonal beam (construction scaffold) */}
          <path
            d="M10 31L22 10L34 31"
            stroke={light ? navyDeep : gold}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Cross-beam (horizontal tie bar) */}
          <path
            d="M14 24H30"
            stroke={light ? navyDeep : gold}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Subtle second inner layer for depth */}
          <path
            d="M22 2L38 11V33L22 42L6 33V11L22 2Z"
            fill="none"
            stroke={light ? "rgba(13,40,84,0.18)" : "rgba(255,255,255,0.08)"}
            strokeWidth="3"
          />

          {/* Golden crown cap accent at apex */}
          <circle
            cx="22"
            cy="10"
            r="2.4"
            fill={light ? navyDeep : gold}
          />

          {/* Shimmer streak overlay */}
          <path
            d="M10 11 L16 17"
            stroke={light ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* ─── Wordmark ──────────────────────────────────── */}
      <span className="flex flex-col leading-none">
        {/* ARZ – bold brand name */}
        <span
          className="font-display font-black tracking-[-0.03em] transition-colors duration-200"
          style={{
            fontSize: "1.35rem",
            letterSpacing: "-0.025em",
            color: light ? "#FFFFFF" : navy,
            lineHeight: 1,
          }}
        >
          {/* A – gold accent on first letter */}
          <span style={{ color: gold }}>A</span>
          <span>RZ</span>
        </span>

        {/* Divider bar */}
        <span
          className="my-[3px] block rounded-full"
          style={{
            height: "1.5px",
            width: "100%",
            background: `linear-gradient(90deg, ${gold} 0%, transparent 100%)`,
          }}
        />

        {/* Construction Ltd sub-label */}
        <span
          className="font-sans font-bold uppercase tracking-[0.22em]"
          style={{
            fontSize: "0.48rem",
            color: light
              ? "rgba(210,225,255,0.80)"
              : "rgba(18,59,122,0.55)",
            lineHeight: 1,
            letterSpacing: "0.22em",
          }}
        >
          Construction Ltd
        </span>
      </span>
    </Link>
  );
}
