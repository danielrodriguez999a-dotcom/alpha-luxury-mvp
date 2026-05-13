import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", light && "text-gold-soft")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-display-lg text-balance",
          light ? "text-ivory-light" : "text-emerald",
        )}
      >
        {title}
      </h2>
      <span
        className={cn("editorial-rule", align === "center" && "mx-auto")}
      />
      {description && (
        <p
          className={cn(
            "prose-editorial",
            align === "center" && "text-center",
            light && "text-ivory/85",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
