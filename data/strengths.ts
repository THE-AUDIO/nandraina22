export type StrengthTone = "indigo" | "emerald" | "amber" | "rose";

export interface Strength {
  id: string;
  icon: string;
  title: string;
  description: string;
  tone: StrengthTone;
}

export interface StrengthsSection {
  title: string;
  intro: string;
  items: Strength[];
}

export const strengthsSection: StrengthsSection = {
  title: "Mes domaines de force",
  intro: "Ce que je pratique au quotidien, du code à l'infrastructure.",
  items: [
    {
      id: "fullstack",
      icon: "Layers",
      title: "Développement Full Stack",
      description:
        "Angular, TypeScript, React, Next.js côté frontend. Spring Boot (Java) et FastAPI (Python) côté backend. APIs REST, bases de données PostgreSQL et MySQL, du premier wireframe au déploiement.",
      tone: "indigo",
    },
    {
      id: "devops",
      icon: "Container",
      title: "DevOps & Conteneurisation",
      description:
        "Docker, Kubernetes, Helm pour la conteneurisation. GitHub Actions et Ansible pour les pipelines CI/CD. SonarQube pour la qualité de code. Je déploie en staging puis en production de façon automatisée.",
      tone: "emerald",
    },
    {
      id: "data-ia",
      icon: "BrainCircuit",
      title: "Data & IA",
      description:
        "scikit-learn, Matplotlib pour l'analyse de données. LangChain, RAG et LLM pour l'intégration d'IA dans des produits réels — comme FeoSync (génération de contenu) et un assistant documentaire.",
      tone: "amber",
    },
    {
      id: "uxui",
      icon: "MousePointerClick",
      title: "UX/UI centré utilisateur",
      description:
        "Interfaces Angular et React pensées pour l'usage réel. Conception d'APIs documentées (OpenAPI/FastAPI) et de dashboards intuitifs (suivi d'activités chez Connecteo).",
      tone: "rose",
    },
  ],
};
