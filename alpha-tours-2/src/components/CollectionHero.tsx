import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/cn";

type Props = {
  roman: string;
  name: string;
  essence: string;
  description: string;
  anchorLine: string;
  atmosphere?: "emerald" | "night" | "stone";
  conciergeMessage?: string;
};

export function CollectionHero({
  roman,
  name,
  essence,
  description,
  anchorLine,
  atmosphere = "night",
  conciergeMessage,
}: Props) {
  const isStone = atmosphere === "stone";
  const bg =
    atmosphere === "emerald"
      ? "atmosphere-emerald"
      : atmosphere === "stone"
        ? "atmosphere-stone"
        : "atmosphere-night";

  return (
    <section
      className={cn(
        "relative pt-44 pb-section-sm overflow-hidden",
        bg,
        isStone ? "text-charcoal" : "text-ivory-light",
      )}
    >
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-20 right-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.3) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <FadeIn>
          <span className={cn("eyebrow", isStone ? "text-gold-deep" : "text-gold-soft")}>
            Collection {roman} · By introduction
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1
            className={cn(
              "mt-6 text-display-xl font-light text-balance leading-[1.05]",
              isStone ? "text-emerald" : "text-ivory-light",
            )}
          >
            {name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className={cn(
              "mt-8 max-w-2xl text-lg leading-relaxed italic font-serif",
              isStone ? "text-charcoal" : "text-ivory/85",
            )}
          >
            {essence}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-[0.95rem] leading-relaxed",
              isStone ? "text-charcoal/85" : "text-ivory/75",
            )}
          >
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p
            className={cn(
              "mt-8 text-xs uppercase tracking-widest",
              isStone ? "text-gold-deep" : "text-gold-soft",
            )}
          >
            {anchorLine}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <WhatsAppCTA
              variant={isStone ? "primary" : "ivory"}
              message={conciergeMessage}
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
