"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectScreenshot, ProjectType } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  projectTitle: string;
  screenshots: ProjectScreenshot[];
  type: ProjectType;
}

export function ProjectGallery({ projectTitle, screenshots, type }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const galleryTitleId = useId();
  const prefersReducedMotion = useReducedMotion();
  const hasMultipleScreenshots = screenshots.length > 1;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && hasMultipleScreenshots) {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasMultipleScreenshots) {
        event.preventDefault();
        showNext();
      }

      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleScreenshots, isLightboxOpen, showNext, showPrevious]);

  if (screenshots.length === 0) return null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const activeScreenshot = screenshots[activeIndex];
  const counter = `${String(activeIndex + 1).padStart(2, "0")} / ${String(screenshots.length).padStart(2, "0")}`;

  return (
    <section className="mt-8 border-t border-white/[0.08] pt-7" aria-labelledby={galleryTitleId}>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Images className="size-4 text-fuchsia-300" />
            <h4 id={galleryTitleId}>Project gallery</h4>
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Select any screenshot to inspect it fullscreen.
          </p>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground/70">
          {screenshots.length} {screenshots.length === 1 ? "image" : "images"}
        </span>
      </div>

      <div
        className={cn(
          type === "mobile"
            ? "grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            : "grid grid-cols-1 gap-5 md:grid-cols-2",
        )}
      >
        {screenshots.map((screenshot, index) => (
          <motion.button
            key={screenshot.src}
            type="button"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.18),
            }}
            onClick={() => openLightbox(index)}
            aria-label={`Open ${screenshot.label ?? `screenshot ${index + 1}`} fullscreen`}
            className={cn(
              "group/gallery relative mx-auto w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-black/25 text-left shadow-[0_18px_45px_-30px_rgba(0,0,0,.9)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/30 hover:shadow-[0_22px_55px_-30px_rgba(217,70,239,.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 motion-reduce:transform-none motion-reduce:transition-none",
              type === "mobile" && "max-w-[17rem]",
              type === "desktop" && index === 0 && "md:col-span-2",
            )}
          >
            <div className={cn("relative overflow-hidden", type === "mobile" ? "p-2.5" : "p-2")}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                loading="lazy"
                sizes={
                  type === "mobile"
                    ? "(min-width: 1280px) 20vw, (min-width: 768px) 30vw, (min-width: 420px) 45vw, 90vw"
                    : index === 0
                      ? "(min-width: 1024px) 70vw, 94vw"
                      : "(min-width: 768px) 45vw, 94vw"
                }
                className="h-auto w-full rounded-xl object-contain"
              />
              <span className="absolute right-4 top-4 flex size-9 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/gallery:translate-y-0 group-hover/gallery:opacity-100 group-focus-visible/gallery:translate-y-0 group-focus-visible/gallery:opacity-100 motion-reduce:transition-none">
                <Expand className="size-4" />
              </span>
            </div>
            {screenshot.label && (
              <span className="block border-t border-white/[0.07] px-4 py-3 text-xs font-medium text-white/60">
                {screenshot.label}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent
          showCloseButton={false}
          className="z-[100] h-[100dvh] max-h-none w-screen max-w-none translate-x-[-50%] translate-y-[-50%] gap-0 overflow-hidden rounded-none border-0 bg-black/95 p-0 shadow-none sm:max-w-none"
        >
          <DialogTitle className="sr-only">{projectTitle} screenshot viewer</DialogTitle>
          <DialogDescription className="sr-only">
            Fullscreen project screenshot. Use the previous and next buttons or the left and right arrow keys to navigate.
          </DialogDescription>

          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsLightboxOpen(false)}
          />

          <div className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pb-20 pt-16 sm:px-16">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={activeScreenshot.src}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="pointer-events-auto flex max-h-full max-w-full flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  width={activeScreenshot.width}
                  height={activeScreenshot.height}
                  sizes="100vw"
                  className="h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-[calc(100vw-2rem)] rounded-xl object-contain shadow-2xl shadow-black sm:max-w-[calc(100vw-8rem)]"
                  priority
                />
                {activeScreenshot.label && (
                  <figcaption className="mt-3 text-center text-xs font-medium text-white/60">
                    {activeScreenshot.label}
                  </figcaption>
                )}
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 sm:right-6 sm:top-6"
            aria-label="Close screenshot viewer"
          >
            <X className="size-5" />
          </button>

          {hasMultipleScreenshots && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute bottom-4 left-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute bottom-4 right-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold tabular-nums tracking-wider text-white/75 backdrop-blur-md">
            {counter}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
