export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "type-projets",
    question: "Quel type de projet peux-tu prendre en charge ?",
    answer:
      "Applications web full stack (Angular / React, Spring Boot, FastAPI), outils et dashboards internes, automatisations et intégration d'IA (RAG, génération de contenu), ainsi que la mise en place de pipelines CI/CD et de déploiement conteneurisé.",
  },
  {
    id: "disponibilite",
    question: "Es-tu disponible en stage, alternance ou freelance ?",
    answer:
      "Oui, les trois formats m'intéressent. Je suis actuellement en dernière année de Licence à l'ISPM, donc les stages et l'alternance cadrent avec mon calendrier, et je prends aussi des missions freelance ciblées.",
  },
  {
    id: "equipe",
    question: "Travailles-tu seul ou en équipe ?",
    answer:
      "Les deux. J'ai travaillé en équipe en stage (Connecteo, RanDevTeam), seul en freelance chez NextRocket, et en binôme/collectif lors de hackathons. Je m'adapte au contexte : outillage Git, revues de code et communication claire dans tous les cas.",
  },
  {
    id: "deploiement",
    question: "Peux-tu gérer le déploiement en plus du développement ?",
    answer:
      "C'est précisément là que je me distingue : Docker, Kubernetes, Helm, GitHub Actions et Ansible font partie de ma stack. Je peux livrer du code et le déployer en staging puis en production, avec un pipeline de qualité (SonarQube, tests).",
  },
  {
    id: "ia",
    question: "Utilises-tu l'IA dans ton travail, et comment ?",
    answer:
      "Oui, au quotidien : accélération sur les tâches répétitives, génération de squelettes de code, revue de code et documentation. Et en produit : j'ai intégré de la génération de contenu IA (FeoSync) et un assistant RAG sur de la documentation d'infrastructure.",
  },
];
