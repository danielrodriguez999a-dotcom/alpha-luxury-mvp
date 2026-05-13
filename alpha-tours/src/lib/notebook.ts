export type NotebookEntry = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  category: "Chef" | "Hidden kitchen" | "Ingredient" | "Neighborhood" | "Coffee";
  readingMinutes: number;
};

export const notebookEntries: NotebookEntry[] = [
  {
    slug: "alvaro-clavijo-el-chato",
    title: "Álvaro Clavijo and the Long Bogotá Sentence",
    kicker: "Chef profile",
    excerpt:
      "How a chef who trained in Copenhagen and Paris returned to Bogotá to write — slowly, table by table — the city's most internationally read culinary sentence.",
    category: "Chef",
    readingMinutes: 7,
  },
  {
    slug: "harry-sasson-house",
    title: "The House at Harry Sasson",
    kicker: "Institution",
    excerpt:
      "Two decades inside the building that taught Bogotá to read a fine dining room — and the chef who never stopped editing it.",
    category: "Chef",
    readingMinutes: 6,
  },
  {
    slug: "chapinero-after-dark",
    title: "Chapinero, After Dark",
    kicker: "Neighborhood",
    excerpt:
      "A quiet walk through the bars and gastrobars of Chapinero — Café Bar Universal, Afluente, and the addresses you only learn from people who live there.",
    category: "Neighborhood",
    readingMinutes: 5,
  },
];
