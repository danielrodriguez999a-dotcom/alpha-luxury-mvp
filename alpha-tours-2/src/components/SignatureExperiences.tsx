import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ExperienceCard } from "./ExperienceCard";
import { FadeIn } from "./FadeIn";
import { signatureExperiences } from "@/lib/experiences";

export function SignatureExperiences() {
  return (
    <section className="relative py-section atmosphere-emerald text-ivory-light">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="max-w-2xl mb-16">
          <SectionHeading
            eyebrow="The Signatures"
            title="Experiences that carry the brand"
            description="A small set of flagship experiences across the collections. Concierge-orchestrated end to end, anchored on named partners, built on long-trusted operational infrastructure."
            light
          />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
          {signatureExperiences.map((e, i) => (
            <FadeIn key={e.id} delay={i * 0.04}>
              <ExperienceCard experience={e} variant="dark" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
