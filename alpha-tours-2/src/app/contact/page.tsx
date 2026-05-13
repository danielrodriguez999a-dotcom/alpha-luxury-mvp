import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Inquiry — Alpha Tours Concierge",
  description:
    "Open a private conversation with the Alpha Tours concierge. WhatsApp, email, or a confidential inquiry form. A named human responds within one working day.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="atmosphere-night text-ivory-light pt-44 pb-section-sm relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <Container className="relative">
          <FadeIn>
            <span className="eyebrow text-gold-soft">A Private Conversation</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-display-xl text-ivory-light font-light leading-[1.05] text-balance max-w-4xl">
              Begin with a quiet message.
              <span className="block italic text-gold-soft font-light">
                A named human replies.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-ivory/85 text-lg leading-relaxed">
              Three routes to the concierge — WhatsApp, email, or a private
              inquiry form. Each route reaches a named coordinator. The first
              reply follows within one working day, referencing a specific
              table, neighborhood, or evening relevant to your visit.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section bg-ivory-light">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-5 space-y-10">
              <div>
                <span className="eyebrow">By WhatsApp</span>
                <p className="mt-3 font-serif text-2xl text-emerald leading-tight">
                  The fastest path.
                </p>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[0.95rem]">
                  A named coordinator replies, by introduction, with a
                  specific reference.
                </p>
                <div className="mt-5">
                  <WhatsAppCTA />
                </div>
                <p className="mt-3 text-muted text-sm">
                  {site.whatsappNumber}
                </p>
              </div>

              <div>
                <span className="eyebrow">By Email</span>
                <p className="mt-3 font-serif text-2xl text-emerald leading-tight">
                  The most considered path.
                </p>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[0.95rem]">
                  Reach a coordinator with the time to draft a private
                  proposal in response.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline mt-5 inline-block text-emerald font-serif text-lg"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <span className="eyebrow">By Introduction</span>
                <p className="mt-3 font-serif text-2xl text-emerald leading-tight">
                  Through your hotel.
                </p>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[0.95rem]">
                  If you are staying at a partnered Bogotá hotel, the
                  concierge desk can introduce you directly. Specify the
                  coordinator named in this conversation.
                </p>
              </div>

              <div className="border-t border-stone/50 pt-6">
                <span className="eyebrow">Operational Authority</span>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {site.legalName}
                  <br />
                  RNT {site.rnt} · NIT {site.nit}
                  <br />
                  {site.city}, {site.country}
                  <br />
                  {site.languages}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="border border-stone/40 bg-ivory p-8 lg:p-10">
                <span className="eyebrow">Private Inquiry Form</span>
                <h2 className="mt-3 text-display-md text-emerald text-balance leading-[1.12]">
                  A confidential message.
                </h2>
                <p className="mt-4 text-charcoal/80 leading-relaxed text-[0.95rem]">
                  Submitting this form opens a WhatsApp conversation with the
                  concierge using the details you provide. We do not store
                  what you write here — your message is composed and sent
                  directly from your browser.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
                <p className="mt-5 text-muted text-xs leading-relaxed">
                  Confidentiality is the default. Names, photographs, and
                  itineraries are protected unless you ask otherwise.
                </p>
              </div>

              <div className="mt-8 border border-gold/40 p-6 lg:p-8 flex flex-wrap items-center gap-5 justify-between">
                <p className="text-emerald font-serif text-lg">
                  Prefer to write outside the form?
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald hover:text-gold text-sm uppercase tracking-widest transition-colors border-b border-emerald/30 hover:border-gold pb-0.5"
                  >
                    WhatsApp →
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-emerald hover:text-gold text-sm uppercase tracking-widest transition-colors border-b border-emerald/30 hover:border-gold pb-0.5"
                  >
                    Email →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
