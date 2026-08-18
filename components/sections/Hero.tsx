"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/lib/animations";

/** Délais de la cascade d'apparition (badge → h1 → rôle → sous-titre → CTA). */
const REVEAL_DELAYS = ["0ms", "0.08s", "0.16s", "0.24s", "0.32s"];

export function Hero() {
  const hero = profile.hero;
  const reduced = useReducedMotion();
  const [headlineStart, headlineEnd] = hero.headline.split(hero.highlight);
  const availabilityWord = hero.availability.split(" ")[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden w-full"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 md:bottom-[-4%] select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-ink/[0.08]"
      >
        <span
          className={
            reduced
              ? undefined
              : "inline-block animate-[floatSlow_14s_ease-in-out_infinite]"
          }
        >
          {availabilityWord}
        </span>
      </div>

      <Container className="flex flex-1 flex-col justify-center py-24 md:py-32 w-full">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center space-y-4">
          {/* Headline de positionnement */}
          <h1
            className="hero-reveal  font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.03] tracking-[-0.03em] text-ink md:mt-10 w-full"
            style={{ animationDelay: REVEAL_DELAYS[1] }}
          >
            {headlineStart}
            <span className="bg-gradient-to-r from-ink to-muted bg-clip-text text-transparent w-full ">
              {hero.highlight}
            </span>
            {headlineEnd}
          </h1>

          {/* Ligne de rôle */}
          <p
            className="hero-reveal mt-6 font-mono text-[11px] uppercase tracking-widest text-muted md:text-xs"
            style={{ animationDelay: REVEAL_DELAYS[2] }}
          >
            {hero.role}
          </p>

          {/* Sous-titre */}
          <p
            className="hero-reveal mt-6  md:w-2/3 text-base leading-relaxed text-inksoft md:text-lg"
            style={{ animationDelay: REVEAL_DELAYS[3] }}
          >
            {hero.subtitle}
          </p>

          {/* CTA — un seul bouton fort, CV en lien texte */}
          <div
            className="hero-reveal mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            style={{ animationDelay: REVEAL_DELAYS[4] }}
          >
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              <span className="underline">
                {hero.ctaSecondary.label}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
