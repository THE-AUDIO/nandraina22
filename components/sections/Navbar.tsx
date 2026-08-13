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
import { cn } from "@/lib/utils";

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const groupItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
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
    <motion.header
      initial={reduced ? false : "hidden"}
      animate="show"
      variants={group}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Monogramme + nom */}
          <motion.div variants={groupItem}>
            <Link
              href="#hero"
              aria-label="Retour en haut — Nandraina"
              className="group flex items-center gap-2.5"
            >
              <span className="flex size-8 items-center justify-center rounded-md bg-accent font-display text-sm font-bold text-white transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                {profile.monogram}
              </span>
              <span className="hidden font-display text-base font-semibold tracking-tight text-ink sm:inline">
                {profile.shortName}
              </span>
            </Link>
          </motion.div>

          {/* Liens centraux — desktop */}
          <motion.nav
            variants={groupItem}
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navigation principale"
          >
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-xs uppercase tracking-widest text-inksoft transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* CTA + bouton menu mobile */}
          <div className="flex items-center gap-3">
            <motion.div variants={groupItem} className="hidden lg:block">
              <Link
                href={nav.cta.href}
                className="group/cta inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
              >
                {nav.cta.label}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </motion.div>

            <motion.button
              variants={groupItem}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-200 hover:border-ink lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </motion.button>
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
                        transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                        className="border-b border-line"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-5 font-display text-3xl font-bold tracking-tight text-ink"
                        >
                          {link.label}
                          <ArrowUpRight className="size-6 text-muted" aria-hidden />
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
    </motion.header>
  );
}
