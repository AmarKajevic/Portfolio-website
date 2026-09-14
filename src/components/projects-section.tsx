import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { SITE } from "@/lib/site";

const REVEAL_DELAYS = [2, 3, 4] as const;

export function ProjectsSection() {
  return (
    <section id="work" className="pt-10 lg:col-span-12" aria-labelledby="work-title">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase text-primary">Proof through work</p>
          <h2 id="work-title" className="font-display text-3xl font-semibold">
            Selected projects
          </h2>
        </div>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-primary"
        >
          All projects on GitHub →
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} revealDelay={REVEAL_DELAYS[i % REVEAL_DELAYS.length]} />
        ))}
      </div>
    </section>
  );
}
