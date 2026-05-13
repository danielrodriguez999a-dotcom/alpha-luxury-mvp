import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { notebookEntries } from "@/lib/notebook";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Notebook — Editorial Gastronomy and Hospitality",
  description:
    "Chef profiles, hidden kitchens, neighborhoods read editorially. Bogotá's gastronomy, written with the care of a magazine.",
  alternates: { canonical: `${site.url}/notebook` },
};

export default function NotebookPage() {
  return (
    <>
      <section className="atmosphere-emerald text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="The Notebook"
            title="Bogotá's gastronomy, written editorially."
            description="An editorial platform of chef profiles, hidden kitchens, ingredient stories, and neighborhood readings. Published the way a magazine publishes — with named subjects, named writers, and a regular cadence."
            light
          />
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {notebookEntries.map((entry, i) => (
              <FadeIn key={entry.slug} delay={i * 0.05}>
                <article className="bg-ivory-light p-10 h-full flex flex-col gap-5">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow">{entry.kicker}</span>
                    <span className="text-xs text-muted italic">
                      {entry.readingMinutes} min
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-emerald leading-tight tracking-tight text-balance">
                    {entry.title}
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    {entry.excerpt}
                  </p>
                  <div className="mt-auto pt-4 text-xs uppercase tracking-widest text-muted">
                    {entry.category}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <p className="mt-20 text-center text-muted italic font-serif text-lg">
            New entries are published twice a month.
          </p>
        </Container>
      </section>
    </>
  );
}
