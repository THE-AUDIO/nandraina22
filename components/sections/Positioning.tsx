"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { positioningSection } from "@/data/positioning";
import { scaleIn, staggerContainer, useReducedMotion } from "@/lib/animations";

export function Positioning() {
  const reduced = useReducedMotion();

  return (
    <section id="positioning" className="bg-surface py-24 md:py-40">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Pourquoi moi" title={positioningSection.title} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            {positioningSection.intro}
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 border-t border-line md:mt-24"
        >
          {positioningSection.items.map((item, i) => (
            <motion.div
              key={item.id}
              variants={scaleIn()}
              className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-[90px_minmax(0,1fr)_auto] md:gap-8 md:py-10"
            >
              <span className="font-mono text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[2.5rem] md:leading-[1.05]">
                {item.point}
              </h3>

              <span className="font-mono text-xs uppercase tracking-widest text-muted md:max-w-[240px] md:text-right">
                {item.contrast}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
