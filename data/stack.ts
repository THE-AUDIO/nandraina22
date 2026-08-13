export type StackCategory =
  | "Frontend"
  | "Backend"
  | "DevOps & CI/CD"
  | "Data & IA"
  | "Bases de données";

export interface StackGroup {
  id: string;
  /** Libellé éditorial affiché dans la liste interactive (brief §8). */
  label: string;
  /** Technologies détaillées du groupe (panneau de prévisualisation). */
  items: string[];
  note: string;
}

export interface StackSection {
  title: string;
  subtitle: string;
  question: string;
  groups: StackGroup[];
}

/** Contenu du marquee infini (brief §5). */
export const marqueeItems: string[] = [
  "Angular",
  "Spring Boot",
  "FastAPI",
  "Python",
  "Java",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "Helm",
  "GitHub Actions",
  "CI/CD",
  "PostgreSQL",
  "MySQL",
  "scikit-learn",
  "Matplotlib",
  "Ansible",
];

export const stackSection: StackSection = {
  title: "Une stack pensée pour aller du prototype à la production",
  subtitle:
    "De l'interface utilisateur à l'infrastructure, je couvre l'ensemble de la chaîne.",
  question: "Sur quoi voulez-vous échanger ?",
  groups: [
    {
      id: "angular",
      label: "Angular",
      items: ["Angular", "TypeScript", "RxJS"],
      note: "Interfaces typées, réactives, testables.",
    },
    {
      id: "spring-boot",
      label: "Spring Boot",
      items: ["Spring Boot", "Java", "Spring Security"],
      note: "APIs back-end robustes et structurées.",
    },
    {
      id: "fastapi",
      label: "FastAPI",
      items: ["FastAPI", "Python", "Pydantic", "OpenAPI"],
      note: "APIs Python rapides, autodocumentées.",
    },
    {
      id: "langages",
      label: "Python / Java / TypeScript",
      items: ["Python", "Java", "TypeScript"],
      note: "Mes langages de production, du script à l'application.",
    },
    {
      id: "docker-k8s",
      label: "Docker & Kubernetes",
      items: ["Docker", "Kubernetes", "Helm"],
      note: "Conteneurisation et orchestration sans friction.",
    },
    {
      id: "cicd",
      label: "CI/CD & GitHub Actions",
      items: ["GitHub Actions", "SonarQube", "Ansible"],
      note: "Qualité, tests et déploiement automatisés.",
    },
    {
      id: "bdd",
      label: "PostgreSQL / MySQL",
      items: ["PostgreSQL", "MySQL", "Citus"],
      note: "SQL, modélisation et PostgreSQL distribué.",
    },
    {
      id: "ia-llm",
      label: "IA & LLM appliqués au dev",
      items: ["scikit-learn", "Matplotlib", "seaborn", "RAG", "LLM"],
      note: "Données, visualisation et génération assistée.",
    },
  ],
};
