// The Partner Network — categories and reasoning architecture.
// Editorial, hospitality-coded. NEVER affiliate / commission-coded language.

export type PartnerCategory = {
  slug: string;
  roman: string;
  title: string;
  audience: string;
  essence: string;
  detail: string;
  workflow: string;
  cta: string;
  message: string;
};

export const partnerCategories: PartnerCategory[] = [
  {
    slug: "boutique-travel-advisors",
    roman: "I",
    title: "Boutique Travel Advisors",
    audience: "Independent advisors · members of Virtuoso, Travel Leaders, Signature, and equivalent networks",
    essence:
      "A discreet curation layer in Bogotá and Colombia for the advisors building luxury itineraries on behalf of private clients.",
    detail:
      "We hold the entire ground arc — sequenced gastronomy, executive transport, hotel coordination, day-escapes, multilingual guidance, 24/7 contact. The advisor remains the client's relationship; we are the invisible ground operator. Private commercial structures are arranged once the partnership is approved.",
    workflow:
      "Concierge-to-advisor by named contact. Proposal turnaround within 24 hours. One named coordinator per advisor relationship.",
    cta: "Open an advisor conversation",
    message:
      "Hello Alpha Tours — I am a boutique travel advisor and would like to open a private partnership conversation for Colombia itineraries.",
  },
  {
    slug: "hotel-concierge-partners",
    roman: "II",
    title: "Hotel Concierge Partners",
    audience: "Front Office and Concierge teams at Bogotá's 4★ and 5★ properties",
    essence:
      "A concierge-to-concierge protocol with the city's most considered properties. First-look access, guaranteed table windows, hospitality continuity.",
    detail:
      "When your guest asks for the best table tonight, the right car for an early flight, or the only way to see Zipaquirá and Guatavita on a single day — one named contact, one operational arc, one hospitality standard. The guest experience reflects on your property; our job is to make sure it does so well.",
    workflow:
      "Direct WhatsApp line to a named coordinator. Daily availability check-ins on request. Hotel pickup and drop-off included on every confirmed experience.",
    cta: "Open a hotel partnership conversation",
    message:
      "Hello Alpha Tours — I am writing on behalf of a Bogotá hotel concierge / front office team and would like to open a partnership conversation.",
  },
  {
    slug: "executive-assistants",
    roman: "III",
    title: "Executive Assistants & Chiefs of Staff",
    audience: "EAs and Chiefs of Staff managing principal travel into Colombia",
    essence:
      "A confidential, named-contact channel for the offices managing principal travel — short Bogotá legs, executive entertaining, multi-day delegations.",
    detail:
      "Meet-and-assist at El Dorado, secure transport, working blocks at the hotel, executive dining at named anchors (Pajares Salinas, Harry Sasson, El Chato), boardroom programmes, return logistics. Confidentiality is the default. We do not publish itineraries, photos, or guest names.",
    workflow:
      "One named coordinator. WhatsApp and email. NDA available on request. Multilingual support across Spanish, English, Portuguese, and French.",
    cta: "Open an executive office conversation",
    message:
      "Hello Alpha Tours — I am an Executive Assistant / Chief of Staff and would like to open a confidential conversation about principal travel to Colombia.",
  },
  {
    slug: "luxury-lifestyle-curators",
    roman: "IV",
    title: "Luxury Lifestyle Curators",
    audience: "Members' clubs, premium card concierge programmes, lifestyle management firms",
    essence:
      "A private ground partner in Bogotá and Colombia for lifestyle platforms whose members expect curated, confidential, hospitality-grade execution.",
    detail:
      "Editorial collections — Tables of Bogotá, the Cocktail Hours, the Executive Concierge, Hidden Bogotá, Luxury Day Escapes — mapped to your members' standards. Quiet integration. Co-branded proposals are available; concierge tone is preserved end-to-end.",
    workflow:
      "Structured introduction call. Account named in writing. Member-level service codified before activation.",
    cta: "Open a curator conversation",
    message:
      "Hello Alpha Tours — I represent a luxury lifestyle / members' platform and would like to explore a private partnership for Colombia.",
  },
  {
    slug: "corporate-hospitality-coordinators",
    roman: "V",
    title: "Corporate Hospitality Coordinators",
    audience: "Internal hospitality, events, and protocol teams at corporates and family offices",
    essence:
      "Multi-day orchestration for visiting delegations, investor groups, family offices, and corporate entertaining.",
    detail:
      "Airport meet-and-assist, secure transport, hotel coordination, sequenced dinners at named anchors, cultural day-escapes, boardroom programmes, return logistics — sold as a programme, not as tours. A single coordinator carries the entire arc.",
    workflow:
      "Pre-trip briefing call. Written programme. On-the-ground coordinator on call across every leg. Confidential post-trip debrief on request.",
    cta: "Open a corporate hospitality conversation",
    message:
      "Hello Alpha Tours — I coordinate corporate hospitality and would like to open a conversation about a visiting delegation programme in Colombia.",
  },
  {
    slug: "private-client-managers",
    roman: "VI",
    title: "Private Client Managers",
    audience: "Family offices, private banks, wealth advisors with travelling principals",
    essence:
      "A relationship-led private hospitality partner in Colombia for the offices that manage the everyday lives of principals and families.",
    detail:
      "Discretion-first execution: confidential bookings, private dining, named drivers, hotel continuity, real-time coordination across time zones. Same concierge across repeat visits. Relationship continuity is the retention engine.",
    workflow:
      "Introduction through existing relationships only. Structured handover. Concierge named for the relationship; backup named in writing.",
    cta: "Open a private client conversation",
    message:
      "Hello Alpha Tours — I am writing from a private client / family office and would like to open a confidential conversation about ground hospitality in Colombia.",
  },
];

