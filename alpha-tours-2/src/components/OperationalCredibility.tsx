import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";
import { operationalPillars } from "@/lib/operational";

export function OperationalCredibility() {
  return (
    <section className="relative py-section bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow">The Engine Beneath</span>
            <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.1]">
              Twelve years of Colombian operational infrastructure.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12 space-y-6">
            <p className="prose-editorial">
              The editorial layer you read on this site is delivered by{" "}
              {site.legalName} — a licensed Colombian destination manager
              continuously operating in Bogotá since {site.founded}. Every
              experience is fulfilled by the same trusted platform: private
              transport, professional guides, multilingual coordination,
              insurance, and a named 24/7 concierge. We are not opening a
              hospitality layer over nothing — we are opening it over an
              operating engine that already moves visitors across Colombia
              every day.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 pt-4 border-t border-stone/50">
              <div>
                <p className="eyebrow">RNT</p>
                <p className="font-serif text-emerald text-xl">{site.rnt}</p>
              </div>
              <div>
                <p className="eyebrow">NIT</p>
                <p className="font-serif text-emerald text-xl">{site.nit}</p>
              </div>
              <div>
                <p className="eyebrow">Languages</p>
                <p className="font-serif text-emerald text-base leading-tight">
                  {site.languages}
                </p>
              </div>
              <div>
                <p className="eyebrow">Response</p>
                <p className="font-serif text-emerald text-base leading-tight">
                  {site.hours}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
          {operationalPillars.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.03}>
              <div className="bg-ivory-light p-8 h-full flex flex-col gap-3">
                <span className="font-serif text-gold text-xl italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg lg:text-xl font-serif text-emerald leading-tight tracking-tight">
                  {p.label}
                </h3>
                <p className="text-charcoal/75 text-sm leading-relaxed mt-auto">
                  {p.note}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
