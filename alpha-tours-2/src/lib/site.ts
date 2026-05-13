export const site = {
  name: "Alpha Tours",
  legalName: "Alpha Tours Bogotá S.A.S.",
  rnt: "36691",
  nit: "900761803-7",
  domain: "alphatoursbogota.com",
  url: "https://alphatoursbogota.com",
  email: "concierge@alphatoursbogota.com",
  publicEmail: "info@alphatoursbogota.com",
  whatsappNumber: "+57 311 503 8476",
  whatsappE164: "573115038476",
  // 12+ years of continuous operation in Colombia under RNT 36691.
  founded: 2013,
  yearsActive: "12+",
  city: "Bogotá",
  country: "Colombia",
  languages: "Español · English · Português · Français",
  hours: "24 / 7 concierge response",
  tagline:
    "A private hospitality layer connecting Colombia's operational tourism infrastructure with Bogotá's emerging gastronomy authority — orchestrated by a single concierge.",
  description:
    "Alpha Tours is a private hospitality and concierge ecosystem in Bogotá and Colombia. Built on twelve years of operational tourism infrastructure — RNT 36691, private transport, multilingual coordination, vetted supplier network, hotel partnerships, executive hospitality capability — and layered with an editorial luxury collection of curated gastronomy, executive concierge, and day-escape experiences.",
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;

// Bare WhatsApp link (no prefilled message) — used in footers and contact pages.
export const whatsappLink = `https://wa.me/${site.whatsappE164}`;

export const defaultConciergeMessage =
  "Hello — I'd like to begin a private conversation with the concierge about an upcoming visit to Bogotá.";

export const defaultPartnerMessage =
  "Hello Alpha Tours — I represent a hospitality partner (hotel, advisory, executive office) and would like to open a private conversation about working together.";
