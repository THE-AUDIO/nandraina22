import type { Variants } from "motion/react";

/** Courbe d'easing douce, premium (cubic-bezier standard, brief §20). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Durées de référence (brief §20.2). */
export const DURATION_REVEAL = 0.8;
export const DURATION_HERO_LINE = 0.9;
export const STAGGER_LIST = 0.08;
export const STAGGER_HERO = 0.09;

type VariantOpts = {
  delay?: number;
  duration?: number;
  distance?: number;
};

/**
 * fadeInUp — reveal au scroll (brief §20.2) :
 * opacity 0 → 1, translateY(40px) → 0, ease-out.
 */
export function fadeInUp({
  delay = 0,
  duration = DURATION_REVEAL,
  distance = 40,
}: VariantOpts = {}): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE },
    },
  };
}

/** Conteneur qui pilote le stagger de ses enfants (brief §20.3). */
export function staggerContainer(
  stagger = STAGGER_LIST,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/**
 * scaleIn — pour le positionnement (brief §14) :
 * scale(0.8) → scale(1), opacity(0) → opacity(1).
 */
export function scaleIn({
  delay = 0,
  duration = DURATION_REVEAL,
}: VariantOpts = {}): Variants {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: EASE },
    },
  };
}

/** Slide latéral pour sliders / alternance gauche-droite. */
export function slideIn(direction: "left" | "right", distance = 60) {
  return {
    hidden: { opacity: 0, x: direction === "left" ? -distance : distance },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION_REVEAL, ease: EASE },
    },
  };
}
