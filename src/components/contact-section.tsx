import { ArrowUpRight, Phone } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-6 rounded-lg border border-border bg-card p-6 backdrop-blur-md sm:p-9 lg:col-span-12"
      aria-labelledby="contact-title"
    >
      <p className="mb-4 font-mono text-[10px] uppercase text-primary">Next project</p>
      <h2 id="contact-title" className="max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-4xl">
        Looking for an engineer who understands both architecture and product?
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        I&apos;m open to remote roles and conversations about serious products, distributed systems,
        and teams that care about craft.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          {SITE.email} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          LinkedIn <LinkedinIcon size={16} aria-hidden="true" />
        </a>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          {SITE.phone} <Phone size={16} aria-hidden="true" />
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          GitHub <GithubIcon size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
