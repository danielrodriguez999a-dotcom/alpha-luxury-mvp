import Link from "next/link";
import { whatsappUrl, defaultConciergeMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  message?: string;
  variant?: "primary" | "ghost" | "ivory" | "ghost-ivory";
  className?: string;
  showArrow?: boolean;
};

export function WhatsAppCTA({
  label = "Speak with the Concierge",
  message = defaultConciergeMessage,
  variant = "primary",
  className,
  showArrow = true,
}: Props) {
  const base =
    "group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-editorial";
  const variants = {
    primary:
      "px-7 py-4 border border-gold/60 text-emerald bg-ivory-light/90 hover:bg-emerald hover:text-ivory-light hover:border-emerald",
    ghost:
      "text-emerald hover:text-gold border-b border-emerald/30 hover:border-gold pb-0.5",
    "ghost-ivory":
      "text-ivory-light hover:text-gold-soft border-b border-ivory/30 hover:border-gold-soft pb-0.5",
    ivory:
      "px-7 py-4 border border-ivory/40 text-ivory-light hover:bg-ivory-light hover:text-emerald hover:border-ivory-light",
  };
  return (
    <Link
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
      aria-label={`${label} on WhatsApp`}
    >
      <span>{label}</span>
      {showArrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
