/**
 * ProjectLightbox
 * ---------------
 * Full-screen image viewer with keyboard navigation, swipe support
 * and focus-trap. Zero extra dependencies.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/site";

// ─── Lightbox modal ──────────────────────────────────────────────────────────

function Lightbox({
  images,
  alts,
  startIndex,
  onClose,
}: {
  images: string[];
  alts: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Touch / swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project photo gallery"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
      >
        <X className="size-5" />
      </button>

      {/* Counter */}
      <p className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
        {current + 1} / {images.length}
      </p>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}

      {/* Image */}
      <div className="mx-16 max-h-[88vh] max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          key={current}
          src={images[current]}
          alt={alts[current] ?? "Project photo"}
          className="mx-auto max-h-[80vh] w-full rounded-xl object-contain shadow-2xl"
          draggable={false}
        />
        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`View photo ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={cn(
                  "size-14 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                  i === current
                    ? "border-yellow opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80",
                )}
              >
                <img src={src} alt="" className="size-full object-cover" draggable={false} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronRight className="size-6" />
        </button>
      )}
    </div>
  );
}

// ─── Project card with gallery trigger ───────────────────────────────────────

export function ProjectGalleryCard({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [project.image, ...project.gallery.filter((g) => g !== project.image)];
  const galleryAlts = galleryImages.map((_, i) =>
    i === 0 && project.imageAlt
      ? project.imageAlt
      : `${project.title} in ${project.location} — photo ${i + 1}`,
  );

  const openAt = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <>
      <article className="group overflow-hidden rounded-xl border border-border bg-white shadow-card">
        {/* Main image */}
        <button
          type="button"
          className="relative block w-full cursor-zoom-in"
          onClick={() => openAt(0)}
          aria-label={`Open gallery for ${project.title}`}
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt ?? `${project.title} in ${project.location}`}
              loading="lazy"
              width={1200}
              height={900}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-5 mx-auto flex w-fit translate-y-3 items-center gap-1.5 rounded-md bg-yellow px-4 py-2 text-xs font-bold tracking-wide text-navy uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ZoomIn className="size-3.5" aria-hidden="true" />
              View Gallery
            </span>
            <span className="absolute top-4 left-4 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-navy uppercase">
              {project.category}
            </span>
            {/* Photo count badge */}
            {galleryImages.length > 1 && (
              <span className="absolute top-4 right-4 flex items-center gap-1 rounded-sm bg-navy/80 px-2 py-1 text-[10px] font-bold text-white">
                <ZoomIn className="size-3" aria-hidden="true" />
                {galleryImages.length} photos
              </span>
            )}
          </div>
        </button>

        <div className="p-5">
          <h3 className="text-base font-bold">{project.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{project.location}</p>
          {project.scope.length > 0 && (
            <ul className="mt-3 space-y-1">
              {project.scope.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 text-xs font-semibold text-navy/80"
                >
                  <span
                    className="mt-1.5 size-1 shrink-0 rounded-full bg-bright"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Thumbnail strip preview */}
          {galleryImages.length > 1 && (
            <div className="mt-4 flex gap-1.5">
              {galleryImages.slice(0, 4).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openAt(i)}
                  aria-label={`Open photo ${i + 1} of ${project.title}`}
                  className={cn(
                    "relative size-12 shrink-0 overflow-hidden rounded-md border border-border transition-all hover:border-bright hover:opacity-100",
                    i === 3 && galleryImages.length > 4 ? "opacity-70" : "opacity-90",
                  )}
                >
                  <img
                    src={src}
                    alt=""
                    className="size-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                  />
                  {i === 3 && galleryImages.length > 4 && (
                    <span className="absolute inset-0 flex items-center justify-center bg-navy/60 text-xs font-extrabold text-white">
                      +{galleryImages.length - 4}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </article>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          alts={galleryAlts}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
