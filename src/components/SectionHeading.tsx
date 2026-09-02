import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", light && "text-yellow")}>{eyebrow}</span>
      ) : null}
      <Tag
        className={cn(
          "mt-3 text-3xl leading-tight font-extrabold sm:text-4xl",
          light && "text-white",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-blue-soft" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
