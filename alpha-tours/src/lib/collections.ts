export type Collection = {
  slug: string;
  roman: string;
  name: string;
  essence: string;
  description: string;
  anchorLine: string;
  available: boolean; // MVP routes that are wired in v1
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
  },
  {
    slug: "cocktail-hours",
    roman: "II",
    name: "The Cocktail Hours",
    essence:
      "An evening discipline: bars, mixology, wine, Colombian botanicals, the city after dark.",
    description:
      "A quiet sequence across the city's serious bars — paced, paired, and concierge-mediated. Never a crawl; always a programme.",
    anchorLine: "Café Bar Universal · Afluente · Cava de Leo",
    available: true,
  },
  {
    slug: "coffee-sessions",
    roman: "III",
    name: "The Coffee Sessions",
    essence:
      "Specialty coffee, origin stories, traditional haciendas, the cultural ritual of Colombian coffee.",
    description:
      "An afternoon at the hacienda. A morning across Bogotá's roasters. Coffee as Colombia's most quiet cultural inheritance.",
    anchorLine: "Bogotá specialty roasters · Fusagasugá hacienda",
    available: false,
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
  },
  {
    slug: "hidden-bogota",
    roman: "V",
    name: "Hidden Bogotá",
    essence:
      "The Bogotá that doesn't appear in the guidebook — private dining hosts, ateliers, residential neighborhoods, cultural insiders.",
    description:
      "By introduction. Private kitchens. Neighborhoods read editorially. The version of the city only its residents know.",
    anchorLine: "Private dining hosts · Chapinero · Quinta Camacho · Usaquén",
    available: false,
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
    available: false,
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
    available: false,
  },
];

export const getCollection = (slug: string) =>
  collections.find((c) => c.slug === slug);
