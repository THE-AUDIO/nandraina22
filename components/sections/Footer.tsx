"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";
import { socialsSection } from "@/data/socials";
import { useGsapReveal, useReducedMotion } from "@/lib/animations";
import { getLenis } from "@/lib/animations/lenis";

function UnderlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex text-white/70 transition-colors duration-300 hover:text-white"
    >
      {children}
      <span
        aria-hidden
        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
      />
    </Link>
  );
}

export function Footer() {
  const reduced = useReducedMotion();
  const revealRef = useGsapReveal<HTMLElement>({
    targets: "[data-reveal]",
    stagger: 0.05,
  });

  const scrollTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer
      ref={revealRef}
      className="relative overflow-hidden bg-accent text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-4%] select-none text-center font-display text-[20vw] font-bold leading-none tracking-tighter text-white/[0.03]"
      >
        <span
          className={
            reduced
              ? undefined
              : "inline-block animate-[floatSlow_14s_ease-in-out_infinite]"
          }
        >
          {profile.shortName}
        </span>
      </div>

      <Container className="relative pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div data-reveal>
            <div className="group flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-accent transition-transform duration-500 group-hover:rotate-12">
                {profile.monogram}
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {profile.shortName}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {profile.tagline}
            </p>
          </div>

          <nav data-reveal aria-label="Navigation du pied de page">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              Navigation
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <UnderlineLink href={link.href}>{link.label}</UnderlineLink>
                </li>
              ))}
            </ul>
          </nav>

          <div data-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              Réseaux &amp; contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {socialsSection.links.map((social) => (
                <li key={social.id}>
                  <UnderlineLink href={social.href}>{social.handle}</UnderlineLink>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:mt-20"
        >
          <p>
            © {new Date().getFullYear()} {profile.shortName} — {profile.title}.
            Tous droits réservés.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Antananarivo, Madagascar
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 text-white/60 transition-colors duration-300 hover:text-white"
            aria-label="Retour en haut de page"
          >
            Haut de page
            <span className="flex size-7 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp className="size-3.5" aria-hidden />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
