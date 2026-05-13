"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/site";

type Persona = "Traveler" | "Hotel" | "Advisor" | "Executive" | "Corporate" | "Press / Editorial";

const personas: Persona[] = [
  "Traveler",
  "Hotel",
  "Advisor",
  "Executive",
  "Corporate",
  "Press / Editorial",
];

// Confidential inquiry form. Composes a WhatsApp message client-side.
// We do not POST the form anywhere — the entire flow stays in the browser.
export function ContactForm() {
  const [persona, setPersona] = useState<Persona>("Traveler");
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [dates, setDates] = useState("");
  const [party, setParty] = useState("");
  const [interest, setInterest] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "Hello Alpha Tours Concierge —",
      "",
      `Persona · ${persona}`,
      name ? `Name · ${name}` : null,
      origin ? `Travelling from · ${origin}` : null,
      dates ? `Indicative dates · ${dates}` : null,
      party ? `Party · ${party}` : null,
      interest ? `Primary interest · ${interest}` : null,
      "",
      notes ? `Notes ·\n${notes}` : null,
      "",
      "I would like to begin a private conversation.",
    ].filter(Boolean) as string[];
    const message = lines.join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full bg-ivory-light border border-stone/50 px-4 py-3 text-charcoal placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors duration-300";
  const labelBase = "block text-xs uppercase tracking-widest text-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelBase} htmlFor="persona">
          You are writing as
        </label>
        <div id="persona" className="flex flex-wrap gap-2">
          {personas.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPersona(p)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors duration-300 ${
                persona === p
                  ? "border-emerald bg-emerald text-ivory-light"
                  : "border-stone/60 text-charcoal/75 hover:border-emerald hover:text-emerald"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelBase} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputBase}
            placeholder="As you would like to be addressed"
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelBase} htmlFor="origin">
            Travelling from
          </label>
          <input
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className={inputBase}
            placeholder="City of origin"
          />
        </div>
        <div>
          <label className={labelBase} htmlFor="dates">
            Indicative dates
          </label>
          <input
            id="dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className={inputBase}
            placeholder="Flexible / specific window"
          />
        </div>
        <div>
          <label className={labelBase} htmlFor="party">
            Party
          </label>
          <input
            id="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className={inputBase}
            placeholder="Couple · family · delegation"
          />
        </div>
      </div>

      <div>
        <label className={labelBase} htmlFor="interest">
          Primary interest
        </label>
        <input
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputBase}
          placeholder="Gastronomy · Executive · Day-escape · Bogotá in full"
        />
      </div>

      <div>
        <label className={labelBase} htmlFor="notes">
          A note to the concierge
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputBase} min-h-[140px] resize-y`}
          placeholder="What would make this visit feel curated to you."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-editorial px-7 py-4 border border-gold/60 text-emerald bg-ivory-light hover:bg-emerald hover:text-ivory-light hover:border-emerald"
        >
          <span>Open the conversation on WhatsApp</span>
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}
