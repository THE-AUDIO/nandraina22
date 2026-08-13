"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "light" | "ghostLight";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  icon?: boolean;
  children: React.ReactNode;
}

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:translate-y-[-2px] hover:bg-black/85 active:translate-y-[0px]",
  secondary:
    "border border-line bg-transparent text-ink hover:translate-y-[-2px] hover:border-ink hover:bg-white active:translate-y-[0px]",
  light:
    "bg-white text-ink hover:translate-y-[-2px] hover:bg-white/90 active:translate-y-[0px]",
  ghostLight:
    "border border-white/30 bg-transparent text-white hover:translate-y-[-2px] hover:border-white hover:bg-white/10 active:translate-y-[0px]",
};

export function Button({
  href,
  variant = "primary",
  icon = true,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
      {icon && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]"
          aria-hidden
        />
      )}
    </Link>
  );
}
