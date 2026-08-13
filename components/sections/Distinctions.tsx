"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { distinctionsSection } from "@/data/distinctions";
import { useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Distinctions() {
  const reduced = useReducedMotion();
  const listRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.1,
  });

  return (
    <section id="awards" className="bg-paper py-24 md:py-40">
      <Container>
        <div ref={listRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Distinctions" title={distinctionsSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            {distinctionsSection.intro}
          </p>

          <ol className="mt-16 border-t border-line md:mt-20">
            {distinctionsSection.items.map((d) => (
              <li key={d.id} data-reveal className="border-b border-line">
                <div
                  className={cn(
                    "grid gap-3 px-2 py-8 transition-all duration-300 md:grid-cols-[110px_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-4 md:py-10",
                    !reduced &&
                      "group/row hover:bg-mist/60 hover:pl-6 md:hover:pl-8",
                  )}
                >
                  <span className="font-mono text-sm tracking-wide text-muted">
                    {d.year}
                  </span>

                  <h3
                    className={cn(
                      "font-display text-2xl font-bold tracking-tight text-ink transition-transform duration-300 md:text-4xl",
                      !reduced && "group-hover/row:translate-x-1",
                    )}
                  >
                    {d.event}
                  </h3>

                  <span
                    className={cn(
                      "w-fit rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-inksoft transition-all duration-300",
                      !reduced &&
                        "group-hover/row:border-accent group-hover/row:bg-accent group-hover/row:text-white",
                    )}
                  >
                    {d.result}
                  </span>

                  <span
                    className={cn(
                      "hidden size-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 md:flex",
                      !reduced &&
                        "opacity-0 group-hover/row:opacity-100 group-hover/row:border-ink group-hover/row:text-ink",
                    )}
                    aria-hidden
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                {/* Contexte / anecdote — visible en mobile, révélé au hover en desktop */}
                <p
                  className={cn(
                    "-mt-3 px-2 pb-8 text-sm leading-relaxed text-inksoft md:px-4",
                    !reduced &&
                      "md:mt-0 md:max-h-0 md:overflow-hidden md:px-10 md:opacity-0 md:transition-all md:duration-500 md:group-hover/row:max-h-32 md:group-hover/row:opacity-100",
                  )}
                >
                  {d.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
