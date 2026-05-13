import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";

type Props = {
  roman: string;
  name: string;
  essence: string;
  description: string;
  anchorLine: string;
};

export function CollectionHero({
  roman,
  name,
  essence,
  description,
  anchorLine,
}: Props) {
  return (
    <section className="relative atmosphere-night text-ivory-light pt-44 pb-section-sm overflow-hidden">
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
          <span className="eyebrow text-gold-soft">
            Collection {roman} · By introduction
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-6 text-display-xl font-light text-ivory-light text-balance leading-[1.05]">
            {name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 max-w-2xl text-ivory/85 text-lg leading-relaxed italic font-serif">
            {essence}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-ivory/75 text-[0.95rem] leading-relaxed">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="mt-8 text-xs uppercase tracking-widest text-gold-soft">
            {anchorLine}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <WhatsAppCTA variant="ivory" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
