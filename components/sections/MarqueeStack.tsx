"use client";

import { useMemo } from "react";
import { marqueeItems, type StackCategory } from "@/data/stack";
import { projects } from "@/data/projects";
import { useMarquee } from "@/lib/animations";
import { cn } from "@/lib/utils";

const CATEGORY_LOOKUP: Record<string, StackCategory> = {
  Angular: "Frontend",
  Spring: "Backend",
  FastAPI: "Backend",
  Python: "Data & IA",
  Java: "Backend",
  TypeScript: "Frontend",
  Docker: "DevOps & CI/CD",
  Kubernetes: "DevOps & CI/CD",
  Helm: "DevOps & CI/CD",
  "GitHub Actions": "DevOps & CI/CD",
  "CI/CD": "DevOps & CI/CD",
  PostgreSQL: "Bases de données",
  MySQL: "Bases de données",
  "scikit-learn": "Data & IA",
  Matplotlib: "Data & IA",
  Ansible: "DevOps & CI/CD",
};

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden ?? undefined} className="flex shrink-0 items-center">
      {marqueeItems.map((tech) => (
        <MarqueeItem key={tech} tech={tech} />
      ))}
    </div>
  );
}

function MarqueeItem({ tech }: { tech: string }) {
  const count = useMemo(
    () => projects.filter((p) => p.stack.includes(tech)).length,
    [tech],
  );

  return (
    <span className="group/item relative shrink-0">
      <span
        className={cn(
          "flex items-center gap-8 px-4 font-display text-3xl font-bold uppercase tracking-tight text-inksoft transition-[color,opacity,transform] duration-300 hover:scale-[1.03] hover:text-accent md:text-5xl lg:text-6xl lg:gap-10",
          count === 0 ? "opacity-45" : "opacity-80",
        )}
      >
        {tech}
        <span className="mb-4 inline-block size-2 rotate-45 bg-accent/25" aria-hidden />
      </span>

      {/* Tooltip — nb de projets (brief §5.3) */}
      <span
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-inksoft opacity-0 shadow-sm transition-opacity duration-200 group-hover/item:opacity-100"
        aria-hidden
      >
        {CATEGORY_LOOKUP[tech] ?? ""}
        {" · "}
        {count > 0 ? `${count} projet${count > 1 ? "s" : ""}` : "En veille"}
      </span>
    </span>
  );
}

export function MarqueeStack() {
  const { ref, pause, play, reduced } = useMarquee<HTMLDivElement>({
    speed: 90,
  });

  return (
    <section
      id="marquee"
      aria-label="Stack technique"
      className="border-y border-line bg-surface"
    >
      {/* Ligne méta éditoriale */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3 md:px-10 lg:px-16">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Stack technique
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {marqueeItems.length} technologies
        </span>
      </div>

      {/* Bandeau défilant */}
      <div
        className="overflow-hidden py-6 md:py-9"
        onMouseEnter={reduced ? undefined : pause}
        onMouseLeave={reduced ? undefined : play}
      >
        <div ref={ref} className="flex w-max will-change-transform">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
