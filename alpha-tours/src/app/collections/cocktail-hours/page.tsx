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

const SLUG = "cocktail-hours";

export const metadata: Metadata = {
  title: "The Cocktail Hours — Bogotá After Dark",
  description:
    "An evening discipline across Bogotá's most considered bars — Café Bar Universal, Afluente, Cava de Leo — paced and paired by concierge.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function CocktailHoursPage() {
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
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Evenings</span>
            <h2 className="mt-4 text-display-md text-emerald text-balance">
              An evening discipline, never a crawl.
            </h2>
            <div className="editorial-rule mt-6" />
            <p className="prose-editorial mt-6">
              Bartenders briefed in advance. Tables waiting. Transfers timed.
              The pacing is what separates a curated evening from a wander.
            </p>
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
              message="Hello — I'd like to begin a conversation about an evening in Bogotá."
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
