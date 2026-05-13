import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] flex items-end atmosphere-night overflow-hidden">
      <div className="grain absolute inset-0 z-0" aria-hidden />

      {/* Soft golden glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Vertical rule */}
      <div
        aria-hidden
        className="absolute top-0 left-6 sm:left-8 lg:left-12 h-full w-px bg-ivory/15"
      />
      <div
        aria-hidden
        className="absolute top-0 right-6 sm:right-8 lg:right-12 h-full w-px bg-ivory/15"
      />

      <Container className="relative z-10 pb-24 lg:pb-32 pt-44">
        <div className="max-w-3xl space-y-10">
          <FadeIn>
            <span className="eyebrow text-gold-soft">
              Bogotá · Colombia · By introduction
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-display-xl text-ivory-light font-light leading-[1.05] text-balance">
              A private kitchen <br className="hidden sm:block" />
              in Chapinero.
              <span className="block italic text-gold-soft mt-2 font-light">
                By introduction.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-ivory/80 max-w-xl text-lg leading-relaxed">
              An editorial luxury hospitality ecosystem in Bogotá and Colombia.
              Curated tables, considered evenings, executive itineraries —
              orchestrated by a named concierge, anchored on the city&apos;s
              most refined houses.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <WhatsAppCTA variant="ivory" />
              <a
                href="#collections"
                className="text-ivory/70 hover:text-gold-soft text-sm uppercase tracking-widest transition-colors"
              >
                The Seven Collections
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
