"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationSection } from "@/data/education";
import { gsap, useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Education() {
  const reduced = useReducedMotion();
  const headerRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.1,
  });
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const fill = fillRef.current;
    if (!timeline || !fill || reduced) return;

    const ctx = gsap.context(() => {
      gsap.to(fill, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.6,
        },
      });
    }, timeline);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="education" className="bg-paper py-24 md:py-40">
      <Container>
        <div ref={headerRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Formation" title={educationSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Un parcours académique doublé d&apos;expériences réelles — parce que la
            théorie ne suffit pas à faire du bon code.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16 md:mt-24">
          {/* Rail */}
          <span
            aria-hidden
            className="absolute bottom-4 left-[4px] top-4 w-px bg-line"
          />
          {/* Remplissage + point animé (remonte au fil du scroll) */}
          <span
            ref={fillRef}
            aria-hidden
            className={cn(
              "absolute bottom-4 left-[4px] top-4 w-px origin-bottom bg-accent",
              reduced ? "scale-y-100" : "scale-y-0",
            )}
          >
            <span className="absolute -top-[5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(0,0,0,0.06)]" />
          </span>

          <ol className="flex flex-col gap-16 md:gap-24">
            {educationSection.entries.map((entry) => (
              <li key={entry.id} data-reveal className="relative pl-12 md:pl-16">
                {/* Marqueur */}
                <span
                  aria-hidden
                  className="absolute left-[4px] top-1.5 size-2 -translate-x-1/2 rounded-full border border-accent bg-paper"
                />

                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {entry.period.start} — {entry.period.end}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {entry.degree}
                </h3>
                <p className="mt-1.5 font-display text-base font-semibold text-inksoft">
                  {entry.school}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {entry.details.join("  ·  ")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
