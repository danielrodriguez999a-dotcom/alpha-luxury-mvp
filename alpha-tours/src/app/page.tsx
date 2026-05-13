import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PositioningStatement } from "@/components/PositioningStatement";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { SignatureExperiences } from "@/components/SignatureExperiences";
import { GastronomyAnchors } from "@/components/GastronomyAnchors";
import { ConciergeBlock } from "@/components/ConciergeBlock";
import { NotebookPreview } from "@/components/NotebookPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Luxury Hospitality in Bogotá and Colombia`,
  description: site.description,
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStatement />
      <CollectionsGrid />
      <SignatureExperiences />
      <GastronomyAnchors />
      <ConciergeBlock />
      <NotebookPreview />
    </>
  );
}
