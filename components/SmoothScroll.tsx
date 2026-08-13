"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { useReducedMotion } from "@/lib/animations";
import { setLenis } from "@/lib/animations/lenis";

/**
 * Défilement fluide global via Lenis, synchronisé avec ScrollTrigger (GSAP).
 * - Lenis ne pirate pas le layout (pas de `position: fixed` ni de transform) :
 *   le scroll natif est conservé, donc `position: sticky` / `fixed` restent sains.
 * - Les ancres (`#...`) sont interceptées pour scroller en douceur avec un
 *   décalage compensant le navbar fixe.
 * - `prefers-reduced-motion` : aucune instance n'est créée, scroll 100% natif.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      syncTouch: false,
    });

    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: href === "#hero" ? 0 : 88 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
      ScrollTrigger.refresh();
    };
  }, [reduced]);

  return <>{children}</>;
}
