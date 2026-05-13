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

const SLUG = "tables-of-bogota";

export const metadata: Metadata = {
  title: "Tables of Bogotá — The Gastronomy Collection",
  description:
    "An editorially curated arc through Bogotá's most considered tables — El Chato, Harry Sasson, Selma, Pajares Salinas, OSK, and the chef houses that define the city's contemporary gastronomy.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function TablesOfBogotaPage() {
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
    about: items.map((e) => ({
      "@type": "TouristTrip",
      name: e.title,
      description: e.essence,
    })),
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
            <span className="eyebrow">The Experiences</span>
            <h2 className="mt-4 text-display-md text-emerald text-balance">
              Five readings of the same city.
            </h2>
            <div className="editorial-rule mt-6" />
            <p className="prose-editorial mt-6">
              Each table is anchored on a named chef, a named room, and a
              specific concierge protocol. Sequences are curated end-to-end.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
            {items.map((e, i) => (
              <FadeIn key={e.id} delay={i * 0.05}>
                <ExperienceCard experience={e} variant={e.signature ? "featured" : "default"} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section atmosphere-stone relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="eyebrow">A note on access</span>
            <p className="mt-6 font-serif text-display-md text-emerald text-balance leading-[1.2]">
              We don&apos;t publish prices or tables on a checkout page. We
              begin with a private conversation, then send a curated proposal.
            </p>
            <div className="editorial-rule mt-8" />
            <div className="mt-8">
              <WhatsAppCTA
                message="Hello — I'd like to begin a conversation about Tables of Bogotá."
              />
            </div>
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
