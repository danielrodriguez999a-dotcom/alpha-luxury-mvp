import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "curated-colombia";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — Beyond Bogotá`,
  description:
    "Villa de Leyva is bookable today. Cartagena, Medellín, and the Coffee Triangle are on the editorial roadmap — added as the supplier network deepens.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
