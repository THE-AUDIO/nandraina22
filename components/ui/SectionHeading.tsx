import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-[20ch] font-display text-3xl font-bold leading-[1.05] tracking-tighter sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
