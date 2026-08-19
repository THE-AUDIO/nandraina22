"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";
import { EASE, useReducedMotion } from "@/lib/animations";
import { getLenis } from "@/lib/animations/lenis";
import { cn } from "@/lib/utils";

/** Texte à double couche : swap vertical au survol (signature Zynic). */
function RollText({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className="relative block overflow-hidden">
      <span
        className={cn(
          "block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full",
          className,
        )}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0",
          className,
        )}
      >
        {label}
      </span>
    </span>
  );
}

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  // Scrollspy : met en surbrillance la section courante.
  useEffect(() => {
    const sections = nav.links
      .map((link) => {
        const hash = link.href.startsWith("/#") ? link.href.slice(1) : link.href;
        return document.querySelector<HTMLElement>(hash);
      })
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        {/* Capsule flottante — cadre dans le cadre, type Zynic */}
        <div
          className={cn(
            "nav-reveal mx-auto mt-3 flex max-w-[52rem] items-center justify-between gap-4 rounded-full border px-2.5 py-2 backdrop-blur-md transition-all duration-300 md:mt-4",
            scrolled
              ? "border-line bg-surface/95 shadow-[0_12px_32px_rgba(16,16,16,0.10)]"
              : "border-line/80 bg-surface/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_16px_rgba(16,16,16,0.05)]",
          )}
        >
          {/* Monogramme + nom */}
          <Link
            href="/#hero"
            aria-label="Retour en haut — Nandraina"
            className="group flex items-center gap-2.5 rounded-full"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
              {profile.monogram}
            </span>
            <span className="hidden font-display text-base font-semibold tracking-tight text-ink sm:inline">
              {profile.shortName}
            </span>
          </Link>

          {/* Liens centraux — desktop */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigation principale"
          >
            {nav.links.map((link) => {
              const hash = link.href.startsWith("/#") ? link.href.slice(1) : link.href;
              const isActive = active === hash;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative py-1 font-mono text-xs uppercase tracking-wide text-inksoft"
                >
                  <RollText
                    label={link.label}
                    className={cn(
                      "text-inksoft transition-colors duration-200 group-hover:text-ink",
                      isActive && "text-ink",
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ink transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + bouton menu mobile */}
          <div className="flex items-center gap-2">
            <Link
              href={nav.cta.href}
              className="group hidden items-center gap-2 rounded-full bg-accent py-2.5 pl-5 pr-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 lg:inline-flex"
            >
              <RollText
                label={nav.cta.label}
                className="text-sm font-medium text-white"
              />
              <ArrowUpRight
                className="size-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-200 hover:border-ink lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu mobile — rendu en portail pour éviter les problèmes de containing block */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="fixed inset-0 z-40 flex flex-col bg-paper lg:hidden"
              >
                <div className="flex-1 overflow-y-auto px-6 pt-28">
                  <nav className="flex flex-col" aria-label="Menu mobile">
                    {nav.links.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={reduced ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.05,
                          ease: EASE,
                        }}
                        className="border-b border-line"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-5 font-display text-3xl font-bold tracking-tight text-ink"
                        >
                          {link.label}
                          <ArrowUpRight
                            className="size-6 text-muted"
                            aria-hidden
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-line px-6 py-8">
                  <Link
                    href={nav.cta.href}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-sm font-medium text-white"
                  >
                    {nav.cta.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                  <p className="mt-6 text-center font-mono text-xs tracking-wide text-muted">
                    {profile.email} · {profile.location}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
