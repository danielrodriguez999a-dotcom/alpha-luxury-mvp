import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Concierge — A Private Conversation",
  description:
    "Every enquiry is answered by a named concierge. No ticket system, no chatbot. By WhatsApp, by email, or by introduction through your hotel.",
  alternates: { canonical: `${site.url}/concierge` },
};

const philosophy = [
  {
    label: "Named",
    body: "A real human, with a real portrait, a real biography, and a direct line. Not a generic inbox.",
  },
  {
    label: "Specific",
    body: "The first reply names a chef, a neighborhood, or an evening — because curation begins in the first line.",
  },
  {
    label: "Discreet",
    body: "Names, photos, and itineraries are protected by default. Confidentiality is a brand value, not a clause.",
  },
  {
    label: "Continuous",
    body: "The same concierge across your bookings. Relationship is the retention engine, not loyalty points.",
  },
];

export default function ConciergePage() {
  return (
    <>
      <section className="atmosphere-night text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <FadeIn>
            <span className="eyebrow text-gold-soft">By introduction</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-display-xl text-ivory-light font-light leading-[1.05] text-balance max-w-3xl">
              A private conversation.
              <span className="block italic text-gold-soft font-light">
                A named human. A curated reply.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-ivory/85 text-lg leading-relaxed">
              Every enquiry is answered by a named concierge. There is no
              ticket system, no chatbot, no automated reply. The first message
              you receive will reference a specific chef, a specific evening,
              or a specific neighborhood — because that is how curation begins.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-6">
              <WhatsAppCTA variant="ivory" />
              <a
                href={`mailto:${site.email}`}
                className="text-ivory/75 hover:text-gold-soft text-sm uppercase tracking-widest transition-colors"
              >
                Or write to {site.email}
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Philosophy</span>
            <h2 className="mt-4 text-display-md text-emerald text-balance">
              Four commitments that define the conversation.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
            {philosophy.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.05}>
                <div className="bg-ivory-light p-10 h-full space-y-4">
                  <h3 className="font-serif text-3xl text-emerald italic">
                    {p.label}.
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section atmosphere-stone relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="eyebrow">What to expect</span>
            <ol className="mt-8 space-y-8">
              {[
                {
                  step: "1",
                  title: "A reply within minutes during business hours.",
                  body: "A named concierge — not a queue. You will hear back in under fifteen minutes between 8am and 8pm Bogotá time, and within an hour after.",
                },
                {
                  step: "2",
                  title: "A first message with a specific reference.",
                  body: "We open with a chef, a table, or a neighborhood relevant to your enquiry. Curation begins in the first line.",
                },
                {
                  step: "3",
                  title: "A curated proposal — not a price page.",
                  body: "Within 24 hours, you receive a written proposal: sequenced experiences, named partners, indicative pricing in COP with USD parity, and the next step.",
                },
                {
                  step: "4",
                  title: "The concierge holds the entire arc.",
                  body: "From the moment your car arrives at your hotel to the morning after your final dinner. One named person across every detail.",
                },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.05}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 items-start">
                    <span className="font-serif text-4xl text-gold italic">
                      {item.step}.
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-emerald leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-charcoal/80 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
            <div className="mt-16">
              <WhatsAppCTA />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