// The "why route through Alpha" answer — five quiet reasons used on the Partners page.
export const partnerReasons = [
  {
    title: "Concierge orchestration",
    body: "Tables, transport, transfers, and timing all held by a single named coordinator. The partner is not assembling a tour; the partner is delegating an arc.",
  },
  {
    title: "One point of contact",
    body: "No supplier juggling, no language friction, no time-zone latency. One WhatsApp line, one email address, one human across the entire visit.",
  },
  {
    title: "Operational infrastructure already in place",
    body: "Twelve years operating in Colombia under RNT 36691. Vetted private transport, professional guides, insurance, hospitality liability — already in place before the first booking.",
  },
  {
    title: "Vetted supplier ecosystem",
    body: "Named chefs, named bars, named hotels, named drivers, named guides. Each anchor is in a working relationship, not a marketplace.",
  },
  {
    title: "Hospitality consistency",
    body: "The same standard across executive entertaining, private dining, weekend day-escapes, and editorial gastronomy sequences. The partner's reputation is protected by the consistency of ours.",
  },
  {
    title: "Relationship continuity",
    body: "Same coordinator across repeat visits. Returning clients are read by the same human — preferences, allergies, hotel choice, table preference — across years rather than reservations.",
  },
];

export type HotelPartnership = {
  name: string;
  detail: string;
};

// Indicative hotel partnership categories — named generically until commercial relationships are formalized.
export const hotelTracks: HotelPartnership[] = [
  {
    name: "The 5★ in the 93 / Chicó axis",
    detail:
      "First-look table windows at El Chato and Harry Sasson. Direct concierge-to-concierge WhatsApp line.",
  },
  {
    name: "Heritage and boutique houses in Quinta Camacho",
    detail:
      "Editorial neighborhood readings, private dining introductions, day-escape orchestration on a single named coordinator.",
  },
  {
    name: "International luxury flags in Bogotá",
    detail:
      "Executive transport, multilingual airport meet-and-assist, corporate hospitality programmes for incoming delegations.",
  },
  {
    name: "Boutique houses in Usaquén and the historic axis",
    detail:
      "Editorial sequencing of La Candelaria and Usaquén for inbound cultural travelers.",
  },
];
