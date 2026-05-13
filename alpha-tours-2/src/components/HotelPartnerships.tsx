import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { hotelTracks } from "@/lib/partners";

export function HotelPartnerships() {
  return (
    <section className="relative py-section bg-ivory-light">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow">Concierge-to-Concierge</span>
            <h2 className="mt-4 text-display-lg text-emerald text-balance leading-[1.08]">
              A working protocol with Bogotá&apos;s hotels.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-12 space-y-5">
            <p className="prose-editorial">
              When your guest asks for the best table tonight, the right car
              for an early flight, or the only way to read Zipaquirá and
              Guatavita on a single day — there is one named contact, one
              operational arc, one hospitality standard. The guest experience
              reflects on your property; our job is to make sure it reflects
              well.
            </p>
            <p className="text-muted italic font-serif text-[0.95rem]">
              Hotel pickup and door-to-door drop-off included on every
              confirmed experience.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-stone/40 border border-stone/40">
          {hotelTracks.map((track, i) => (
            <FadeIn key={track.name} delay={i * 0.04}>
              <article className="bg-ivory-light p-8 lg:p-10 h-full flex flex-col gap-4">
                <span className="font-serif text-gold text-xl italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl lg:text-2xl font-serif text-emerald leading-tight tracking-tight">
                  {track.name}
                </h3>
                <p className="text-charcoal/80 text-[0.95rem] leading-relaxed">
                  {track.detail}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <WhatsAppCTA
              label="Open a hotel partnership conversation"
              message="Hello Alpha Tours — I am writing on behalf of a Bogotá hotel concierge / front office team and would like to open a partnership conversation."
            />
            <Link
              href="/partners"
              className="text-emerald hover:text-gold text-sm uppercase tracking-widest transition-colors border-b border-emerald/30 hover:border-gold pb-1"
            >
              The Partner Network →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
