import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projets — Nandraina | Applications Web & DevOps",
  description:
    "Découvrez les projets de THE Audio Nandraina : applications web full stack, outils internes, automatisations et intégration d'IA. Angular, Spring Boot, FastAPI, Docker, Kubernetes.",
  alternates: {
    canonical: `${SITE_URL}/projets`,
  },
  openGraph: {
    title: "Projets — Nandraina",
    description:
      "Applications web full stack, outils internes et intégration d'IA par THE Audio Nandraina.",
    url: `${SITE_URL}/projets`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function ProjetsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
