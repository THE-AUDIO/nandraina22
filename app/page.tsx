import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStack } from "@/components/sections/MarqueeStack";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stack } from "@/components/sections/Stack";
import { Method } from "@/components/sections/Method";
import { Strengths } from "@/components/sections/Strengths";
import { Distinctions } from "@/components/sections/Distinctions";
import { Experiences } from "@/components/sections/Experiences";
import { Education } from "@/components/sections/Education";
import { Positioning } from "@/components/sections/Positioning";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Socials } from "@/components/sections/Socials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects";

const SITE_URL = "https://nandraina.dev";

const projectJsonLd = projects
  .filter((p) => p.featured)
  .map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    author: {
      "@type": "Person",
      name: "THE Audio Nandraina",
      url: SITE_URL,
    },
    dateCreated: project.year,
    technologyUsed: project.stack,
    keywords: project.stack.join(", "),
    url: `${SITE_URL}/#work`,
  }));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel type de projet peux-tu prendre en charge ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applications web full stack (Angular / React, Spring Boot, FastAPI), outils et dashboards internes, automatisations et intégration d'IA (RAG, génération de contenu), ainsi que la mise en place de pipelines CI/CD et de déploiement conteneurisé.",
      },
    },
    {
      "@type": "Question",
      name: "Es-tu disponible en stage, alternance ou freelance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les trois formats m'intéressent. Je suis actuellement en dernière année de Licence à l'ISPM, donc les stages et l'alternance cadrent avec mon calendrier, et je prends aussi des missions freelance ciblées.",
      },
    },
    {
      "@type": "Question",
      name: "Peux-tu gérer le déploiement en plus du développement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est précisément là que je me distingue : Docker, Kubernetes, Helm, GitHub Actions et Ansible font partie de ma stack. Je peux livrer du code et le déployer en staging puis en production, avec un pipeline de qualité (SonarQube, tests).",
      },
    },
    {
      "@type": "Question",
      name: "Utilises-tu l'IA dans ton travail, et comment ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, au quotidien : accélération sur les tâches répétitives, génération de squelettes de code, revue de code et documentation. Et en produit : j'ai intégré de la génération de contenu IA (FeoSync) et un assistant RAG sur de la documentation d'infrastructure.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {projectJsonLd.map((schema, i) => (
        <script
          key={`project-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <SmoothScroll>
        <main>
          <Hero />
          <MarqueeStack />
          <Portfolio />
          <Stack />
          <Method />
          <Strengths />
          <Distinctions />
          <Experiences />
          <Education />
          <Positioning />
          <SoftSkills />
          <Socials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
