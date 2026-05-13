import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

// The first thing the visitor reads after the hero.
// Says: we already possess the operational engine. We are now opening the curated hospitality layer.
export function HospitalityAuthority() {
  return (
    <section className="relative py-section bg-ivory-light">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="eyebrow">A note on what we are</span>
            <div className="mt-6 h-px w-12 bg-gold/60" />
            <p className="mt-6 text-muted italic font-serif text-[0.95rem] leading-relaxed">
              {site.yearsActive} years operating in Colombia.
              <br />
              RNT {site.rnt} · NIT {site.nit}.
              <br />
              {site.languages}.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-8 space-y-8">
            <p className="font-serif text-display-md text-emerald text-balance leading-[1.18]">
              We are not a tourism company. We are a private hospitality and
              concierge ecosystem — anchored in Bogotá&apos;s emerging
              gastronomy authority, orchestrated by a single named concierge,
              and built on twelve years of Colombian operational
              infrastructure.
            </p>
            <div className="editorial-rule" />
            <p className="prose-editorial">
              The operating engine already exists. Private transport, vetted
              guides, hotel partnerships, multilingual coordination, 24/7
              concierge response, and supplier relationships across
              gastronomy, lodging, and day-escapes — all in place, today.
              What is new is the editorial hospitality layer above it: seven
              curated collections, a single concierge protocol, and a
              relationship architecture for the partners who route luxury
              travel into Colombia.
            </p>
            <p className="prose-editorial">
              The result is two readings of the same company. To the affluent
              traveler, a private hospitality concierge. To the hotel,
              advisor, executive office, or lifestyle curator, a discreet
              ground partner for Colombia — one named contact, one operational
              standard, one hospitality consistency.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
