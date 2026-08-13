"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackSection } from "@/data/stack";
import { EASE, useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Stack() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(stackSection.groups[0].id);
  const sectionRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.06,
  });

  const active = stackSection.groups.find((g) => g.id === activeId)!;

  return (
    <section id="stack" className="bg-surface py-24 md:py-40">
      <Container>
        <div ref={sectionRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Stack" title={stackSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            {stackSection.subtitle}
          </p>
          <p
            data-reveal
            className="mt-10 font-mono text-xs uppercase tracking-widest text-muted"
          >
            {stackSection.question}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Liste typographique interactive */}
          <ol className="border-t border-line">
            {stackSection.groups.map((group, i) => {
              const isActive = group.id === activeId;
              return (
                <li key={group.id} data-reveal className="border-b border-line">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(group.id)}
                    onClick={() => setActiveId(group.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "group flex w-full items-baseline gap-5 py-6 text-left transition-all duration-300 md:gap-8 md:py-7",
                      isActive ? "pl-2 md:pl-4" : "pl-0",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors duration-300 md:text-sm",
                        isActive ? "text-accent" : "text-muted",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "font-display text-2xl font-semibold tracking-tight transition-all duration-300 md:text-4xl lg:text-[2.75rem]",
                        isActive
                          ? "translate-x-1 text-accent opacity-100 md:translate-x-2"
                          : "text-inksoft opacity-55",
                      )}
                    >
                      {group.label}
                    </span>

                    <ArrowRight
                      aria-hidden
                      className={cn(
                        "ml-auto size-5 shrink-0 transition-all duration-300",
                        isActive
                          ? "translate-x-0 text-accent opacity-100"
                          : "-translate-x-2 text-muted opacity-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Panneau de prévisualisation */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-line bg-paper p-8 md:min-h-[340px] md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {String(
                      stackSection.groups.findIndex((g) => g.id === active.id) + 1,
                    ).padStart(2, "0")}
                    {" / Compétence"}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {active.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-inksoft">
                    {active.note}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {active.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={reduced ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + i * 0.05,
                          ease: EASE,
                        }}
                        className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-inksoft"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted">
                Cliquez sur une compétence pour changer de vue
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
