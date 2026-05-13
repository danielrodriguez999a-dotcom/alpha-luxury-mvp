export type Experience = {
  id: string;
  collectionSlug: string;
  title: string;
  essence: string;
  format: string;
  audience: string;
  anchors: string[];
  signature?: boolean;
  category: "Signature" | "Evening" | "Day" | "Programme" | "Editorial preview";
  phaseB?: boolean;
};

export const experiences: Experience[] = [
  // ─────────────────────────────────────────
  // Collection I — Tables of Bogotá
  // ─────────────────────────────────────────
  {
    id: "tables-three-night",
    collectionSlug: "tables-of-bogota",
    title: "Tables of Bogotá — A Three-Night Sequence",
    essence:
      "Three curated dinners across three nights — contemporary Colombian, chef institution, ingredient-led private. Each evening sequenced and briefed by concierge.",
    format: "Three nights · dinners · transfers included",
    audience: "Couples · small parties of 2–4",
    anchors: ["El Chato", "Harry Sasson", "Selma"],
    signature: true,
    category: "Signature",
  },
  {
    id: "evening-with-clavijo",
    collectionSlug: "tables-of-bogota",
    title: "An Evening with Álvaro Clavijo",
    essence:
      "A tasting menu at El Chato — Bogotá's most internationally recognized table — extended with a digestif at Afluente or Café Bar Universal.",
    format: "Single evening · 3–4 hours",
    audience: "Gastronomy-focused premium guests",
    anchors: ["El Chato", "Afluente"],
    signature: true,
    category: "Signature",
  },
  {
    id: "harry-sasson-house",
    collectionSlug: "tables-of-bogota",
    title: "Harry Sasson — A Chef in His House",
    essence:
      "Dinner at Harry Sasson framed as a visit to a chef institution — Pacific and Caribbean Colombian seafood, in the architecture that has defined fine dining in Bogotá for two decades.",
    format: "Single evening · 3 hours",
    audience: "Premium leisure · executive guests · first-night arrivals",
    anchors: ["Harry Sasson"],
    category: "Evening",
  },
  {
    id: "iberian-conversation",
    collectionSlug: "tables-of-bogota",
    title: "The Iberian Conversation — Pajares Salinas",
    essence:
      "A long lunch or early dinner at Bogotá's living Iberian institution — wine flights, classical service, and a Zona G afternoon to follow.",
    format: "3–4 hours · lunch or early evening",
    audience: "European visitors · Spanish-speaking executives",
    anchors: ["Pajares Salinas"],
    category: "Evening",
  },
  {
    id: "paloquemao-cook",
    collectionSlug: "tables-of-bogota",
    title: "Paloquemao Reframed — Through a Cook's Eyes",
    essence:
      "An editorial morning at Bogotá's central market with a working cook as guide. Andean, Caribbean, and Amazonian tastings, narrated as ingredient stories rather than sample plates.",
    format: "5 hours · morning · closes with coffee",
    audience: "First-morning-in-Bogotá · gastronomy-curious guests",
    anchors: ["Paloquemao market"],
    signature: true,
    category: "Signature",
  },

  // ─────────────────────────────────────────
  // Collection II — The Cocktail Hours
  // ─────────────────────────────────────────
  {
    id: "cocktail-notebook",
    collectionSlug: "cocktail-hours",
    title: "The Cocktail Notebook — A Three-Bar Evening",
    essence:
      "A sequenced evening across three of Bogotá's most considered bars — an aperitif at Café Bar Universal, small plates at Afluente, a wine close at Cava de Leo.",
    format: "Single evening · 3.5 hours · private transfers",
    audience: "Sophisticated couples · nightlife without a club",
    anchors: ["Café Bar Universal", "Afluente", "Cava de Leo"],
    signature: true,
    category: "Signature",
  },
  {
    id: "afluente-opening",
    collectionSlug: "cocktail-hours",
    title: "Afluente — A Quiet Opening",
    essence:
      "A first-night arrival drink and small-plates session at Afluente — the brand's gentle welcome to the city.",
    format: "Single evening · 1.5–2 hours",
    audience: "Arriving guests · pre-dinner pairings",
    anchors: ["Afluente"],
    category: "Evening",
  },
  {
    id: "universal-classic",
    collectionSlug: "cocktail-hours",
    title: "Café Bar Universal — A Bogotá Classic",
    essence:
      "The city's reference cocktail bar, treated as an editorial opening or close to a dinner.",
    format: "1.5 hours",
    audience: "Cocktail-curious guests",
    anchors: ["Café Bar Universal"],
    category: "Evening",
  },
  {
    id: "bogota-after-dark",
    collectionSlug: "cocktail-hours",
    title: "Bogotá After Dark",
    essence:
      "A nocturnal reading of the city — International Center, the panoramic at Monserrate, Plaza Bolívar — closing at a curated cocktail bar rather than a dining recommendation.",
    format: "5 hours · evening · private transport",
    audience: "Premium leisure travelers",
    anchors: ["Café Bar Universal", "Afluente"],
    signature: true,
    category: "Signature",
  },

  // ─────────────────────────────────────────
  // Collection III — The Coffee Sessions
  // ─────────────────────────────────────────
  {
    id: "afternoon-hacienda",
    collectionSlug: "coffee-sessions",
    title: "An Afternoon at the Hacienda",
    essence:
      "A traditional hacienda in Fusagasugá — orchid garden, plantations, the artisanal process, a premium tasting and coffee liqueur close. The day reframed editorially; the operational fulfillment unchanged.",
    format: "6 hours · daytime · private transport",
    audience: "Coffee-curious premium guests · multigenerational",
    anchors: ["Fusagasugá hacienda", "Orchid garden"],
    category: "Day",
  },
  {
    id: "bogota-coffee-sessions",
    collectionSlug: "coffee-sessions",
    title: "The Bogotá Coffee Sessions — A Morning of Specialty",
    essence:
      "A morning across two or three of Bogotá's specialty roasters and cafés — barista-led tastings, conversation with roasters, comparison of single origins.",
    format: "3 hours · morning",
    audience: "Coffee enthusiasts · short-stay guests",
    anchors: ["Bogotá specialty roasters"],
    category: "Day",
  },

  // ─────────────────────────────────────────
  // Collection IV — The Executive Concierge
  // ─────────────────────────────────────────
  {
    id: "executive-day",
    collectionSlug: "executive-concierge",
    title: "The Executive Day",
    essence:
      "A complete day envelope for a visiting executive — airport meet, working block with secure standby, lunch at Pajares Salinas or OSK, meeting transport, closing dinner, next-morning return. One named concierge holds the entire arc.",
    format: "12–18 hours · single named concierge",
    audience: "Visiting executives · short Bogotá legs",
    anchors: ["Pajares Salinas", "Harry Sasson", "El Chato"],
    signature: true,
    category: "Signature",
  },
  {
    id: "executive-dinner",
    collectionSlug: "executive-concierge",
    title: "The Executive Dinner",
    essence:
      "A single executive dinner orchestrated end-to-end — car at hotel, table at a named anchor, after-dinner cocktail, return. For visiting executives entertaining counterparts.",
    format: "4–5 hours",
    audience: "Executive entertaining · senior corporate guests",
    anchors: ["Harry Sasson", "El Chato", "Café Bar Universal"],
    category: "Evening",
  },
  {
    id: "boardroom-programme",
    collectionSlug: "executive-concierge",
    title: "The Boardroom Programme",
    essence:
      "Multi-day orchestration for corporate delegations — meet-and-assist, transport, sequenced dinners at named anchors, a cultural day-escape, return logistics. Sold as a programme, not as tours.",
    format: "2–4 days",
    audience: "Corporate delegations · investor groups · family offices",
    anchors: ["Full anchor network", "Luxury transport", "Zipaquirá"],
    category: "Programme",
  },

  // ─────────────────────────────────────────
  // Collection V — Hidden Bogotá
  // ─────────────────────────────────────────
  {
    id: "private-kitchens",
    collectionSlug: "hidden-bogota",
    title: "Private Kitchens of Bogotá",
    essence:
      "A single private dining evening — a chef supper club, a host residence, a hidden kitchen — selected by concierge based on guest profile. By introduction only.",
    format: "Single evening · 3.5 hours",
    audience: "Repeat or second-visit guests · cultural curators",
    anchors: ["Private dining hosts", "Selma private rooms"],
    category: "Evening",
  },
  {
    id: "other-bogota",
    collectionSlug: "hidden-bogota",
    title: "The Other Bogotá — Chapinero, Quinta Camacho, the 93",
    essence:
      "A reading of the modern neighborhoods most travelers never see — named buildings, named cafés, named ateliers. Curated by a guide who lives in them.",
    format: "5 hours · private transport",
    audience: "Second-day-in-Bogotá guests · design-curious travelers",
    anchors: ["Chapinero", "Quinta Camacho", "Parque 93", "Usaquén"],
    category: "Day",
  },
  {
    id: "women-for-women",
    collectionSlug: "hidden-bogota",
    title: "By Women, For Women — A Bogotá Reading",
    essence:
      "A women-led editorial reading of the city — local female guides, named women chefs and hosts where relevant, a route that emphasizes a woman's experience of Bogotá. Quietly powerful.",
    format: "5 hours · private",
    audience: "Solo female travelers · female executive groups · mother-daughter",
    anchors: ["Female guides", "Women-led venues"],
    category: "Day",
  },
  {
    id: "candelaria-foot",
    collectionSlug: "hidden-bogota",
    title: "Candelaria on Foot — A Quiet Reading",
    essence:
      "The historic heart of Bogotá walked slowly — Plaza Bolívar, the colonial streets, Chorro de Quevedo — ending with a specialty coffee stop. The first morning of a stay, paced editorially.",
    format: "4 hours · morning · walking",
    audience: "Arrival morning · cultural travelers",
    anchors: ["La Candelaria", "Plaza Bolívar", "Chorro de Quevedo"],
    category: "Day",
  },

  // ─────────────────────────────────────────
  // Collection VI — Luxury Day Escapes
  // ─────────────────────────────────────────
  {
    id: "salt-cathedral",
    collectionSlug: "luxury-day-escapes",
    title: "The Salt Cathedral — A Subterranean Reading",
    essence:
      "Zipaquirá's underground cathedral, narrated as architecture and history rather than as a stop on a route. Editorial pre-trip note. Named lunch partner. Private transport.",
    format: "5 hours · private transport",
    audience: "First-time-Colombia guests · heritage travelers",
    anchors: ["Zipaquirá Salt Cathedral"],
    signature: true,
    category: "Signature",
  },
  {
    id: "salt-sacred-lagoon",
    collectionSlug: "luxury-day-escapes",
    title: "The Salt and the Sacred Lagoon",
    essence:
      "Zipaquirá and Guatavita read as a single editorial chapter on the Muisca world and Spanish overlay — narrative coherence and concierge curation on a day most operators sell as a route.",
    format: "7 hours · private",
    audience: "Cultural travelers · second-day-in-Bogotá",
    anchors: ["Salt Cathedral", "Guatavita Lagoon"],
    category: "Day",
  },
  {
    id: "savanna-three-towns",
    collectionSlug: "luxury-day-escapes",
    title: "The Savanna in Three Towns",
    essence:
      "La Calera, Guatavita, and Sesquilé read as a single reading of the Bogotá savanna — Muisca traces, sailing on Lake Tominé, a curated lunch.",
    format: "6 hours · private",
    audience: "Repeat guests · nature-leaning travelers",
    anchors: ["La Calera", "Guatavita", "Sesquilé"],
    category: "Day",
  },
  {
    id: "paramo-chingaza",
    collectionSlug: "luxury-day-escapes",
    title: "Páramo — An Andean Ascent",
    essence:
      "Chingaza's páramo and Siecha lagoon, walked slowly in altitude. Gear briefed, recovery planned. A reflective day in some of the most fragile high-Andean ecosystem on earth.",
    format: "7 hours · active · private",
    audience: "Active premium travelers · altitude-comfortable",
    anchors: ["Chingaza national park", "Siecha lagoon"],
    category: "Day",
  },
  {
    id: "falls-cordillera",
    collectionSlug: "luxury-day-escapes",
    title: "Falls of the Cordillera",
    essence:
      "El Chiflón and La Chorrera — Colombia's highest waterfall — read cinematically. Active morning, named lunch on the return.",
    format: "7 hours · active · private",
    audience: "Nature-leaning premium travelers · couples",
    anchors: ["La Chorrera natural park"],
    category: "Day",
  },
  {
    id: "sacred-lagoon",
    collectionSlug: "luxury-day-escapes",
    title: "The Sacred Lagoon",
    essence:
      "Guatavita standalone — a short cultural pilgrimage to the lake of the Muisca, opened by a coffee tasting and closed with a curated lunch.",
    format: "5 hours · private",
    audience: "Short-stay guests · cultural travelers",
    anchors: ["Guatavita town", "Sacred lagoon"],
    category: "Day",
  },

  // ─────────────────────────────────────────
  // Collection VII — Curated Colombia
  // ─────────────────────────────────────────
  {
    id: "villa-de-leyva",
    collectionSlug: "curated-colombia",
    title: "Villa de Leyva — A Day in Colonial Light",
    essence:
      "Villa de Leyva and Ráquira — colonial architecture, ceramics, paleontology, chocolate. A full day, narrated as a single editorial chapter on colonial Colombia.",
    format: "12 hours · full day · private transport",
    audience: "Cultural travelers · second-week-in-Colombia",
    anchors: ["Villa de Leyva", "Ráquira", "Chocolate Museum"],
    signature: true,
    category: "Signature",
  },
  {
    id: "cartagena-preview",
    collectionSlug: "curated-colombia",
    title: "Cartagena",
    essence:
      "The walled city, the coastal kitchens, the Caribbean light. An editorial roadmap to a future chapter of Curated Colombia — the supplier network is being assembled.",
    format: "Editorial preview · not bookable yet",
    audience: "Reserved for Phase B",
    anchors: ["Walled city", "Coastal gastronomy"],
    phaseB: true,
    category: "Editorial preview",
  },
  {
    id: "medellin-preview",
    collectionSlug: "curated-colombia",
    title: "Medellín",
    essence:
      "Chefs, design, Comuna 13 read editorially. A chapter in development; concierge introductions can be arranged on request.",
    format: "Editorial preview · not bookable yet",
    audience: "Reserved for Phase B",
    anchors: ["El Cielo", "Design district"],
    phaseB: true,
    category: "Editorial preview",
  },
  {
    id: "coffee-triangle-preview",
    collectionSlug: "curated-colombia",
    title: "The Coffee Triangle",
    essence:
      "Estate stays, cupping with growers, the cultural depth of Colombia's quietest region. The next chapter after Bogotá.",
    format: "Editorial preview · not bookable yet",
    audience: "Reserved for Phase B",
    anchors: ["Estate stays", "Cupping with growers"],
    phaseB: true,
    category: "Editorial preview",
  },
];

export const signatureExperiences = experiences.filter((e) => e.signature);
export const experiencesByCollection = (slug: string) =>
  experiences.filter((e) => e.collectionSlug === slug);
