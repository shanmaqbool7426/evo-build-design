import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-white shadow-card">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} in ${project.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-x-0 bottom-5 mx-auto w-fit translate-y-3 rounded-md bg-yellow px-4 py-2 text-xs font-bold tracking-wide text-navy uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project
        </span>
        <span className="absolute top-4 left-4 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-navy uppercase">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
      </div>
    </article>
  );
}
