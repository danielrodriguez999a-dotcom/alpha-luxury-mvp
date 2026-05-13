import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { collections } from "@/lib/collections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Seven Collections",
  description:
    "Seven editorial collections — Tables of Bogotá, The Cocktail Hours, The Coffee Sessions, The Executive Concierge, Hidden Bogotá, Luxury Day Escapes, Curated Colombia.",
  alternates: { canonical: `${site.url}/collections` },
};

export default function CollectionsIndexPage() {
  return (
    <>
      <section className="atmosphere-emerald text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="The Architecture"
            title="The Seven Collections"
            description="Seven editorial territories that organize the city, the country, and the work of the concierge. Gastronomy at the center; hospitality and orchestration as the connective tissue."
            light
          />
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="space-y-px bg-stone/40">
            {collections.map((c, i) => {
              const inner = (
                <article className="group relative bg-ivory-light p-8 lg:p-12 transition-colors duration-500 ease-editorial hover:bg-ivory-warm grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1 font-serif text-3xl text-gold italic">
                    {c.roman}
                  </div>
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-2xl lg:text-3xl text-emerald tracking-tight">
                        {c.name}
                      </h3>
                      <span className="eyebrow">
                        {c.available ? "Open" : "Phase B"}
                      </span>
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">
                      {c.essence}
                    </p>
                  </div>
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-muted italic font-serif text-[0.95rem]">
                      {c.anchorLine}
                    </p>
                  </div>
                  <div className="lg:col-span-1 lg:text-right">
                    {c.available && (
                      <span className="text-emerald group-hover:text-gold transition-colors duration-500">
                        →
                      </span>
                    )}
                  </div>
                </article>
              );
              return (
                <FadeIn key={c.slug} delay={i * 0.04}>
                  {c.available ? (
                    <Link href={`/collections/${c.slug}`} className="block">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
