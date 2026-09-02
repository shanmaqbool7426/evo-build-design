import { Star } from "lucide-react";

export function ReviewCard({
  review,
}: {
  review: { name: string; location: string; rating: number; text: string };
}) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-card">
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-yellow text-yellow" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <span className="block text-sm font-bold text-navy">{review.name}</span>
        <span className="block text-xs text-muted-foreground">{review.location}</span>
      </figcaption>
    </figure>
  );
}
