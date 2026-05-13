import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function PositioningStatement() {
  return (
    <section className="relative py-section bg-ivory-light">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <span className="eyebrow">A note on what we are</span>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-8 space-y-8">
            <p className="font-serif text-display-md text-emerald text-balance leading-[1.2]">
              We are not a tourism company. We are an editorial luxury
              hospitality ecosystem — anchored in Bogotá&apos;s emerging
              gastronomy, orchestrated by a named concierge, and built on
              operational infrastructure trusted in Colombia for years.
            </p>
            <div className="editorial-rule" />
            <p className="prose-editorial">
              The operational catalog continues to fulfill. The editorial layer
              above curates, sequences, and narrates. What you read here is
              what the concierge orchestrates — by introduction.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
