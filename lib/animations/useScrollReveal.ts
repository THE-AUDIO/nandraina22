"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Reveal au scroll piloté par GSAP + ScrollTrigger (brief §20.2).
 * - `targets` : sélecteur CSS des éléments à révéler (dans le scope du ref).
 * - `stagger` : décalage entre les éléments (brief §20.3).
 * Respecte `prefers-reduced-motion` : sans animation, tout reste visible.
 */
export function useGsapReveal<T extends HTMLElement>(
  opts: {
    targets?: string;
    stagger?: number;
    y?: number;
    start?: string;
    once?: boolean;
    delayChildren?: number;
  } = {},
) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        opts.targets ?? "[data-reveal]",
        { autoAlpha: 0, y: opts.y ?? 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: opts.delayChildren ?? 0,
          stagger: opts.stagger ?? 0.08,
          scrollTrigger: {
            trigger: el,
            start: opts.start ?? "top 78%",
            once: opts.once ?? true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, opts.targets, opts.stagger, opts.y, opts.start, opts.once, opts.delayChildren]);

  return ref;
}

/** Nettoyage global ScrollTrigger au démontage (utile sur page SPA). */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
