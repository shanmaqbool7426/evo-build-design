import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Before renovation",
  afterAlt = "After renovation",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={wrap}
      className="relative aspect-16/10 w-full touch-none overflow-hidden rounded-xl border border-border select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) move(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        width={1400}
        height={1000}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          width={1400}
          height={1000}
          className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
          style={{ width: wrap.current ? wrap.current.offsetWidth : "100%" }}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-sm bg-navy px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-white uppercase">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-sm bg-yellow px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-navy uppercase">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after comparison"
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
      <span
        className="pointer-events-none absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lift"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}
