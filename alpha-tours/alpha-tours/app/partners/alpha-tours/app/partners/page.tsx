export default function PartnersPage()
  import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const partners = [
  "Harry Sasson",
  "El Chato",
  "Selma",
  "OSK",
  "Pajares Salinas",
  "La Tavola Rustica",
  "Casa",
  "Don Costilla",
  "La Biferia",
  "Kumito Tei",
  "Afluente",
  "Cafe Bar Universal",
  "Cava de Leo",
  "Andrés Carne de Res",
];

export default function PartnersPage() {
  return (
    <main className="bg-ivory-light min-h-screen pt-40 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Hospitality Network"
          title="Named partners across Bogotá."
          description="A curated network of gastronomy, cocktail, hospitality, transport, and concierge partners layered on top of the existing Alpha Tours operational infrastructure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="border border-stone/40 bg-white p-8 rounded-sm"
            >
              <h3 className="text-2xl font-serif text-emerald">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-stone pt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
            Affiliate & Concierge Network
          </p>

          <p className="mt-4 text-lg text-charcoal/80 max-w-3xl leading-relaxed">
            The affiliate structure combines hotel concierge referrals,
            hospitality relationships, private client introductions,
            executive transport coordination, and gastronomy sequencing
            under a unified editorial framework.
          </p>

          <a
            href={site.whatsapp}
            target="_blank"
            className="inline-block mt-8 bg-emerald text-white px-6 py-4"
          >
            Speak with the Concierge
          </a>
        </div>
      </Container>
    </main>
  );
}
