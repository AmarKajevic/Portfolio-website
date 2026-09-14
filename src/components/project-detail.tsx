import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { BrowserFrame } from "@/components/browser-frame";
import { GithubIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { ProjectVisual } from "@/components/project-visual";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { SiteHeader } from "@/components/site-header";
import { PROJECT_COVERS } from "@/lib/project-covers";
import type { Project } from "@/lib/projects";
import { vendoraCover, vendoraGallery } from "@/lib/vendora-gallery";

export function ProjectDetail({ project, others }: { project: Project; others: Project[] }) {
  const isVendora = project.slug === "vendora";
  const gallery = isVendora ? vendoraGallery : null;

  return (
    <PageShell className="max-w-5xl pb-20">
      <SiteHeader sectionsBasePath="/" />

      <main className="pt-12">
        <p className="font-mono text-[10px] uppercase text-primary">
          {project.index} / {project.type} · {project.year}
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold leading-[0.92] sm:text-7xl">{project.title}</h1>
        <p className="mt-5 max-w-[52ch] font-display text-lg text-secondary-foreground sm:text-xl">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Live demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Source code <GithubIcon size={16} aria-hidden="true" />
          </a>
        </div>

        {isVendora ? (
          <BrowserFrame url="vendora.app" className="mt-10">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
              <Image
                src={vendoraCover}
                alt="Vendora buyer storefront home page"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </BrowserFrame>
        ) : (
          <ProjectVisual
            project={project}
            cover={PROJECT_COVERS[project.slug]}
            priority
            className="mt-10"
          />
        )}

        <section className="mt-12" aria-labelledby="overview">
          <h2 id="overview" className="font-display text-2xl font-semibold">
            Overview
          </h2>
          <div className="mt-4 space-y-4">
            {project.overview.map((paragraph) => (
              <p key={paragraph} className="max-w-[72ch] leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="features">
          <h2 id="features" className="font-display text-2xl font-semibold">
            Key features
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-border bg-card p-5 backdrop-blur-md">
                <h3 className="font-display text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {gallery ? (
          <section className="mt-12" aria-labelledby="product-tour">
            <h2 id="product-tour" className="font-display text-2xl font-semibold">
              Product tour
            </h2>
            <p className="mt-2 max-w-[72ch] leading-relaxed text-muted-foreground">
              Real screens from all three portals — open any image full-size for a closer look.
            </p>
            <ScreenshotGallery groups={gallery} />
          </section>
        ) : null}

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-labelledby="architecture">
          <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md">
            <h2 id="architecture" className="font-display text-2xl font-semibold">
              Architecture
            </h2>
            <ul className="mt-4 space-y-3">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-md">
            <h2 className="font-display text-2xl font-semibold">Technologies</h2>
            <div className="mt-4 space-y-5">
              {project.stackGroups.map((group) => (
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

        {others.length > 0 ? (
          <section className="mt-12 border-t border-border pt-8" aria-labelledby="other-projects">
            <h2 id="other-projects" className="font-mono text-[10px] uppercase text-primary">
              Other projects
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group rounded-lg border border-border bg-card p-5 backdrop-blur-md transition-colors hover:border-primary/40"
                >
                  <span className="font-mono text-[10px] uppercase text-primary">{item.type}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                    Details <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={13} aria-hidden="true" /> All projects
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
