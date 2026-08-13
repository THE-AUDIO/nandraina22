import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  id: string;
  index: string;
  title: string;
  tone?: "paper" | "surface";
}

export function SectionPlaceholder({
  id,
  index,
  title,
  tone = "paper",
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className={cn("py-28 md:py-40", tone === "surface" && "bg-surface")}
    >
      <Container>
        <div className="flex flex-col gap-3 border-t border-line pt-6">
          <span className="font-mono text-xs tracking-widest text-muted">
            {index}
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Section à construire — animation détaillée au brief §…
          </p>
        </div>
      </Container>
    </section>
  );
}
