import Link from "next/link";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { collections } from "@/lib/collections";

export function CollectionsGrid() {
  return (
    <section id="collections" className="relative py-section bg-ivory">
      <Container>
        <div className="max-w-2xl mb-16">
          <SectionHeading
            eyebrow="The Architecture"
            title="Seven Collections"
            description="The world organized as seven editorial territories — gastronomy at the center, hospitality and concierge orchestration as the connective tissue."
          />
        </div>

        <div className="grid gap-px bg-stone/40 border border-stone/40">
          {collections.map((c, i) => {
            const inner = (
              <article
                className="group relative bg-ivory-light p-8 lg:p-10 transition-colors duration-500 ease-editorial hover:bg-ivory-warm flex flex-col gap-5 h-full"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-gold text-2xl italic tracking-wide">
                    {c.roman}
                  </span>
                  <span className="eyebrow">
                    {c.available ? "Open" : "Phase B"}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-[1.7rem] font-serif text-emerald leading-tight tracking-tight">
                  {c.name}
                </h3>
                <p className="text-charcoal/75 text-[0.95rem] leading-relaxed">
                  {c.essence}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs">
                  <span className="text-muted italic">{c.anchorLine.split(" · ").slice(0, 3).join(" · ")}</span>
                  {c.available && (
                    <span className="uppercase tracking-widest text-emerald group-hover:text-gold transition-colors duration-500">
                      Read →
                    </span>
                  )}
                </div>
              </article>
            );
            return (
              <FadeIn key={c.slug} delay={i * 0.05}>
                {c.available ? (
                  <Link href={`/collections/${c.slug}`} className="block h-full">
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
  );
}
