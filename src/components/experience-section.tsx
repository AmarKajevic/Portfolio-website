import { education, experience } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-6 lg:col-span-12" aria-labelledby="experience-title">
      <p className="mb-2 font-mono text-[10px] uppercase text-primary">Track record</p>
      <h2 id="experience-title" className="font-display text-3xl font-semibold">
        Experience
      </h2>

      <div className="mt-6 space-y-4">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="rounded-lg border border-border bg-card p-6 backdrop-blur-md sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-sm text-secondary-foreground">{job.company}</p>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">{job.period}</span>
            </div>

            <ul className="mt-4 space-y-2">
              {job.summary.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>

            {job.highlight ? (
              <div className="mt-5 border-t border-border pt-4">
                <strong className="font-display text-lg text-foreground">{job.highlight.value}</strong>
                <span className="ml-2 text-xs text-muted-foreground">{job.highlight.label}</span>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] text-muted-foreground">
        {education.school} — {education.note}
      </p>
    </section>
  );
}
