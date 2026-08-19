import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { Socials } from "@/components/sections/Socials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Nandraina | Me Contacter pour Vos Projets",
  description:
    "Contactez THE Audio Nandraina pour vos projets web full stack, DevOps ou IA. Disponible en stage, alternance et freelance à Antananarivo, Madagascar.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact — Nandraina",
    description:
      "Contactez THE Audio Nandraina pour vos projets web full stack, DevOps ou IA.",
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">Contact — Me contacter pour vos projets</h1>
        <Socials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
