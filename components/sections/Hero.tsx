import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

/** Délais de la cascade d'apparition (badge → h1 → rôle → sous-titre → CTA). */
const REVEAL_DELAYS = ["0ms", "0.08s", "0.16s", "0.24s", "0.32s"];

export function Hero() {
  const hero = profile.hero;
  const [headlineStart, headlineEnd] = hero.headline.split(hero.highlight);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden w-full"
    >
      <Container className="flex flex-1 flex-col justify-center py-24 md:py-32 w-full">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center space-y-4">
          {/* Badge de disponibilité */}
          <p
            className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted"
            style={{ animationDelay: REVEAL_DELAYS[0] }}
          >
            <span
              aria-hidden
              className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
            />
            {hero.availability}
          </p>

          {/* Headline de positionnement */}
          <h1
            className="hero-reveal mt-8 font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.03] tracking-[-0.03em] text-ink md:mt-10 w-full"
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
            className="hero-reveal mt-6 w-2/3 text-base leading-relaxed text-inksoft md:text-lg"
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
            <Link
              href={hero.ctaSecondary.href}
              className="text-sm font-medium text-inksoft underline decoration-muted/50 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
