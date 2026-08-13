import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
