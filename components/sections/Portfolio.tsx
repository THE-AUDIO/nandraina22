"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { gsap, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

const TONES: Record<string, string> = {
  indigo: "from-indigo-200/80",
  slate: "from-slate-300/70",
  amber: "from-amber-200/80",
  emerald: "from-emerald-200/70",
  rose: "from-rose-200/80",
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] w-full bg-mist lg:aspect-[16/10]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 1024px) 85vw, (max-width: 1280px) 56vw, 46vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-end justify-between overflow-hidden bg-gradient-to-br p-6 md:p-8 lg:aspect-[16/10]",
        TONES[project.placeholderTone],
        "to-mist",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-14 select-none font-display text-[11rem] font-bold leading-none tracking-tighter text-ink/[0.06]"
      >
        {project.name.slice(0, 1)}
      </span>

      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
          Capture à venir
        </p>
        <p className="mt-1 font-display text-xl font-bold text-ink/70">
          {project.name}
        </p>
      </div>
      <span className="relative hidden font-mono text-[10px] uppercase tracking-widest text-ink/40 sm:block">
        {project.year}
      </span>
    </div>
  );
}

function ProjectCard({ project, reduced }: { project: Project; reduced: boolean }) {
  return (
    <article
      data-project-card
      className="group w-[85vw] shrink-0 sm:w-[70vw] lg:w-[56vw] xl:w-[46vw] 2xl:max-w-[760px]"
    >
      {/* Visuel */}
      <div className="relative">
        <div
          className={cn(
            "w-full overflow-hidden rounded-2xl",
            !reduced &&
              "transition-transform duration-700 ease-out group-hover:scale-[1.05]",
          )}
        >
          <ProjectVisual project={project} />
        </div>

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span
              key={c}
              className="rounded-full bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink backdrop-blur-sm"
            >
              {c}
            </span>
          ))}
        </div>

        {project.href && (
          <a
            href={project.href}
            aria-label={`Voir le projet ${project.name}`}
            className="absolute bottom-4 right-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ArrowUpRight className="size-5" aria-hidden />
          </a>
        )}
      </div>

      {/* Méta */}
      <div className="mt-6 flex items-start justify-between gap-6 transition-transform duration-300 group-hover:-translate-y-0.5">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
            {project.role} · {project.year}
          </p>
        </div>
        {project.href && (
          <ArrowUpRight
            className="mt-1 size-5 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
        )}
      </div>

      <p className="mt-3 max-w-prose text-sm leading-relaxed text-inksoft">
        {project.description}
      </p>

      {/* Tags — plus visibles au hover (brief §6.2) */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted transition-all duration-300",
              !reduced &&
                "opacity-60 group-hover:opacity-100 group-hover:border-ink/30",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop : pin + translation horizontale pilotée par le scroll vertical (§24)
      mm.add("(min-width: 1024px)", () => {
        if (reduced) return;
        const getAmount = () =>
          Math.max(track.scrollWidth - window.innerWidth, 0);

        const tween = gsap.to(track, {
          x: () => -getAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getAmount()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      // Mobile + reduced-motion : cascade verticale (§20.3, §30)
      mm.add(
        "(max-width: 1023.98px), (prefers-reduced-motion: reduce)",
        () => {
          const cards = section.querySelectorAll("[data-project-card]");
          if (!cards.length) return;
          gsap.from(cards, {
            autoAlpha: 0,
            y: reduced ? 0 : 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={cn(
        "relative bg-paper",
        !reduced && "lg:flex lg:h-screen lg:flex-col lg:overflow-hidden",
      )}
    >
      <Container className={cn("pt-24 md:pt-32", !reduced && "lg:shrink-0 lg:pt-16")}>
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Work"
            title="Une sélection de projets"
          />
          <p className="hidden shrink-0 pb-2 font-mono text-[10px] uppercase tracking-widest text-muted lg:block">
            Scroll ↓ pour explorer
          </p>
        </div>
      </Container>

      <div
        className={cn(
          "mt-14 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:justify-center lg:overflow-hidden",
        )}
      >
        <div
          ref={trackRef}
          className="flex flex-col gap-16 px-5 pb-24 pt-2 md:px-10 md:pb-32 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:pb-0 lg:pt-0 lg:pr-[10vw] lg:w-max"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              reduced={reduced}
            />
          ))}

          {/* Carte de fin de galerie */}
          <div className="hidden w-[18vw] shrink-0 items-center justify-center lg:flex">
            <div className="flex flex-col items-center gap-4 text-center">
              <ArrowDown className="size-5 text-muted" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                La suite ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
