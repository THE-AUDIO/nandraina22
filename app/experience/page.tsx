import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Experiences } from "@/components/sections/Experiences";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Expérience — Nandraina | Parcours Développeur Full Stack & DevOps",
  description:
    "Parcours professionnel et académique de THE Audio Nandraina : développeur full stack & DevOps, Licence Informatique ISPM, projets en Angular, Spring Boot, FastAPI.",
  alternates: {
    canonical: `${SITE_URL}/experience`,
  },
  openGraph: {
    title: "Expérience — Nandraina",
    description:
      "Parcours professionnel et académique de THE Audio Nandraina, développeur Full Stack & DevOps.",
    url: `${SITE_URL}/experience`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">Expérience de Nandraina — Parcours développeur Full Stack & DevOps</h1>
        <Experiences />
        <Education />
      </main>
      <Footer />
    </>
  );
}
