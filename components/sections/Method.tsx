"use client";

import { useEffect, useRef } from "react";
import { Code2, Compass, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodSection } from "@/data/method";
import { gsap, useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Compass,
  PenTool,
  Code2,
  Rocket,
};

/**
 * Directions d'entrée (brief §9) :
 * 0 — illustration depuis la droite, contenu depuis la gauche
 * 1 — mouvement inversé
 * 2 — inversé de nouveau
 * 3 — les deux éléments se rapprochent (convergence)
 */
const DIRECTIONS = [
  { contentX: -64, visualX: 64 },
  { contentX: 64, visualX: -64 },
  { contentX: -64, visualX: 64 },
  { contentX: -40, visualX: 40 },
];

export function Method() {
  const reduced = useReducedMotion();
  const headerRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.08,
  });
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || reduced) return;

    const ctx = gsap.context(() => {
      list.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
        const index = Number(step.dataset.step);
        const cfg = DIRECTIONS[index];
        if (!cfg) return;

        const content = step.querySelector<HTMLElement>("[data-content]");
        const visual = step.querySelector<HTMLElement>("[data-visual]");

        const common = {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out" as const,
          scrollTrigger: { trigger: step, start: "top 78%" },
        };

        if (content) gsap.from(content, { ...common, x: cfg.contentX });
        if (visual) gsap.from(visual, { ...common, x: cfg.visualX });
      });
    }, list);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="method" className="bg-paper py-24 md:py-40">
      <Container>
        <div ref={headerRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Méthode" title={methodSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Quatre étapes éprouvées en stage, en freelance et en hackathon.
          </p>
        </div>

        <div ref={listRef} className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
          {methodSection.steps.map((step, i) => {
            const Icon = ICONS[step.icon] ?? Code2;
            const visualOnLeft = i % 2 === 1;

            return (
              <div
                key={step.id}
                data-step={i}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                {/* Contenu */}
                <div
                  data-content
                  className={cn(
                    "order-1",
                    visualOnLeft && "lg:order-2",
                  )}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    Étape {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-inksoft md:text-base">
                    {step.description}
                  </p>
                  <div className="mt-6 h-px w-16 bg-accent/30" aria-hidden />
                </div>

                {/* Illustration */}
                <div
                  data-visual
                  className={cn(
                    "order-2",
                    visualOnLeft && "lg:order-1",
                  )}
                >
                  <div
                    className={cn(
                      "relative ml-auto flex aspect-[4/3] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-mist lg:aspect-[5/4]",
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent" aria-hidden />
                    <div className="absolute -right-8 -top-8 size-36 rotate-12 rounded-2xl border border-accent/10" aria-hidden />
                    <div className="absolute -bottom-10 -left-6 size-28 -rotate-6 rounded-full bg-accent/[0.04]" aria-hidden />

                    <Icon
                      className="relative size-20 text-accent md:size-28"
                      strokeWidth={1.25}
                      aria-hidden
                    />

                    <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      Étape {step.number} / 04
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
