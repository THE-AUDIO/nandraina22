"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { EASE } from "@/lib/animations";

export function FinalCTA() {
  const cta = profile.finalCta;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-accent py-28 text-white md:py-20"
    >
      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/60"
        >
          {cta.eyebrow}
        </motion.p>

        <div className="mt-6 overflow-hidden pb-2">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {cta.title}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          {cta.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <Button href={cta.ctaPrimary.href} variant="light">
              {cta.ctaPrimary.label}
            </Button>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <Button href={cta.ctaSecondary.href} variant="ghostLight">
              {cta.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
          className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-white/40"
        >
          {cta.reinforcement}
        </motion.p>
      </Container>
    </section>
  );
}
