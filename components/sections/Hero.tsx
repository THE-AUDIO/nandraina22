"use client";

import { motion } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { socialsSection } from "@/data/socials";
import { EASE, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
  };

  const lineGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
  };

  const lineReveal = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    },
  });

  const quickLinks = socialsSection.links.filter((l) =>
    ["github", "linkedin", "mail"].includes(l.platform),
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden pb-20 pt-36 md:pb-24 md:pt-44"
    >
      {/* Décor de fond discret */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[15%] -top-[25%] size-[42rem] rounded-full bg-accent/[0.045] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-line" />
      </div>

      <Container className="flex flex-1 flex-col justify-end">
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate="show"
          className="flex flex-1 flex-col justify-end"
        >
          {/* Titre — reveal ligne par ligne (brief §4.1) */}
          <motion.h1
            variants={lineGroup}
            className="max-w-[13ch] font-display text-[clamp(4.75rem,10vw,8.5rem)] font-bold leading-[0.95] tracking-tighter"
          >
           {profile.hero.titleLines.map((line, i) => (
              <motion.span
                key={i}
                variants={lineReveal}
                className={cn(
                  "block",
                  i === profile.hero.titleLines.length - 1 && "text-muted !text-[clamp(3.5rem,8vw,6.5rem)]",
                )}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-14 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            {/* Sous-titre + CTA + renforcement */}
            <div className="max-w-xl">
              <motion.p
                variants={fadeUp(0.1)}
                className="text-base leading-relaxed text-inksoft md:text-lg"
              >
                {profile.hero.subtitle}
              </motion.p>

              <motion.div
                variants={fadeUp(0.15)}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Button href={profile.hero.ctaPrimary.href}>
                  {profile.hero.ctaPrimary.label}
                </Button>
                <Button href={profile.hero.ctaSecondary.href} variant="secondary">
                  {profile.hero.ctaSecondary.label}
                </Button>
              </motion.div>

             
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Indicateur de scroll */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: EASE }}
        aria-hidden
        className="absolute bottom-8 left-5 flex items-center gap-3 md:left-10 lg:left-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Scroll
        </span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={
            reduced ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex items-end"
        >
          <ArrowDown className="size-4 text-muted" aria-hidden />
        </motion.span>
      </motion.div>
    </section>
  );
}
