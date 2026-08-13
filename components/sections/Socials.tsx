"use client";

import { useState } from "react";
import { ArrowUpRight, Globe, Mail, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialsSection, type SocialLink } from "@/data/socials";
import { useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const ICONS: Record<string, LucideIcon | React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  globe: Globe,
};

function SocialRow({
  link,
  onEnter,
  onLeave,
  reduced,
}: {
  link: SocialLink;
  onEnter: () => void;
  onLeave: () => void;
  reduced: boolean;
}) {
  const Icon = ICONS[link.platform] ?? Globe;
  const external = link.platform === "github" || link.platform === "linkedin";

  return (
    <a
      href={link.href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/link relative flex items-center justify-between gap-6 border-b border-line py-8 transition-all duration-300 md:py-10",
      )}
      aria-label={`${link.label} — ${link.handle}`}
    >
      <span
        className={cn(
          "flex flex-col gap-1 transition-transform duration-300 md:flex-row md:items-baseline md:gap-6",
          !reduced && "group-hover/link:translate-x-2",
        )}
      >
        <span
          className={cn(
            "font-display text-3xl font-bold tracking-tight transition-colors duration-300 md:text-5xl",
            !reduced && "group-hover/link:text-accent",
          )}
        >
          {link.label}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {link.handle}
        </span>
      </span>

      <span className="flex items-center gap-4">
        <Icon
          className={cn(
            "size-5 text-muted transition-opacity duration-300",
            !reduced && "opacity-0 group-hover/link:opacity-100",
          )}
          aria-hidden
        />
        <ArrowUpRight
          className={cn(
            "size-6 text-muted transition-transform duration-300",
            !reduced &&
              "group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-accent",
          )}
          aria-hidden
        />
      </span>
    </a>
  );
}

export function Socials() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.08,
  });

  return (
    <section id="socials" className="bg-surface py-24 md:py-40">
      <Container>
        <div ref={listRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Réseaux" title={socialsSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Les endroits où me suivre, échanger et collaborer.
          </p>

          <div
            data-reveal
            className="mt-16 border-t border-line md:mt-20"
            onMouseLeave={() => setActiveId(null)}
          >
            {socialsSection.links.map((link) => (
              <div
                key={link.id}
                data-reveal
                className={cn(
                  "transition-opacity duration-300",
                  activeId !== null && activeId !== link.id && "opacity-35",
                )}
              >
                <SocialRow
                  link={link}
                  onEnter={() => setActiveId(link.id)}
                  onLeave={() => setActiveId(null)}
                  reduced={reduced}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
