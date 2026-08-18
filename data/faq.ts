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
      "Applications web full stack avec Angular ou React/Next.js en frontend, Spring Boot (Java) ou FastAPI (Python) en backend. Je développe aussi des outils et dashboards internes, des automatisations et j'intègre de l'IA (RAG, génération de contenu). Côté infrastructure, je mets en place des pipelines CI/CD avec Docker, Kubernetes, GitHub Actions et Ansible.",
  },
  {
    id: "disponibilite",
    question: "Es-tu disponible en stage, alternance ou freelance ?",
    answer:
      "Oui, les trois formats. Je suis en dernière année de Licence Informatique à l'ISPM à Antananarivo, donc les stages et l'alternance sont compatibles avec mon calendrier. Je prends aussi des missions freelance ciblées — j'ai déjà travaillé en freelance chez NextRocket.",
  },
  {
    id: "equipe",
    question: "Travailles-tu seul ou en équipe ?",
    answer:
      "Les deux. J'ai travaillé en équipe en stage (Connecteo, RanDevTeam), seul en freelance (NextRocket) et en collectif lors de hackathons (Stupid Hackathon 2025, DevFest 2024). Dans tous les cas j'utilise Git, je fais des revues de code et je communique clairement sur l'avancement.",
  },
  {
    id: "deploiement",
    question: "Peux-tu gérer le déploiement en plus du développement ?",
    answer:
      "C'est mon point fort. Docker pour la conteneurisation, Kubernetes et Helm pour l'orchestration, GitHub Actions pour les pipelines CI/CD, Ansible pour le déploiement automatisé, SonarQube pour la qualité de code. Mon mémoire de fin d'études porte justement sur un PoC de pipeline CI/CD staging/production.",
  },
  {
    id: "ia",
    question: "Utilises-tu l'IA dans ton travail, et comment ?",
    answer:
      "Au quotidien : accélération de code, génération de squelettes, revue et documentation. En produit : j'ai intégré la génération de contenu IA dans FeoSync (SaaS) et développé un assistant RAG documentaire avec FastAPI et LangChain pour répondre en langage naturel aux questions d'exploitation.",
  },
];
