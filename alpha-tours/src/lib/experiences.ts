export type Experience = {
  id: string;
  collectionSlug: string;
  title: string;
  essence: string;
  format: string;
  audience: string;
  anchors: string[];
  signature?: boolean;
  category: "Signature" | "Evening" | "Day" | "Programme";
};

export const experiences: Experience[] = [
  // Collection I — Tables of Bogotá
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

  // Collection II — The Cocktail Hours
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
      "A first-night arrival drink and small-plates session at Afluente — the brand's gentle welcome to the city. Often paired with a Tables of Bogotá dinner the following evening.",
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
    format: "5 hours · evening",
    audience: "Premium leisure travelers",
    anchors: ["Café Bar Universal", "Afluente"],
    category: "Evening",
  },

  // Collection IV — Executive Concierge
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
];

export const signatureExperiences = experiences.filter((e) => e.signature);
export const experiencesByCollection = (slug: string) =>
  experiences.filter((e) => e.collectionSlug === slug);
