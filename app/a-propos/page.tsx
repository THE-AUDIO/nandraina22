import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Method } from "@/components/sections/Method";
import { Strengths } from "@/components/sections/Strengths";
import { Positioning } from "@/components/sections/Positioning";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — Nandraina | Méthode, Atouts & Positionnement",
  description:
    "Découvrez la méthode de travail, les forces et le positionnement de THE Audio Nandraina : développeur Full Stack & DevOps orienté resultats et communication.",
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
  openGraph: {
    title: "À propos — Nandraina",
    description:
      "Méthode, atouts et positionnement de THE Audio Nandraina, développeur Full Stack & DevOps.",
    url: `${SITE_URL}/a-propos`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">À propos de Nandraina — Méthode, atouts & positionnement</h1>
        <Method />
        <Strengths />
        <Positioning />
        <SoftSkills />
      </main>
      <Footer />
    </>
  );
}
