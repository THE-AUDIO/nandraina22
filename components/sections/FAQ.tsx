"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { EASE, useGsapReveal, useReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FAQ() {
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);
  const revealRef = useGsapReveal<HTMLDivElement>({
    targets: "[data-reveal]",
    stagger: 0.06,
  });

  const dur = reduced ? 0 : 0.35;

  return (
    <section id="faq" className="bg-paper py-24 md:py-40">
      <Container>
        <div ref={revealRef} className="mx-auto max-w-3xl">
          <div data-reveal>
            <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
          </div>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-inksoft">
            Ce qu&apos;on me demande souvent en entretien ou avant une mission.
          </p>

          <div data-reveal className="mt-12 border-t border-line md:mt-16">
            {faqItems.map((item, i) => {
              const open = openId === item.id;
              return (
                <div key={item.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-bold tracking-tight text-ink transition-colors duration-300 md:text-2xl">
                        {item.question}
                      </span>
                    </span>

                    <span
                      aria-hidden
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300",
                        open && "rotate-45 border-accent bg-accent text-white",
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: dur, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-9 pr-12 text-sm leading-relaxed text-inksoft md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
