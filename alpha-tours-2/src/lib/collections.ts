export type Collection = {
  slug: string;
  roman: string;
  name: string;
  essence: string;
  description: string;
  anchorLine: string;
  available: boolean;
  // Per-collection page editorial copy
  pageEyebrow: string;
  pageHeadline: string;
  pageLede: string;
  // Visual atmosphere variant for the hero
  atmosphere: "emerald" | "night" | "stone";
  // Concierge prefilled message for collection-specific enquiries
  conciergeMessage: string;
};

export const collections: Collection[] = [
  {
    slug: "tables-of-bogota",
    roman: "I",
    name: "Tables of Bogotá",
    essence:
      "The gastronomy collection — chef tables, hidden kitchens, ingredient stories, the editorial heart of the brand.",
    description:
      "An editorially curated arc through Bogotá's most considered tables. Sequenced by concierge, anchored on named chefs, briefed in advance.",
    anchorLine:
      "El Chato · Harry Sasson · Selma · Pajares Salinas · OSK · La Tavola Rustica · Casa · Kumito Tei",
    available: true,
    pageEyebrow: "The Experiences",
    pageHeadline: "Five readings of the same city.",
    pageLede:
      "Each table is anchored on a named chef, a named room, and a specific concierge protocol. Sequences are curated end-to-end.",
    atmosphere: "night",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about Tables of Bogotá.",
  },
  {
    slug: "cocktail-hours",
    roman: "II",
    name: "The Cocktail Hours",
    essence:
      "An evening discipline: bars, mixology, wine, Colombian botanicals, the city after dark.",
    description:
      "A quiet sequence across the city's serious bars — paced, paired, and concierge-mediated. Never a crawl; always a programme.",
    anchorLine: "Café Bar Universal · Afluente · Cava de Leo · Bogotá After Dark",
    available: true,
    pageEyebrow: "The Evenings",
    pageHeadline: "An evening discipline, never a crawl.",
    pageLede:
      "Bartenders briefed in advance. Tables waiting. Transfers timed. The pacing is what separates a curated evening from a wander.",
    atmosphere: "night",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about an evening in Bogotá.",
  },
  {
    slug: "coffee-sessions",
    roman: "III",
    name: "The Coffee Sessions",
    essence:
      "Specialty coffee, origin stories, traditional haciendas, the cultural ritual of Colombian coffee.",
    description:
      "An afternoon at the hacienda. A morning across Bogotá's roasters. Coffee as Colombia's most quiet cultural inheritance.",
    anchorLine: "Fusagasugá hacienda · Bogotá specialty roasters · Origin tastings",
    available: true,
    pageEyebrow: "The Origin Country",
    pageHeadline: "Coffee, read slowly.",
    pageLede:
      "Two ways to read Colombia's most quiet cultural inheritance — a curated afternoon at a traditional hacienda, or a morning across the city's specialty roasters.",
    atmosphere: "stone",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about a coffee experience in Colombia.",
  },
  {
    slug: "executive-concierge",
    roman: "IV",
    name: "The Executive Concierge",
    essence:
      "For visiting executives, corporate groups, and time-poor principals — recovery, work, dining, and the right table on the right night.",
    description:
      "A single named concierge holds the entire arc — from airport meet-and-assist to closing dinner. Built on long-trusted transport and hospitality infrastructure.",
    anchorLine: "Luxury transport · Pajares Salinas · Harry Sasson · El Chato",
    available: true,
    pageEyebrow: "For Visiting Executives",
    pageHeadline: "One named concierge. One arc. No transitions you have to manage.",
    pageLede:
      "Built on long-trusted private transport and hospitality relationships. Suited to short Bogotá legs, executive entertaining, and multi-day corporate delegations. Confidentiality is the default.",
    atmosphere: "emerald",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about an executive visit to Bogotá.",
  },
  {
    slug: "hidden-bogota",
    roman: "V",
    name: "Hidden Bogotá",
    essence:
      "The Bogotá that doesn't appear in the guidebook — private dining hosts, ateliers, residential neighborhoods, cultural insiders.",
    description:
      "By introduction. Private kitchens. Neighborhoods read editorially. The version of the city only its residents know.",
    anchorLine:
      "Private dining hosts · Chapinero · Quinta Camacho · Usaquén · La Candelaria",
    available: true,
    pageEyebrow: "The Other City",
    pageHeadline: "The Bogotá the guidebook never reaches.",
    pageLede:
      "Private kitchens. Neighborhoods read editorially. Walks paced by a host who lives there. The version of the city most travelers leave without seeing.",
    atmosphere: "stone",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about Hidden Bogotá.",
  },
  {
    slug: "luxury-day-escapes",
    roman: "VI",
    name: "Luxury Day Escapes",
    essence:
      "The Savanna and Cordillera reframed: heritage, water, altitude, and Andean light — all bookable as single luxury days.",
    description:
      "Zipaquirá. Guatavita. Chingaza. La Chorrera. The day-escapes you already know about — rewritten with editorial intent.",
    anchorLine: "Zipaquirá · Guatavita · La Calera · Chingaza · La Chorrera",
    available: true,
    pageEyebrow: "Out of the City",
    pageHeadline: "Andean light. Sacred water. A single curated day.",
    pageLede:
      "Day-escapes built on long-trusted private transport, professional guidance, and operational know-how. Editorially reframed. Concierge-paced.",
    atmosphere: "emerald",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about a day escape near Bogotá.",
  },
  {
    slug: "curated-colombia",
    roman: "VII",
    name: "Curated Colombia",
    essence:
      "Extensions beyond Bogotá: Cartagena, Medellín, the Coffee Triangle, treated as editorial chapters rather than packages.",
    description:
      "Villa de Leyva today. Cartagena, Medellín, and the Coffee Triangle as Phase B chapters — added when demand and supplier depth align.",
    anchorLine: "Villa de Leyva · Cartagena · Medellín · Coffee Triangle",
    available: true,
    pageEyebrow: "Beyond Bogotá",
    pageHeadline: "Colombia, read as chapters.",
    pageLede:
      "Villa de Leyva is bookable today. Cartagena, Medellín, and the Coffee Triangle are on the editorial roadmap — added to the catalog as the supplier network deepens.",
    atmosphere: "night",
    conciergeMessage:
      "Hello Alpha Tours Concierge — I would like to begin a conversation about a Colombia itinerary beyond Bogotá.",
  },
];

export const getCollection = (slug: string) =>
  collections.find((c) => c.slug === slug);
