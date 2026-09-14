import { FileText, MessageCircle, ShoppingBag, type LucideIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import type { Project, ProjectAccent } from "@/lib/projects";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  vendora: ShoppingBag,
  chatty: MessageCircle,
  docai: FileText,
};

const ACCENT_GRADIENT: Record<ProjectAccent, string> = {
  violet: "from-violet-500/35 via-fuchsia-400/10 to-transparent",
  emerald: "from-emerald-500/35 via-teal-400/10 to-transparent",
  sky: "from-sky-500/35 via-cyan-400/10 to-transparent",
};

const ACCENT_ICON: Record<ProjectAccent, string> = {
  violet: "text-violet-300/25",
  emerald: "text-emerald-300/25",
  sky: "text-sky-300/25",
};

export function ProjectVisual({
  project,
  cover,
  priority,
  className,
}: {
  project: Pick<Project, "slug" | "index" | "title" | "accent">;
  cover?: StaticImageData;
  priority?: boolean;
  className?: string;
}) {
  if (cover) {
    return (
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary",
          className,
        )}
      >
        <Image
          src={cover}
          alt={`${project.title} interface screenshot`}
          fill
          priority={priority}
          placeholder="blur"
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <span className="absolute left-4 top-4 font-mono text-6xl font-bold text-white/30 sm:text-7xl">
          {project.index}
        </span>
      </div>
    );
  }

  const Icon = ICONS[project.slug] ?? ShoppingBag;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", ACCENT_GRADIENT[project.accent])} />
      <div className="bg-project-overlay absolute inset-0" />
      <Icon
        className={cn("absolute -bottom-6 -right-6 size-32 sm:size-40", ACCENT_ICON[project.accent])}
        strokeWidth={1}
        aria-hidden="true"
      />
      <span className="font-mono text-border absolute left-4 top-4 text-6xl font-bold opacity-30 sm:text-7xl">
        {project.index}
      </span>
    </div>
  );
}
