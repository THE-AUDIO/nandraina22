import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Stack } from "@/components/sections/Stack";
import { MarqueeStack } from "@/components/sections/MarqueeStack";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compétences — Nandraina | Stack Technique Full Stack & DevOps",
  description:
    "Stack technique de THE Audio Nandraina : Angular, React, Spring Boot, FastAPI, Docker, Kubernetes, GitHub Actions, Ansible, PostgreSQL et IA/LLM.",
  alternates: {
    canonical: `${SITE_URL}/competences`,
  },
  openGraph: {
    title: "Compétences — Nandraina",
    description:
      "Stack technique Full Stack & DevOps : Angular, Spring Boot, FastAPI, Docker, Kubernetes, CI/CD et IA.",
    url: `${SITE_URL}/competences`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function CompetencesPage() {
  return (
    <>
      <Navbar />
      <main>
        <MarqueeStack />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
