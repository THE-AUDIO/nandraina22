import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}
