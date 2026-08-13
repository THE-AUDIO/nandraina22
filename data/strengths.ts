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
        "Angular / Spring Boot / FastAPI — de l'interface au service, en passant par la donnée.",
      tone: "indigo",
    },
    {
      id: "devops",
      icon: "Container",
      title: "DevOps & Conteneurisation",
      description:
        "Docker, Kubernetes, Helm, CI/CD — industrialiser et déployer sans friction.",
      tone: "emerald",
    },
    {
      id: "data-ia",
      icon: "BrainCircuit",
      title: "Data & IA",
      description:
        "scikit-learn, Matplotlib, intégration LLM — transformer la donnée en décisions.",
      tone: "amber",
    },
    {
      id: "uxui",
      icon: "MousePointerClick",
      title: "UX/UI centré utilisateur",
      description:
        "Des interfaces pensées pour l'usage réel, validées par des principes de design.",
      tone: "rose",
    },
  ],
};
