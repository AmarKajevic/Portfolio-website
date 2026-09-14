import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Amar Kajević`,
      description: project.tagline,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Amar Kajević`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const others = projects.filter((item) => item.slug !== project.slug);

  return <ProjectDetail project={project} others={others} />;
}
