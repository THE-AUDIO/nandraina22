import type Lenis from "lenis";

let lenis: Lenis | null = null;

/** Instance Lenis globale, posée par `SmoothScroll`. */
export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}
