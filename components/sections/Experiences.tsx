"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experiences";
import { EASE, useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Experiences() {
  const reduced = useReducedMotion();
  const headerRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.08,
  });

  const [[index, direction], setState] = useState([0, 0]);
  const count = experiences.length;
  const current = experiences[index];

  const paginate = (dir: number) =>
    setState(([i]) => [(i + dir + count) % count, dir]);

  const goTo = (target: number) =>
    setState(([i]) => [target, target > i ? 1 : -1]);

  const dur = reduced ? 0 : 0.6;
  const delayBase = reduced ? 0 : 0.15;

  const fadeItem = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, delay, ease: EASE },
    },
  });

  return (
    <section id="experience" className="bg-surface py-24 md:py-40">
      <Container>
        <div ref={headerRef}>
          <div data-reveal>
            <SectionHeading
              eyebrow="Expériences"
              title="Ils m'ont fait confiance"
            />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Trois environnements de travail différents : le stage, le freelance
            et la compétition.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start lg:gap-14">
          {/* Carte du slider */}
          <div
            className="relative min-h-[380px] overflow-hidden rounded-2xl border border-line bg-paper p-8 md:min-h-[420px] md:p-12"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={reduced ? false : { opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: direction * -80 }}
                transition={{ duration: dur, ease: EASE }}
                className="flex h-full flex-col"
              >
                <motion.p
                  {...fadeItem(delayBase)}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted"
                >
                  {current.type} — {current.company.toUpperCase()}{" "}
                  <span className="text-muted/70">
                    ({current.period.start} – {current.period.end})
                  </span>
                </motion.p>

                <motion.p
                  {...fadeItem(delayBase + 0.06)}
                  className="mt-4 font-mono text-xs uppercase tracking-widest text-inksoft"
                >
                  {current.tags.join("  ·  ")}
                </motion.p>

                <motion.blockquote
                  {...fadeItem(delayBase + 0.12)}
                  className="mt-6 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:mt-8 md:text-[2rem]"
                >
                  «&nbsp;{current.quote}&nbsp;»
                </motion.blockquote>

                <motion.div
                  {...fadeItem(delayBase + 0.2)}
                  className="mt-auto pt-8"
                >
                  <span className="h-px w-16 bg-accent/30" aria-hidden />
                  <p className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                    {current.company}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                    {current.role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contrôles */}
          <aside className="flex flex-col gap-8">
            <nav aria-label="Choisir une expérience">
              <ol className="border-t border-line">
                {experiences.map((exp, i) => (
                  <li key={exp.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === index}
                      className={cn(
                        "group flex w-full items-center gap-3 py-4 text-left font-mono text-xs uppercase tracking-widest transition-colors duration-200",
                        i === index ? "text-accent" : "text-muted hover:text-inksoft",
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors duration-200",
                          i === index ? "bg-accent" : "bg-line",
                        )}
                        aria-hidden
                      />
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-muted">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Expérience précédente"
                  className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-200 hover:border-ink hover:bg-white"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Expérience suivante"
                  className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-200 hover:border-ink hover:bg-white"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
