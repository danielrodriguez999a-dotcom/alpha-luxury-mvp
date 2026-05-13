import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HospitalityAuthority } from "@/components/HospitalityAuthority";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { SignatureExperiences } from "@/components/SignatureExperiences";
import { OperationalCredibility } from "@/components/OperationalCredibility";
import { GastronomyAnchors } from "@/components/GastronomyAnchors";
import { HotelPartnerships } from "@/components/HotelPartnerships";
import { ConciergeBlock } from "@/components/ConciergeBlock";
import { PartnerNetworkPreview } from "@/components/PartnerNetworkPreview";
import { NotebookPreview } from "@/components/NotebookPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Luxury Hospitality in Bogotá & Colombia`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — Luxury Hospitality in Bogotá & Colombia`,
    description: site.description,
    url: site.url,
  },
};

// Homepage prioritization per FINAL strategic alignment:
//   1. Hero (hospitality positioning)
//   2. Hospitality authority statement
//   3. Operational credibility (the engine)
//   4. The seven collections
//   5. Bogotá gastronomy authority (anchors)
//   6. Signature experiences
//   7. Hotel partnerships (concierge-to-concierge)
//   8. Partner network ecosystem
//   9. Concierge orchestration
//  10. Editorial notebook

export default function HomePage() {
  return (
    <>
      <Hero />
      <HospitalityAuthority />
      <OperationalCredibility />
      <CollectionsGrid />
      <GastronomyAnchors />
      <SignatureExperiences />
      <HotelPartnerships />
      <PartnerNetworkPreview />
      <ConciergeBlock />
      <NotebookPreview />
    </>
  );
}
