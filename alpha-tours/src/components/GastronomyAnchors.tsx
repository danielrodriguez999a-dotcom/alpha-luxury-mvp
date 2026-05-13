import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { anchors } from "@/lib/anchors";

export function GastronomyAnchors() {
  return (
    <section className="relative py-section bg-ivory-light">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Houses"
              title="Anchored on names, not abstractions."
            />
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="prose-editorial">
              Every collection is anchored on real chefs, real bars, real
              rooms. Specificity is the prestige carrier — and the difference
              between curation and a brochure.
            </p>
          </div>
        </div>

        <div className="border-t border-stone/50">
          {anchors.map((a, i) => (
            <FadeIn key={a.name} delay={i * 0.02}>
              <div className="grid lg:grid-cols-12 gap-6 py-5 lg:py-6 border-b border-stone/40 items-baseline">
                <div className="lg:col-span-3">
                  <h3 className="font-serif text-xl lg:text-2xl text-emerald tracking-tight">
                    {a.name}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-charcoal text-[0.95rem]">{a.role}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-muted italic font-serif text-[0.95rem]">
                    {a.collection}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-muted text-sm leading-snug">{a.note}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
