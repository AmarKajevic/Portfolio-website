import { ArrowDownToLine, Mail } from "lucide-react";

import { SITE } from "@/lib/site";

const CURRENT_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Prisma",
  "Socket.IO",
  "AWS",
  "Docker",
];

export function HeroSection() {
  return (
    <>
      <section className="reveal pb-8 pt-14 sm:pt-16 lg:col-span-8" aria-labelledby="portfolio-title">
        <div className="mb-8 flex items-center gap-2">
          <span className="shadow-status size-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] uppercase text-primary">Open to remote roles</span>
        </div>
        <h1
          id="portfolio-title"
          className="font-display text-balance text-6xl font-bold leading-[0.88] sm:text-8xl lg:text-9xl"
        >
          Amar
          <br />
          <span className="text-primary">Kajević</span>
        </h1>
        <p className="mt-7 max-w-[36ch] font-display text-xl text-secondary-foreground sm:text-2xl">
          Full-Stack Software Engineer · TypeScript, React, Next.js, Node.js, NestJS.
        </p>
        <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
          I build production web platforms, scalable APIs, event-driven systems, and real-time
          applications. 5+ years of experience across frontend and backend engineering, with a focus
          on distributed architecture and systems that solve real business problems.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View projects <ArrowDownToLine size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Send a message <Mail size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <aside className="reveal reveal-delay-1 space-y-4 pb-8 lg:col-span-4 lg:pt-20">
        <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md">
          <p className="mb-5 font-mono text-[10px] uppercase text-muted-foreground">Engineering snapshot</p>
          <dl>
            <dd className="font-display text-6xl font-bold text-primary">5+</dd>
            <dt className="mt-1 text-sm text-muted-foreground">years of experience</dt>
          </dl>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md">
          <p className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Currently working with</p>
          <div className="flex flex-wrap gap-2">
            {CURRENT_STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
