import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "cocktail-hours";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — Bogotá After Dark`,
  description:
    "An evening discipline across Bogotá's most considered bars — Café Bar Universal, Afluente, Cava de Leo — paced and paired by concierge.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
