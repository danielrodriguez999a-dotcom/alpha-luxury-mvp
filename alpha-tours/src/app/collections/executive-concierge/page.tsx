import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Container } from "@/components/Container";
import { CollectionHero } from "@/components/CollectionHero";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FadeIn } from "@/components/FadeIn";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getCollection } from "@/lib/collections";
import { experiencesByCollection } from "@/lib/experiences";
import { site } from "@/lib/site";

const SLUG = "executive-concierge";

export const metadata: Metadata = {
  title: "The Executive Concierge — Bogotá for Visiting Principals",
  description:
    "Single-day envelopes, multi-day boardroom programmes, and executive dinners for visiting principals — orchestrated end-to-end by a named concierge.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function ExecutiveConciergePage() {
  const collection = getCollection(SLUG);
  if (!collection) return notFound();
  const items = experiencesByCollection(SLUG);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.name,
    description: collection.essence,
    url: `${site.url}/collections/${SLUG}`,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };

  return (
    <>
      <CollectionHero
        roman={collection.roman}
        name={collection.name}
        essence={collection.essence}
        description={collection.description}
        anchorLine={collection.anchorLine}
      />

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">For Visiting Executives</span>
              <h2 className="mt-4 text-display-md text-emerald text-balance">
                One named concierge. One arc. No transitions you have to manage.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12 space-y-6">
              <p className="prose-editorial">
                Built on long-trusted private transport, hospitality
                relationships, and table availability at the city&apos;s most
                considered houses. The brief is simple — your time is recovered
                from the moment we meet you.
              </p>
              <p className="prose-editorial">
                Suited to short Bogotá legs, executive entertaining, and
                multi-day corporate delegations. Confidentiality is the
                default.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
            {items.map((e, i) => (
              <FadeIn key={e.id} delay={i * 0.05}>
                <ExperienceCard
                  experience={e}
                  variant={e.signature ? "featured" : "default"}
                />
              </FadeIn>
            ))}
          </div>

          <div className="mt-20">
            <WhatsAppCTA
              message="Hello — I'd like to begin a conversation about an executive visit to Bogotá."
            />
          </div>
        </Container>
      </section>

      <Script
        id={`${SLUG}-jsonld`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
