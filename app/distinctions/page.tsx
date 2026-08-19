import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Distinctions } from "@/components/sections/Distinctions";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Distinctions — Nandraina | Récompenses & Certifications",
  description:
    "Distinctions, récompenses et certifications de THE Audio Nandraina : développeur Full Stack & DevOps reconnu pour ses compétences en architecture et déploiement.",
  alternates: {
    canonical: `${SITE_URL}/distinctions`,
  },
  openGraph: {
    title: "Distinctions — Nandraina",
    description:
      "Récompenses et certifications de THE Audio Nandraina, développeur Full Stack & DevOps.",
    url: `${SITE_URL}/distinctions`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function DistinctionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Distinctions />
      </main>
      <Footer />
    </>
  );
}
