const STRENGTHS = [
  {
    title: "Scalability",
    description: "Kafka decouples analytics, logging, and chat from the request path across 10 backend services.",
  },
  {
    title: "Performance",
    description: "Redis holds transient state — live presence, session counts, unseen messages — for fast reads.",
  },
  {
    title: "Architecture",
    description: "Splitting complex systems into clear services with REST and event-driven communication.",
  },
  {
    title: "Reliability",
    description: "Authentication, validation, observability, and predictable deployments via Docker and CI/CD.",
  },
];

const STACK = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Angular", "TailwindCSS"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "FastAPI", ".NET"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"] },
  { group: "Architecture & DevOps", items: ["Microservices", "Kafka", "RabbitMQ", "Docker", "AWS", "CI/CD"] },
];

export function ApproachSection() {
  return (
    <section id="approach" className="mt-6 grid gap-6 md:grid-cols-2 lg:col-span-12" aria-labelledby="approach-title">
      <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md sm:p-7">
        <p className="mb-5 font-mono text-[10px] uppercase text-primary">How I work</p>
        <h2 id="approach-title" className="sr-only">
          How I work
        </h2>
        <ul className="space-y-5">
          {STRENGTHS.map((item) => (
            <li key={item.title} className="grid grid-cols-[8.5rem_1fr] gap-3">
              <span className="font-display text-sm font-semibold">{item.title}</span>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md sm:p-7">
        <p className="mb-5 font-mono text-[10px] uppercase text-primary">Technologies</p>
        <div className="space-y-5">
          {STACK.map((group) => (
            <div key={group.group}>
              <p className="mb-2 font-mono text-[10px] uppercase text-muted-foreground">{group.group}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
