import { whatsappUrl } from "@/lib/site";
import type { Experience } from "@/lib/experiences";
import { cn } from "@/lib/cn";

type Props = {
  experience: Experience;
  variant?: "default" | "featured" | "dark";
  className?: string;
};

export function ExperienceCard({
  experience,
  variant = "default",
  className,
}: Props) {
  const message = `Hello — I'd like to learn more about "${experience.title}" and begin a private conversation with the concierge.`;

  const styles = {
    default:
      "bg-ivory-light border border-stone/50 text-charcoal hover:border-gold/60",
    featured:
      "bg-ivory border border-gold/40 text-charcoal hover:border-gold",
    dark:
      "atmosphere-emerald text-ivory-light border border-ivory/15 hover:border-gold/50",
  };

  const isDark = variant === "dark";

  return (
    <article
      className={cn(
        "group relative p-8 lg:p-10 flex flex-col gap-6 transition-colors duration-500 ease-editorial h-full",
        styles[variant],
        className,
      )}
    >
      {variant === "dark" && (
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden />
      )}

      <div className="relative flex items-baseline justify-between">
        <span
          className={cn(
            "eyebrow",
            isDark ? "text-gold-soft" : "text-gold",
          )}
        >
          {experience.category}
        </span>
        {experience.signature && (
          <span
            className={cn(
              "text-[0.65rem] uppercase tracking-widest italic font-serif",
              isDark ? "text-gold-soft" : "text-gold",
            )}
          >
            Signature
          </span>
        )}
      </div>

      <h3
        className={cn(
          "relative text-2xl lg:text-[1.65rem] font-serif leading-[1.2] tracking-tight text-balance",
          isDark ? "text-ivory-light" : "text-emerald",
        )}
      >
        {experience.title}
      </h3>

      <p
        className={cn(
          "relative text-[0.95rem] leading-relaxed",
          isDark ? "text-ivory/85" : "text-charcoal/80",
        )}
      >
        {experience.essence}
      </p>

      <dl
        className={cn(
          "relative grid grid-cols-1 gap-3 text-sm pt-4 border-t",
          isDark ? "border-ivory/15" : "border-stone/50",
        )}
      >
        <div className="flex justify-between gap-4">
          <dt className={cn("uppercase tracking-widest text-xs", isDark ? "text-ivory/55" : "text-muted")}>
            Format
          </dt>
          <dd className={cn("text-right", isDark ? "text-ivory/90" : "text-charcoal")}>
            {experience.format}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className={cn("uppercase tracking-widest text-xs", isDark ? "text-ivory/55" : "text-muted")}>
            Audience
          </dt>
          <dd className={cn("text-right", isDark ? "text-ivory/90" : "text-charcoal")}>
            {experience.audience}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className={cn("uppercase tracking-widest text-xs", isDark ? "text-ivory/55" : "text-muted")}>
            Anchors
          </dt>
          <dd className={cn("text-right italic font-serif", isDark ? "text-gold-soft" : "text-emerald")}>
            {experience.anchors.join(" · ")}
          </dd>
        </div>
      </dl>

      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative inline-flex items-center gap-2 text-xs uppercase tracking-widest pt-2 transition-colors duration-500",
          isDark
            ? "text-gold-soft hover:text-ivory-light"
            : "text-emerald hover:text-gold",
        )}
      >
        <span>Speak with the Concierge</span>
        <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-500">→</span>
      </a>
    </article>
  );
}
