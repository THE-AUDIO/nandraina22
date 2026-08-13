"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Marquee infini (brief §5 & §25).
 * Attend une piste flexible contenant le contenu dupliqué exactement 2 fois.
 * Translation linéaire xPercent 0 → -50, boucle parfaite sans saut.
 * Respecte `prefers-reduced-motion` : piste statique (brief §30).
 */
export function useMarquee<T extends HTMLElement>(opts: {
  /** Durée d'un cycle (contenu × 1). Plus c'est long, plus c'est lent. */
  duration?: number;
  /** Vitesse en px/s pour les marquees responsives. */
  speed?: number;
}) {
  const ref = useRef<T | null>(null);
  const tweenRef = useRef<ReturnType<typeof gsap.fromTo> | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const track = ref.current;
    if (!track || reduced) return;

    const speed = opts.speed;
    const duration = speed
      ? track.scrollWidth / speed
      : (opts.duration ?? 40);

    tweenRef.current = gsap.fromTo(
      track,
      { xPercent: 0 },
      { xPercent: -50, duration, ease: "none", repeat: -1 },
    );

    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [reduced, opts.speed, opts.duration]);

  const pause = () => tweenRef.current?.pause();
  const play = () => tweenRef.current?.play();

  return { ref, pause, play, reduced };
}
