import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/lib/projects";
import { PROJECT_COVERS } from "@/lib/project-covers";

export function ProjectCard({ project, revealDelay }: { project: Project; revealDelay: 2 | 3 | 4 }) {
  return (
    <article
      className={`reveal reveal-delay-${revealDelay} group rounded-lg border border-border bg-card p-4 backdrop-blur-md transition-colors hover:border-primary/40 sm:p-5`}
    >
      <ProjectVisual
        project={project}
        cover={PROJECT_COVERS[project.slug]}
        className="transition-transform duration-700 group-hover:scale-[1.015]"
      />

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase text-primary">
          {project.index} / {project.type}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
        <div>
          <strong className="font-display text-xl text-foreground">{project.highlight}</strong>
          <span className="ml-2 text-xs text-muted-foreground">{project.highlightLabel}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-[11px]">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 font-display text-[12px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Project details <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Live demo <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ) : null}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          Source code <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
