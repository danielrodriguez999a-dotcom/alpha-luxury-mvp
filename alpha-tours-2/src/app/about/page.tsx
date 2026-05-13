import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";
import { operationalPillars } from "@/lib/operational";

export const metadata: Metadata = {
  title: "About Alpha Tours — Operational Authority. Editorial Hospitality.",
  description:
    "Alpha Tours Bogotá S.A.S. — twelve years of operational tourism infrastructure in Colombia under RNT 36691, layered with an editorial luxury hospitality collection of curated gastronomy, executive concierge, and day-escape experiences.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="atmosphere-night text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <FadeIn>
            <span className="eyebrow text-gold-soft">
              Alpha Tours Bogotá · Since {site.founded}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-display-xl text-ivory-light font-light leading-[1.05] text-balance max-w-4xl">
              Operationally grounded.
              <span className="block italic text-gold-soft font-light">
                Editorially reframed.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-ivory/85 text-lg leading-relaxed">
              A licensed Colombian tourism operator continuously active in
              Bogotá and Colombia since {site.founded}. We are opening a
              private hospitality and concierge ecosystem over an operating
              engine that already moves visitors across the country every day.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <span className="eyebrow">The Two Readings</span>
              <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
                One company. Two readings.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12 space-y-6">
              <p className="prose-editorial">
                To the affluent traveler arriving in Bogotá, Alpha Tours reads
                as a private hospitality and concierge platform — curated
                gastronomy, executive concierge, hidden Bogotá, luxury day
                escapes, and editorial sequencing of Colombia beyond the
                capital. One named concierge holds the entire arc.
              </p>
              <p className="prose-editorial">
                To the hotel, advisor, executive office, or lifestyle curator,
                Alpha Tours reads as a discreet ground partner for Colombia —
                hospitality-coded, relationship-led, operationally consistent.
                Concierge-to-concierge protocol. Confidentiality is the
                default. Commercial structures are private.
              </p>
              <p className="prose-editorial">
                The two readings are delivered by the same engine: a
                continuously operating Colombian tourism platform with twelve
                years of relationships across restaurants, hotels, drivers,
                guides, and venues. The hospitality layer is editorial. The
                infrastructure is real.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-section bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            <FadeIn className="lg:col-span-5">
              <span className="eyebrow">The Operational Foundation</span>
              <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
                Twelve years. RNT {site.rnt}.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12 space-y-5">
              <p className="prose-editorial">
                Alpha Tours Bogotá S.A.S. is a licensed Colombian tourism
                operator under National Tourism Registry (RNT) 36691, NIT{" "}
                {site.nit}. Continuous operation under the same brand and
                registry since {site.founded}.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 pt-4 border-t border-stone/50">
                <div>
                  <p className="eyebrow">RNT</p>
                  <p className="font-serif text-emerald text-xl">{site.rnt}</p>
                </div>
                <div>
                  <p className="eyebrow">NIT</p>
                  <p className="font-serif text-emerald text-xl">{site.nit}</p>
                </div>
                <div>
                  <p className="eyebrow">Languages</p>
                  <p className="font-serif text-emerald text-base leading-tight">
                    {site.languages}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Response</p>
                  <p className="font-serif text-emerald text-base leading-tight">
                    24 / 7
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {operationalPillars.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.03}>
                <div className="bg-ivory-light p-8 h-full flex flex-col gap-3">
                  <span className="font-serif text-gold text-xl italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-serif text-emerald leading-tight tracking-tight">
                    {p.label}
                  </h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed mt-auto">
                    {p.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section atmosphere-emerald text-ivory-light relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-gold-soft">The Editorial Layer</span>
              <h2 className="text-display-lg text-ivory-light text-balance leading-[1.08]">
                Seven collections. One concierge. A private notebook.
              </h2>
              <p className="text-ivory/80 leading-relaxed max-w-prose">
                Over the operational engine sits an editorial collection —
                Tables of Bogotá, The Cocktail Hours, The Coffee Sessions, The
                Executive Concierge, Hidden Bogotá, Luxury Day Escapes, and
                Curated Colombia — written, sequenced, and held by a single
                named concierge. It reads like a private hospitality
                magazine, because that is the standard the work is meant to
                meet.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5 space-y-4">
              <Link
                href="/collections"
                className="block border border-gold/40 hover:border-gold p-8 transition-colors duration-500 ease-editorial"
              >
                <p className="eyebrow text-gold-soft">Read</p>
                <p className="mt-3 font-serif text-2xl text-ivory-light leading-tight">
                  The Seven Collections →
                </p>
              </Link>
              <Link
                href="/partners"
                className="block border border-gold/40 hover:border-gold p-8 transition-colors duration-500 ease-editorial"
              >
                <p className="eyebrow text-gold-soft">For Partners</p>
                <p className="mt-3 font-serif text-2xl text-ivory-light leading-tight">
                  The Partner Network →
                </p>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-section atmosphere-stone relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl space-y-8">
            <span className="eyebrow">A Conversation</span>
            <h2 className="text-display-lg text-emerald text-balance leading-[1.08]">
              Begin with the concierge.
            </h2>
            <p className="prose-editorial">
              Whether you are an affluent traveler reading this from a hotel
              suite, an advisor planning a Colombia itinerary, or a hotel
              concierge looking for a working ground partner — the entry point
              is the same. A named human, a quiet first reply, a curated next
              step.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <WhatsAppCTA />
              <Link
                href="/contact"
                className="text-emerald hover:text-gold text-sm uppercase tracking-widest transition-colors"
              >
                Private inquiry form →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
