"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

import { ProjectCard } from "@/components/portfolio/project-card";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type ActiveFilter = "all" | ProjectCategory;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative scroll-mt-16 overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="projects-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(168,85,247,.12),transparent_30%),linear-gradient(to_bottom,transparent,rgba(20,12,29,.55),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(92%,72rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-300/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-fuchsia-300">
            <span className="h-px w-7 bg-fuchsia-300/60" />
            Portfolio
            <span className="h-px w-7 bg-fuchsia-300/60" />
          </span>
          <h2
            id="projects-title"
            className="mt-5 font-display text-4xl font-bold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
          >
            Featured Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A selection of web, mobile, AI and data-driven projects I&apos;ve
            designed and developed.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.12 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <div
            className="flex max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/20 p-1.5 shadow-inner shadow-black/20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative shrink-0 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 sm:px-5 sm:text-sm",
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="absolute inset-0 rounded-xl border border-fuchsia-300/20 bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 shadow-[0_8px_25px_-12px_rgba(217,70,239,.9)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 min-h-[26rem] sm:mt-12">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeFilter}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-live="polite"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.48,
                    delay: prefersReducedMotion ? 0 : Math.min(index * 0.055, 0.22),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: prefersReducedMotion ? 0 : 0.45 }}
          className="mt-10 text-center text-xs text-muted-foreground/60"
        >
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </motion.p>
      </div>
    </section>
  );
}
