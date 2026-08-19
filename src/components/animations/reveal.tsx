import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
}

export function Reveal({
  children,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ..._rest
}: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
