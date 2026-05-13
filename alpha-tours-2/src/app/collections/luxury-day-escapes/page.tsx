import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "luxury-day-escapes";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — The Savanna and the Cordillera`,
  description:
    "Zipaquirá, Guatavita, Chingaza, La Chorrera — single curated days out of Bogotá, narrated editorially and orchestrated end-to-end.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
