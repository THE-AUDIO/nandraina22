"use client";

import {
  BrainCircuit,
  Container,
  Layers,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { Container as SectionContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { strengthsSection, type Strength } from "@/data/strengths";
import { useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Container,
  BrainCircuit,
  MousePointerClick,
};

const TONES: Record<string, string> = {
  indigo: "from-indigo-200/70",
  emerald: "from-emerald-200/70",
  amber: "from-amber-200/70",
  rose: "from-rose-200/70",
};

function StrengthCard({ item, index, reduced }: { item: Strength; index: number; reduced: boolean }) {
  const Icon = ICONS[item.icon] ?? Layers;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-ink/20 hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.28)]">
      {/* Visuel */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            TONES[item.tone] ?? "from-mist",
            "to-mist",
          )}
          aria-hidden
        />
        <div className="absolute -bottom-12 -right-8 size-40 rounded-full bg-accent/[0.05]" aria-hidden />

        <Icon
          className={cn(
            "absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-accent/85 transition-transform duration-500 md:size-20",
            !reduced && "group-hover:-translate-y-[58%] group-hover:scale-110 group-hover:rotate-[-4deg]",
          )}
          strokeWidth={1.1}
          aria-hidden
        />

        <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-widest text-ink/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
        <h3
          className={cn(
            "font-display text-2xl font-bold tracking-tight text-ink transition-transform duration-300",
            !reduced && "group-hover:translate-x-1",
          )}
        >
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-inksoft">{item.description}</p>
      </div>

      {/* Ligne accent au hover */}
      <span
        aria-hidden
        className={cn(
          "absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500",
          !reduced && "group-hover:w-full",
        )}
      />
    </article>
  );
}

export function Strengths() {
  const reduced = useReducedMotion();
  const gridRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.08,
  });

  return (
    <section id="strengths" className="bg-surface py-24 md:py-40">
      <SectionContainer>
        <div ref={gridRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Expertise" title={strengthsSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            {strengthsSection.intro}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            {strengthsSection.items.map((item, i) => (
              <div key={item.id} data-reveal>
                <StrengthCard item={item} index={i} reduced={reduced} />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
