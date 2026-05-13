export const site = {
  name: "Alpha Tours",
  legalName: "Alpha Tours Bogotá S.A.S.",
  rnt: "36691",
  nit: "900761803-7",
  domain: "alphatoursbogota.com",
  url: "https://alphatoursbogota.com",
  email: "info@alphatoursbogota.com",
  whatsappNumber: "+57 311 503 8476",
  whatsappE164: "573115038476",
  founded: 2018,
  city: "Bogotá",
  country: "Colombia",
  tagline: "An editorial luxury hospitality ecosystem in Bogotá and Colombia.",
  description:
    "A curated luxury hospitality ecosystem for affluent travelers in Bogotá and Colombia — concierge-orchestrated gastronomy, executive itineraries, and editorial experiences across the city's most refined tables, bars, and day-escapes.",
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;

export const defaultConciergeMessage =
  "Hello — I'd like to begin a private conversation with the concierge about an upcoming visit to Bogotá.";
