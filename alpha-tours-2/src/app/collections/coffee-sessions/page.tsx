import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "coffee-sessions";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — Coffee, Read Slowly`,
  description:
    "A traditional hacienda afternoon, or a morning across Bogotá's specialty roasters. Colombian coffee narrated as cultural inheritance.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
