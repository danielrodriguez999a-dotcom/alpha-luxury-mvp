import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";

export function ConciergeBlock() {
  return (
    <section className="relative py-section atmosphere-stone overflow-hidden">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow">The Concierge</span>
            <h2 className="mt-6 text-display-lg text-emerald text-balance">
              A private conversation. A named human. A curated reply.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 space-y-6">
            <p className="prose-editorial">
              Every enquiry is answered by a named concierge. There is no
              ticket system, no chatbot, no automated reply. The first message
              you receive will reference a specific table, a specific
              neighborhood, or a specific evening — because curation begins in
              the first line.
            </p>
            <p className="prose-editorial">
              By WhatsApp, by email, or by introduction through your hotel.
              Pricing is presented as a curated proposal, not as a checkout.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <WhatsAppCTA />
              <a
                href="/concierge"
                className="text-emerald hover:text-gold uppercase tracking-widest text-sm transition-colors"
              >
                The Concierge Philosophy →
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
