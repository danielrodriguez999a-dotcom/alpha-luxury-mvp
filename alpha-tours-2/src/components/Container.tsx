import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Component = As as React.ElementType;
  return (
    <Component className={cn("container-editorial", className)}>
      {children}
    </Component>
  );
}
