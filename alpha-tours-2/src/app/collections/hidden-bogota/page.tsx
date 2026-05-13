import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "hidden-bogota";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — The Other City`,
  description:
    "Private kitchens. Neighborhoods read editorially. The Bogotá the guidebook never reaches — by introduction.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
