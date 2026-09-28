"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Smartphone,
} from "lucide-react";

import { ProjectGallery } from "@/components/portfolio/project-gallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryStyles: Record<
  ProjectCategory,
  { gradient: string; accent: string; icon: typeof Code2 }
> = {
  web: {
    gradient: "from-fuchsia-500/25 via-violet-500/10 to-transparent",
    accent: "text-fuchsia-300",
    icon: Code2,
  },
  mobile: {
    gradient: "from-violet-500/25 via-purple-500/10 to-transparent",
    accent: "text-violet-300",
    icon: Smartphone,
  },
  ai: {
    gradient: "from-pink-500/20 via-fuchsia-500/10 to-transparent",
    accent: "text-pink-300",
    icon: Bot,
  },
  data: {
    gradient: "from-indigo-500/25 via-violet-500/10 to-transparent",
    accent: "text-indigo-300",
    icon: BarChart3,
  },
};

function ProjectPreview({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const visual = categoryStyles[project.category];
  const Icon = visual.icon;

  return (
    <div className={cn("relative isolate overflow-hidden bg-[#0b0911]", className)}>
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={cn(
            "object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:transform-none",
            project.type === "mobile" ? "p-5" : "p-2.5",
          )}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient}`} aria-hidden="true">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="absolute -right-12 -top-14 size-48 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute -bottom-20 left-8 size-52 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="absolute inset-x-7 bottom-7 top-7 rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30 backdrop-blur-sm transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:transform-none">
            <div className="flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Project preview
                </span>
                <span className="size-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(240,171,252,.8)]" />
              </div>
              <div>
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Icon className={cn("size-5", visual.accent)} />
                </div>
                <p className="max-w-[85%] font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </p>
                <p className="mt-1.5 text-xs text-white/45">{project.categoryLabel}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09070e]/80 via-transparent to-transparent" />
    </div>
  );
}

function ProjectActions({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.githubUrl && !project.liveUrl) {
    return <p className="text-xs text-muted-foreground/70">Links will be added when available.</p>;
  }

  return (
    <div className={cn("flex flex-wrap items-center", compact ? "gap-2" : "gap-3")}>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/action inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] font-medium text-foreground transition-all hover:border-fuchsia-400/40 hover:bg-fuchsia-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70",
            compact ? "h-9 px-3.5 text-xs" : "h-10 px-4 text-sm",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <Github className="size-4" />
          View Code
          <ArrowUpRight className="size-3.5 transition-transform group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5 motion-reduce:transition-none" />
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/action inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(217,70,239,.8)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            compact ? "h-9 px-3.5 text-xs" : "h-10 px-4 text-sm",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          Live Demo
          <ExternalLink className="size-3.5 transition-transform group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5 motion-reduce:transition-none" />
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shownTechnologies = project.technologies.slice(0, 3);
  const hiddenTechnologyCount = project.technologies.length - shownTechnologies.length;

  return (
    <Dialog>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.025] shadow-[0_24px_80px_-48px_rgba(0,0,0,.95)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-fuchsia-400/30 hover:shadow-[0_28px_90px_-42px_rgba(192,38,211,.38)] focus-within:border-fuchsia-400/35 motion-reduce:transform-none motion-reduce:transition-none">
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative block aspect-[16/10] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fuchsia-400"
            aria-label={`Open details for ${project.title}`}
          >
            <ProjectPreview project={project} priority={index < 3} className="h-full w-full" />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-xs font-medium text-white/90 opacity-100 backdrop-blur-md transition-all duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100 motion-reduce:transition-none">
              Explore project
              <ArrowUpRight className="size-3.5" />
            </span>
          </button>
        </DialogTrigger>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
              {project.categoryLabel}
            </p>
            {project.featured && (
              <span className="shrink-0 rounded-full border border-violet-400/15 bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200">
                Featured
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-fuchsia-100 sm:text-[1.35rem]">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

          {shownTechnologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {shownTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] bg-black/20 px-2.5 py-1 text-[11px] font-medium text-white/55"
                >
                  {technology}
                </span>
              ))}
              {hiddenTechnologyCount > 0 && (
                <span className="rounded-full border border-fuchsia-400/15 bg-fuchsia-400/[0.07] px-2.5 py-1 text-[11px] font-medium text-fuchsia-200/75">
                  +{hiddenTechnologyCount}
                </span>
              )}
            </div>
          )}

          <div className="mt-auto border-t border-white/[0.07] pt-5">
            <ProjectActions project={project} compact />
          </div>
        </div>
      </article>

      <DialogContent className="max-h-[92vh] max-w-6xl gap-0 overflow-y-auto rounded-[1.75rem] border-white/10 bg-[#0c0a11]/95 p-0 shadow-2xl shadow-black/70 backdrop-blur-2xl sm:max-w-6xl">
        {!project.screenshots?.length && (
          <ProjectPreview project={project} className="aspect-[16/8] w-full border-b border-white/10" />
        )}
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              {project.categoryLabel}
            </p>
            <DialogTitle className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {project.technologies.length > 0 && (
            <div className="mt-7 border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Layers3 className="size-4 text-fuchsia-300" />
                Technology stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <ProjectGallery
              projectTitle={project.title}
              screenshots={project.screenshots}
              type={project.type}
            />
          )}

          {project.features && project.features.length > 0 && (
            <div className="mt-7 border-t border-white/[0.08] pt-6">
              <h4 className="text-sm font-semibold text-foreground">Key features</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                    <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-fuchsia-400/10 text-fuchsia-300">
                      <Check className="size-2.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <ProjectActions project={project} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
