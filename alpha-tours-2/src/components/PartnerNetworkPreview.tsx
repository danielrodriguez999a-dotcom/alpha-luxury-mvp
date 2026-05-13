import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { FadeIn } from "./FadeIn";
import { partnerCategories } from "@/lib/partners";
import { defaultPartnerMessage } from "@/lib/site";

export function PartnerNetworkPreview() {
  return (
    <section className="relative py-section atmosphere-emerald text-ivory-light overflow-hidden">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-gold-soft">For Partners</span>
            <h2 className="mt-4 text-display-lg text-ivory-light text-balance leading-[1.08]">
              A private hospitality distribution layer for Colombia.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12 space-y-5">
            <p className="text-ivory/85 leading-relaxed text-[1.05rem] max-w-xl">
              Not a marketplace. Not an affiliate scheme. A private,
              relationship-led network of hotels, advisors, executive offices,
              and lifestyle curators who route their clients through a single
              concierge into Bogotá and Colombia.
            </p>
            <p className="text-ivory/60 text-sm italic font-serif max-w-xl">
              Onboarded by introduction. Named coordinator per relationship.
              Commercial structures arranged once the partnership is approved.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
          {partnerCategories.map((t, i) => (
            <FadeIn key={t.slug} delay={i * 0.04}>
              <div className="atmosphere-night p-8 h-full flex flex-col gap-3 relative">
                <div
                  className="grain absolute inset-0 pointer-events-none"
                  aria-hidden
                />
                <div className="relative flex items-baseline justify-between">
                  <span className="font-serif text-gold-soft text-xl italic">
                    {t.roman}
                  </span>
                  <span className="eyebrow text-gold-soft">By introduction</span>
                </div>
                <h3 className="relative text-xl font-serif text-ivory-light leading-tight tracking-tight">
                  {t.title}
                </h3>
                <p className="relative text-ivory/75 text-sm leading-relaxed">
                  {t.essence}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-6">
            <WhatsAppCTA
              variant="ivory"
              label="Open a partnership conversation"
              message={defaultPartnerMessage}
            />
            <Link
              href="/partners"
              className="text-gold-soft hover:text-ivory-light text-sm uppercase tracking-widest transition-colors border-b border-gold-soft/40 hover:border-ivory-light pb-1"
            >
              The Partner Network →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
