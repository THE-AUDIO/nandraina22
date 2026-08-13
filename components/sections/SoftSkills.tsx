"use client";

import { useEffect, useRef } from "react";
import { Gauge, Trophy, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { softSkillsSection, type SoftSkill } from "@/data/softSkills";
import { gsap, useGsapReveal, useReducedMotion } from "@/lib/animations";

const ICONS: Record<string, LucideIcon> = {
  Gauge,
  Trophy,
};

function SkillRow({ skill }: { skill: SoftSkill }) {
  const Icon = ICONS[skill.icon] ?? Gauge;
  return (
    <div data-skill className="group border-t border-line py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[240px_minmax(0,1fr)_auto] md:gap-10 lg:grid-cols-[300px_minmax(0,1fr)_auto]">
        {/* Numéro — très visible (§15.1) */}
        <div data-seq className="order-1">
          <span className="font-display text-[5rem] font-bold leading-none tracking-tighter text-ink transition-colors duration-300 group-hover:text-accent md:text-[7rem]">
            {skill.number}
          </span>
        </div>

        {/* Titre + description */}
        <div className="order-2">
          <h3 data-seq className="font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
            {skill.title}
          </h3>
          <p data-seq className="mt-4 max-w-xl text-sm leading-relaxed text-inksoft md:text-base">
            {skill.description}
          </p>
        </div>

        {/* Visuel */}
        <div data-seq className="order-3">
          <div className="flex size-20 items-center justify-center rounded-2xl border border-line bg-mist transition-colors duration-300 group-hover:border-accent/30 md:size-24">
            <Icon className="size-9 text-accent md:size-10" strokeWidth={1.25} aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SoftSkills() {
  const reduced = useReducedMotion();
  const headerRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.08,
  });
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || reduced) return;

    const ctx = gsap.context(() => {
      list.querySelectorAll("[data-skill]").forEach((row) => {
        gsap.fromTo(
          row.querySelectorAll("[data-seq]"),
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: row, start: "top 82%" },
          },
        );
      });
    }, list);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="softskills" className="bg-paper py-24 md:py-40">
      <Container>
        <div ref={headerRef}>
          <div data-reveal>
            <SectionHeading eyebrow="Soft skills" title={softSkillsSection.title} />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Deux qualités que je mets en œuvre en dehors des dépôts, et qui
            rendent le code meilleur.
          </p>
        </div>

        <div ref={listRef} className="mt-16 border-b border-line md:mt-24">
          {softSkillsSection.items.map((skill) => (
            <SkillRow key={skill.id} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}
