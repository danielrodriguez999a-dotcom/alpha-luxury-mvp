import type { Metadata } from "next";
import { CollectionView } from "@/components/CollectionView";
import { getCollection } from "@/lib/collections";
import { site } from "@/lib/site";

const SLUG = "executive-concierge";
const c = getCollection(SLUG)!;

export const metadata: Metadata = {
  title: `${c.name} — Bogotá for Visiting Principals`,
  description:
    "Single-day envelopes, multi-day boardroom programmes, and executive dinners for visiting principals — orchestrated end-to-end by a named concierge.",
  alternates: { canonical: `${site.url}/collections/${SLUG}` },
};

export default function Page() {
  return <CollectionView slug={SLUG} />;
}
