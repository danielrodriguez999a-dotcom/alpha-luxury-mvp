import { notFound } from "next/navigation";
import Script from "next/script";
import { Container } from "./Container";
import { CollectionHero } from "./CollectionHero";
import { ExperienceCard } from "./ExperienceCard";
import { FadeIn } from "./FadeIn";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { getCollection } from "@/lib/collections";
import { experiencesByCollection } from "@/lib/experiences";
import { site } from "@/lib/site";

type Props = { slug: string };

export function CollectionView({ slug }: Props) {
  const collection = getCollection(slug);
  if (!collection) return notFound();
  const items = experiencesByCollection(slug);
  const bookable = items.filter((e) => !e.phaseB);
  const phaseB = items.filter((e) => e.phaseB);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.name,
    description: collection.essence,
    url: `${site.url}/collections/${slug}`,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    about: bookable.map((e) => ({
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
        atmosphere={collection.atmosphere}
        conciergeMessage={collection.conciergeMessage}
      />

      {bookable.length > 0 && (
        <section className="py-section bg-ivory-light">
          <Container>
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">{collection.pageEyebrow}</span>
              <h2 className="mt-4 text-display-md text-emerald text-balance">
                {collection.pageHeadline}
              </h2>
              <div className="editorial-rule mt-6" />
              <p className="prose-editorial mt-6">{collection.pageLede}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
              {bookable.map((e, i) => (
                <FadeIn key={e.id} delay={i * 0.05}>
                  <ExperienceCard
                    experience={e}
                    variant={e.signature ? "featured" : "default"}
                  />
                </FadeIn>
              ))}
            </div>

            <div className="mt-20">
              <WhatsAppCTA message={collection.conciergeMessage} />
            </div>
          </Container>
        </section>
      )}

      {phaseB.length > 0 && (
        <section className="py-section atmosphere-stone relative overflow-hidden">
          <div className="grain absolute inset-0" aria-hidden />
          <Container className="relative">
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">Editorial Roadmap</span>
              <h2 className="mt-4 text-display-md text-emerald text-balance">
                Chapters in development.
              </h2>
              <div className="editorial-rule mt-6" />
              <p className="prose-editorial mt-6">
                These chapters are on the editorial roadmap. They are not yet
                bookable as curated products — supplier depth is being built. The
                concierge can arrange introductions on request.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-px bg-stone/60 border border-stone/60">
              {phaseB.map((e, i) => (
                <FadeIn key={e.id} delay={i * 0.05}>
                  <article className="bg-ivory-warm p-10 h-full flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                      <span className="eyebrow">{e.category}</span>
                      <span className="text-xs italic font-serif text-gold">
                        Phase B
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-emerald leading-tight tracking-tight">
                      {e.title}
                    </h3>
                    <p className="text-charcoal/80 text-[0.95rem] leading-relaxed">
                      {e.essence}
                    </p>
                    <p className="mt-auto pt-4 text-xs italic font-serif text-muted">
                      {e.anchors.join(" · ")}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Script
        id={`${slug}-jsonld`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
