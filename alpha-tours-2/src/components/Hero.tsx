import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[94vh] flex items-end atmosphere-night overflow-hidden">
      <div className="grain absolute inset-0 z-0" aria-hidden />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,153,104,0.25) 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="absolute top-0 left-6 sm:left-8 lg:left-12 h-full w-px bg-ivory/15"
      />
      <div
        aria-hidden
        className="absolute top-0 right-6 sm:right-8 lg:right-12 h-full w-px bg-ivory/15"
      />

      <Container className="relative z-10 pb-24 lg:pb-32 pt-44">
        <div className="max-w-4xl space-y-10">
          <FadeIn>
            <span className="eyebrow text-gold-soft">
              Bogotá · Colombia · By introduction · Since {site.founded}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-display-xl text-ivory-light font-light leading-[1.04] text-balance">
              A private hospitality
              <br className="hidden sm:block" />
              <span className="italic text-gold-soft font-light">
                layer for Bogotá
              </span>{" "}
              &amp; Colombia.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-ivory/85 max-w-2xl text-lg leading-relaxed">
              A concierge-orchestrated ecosystem of curated gastronomy, executive
              hospitality, hidden Bogotá, and luxury day escapes — built on
              twelve years of Colombian operational infrastructure, hotel
              partnerships, and a vetted supplier network. One named concierge.
              One operational standard.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
              <WhatsAppCTA variant="ivory" />
              <Link
                href="#collections"
                className="text-ivory/75 hover:text-gold-soft text-sm uppercase tracking-widest transition-colors border-b border-ivory/20 hover:border-gold-soft pb-1"
              >
                Explore the Collections →
              </Link>
              <Link
                href="/partners"
                className="text-gold-soft hover:text-ivory-light text-sm uppercase tracking-widest transition-colors border-b border-gold-soft/40 hover:border-ivory-light pb-1"
              >
                For Partners →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="pt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-3xl border-t border-ivory/15">
              <div className="pt-6">
                <p className="eyebrow text-gold-soft">Authority</p>
                <p className="mt-2 font-serif text-ivory-light text-base lg:text-lg leading-tight">
                  RNT {site.rnt}
                </p>
              </div>
              <div className="pt-6">
                <p className="eyebrow text-gold-soft">Continuity</p>
                <p className="mt-2 font-serif text-ivory-light text-base lg:text-lg leading-tight">
                  {site.yearsActive} years
                </p>
              </div>
              <div className="pt-6">
                <p className="eyebrow text-gold-soft">Response</p>
                <p className="mt-2 font-serif text-ivory-light text-base lg:text-lg leading-tight">
                  24 / 7
                </p>
              </div>
              <div className="pt-6">
                <p className="eyebrow text-gold-soft">Languages</p>
                <p className="mt-2 font-serif text-ivory-light text-base lg:text-lg leading-tight">
                  ES · EN · PT · FR
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
