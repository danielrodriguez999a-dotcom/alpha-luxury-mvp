import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FadeIn } from "@/components/FadeIn";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { collections } from "@/lib/collections";
import { experiencesByCollection } from "@/lib/experiences";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiences — The Full Catalog",
  description:
    "Every experience across the seven collections — Tables of Bogotá, The Cocktail Hours, The Coffee Sessions, The Executive Concierge, Hidden Bogotá, Luxury Day Escapes, Curated Colombia.",
  alternates: { canonical: `${site.url}/experiences` },
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="atmosphere-emerald text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="The Editorial Catalog"
            title="Every experience, grouped by collection."
            description="A private hospitality catalog — not an inventory page. Each experience is concierge-mediated, sequenced by collection, and anchored on named partners and operational infrastructure trusted across Colombia."
            light
          />
          <div className="mt-10">
            <WhatsAppCTA variant="ivory" />
          </div>
        </Container>
      </section>

      {collections.map((c) => {
        const items = experiencesByCollection(c.slug);
        if (items.length === 0) return null;
        const bookable = items.filter((e) => !e.phaseB);
        const phaseB = items.filter((e) => e.phaseB);
        return (
          <section key={c.slug} className="py-section bg-ivory-light border-t border-stone/40 first-of-type:border-t-0">
            <Container>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <span className="eyebrow">Collection {c.roman}</span>
                  <h2 className="mt-3 text-display-md text-emerald text-balance">
                    {c.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-charcoal/75 italic font-serif text-lg">
                    {c.essence}
                  </p>
                </div>
                <Link
                  href={`/collections/${c.slug}`}
                  className="text-emerald hover:text-gold text-sm uppercase tracking-widest transition-colors border-b border-emerald/30 hover:border-gold pb-1"
                >
                  Open the collection →
                </Link>
              </div>

              {bookable.length > 0 && (
                <div className="grid lg:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
                  {bookable.map((e, i) => (
                    <FadeIn key={e.id} delay={i * 0.04}>
                      <ExperienceCard
                        experience={e}
                        variant={e.signature ? "featured" : "default"}
                      />
                    </FadeIn>
                  ))}
                </div>
              )}

              {phaseB.length > 0 && (
                <div className="mt-10 grid md:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
                  {phaseB.map((e) => (
                    <article key={e.id} className="bg-ivory-warm p-8 h-full flex flex-col gap-3">
                      <div className="flex items-baseline justify-between">
                        <span className="eyebrow">Editorial preview</span>
                        <span className="text-xs italic font-serif text-gold">Phase B</span>
                      </div>
                      <h3 className="text-xl font-serif text-emerald leading-tight tracking-tight">
                        {e.title}
                      </h3>
                      <p className="text-charcoal/75 text-sm leading-relaxed">
                        {e.essence}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </Container>
          </section>
        );
      })}
    </>
  );
}
