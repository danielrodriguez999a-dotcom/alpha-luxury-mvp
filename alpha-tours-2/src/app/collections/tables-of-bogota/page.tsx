import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "tables-of-bogota";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — The Gastronomy Collection`,
  description:
    "An editorially curated arc through Bogotá's most considered tables — El Chato, Harry Sasson, Selma, Pajares Salinas, OSK, and the chef houses that define the city's contemporary gastronomy.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
